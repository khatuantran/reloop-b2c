// Đóng gói "AI handoff bundle" → folder handoff/ để hand cho AI (Claude / công cụ design)
// tái tạo lại RE-LOOP B2C web app "y chang".
//
// Chạy: npm run bundle:handoff   (đã build:figma trước → dist-figma/ mới nhất)
//
// handoff/
//   README.md                ← bắt đầu từ đây
//   AI_HANDOFF.md             ← spec + prompt để Claude tái tạo y chang
//   MANIFEST.json             ← liệt kê toàn bộ + số lượng
//   screens-html/             ← 87+ file HTML standalone (CSS inline, ảnh base64, icon SVG, illustration PNG) — bản dựng "thật"
//   source-code/              ← toàn bộ source Astro (regen chính xác từ đây)
//   raster-images/            ← ảnh .jpg/.png gốc trong public/images/
//   docs/                     ← DESIGN_SYSTEM, PRD, FEATURE_TRACKER, FIGMA_IMPORT_GUIDE, requirement, DEPLOY, CLAUDE.md

import { readdir, stat, mkdir, copyFile, rm, writeFile, access } from 'node:fs/promises';
import { join, relative, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const OUT = join(ROOT, 'handoff');

async function exists(p) { try { await access(p); return true; } catch { return false; } }

async function copyDir(src, dst, { skip = () => false } = {}) {
  await mkdir(dst, { recursive: true });
  let count = 0;
  for (const entry of await readdir(src)) {
    const s = join(src, entry);
    const d = join(dst, entry);
    if (skip(relative(ROOT, s))) continue;
    const st = await stat(s);
    if (st.isDirectory()) count += await copyDir(s, d, { skip });
    else { await copyFile(s, d); count++; }
  }
  return count;
}

async function listFiles(dir, base = dir) {
  const out = [];
  if (!(await exists(dir))) return out;
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry);
    const st = await stat(full);
    if (st.isDirectory()) out.push(...(await listFiles(full, base)));
    else out.push(relative(base, full).split('\\').join('/'));
  }
  return out;
}

async function copyIfExists(src, dst) {
  if (!(await exists(src))) return false;
  await mkdir(dirname(dst), { recursive: true });
  await copyFile(src, dst);
  return true;
}

async function main() {
  // Bắt buộc đã có dist-figma/
  if (!(await exists(join(ROOT, 'dist-figma')))) {
    console.error('✗ Chưa có dist-figma/. Chạy `npm run build:figma` trước (cần Node 22 + Google Chrome).');
    process.exit(1);
  }

  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const manifest = { generatedAt: new Date().toISOString(), project: 'RE-LOOP B2C web app', sections: {} };

  // 1) screens-html — bản dựng standalone (mỗi file tự chứa CSS/ảnh/icon)
  const nScreens = await copyDir(join(ROOT, 'dist-figma'), join(OUT, 'screens-html'));
  manifest.sections['screens-html'] = { files: nScreens, note: 'Mỗi .html standalone ~4-6MB: CSS inline, ảnh base64, Material Symbols → inline SVG, illustration phức tạp → PNG. Mở bằng browser không cần internet.' };

  // 2) source-code — toàn bộ source để regen chính xác
  const SKIP = new Set(['node_modules', 'dist', 'dist-figma', 'handoff', '.git', '.astro', 'scripts/.cache']);
  const nSrc = await copyDir(ROOT, join(OUT, 'source-code'), {
    skip: (rel) => {
      const top = rel.split('/')[0];
      if (SKIP.has(top)) return true;
      if (rel === 'scripts/.cache' || rel.startsWith('scripts/.cache/')) return true;
      // bỏ file ẩn cấp cao + lockfile (giữ cũng được, nhưng nặng)
      if (rel === '.DS_Store' || rel.endsWith('/.DS_Store')) return true;
      return false;
    },
  });
  manifest.sections['source-code'] = { files: nSrc, note: 'Source Astro đầy đủ: src/ (pages, components, layouts, lib mock, styles), tailwind.config.ts, astro.config.mjs, package.json, tsconfig.json, scripts/. Đây là input để Claude regen "y chang".' };

  // 3) raster-images — ảnh gốc
  let nImg = 0;
  if (await exists(join(ROOT, 'public/images'))) nImg = await copyDir(join(ROOT, 'public/images'), join(OUT, 'raster-images'));
  manifest.sections['raster-images'] = { files: nImg, note: 'Ảnh raster gốc dùng trong app (sample sản phẩm, BOM before/after, map background). Mọi minh hoạ khác là SVG inline trong src/components/illustrations/.' };

  // 4) docs — tài liệu spec
  await mkdir(join(OUT, 'docs'), { recursive: true });
  const docFiles = ['DESIGN_SYSTEM.md', 'PRD.md', 'FEATURE_TRACKER.md', 'FIGMA_IMPORT_GUIDE.md', 'requirement.md', 'DEPLOY.md', 'AI_HANDOFF.md'];
  let nDoc = 0;
  for (const f of docFiles) if (await copyIfExists(join(ROOT, 'docs', f), join(OUT, 'docs', f))) nDoc++;
  if (await copyIfExists(join(ROOT, 'CLAUDE.md'), join(OUT, 'docs', 'CLAUDE.md'))) nDoc++;
  manifest.sections['docs'] = { files: nDoc, note: 'Spec: DESIGN_SYSTEM (tokens canonical), PRD (đã build), FEATURE_TRACKER (checklist), FIGMA_IMPORT_GUIDE (87 frame map), requirement.md (125 feature IDs từ BA), DEPLOY, CLAUDE.md (rule cho AI agent), AI_HANDOFF (đọc đầu tiên).' };

  // 5) AI_HANDOFF.md + README ở gốc handoff/
  await copyIfExists(join(ROOT, 'docs', 'AI_HANDOFF.md'), join(OUT, 'AI_HANDOFF.md'));
  const readme = `# RE-LOOP B2C — AI Handoff Bundle

Bundle để hand cho AI (Claude / công cụ design) tái tạo lại web app **y chang giao diện + flow**.

\`\`\`
handoff/
├── AI_HANDOFF.md      ← ĐỌC ĐẦU TIÊN — spec + prompt để Claude regen y chang
├── MANIFEST.json      ← liệt kê toàn bộ file + số lượng
├── screens-html/      ← ${nScreens} file .html standalone (mở browser xem ngay, không cần build)
├── source-code/       ← source Astro đầy đủ (regen chính xác từ đây)
├── raster-images/     ← ${nImg} ảnh .jpg/.png gốc
└── docs/              ← ${nDoc} tài liệu spec (DESIGN_SYSTEM, PRD, FIGMA_IMPORT_GUIDE, CLAUDE.md…)
\`\`\`

**Cách dùng nhanh:**
1. Mở \`AI_HANDOFF.md\` → copy phần "Prompt cho Claude" → paste vào Claude, đính kèm các file trong bundle.
2. Hoặc xem trước UI: mở bất kỳ \`screens-html/*.html\` bằng browser (đã tự chứa mọi thứ).

**Lưu ý dung lượng:** \`screens-html/\` nặng (mỗi file ~4-6MB do base64 font/ảnh inline, tổng vài trăm MB) — nếu công cụ AI giới hạn upload thì **chỉ cần đính \`source-code/\` (~16MB) + \`docs/\`** là đủ để regen "y chang"; \`screens-html/\` chỉ là tham chiếu trực quan, đính vài file của màn đang làm là được.

Tạo lại bundle: \`npm run bundle:handoff\` (tự chạy \`build:figma\` trước; cần Node 22 + Google Chrome).
`;
  await writeFile(join(OUT, 'README.md'), readme, 'utf-8');

  // 6) MANIFEST.json + danh sách screens
  manifest.screens = (await listFiles(join(OUT, 'screens-html'))).sort();
  manifest.docs = (await listFiles(join(OUT, 'docs'))).sort();
  manifest.rasterImages = (await listFiles(join(OUT, 'raster-images'))).sort();
  manifest.illustrations = (await listFiles(join(OUT, 'source-code', 'src', 'components', 'illustrations'))).sort();
  manifest.totalFiles = nScreens + nSrc + nImg + nDoc + 3;
  await writeFile(join(OUT, 'MANIFEST.json'), JSON.stringify(manifest, null, 2), 'utf-8');

  console.log(`✅ handoff/ ready
  · screens-html : ${nScreens} file HTML standalone
  · source-code  : ${nSrc} file (src/ + config + scripts)
  · raster-images: ${nImg} ảnh
  · docs         : ${nDoc} tài liệu
  → zip folder handoff/ rồi import vào AI. Bắt đầu từ handoff/AI_HANDOFF.md`);
}

main().catch((e) => { console.error(e); process.exit(1); });
