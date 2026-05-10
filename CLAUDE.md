# CLAUDE.md — RE-LOOP B2C Web App

Hướng dẫn cho AI agent làm việc trên repository này.

## Bối cảnh

RE-LOOP là nền tảng kinh tế tuần hoàn B2C cho hộ gia đình Việt Nam — bán rác tái chế qua web app `reloop.vn`. Repo này build **frontend B2C web app**, không có backend, không có database, không có authentication thật. State quản lý qua mock data trong `src/lib/mock.ts` + React `useState`.

Tài liệu nguồn:

- `docs/requirement.md` **v0.3** — **canonical spec** từ BA. Chứa 12 user journey, 11 modules, **125 feature IDs** (AUTH/GEO/ORDER/TRACK/TRANS/WALLET/TRUST/GP/LOYALTY/PROFILE/EASY/NOTIF/CHAT/REVIEW/DISPUTE/HELP/IMPACT). Tất cả discussion feature **phải tham chiếu IDs trong file này**. v0.3 plug 3 gap: Tier C anti-fraud user-facing, Route tracking pro-grade (polyline/cluster/replay), Payment/GP precise rules (Hold expire, tax invoice, GP per-tier earning).
- `docs/PRD.md` — "what we built" cho round hiện tại (subset của requirement.md).
- `docs/DESIGN_SYSTEM.md` — design tokens canonical.
- `docs/FEATURE_TRACKER.md` — checklist tiến độ.
- `docs/RE-LOOP_v5_Executive_Summary.docx` — business logic gốc.

## Scope hiện tại (Round 2)

**Critical path 15 features** từ requirement.md §4.1 (Phase 1 MVP subset của 125 features tổng):

- ORDER-01..09 (chụp ảnh → AI detect → tier → giá → address → slot → payment → summary → confirm)
- TRACK-01..03 (real-time location pin, ETA, notif toast)
- TRANS-01..04 (cân tại nhà, instant Tier S, Hold ví ảo Tier C, sign-off)
- WALLET-01..05 (balance, Hold dashboard, BOM thực, phần chênh, history)
- TRUST-01..02 (score display, tạm ứng % logic)

**Skip cho round này** (đã đặc tả v0.3, build round sau):

- AUTH/GEO/PROFILE/EASY/NOTIF real, REVIEW/DISPUTE/HELP, Tier B (Speed/Auction)/Tier H flows
- Anti-fraud user-facing (WALLET-09..12, TRUST-05): Casing Fraud modal, Spot Check, Chain of Custody, Hub Tier badge, AI soft-flag
- Tracking pro-grade (TRACK-04..12): chat, polyline, cluster, geofence, traffic ETA, route replay, Hub-leg
- Payment/GP rules (WALLET-13..17, GP-12..16, LOYALTY-03..05): Hold 72h expire, tax invoice, fee transparency, cash incentive disclosure, GP earning per tier, expiration, rounding, loyalty thresholds
- IMPACT, "Cháu giúp bà", Referral, Streak, Voucher/Tree/Donation, mobile-first, real AI/map.

## Stack

- **Astro 5** — output static, mỗi route → 1 file `.html`
- **React 19** islands — chỉ cho block tương tác (`TrackingMap`, `AtHomeTransaction`, `TransactionHistory`). Flow đặt đơn Tier S/C giờ là **bespoke `.astro` pages** giống flow Tier B (không còn `OrderCreate` React component) — xem `src/pages/orders/new/step-2..6.astro`, `src/pages/orders/new/tier-c/step-2..6.astro`; sub-step giao dịch trong `src/pages/orders/transaction-flow/{tier-s,tier-c}/*.astro` cũng là bespoke `.astro` (dùng `TxnSidebar.astro` cho sidebar collector + vật phẩm + tiến trình). `AtHomeTransaction.tsx` chỉ còn dùng bởi `orders/[id]/transaction.astro`.
- **Tailwind 3** — config map 1-1 với `docs/DESIGN_SYSTEM.md`
- **TypeScript** strict
- **Node 22+** bắt buộc (`export PATH="/opt/homebrew/bin:$PATH"` nếu hệ thống có node v12 cũ)

## Routes (8)

| Route | Page |
|-------|------|
| `/` | Dashboard (Linh's home) |
| `/orders/new` | Order creation flow |
| `/orders` | Order history list |
| `/orders/[id]` | Order detail (Tier C show BOM thực) |
| `/orders/[id]/track` | Real-time tracking |
| `/orders/[id]/transaction` | At-home weighing |
| `/wallet` | Wallet & BOM verification |
| `/profile` | Read-only profile + Trust Score |

Không có `/login`, `/signup`, `/`-as-marketing-landing. App giả định user "Linh" đã đăng nhập sẵn.

## Quy tắc bắt buộc

### Không dùng từ "demo"
Repo round 1 từng là demo. Round 2 là **app thật mock**. Bỏ hết "demo" trong copy, route, component name, button label.

### Fonts — chỉ 3 fonts (Figma compatibility)
- **Plus Jakarta Sans** (600/700/800) — heading
- **Inter** (400/500/600) — body, label, button
- **JetBrains Mono** (400/500) — token name, hex, số tiền, mã đơn

### Design tokens — không hardcode
Luôn dùng class token: `bg-bg-elevated`, `text-text-primary`, `border-border-subtle`, `text-tier-s`, `font-display-xl text-display-xl`, `p-space-24`. Không bao giờ `bg-[#52E08D]`.

**Round 7 — Design v2 (light + clay)**: tokens light mode (`bg-base #E5EDDD` sage, `bg-elevated #D6E3CC` cream-sage, lime DNA giữ); clay shadows (`shadow-clay-sm/clay/clay-lg/clay-lime`); clay pastels (`bg-clay-mint/butter/peach/blush/sky/lavender`); Material Symbols **Rounded** (claymorphism). Footer auto-include trong BaseLayout (Contact + Certifications + Legal + Quick links).

### Visual-first rule — BẮT BUỘC trang nhiều hình + icon, không text-only

Mọi page/section/card **PHẢI** thiết kế visual-first: hình minh họa SVG + Material icons + clay BG + chips/badges chiếm tối thiểu **40% diện tích** mỗi section. **KHÔNG** chấp nhận trang chỉ toàn text + button (look "đơn giản"/"trống"/"unfinished").

**Density target per page:**

- **Hero section**: phải có 1 SVG illustration đặc sắc (xem §Illustration rule) + 2-3 floating chip overlay + gradient backdrop. **Không** dùng hero text-only.
- **Section bất kỳ** (≥ 200px tall): tối thiểu **3 visual elements** — combo của: SVG illustration / clay BG card / Material icon trong rounded clay box / status chip / floating badge / data viz (gauge/bar/sparkline) / decorative element (sparkle, dot pattern).
- **Card list/grid**: mỗi card phải có **icon hoặc illustration** ở header/leading position (không phải pure text card). Tier card → SVG scene; transaction row → clay icon BG; stat card → Material icon trong clay rounded.
- **Empty state**: SVG illustration đặc sắc + chip CTA. Không dùng text "Không có gì" trống không.
- **Form section**: input có leading icon, slot picker có 2-line label + visual hierarchy, OTP cell có clay BG khi filled.

**Visual elements toolkit** (mix-and-match cho mọi section):

1. **SVG illustrations** — `src/components/illustrations/*` (xem §Illustration rule)
2. **Material Symbols Rounded icons** — trong rounded `clay-X` box `w-10 h-10` đến `w-16 h-16`, fill weight 500
3. **Clay pastel cards** — backdrop `clay-mint/butter/peach/blush/sky/lavender` với border và shadow
4. **Status/tier chips** — `border-2` đậm, font mono semibold, accent color
5. **Floating badges** — pill shape `bg-bg-elevated/95 backdrop-blur` với metric (CO₂, GP, ETA)
6. **Data viz** — gauge SVG (TrustScoreGauge), sparkline, progress bar 3-zone, polyline route, bar chart
7. **Decorative sparkles** — 4-point stars, dots, confetti rectangles trong corners
8. **Photo evidence** (chỉ 3 chỗ cho phép — xem stock photo rule §Illustration): sample product, BOM before/after, map background

**Pattern: "every page is a magazine cover, not a Word doc."**

Khi review trang vừa build:
- Đếm visual elements: < 3/section → fail, thêm illustration/icon/chip/badge cho đến đủ
- Test bằng câu hỏi: "Trang này nhìn cuốn hơn Notion/Linear không?" Nếu không → chưa đủ visual
- Block off section text dài quá 4 dòng không có visual break — chèn icon, divider clay, sparkline, illustration giữa

**Reference quality**:
- Apple Memoji UI, Notion icon library, Stripe homepage, Pixar movie poster — đó là tone visual-rich
- Anti-pattern: Wikipedia article, plain admin dashboard, raw data table — text-only fail

### Illustration rule — BẮT BUỘC dùng SVG đặc sắc tự vẽ

Mọi page/section/empty state cần minh họa **PHẢI** dùng SVG inline tự vẽ trong `src/components/illustrations/`, **KHÔNG** dùng stock photo (Loremflickr, Unsplash random, picsum). Lý do: stock photo random thường off-theme, kém brand alignment, license rủi ro. SVG tự vẽ rẻ (~10KB), crisp ở mọi resolution, render trong Figma html.to.design, match chính xác palette lime/clay.

**Tiêu chuẩn "đặc sắc" của 1 SVG illustration:**

1. **Multi-layer composition** — tối thiểu 4-6 lớp (background → mid → foreground → overlay sparkles). Không phải single shape.
2. **Gradient richness** — dùng `<radialGradient>` / `<linearGradient>` cho mỗi vật thể chính (3-stop gradient với highlight + base + shadow color).
3. **Depth cues** — drop shadow ellipse dưới vật thể (`fill="#0F1F18" opacity="0.18"`), highlight strip trắng opacity 0.4-0.55, ambient glow radial backdrop.
4. **Brand palette only** — chỉ dùng colors từ `tailwind.config.ts` (lime/lime-deep/forest, tier-s/b/c/h, clay-mint/butter/peach/blush/sky/lavender, amber-deep). Không hardcode màu lạ.
5. **Themed sparkles & accents** — tối thiểu 3-5 sparkle elements: 4-point stars, dots, confetti rectangles, floating coins/leaves.
6. **Context-specific objects** — vẽ vật phẩm liên quan trực tiếp scene (Tier S = chai PET + lon + carton; Tier C = mainboard + dây đồng; Wallet = phone + coin + card; Persona = avatar chi tiết với mắt + mũi + tóc).
7. **Brand markers** — embed badge/pill có copy tiếng Việt ("BOM thực", "+50 GP", "ZaloPay 60s", "AUCTION") để illustration tự kể câu chuyện.
8. **Material Symbols emoji KHÔNG đếm là illustration** — chỉ là icon nhỏ. Illustration phải là scene đầy đủ.

**Library hiện tại** (`src/components/illustrations/`):

| File | Dùng cho | Đặc điểm |
|---|---|---|
| `RecycleScene.astro` | Hero home | Bin lớn + bottle + can + carton + city skyline |
| `EcoTree.astro` | Impact preview | Cây 3-layer foliage + sun + clouds + birds + flowers |
| `GreenPointsBadge.astro` | Trust GP card | Badge "GP" tròn star-burst + coin stack + leaves |
| `TierSScene.astro` | Tier S explainer | PET bottles + can + carton + recycle bubble |
| `TierBScene.astro` | Tier B explainer | Fridge LCD + sofa + auction badge + price tag |
| `TierCScene.astro` | Tier C explainer | PCB chip + capacitors + copper spool + "?" |
| `TierHScene.astro` | Tier H explainer | Car battery + AA cluster + bulb + hazard triangle |
| `WalletScene.astro` | Wallet hero | Phone ZaloPay UI + credit card + coin stack |
| `PersonaLinh.astro` | Profile avatar Linh | Khuôn mặt chi tiết tóc/mắt/mũi + recycle pendant |
| `SupportBot.astro` | Trợ lý ảo AI (`/help/chat`, hero + entry trên `/help`) | Robot claymorphism: đầu mint screen-face (mắt + nụ cười), ăng-ten lá tái chế, thân ôm bong bóng chat "AI", coin lá, badge "AI · 24/7", sparkles |
| `RecycleBin.astro`, `CoinStack.astro`, `CollectorTruck.astro`, `GrowingTree.astro`, `Package.astro`, `OtpPhone.astro` | Empty state, deprecated hero | SVG đơn giản hơn (1-layer), dùng thay thế khi không cần đặc sắc |

**Khi cần illustration mới** (ví dụ: persona Bà Năm, persona Minh, Hub warehouse, dispute flow):

1. **Tạo file mới** `src/components/illustrations/<Name>Scene.astro` (PascalCase + Scene suffix nếu phức tạp).
2. ViewBox chuẩn: 400×300 cho card thumbnail, 400×400 cho square hero, 480×480 cho landscape hero.
3. Inline SVG, props `class?: string`, dùng tokens trong `tailwind.config.ts`.
4. Apply 8 tiêu chuẩn trên. Tham khảo `RecycleScene.astro` làm template.
5. Import vào page → wrap trong container có `shadow-clay` + `rounded-[28px]` + floating chip overlays để hoàn thiện hero.
6. Update bảng library trên + log trong `docs/FEATURE_TRACKER.md` Latest changes.

**Stock photos** — chỉ dùng cho:
- Sample product preview (`sample-pet.jpg`, `sample-mainboard.jpg` etc.) trong order flow step 1 (vì cần show ảnh thật của vật phẩm bán)
- BOM before/after Hub rã xác (`bom-before.jpg`, `bom-after.jpg`) vì cần evidence raster
- Map background (`map-bg.png`) Google Maps screenshot

Mọi chỗ khác (hero, empty state, persona, trust, impact, GP, footer accent) → SVG inline đặc sắc.

### Mock data — single source
Mọi page import từ `src/lib/mock.ts` (USER, WALLET, ORDERS, COLLECTORS, BOM_LIBRARY, PRICES). State change qua React `useState` in-memory.

### Width target
1280px desktop, padding ngang 80px, max-width center. Mobile responsive là best-effort, không phải priority.

### Vietnamese copy canonical
Toàn bộ user-facing là tiếng Việt. Định dạng tiền VND dấu chấm: `213.700đ`. Date `dd/MM/yyyy`.

### Cập nhật FEATURE_TRACKER
Mỗi feature xong → tick checkbox trong `docs/FEATURE_TRACKER.md` + thêm dòng "Latest changes" log.

## Lệnh

```bash
export PATH="/opt/homebrew/bin:$PATH"   # nếu hệ thống có Node v12 cũ
npm run dev          # localhost:4321
npm run build        # → dist/ với post-build relativize (multi-file, dev preview)
npm run build:figma  # → dist-figma/ self-contained HTML cho Figma html.to.design import
npm run bundle:handoff  # → handoff/ (screens-html + source-code + raster-images + docs) để hand cho AI tái tạo; xem docs/AI_HANDOFF.md
npm run preview      # serve dist/
```

**AI handoff bundle** (`scripts/bundle-handoff.mjs` → `handoff/`, gitignored): đóng gói toàn bộ artifact (HTML standalone, source, ảnh, docs) + `docs/AI_HANDOFF.md` (spec + prompt) để hand cho Claude/công cụ design dựng lại app y chang. Thêm route/màn mới → `docs/AI_HANDOFF.md` §4 (map 87 màn) cần cập nhật theo.

## Building for Figma import

Plugin Figma `html.to.design` thường chỉ nhận **1 file HTML đơn lẻ** — không reach được folder `images/` hoặc `_astro/css` cùng cấp. Vì vậy chạy `npm run build:figma` để tạo folder `dist-figma/` song song với `dist/`:

- Mỗi `dist-figma/<route>.html` **hoàn toàn standalone ~4-6MB** (mở trong browser không cần internet, import vào `html.to.design` không lỗi):
  - CSS bundle inline `<style>` block
  - Images base64 data URI
  - Text fonts (Plus Jakarta Sans / Inter / JetBrains Mono / Roboto) inline base64 `@font-face` (~2.3MB), cache `scripts/.cache/gf-<hash>.css`
  - **Material Symbols icon → inline `<svg>`** (KHÔNG dùng icon font): mọi `<span class="material-symbols-rounded|outlined ...">name</span>` được thay bằng `<svg viewBox="0 -960 960 960" fill="#hex">…path…</svg>` lấy từ Google icon CDN (`fonts.gstatic.com/s/i/short-term/release/materialsymbols{rounded|outlined}/{name}/{default|fill1}/24px.svg`), cache `scripts/.cache/icons/`. **Lý do BẮT BUỘC**: `html.to.design` render `@font-face` data-URI không đáng tin → icon font (kể cả logo) không hiện. Màu icon: parse `text-<token>`/`text-[#hex]` class → resolve sang hex (`TW_COLORS` map trong `scripts/build-figma.mjs`) vì plugin **không tính `currentColor`** từ `color` của parent → nếu để `currentColor` thì icon biến đen. Không có color class → giữ `currentColor`. Brand icon không có trong Material Symbols (`facebook`, `instagram`, …) → map sang icon thay thế qua `ICON_ALIAS`.
  - **Illustration SVG phức tạp → PNG `<img>`** (rasterize bằng Chrome headless): SVG có `<linearGradient>`/`<radialGradient>`/`<defs>`/`<pattern>`/`<filter>` HOẶC ≥6 child element được render ra PNG 2x rồi thay bằng `<img style="object-fit:contain">`. **Lý do BẮT BUỘC**: `html.to.design` cố recreate từng `<path>`/`<rect>`/`<gradient>` thành Figma vector → mất vị trí/gradient, illustration chồng lệch vỡ. `<img>` thì plugin rasterize 100% chính xác. Cần Chrome (`/Applications/Google Chrome.app/...` hoặc set `CHROME_PATH`); nếu thiếu Chrome thì skip (illustration giữ inline SVG, có thể vỡ). Cache PNG `scripts/.cache/illu/`. Icon SVG (viewBox `0 -960 960 960`) KHÔNG bị rasterize.
  - Lớp CSS `figma-optimize` inject thêm: khoá tỉ lệ SVG illustration (plugin bỏ qua `preserveAspectRatio`), tắt `backdrop-filter`, làm phẳng `grad-hero` radial gradient, bỏ `position: sticky`.
  - JS bundles strip (Figma không exec)

**RULE — tương thích `html.to.design`**: KHÔNG dùng icon name không tồn tại trong [Material Symbols](https://fonts.google.com/icons) (vd brand logo `facebook`/`twitter`). Nếu cần brand icon, thêm vào `ICON_ALIAS` map trong `scripts/build-figma.mjs` HOẶC dùng inline SVG path trực tiếp trong component. **Tránh các HTML pattern plugin render sai**: (a) `<details>`/`<summary>` — plugin không tôn trọng UA style `details:not([open])`, render lệch; dùng `<div>` tĩnh hiển thị luôn nội dung (prototype không cần toggle thật). (b) Thuộc tính `value=` trên `<input>` — plugin render `value` thành text hiện rõ trong frame; bỏ `value`, để `checked` cho radio pre-select. (c) `<textarea>` rỗng (placeholder không phải nội dung thật) → render hộp trống; dùng `<div class="min-h-[Npx]">` chứa text mô tả tĩnh `text-text-tertiary`. (d) `aspect-square`/`aspect-ratio` → plugin không tính được → ô bị xẹp; dùng chiều cao cố định `h-[Npx]`. Khi thêm CSS feature mới hay dùng (`backdrop-blur`, `radial-gradient` phức tạp, `position: sticky`, SVG `w-full h-full`) → cân nhắc thêm rule vào `FIGMA_OPTIMIZE_CSS`. Sau mỗi lần đổi font/icon trong `BaseLayout.astro` → cập nhật `GF_TEXT_CSS_URL` trong `scripts/build-figma.mjs` cho khớp, và xoá `scripts/.cache/` nếu cần refresh.

Workflow Figma import (chi tiết: `docs/FIGMA_IMPORT_GUIDE.md`):
1. `npm run build:figma`
2. `node scripts/figma-frames.mjs` → in danh sách 81 file curated + tên frame `[Module] · …` (auto-gen từ `dist-figma/` qua `ROUTE_RULES`; thêm page mới → script báo route chưa có rule). `--snippet` → đoạn JS đổi tên hàng loạt trong Figma. `--list` → danh sách phẳng.
3. Mở Figma → plugin `html.to.design` → paste content từng file `dist-figma/*.html` theo thứ tự bảng
4. Chạy snippet đổi tên (Figma plugin console hoặc qua MCP `use_figma`)

## Persona context

App build cho **Linh, 32 tuổi, Q.7 TPHCM** (PRIMARY persona theo requirement.md §2.1):

- Trust Score 65 ("Đang tích lũy" zone)
- Đã có 5 đơn lịch sử (3 Tier S done, 2 Tier C done, 1 Tier C đang Pending Verify)
- Wallet ZaloPay 528.400đ + Hold ví ảo 60.000đ
- Quen ZaloPay, không cần UI Đơn giản
- Bán PET/carton hằng tuần, mô tơ thỉnh thoảng

Mọi UX quyết định bám persona này. Bà Năm + Minh ("Cháu giúp bà") là round sau.
