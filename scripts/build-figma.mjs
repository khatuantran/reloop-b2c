// Post-build: produce dist-figma/ — each HTML self-contained for Figma html.to.design import.
// - Inline CSS bundle as <style> block
// - Inline images as base64 data URI
// - Inline Material Symbols Outlined font (download from Google, cache locally)
// - Strip <script> tags (Figma plugin doesn't execute JS)
// - Drop _astro/ and images/ dirs from dist-figma/ after inlining
//
// Usage: npm run build:figma  (runs `npm run build && node scripts/build-figma.mjs`)

import { readdir, readFile, writeFile, stat, rm, cp, mkdir, access } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative, dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
const execFileP = promisify(execFile);

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const OUT = join(ROOT, 'dist-figma');
const CACHE = join(ROOT, 'scripts', '.cache');

// Google Fonts CSS URLs — phải khớp với <link> trong src/layouts/BaseLayout.astro
const GF_TEXT_CSS_URL =
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Roboto:wght@400;500;700&display=swap';

const BROWSER_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

// Tailwind text-color token → hex (khớp tailwind.config.ts). Dùng để resolve màu icon SVG
// vì html.to.design KHÔNG tính `fill="currentColor"` từ `color` của parent → icon bị đen.
const TW_COLORS = {
  'text-primary': '#0F1F18', 'text-secondary': '#41524A', 'text-tertiary': '#7C8A82',
  'text-on-lime': '#0A1F12', 'lime-soft': '#C7F2D6', lime: '#52E08D', 'lime-deep': '#2BB36A',
  forest: '#0F3D26', primary: '#52E08D',
  'tier-s': '#2BB36A', 'tier-b': '#E8B340', 'tier-c': '#E68A3F', 'tier-h': '#D14B3B',
  success: '#2BB36A', warning: '#E8B340', error: '#D14B3B', info: '#3B8DD1',
  'amber-deep': '#7A5410', white: '#FFFFFF', black: '#000000',
  'clay-mint': '#BFE8CE', 'clay-butter': '#F2D58F', 'clay-peach': '#F2C2A6',
  'clay-blush': '#E8B0AB', 'clay-sky': '#B5D2E5', 'clay-lavender': '#C7BCE8',
};
// Lấy hex từ class list (text-X / text-[#hex] / !text-X). Trả về null nếu không có color class
// (→ caller dùng currentColor để icon inherit từ ancestor như browser).
function resolveTextColor(cls) {
  const arb = cls.match(/!?text-\[(#[0-9A-Fa-f]{3,8})\]/);
  if (arb) return arb[1];
  for (const m of cls.matchAll(/!?text-([a-z][a-z0-9-]*)/g)) {
    const tok = m[1];
    if (TW_COLORS[tok]) return TW_COLORS[tok];
  }
  return null;
}

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

// Hash 1 string → tên file cache an toàn
function cacheKey(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return (h >>> 0).toString(36);
}

// Fetch Google Fonts CSS rồi thay mọi url(https://fonts.gstatic.com/...woff2) bằng data URI base64.
// Trả về CSS string self-contained. Cache kết quả vào scripts/.cache/<key>.css để build sau không re-fetch.
async function inlineGoogleFontsCSS(cssUrl, label) {
  await mkdir(CACHE, { recursive: true });
  const cachePath = join(CACHE, `gf-${cacheKey(cssUrl)}.css`);
  if (await exists(cachePath)) {
    console.log(`  ${label}: cache hit ${relative(ROOT, cachePath)}`);
    return readFile(cachePath, 'utf-8');
  }
  console.log(`  ${label}: fetching Google Fonts CSS...`);
  const cssRes = await fetch(cssUrl, { headers: { 'User-Agent': BROWSER_UA } });
  if (!cssRes.ok) throw new Error(`${label} CSS fetch failed: ${cssRes.status}`);
  let css = await cssRes.text();

  const urls = [...new Set([...css.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)].map((m) => m[1]))];
  console.log(`  ${label}: downloading ${urls.length} font file(s)...`);
  const byUrl = new Map();
  await Promise.all(
    urls.map(async (u) => {
      const r = await fetch(u, { headers: { 'User-Agent': BROWSER_UA } });
      if (!r.ok) throw new Error(`${label} font download failed (${r.status}): ${u}`);
      const buf = Buffer.from(await r.arrayBuffer());
      byUrl.set(u, `data:font/woff2;base64,${buf.toString('base64')}`);
    })
  );
  css = css.replace(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g, (m, u) => `url(${byUrl.get(u) || u})`);

  await writeFile(cachePath, css, 'utf-8');
  const kb = (Buffer.byteLength(css) / 1024).toFixed(0);
  console.log(`  ${label}: cached ${kb} KB (base64-inlined)`);
  return css;
}

// ---------- Material Symbols icon → inline SVG ----------
// html.to.design plugin render @font-face data-URI không đáng tin → icon font không hiện.
// Giải pháp: thay <span class="material-symbols-*">name</span> bằng inline <svg> (plugin support 100%).
// SVG lấy từ Google icon CDN, cache vào scripts/.cache/icons/<variant>-<fill>-<name>.svg.
const ICON_CDN = (variant, fill, name) =>
  `https://fonts.gstatic.com/s/i/short-term/release/materialsymbols${variant}/${name}/${fill ? 'fill1' : 'default'}/24px.svg`;
// Vài tên không tồn tại trong Material Symbols (brand logo bị gỡ vì lý do thương hiệu) → map sang icon thay thế
const ICON_ALIAS = { facebook: 'thumb_up', instagram: 'photo_camera', twitter: 'tag', tiktok: 'music_note', linkedin: 'work', youtube: 'play_circle', whatsapp: 'chat' };
const iconInnerCache = new Map(); // key: `${variant}|${fill}|${name}` → inner SVG markup (paths) | null nếu fail

async function fetchIconInner(variant, fill, rawName) {
  const name = ICON_ALIAS[rawName] || rawName;
  const key = `${variant}|${fill ? 1 : 0}|${name}`;
  if (iconInnerCache.has(key)) return iconInnerCache.get(key);
  const cacheDir = join(CACHE, 'icons');
  await mkdir(cacheDir, { recursive: true });
  const cachePath = join(cacheDir, `${variant}-${fill ? 'fill' : 'def'}-${name}.svg`);
  let svgText;
  if (await exists(cachePath)) {
    svgText = await readFile(cachePath, 'utf-8');
  } else {
    try {
      const r = await fetch(ICON_CDN(variant, fill, name), { headers: { 'User-Agent': BROWSER_UA } });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      svgText = await r.text();
      await writeFile(cachePath, svgText, 'utf-8');
    } catch (e) {
      console.warn(`    [icon] không lấy được ${variant}/${name} (${fill ? 'fill' : 'default'}): ${e.message}`);
      iconInnerCache.set(key, null);
      return null;
    }
  }
  // Lấy phần bên trong <svg>...</svg> (thường là 1 <path>); bỏ wrapper, giữ viewBox riêng khi render
  const mm = svgText.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const inner = (mm && mm[1] ? mm[1] : '').trim();
  iconInnerCache.set(key, inner || null);
  return inner || null;
}

// Tìm + thay mọi icon span trong HTML bằng inline SVG. Trả về { html, replaced, failed }.
// Hỗ trợ cả 2 format:
//   - Astro static: <span class="material-symbols-rounded fill !text-[18px] text-tier-s">name</span>
//   - React render: <span class="absolute ... material-symbols-rounded fill text-white" style="font-size:18px">name</span>
async function replaceIconSpans(html) {
  // Match mọi <span ...>text</span> đơn giản; lọc icon trong callback (regex không thể anchor vào trong attr value).
  const RE = /<span\b([^>]*)>\s*([a-z0-9_]+)\s*<\/span>/gi;
  const parse = (attrs) => {
    const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1];
    const style = (attrs.match(/style="([^"]*)"/) || [, ''])[1];
    return { cls, style };
  };
  const isIcon = (cls) => /\bmaterial-symbols-(rounded|outlined)\b/.test(cls);
  const tasks = [];
  html.replace(RE, (m, attrs, name) => {
    const { cls } = parse(attrs);
    if (!isIcon(cls)) return '';
    const variant = /\bmaterial-symbols-outlined\b/.test(cls) ? 'outlined' : 'rounded';
    const fill = /\bfill\b/.test(cls);
    tasks.push(fetchIconInner(variant, fill, name).then((inner) => ({ inner })));
    return '';
  });
  const results = await Promise.all(tasks);
  let replaced = 0;
  let failed = 0;
  let i = 0;
  const out = html.replace(RE, (m, attrs, name) => {
    const { cls, style } = parse(attrs);
    if (!isIcon(cls)) return m;
    const { inner } = results[i++];
    if (!inner) { failed++; return m; } // giữ nguyên span (font fallback)
    replaced++;
    void name;
    // size: ưu tiên !text-[Npx] / text-[Npx] trong class, rồi font-size:Npx trong style; default 24
    const px =
      (cls.match(/!?text-\[(\d+)px\]/) || [])[1] ||
      (style.match(/font-size:\s*(\d+)px/) || [])[1] ||
      '24';
    // class còn lại: bỏ material-symbols-*, fill, text-[Npx] — giữ layout class (absolute/inset/flex) + color
    const keepCls = cls
      .replace(/material-symbols-(rounded|outlined)/gi, '')
      .replace(/\bfill\b/g, '')
      .replace(/!?text-\[\d+px\]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    // style còn lại: bỏ font-size (đã chuyển thành width/height)
    const keepStyle = style.replace(/font-size:\s*[^;]+;?/g, '').replace(/\s+/g, ' ').trim();
    const clsAttr = keepCls ? ` class="${keepCls}"` : '';
    // fill resolve sang hex khi có color class (html.to.design không tính currentColor → icon đen).
    // Không có color class → currentColor (icon inherit từ ancestor như browser).
    const hex = resolveTextColor(cls);
    const colorStyle = hex ? `;color:${hex}` : '';
    const styleAttr = `width:${px}px;height:${px}px;display:inline-block;vertical-align:-0.15em;flex-shrink:0${colorStyle};${keepStyle}`;
    return `<svg${clsAttr} style="${styleAttr}" viewBox="0 -960 960 960" fill="${hex || 'currentColor'}" aria-hidden="true">${inner}</svg>`;
  });
  return { html: out, replaced, failed };
}

// ---------- Illustration SVG → PNG (rasterize) ----------
// html.to.design plugin cố recreate từng <path>/<rect>/<gradient> thành Figma vector → mất vị trí/gradient,
// illustration phức tạp bị vỡ/chồng lệch. Fix: render SVG → PNG bằng Chrome headless, thay bằng <img>.
// <img> được plugin rasterize 100% chính xác. Cache PNG vào scripts/.cache/illu/<hash>.png.
function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ].filter(Boolean);
  return candidates.find((p) => { try { return existsSync(p); } catch { return false; } });
}

// SVG có "phức tạp" không → cần rasterize? (có gradient/defs/pattern HOẶC ≥6 child trực tiếp). Bỏ qua icon SVG (viewBox 0 -960 960 960).
function isComplexSVG(attrs, inner) {
  if (/viewBox=["']0 -960 960 960["']/.test(attrs)) return false; // icon SVG đã xử lý riêng
  if (/<(linearGradient|radialGradient|defs|pattern|filter)\b/i.test(inner)) return true;
  const childCount = (inner.match(/<(path|rect|circle|ellipse|polygon|polyline|line|text|g)\b/gi) || []).length;
  return childCount >= 6;
}

// Render 1 SVG (attrs + inner) → PNG data URI (2x). Trả về null nếu fail/không có Chrome.
async function rasterizeSVG(chrome, attrs, inner) {
  const vb = attrs.match(/viewBox=["']\s*([\d.\- ]+)["']/);
  let W = 400, H = 400;
  if (vb) { const p = vb[1].trim().split(/\s+/).map(Number); if (p.length === 4 && p[2] > 0 && p[3] > 0) { W = p[2]; H = p[3]; } }
  const key = cacheKey(`${W}x${H}|${inner}`);
  const cacheDir = join(CACHE, 'illu');
  await mkdir(cacheDir, { recursive: true });
  const pngCache = join(cacheDir, `${key}.png`);
  let buf;
  if (await exists(pngCache)) {
    buf = await readFile(pngCache);
  } else {
    if (!chrome) return null;
    const scale = 2;
    const rw = Math.max(1, Math.round(W * scale));
    const rh = Math.max(1, Math.round(H * scale));
    const tmpDir = join(tmpdir(), 'figma-illu');
    await mkdir(tmpDir, { recursive: true });
    const tmpHtml = join(tmpDir, `${key}.html`);
    const tmpPng = join(tmpDir, `${key}.png`);
    const vbAttr = vb ? `viewBox="${vb[1].trim()}"` : `viewBox="0 0 ${W} ${H}"`;
    await writeFile(tmpHtml, `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;padding:0}svg{display:block}</style></head><body><svg xmlns="http://www.w3.org/2000/svg" width="${rw}" height="${rh}" ${vbAttr}>${inner}</svg></body></html>`, 'utf-8');
    try {
      await execFileP(chrome, [
        '--headless', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
        '--force-device-scale-factor=1', '--default-background-color=00000000',
        `--window-size=${rw},${rh}`, `--screenshot=${tmpPng}`,
        '--virtual-time-budget=1500', `file://${tmpHtml}`,
      ], { timeout: 30000 });
      buf = await readFile(tmpPng);
      await writeFile(pngCache, buf);
    } catch (e) {
      console.warn(`    [illu] render fail ${W}x${H}: ${e.message}`);
      return null;
    }
  }
  return { dataUri: `data:image/png;base64,${buf.toString('base64')}`, W, H };
}

// Thay mọi illustration SVG trong HTML bằng <img>. Trả về { html, rasterized }.
async function rasterizeIllustrations(html, chrome) {
  const RE = /<svg\b([^>]*)>([\s\S]*?)<\/svg>/gi;
  const jobs = [];
  html.replace(RE, (m, attrs, inner) => {
    if (isComplexSVG(attrs, inner)) jobs.push(rasterizeSVG(chrome, attrs, inner).then((r) => ({ r })));
    else jobs.push(Promise.resolve(null));
    return '';
  });
  const results = await Promise.all(jobs);
  let rasterized = 0;
  let i = 0;
  const out = html.replace(RE, (m, attrs) => {
    const res = results[i++];
    if (!res || !res.r) return m;
    rasterized++;
    const { dataUri, W, H } = res.r;
    const cls = (attrs.match(/class=["']([^"']*)["']/) || [, ''])[1];
    const style = (attrs.match(/style=["']([^"']*)["']/) || [, ''])[1];
    const clsAttr = cls ? ` class="${cls}"` : '';
    const styleAttr = `object-fit:contain;display:block;${style}`;
    return `<img${clsAttr} style="${styleAttr}" src="${dataUri}" width="${W}" height="${H}" alt="" aria-hidden="true">`;
  });
  return { html: out, rasterized };
}

// CSS helper cho 2 class icon — Google CSS chỉ định nghĩa @font-face, class .material-symbols-* phải tự khai.
const ICON_HELPER_CSS = `
.material-symbols-rounded, .material-symbols-outlined {
  font-weight: normal; font-style: normal; font-size: 24px; line-height: 1;
  letter-spacing: normal; text-transform: none; display: inline-block;
  white-space: nowrap; word-wrap: normal; direction: ltr;
  -webkit-font-feature-settings: 'liga'; font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}
.material-symbols-rounded { font-family: 'Material Symbols Rounded'; font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 24; }
.material-symbols-outlined { font-family: 'Material Symbols Outlined'; font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
.material-symbols-rounded.fill { font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24; }
.material-symbols-outlined.fill { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
`.trim();

// ---------- Figma-optimization CSS override ----------
// html.to.design plugin có vài giới hạn render — lớp CSS này khắc phục các lỗi hay gặp.
// LƯU Ý: illustration phức tạp đã được rasterize sang PNG <img> (xem rasterizeIllustrations),
//        icon đã sang inline <svg> có width/height px cố định → KHÔNG được ghi đè kích thước SVG ở đây
//        (rule cũ `svg{width:auto;height:100%}` bắt nhầm icon SVG → icon to bự, layout vỡ — đã bỏ).
const FIGMA_OPTIMIZE_CSS = `
/* === html.to.design import optimization (auto-injected by build-figma.mjs) === */
/* 1. backdrop-filter → off (plugin render thành nền đục) */
* { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }
/* 2. radial-gradient backgrounds → màu phẳng tương đương */
.grad-hero { background: #DCEDDF !important; }
.clay-bubble { background: rgba(255,255,255,0.45) !important; }
/* 3. position: sticky không support trong Figma frame */
[class*="sticky"] { position: relative !important; top: auto !important; }
/* 4. blur utility decorative (vd bg-X/15 blur-3xl) → tắt để không thành khối đặc */
[class*="blur-"] { filter: none !important; }
`.trim();

// ---------- Main ----------

async function main() {
  if (!(await exists(DIST))) {
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(1);
  }

  console.log('▶ build-figma: preparing dist-figma/');
  await rm(OUT, { recursive: true, force: true });
  await cp(DIST, OUT, { recursive: true });

  console.log('▶ fetching + inlining web fonts...');
  const textFontCSS = await inlineGoogleFontsCSS(GF_TEXT_CSS_URL, 'text-fonts');
  // <style> block thay cho link text fonts (Plus Jakarta / Inter / JetBrains Mono / Roboto)
  const textFontStyle = `<style data-inlined="text-fonts">\n${textFontCSS}\n</style>`;
  // Material Symbols icon font KHÔNG inline nữa — tất cả icon đã chuyển sang inline <svg> (xem replaceIconSpans).
  // Link Material Symbols sẽ bị gỡ khỏi <head> (không thay bằng gì). ICON_HELPER_CSS giữ lại làm fallback nhỏ.
  const iconFontStyle = `<style data-inlined="icon-helper">\n${ICON_HELPER_CSS}\n</style>`;

  const chrome = findChrome();
  if (chrome) console.log(`▶ Chrome found: ${chrome} (illustration SVG → PNG rasterize bật)`);
  else console.warn('▶ Chrome KHÔNG tìm thấy → bỏ qua rasterize illustration (set CHROME_PATH nếu cần). Illustration phức tạp có thể vỡ trong html.to.design.');

  const htmlFiles = await walk(OUT, (p) => p.endsWith('.html'));
  console.log(`▶ inlining ${htmlFiles.length} HTML files...`);
  const iconStats = { replaced: 0, failed: 0 };
  let illuRasterized = 0;

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

    // 2a) Replace Google Fonts text <link> (Plus Jakarta / Inter / JetBrains Mono / Roboto) with inline @font-face
    html = html.replace(
      /<link[^>]*href=["'][^"']*fonts\.googleapis\.com\/css2\?family=Plus\+Jakarta\+Sans[^"']*["'][^>]*\/?>/g,
      textFontStyle
    );
    // 2b) Replace Google Fonts Material Symbols <link> (Rounded + Outlined) with inline @font-face + helper class
    html = html.replace(
      /<link[^>]*href=["'][^"']*fonts\.googleapis\.com\/css2\?family=Material\+Symbols[^"']*["'][^>]*\/?>/g,
      iconFontStyle
    );
    // 2c) Drop now-useless preconnect to Google Fonts CDNs (file is fully self-contained)
    html = html.replace(/<link[^>]*rel=["']preconnect["'][^>]*href=["']https:\/\/fonts\.(googleapis|gstatic)\.com["'][^>]*\/?>/g, '');

    // 2.5) Material Symbols icon spans → inline <svg> (html.to.design render font không đáng tin)
    {
      const r = await replaceIconSpans(html);
      html = r.html;
      iconStats.replaced += r.replaced;
      iconStats.failed += r.failed;
    }

    // 2.6) Illustration SVG phức tạp → PNG <img> (html.to.design botch khi recreate vector)
    {
      const r = await rasterizeIllustrations(html, chrome);
      html = r.html;
      illuRasterized += r.rasterized;
    }

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

    // 3.5) Inject Figma-optimization CSS override (last <style> so it wins cascade)
    const optimizeStyle = `<style data-inlined="figma-optimize">\n${FIGMA_OPTIMIZE_CSS}\n</style>`;
    if (html.includes('</head>')) {
      html = html.replace('</head>', `${optimizeStyle}\n</head>`);
    } else {
      html = html.replace('</body>', `${optimizeStyle}\n</body>`);
    }

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

  console.log(`▶ icons: ${iconStats.replaced} span → inline SVG${iconStats.failed ? `, ${iconStats.failed} fallback về font (fetch fail)` : ', 0 fail'}`);
  console.log(`▶ illustrations: ${illuRasterized} SVG → PNG <img>${chrome ? '' : ' (Chrome thiếu — đã bỏ qua)'}`);
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
