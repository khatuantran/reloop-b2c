# AI Handoff — RE-LOOP B2C web app (tái tạo "y chang")

> Tài liệu này + bundle `handoff/` (sinh bởi `npm run bundle:handoff`) là tất cả những gì cần để một AI (Claude) **dựng lại web app này y hệt giao diện + flow, không đổi gì**. Đọc file này trước.

---

## 0. Bundle `handoff/` gồm gì

| Thư mục | Nội dung | Vai trò khi regen |
|---|---|---|
| `screens-html/` | ~111 file `.html` **standalone** (dist-figma) — CSS inline, ảnh base64, Material Symbols → inline `<svg>`, illustration phức tạp → PNG. Mở browser xem ngay, không cần internet/build. | **Nguồn sự thật trực quan** — mỗi file = 1 màn đã render thật. So sánh pixel-by-pixel khi regen. |
| `source-code/` | Toàn bộ source Astro: `src/` (pages/components/layouts/lib/styles), `tailwind.config.ts`, `astro.config.mjs`, `package.json`, `tsconfig.json`, `scripts/`. | **Input để regen chính xác.** Cách đáng tin cậy nhất để có "y chang" là dùng lại đúng source này. |
| `raster-images/` | 29 ảnh `.jpg/.png` gốc (`public/images/`) — sample sản phẩm, BOM before/after, map background. | Asset raster duy nhất; mọi minh hoạ khác là SVG inline. |
| `docs/` | `DESIGN_SYSTEM.md` (tokens canonical), `PRD.md`, `FEATURE_TRACKER.md`, `FIGMA_IMPORT_GUIDE.md` (map 87 frame), `requirement.md` (125 feature ID từ BA), `DEPLOY.md`, `CLAUDE.md` (rule bắt buộc cho AI agent), `AI_HANDOFF.md` (file này). | Spec & ràng buộc. |
| `MANIFEST.json` | Liệt kê toàn bộ file + số lượng. | Index. |

---

## 1. Dự án là gì

**RE-LOOP** — nền tảng kinh tế tuần hoàn B2C cho hộ gia đình Việt Nam: bán rác tái chế qua web app `reloop.vn`. Persona chính: **Linh, 32 tuổi, Q.7 TPHCM**, Trust Score 65, đã có 5 đơn lịch sử, ví ZaloPay 528.400đ + HOLD ví ảo 60.000đ. Không có backend/DB/auth thật — state qua mock data + React `useState`. Đây là **frontend tĩnh** (Astro static).

**4-Tier phân loại rác:** S (Standard — PET/lon/carton, giá CHẮC CHẮN), B (Bulk/Big — đồ to/điện cũ, Speed giá sàn hoặc Auction 3 báo giá), C (Composite — mainboard/mô-tơ, tạm ứng → Hub rã xác → BOM thực → phần chênh), H (Hazardous — pin/dầu nhớt, miễn phí thu gom + chứng chỉ môi trường).

---

## 2. Tech stack & build

- **Astro 5** static (`output: 'static'`, `build.format: 'file'` → mỗi route = 1 file `.html`).
- **React 19** islands — chỉ cho 3 block tương tác: `TrackingMap`, `AtHomeTransaction`, `TransactionHistory`. Mọi thứ khác là `.astro` thuần.
- **Tailwind 3** — config (`tailwind.config.ts`) map 1-1 với `docs/DESIGN_SYSTEM.md` (file config là canonical).
- **TypeScript** strict. **Node 22+**.
- Lệnh: `npm run dev` (4321) · `npm run build` (→ `dist/` + post-build `relativize.mjs`) · `npm run build:figma` (→ `dist-figma/` standalone cho Figma/AI import) · `npm run bundle:handoff` (→ `handoff/`).
- Deploy: Netlify (xem `docs/DEPLOY.md` + `netlify.toml`).

---

## 3. Design system (tóm tắt — chi tiết: `docs/DESIGN_SYSTEM.md` + `tailwind.config.ts`)

**Round 7 v2 — light + claymorphism.** DNA lime `#52E08D`.

- **Backgrounds:** `bg-base #E5EDDD` (sage), `bg-elevated #D6E3CC` (cream-sage card), `bg-surface #C8D6BE` (inset), `bg-tinted #DCEDDF` (hero mint hint, class `grad-hero`).
- **Brand lime:** `lime-soft #C7F2D6`, `lime #52E08D`, `lime-deep #2BB36A`, `forest #0F3D26` (text on lime + footer BG), `text-on-lime`.
- **Tier colors:** `tier-s #2BB36A`, `tier-b #E8B340`, `tier-c #E68A3F`, `tier-h #D14B3B`. Phụ trợ: `amber-deep #7A5410`-ish (dùng cho HOLD ví ảo + Tier B), `info #3B8DD1`.
- **Text:** `text-primary` (đậm), `text-secondary`, `text-tertiary`. **Border:** `border-subtle`, `border-default`.
- **Clay pastels (card backdrops):** `clay-mint`, `clay-butter`, `clay-peach`, `clay-blush`, `clay-sky`, `clay-lavender`.
- **Clay shadows:** `shadow-clay-sm`, `shadow-clay`, `shadow-clay-lg`, `shadow-clay-lime`, `shadow-inset-soft`.
- **Spacing scale (px):** `space-4/8/12/16/20/24/28/32/40/48/64/96/128/160/240`. Padding ngang trang: `px-[80px]`, max-width `1280px` center, main `pt-[100px] pb-space-96`.
- **Radius:** card lớn `rounded-[28px]`/`rounded-[32px]`/`rounded-[40px]`; nút `rounded-2xl`; chip `rounded-full`; clay box icon `rounded-2xl`/`rounded-xl`.
- **Fonts (CHỈ 3 + icon font):** Plus Jakarta Sans 600/700/800 (heading — `font-display*`), Inter 400/500/600/700 (body/label/button — `font-body*`), JetBrains Mono 400/500 (token/hex/tiền/mã đơn — `font-mono-md`), **Material Symbols Rounded** (icon, fill weight 500). Type scale: `font-display-xl/l/h1/h2/h3`, `font-body-lg/md`, `font-mono-md` — xem config.
- **Hard rules (CLAUDE.md):** KHÔNG hardcode hex (luôn dùng class token); KHÔNG dùng từ "demo" trong copy; copy 100% tiếng Việt, tiền VND `213.700đ`, date `dd/MM/yyyy`; **visual-first** — mỗi section ≥40% diện tích là visual element (illustration SVG / Material icon trong clay box / clay card / chip / data-viz / sparkle); minh hoạ → SVG inline đặc sắc tự vẽ trong `src/components/illustrations/`, KHÔNG stock photo (trừ 3 chỗ: sample sản phẩm order step 1, BOM before/after, map background).

---

## 4. Map 87 màn (route → tên frame → file HTML trong `screens-html/`)

`screens-html/<route>.html` = bản render của route đó. (`screens-html/` thực tế có 111 file — 24 file thừa là template trùng/biến thể, bỏ qua khi regen; danh sách 87 màn "thật" dưới đây + `docs/FIGMA_IMPORT_GUIDE.md` là chuẩn.)

### Auth & Onboarding
`onboarding` · `login` · `login/otp` · `signup` · `signup/info` · `signup/address` · `signup/otp` · `signup/done`

### Home / Wallet / Profile
`index` (Dashboard — home của Linh) · `wallet` · `wallet/policy` · `profile` · `profile/edit`

### Orders list + Tier picker
`orders` (danh sách đơn, 6 filter chip S/B/C/H/Chờ verify/Tất cả) · `orders/new` (chọn Tier) · `orders/new/tier-s|tier-b|tier-c|tier-h` (giới thiệu tier — `tier-s`/`tier-c` đồng thời là **B1 Chụp ảnh**, dùng `PhotoStepPanel`)

### Flow đặt đơn Tier S — `[Tier S]`
B2 `orders/new/step-2` (AI nhận diện — `ItemPhoto` pet + confidence gauge 97% + material bars) → B3 `step-3` (Báo giá — card giá 75% + breakdown 75/15/10 + "vì sao 75%") → B4 `step-4` (Địa chỉ — picker nhà/văn phòng + mini-map SVG + collector quanh đây) → B5 `step-5` (Lịch hẹn — slot picker + heatmap collector) → B6 `step-6` (Xác nhận — summary 4-card + payment toggle ZaloPay/cash + terms + sticky checkout → `success`) → `orders/new/success` (đặt đơn thành công — confetti hero + timeline + quick actions Chi tiết/Theo dõi/Chat + sidebar collector + nút "Collector đã đến → bắt đầu cân").
**Giao dịch tại nhà Tier S (`transaction-flow/tier-s/`):** GD1 `weighing` (smart scale display nền tối + checklist ghi nhận + collector mini-steps) → GD2 `weight-reveal` (số to + bar đối chiếu ước↔thực + 3 ô ảnh evidence) → GD3 `price` (card giá 13.200đ + bar split 75/15/10 + so sánh "đồng nát thường +47%") → GD4 `otp` (SMS phone mockup + 6 ô OTP + flow "sau khi xác nhận OTP") → GD5 `done` (celebration + biên nhận giao dịch + 3 impact mini-card GP/CO₂/Trust).

### Flow đặt đơn Tier B — `[Tier B Speed]` / `[Tier B Auction]`
`orders/new/tier-b` (giới thiệu, tab Speed/Auction) → B2 `tier-b/quote` (chọn mode + báo giá; Speed 4 floor item + photo upload + brand/year) → **(Speed)** B3 `tier-b/address` (địa chỉ + slot + mini-map) → B4 `tier-b/confirm` → `tier-b/success`. **(Auction)** B3 `tier-b/auction` (chờ 3 báo giá) → B3 `tier-b/auction-live` (live bidding) → B4 `tier-b/auction-address` → B5 `tier-b/auction-confirm` → `tier-b/auction-success` (đấu giá thắng).

### Flow đặt đơn Tier C — `[Tier C]`
B2 `orders/new/tier-c/step-2` (AI nhận diện — `ItemPhoto` mainboard + confidence 92% + material composition pie đồng/sắt/nhôm/nhựa+FR4) → B3 `tier-c/step-3` (Dải BOM 25.000–60.000đ + card amber "vì sao chưa định giá ngay" + tạm ứng 90%·Trust 65 + BOM timeline) → B4 `step-4` (Địa chỉ — collector verified Tier C + peek-check note) → B5 `step-5` (Lịch hẹn — note 8h–17h cho Hub kịp) → B6 `step-6` (Xác nhận — dòng tiền Tier C card + sticky → `tier-c/success`) → `tier-c/success`.
**Giao dịch tại nhà Tier C (`transaction-flow/tier-c/`):** GD1 `weighing` → GD2 `weight-reveal` (+ dải BOM kỳ vọng) → GD3 `peek-check` (anti-fraud — checklist quy trình + verdict "Không phát hiện gian lận ✓" + 4 ô evidence) → GD4 `hold` (HOLD ví ảo — wallet mockup "rút được 528.400đ / sẽ HOLD sau khi xác nhận OTP ~60.000đ" + 3-tier Trust→% [30/50/90%] + BOM timeline; **lưu ý: tiền chỉ HOLD khi xác nhận OTP ở bước GD5**) → GD5 `otp` (OTP bàn giao — SMS mockup + QR niêm phong mã đơn + flow "sau khi xác nhận OTP") → GD6 `done` (đã chuyển Hub — biên nhận bàn giao + timeline 4 bước tới BOM thực + impact card).

### Flow đặt đơn Tier H — `[Tier H]`
`orders/new/tier-h` (giới thiệu) → B2 `tier-h/items` (6 hazardous card pin AA/lithium/bóng đèn/dầu nhớt/thuốc/sơn + quantity stepper + ảnh đóng gói) → B3 `tier-h/confirm` (xác nhận thu gom + ESG cert mockup) → `tier-h/success`.

### Detail · Track · Chat (8 đơn mẫu × 3 màn)
`orders/RL-2026-001234` (Tier S done) · `001241` (Tier B Speed) · `001242` (Tier B Auction) · `001243` (Tier B đang giao) · `001236` (Tier C done) · `001240` (Tier C pending verify — show BOM thực sau verify) · `RL-H-2026-000086` (Tier H done) · `RL-H-2026-000087` (Tier H pending) — mỗi đơn: `/[id]` (chi tiết), `/[id]/track` (tracking real-time — `TrackingMap` React), `/[id]/chat` (chat với collector — bubble + quick reply + composer + sidebar order context).

### Disputes
`disputes` (danh sách) · `disputes/new` (tạo tranh chấp — 4 bước: chọn đơn / loại tranh chấp / mô tả / đính kèm evidence; sidebar cam kết hoàn 100%) · `disputes/D-2026-0042` (chi tiết)

### Misc
`help` (Trung tâm hỗ trợ — search bar→AI / supportChannels 4 / tier explainer / FAQ / CTA "Chat với RE-LOOP AI" + "Tạo ticket CSKH") · `help/chat` (**Trợ lý ảo AI** — `SupportBot` illustration + chat panel hội thoại mock + quick-reply chủ đề + sidebar AI làm được gì/FAQ/đơn gần đây/cần người thật) · `notifications` · `impact` · `rewards` (Green Points) · `share` (Cháu giúp bà) · (`easy` — chế độ Đơn giản font lớn; `404` — trang lỗi)

> Click-through prototype & wiring chi tiết: `docs/FIGMA_IMPORT_GUIDE.md` (5 journey end-to-end S/B-Speed/B-Auction/C/H + chat).

---

## 5. Components & illustrations

**UI primitives (`src/components/ui/`):** `Button`, `Card`, `Pill`, `StatusChip`, `TierBadge` (props `tier: 'S'|'B'|'C'|'H'`, `size`, `variant: 'solid'|'soft'`), `EmptyState`.
**Layout/nav:** `BaseLayout.astro` (props `title`, `hideFooter`), `TopNav.astro` (props `active: 'home'|'orders'|'wallet'|'profile'`), `layout/Footer.astro` (auto-include trong BaseLayout).
**Order (`src/components/order/`):** `StepHero.astro` (hero full-width: props `eyebrow,title,subtitle,accent,illustration,chips,back`), `OrderStepperBar.astro`, `PhotoStepPanel.astro` (step 1 chụp ảnh), `TxnSidebar.astro` (sidebar giao dịch: collector card + item + tiến trình sub-step + slot), `OrderCard.astro`, `OrderKPIStrip.astro`, `BOMRevealCard.astro`, `MaterialsBreakdown.astro`, `ChainOfCustody.astro`, `HubTierBadge.astro`, `CasingFraudCard.astro`, `SpotCheckCard.astro`, `ReviewSection.astro`, `CancelRescheduleCard.astro`, + React: `AtHomeTransaction.tsx`, `TrackingMap.tsx`.
**Khác:** `home/*` (HeroSection, ImpactPreview, TierExplainerGrid, TrustScoreSection), `profile/TrustScoreGauge.astro`, `auth/AuthShell.astro` + `AuthSidebar.astro`, `wallet/TransactionHistory.tsx`.
**Illustrations (`src/components/illustrations/`, 24 file SVG inline đặc sắc):** `RecycleScene`, `EcoTree`, `GreenPointsBadge`, `TierSScene`/`TierBScene`/`TierCScene`/`TierHScene`, `WalletScene`, `PersonaLinh`, `CollectorScene`, `HubWarehouse`, `MilestoneCelebration`, `OtpPhone`, `AuthPhone`, `AntiFraudShield`, `DisputeScene`, `PackageScene`, `SupportBot` (robot AI), `ItemPhoto` (16 variant vật phẩm), + đơn giản 1-layer: `RecycleBin`, `CoinStack`, `CollectorTruck`, `GrowingTree`, `Package`. Tiêu chuẩn "đặc sắc": multi-layer, 3-stop gradients, drop-shadow ellipse, highlight strip, ambient glow, brand palette only, themed sparkles, brand markers tiếng Việt — xem §Illustration trong `docs/CLAUDE.md` + `RecycleScene.astro` làm template.

---

## 6. Mock data — single source

Mọi page import từ `source-code/src/lib/mock.ts`: `USER` (Linh), `WALLET`, `ORDERS` (8 đơn: RL-2026-001234/1235/1236/1237/1239/1240/1241/1242/1243 + RL-H-2026-000086/000087), `COLLECTORS` (c-001 Anh Tuấn / c-002 Chị Hoa / c-003), `BOM_LIBRARY`, `PRICES`, helpers `getOrderById`/`getCollectorById`. KHÔNG thêm mock mới khi regen — dùng nguyên file này.

---

## 7. Prompt cho Claude — "tái tạo y chang"

> Dán prompt dưới vào Claude, đính kèm bundle `handoff/` (hoặc các thư mục con). Nếu công cụ chỉ nhận từng file: ưu tiên đính `docs/AI_HANDOFF.md` + `docs/CLAUDE.md` + `docs/DESIGN_SYSTEM.md` + `source-code/tailwind.config.ts` + `source-code/src/lib/mock.ts` + vài `screens-html/*.html` của màn đang làm.

```
Bạn được giao tái tạo lại web app "RE-LOOP B2C" (Astro 5 static + React 19 islands + Tailwind 3).
Mục tiêu: GIỮ NGUYÊN 100% giao diện, layout, flow, copy tiếng Việt — KHÔNG đổi, KHÔNG "cải tiến", KHÔNG thêm/bớt màn.

Nguồn (đã đính kèm — bundle handoff/):
- docs/AI_HANDOFF.md  — bản đồ 87 màn + tóm tắt từng màn (đọc trước).
- docs/CLAUDE.md      — RULE BẮT BUỘC (tokens, fonts, visual-first, illustration, không dùng "demo", VND/date format, Figma compat). Tuân thủ tuyệt đối.
- docs/DESIGN_SYSTEM.md + source-code/tailwind.config.ts — design tokens canonical (config là chuẩn nếu xung đột).
- source-code/         — TOÀN BỘ source gốc. Ưu tiên DÙNG LẠI nguyên file; chỉ viết lại nếu công cụ đích cần format khác.
- screens-html/<route>.html — bản render thật, standalone (CSS inline, ảnh base64, icon SVG, illustration PNG). Đây là "ground truth" — output của bạn phải khớp pixel với file này.
- raster-images/       — ảnh raster gốc (chỉ dùng đúng các chỗ: sample sản phẩm step 1, BOM before/after, map-bg).
- docs/PRD.md, requirement.md, FEATURE_TRACKER.md, FIGMA_IMPORT_GUIDE.md — bối cảnh & wiring.

Yêu cầu:
1. Stack giữ nguyên: Astro 5 static, format:'file', React islands chỉ cho TrackingMap/AtHomeTransaction/TransactionHistory, Tailwind 3 với tailwind.config.ts y hệt, 3 fonts + Material Symbols Rounded.
2. Mỗi route trong "Map 87 màn" → 1 file .astro tại đúng path src/pages/... khớp với screens-html/<route>.html tương ứng.
3. Dùng nguyên src/lib/mock.ts, src/components/*, src/components/illustrations/* — không tạo mock mới, không vẽ lại illustration.
4. Tuyệt đối tuân thủ docs/CLAUDE.md: không hardcode hex, không từ "demo", copy tiếng Việt, tiền VND dấu chấm, visual-first ≥40% mỗi section.
5. Sau khi dựng: chạy `npm run build` (phải clean) → so sánh từng dist/<route>.html với screens-html/<route>.html; chỗ nào lệch thì sửa cho khớp. Chạy `npm run build:figma` (icons → SVG 0 fail).
6. Không refactor, không đổi tên route, không gộp/tách màn, không đổi màu/spacing/copy.

Bắt đầu: liệt kê 87 route bạn sẽ tạo (theo docs/AI_HANDOFF.md §4), xác nhận hiểu rule, rồi dựng theo nhóm module (Auth → Home/Wallet/Profile → Orders+Tier flows → Detail/Track/Chat → Disputes → Misc).
```

---

## 8. Verify sau khi regen

1. `npm run build` clean → `dist/<route>.html` tồn tại cho cả 87 route.
2. Chrome headless screenshot 1280px từng màn → đối chiếu với `screens-html/<route>.html` (mở file standalone cạnh bên). Khác → fix.
3. `npm run build:figma` → "icons: N span → inline SVG, 0 fail", illustration → PNG.
4. `node scripts/figma-frames.mjs` → 87 frame, không "route chưa có rule".
5. Click-through 5 journey trong `docs/FIGMA_IMPORT_GUIDE.md` (Tier S/B-Speed/B-Auction/C/H + chat) — link liên hoàn, không 404.
6. `docs/FEATURE_TRACKER.md` — đối chiếu checklist tính năng đã build.
