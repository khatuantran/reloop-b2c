// Post-build: convert absolute asset/page paths to relative based on file depth.
// Walks dist/ recursively. Each HTML file's absolute paths become relative-to-its-location.
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const s = await stat(full);
    if (s.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (entry.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

const files = await walk(DIST);

for (const path of files) {
  const fileDir = dirname(path);
  // depth = how many `../` to reach DIST root
  const rel = relative(fileDir, DIST);
  const prefix = rel === '' ? './' : rel.split('/').map(() => '..').join('/') + '/';

  let html = await readFile(path, 'utf-8');
  const before = html;

  // 1. Asset paths /_astro/, /images/, /favicon.svg
  html = html
    .replace(/(href|src)="\/_astro\//g, `$1="${prefix}_astro/`)
    .replace(/(href|src)="\/images\//g, `$1="${prefix}images/`)
    .replace(/(href|src)="\/favicon/g, `$1="${prefix}favicon`);

  // 2. Internal page links: /index.html, /orders.html, /wallet.html, /profile.html
  html = html
    .replace(/href="\/(index|orders|wallet|profile)\.html"/g, (_, p) => `href="${prefix}${p}.html"`)
    .replace(/href="\/orders\/new\.html"/g, `href="${prefix}orders/new.html"`)
    .replace(/href="\/orders\/([A-Z0-9-]+)\.html"/g, (_, id) => `href="${prefix}orders/${id}.html"`)
    .replace(/href="\/orders\/([A-Z0-9-]+)\/(track|transaction)\.html"/g, (_, id, sub) => `href="${prefix}orders/${id}/${sub}.html"`);

  // 3. Astro generates `clean URL` links without `.html` — astro.config has `format: 'file'` so most should already be `.html`
  // 4. Plain `/` href as href to root
  html = html.replace(/href="\/"/g, `href="${prefix}index.html"`);

  if (html !== before) {
    await writeFile(path, html, 'utf-8');
    console.log(`relativize: ${relative(DIST, path)}`);
  }
}
