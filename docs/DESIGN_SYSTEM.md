# RE-LOOP Design System v2 — Light + Claymorphism

Single source of truth cho design tokens. Khi có conflict giữa file này và `tailwind.config.ts`, **`tailwind.config.ts` là canonical** (file này phản ánh tokens trong đó).

**Round 7 — chuyển từ dark forest green v1 → light sage + cream + clay v2.** DNA lime `#52E08D` giữ nguyên.

## 1. Color tokens (v2 light)

### Foundation backgrounds
| Token | Hex | Usage |
|-------|-----|-------|
| `bg-base` | `#E5EDDD` | Page background — sage nhẹ |
| `bg-elevated` | `#D6E3CC` | Cards, sections cần nâng khỏi page (cream-sage) |
| `bg-surface` | `#C8D6BE` | Inset, divider, secondary surface |
| `bg-tinted` | `#DCEDDF` | Mint hint backdrop cho hero |

### Brand — Lime DNA
| Token | Hex | Usage |
|-------|-----|-------|
| `lime-soft` | `#C7F2D6` | Soft lime fill, badge BG |
| `lime` | `#52E08D` | Primary CTA · success · lime accent (DNA) |
| `lime-deep` | `#2BB36A` | Hover state lime, eyebrow heading |
| `forest` | `#0F3D26` | Dark text on lime, footer BG |
| `primary` | `#52E08D` | Alias = lime (backward compat) |
| `primary-container` | `#C7F2D6` | Alias = lime-soft (backward compat) |

### 4-Tier waste classification (softened cho light)
| Token | Hex | Tier |
|-------|-----|------|
| `tier-s` | `#2BB36A` | Standard — đồng nhất, AI confidence cao |
| `tier-b` | `#E8B340` | Bulky — cồng kềnh, dải giá |
| `tier-c` | `#E68A3F` | Complex — phức tạp, tạm ứng + chốt sau |
| `tier-h` | `#D14B3B` | Hazardous — nguy hại, cần giấy phép |

### Clay pastels (3D illustration backdrop + chip BG)
| Token | Hex | Usage |
|-------|-----|-------|
| `clay-mint` | `#BFE8CE` | Tier S, success chip, GP card |
| `clay-butter` | `#F2D58F` | Tier B, warning, Hold ví ảo, amber |
| `clay-peach` | `#F2C2A6` | Tier C, complex |
| `clay-blush` | `#E8B0AB` | Tier H, error, dispute |
| `clay-sky` | `#B5D2E5` | Info, In Transit, payment ZaloPay |
| `clay-lavender` | `#C7BCE8` | Optional, OTP/auth |

### Text
| Token | Hex | Usage |
|-------|-----|-------|
| `text-primary` | `#0F1F18` | Headings, primary content (dark forest) |
| `text-secondary` | `#41524A` | Body, captions |
| `text-tertiary` | `#7C8A82` | Hints, metadata, disabled |
| `text-on-lime` | `#0A1F12` | Text trên lime button (contrast 7:1+) |
| `amber-deep` | `#7A5410` | Text on clay-butter (avoid tier-b/butter low contrast) |

### Borders
| Token | Hex | Usage |
|-------|-----|-------|
| `border-subtle` | `#B8C9AE` | Default card and divider borders |
| `border-default` | `#A0B496` | Hover, input border |
| `border-strong` | `#6F8567` | Strong divider |

### Semantic (= tier colors aliased)
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#2BB36A` | = tier-s · confirmation |
| `warning` | `#E8B340` | = tier-b · caution (text dùng amber-deep) |
| `error` | `#D14B3B` | = tier-h · destructive |
| `info` | `#3B8DD1` | Tracking, ZaloPay |

## 1b. Clay shadows (Round 7)

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-clay-sm` | `0 4px 10px -2px rgba(15,31,24,.06), 0 2px 4px -2px rgba(15,31,24,.04)` | Mini chip, secondary card |
| `shadow-clay` | `0 12px 28px -8px rgba(15,31,24,.10), 0 4px 8px -4px rgba(15,31,24,.06)` | Default card, button |
| `shadow-clay-lg` | `0 24px 48px -12px rgba(15,31,24,.14), 0 8px 16px -8px rgba(15,31,24,.08)` | Hero, big card hover |
| `shadow-clay-lime` | `0 12px 28px -8px rgba(82,224,141,.35), 0 4px 8px -4px rgba(82,224,141,.20)` | Lime CTA primary |
| `shadow-inset-soft` | `inset 0 2px 4px rgba(255,255,255,.6), inset 0 -2px 4px rgba(15,31,24,.06)` | Inset card, surface BG |

## 2. Typography scale

Fonts: **Plus Jakarta Sans** (display & headings), **Inter** (body & labels), **JetBrains Mono** (code, hex, numeric).

| Token | Size | Line height | Weight | Letter spacing | Family |
|-------|------|-------------|--------|----------------|--------|
| `display-xl` | 96px | 100px | 800 | -3% | Plus Jakarta Sans |
| `display-l` | 72px | 76px | 800 | -2.5% | Plus Jakarta Sans |
| `display-m` | 56px | 60px | 700 | -2% | Plus Jakarta Sans |
| `h1` | 40px | 48px | 700 | -1.5% | Plus Jakarta Sans |
| `h2` | 32px | 40px | 700 | -1% | Plus Jakarta Sans |
| `h3` | 24px | 32px | 600 | 0 | Plus Jakarta Sans |
| `h4` | 20px | 28px | 600 | 0 | Plus Jakarta Sans |
| `body-lg` | 18px | 28px | 400 | 0 | Inter |
| `body-md` | 16px | 24px | 400 | 0 | Inter |
| `mono-md` | 16px | 1.5 | 500 | 0 | JetBrains Mono |
| `eyebrow` | 12px | 1 | 600 | +12% | Inter (uppercase) |

Tailwind usage: `class="font-display-xl text-display-xl"` — cả family lẫn size đều cùng token name.

## 3. Spacing — 8-point grid

| Token | px |
|-------|-----|
| `space-4` | 4 |
| `space-8` | 8 |
| `space-12` | 12 |
| `space-16` | 16 |
| `space-24` | 24 |
| `space-32` | 32 |
| `space-48` | 48 |
| `space-64` | 64 |
| `space-96` | 96 |
| `space-128` | 128 |
| `space-160` | 160 |
| `space-240` | 240 |

Default gap giữa items: `space-24`. Default section margin: `space-64` (mobile) / `space-160` (desktop).

## 4. Border radius

| Token | Value |
|-------|-------|
| `rounded` (DEFAULT) | 0.25rem (4px) |
| `rounded-lg` | 0.5rem (8px) |
| `rounded-xl` | 0.75rem (12px) |
| `rounded-2xl` | 1rem (16px) |
| `rounded-3xl` | 1.5rem (24px) |
| `rounded-full` | 9999px |

Convention: input/small element 12px, medium card 16px, major section 24px, button/pill 9999px.

## 5. Motion

### Easings
| Token | cubic-bezier | Use |
|-------|--------------|-----|
| `ease/out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default 400ms |
| `ease/in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Page transitions 800ms |
| `ease/spring` | `spring(180, 22)` | Drag-drop 600ms |
| `ease/linear` | `linear` | Progress bars only 1200ms |

### Durations
| Token | ms | Use |
|-------|-----|-----|
| `motion/instant` | 100 | Micro feedback |
| `motion/medium` | 400 | Default transition |
| `motion/dramatic` | 1200 | Storytelling moments |

## 6. Components (v2 clay)

### Button — 5 variants
- **Primary** (lime): bg `lime`, text `text-on-lime`, `shadow-clay-lime`, hover `bg-lime-deep`, hover `-translate-y-[2px]`. Default CTA.
- **Dark**: bg `text-primary`, text `white`, `shadow-clay`, hover `bg-forest`. Secondary action quan trọng.
- **Ghost**: bg `bg-elevated`, border `border-default`, text `text-primary`, `shadow-clay-sm`, hover `shadow-clay`. Cancel/back.
- **Tier-c**: bg `tier-c`, text `white`, `shadow-clay`. Tier C accent CTA.
- **Cash**: bg `clay-butter`, text `amber-deep`, border-2 `amber-deep/30`, `shadow-clay-sm`. Tiền mặt option.

Sizes: padding `space-24 py-space-12` (md) / `space-32 py-[14px]` (lg), font Inter 14-16px semibold, radius `2xl` (`1.25rem`).

Hover state: `-translate-y-[2px]`. Active: `scale-[0.98]`.

### Card — 8 variants
- **Default**: bg `bg-elevated`, border 1px `border-subtle`, radius `[28px]`, `shadow-clay`, padding `space-32`.
- **Flat**: bg `bg-surface` (inset look).
- **Mint**: bg `clay-mint`, border `tier-s/20` — success/Tier S/GP.
- **Butter**: bg `clay-butter`, border `amber-deep/20` — Hold ví ảo, Tier B, warning.
- **Peach**: bg `clay-peach`, border `tier-c/20` — Tier C, complex.
- **Blush**: bg `clay-blush`, border `tier-h/20` — Tier H, dispute, error.
- **Sky**: bg `clay-sky`, border `info/20` — info, payment.
- **Lavender**: bg `clay-lavender`, border `border-default` — OTP, auth.

Hover: `-translate-y-1`, `shadow-clay-lg`.

### StatusChip — border-2 đậm, clay BG
Padding `space-12 py-[3px]`, radius `full`, **border 2px** với accent/50 opacity, font JetBrains Mono 11px semibold. Variants:
- COMPLETED / VERIFIED → `bg-clay-mint` `text-tier-s` `border-tier-s/50`
- PENDING_VERIFY / HOLD → `bg-clay-butter` `text-amber-deep` `border-amber-deep/50`
- IN_TRANSIT / AT_PICKUP → `bg-clay-sky` `text-info` `border-info/50`
- SETTLED → `bg-lime` `text-text-on-lime` `border-lime-deep`
- CANCELLED → `bg-clay-blush` `text-tier-h` `border-tier-h/50`

### TierBadge — solid + soft variants
- **Solid** (default): bg `tier-X` solid, text white (B = text-primary). Padding `space-4 space-12`, font Plus Jakarta Sans extrabold.
- **Soft**: bg `clay-X` (mint/butter/peach/blush), text `tier-X`, border `tier-X/40`. Dùng trong list row.

### Pill — clay pastel + border-2
Padding `space-4 space-12`, radius `full`, **border 2px**, `shadow-clay-sm`, font JetBrains Mono 12px semibold. 6 variants: success/warning/error/info/neutral/lime — mỗi cái match `clay-X` BG + `tier-X/40` border.

### Input + OTP
- **Input**: bg `bg-surface`, border 1px `border-default`, radius `2xl`, padding `space-16 py-[14px]`. Focus: border `lime-deep` 2px + ring 4px `lime/20`. Inner shadow `shadow-inset-soft`.
- **OTP cell** (12×14 single digit): `w-12 h-14`, rounded `2xl`, font JetBrains Mono 24px bold. Empty: bg `bg-surface` border `border-default`. Filled: bg `clay-mint` border-2 `tier-s` text `text-primary`.

### EmptyState
SVG illustration 96×96 trong `clay-X` rounded-3xl `shadow-clay`. Thay vì `<span class="material-symbols">` icon đơn → dùng SVG đặc sắc nếu trang quan trọng (xem §8 Illustration Rule).

## 7. Iconography

**Material Symbols Rounded** (Round 7 — đổi từ Outlined sang Rounded để hợp claymorphism aesthetic). Google Fonts: `family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400..700,0..1`.

Default: weight 500, size 18-24px, color `text-secondary` hoặc context-tier color. Active/selected: `fill 1`, weight 500-700.

Class trong code: `material-symbols-rounded` (không còn dùng `outlined`). Filled: thêm class `fill` (đã defined trong `global.css`).

Common icons:
- `recycling` (logo, Tier S, eco)
- `kitchen` (Tier B fridge), `chair` / `weekend` (Tier B sofa)
- `memory` / `developer_board` (Tier C circuit), `cable` (dây điện)
- `battery_alert` / `dangerous` (Tier H), `chemical_weapon` (chất thải)
- `photo_camera` / `add_a_photo` (upload step)
- `auto_awesome` (AI step)
- `schedule` (slot picker)
- `account_balance_wallet` (ZaloPay), `payments` (Tiền mặt)
- `verified` (Trust Score, certifications), `lock` (HOLD ví ảo), `lock_open` (release)
- `two_wheeler` (Collector pin trên map), `directions_bike` (in transit)
- `arrow_forward` / `chevron_right` (CTA, navigation)
- `add_circle` (đặt đơn mới)
- `call` (Collector phone)
- `eco` / `park` / `forest` (impact, GP, Xanh nhà em)
- `share` (social card)
- `flag` (milestone), `star` (rating)
- `home` (User home pin), `location_on` (address)
- `hourglass_top` (pending verify), `fact_check` (BOM verify done)
- `policy` (Peek Check anti-fraud)
- `cloud_off` (CO₂ saved)
- `gavel` (compliance, NĐ 08), `groups` (VRA member)

---

## 8. Illustration Rule (BẮT BUỘC) — SVG đặc sắc tự vẽ

Mọi page/section/empty state cần minh họa **PHẢI** dùng SVG inline trong `src/components/illustrations/`. **KHÔNG** dùng stock photo (Loremflickr, Unsplash random, picsum) cho hero/feature/persona/impact section.

**Lý do:**
- Stock photo random → off-theme, kém brand alignment, license rủi ro
- SVG tự vẽ rẻ (~10KB), crisp ở mọi resolution, render trong Figma `html.to.design`, match chính xác palette lime/clay
- Brand storytelling: scene tự kể nội dung (vd Tier C scene có PCB + dây đồng + question mark = "rác phức tạp cần Hub rã xác")

### 8.1 Tiêu chuẩn "đặc sắc" — 8 yếu tố

1. **Multi-layer composition** — tối thiểu 4-6 layer (background → mid → foreground → overlay sparkles). Không phải single shape phẳng.
2. **Gradient richness** — `<radialGradient>` hoặc `<linearGradient>` cho mỗi vật thể chính, 3-stop (highlight + base + shadow color).
3. **Depth cues** — drop shadow ellipse (`fill="#0F1F18" opacity="0.18"`) dưới vật thể, highlight strip trắng 0.4-0.55 opacity, ambient glow radial backdrop.
4. **Brand palette only** — chỉ colors từ `tailwind.config.ts`: lime/lime-deep/forest, tier-s/b/c/h, clay-mint/butter/peach/blush/sky/lavender, amber-deep. Không hardcode màu lạ.
5. **Themed sparkles & accents** — tối thiểu 3-5 sparkle: 4-point stars, dots, confetti rectangles, floating coins/leaves.
6. **Context-specific objects** — vẽ vật phẩm liên quan trực tiếp scene (Tier S = chai PET + lon + carton; Tier C = mainboard + dây đồng; Wallet = phone ZaloPay + coin + card; Persona = avatar chi tiết tóc/mắt/mũi).
7. **Brand markers** — embed badge/pill có copy tiếng Việt ("BOM thực", "+50 GP", "ZaloPay 60s", "AUCTION") để illustration tự kể câu chuyện.
8. **Material Symbols emoji KHÔNG đếm là illustration** — chỉ là icon nhỏ trong UI. Illustration phải là **scene đầy đủ** với 4-6 layer trở lên.

### 8.2 Library hiện tại

| File | Dùng cho | Đặc điểm |
|------|----------|----------|
| `RecycleScene.astro` | Hero home | Bin lớn 3D + bottle PET + can ECO + carton 3D + city skyline + sun glow |
| `EcoTree.astro` | Impact preview | Cây 3-layer foliage + sun rays + clouds + birds + flowers + falling leaves |
| `GreenPointsBadge.astro` | Trust GP card | Badge "GP" tròn star-burst 8 ray + coin stack 3-tier + 4 floating leaves + confetti |
| `TierSScene.astro` | Tier S explainer card | PET bottle "RE-LOOP 100%" + green bottle tilt + can ECO + carton "FRAGILE" |
| `TierBScene.astro` | Tier B explainer card | Fridge LCD "−18°C" + sofa 3-cushion với arms/legs + AUCTION ⏱ badge + price tag |
| `TierCScene.astro` | Tier C explainer card | PCB chi tiết: CPU 14-pin chip + RAM slots + capacitors + resistors color-band + copper spool + "?" |
| `TierHScene.astro` | Tier H explainer card | Car battery 12V + AA cluster 3 màu + bulb gãy + hazard triangle "!" + ENV CERT |
| `WalletScene.astro` | Wallet hero | Phone ZaloPay UI live (status bar + balance + transactions + button) + VISA card tilt + coin stack + "60s ⚡" badge |
| `PersonaLinh.astro` | Profile avatar Linh | Khuôn mặt chi tiết: tóc 2 lớp + bangs + mắt double-circle với eyelashes + nose 3D + cheek blush + smile + recycle pendant |
| `RecycleBin.astro` `CoinStack.astro` `CollectorTruck.astro` `GrowingTree.astro` `Package.astro` `OtpPhone.astro` | Empty state, deprecated heroes | SVG đơn giản 1-layer, dùng khi không cần đặc sắc lớn |

### 8.3 Khi tạo illustration mới

1. **File mới** `src/components/illustrations/<Name>Scene.astro` — PascalCase, suffix `Scene` nếu phức tạp.
2. **ViewBox chuẩn**: 400×300 (card thumbnail), 400×400 (square hero), 480×480 (landscape hero).
3. **Inline SVG**, props `class?: string`, dùng tokens trong `tailwind.config.ts`.
4. **Apply 8 tiêu chuẩn** ở §8.1. Tham khảo `RecycleScene.astro` làm template.
5. **Import vào page** → wrap trong container có `shadow-clay` + `rounded-[28px]` + 1-2 floating chip overlay (badge, status pill) để hoàn thiện hero.
6. **Document**: cập nhật bảng §8.2 + log trong `docs/FEATURE_TRACKER.md` Latest changes.

### 8.4 Stock photo — chỉ dùng 3 trường hợp

- **Sample product preview** trong order flow step 1: `sample-pet.jpg`, `sample-mainboard.jpg` etc. (cần ảnh thật vật phẩm user upload)
- **BOM before/after Hub rã xác**: `bom-before.jpg`, `bom-after.jpg` (cần evidence raster cho Chain of Custody)
- **Map background**: `map-bg.png` Google Maps screenshot cho `/orders/[id]/track`

Mọi chỗ khác (hero, empty state, persona, trust, impact, GP, footer accent, dispute, redemption, milestone celebration) → SVG inline đặc sắc.

### 8.5 Kế hoạch illustration backlog

Cần vẽ thêm cho phase tiếp theo:

- `PersonaBaNam.astro` — bà 68t cho UI Đơn giản hero
- `PersonaMinh.astro` — cháu 26t cho "Cháu giúp bà" flow
- `HubWarehouse.astro` — kho Hub Tier 3 cho BOM detail page
- `CollectorScene.astro` — collector + xe máy Vietnamese street cho `/track`
- `DisputeScene.astro` — flow khiếu nại BOM
- `MilestoneCelebration.astro` — animation đạt 30/50/70/100 Trust Score
- `VoucherShopee.astro` — redemption Shopee voucher
- `TreePlantingGaia.astro` — Gaia partnership tree planting
- `AntiFraudShield.astro` — Casing Fraud education modal

---

## 9. Visual-first Rule (BẮT BUỘC) — Trang nhiều hình + icon, không text-only

Mọi page/section/card **PHẢI** thiết kế visual-first: hình minh họa + Material icons + clay BG + chips/badges chiếm tối thiểu **40% diện tích** mỗi section. **KHÔNG** chấp nhận trang chỉ toàn text + button (cảm giác "đơn giản"/"trống"/"unfinished").

### 9.1 Density target per page

| Vị trí | Yêu cầu visual tối thiểu |
|--------|--------------------------|
| Hero section | 1 SVG illustration đặc sắc + 2-3 floating chip overlay + gradient backdrop. **Không** hero text-only |
| Section ≥ 200px tall | Tối thiểu **3 visual elements** (illustration / clay BG / icon-in-clay-box / chip / badge / data viz / sparkle) |
| Card list/grid | Mỗi card có icon hoặc illustration ở header/leading. **Không** pure text card |
| Empty state | SVG illustration đặc sắc + chip CTA. Không "Không có gì" trống |
| Form section | Input có leading icon, slot picker visual hierarchy, OTP cell clay BG khi filled |
| Stat group | Material icon trong rounded `clay-X` box, bo `2xl`, color match context |
| Detail row | Leading icon `w-12 h-12` clay rounded + text + trailing chevron/chip |

### 9.2 Visual elements toolkit (mix-and-match)

1. **SVG illustrations** — `src/components/illustrations/*` (xem §8)
2. **Material Symbols Rounded icons** — trong rounded `clay-X` box `w-10 h-10` đến `w-16 h-16`, fill weight 500
3. **Clay pastel cards** — backdrop `clay-mint/butter/peach/blush/sky/lavender` với border `tier-X/30` và `shadow-clay`
4. **Status/tier chips** — `border-2` đậm, font mono semibold, accent color
5. **Floating badges** — pill `bg-bg-elevated/95 backdrop-blur` với metric (CO₂, GP, ETA, Trust Score)
6. **Data viz** — gauge SVG (`TrustScoreGauge`), sparkline, progress bar 3-zone, polyline route, bar chart, BOM breakdown grid
7. **Decorative sparkles** — 4-point stars, dots, confetti rectangles trong corners
8. **Photo evidence** (chỉ 3 chỗ — xem §8.4): sample product, BOM before/after, map background

### 9.3 Pattern: "every page is a magazine cover, not a Word doc"

Khi review trang vừa build, áp dụng 3 test:

- **Density count**: đếm visual elements per section. Nếu < 3 → fail, thêm illustration / icon / chip / badge cho đủ
- **Editorial feel**: "Trang này nhìn cuốn hơn Notion/Linear không?" Nếu không → chưa đủ visual
- **Text break**: section text dài quá 4 dòng không có visual break → chèn icon / divider clay / sparkline / illustration / floating card giữa

### 9.4 Reference quality (theo brand)

- ✅ **Apple Memoji UI**, Notion icon library, Stripe homepage, Pixar movie poster — tone visual-rich đặc sắc
- ❌ Wikipedia article, plain admin dashboard, raw data table — text-only fail

### 9.5 Patterns mẫu — đã áp dụng

| Page/Section | Visual elements |
|--------------|----------------|
| Home Hero | RecycleScene SVG (480px) + 2 floating chip (CO₂ + ISO) + 3 badge dưới (balance + Hold + Trust) + grad-hero backdrop |
| Tier explainer 4-card | 4 SVG scene (TierS/B/C/H) + tier code chip + icon clay box + sample text + example mono + arrow CTA |
| Trust gauge section | SVG gauge 3-zone + zone chip clay-butter + 3 milestone stack với clay BG mỗi cái + icon flag + GP card với GreenPointsBadge SVG bên phải |
| Impact "Xanh nhà em" | EcoTree SVG col-span-4 + 4 stat card clay với Material icon + 2 CTA button + 2 floating chip CO₂/BOM |
| Wallet hero | WalletScene SVG + balance card lime + Hold card butter + Hold dashboard với leading icon clay + BOM cards |
| Profile hero | PersonaLinh SVG circle + verified badge + grad-hero backdrop + persona description |
| Order detail Tier C | BOMRevealCard 3-stage stack + Hub Tier badge clay-sky + BOM table 4-col clay grid + 3 photo evidence (before/after/timelapse) |
| Tracking map | Real Google Maps img + smooth bezier polyline + 3 HTML pin (Hub/Collector/User) + zoom controls + cluster info clay-butter + Collector card clay |
| Footer | Logo gradient + Material icon list per section + social icons clay box |

### 9.6 Anti-patterns — TRÁNH

- ❌ Hero h1 + p + button only (không illustration) → thêm SVG đặc sắc col-span-5 bên phải
- ❌ Form section input + label + button only → thêm leading icon + clay BG container + helper chip
- ❌ Stat list với text only → thêm Material icon trong clay rounded box trước số
- ❌ Empty list "Chưa có đơn nào" trống → dùng `<EmptyState>` với SVG illustration + chip CTA
- ❌ Card chỉ text + price → thêm leading clay icon box + tier chip + status chip + amount mono bold + arrow CTA
