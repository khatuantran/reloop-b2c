# Feature Tracker

IDs canonical từ `docs/requirement.md` v0.1 §4.1. Tick khi xong.

## Setup (Round 2)

- [x] Xoá file Round 1 (demo-dat-don, tier-c, 8 Screen*.astro, SnapDots, DemoFlow, TierCSimulator, Footer)
- [x] `src/lib/mock.ts` (USER, WALLET, ORDERS×6, COLLECTORS×3, BOM_LIBRARY, PRICES, TRANSACTIONS, STATS)
- [x] `src/lib/format.ts` (formatVND, formatDate, formatTime, formatRelative, formatWeight, statusLabel)
- [x] Rewrite TopNav cho in-app (4 link + balance pill + avatar)
- [x] StatusChip + EmptyState UI primitives
- [x] Update relativize.mjs xử lý subdirs (compute relative path per file depth)

## Module 2 — Order Creation (`/orders/new`)

- [x] ORDER-01 Snap photo (2 sample mock: PET / Mainboard PC)
- [x] ORDER-02 AI detect Tier S + Tier C (loading 1.5s + reveal)
- [x] ORDER-03 Confirm tier + button "Sai? Sửa thủ công"
- [x] ORDER-04 Tier S giá CHẮC CHẮN (38.400đ) + breakdown 75/15/10
- [x] ORDER-05 Tier C dải giá + Hold ví ảo explainer (Trust Score-based advance ratio)
- [x] ORDER-06 Address picker pre-filled + map preview SVG
- [x] ORDER-07 Schedule pickup slot (4 chip: sáng/chiều nay + mai)
- [x] ORDER-08 Payment method (ZaloPay default + Tiền mặt)
- [x] ORDER-09 Order summary card + confirm → redirect tracking

## Module 3 — Real-time Tracking (`/orders/[id]/track`)

- [x] TRACK-01 Fake SVG map với Collector pin di chuyển từ Hub → nhà (animate 25 phút)
- [x] TRACK-02 ETA countdown mono 64px + Collector card (avatar/tên/tier/xe/rating/gọi điện)
- [x] TRACK-03 Toast notification khi ETA < 5min

## Module 4 — At-home Transaction (`/orders/[id]/transaction`)

- [x] TRANS-01 Cân tại nhà loading + reveal weight + user confirm
- [x] TRANS-02 Tier S instant final price → ZaloPay receipt
- [x] TRANS-03 Tier C Peek Check animation + Hold ví ảo announce
- [x] TRANS-04 OTP 6-digit sign-off (mock 123456)

## Module 5 — Wallet & BOM (`/wallet`)

- [x] WALLET-01 ZaloPay balance + Hold ví ảo (separated 2 card)
- [x] WALLET-02 Hold dashboard (1 đơn Pending Verify card)
- [x] WALLET-03 BOM thực view per Tier C order (BOMRevealCard component, 2 đơn verified)
- [x] WALLET-04 Phần chênh log (trong TransactionHistory + BOMRevealCard SETTLED state)
- [x] WALLET-05 Transaction history filterable (5 filter: Tất cả/Vào/Ra/Hold/Release)

## Module 6 — Trust Score (`/profile`)

- [x] TRUST-01 Trust Score gauge SVG 0-100 với 3 zone (đỏ/vàng/lime) + marker
- [x] TRUST-02 Tạm ứng % visibility (30% mới / 50% tích lũy / 70% đáng tin) + 3 milestone

## Pages built

- [x] `/` Dashboard (Linh's home) — greeting, balance, quick action, 3 recent orders
- [x] `/orders/new` Order creation 6-step flow
- [x] `/orders/[id]/track` Real-time tracking với fake map
- [x] `/orders/[id]/transaction` At-home weighing 5-substep
- [x] `/orders/[id]` Order detail (Tier S done / Tier C done with BOM / Tier C pending)
- [x] `/orders` Order history list + 4-chip filter
- [x] `/wallet` Balance + Hold + BOM history + Transaction history
- [x] `/profile` Trust Score gauge + progression milestones + read-only profile + stats

## Verification

- [x] `npm run build` thành công, dist/ có 23 file `.html`
- [x] Relativize chạy cho all 23 files (subdirs `orders/[id].html` dùng `../`, root files dùng `./`)
- [ ] Manual viewport 1280×800: full happy path Tier S (Dashboard → /new → /track → /transaction → /orders/[id])
- [ ] Manual: full Tier C path với Hold ví ảo announce
- [ ] Filter `/orders` Tier C → 3 đơn
- [ ] `/wallet` 2 section balance tách rõ + Hold đơn Pending Verify hiển thị
- [x] Không còn từ "demo" trong copy
- [x] Wording mọi nơi tiếng Việt, tiền VND format `213.700đ`

---

## Latest changes

- **2026-05-09 (Round 5d)** — Per-substep pages cho At-home Transaction:
  - Refactor `AtHomeTransaction.tsx` nhận `initialSubStep` + `isStaticDemo` (disable auto-advance timeouts) + `prefilledOtp`.
  - Thêm 11 file `src/pages/orders/transaction-flow/tier-{s,c}/{weighing,weight-reveal,peek-check,hold,price,otp,done}.astro` — mỗi file render 1 sub-step state.
  - Tier S 5 frame: weighing → weight-reveal → price → otp (prefilled) → done.
  - Tier C 6 frame: weighing → weight-reveal → peek-check → hold → otp (prefilled) → done.
  - Total +11 HTML files trong dist-figma/.
- **2026-05-09 (Round 5c)** — Per-step pages cho Tier C Order Creation: thêm `src/pages/orders/new/tier-c/step-{2..6}.astro` (sample = mainboard PC). +5 HTML files.
- **2026-05-09 (Round 5b)** — Per-step pages cho Order Creation flow:
  - Refactor `OrderCreate.tsx` nhận props `initialStep` + `initialSampleId` (default Step 1, no sample).
  - Thêm 5 file `src/pages/orders/new/step-{2..6}.astro` — mỗi file pre-load state Tier S (sample = PET) ở step tương ứng. SSR initial state nên Figma import thấy đầy đủ nội dung từng step.
  - File `orders/new.html` gốc giữ nguyên = Step 1 default.
  - Build output: thêm 5 HTML mới trong `dist/orders/new/step-X.html` và `dist-figma/orders/new/step-X.html`.
- **2026-05-09 (Round 5)** — Background brighten: bg-base #0A1410 → #14201B (+6 lightness), elevated/surface/border bump đồng bộ. Update tailwind.config.ts, global.css scrollbar, TopNav rgba, DESIGN_SYSTEM.md.
- **2026-05-09 (Round 3)** — Self-contained HTML cho Figma `html.to.design`:
  - Thêm `scripts/build-figma.mjs`: copy `dist/` → `dist-figma/`, walk 23 HTML files, inline CSS bundle (`<style>` block), images base64 (`data:image/jpeg;base64,...`), Material Symbols Outlined font woff2 base64 + `@font-face` rule. Strip toàn bộ `<script>` tags (Figma không exec JS).
  - Plus Jakarta / Inter / JetBrains Mono giữ Google Fonts CDN (Figma có sẵn 3 font này).
  - Material Symbols woff2 cache vào `scripts/.cache/material-symbols.woff2` (2.2MB) để tránh re-download mỗi build.
  - npm script `build:figma` → output `dist-figma/` 23 file ~3MB mỗi file, cleanup `_astro/` + `images/` không cần nữa.
  - Verified: index.html có 0 external CSS link, 0 `<script>`, 1 inline font + 1 inline image. Tier C BOM detail có 3 ảnh inline base64.
  - `.gitignore` mới: ignore `dist/`, `dist-figma/`, `scripts/.cache/`, `node_modules/`.
- **2026-05-09 (Round 2)** — Replan & rebuild: 23 pages thành phần B2C app thật.
  - Xoá toàn bộ Round 1 (3 page demo) → 8 routes in-app: `/`, `/orders/new`, `/orders/[id]`, `/orders/[id]/track`, `/orders/[id]/transaction`, `/orders`, `/wallet`, `/profile`.
  - Critical 15 features từ requirement.md: ORDER-01..09, TRACK-01..03, TRANS-01..04, WALLET-01..05, TRUST-01..02 — đầy đủ với mock data.
  - Mock data centralized trong `src/lib/mock.ts`: dummy user Linh, 6 orders (3 Tier S done + 2 Tier C done + 1 Tier C pending), 3 collectors, BOM library, transactions, prices.
  - Components mới: OrderCreate (6-step state machine), TrackingMap (animated SVG), AtHomeTransaction (Tier S/C path), BOMRevealCard, TrustScoreGauge, TransactionHistory.
  - Relativize.mjs upgrade: walk subdirs + compute relative path per file depth → links từ `/orders/RL-X.html` resolve qua `../index.html`, từ root qua `./index.html`. Đảm bảo Figma `html.to.design` import OK.
- **2026-05-09 (Round 1)** — Initial scaffold: 3 page (homepage 8-screen marketing, demo flow Tier S, Tier C deep dive). Now superseded.
