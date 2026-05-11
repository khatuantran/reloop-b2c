# Components

Inventory of `src/components/**`. Most components are plain JS auto-conversions from
the original Astro project (props typed `any`) — a few (`nav/TopNav`, `layout/Footer`,
`ui/TierBadge`, `wallet/TransactionHistory`, some illustrations) are hand-written/hand-cleaned.
Props below come from the actual function signatures; treat them as the contract.

Conventions: style with **design tokens only** (no hardcoded hex — see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)),
reuse `cx()` for conditional classes (`src/lib/cx.js`), reuse `format.*` for VND/date/weight
(`src/lib/format.js`), reuse `ui/*` primitives before inventing new ones.

## `ui/` — base primitives

| Component | File | Purpose | Key props |
|---|---|---|---|
| `Button` | [ui/Button.jsx](../src/components/ui/Button.jsx) | Button or link (`<a>` when `href` given). Clay shadows, lime/dark/ghost styles. | `variant`: `primary`\|`dark`\|`ghost`\|`secondary`\|`tier-c`\|`cash` · `size`: `md`\|`lg` · `href` · `type` · `disabled` · `className` · `id` · `children` |
| `Card` | [ui/Card.jsx](../src/components/ui/Card.jsx) | Padded rounded surface with clay shadow + pastel variants. | `variant`: `default`\|`flat`\|`mint`\|`butter`\|`peach`\|`blush`\|`sky`\|`lavender` · `padding`: `sm`\|`md`\|`lg` · `radius`: `md`\|`lg`\|`xl` · `shadow`: `none`\|`sm`\|`md`\|`lg` · `hover` · `className` · `children` |
| `StatusChip` | [ui/StatusChip.jsx](../src/components/ui/StatusChip.jsx) | Pill for order/transaction status with Material icon + label. | `status`: `COMPLETED`\|`PENDING_VERIFY`\|`IN_TRANSIT`\|`AT_PICKUP`\|`CANCELLED`\|`HOLD`\|`VERIFIED`\|`SETTLED` |
| `TierBadge` | [ui/TierBadge.jsx](../src/components/ui/TierBadge.jsx) | Tier S/B/C/H badge, solid or soft. Labels: S=Standard, B=Bulky, C=Complex, H=Hazardous. | `tier`: `S`\|`B`\|`C`\|`H` · `label?` · `size`: `sm`\|`md`\|`lg` · `variant`: `solid`\|`soft` |
| `Pill` | [ui/Pill.jsx](../src/components/ui/Pill.jsx) | Small bordered chip with optional leading Material icon. | `variant`: `success`\|`warning`\|`error`\|`info`\|`neutral`\|`lime` · `icon?` · `children` |
| `EmptyState` | [ui/EmptyState.jsx](../src/components/ui/EmptyState.jsx) | Centered empty-state block: clay icon box + title + body + slot for CTA. | `icon` (Material name, default `inbox`) · `title` · `body?` · `variant`: `mint`\|`butter`\|`peach`\|`sky` · `children` |

## `nav/` and `layout/`

| Component | File | Purpose |
|---|---|---|
| `TopNav` | [nav/TopNav.jsx](../src/components/nav/TopNav.jsx) | Fixed top bar (`h-20`, backdrop blur). Logo, primary links (Trang chủ / Đơn của tôi / Ví / Hồ sơ — active state derived from `pathname`), shortcut icons to `/rewards` and `/notifications`. Reads `USER`/`WALLET` from mock. Uses `<Link>`. |
| `Footer` | [layout/Footer.jsx](../src/components/layout/Footer.jsx) | Forest-green footer: brand block + hotline/email/address, quick links, certifications (ISO 14001, EPR NĐ 08/2022, VRA…), legal links. Auto-included by `AppLayout`. |

## `home/` — dashboard sections

| Component | File | Purpose |
|---|---|---|
| `HeroSection` | [home/HeroSection.jsx](../src/components/home/HeroSection.jsx) | Dashboard hero — `RecycleScene` illustration + greeting/CTA, reads `USER`/`WALLET`. |
| `TierExplainerGrid` | [home/TierExplainerGrid.jsx](../src/components/home/TierExplainerGrid.jsx) | 4-card grid explaining Tier S/B/C/H, each with its `Tier*Scene` illustration. |
| `TrustScoreSection` | [home/TrustScoreSection.jsx](../src/components/home/TrustScoreSection.jsx) | Trust Score + Green Points teaser with `GreenPointsBadge` illustration, reads `USER`. |
| `ImpactPreview` | [home/ImpactPreview.jsx](../src/components/home/ImpactPreview.jsx) | "Xanh nhà em" environmental-impact preview with `EcoTree` illustration. |

## `order/` — order flow & detail building blocks

| Component | File | Purpose | Key props |
|---|---|---|---|
| `OrderCard` | [order/OrderCard.jsx](../src/components/order/OrderCard.jsx) | Order summary card/row: item, tier, status, amounts. | `order` (Order) · `variant`: `card`\|… |
| `OrderKPIStrip` | [order/OrderKPIStrip.jsx](../src/components/order/OrderKPIStrip.jsx) | Horizontal KPI strip (weight / material / amount …). | `kpis` (array) |
| `OrderStepperBar` | [order/OrderStepperBar.jsx](../src/components/order/OrderStepperBar.jsx) | Multi-step progress bar for order-creation flows. | `steps` · `activeStep` · `tierAccent` (default `tier-s`) |
| `StepHero` | [order/StepHero.jsx](../src/components/order/StepHero.jsx) | Per-step hero (eyebrow + title + description + visual). | `eyebrow` · … (title/desc/illustration) |
| `PhotoStepPanel` | [order/PhotoStepPanel.jsx](../src/components/order/PhotoStepPanel.jsx) | Photo capture/upload + AI-detect panel for step 1/2. | `tier` · … |
| `BOMRevealCard` | [order/BOMRevealCard.jsx](../src/components/order/BOMRevealCard.jsx) | Tier C "BOM thực" reveal — real Cu/Fe/Al/plastic vs expected range. | `order` (Order with `bomReal`) |
| `MaterialsBreakdown` | [order/MaterialsBreakdown.jsx](../src/components/order/MaterialsBreakdown.jsx) | Material composition viz + mass-balance ratio. | `bomReal` · `totalWeight` · `massBalance` (default 0.94) |
| `ReviewSection` | [order/ReviewSection.jsx](../src/components/order/ReviewSection.jsx) | Order review summary (collector, address, slot, price) before confirm. | `collectorName` · … |
| `TxnSidebar` | [order/TxnSidebar.jsx](../src/components/order/TxnSidebar.jsx) | Sidebar for transaction-flow pages: collector card + items + progress. | `collectorName`, `collectorAvatar`, `collectorTierLabel`, `collectorRating`, `collectorVehicle`, … |
| `AtHomeTransaction` | [order/AtHomeTransaction.jsx](../src/components/order/AtHomeTransaction.jsx) | Interactive at-home weighing flow (used by `orders/[id]/transaction.jsx`). | (multi-prop) |
| `TrackingMap` | [order/TrackingMap.jsx](../src/components/order/TrackingMap.jsx) | Collector-location map (static map bg + pin/ETA). | `order` · `collector` |
| `ChainOfCustody` | [order/ChainOfCustody.jsx](../src/components/order/ChainOfCustody.jsx) | Hub chain-of-custody timeline (anti-fraud). | `events` · `orderId` · `layout`: `vertical`\|… |
| `SpotCheckCard` | [order/SpotCheckCard.jsx](../src/components/order/SpotCheckCard.jsx) | Hub spot-check results summary. | `recentChecks` · `passRate` · `totalChecks` |
| `CasingFraudCard` | [order/CasingFraudCard.jsx](../src/components/order/CasingFraudCard.jsx) | Casing-fraud explainer modal/inline (first-time Tier C). | `variant`: `inline`\|… · `isFirstTimeTierC` (default true) |
| `CancelRescheduleCard` | [order/CancelRescheduleCard.jsx](../src/components/order/CancelRescheduleCard.jsx) | Cancel / reschedule actions with trust-impact note. | `orderId` · `status` · `trustImpact` (default −5) |
| `HubTierBadge` | [order/HubTierBadge.jsx](../src/components/order/HubTierBadge.jsx) | Badge for the verifying Hub's tier/certification. | `hubName` · … |

## `auth/`

| Component | File | Purpose | Key props |
|---|---|---|---|
| `AuthShell` | [auth/AuthShell.jsx](../src/components/auth/AuthShell.jsx) | Full-page auth layout: ambient blurred clay blobs, top bar (logo + switch login↔signup), step bar, content slot. | `flow`: `login`\|`signup` · `steps` · `activeStep` · `children` |
| `AuthSidebar` | [auth/AuthSidebar.jsx](../src/components/auth/AuthSidebar.jsx) | Auth sidebar: `AuthPhone` illustration + benefits list + stats + trust marks (varies by `flow`). | `flow`: `login`\|`signup` |

## `profile/` and `wallet/`

| Component | File | Purpose | Key props |
|---|---|---|---|
| `TrustScoreGauge` | [profile/TrustScoreGauge.jsx](../src/components/profile/TrustScoreGauge.jsx) | SVG arc gauge 0–100 with 3 zones (red <30 "User mới" 30% / amber 30–70 "Đang tích lũy" 50% / green ≥70 "Đáng tin" 70%) + marker + center label. | `score` (number) |
| `TransactionHistory` | [wallet/TransactionHistory.jsx](../src/components/wallet/TransactionHistory.jsx) | Wallet transaction list with **working** `useState` type filter (Tất cả / Vào / Ra / Hold / Release); reads `TRANSACTIONS` from mock. Reference pattern for wiring static chips. | — |

## Root-level fallbacks

| Component | File | Purpose |
|---|---|---|
| `Stub` | [Stub.jsx](../src/components/Stub.jsx) | "CHƯA PORT" placeholder for a `ROUTES` entry whose `src/pages/<file>.jsx` doesn't exist yet. | `route` · `name` |
| `ErrorBoundary` | [ErrorBoundary.jsx](../src/components/ErrorBoundary.jsx) | Class error boundary wrapping every route element; shows the error stack in a clay-blush panel. | `children` |
| `NotFound` | [NotFound.jsx](../src/components/NotFound.jsx) | "Mã không tồn tại" page returned by dynamic `:id` pages when the entity isn't in mock data. Distinct from the `404` page (unmatched URLs) and `Stub` (route not ported). | `what?` · `backTo?` · `backLabel?` |

## `illustrations/` — inline SVG scenes (24)

Each is a self-drawn multi-layer SVG (gradients, depth shadows, themed sparkles, Vietnamese
brand markers) — **not** stock photos, **not** Material icons. New illustrations must follow
the 8-criteria "đặc sắc" standard documented in [`../../CLAUDE.md`](../../CLAUDE.md) and
[`../../docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md); use existing files as templates.

| Component | File | Scene / used for |
|---|---|---|
| `RecycleScene` | [illustrations/RecycleScene.jsx](../src/components/illustrations/RecycleScene.jsx) | Home hero — big bin + PET bottle + can + carton + city skyline |
| `EcoTree` | [illustrations/EcoTree.jsx](../src/components/illustrations/EcoTree.jsx) | Impact preview — 3-layer tree + sun + clouds + birds + flowers |
| `GrowingTree` | [illustrations/GrowingTree.jsx](../src/components/illustrations/GrowingTree.jsx) | Tree-growth visual (simpler than `EcoTree`) |
| `GreenPointsBadge` | [illustrations/GreenPointsBadge.jsx](../src/components/illustrations/GreenPointsBadge.jsx) | Trust/GP card — "GP" star-burst badge + coin stack + leaves |
| `TierSScene` | [illustrations/TierSScene.jsx](../src/components/illustrations/TierSScene.jsx) | Tier S explainer — PET bottles + can + carton + recycle bubble |
| `TierBScene` | [illustrations/TierBScene.jsx](../src/components/illustrations/TierBScene.jsx) | Tier B explainer — fridge/LCD + sofa + auction badge + price tag |
| `TierCScene` | [illustrations/TierCScene.jsx](../src/components/illustrations/TierCScene.jsx) | Tier C explainer — PCB chip + capacitors + copper spool + "?" |
| `TierHScene` | [illustrations/TierHScene.jsx](../src/components/illustrations/TierHScene.jsx) | Tier H explainer — car battery + AA cluster + bulb + hazard triangle |
| `WalletScene` | [illustrations/WalletScene.jsx](../src/components/illustrations/WalletScene.jsx) | Wallet hero — phone ZaloPay UI + credit card + coin stack |
| `PersonaLinh` | [illustrations/PersonaLinh.jsx](../src/components/illustrations/PersonaLinh.jsx) | Profile avatar for Linh — detailed face + recycle pendant |
| `SupportBot` | [illustrations/SupportBot.jsx](../src/components/illustrations/SupportBot.jsx) | AI assistant (`/help`, `/help/chat`) — claymorphism robot, "AI · 24/7" badge |
| `AuthPhone` | [illustrations/AuthPhone.jsx](../src/components/illustrations/AuthPhone.jsx) | Auth sidebar — phone showing the app |
| `OtpPhone` | [illustrations/OtpPhone.jsx](../src/components/illustrations/OtpPhone.jsx) | OTP screens — phone with OTP code |
| `AntiFraudShield` | [illustrations/AntiFraudShield.jsx](../src/components/illustrations/AntiFraudShield.jsx) | Anti-fraud / trust sections — shield badge |
| `CollectorScene` | [illustrations/CollectorScene.jsx](../src/components/illustrations/CollectorScene.jsx) | Collector character scene |
| `CollectorTruck` | [illustrations/CollectorTruck.jsx](../src/components/illustrations/CollectorTruck.jsx) | Collector on the way — vehicle + collector (tracking) |
| `HubWarehouse` | [illustrations/HubWarehouse.jsx](../src/components/illustrations/HubWarehouse.jsx) | Hub / warehouse building (Tier C verify, chain of custody) |
| `DisputeScene` | [illustrations/DisputeScene.jsx](../src/components/illustrations/DisputeScene.jsx) | Dispute flow scene |
| `MilestoneCelebration` | [illustrations/MilestoneCelebration.jsx](../src/components/illustrations/MilestoneCelebration.jsx) | Success / milestone celebration (confetti) |
| `Package` | [illustrations/Package.jsx](../src/components/illustrations/Package.jsx) | Package/box icon-illustration |
| `PackageScene` | [illustrations/PackageScene.jsx](../src/components/illustrations/PackageScene.jsx) | Package / pickup scene |
| `RecycleBin` | [illustrations/RecycleBin.jsx](../src/components/illustrations/RecycleBin.jsx) | Recycle bin (simpler scene, empty states) |
| `CoinStack` | [illustrations/CoinStack.jsx](../src/components/illustrations/CoinStack.jsx) | Coin stack (payment / wallet accents) |
| `ItemPhoto` | [illustrations/ItemPhoto.jsx](../src/components/illustrations/ItemPhoto.jsx) | Generic item-photo placeholder for order flow |
