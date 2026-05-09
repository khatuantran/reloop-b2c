// Post-build: produce dist-figma/ — each HTML self-contained for Figma html.to.design import.
// - Inline CSS bundle as <style> block
// - Inline images as base64 data URI
// - Inline Material Symbols Outlined font (download from Google, cache locally)
// - Strip <script> tags (Figma plugin doesn't execute JS)
// - Drop _astro/ and images/ dirs from dist-figma/ after inlining
//
// Usage: npm run build:figma  (runs `npm run build && node scripts/build-figma.mjs`)

import { readdir, readFile, writeFile, stat, rm, cp, mkdir, access } from 'node:fs/promises';
import { join, relative, dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'dist-figma');
const CACHE = join(ROOT, 'scripts', '.cache');
const FONT_CACHE = join(CACHE, 'material-symbols.woff2');

const MS_CSS_URL =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200..700,0..1,0..200&display=swap';

// ---------- Helpers ----------

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir, filter = () => true) {
  const out = [];
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...(await walk(full, filter)));
    else if (filter(full)) out.push(full);
  }
  return out;
}

const MIME = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

async function toDataURI(filePath) {
  const ext = extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';
  const buf = await readFile(filePath);
  if (ext === '.svg') {
    // SVG can be url-encoded for smaller payload
    const text = buf.toString('utf-8').replace(/\s+/g, ' ');
    return `data:${mime};utf8,${encodeURIComponent(text)}`;
  }
  return `data:${mime};base64,${buf.toString('base64')}`;
}

// Resolve a relative URL from an HTML file's location to an absolute file path inside DIST.
function resolveAsset(htmlPath, url) {
  // url is relative like "./_astro/x.css" or "../images/y.jpg"
  const fileDir = dirname(htmlPath);
  const abs = resolve(fileDir, url);
  return abs;
}

// ---------- Material Symbols font ----------

async function getMaterialSymbolsFont() {
  if (await exists(FONT_CACHE)) {
    console.log(`  font: cache hit ${relative(ROOT, FONT_CACHE)}`);
    return readFile(FONT_CACHE);
  }
  console.log('  font: fetching Google Fonts CSS...');
  const cssRes = await fetch(MS_CSS_URL, {
    headers: {
      // Pretend to be modern browser to receive woff2-variations URL
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36',
    },
  });
  if (!cssRes.ok) throw new Error(`Google Fonts CSS fetch failed: ${cssRes.status}`);
  const css = await cssRes.text();
  // Find first url(...) referencing fonts.gstatic.com
  const match = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/);
  if (!match) throw new Error('Could not find woff2 URL in Google Fonts CSS response');
  const woff2Url = match[1];
  console.log(`  font: downloading ${woff2Url}`);
  const fontRes = await fetch(woff2Url);
  if (!fontRes.ok) throw new Error(`woff2 download failed: ${fontRes.status}`);
  const buf = Buffer.from(await fontRes.arrayBuffer());
  await mkdir(CACHE, { recursive: true });
  await writeFile(FONT_CACHE, buf);
  console.log(`  font: cached ${(buf.length / 1024).toFixed(1)} KB`);
  return buf;
}

function buildFontFaceCSS(woff2Buf) {
  const b64 = woff2Buf.toString('base64');
  return `
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 100 700;
  font-display: block;
  src: url(data:font/woff2;base64,${b64}) format('woff2-variations');
}
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  font-variation-settings: 'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24;
}
`.trim();
}

// ---------- Main ----------

async function main() {
  if (!(await exists(DIST))) {
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(1);
  }

  console.log('▶ build-figma: preparing dist-figma/');
  await rm(OUT, { recursive: true, force: true });
  await cp(DIST, OUT, { recursive: true });

  console.log('▶ fetching Material Symbols font...');
  const fontBuf = await getMaterialSymbolsFont();
  const fontFaceCSS = buildFontFaceCSS(fontBuf);

  const htmlFiles = await walk(OUT, (p) => p.endsWith('.html'));
  console.log(`▶ inlining ${htmlFiles.length} HTML files...`);

  for (const htmlPath of htmlFiles) {
    let html = await readFile(htmlPath, 'utf-8');
    const before = html.length;

    // 1) Inline CSS bundle: <link rel="stylesheet" href="(...)\.css">
    html = await replaceAsync(html, /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+\.css)["'][^>]*>/g, async (match, url) => {
      // skip external (http://, https://)
      if (/^https?:\/\//.test(url)) return match;
      const abs = resolveAsset(htmlPath, url);
      try {
        const css = await readFile(abs, 'utf-8');
        return `<style data-inlined="${url}">\n${css}\n</style>`;
      } catch {
        console.warn(`    [warn] could not inline css ${url} for ${relative(OUT, htmlPath)}`);
        return match;
      }
    });

    // 2) Replace Google Fonts Material Symbols <link> with inline @font-face
    html = html.replace(
      /<link[^>]*href=["'][^"']*fonts\.googleapis\.com\/css2\?family=Material\+Symbols[^"']*["'][^>]*>/g,
      `<style data-inlined="material-symbols-font">\n${fontFaceCSS}\n</style>`
    );

    // 3) Inline images: <img src="...">
    html = await replaceAsync(html, /<img([^>]*?)\ssrc=["']([^"']+\.(?:jpg|jpeg|png|gif|webp|svg))["']([^>]*)>/gi, async (match, pre, url, post) => {
      if (/^https?:\/\//.test(url) || url.startsWith('data:')) return match;
      const abs = resolveAsset(htmlPath, url);
      try {
        const dataUri = await toDataURI(abs);
        return `<img${pre} src="${dataUri}"${post}>`;
      } catch {
        console.warn(`    [warn] could not inline img ${url} for ${relative(OUT, htmlPath)}`);
        return match;
      }
    });

    // 4) Strip <script> tags (Figma doesn't execute JS — strip to reduce file size)
    //    External: <script type="module" src="./_astro/x.js"></script>
    //    Inline: <script type="module">...</script>
    html = html
      .replace(/<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>\s*<\/script>/g, '')
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');

    await writeFile(htmlPath, html, 'utf-8');
    const after = html.length;
    const sizeKB = (after / 1024).toFixed(0);
    console.log(`  ${relative(OUT, htmlPath).padEnd(50)} ${sizeKB} KB ${after > before ? '↑' : '↓'}`);
  }

  // 5) Remove _astro/ and images/ from dist-figma/ (not needed anymore)
  for (const dir of ['_astro', 'images']) {
    const target = join(OUT, dir);
    if (await exists(target)) {
      await rm(target, { recursive: true, force: true });
      console.log(`  cleanup: removed ${dir}/`);
    }
  }

  console.log('✅ build-figma complete. dist-figma/ ready for html.to.design import.');
}

// regex async replace helper
async function replaceAsync(str, regex, asyncFn) {
  const tasks = [];
  str.replace(regex, (...args) => {
    tasks.push(asyncFn(...args));
    return '';
  });
  const results = await Promise.all(tasks);
  let i = 0;
  return str.replace(regex, () => results[i++]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
