# PRD — RE-LOOP B2C Web App (Round 2)

**Canonical spec**: `docs/requirement.md` **v0.3** (BA full B2C analysis — 125 features, 11 modules).
**This file**: PRD = "what we built in Round 2 critical path" — subset của v0.3 (15 critical features Phase 1 MVP).
**Stack**: Astro 5 + React 19 + Tailwind 3, no backend, mock data only.
**Width target**: 1280px desktop.
**Persona**: Linh, 32, Q.7 (PRIMARY) — pre-loaded dummy user.

> **Out-of-PRD-this-round** (đã đặc tả trong requirement v0.3, sẽ build round sau):
>
> - Tier B (Speed/Auction) + Tier H (hazardous) flows
> - Anti-fraud user-facing: Casing Fraud education modal, Hub Spot Check notif, Chain of Custody timeline, Hub Tier badge, AI soft-flag UX
> - Pro-grade tracking: polyline, multi-stop cluster, geofence, traffic ETA, route replay, Hub-leg
> - Payment/GP precise rules: Hold expire 72h, refund flow, tax invoice, fee transparency, cash incentive 2k, GP earning per tier, expiration, rounding, voucher fee, streak grace, loyalty thresholds + no-downgrade
> - Loyalty (Bronze/Silver/Gold), Referral, "Cháu giúp bà", "Xanh nhà em" impact, voucher redemption, donation, tree planting

---

## Round 1 → Round 2 transition

| Round 1 (deleted) | Round 2 (replacement) |
|-------------------|------------------------|
| `/` marketing landing 8-screen | `/` Dashboard (Linh's home) |
| `/demo-dat-don` flow | `/orders/new` real order creation |
| `/tier-c` deep dive | Inline in `/orders/new` Tier C path + `/wallet` BOM reveal |
| `Screen0[1-8]*.astro` (8 files) | Replaced with dashboard widgets |
| `DemoFlow.tsx` | `OrderCreate.tsx` (expanded) |
| `TierCSimulator.tsx` | `BOMRevealCard.astro` (read-only) + Tier C path in `OrderCreate.tsx` |
| `SnapDots.astro` snap nav | Removed (no snap-scroll anymore) |

Wording "demo" removed everywhere.

---

## A. Dashboard `/`

**Persona context**: Linh mở `reloop.vn`, vào thẳng dashboard.

**Features**: TRUST-01 partial (gauge mini), WALLET-01 partial (balance summary), recent orders preview, quick action.

**Layout**: Top nav sticky → main 1280px center, padding 80px:
- **Hero greeting**: "Chào Linh 👋" h1 + sub "Bạn đã bán **5 đơn** tháng này · tích **1.240 Green Points**". Avatar tròn lime placeholder bên phải.
- **Balance widget** (full width card): 2 column split — left "ZaloPay" 528.400đ JetBrains Mono lime · right "HOLD ví ảo" 60.000đ warning yellow + sub "1 đơn Tier C đang verify". Below: link "Xem chi tiết ví →" navigate `/wallet`.
- **Quick action strip**: 1 button lime lớn "+ Đặt lịch thu gom" → `/orders/new`. 2 secondary link mono: "Lịch sử đơn" → `/orders` · "Trust Score 65" → `/profile`.
- **Recent orders**: title h3 "Đơn gần nhất" + grid 3 order cards (3 đơn mới nhất từ mock). Mỗi card: tier badge + item name + amount + status chip + completed date. Click navigate `/orders/[id]`.

**Mock data**: USER, WALLET, ORDERS[0..2].

**Acceptance**:
- Greeting copy có tên Linh + số Green Points đúng
- Balance widget: ZaloPay + Hold tách rõ, tổng = ZaloPay (Hold KHÔNG cộng vào)
- Click "+ Đặt lịch thu gom" → route đúng `/orders/new`
- 3 recent order cards click → `/orders/[id]`

---

## B. Order creation `/orders/new`

**Features**: ORDER-01..09 full path. Mock 2 sample (PET = Tier S happy path, Mainboard PC = Tier C complex path).

**Component**: `OrderCreate.tsx` React island state machine 6 step.

### Step 1 — Chụp ảnh (ORDER-01)
- 2 sample image cards click chọn (PET 3.2kg / Mainboard PC 1.0kg). Trong app thật là camera; ở đây mock.
- "Tiếp tục" disabled until selected.

### Step 2 — AI nhận diện (ORDER-02, ORDER-03)
- Loading 1.5s spinner Material Symbols `auto_awesome` → reveal:
  - PET: "Tier S · Chai PET · 3.2 kg · Confidence 95%"
  - Mainboard: "Tier C · Mainboard PC · 1.0 kg · Confidence 78%"
- 2 button: "Sai? Sửa thủ công" (ghost) + "Đúng rồi, tiếp tục" (primary).

### Step 3 — Hiển thị giá (ORDER-04 / ORDER-05)
- **Tier S path** (PET): card lime "Giá CHẮC CHẮN: **38.400đ**" mono 32px + breakdown 75/15/10 (Bạn nhận 28.800đ / Hub 5.760đ / RE-LOOP 3.840đ).
- **Tier C path** (Mainboard): card border tier-c "Dải giá ước tính: **25.000 — 60.000đ**" + alert box warning explain Hold ví ảo:
  - "Vì là rác phức tạp, RE-LOOP không thể định giá chính xác từ ảnh."
  - "Tạm ứng **60% × 50.000đ = 30.000đ** (Trust Score 65 → Đang tích lũy zone)."
  - "Số tiền HOLD trong ví ảo. Sau khi Hub rã xác (16-24h), phần chênh chuyển ZaloPay."
  - Link "Vì sao không định giá ngay?" → tooltip mô tả ngắn

### Step 4 — Address picker (ORDER-06)
- Input pre-fill "123 Nguyễn Văn Linh, P.Tân Phong, Q.7, TPHCM" với icon location.
- Mock map preview SVG dưới (lime pin trên grid).
- Button "Đổi địa chỉ" disabled (ghost grayed) — feature multi-address Phase 2.

### Step 5 — Schedule slot (ORDER-07)
- 4 chip slot: Sáng nay 9-11h / Chiều nay 14-16h / Mai sáng 8-10h / Mai chiều 13-15h.
- Default selected: Chiều nay.
- Sub: "Min 4h ahead · Có thể đổi trước khi Collector xuất phát".

### Step 6 — Payment + Confirm (ORDER-08, ORDER-09)
- 2 radio card: ZaloPay (default lime border) · Tiền mặt (cho khi Collector tới).
- Order summary card: item · weight · giá · slot · address · payment.
- Tier C: hiển thị thêm dòng "Tạm ứng 30.000đ HOLD" mono warning.
- Button "Xác nhận đặt đơn" lime lớn → trigger `confirmOrder()` → route `/orders/RL-2026-NEW/track`.

**Acceptance**:
- Stepper 6-dot trên cùng update đúng
- Tier S path skip Hold explainer (chỉ Tier C show)
- Confirm đẩy redirect đúng

---

## C. Tracking `/orders/[id]/track`

**Features**: TRACK-01..03.

**Component**: `TrackingMap.tsx` React island.

**Layout**: 1280px split 60/40.
- **Left col (map fake)**: SVG 720×600 với grid bg, đường street fake, 2 pin: lime "📍 Bạn" (Q.7), warning "🛵 Anh Tuấn" (di chuyển dần về Bạn — `setInterval` update position mỗi 2s, mock animation 30 step).
- **Right col**:
  - ETA countdown mono lớn "**24:32**" (giảm dần mỗi giây).
  - Collector card: avatar + tên "Anh Tuấn" + tier badge "Collector Tier 1" + xe "🛵 Xe máy 51A-12345" + rating ⭐ 4.8 (87 đơn) + button "Gọi điện" (deep link tel:0912xxx).
  - Status timeline 4 step: ✅ Đã đặt → ✅ Anh Tuấn nhận đơn → 🔄 Đang trên đường → ⏳ Đến nhà.
  - Button lớn "Anh Tuấn đã đến" lime → navigate `/orders/[id]/transaction`.

**Toast notif** (TRACK-03): khi ETA < 5:00, toast slide từ top "🔔 Anh Tuấn sắp đến (5 phút)".

**Acceptance**: ETA countdown chạy thật, pin Collector di chuyển dần, click button "đã đến" route đúng.

---

## D. At-home transaction `/orders/[id]/transaction`

**Features**: TRANS-01..04.

**Component**: `AtHomeTransaction.tsx` React island.

**Sub-state machine**:

### Sub-step 1 — Cân tại nhà (TRANS-01)
- Card "Anh Tuấn đang cân vật phẩm…" loading 2s → reveal "Khối lượng thực: **3.2 kg**" (Tier S) hoặc **1.0 kg** (Tier C).
- 2 button: "Khớp với ước tính ✓" (lime) · "Báo sai (-5 Trust)" (ghost error).

### Sub-step 2 — Tier S path (TRANS-02)
- Hiển thị final price "**38.400đ**" mono lime 40px.
- Receipt summary: Bạn nhận 28.800đ → ZaloPay.
- Button "Xác nhận giao dịch" → sub-step 4.

### Sub-step 2 — Tier C path (TRANS-03)
- Card warning "Đây là Tier C. Anh Tuấn cần thực hiện **Peek Check**":
  - Mô tả "Xé góc nhỏ vỏ vật phẩm để verify không có gạch/xi măng tráo ruột."
  - Animation Peek check (lime check icon + "Verify ✓ trong 8 giây") → auto next 3s.
- Reveal: "Tạm ứng **30.000đ** HOLD vào ví ảo RE-LOOP".
- Sub: "Số tiền này chưa rút được. Sau khi Hub rã xác mass balance ≥ 90%, phần chênh chuyển ZaloPay."
- Button "Xác nhận chuyển vật phẩm cho Anh Tuấn".

### Sub-step 3 — Sign-off (TRANS-04)
- Mock OTP card: "Nhập OTP RE-LOOP đã gửi đến số 0901 234 567" + 6 ô input (auto-fill `123456`).
- Button "Xác nhận" enabled khi đủ 6 số.

### Sub-step 4 — Done
- Animation success bounce.
- Tier S: "Giao dịch hoàn tất · 28.800đ đã chuyển ZaloPay".
- Tier C: "Vật phẩm đã chuyển Hub · Verify trong 16-24h".
- Button "Xem chi tiết đơn" → `/orders/[id]`.

**Acceptance**: 2 path khác biệt rõ; OTP bắt buộc; redirect đúng.

---

## E. Order detail `/orders/[id]`

**Features**: rendering tail-end của ORDER + WALLET-03 (BOM thực) + WALLET-04 (phần chênh log).

**Layout** phụ thuộc tier + status:

### Tier S COMPLETED
- Header: tier badge S + status chip COMPLETED + mã đơn JetBrains Mono "RL-2026-001234"
- Summary card: item + ngày + amount + ZaloPay receipt no.
- Timeline: đặt → match → cân → ZaloPay (4 step done).
- Footer: Green Points earned + button "Đặt đơn tương tự".

### Tier C COMPLETED (đã Hub verify)
- Header tier badge C + status chip COMPLETED + mã đơn.
- **`BOMRevealCard.astro`** read-only:
  - 3 trạng thái stack: HOLD (đã release) → VERIFIED 97% → SETTLED.
  - BOM thực bảng: Cu 0.115kg / Fe 0.0kg / Al 0.082kg / Plastic 0.7kg.
  - Photos before/after rã xác (placeholder 2 ảnh `bom-before.jpg`, `bom-after.jpg`).
  - Mock video timelapse: card với play button → click open lightbox với "Video timelapse 2:00 phút (mock)".
- Tóm tắt tài chính: Tạm ứng 175.000đ + Phần chênh +38.700đ = Total 213.700đ.

### Tier C PENDING_VERIFY
- Header tier badge C + status chip PENDING amber.
- Hold visualization: tạm ứng 60.000đ HOLD ví ảo (warning yellow).
- Timeline: đặt → match → cân → **🔄 Hub đang rã xác** (estimated remaining "8h").
- Sub "Bạn sẽ nhận thông báo khi mass balance verify xong."

**Acceptance**: render đúng 3 variant theo tier × status.

---

## F. Order history `/orders`

**Features**: list + filter (subset của WALLET-05 logic, áp cho orders).

**Layout**:
- Header h1 "Đơn của tôi" + total count "6 đơn".
- Filter bar: 4 chip toggle [Tất cả] [Tier S] [Tier C] [Pending Verify].
- List `OrderCard` mỗi đơn (full-width row): tier badge + item + amount + status chip + date + arrow → `/orders/[id]`.
- Empty state nếu filter không có kết quả: icon + "Chưa có đơn nào".

**Mock data**: ORDERS array 6 phần tử.

**Acceptance**: filter Tier C → 3 đơn (2 completed + 1 pending). Click row → detail.

---

## G. Wallet `/wallet`

**Features**: WALLET-01..05 full.

**Layout**:
- Header h1 "Ví của bạn".
- **Balance section** (2 card grid):
  - Card 1 lime: "ZaloPay" 528.400đ + button "Rút tiền" (placeholder, không action).
  - Card 2 warning border: "HOLD ví ảo" 60.000đ + sub "1 đơn Tier C đang chờ Hub verify".
- **Hold dashboard** (full-width card warning border):
  - Title "Đang chờ verify"
  - Đơn RL-2026-001240 Mainboard PC: tạm ứng 60.000đ + estimated 50.000đ - 60.000đ + "Hub đang rã xác · 8h còn lại".
  - Click → `/orders/RL-2026-001240`.
- **BOM history**: title "BOM thực đã verify" + 2 card recent (RL-001236 mô tơ + RL-001239 dây điện) embed mini `BOMRevealCard`.
- **Transaction history** (`TransactionHistory.tsx` React island):
  - Filter chips: [Tất cả] [Vào] [Ra] [Hold] [Release].
  - List 12+ transactions sorted desc by date với amount + type icon + reference order ID.

**Acceptance**: 2 balance section tách rõ, filter transaction history hoạt động.

---

## H. Profile `/profile`

**Features**: TRUST-01, TRUST-02 (read-only).

**Layout**:
- Header h1 "Hồ sơ của tôi".
- **Trust Score gauge**: SVG circular 0-100 với 3 zone (đỏ 0-20 mới / vàng 20-80 đang tích lũy / lime 80-100 đáng tin). Marker chỉ 65 trong zone vàng.
- Sub "Trust Score **65** → Đang tích lũy zone → tạm ứng tối đa **50%**".
- **Progress milestones** 3 dot: 0-20 mới (30% tạm ứng) · 20-80 đang tích lũy (50% tạm ứng) · 80+ đáng tin (70% tạm ứng).
- Read-only profile card: tên Linh, SĐT 0901 234 567, địa chỉ Q.7, member từ 03/2026.
- Stats card: 5 đơn done · 3 Tier S · 2 Tier C · Mass balance trung bình 96%.
- Note: "Cập nhật profile và preferences sẽ có ở phiên bản tiếp theo."

**Acceptance**: gauge marker đúng vị trí 65/100, copy tạm ứng % match Trust Score logic.

---

## Cross-cutting

### TopNav (in-app version)
Sticky 80px. Logo + wordmark RE-LOOP. Center 4 link: Trang chủ / Đơn của tôi / Ví / Profile. Right: balance pill mono "₫ 528.400đ" + avatar tròn Linh.

### Mock state
`src/lib/mock.ts` export USER, WALLET, ORDERS, COLLECTORS, BOM_LIBRARY, PRICES. State change qua `useState` in-memory (revert khi reload).

### Format
`src/lib/format.ts`: `formatVND(n)` → `"38.400đ"`, `formatDate(d)` → `"08/05/2026"`, `formatRelative(d)` → `"3 ngày trước"`.

### Status chip variants
StatusChip component: COMPLETED (lime) / PENDING_VERIFY (warning) / IN_TRANSIT (info) / HOLD (warning) / VERIFIED (success) / SETTLED (success fill) / CANCELLED (text-tertiary).
