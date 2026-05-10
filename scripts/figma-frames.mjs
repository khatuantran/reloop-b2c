// Sinh danh sách import + tên frame cho Figma (html.to.design) — tự đồng bộ với dist-figma/.
//
// Usage:
//   node scripts/figma-frames.mjs            → in markdown table (Module | Frame name | File import) → copy vào docs/FIGMA_IMPORT_GUIDE.md
//   node scripts/figma-frames.mjs --snippet  → in đoạn JS để paste vào Figma (đổi tên hàng loạt theo thứ tự import)
//   node scripts/figma-frames.mjs --list     → in danh sách phẳng "route → frameName" (debug)
//
// Khi thêm page mới: build:figma → chạy lại script. Nếu page chưa có rule, script CẢNH BÁO (nhắc thêm rule vào ROUTE_RULES).
// ROUTE_RULES có thứ tự = thứ tự import; thêm rule vào đúng vị trí module, KHÔNG đụng rule khác → không phải đánh lại số gì.

import { readdir, stat, access } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const FIGMA_DIR = join(ROOT, 'dist-figma');

// ---------- Config ----------
const RULE = (re, module, label) => ({ re, module, label });

// Thứ tự = thứ tự import. Mỗi module gom 1 cụm, screens trong cụm theo journey order.
const ROUTE_RULES = [
  // === Auth & Onboarding ===
  RULE(/^onboarding$/,            'Auth', 'Onboarding'),
  RULE(/^login$/,                 'Auth', 'Đăng nhập'),
  RULE(/^login\/otp$/,            'Auth', 'Đăng nhập · OTP'),
  RULE(/^signup$/,                'Auth', 'Đăng ký'),
  RULE(/^signup\/info$/,          'Auth', 'Đăng ký · Thông tin'),
  RULE(/^signup\/address$/,       'Auth', 'Đăng ký · Địa chỉ'),
  RULE(/^signup\/otp$/,           'Auth', 'Đăng ký · OTP'),
  RULE(/^signup\/done$/,          'Auth', 'Đăng ký · Hoàn tất'),
  // === Home ===
  RULE(/^index$/,                 'Home', 'Dashboard'),
  // === Wallet ===
  RULE(/^wallet$/,                'Wallet', 'Ví'),
  RULE(/^wallet\/policy$/,        'Wallet', 'Chính sách thanh toán'),
  // === Profile ===
  RULE(/^profile$/,               'Profile', 'Hồ sơ'),
  RULE(/^profile\/edit$/,         'Profile', 'Sửa hồ sơ'),
  // === Orders list + tier picker ===
  RULE(/^orders$/,                'Orders', 'Danh sách đơn'),
  RULE(/^orders\/new$/,           'Orders', 'Chọn Tier'),
  RULE(/^orders\/new\/tier-s$/,   'Orders', 'Tier S giới thiệu'),
  RULE(/^orders\/new\/tier-b$/,   'Orders', 'Tier B giới thiệu'),
  RULE(/^orders\/new\/tier-c$/,   'Orders', 'Tier C giới thiệu'),
  RULE(/^orders\/new\/tier-h$/,   'Orders', 'Tier H giới thiệu'),
  // === Tier S — Speed Recyclables ===
  RULE(/^orders\/new\/step-2$/,   'Tier S', 'B2 AI nhận diện'),
  RULE(/^orders\/new\/step-3$/,   'Tier S', 'B3 Báo giá'),
  RULE(/^orders\/new\/step-4$/,   'Tier S', 'B4 Địa chỉ'),
  RULE(/^orders\/new\/step-5$/,   'Tier S', 'B5 Lịch hẹn'),
  RULE(/^orders\/new\/step-6$/,   'Tier S', 'B6 Xác nhận'),
  RULE(/^orders\/new\/success$/,  'Tier S', 'Done Đặt đơn thành công'),
  // giao dịch tại nhà — theo đúng thứ tự thực hiện: Cân → Hiện khối lượng → Báo giá → OTP → Hoàn tất
  RULE(/^orders\/transaction-flow\/tier-s\/weighing$/,      'Tier S', 'GD1 Cân tại nhà'),
  RULE(/^orders\/transaction-flow\/tier-s\/weight-reveal$/, 'Tier S', 'GD2 Hiện khối lượng'),
  RULE(/^orders\/transaction-flow\/tier-s\/price$/,         'Tier S', 'GD3 Báo giá + Thanh toán'),
  RULE(/^orders\/transaction-flow\/tier-s\/otp$/,           'Tier S', 'GD4 OTP xác nhận'),
  RULE(/^orders\/transaction-flow\/tier-s\/done$/,          'Tier S', 'GD5 Hoàn tất'),
  // === Tier B — Speed Mode ===
  RULE(/^orders\/new\/tier-b\/quote$/,    'Tier B Speed', 'B2 Mode + Quote'),
  RULE(/^orders\/new\/tier-b\/address$/,  'Tier B Speed', 'B3 Địa chỉ + Slot'),
  RULE(/^orders\/new\/tier-b\/confirm$/,  'Tier B Speed', 'B4 Xác nhận'),
  RULE(/^orders\/new\/tier-b\/success$/,  'Tier B Speed', 'Done Đặt đơn thành công'),
  // === Tier B — Auction Mode ===
  RULE(/^orders\/new\/tier-b\/auction$/,          'Tier B Auction', 'B3 Chờ báo giá'),
  RULE(/^orders\/new\/tier-b\/auction-live$/,     'Tier B Auction', 'B3 Live bidding'),
  RULE(/^orders\/new\/tier-b\/auction-address$/,  'Tier B Auction', 'B4 Địa chỉ + Slot'),
  RULE(/^orders\/new\/tier-b\/auction-confirm$/,  'Tier B Auction', 'B5 Xác nhận'),
  RULE(/^orders\/new\/tier-b\/auction-success$/,  'Tier B Auction', 'Done Đấu giá thắng'),
  // === Tier C — Hub Reveal ===
  RULE(/^orders\/new\/tier-c\/step-2$/,   'Tier C', 'B2 AI nhận diện'),
  RULE(/^orders\/new\/tier-c\/step-3$/,   'Tier C', 'B3 Dải BOM'),
  RULE(/^orders\/new\/tier-c\/step-4$/,   'Tier C', 'B4 Địa chỉ'),
  RULE(/^orders\/new\/tier-c\/step-5$/,   'Tier C', 'B5 Lịch hẹn'),
  RULE(/^orders\/new\/tier-c\/step-6$/,   'Tier C', 'B6 Xác nhận'),
  RULE(/^orders\/new\/tier-c\/success$/,  'Tier C', 'Done Đặt đơn thành công'),
  // giao dịch tại nhà — theo đúng thứ tự thực hiện: Cân → Hiện khối lượng → Peek-check → HOLD ví ảo → OTP bàn giao → Hoàn tất
  RULE(/^orders\/transaction-flow\/tier-c\/weighing$/,      'Tier C', 'GD1 Cân tại nhà'),
  RULE(/^orders\/transaction-flow\/tier-c\/weight-reveal$/, 'Tier C', 'GD2 Hiện khối lượng'),
  RULE(/^orders\/transaction-flow\/tier-c\/peek-check$/,    'Tier C', 'GD3 Peek-check'),
  RULE(/^orders\/transaction-flow\/tier-c\/hold$/,          'Tier C', 'GD4 HOLD ví ảo'),
  RULE(/^orders\/transaction-flow\/tier-c\/otp$/,           'Tier C', 'GD5 OTP bàn giao'),
  RULE(/^orders\/transaction-flow\/tier-c\/done$/,          'Tier C', 'GD6 Hoàn tất'),
  // === Tier H — Hazardous Waste ===
  RULE(/^orders\/new\/tier-h\/items$/,    'Tier H', 'B2 Loại + Số lượng'),
  RULE(/^orders\/new\/tier-h\/confirm$/,  'Tier H', 'B3 Xác nhận thu gom'),
  RULE(/^orders\/new\/tier-h\/success$/,  'Tier H', 'Done Đặt thu gom thành công'),
  // === Detail + Track + Chat (per đơn mẫu, mỗi đơn: Chi tiết → Theo dõi → Chat) ===
  RULE(/^orders\/RL-2026-001234$/,        'Detail', 'RL-001234 (Tier S) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001234\/track$/, 'Detail', 'RL-001234 (Tier S) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001234\/chat$/,  'Detail', 'RL-001234 (Tier S) · 3 Chat'),
  RULE(/^orders\/RL-2026-001241$/,        'Detail', 'RL-001241 (Tier B Speed) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001241\/track$/, 'Detail', 'RL-001241 (Tier B Speed) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001241\/chat$/,  'Detail', 'RL-001241 (Tier B Speed) · 3 Chat'),
  RULE(/^orders\/RL-2026-001242$/,        'Detail', 'RL-001242 (Tier B Auction) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001242\/track$/, 'Detail', 'RL-001242 (Tier B Auction) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001242\/chat$/,  'Detail', 'RL-001242 (Tier B Auction) · 3 Chat'),
  RULE(/^orders\/RL-2026-001243$/,        'Detail', 'RL-001243 (Tier B đang giao) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001243\/track$/, 'Detail', 'RL-001243 (Tier B đang giao) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001243\/chat$/,  'Detail', 'RL-001243 (Tier B đang giao) · 3 Chat'),
  RULE(/^orders\/RL-2026-001236$/,        'Detail', 'RL-001236 (Tier C done) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001236\/track$/, 'Detail', 'RL-001236 (Tier C done) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001236\/chat$/,  'Detail', 'RL-001236 (Tier C done) · 3 Chat'),
  RULE(/^orders\/RL-2026-001240$/,        'Detail', 'RL-001240 (Tier C pending) · 1 Chi tiết'),
  RULE(/^orders\/RL-2026-001240\/track$/, 'Detail', 'RL-001240 (Tier C pending) · 2 Theo dõi'),
  RULE(/^orders\/RL-2026-001240\/chat$/,  'Detail', 'RL-001240 (Tier C pending) · 3 Chat'),
  RULE(/^orders\/RL-H-2026-000086$/,        'Detail', 'RL-H-000086 (Tier H done) · 1 Chi tiết'),
  RULE(/^orders\/RL-H-2026-000086\/track$/, 'Detail', 'RL-H-000086 (Tier H done) · 2 Theo dõi'),
  RULE(/^orders\/RL-H-2026-000086\/chat$/,  'Detail', 'RL-H-000086 (Tier H done) · 3 Chat'),
  RULE(/^orders\/RL-H-2026-000087$/,        'Detail', 'RL-H-000087 (Tier H pending) · 1 Chi tiết'),
  RULE(/^orders\/RL-H-2026-000087\/track$/, 'Detail', 'RL-H-000087 (Tier H pending) · 2 Theo dõi'),
  RULE(/^orders\/RL-H-2026-000087\/chat$/,  'Detail', 'RL-H-000087 (Tier H pending) · 3 Chat'),
  // === Disputes ===
  RULE(/^disputes$/,              'Disputes', 'Danh sách tranh chấp'),
  RULE(/^disputes\/new$/,         'Disputes', 'Tạo tranh chấp'),
  RULE(/^disputes\/D-2026-0042$/, 'Disputes', 'D-0042 Chi tiết'),
  // === Misc ===
  RULE(/^help$/,          'Misc', 'Trợ giúp'),
  RULE(/^help\/chat$/,    'Misc', 'Trợ giúp · AI Chat Bot'),
  RULE(/^notifications$/, 'Misc', 'Thông báo'),
  RULE(/^impact$/,        'Misc', 'Impact'),
  RULE(/^rewards$/,       'Misc', 'Rewards / GP'),
  RULE(/^share$/,         'Misc', 'Chia sẻ'),
];

// Routes có trong dist-figma/ nhưng KHÔNG import (duplicate / shell). Khớp → bỏ qua, không cảnh báo.
const BLOCK = [
  /^easy$/,
  /^404$/,                                  // trang 404 — utility, không phải frame prototype
  /^disputes\/D-2026-003[08]$/,            // dup template với D-0042
  /^orders\/RL-2026-00123[579](\/|$)/,     // dup Tier S/C samples (1235/1237/1239)
  /\/transaction$/,                         // trang transaction của detail — đã có ở transaction-flow
];

// ---------- Walk ----------
async function exists(p) { try { await access(p); return true; } catch { return false; } }
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir)) {
    const full = join(dir, e);
    const s = await stat(full);
    if (s.isDirectory()) out.push(...(await walk(full)));
    else if (full.endsWith('.html')) out.push(full);
  }
  return out;
}

// ---------- Main ----------
async function main() {
  const mode = process.argv.includes('--snippet') ? 'snippet' : process.argv.includes('--list') ? 'list' : 'table';
  if (!(await exists(FIGMA_DIR))) {
    console.error('✗ dist-figma/ không tồn tại. Chạy `npm run build:figma` trước.');
    process.exit(1);
  }
  const files = await walk(FIGMA_DIR);
  const routes = files.map((f) => relative(FIGMA_DIR, f).replace(/\.html$/, '').split('\\').join('/')).sort();

  const rows = [];     // { ruleIdx, route, module, label, frameName }
  const unmatched = []; // routes không có rule & không block

  for (const route of routes) {
    if (BLOCK.some((re) => re.test(route))) continue;
    const ruleIdx = ROUTE_RULES.findIndex((r) => r.re.test(route));
    if (ruleIdx === -1) { unmatched.push(route); continue; }
    const rule = ROUTE_RULES[ruleIdx];
    const m = route.match(rule.re);
    const label = typeof rule.label === 'function' ? rule.label(m) : rule.label;
    rows.push({ ruleIdx, route, module: rule.module, label, frameName: `[${rule.module}] · ${label}` });
  }
  // sort theo thứ tự rule (import order); cùng rule → theo route
  rows.sort((a, b) => (a.ruleIdx - b.ruleIdx) || a.route.localeCompare(b.route));

  if (unmatched.length) {
    console.error(`\n⚠️  ${unmatched.length} route trong dist-figma/ CHƯA có rule (thêm vào ROUTE_RULES trong scripts/figma-frames.mjs, đúng vị trí module):`);
    for (const r of unmatched) console.error(`   - ${r}`);
    console.error('');
  }

  if (mode === 'list') {
    for (const r of rows) console.log(`${r.route.padEnd(48)} → ${r.frameName}`);
    console.log(`\n# ${rows.length} frame`);
    return;
  }

  if (mode === 'snippet') {
    const names = rows.map((r) => r.frameName);
    console.log(`// === Figma: đổi tên ${names.length} frame hàng loạt theo thứ tự import ===
// CÁCH 1 (tất cả 1 lần): import ĐỦ ${names.length} file theo ĐÚNG thứ tự bảng vào 1 Page trống → chạy đoạn này
//   (Figma → Plugins → Development → Open console; hoặc đưa cho Claude chạy qua MCP use_figma).
// CÁCH 2 (theo từng cụm): import xong 1 module → select các frame mới → đổi const ALL=false → chạy (đổi tên theo selection).
const ALL = true;
const NAMES = ${JSON.stringify(names, null, 2)};
const frames = (ALL ? figma.currentPage.children.filter(n => n.type === "FRAME")
                    : figma.currentPage.selection.filter(n => n.type === "FRAME"));
if (ALL && frames.length !== NAMES.length) {
  figma.notify(\`⚠️ \${frames.length} frame trên page nhưng cần \${NAMES.length} — kiểm tra lại import\`);
} else {
  const n = Math.min(frames.length, NAMES.length);
  for (let i = 0; i < n; i++) frames[i].name = NAMES[i];
  figma.notify(\`✓ Đã đổi tên \${n} frame\`);
}`);
    return;
  }

  // table mode: markdown grouped by module
  console.log(`<!-- AUTO-GENERATED bởi \`node scripts/figma-frames.mjs\` — đừng sửa tay, chạy lại script khi thêm page -->`);
  console.log(`\nTổng **${rows.length} frame** · import theo thứ tự dưới (trên → dưới).\n`);
  let curModule = null;
  for (const r of rows) {
    if (r.module !== curModule) {
      curModule = r.module;
      console.log(`\n### ${curModule}\n`);
      console.log(`| Frame name | File import |`);
      console.log(`|---|---|`);
    }
    console.log(`| \`${r.frameName}\` | \`dist-figma/${r.route}.html\` |`);
  }
  console.log('');
}

main().catch((e) => { console.error(e); process.exit(1); });
