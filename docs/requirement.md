# RE-LOOP B2C Web App — Requirements Analysis v0.3

> **Author:** Senior BA (Claude)
> **Source:** RE-LOOP v5.0 Executive Summary (Stress-Tested Edition)
> **Scope:** B2C web app `reloop.vn` — phía hộ gia đình bán rác (FULL feature set, không cắt theo phase)
> **Date:** May 2026
> **Status:** v0.3 — plug 3 critical gap (Tier C anti-fraud user-facing, Route tracking pro-grade, Payment/GP precise rules)

---

## 0. CHANGE LOG

### v0.3 (current)

- Plug **gap Tier C anti-fraud user-facing**: thêm Casing Fraud education modal, Hub Spot Check notif, Chain of Custody timeline, Hub Tier transparency badge, AI Anti-fraud soft-flag UX (5 feature mới).
- Plug **gap Driver route tracking**: nâng cấp từ pin-only sang professional-grade — polyline route, multi-stop cluster, geofence arrival, traffic-based ETA, route replay, Hub-leg tracking, movement indicator (7 feature mới).
- Plug **gap Payment & GP precise rules**: Hold expire 72h, refund flow, tax invoice, payment fee transparency, cash incentive 2k/đơn disclosure, GP earning per tier, GP expiration, GP rounding, voucher fee transparency, streak grace, loyalty thresholds + upgrade/no-downgrade rules (15 feature mới).
- Bổ sung 2 journey mới: K (Route replay), L (AI Anti-fraud soft-flag).
- Bổ sung 5 data entity: RouteTrace, SpotCheck, CustodyEvent, FraudFlag, TaxInvoice.
- Total: 96 → 125 features.

### v0.2

- v0.1 chỉ liệt kê 15 critical features cho MVP (Phase 1).
- v0.2 phân tích **toàn bộ feature B2C** xuyên suốt 3 phase + Phase 4 (long-tail). Không còn MoSCoW + Phase prioritization — mọi tính năng đều được đặc tả đầy đủ. Phase chỉ còn là roadmap deployment trong Section 8.
- Bổ sung 4 journey mới: Tier B Speed/Auction, Tier H Hazardous, Hotline (Bà Năm path 2), Dispute BOM.
- Bổ sung 4 module domain: Loyalty & Gamification, Impact Visualization, Risk Adjustment notification, Multi-payment fallback.
- Open Questions của v0.1 được mark "RESOLVED" trong Section 9 với quyết định kèm rationale từ doc v5.0.

---

## 1. SCOPE & OUT-OF-SCOPE

### 1.1 In-scope (B2C web app)

**Web app duy nhất** cho hộ gia đình bán rác tái chế tại Việt Nam:

- 4 Tier rác **đầy đủ**: S (Standard), B (Bulky), C (Complex), H (Hazardous) — mỗi tier có cơ chế định giá và flow riêng
- Toàn bộ vòng đời đơn: đăng ký → định giá → đặt lịch → tracking → cân tại nhà → thanh toán → BOM verify → review/dispute
- Multi-payment: ZaloPay (primary) + MoMo (backup) + Tiền mặt (hybrid) + VNPay
- 2 phân khúc UX: user trẻ (default) + UI "Đơn giản" cho 50+
- Loyalty đầy đủ: Trust Score + Green Points + Bronze/Silver/Gold tier + Streak + Referral + Cháu giúp bà
- Impact visualization: "Xanh nhà em" (CO₂ saved), tree planting, donation
- Hotline shortcut + chat in-app với Collector + dispute flow
- Truy cập qua `reloop.vn` (desktop + mobile web, PWA installable)
- Geo-gating: pilot 3 quận TPHCM → mở rộng theo roadmap

### 1.2 Out-of-scope (hệ thống tách riêng)

| Hệ thống | Lý do tách |
|---|---|
| **Collector App** | Gig drivers cần app riêng (xe máy/ba gác/tải nhỏ) — UX hoàn toàn khác |
| **Hub Portal** | Vựa đối tác cần dashboard rã xác + Smart Scale + camera multi-angle |
| **B2B Marketplace** | Doanh nghiệp B2B cần marketplace riêng để mua sỉ |
| **ESG/EPR Dashboard** | MNCs (Unilever, Coca-Cola) cần báo cáo audit-ready |
| **Admin / Ops Panel** | Internal tool cho RE-LOOP staff (spot check, dispute, fraud review) |
| **Operator Dashboard** | Tool nội bộ cho call center 1900-RELOOP nhận đơn hộ Bà Năm |
| **Native iOS/Android** | v5.0 cam kết web-first — KHÔNG build native trong giai đoạn này |

B2C web app **chỉ** triển khai phía người dân; mọi tương tác với Collector/Hub/B2B đều thông qua API (server side) — frontend không build dashboard cho các bên này.

### 1.3 Roadmap tóm tắt (chi tiết trong §8)

| Phase | Thời gian | B2C scope deploy |
|---|---|---|
| Phase 1 — MVP | T1-3/2026 | Tier S + Tier C, 3 quận TPHCM, ZaloPay + Tiền mặt |
| Phase 2 — Pilot | T4-6/2026 | Bổ sung Tier B (Speed/Auction) + Tier H, mở rộng 8 quận, MoMo backup |
| Phase 3 — Scale | T7-12/2026 | Toàn TPHCM + HN + ĐN, multi-payment đầy đủ, Loyalty v5.0 đầy đủ |
| Phase 4 — Long tail | 2027+ | "Xanh nhà em" gamification, tree/donation, voucher partnership rộng |

---

## 2. USER PERSONAS

### 2.1 Persona 1 — Linh, 32 tuổi (PRIMARY)

**Demographics:** Nhân viên văn phòng, sống chung cư Q.7, có chồng + 2 con
**Tech:** Smartphone Samsung, dùng ZaloPay + MoMo, quen Zalo + Facebook hơn cài app mới
**Pain:** Có rác PET + carton hằng tuần, mô tơ máy giặt cũ định bán nhưng ngại ve chai dạo ép giá. Bận, không có thời gian thương lượng.
**Motivation:** Tiền + minh bạch + tiện lợi. Muốn cảm giác "không bị lừa".
**Quote:** *"Tôi muốn biết chính xác mình được bao nhiêu trước khi đồng ý."*
**Use cases:** Tier S thường xuyên (PET, carton), Tier C thỉnh thoảng (mô tơ, dây điện), Tier B khi đổi tủ lạnh (1-2 lần/năm).

### 2.2 Persona 2 — Bà Năm, 68 tuổi (SECONDARY — UI "Đơn giản")

**Demographics:** Nghỉ hưu, sống Bình Thạnh, cháu trai 28 tuổi giúp dùng smartphone
**Tech:** Smartphone con cho, chỉ dùng Zalo gọi điện. Không có ZaloPay/MoMo. Quen tiền mặt.
**Pain:** Ve chai tích lũy, trước bán cho ve chai dạo nhưng giá thấp, không tin.
**Motivation:** Tiền mặt + an toàn + có người đến tận nhà.
**Quote:** *"Tôi không cần app phức tạp — gọi điện là được."*
**Use cases:** Tier S đơn giản, hotline 1900-RELOOP, nhận tiền mặt.

### 2.3 Persona 3 — Minh, 26 tuổi (SECONDARY — "Cháu giúp bà")

**Demographics:** Lập trình viên, sống chung ông bà Q.4
**Tech:** Heavy user app banking, MoMo, Shopee
**Pain:** Ông bà có ve chai cũ nhưng không biết dùng app, anh không có thời gian gọi ve chai dạo.
**Motivation:** Giúp ông bà + nhận thưởng GP + tiện lợi
**Quote:** *"Tôi đặt giúp nhưng tiền vào tay bà nội."*
**Use cases:** Đặt đơn hộ ông bà ("Cháu giúp bà"), tiền vào tài khoản người nhận, nhận +50 GP.

### 2.4 Persona 4 — Nam, 45 tuổi (TERTIARY — Tier B owner)

**Demographics:** Chủ nhà, đổi nhà Q.2, có tủ lạnh + sofa cũ cần thanh lý
**Tech:** Smartphone, dùng ZaloPay, biết auction marketplace
**Pain:** Ve chai dạo trả giá tủ lạnh chỉ 200k, nhưng anh nghi giá thật cao hơn. Không biết gọi đâu.
**Motivation:** Giá tốt nhất, không quá quan trọng tốc độ.
**Quote:** *"Tôi đợi 1 tiếng cũng được, miễn nhiều người báo giá."*
**Use cases:** Tier B Auction Mode (đợi 30-60 phút nhận tối đa 3 báo giá).

### 2.5 Persona 5 — Hà, 35 tuổi (TERTIARY — Tier H awareness)

**Demographics:** Mẹ 2 con Q.3, ý thức môi trường cao
**Tech:** Smartphone, ZaloPay, theo dõi page môi trường
**Pain:** Pin AA + bóng đèn huỳnh quang + ắc quy xe máy cũ — không biết bỏ đâu, vứt rác thường thấy có lỗi.
**Motivation:** Không nhận tiền, chỉ cần xử lý đúng môi trường + nhận GP để cảm giác làm việc tốt.
**Quote:** *"Tôi không quan tâm tiền — chỉ cần biết pin của tôi không vào bãi rác."*
**Use cases:** Tier H free pickup, nhận GP thay vì tiền.

---

## 3. USER JOURNEY MAPS

### 3.1 Journey A — Linh bán Tier S (PET 3kg, simplest)

```
[1] Mở reloop.vn → [2] Geo-check Q.7 → ✓ → [3] Đăng ký SĐT+OTP
        ↓
[4] Click "+ Đặt lịch thu gom" → [5] Chụp ảnh PET (max 4 ảnh)
        ↓
[6] AI detect: "Tier S — PET ~3kg" → [7] User confirm + note tùy chọn
        ↓
[8] Hiển thị giá CHẮC CHẮN: 3kg PET = 36.000đ
        ↓
[9] Address picker (pre-filled, có map pin) → [10] Slot ngày mai 9-11h
        ↓
[11] Payment: ZaloPay (default) → [12] Confirm đơn → đợi match Collector
        ↓
[13] "Anh Tuấn Tier 1 — ETA 25 phút" → [14] Track live trên map
        ↓
[15] Collector đến → cân thực 3.2kg → [16] Final 38.400đ → user confirm OTP
        ↓
[17] Tiền vào ZaloPay 60s → [18] Notif "+38.400đ + 38 GP"
        ↓
[19] Rate Collector 5★ → done
```
**Touchpoints:** 19 · **Time end-to-end:** 2-3 ngày · **Pain:** step 5 (image quality), step 13 (ETA accuracy).

### 3.2 Journey B — Linh bán Tier C (mô tơ, complex)

```
[1-7] Như Journey A
        ↓
[8] AI detect: "Tier C — mô tơ điện phức tạp"
        ↓
[9] Modal explain Hold ví ảo: "Tạm ứng + chốt sau Hub rã xác (24-48h)"
        ↓
[9.5] **Education modal Casing Fraud (lần đầu Tier C)**:
     • "Vì sao chúng tôi Hold tiền? Có người tráo ruột mô tơ bằng gạch để lừa hệ thống."
     • Animation 3 frame minh họa: vỏ thật → vỏ rỗng nhét gạch → Hub phát hiện
     • CTA "Hiểu rồi" + checkbox "Không hiện lại"
        ↓
[10] Hiển thị:
     • Dải giá ước tính: 200.000-260.000đ
     • Tạm ứng (Trust Score 20 mới = 30%): 60.000đ HOLD ví ảo
     • Note: "Số tiền chưa rút được. Sẽ vào ZaloPay sau Hub verify."
        ↓
[11] Accept → [12] Schedule + payment → [13] Collector đến
        ↓
[14] Peek Check (xé góc vỏ verify) → [15] Cân thực 8.2kg
        ↓
[16] Tạm ứng 60.000đ vào HOLD → [17] OTP sign-off
        ↓
[18] Notif: "Mô tơ chuyển Hub. Verify trong 16-24h."
        ↓
[19] [Sau 18h] Notif: "Hub đang rã xác — xem video timelapse"
        ↓
[19.5] **Nếu đơn rơi 10% Spot Check sample**:
     • Notif: "Đơn của bạn được kiểm tra ngẫu nhiên — verify thêm 24h, không ảnh hưởng giá"
     • Banner trên order detail: badge "Spot Check" + lý do (random sample, anti Hub fraud)
        ↓
[20] [Sau 28h] Notif: "Mass balance verify 97% ✓"
        ↓
[20.5] **Chain of Custody timeline view** (trong order detail):
     • Stage 1: Cân tại nhà — Smart Scale photo + 8.2kg lúc 14:30
     • Stage 2: Vào Hub — Smart Scale verify 8.18kg lúc 16:45 (mass balance 99.7%)
     • Stage 3: Rã xác — multi-angle camera footage links (góc trên + góc bên)
     • Stage 4: Cân BOM thực — Cu/Fe/nhựa từng lần cân với photo + signed checksum
     • Hub Tier badge: "Verify tại Hub Tier 3 (ISO 14001)" + link explain Hub Tier
        ↓
[21] Modal hiển thị:
     • BOM thực: Cu 1.85kg + Fe 5.10kg + nhựa 1.05kg
     • Photos trước/sau rã xác + video timelapse 2 phút
     • Giá thực: 213.700đ
     • Phần chênh: +153.700đ (đã release ví ảo + chuyển ZaloPay)
        ↓
[22] Total nhận 213.700đ + 28 GP → [23] Trust Score 20 → 28
```
**Touchpoints:** 23 · **Time end-to-end:** 3-5 ngày · **Critical UX:** step 9-10 (explain Hold), step 21 (transparency BOM).

### 3.3 Journey C — Nam bán Tier B (tủ lạnh, Auction Mode)

```
[1-7] Đăng ký + chụp ảnh tủ lạnh + AI detect "Tier B — bulky"
        ↓
[8] Modal explain 2 chế độ:
     • Speed Mode: chốt giá sàn ngay (250.000đ), Collector đến trong 30 phút
     • Auction Mode: đợi 30-60 phút nhận tối đa 3 báo giá, chọn cao nhất
        ↓
[9] Nam chọn Auction Mode → [10] Đăng đơn → đợi
        ↓
[11] [+15 phút] Báo giá #1: Anh Tuấn 280.000đ (4.8★ rating)
[12] [+25 phút] Báo giá #2: Chị Hoa 310.000đ (4.6★)
[13] [+40 phút] Báo giá #3: Anh Hùng 295.000đ (4.9★)
        ↓
[14] Nam chọn báo giá #2 (310.000đ) → [15] Confirm slot
        ↓
[16] Track live (multi-stop cluster view):
     • Polyline: Hub → đơn cụm #1 (Q.7) → đơn cụm #2 (BT) → Nam là đơn #3
     • "Collector đang ở đơn 1/3 cụm — ETA điều chỉnh ~45 phút"
     • Movement indicator: hướng Bắc, 28 km/h
        ↓
[17] Geofence 200m → auto push "Collector vào khu nhà" → Collector đến → cân thực + verify
        ↓
[18] Final price (mass balance verify, ±5% tolerance) → ZaloPay
        ↓
[19] Rate Collector
```
**Touchpoints:** 19 · **Time end-to-end:** 1-2 ngày · **Tier B unique:** Speed vs Auction toggle, multi-bid display.

### 3.4 Journey D — Hà bán Tier H (pin + bóng đèn)

```
[1-7] Đăng ký + chụp ảnh pin AA, ắc quy xe máy, bóng đèn huỳnh quang
        ↓
[8] AI detect: "Tier H — chất thải nguy hại"
        ↓
[9] Modal explain:
     • KHÔNG CÓ giá tiền cho Tier H
     • Free pickup, RE-LOOP xử lý đúng quy chuẩn
     • Bạn nhận +50 Green Points cho đóng góp môi trường
     • Collector chuyên Tier H (giấy phép vận chuyển chất thải nguy hại)
        ↓
[10] Hà accept → [11] Schedule slot (Tier H Collector hiếm hơn — chỉ 2 slot/ngày)
        ↓
[12] [Sau 1 ngày] Collector Tier 3 đến → đóng gói an toàn (thùng chứa riêng)
        ↓
[13] Confirm pickup (không cần OTP tiền vì không có giao dịch tiền)
        ↓
[14] Notif: "Pin của bạn đã chuyển trung tâm xử lý chất thải. +50 GP"
        ↓
[15] Hiển thị certificate "Đã xử lý đúng quy chuẩn" (PDF download)
```
**Touchpoints:** 15 · **Time end-to-end:** 1-2 ngày · **Critical:** modal §9 (no money, only GP), step 15 (env certificate).

### 3.5 Journey E — Bà Năm UI Đơn giản (web path)

```
[1] Cháu Minh bật chế độ "Đơn giản" trên reloop.vn
        ↓
[2] UI: font 1.5x, ít nút, voice prompt "Hãy chụp ảnh rác của bạn"
        ↓
[3] Mỗi step chỉ 1 nút lớn ✓
        ↓
[4-15] Same flow Tier S, payment default = "Tiền mặt"
        ↓
[16] Collector đến → cân → đưa tiền mặt trực tiếp
        ↓
[17] Bà Năm xác nhận đã nhận tiền (nút lớn ✓)
```
**Touchpoints:** 17 · **Critical:** font scaling 1.5x, voice guidance Web Speech API, default payment Tiền mặt.

### 3.6 Journey F — Bà Năm Hotline (phone path)

```
[1] Bà Năm gọi 1900-RELOOP từ điện thoại bàn
        ↓
[2] Operator nhận → tạo đơn hộ qua Operator Dashboard (out-of-scope cho web)
        ↓
[3] Operator: "Tên cô là gì? Địa chỉ? Bán gì?"
        ↓
[4] Operator confirm + slot → SMS xác nhận đến SĐT bà Năm
        ↓
[5-7] Collector đến → cân → tiền mặt → done

In-scope cho web app:
• Click-to-call deep link tel:19007356677 từ web (button "Gọi 1900-RELOOP")
• Hotline shortcut visible trên header trong UI Đơn giản mode
• Order tracking link trong SMS → bà Năm/cháu mở web để xem status
```

### 3.7 Journey G — Minh đặt giúp ông bà ("Cháu giúp bà")

```
[1] Minh login (account riêng) → [2] Click "+ Đặt lịch" → modal "Đặt cho ai?"
        ↓
[3] Chọn "Cho người thân (Cháu giúp bà)"
        ↓
[4] Form người thân:
     • SĐT: 0901xxx (Bà Nội)
     • Tên: Bà Hoàng Thị Năm
     • Địa chỉ: 123 ABC, Bình Thạnh
     • Quan hệ: Bà nội
        ↓
[5] System verify: "+50 GP sẽ vào account Minh"
        ↓
[6] Continue normal flow (chụp ảnh, schedule, payment)
        ↓
[7] Payment default = "Tiền mặt cho bà"
        ↓
[8] Confirm → SMS gửi SĐT bà nội: "Cháu Minh đã đặt thu gom..."
        ↓
[9] Collector đến nhà bà → cân → tiền mặt
        ↓
[10] Minh nhận notif: "+50 GP · Bà nhận 38.400đ"
```
**Critical:** tiền tay người nhận (bà), GP vào account người đặt (Minh), SMS dual recipient.

### 3.8 Journey H — Linh khiếu nại BOM thực Tier C (Dispute)

```
[từ Journey B step 21]
[21'] Linh xem BOM thực: Cu 1.20kg (kỳ vọng 1.85kg, lệch -35%)
        ↓
[22'] Click "Khiếu nại BOM" → form dispute:
     • Lý do: "Đồng thực ít hơn dự kiến > 25%"
     • Upload photos đối chứng (nếu có)
     • Note: "Mô tơ này tôi mua mới 2010, hãng X — không thể chỉ 1.2kg đồng"
        ↓
[23'] Submit → [24'] Notif "Đã chuyển team review trong 48h"
        ↓
[25'] [Sau 36h] Team review:
     A. Nếu Hub luộc → Hub bị giáng tier, Linh nhận compensation theo BOM kỳ vọng
     B. Nếu BOM thực đúng → giải thích chi tiết (model mô tơ X có spec đồng thấp)
        ↓
[26'] Notif outcome → Linh accept hoặc escalate (chuyển legal team — out-of-scope)
```
**Trigger:** BOM thực lệch >25% so với BOM Library kỳ vọng → auto-suggest dispute button.

### 3.9 Journey I — Linh đổi Green Points (loyalty redemption)

```
[1] Linh có 1.240 GP → [2] Vào /rewards
        ↓
[3] Browse 4 nhóm reward:
     A. Voucher partner (Shopee 50k = 50 GP, GrabFood 100k = 100 GP)
     B. Trồng cây (1 cây thông = 200 GP, RE-LOOP cộng tác Gaia)
     C. Donation (Quỹ bảo vệ trẻ em VN = tự chọn GP)
     D. Cash equivalent (1.000 GP = 10.000đ vào ZaloPay, có cap 1tr GP/tháng)
        ↓
[4] Chọn Shopee 50k → confirm → -50 GP
        ↓
[5] Hệ thống send voucher code qua email + in-app inbox
        ↓
[6] Linh copy code → mở Shopee → áp dụng
```
**Critical:** voucher code uniqueness (gen từ partner API), expiration (30 ngày), inbox archive.

### 3.10 Journey J — Linh xem "Xanh nhà em" (impact visualization)

```
[1] Vào /impact → [2] Dashboard:
     • Tổng CO₂ saved: 47.2 kg (tương đương trồng 2 cây)
     • Tổng nhựa tránh chôn lấp: 8.4 kg
     • Tổng kim loại tái chế: 1.85 kg đồng + 5.1 kg sắt
     • Animation tree growing theo thời gian (12 tháng qua)
        ↓
[3] Share button → social card image (PNG 1080×1080) cho Facebook/Zalo
        ↓
[4] CTA: "Trồng thêm 1 cây xanh thật? Đổi 200 GP →"
```
**Goal:** retention long-tail, gamification, viral share organic.

### 3.11 Journey K — Linh xem route replay sau pickup

```
[1] Linh vào /orders/RL-2026-001234 (đơn done) → [2] Tab "Hành trình"
        ↓
[3] Map render polyline GPS trace toàn bộ trip Hub → nhà:
     • Bắt đầu: Hub Q.7 lúc 14:05
     • Điểm trung gian (3 dừng cụm)
     • Đến nhà Linh: 14:32
        ↓
[4] Per-segment details:
     • Hub → đơn cụm #1: 8 phút, 3.2km, avg 24 km/h
     • Đơn #1 → #2: 6 phút, 2.1km, avg 21 km/h
     • Đơn #2 → nhà Linh: 13 phút, 4.5km, avg 20 km/h (kẹt xe Nguyễn Văn Linh)
        ↓
[5] Speed chart timeline + movement direction overlay
        ↓
[6] CTA: "Báo cáo bất thường" nếu user thấy detour không lý do
```
**Goal:** transparency, audit trail, trust building. **Touchpoints:** 6.

### 3.12 Journey L — Linh bị AI Anti-fraud soft-flag

```
[1] Linh đặt đơn Tier C thứ 5 trong tuần (pattern bất thường — quá nhiều cho user mới)
        ↓
[2] AI Layer detect → soft-flag account, không block đơn
        ↓
[3] Banner đỏ trên dashboard:
     "Chúng tôi đang review hoạt động bất thường trên tài khoản của bạn.
      Tạm ứng giảm 20% (từ 30% xuống 10%) trong 7 ngày.
      Nếu bạn nghĩ đây là nhầm lẫn → [Khiếu nại]"
        ↓
[4] Đơn vẫn process bình thường nhưng tạm ứng thấp hơn
        ↓
[5] Linh click "Khiếu nại" → form:
     • Lý do hoạt động: "Dọn nhà, có nhiều đồ điện cũ"
     • Upload evidence (ảnh kho rác)
        ↓
[6] [Sau 24h] Team review → unflag → notif "Đã khôi phục tạm ứng 30%"
```
**Goal:** balance anti-fraud vs false-positive UX. **Touchpoints:** 6.

---

## 4. FEATURE LIST — FULL B2C SCOPE

Mọi feature đều **MUST HAVE** trong scope toàn bộ app. Roadmap deployment ở §8 quyết định feature nào ra mắt phase nào.

### 4.1 Module 1 — Authentication & Onboarding

| ID | Feature | Spec |
|---|---|---|
| AUTH-01 | Đăng ký tài khoản qua OTP SMS | Verify SĐT VN, OTP 6 digit, 5 phút expire |
| AUTH-02 | Đăng nhập (OTP / password) | Password optional sau khi tạo account |
| AUTH-03 | Profile setup ban đầu | Tên, SĐT, địa chỉ chính, avatar (optional), opt-in notif |
| AUTH-04 | Đăng nhập qua Zalo OAuth | Phổ biến VN, giảm SMS cost |
| AUTH-05 | 2FA optional | Bật bắt buộc khi balance > 1tr GP hoặc user request |
| AUTH-06 | Logout + revoke session | Multi-device support |
| AUTH-07 | Forgot password | Reset qua OTP SMS |
| AUTH-08 | Onboarding tutorial tour | 4 màn intro lần đầu login: tier rác / Trust Score / GP / pickup flow |
| GEO-01 | Geo-check khu vực hỗ trợ | Block đơn ngoài quận hỗ trợ; show whitelist |
| GEO-02 | Waitlist sign-up | Email/SĐT, RE-LOOP notif khi mở quận mới |
| GEO-03 | Multi-address management | Nhà chính + nhà bố mẹ + văn phòng (max 5 addr) |

### 4.2 Module 2 — Order Creation (4 Tier)

| ID | Feature | Spec |
|---|---|---|
| ORDER-01 | Snap photo rác (max 4 ảnh) | Web camera API + upload, auto-compress 1MB/ảnh |
| ORDER-02 | AI detect Tier (S/B/C/H) | Custom model + Google Vision hybrid |
| ORDER-03 | Confirm tier + override AI | User có thể "Sai? Sửa thủ công" → chọn tier khác |
| ORDER-04 | **Tier S** — giá CHẮC CHẮN | "3kg PET = 36.000đ" + breakdown 75/15/10 |
| ORDER-05 | **Tier C** — dải giá + tạm ứng % theo Trust Score + Hold ví ảo | Modal explain Trust Score 20→30%, 50→50%, 80→70% |
| ORDER-06 | **Tier B Speed Mode** — chốt giá sàn ngay | Hiển thị 1 giá floor, Collector đến 30 phút |
| ORDER-07 | **Tier B Auction Mode** — đợi 30-60 phút nhận max 3 báo giá | UI countdown + bid card list (price, rating, ETA) |
| ORDER-08 | **Tier H** — free pickup, no money | Hiển thị +50 GP, env certificate post-pickup |
| ORDER-09 | Address picker với map pin | Map integration (Mapbox/Goong), drag pin chính xác |
| ORDER-10 | Schedule pickup slot | Ngày + 2h window, min 4h ahead, slot Tier H hiếm hơn |
| ORDER-11 | Payment method | ZaloPay default, Tiền mặt, MoMo backup, VNPay (B2B-flow) |
| ORDER-12 | Order summary + confirm | Final review, total, breakdown |
| ORDER-13 | Multi-item single order | 1 đơn nhiều loại (PET + carton + mô tơ), tổng 1 lần Collector |
| ORDER-14 | "Cháu giúp bà" — đặt đơn hộ người thân | Form SĐT/tên/quan hệ người thân, +50 GP cho người đặt |
| ORDER-15 | Draft autosave | Lưu local nếu network drop, resume từ last step |
| ORDER-16 | Cancel trước khi Collector đi từ Hub | Free cancel, không impact Trust Score |
| ORDER-17 | Cancel sau khi Collector đi | -5 Trust Score + reason form |
| ORDER-18 | Reschedule slot | 1 lần free, sau đó -2 Trust Score |

### 4.3 Module 3 — Real-time Tracking

| ID | Feature | Spec |
|---|---|---|
| TRACK-01 | Real-time Collector location on map | WebSocket update mỗi 30s (60s khi pin saving) |
| TRACK-02 | ETA countdown + Collector profile | Avatar, tên, tier (1/2/3), xe, rating, SĐT click-to-call |
| TRACK-03 | Notif "Collector sắp đến (5 phút)" | Web push + SMS fallback |
| TRACK-04 | In-app chat với Collector | Realtime, simple text + voice note, history 7 ngày |
| TRACK-05 | Notif cho Tier H — Collector chuyên Tier 3 đến | Show certificate giấy phép vận chuyển chất thải |
| TRACK-06 | Polyline route visualization | SVG/Mapbox polyline Hub origin → user, update theo movement, render < 200ms |
| TRACK-07 | Multi-stop cluster view | "Collector đang ở đơn 1/3 cụm — bạn là đơn 3, ETA điều chỉnh ~45 phút" + thứ tự visual |
| TRACK-08 | Geofence arrival notification | Auto web push + SMS khi Collector vào 200m radius nhà user |
| TRACK-09 | Traffic-based ETA recalculation | Recompute mỗi 60s từ Mapbox Directions API, show old vs new ETA |
| TRACK-10 | Route replay (trip log) | Sau pickup: GPS trace polyline + speed chart + duration per segment + detour flag |
| TRACK-11 | Hub-leg tracking (Tier C) | Sau pickup tại nhà → theo dõi xe Collector về Hub thêm ~30 phút, kết thúc tại Hub badge |
| TRACK-12 | Movement indicator | Direction arrow trên pin (hướng compass), speed km/h hiển thị inline |

### 4.4 Module 4 — At-home Transaction

| ID | Feature | Spec |
|---|---|---|
| TRANS-01 | At-home weighing flow | Collector input weight → user confirm cùng số liệu |
| TRANS-02 | Tier S instant final price + ZaloPay/cash | Tự động tính theo cân thực |
| TRANS-03 | Tier C Peek Check (xé góc vỏ) | Checkbox bắt buộc cho user mới (Trust Score < 50) |
| TRANS-04 | Tier C Hold ví ảo announce | Modal "60.000đ tạm ứng vào Hold, chốt sau Hub verify" |
| TRANS-05 | Tier B mass balance verify (±5%) | Nếu cân thực lệch >5% → recompute final price |
| TRANS-06 | Tier H confirm pickup (no money) | Sign-off khác Tier S/B/C — chỉ "Đã giao" |
| TRANS-07 | Digital sign-off — OTP 6 digit | Audit trail, OTP gửi SDT user |
| TRANS-08 | Receipt PDF download | Sau hoàn tất, có thể download |

### 4.5 Module 5 — Wallet & BOM Verification

| ID | Feature | Spec |
|---|---|---|
| WALLET-01 | Real balance ZaloPay + Hold ví ảo | Tách 2 section rõ |
| WALLET-02 | Hold ví ảo dashboard | List Tier C orders pending verify, status Hold/Verifying/Released |
| WALLET-03 | BOM thực view per Tier C order | Materials breakdown + ảnh trước/sau + video timelapse 2 phút |
| WALLET-04 | Phần chênh notif + auto-release ZaloPay | Push + email khi Hub verify done |
| WALLET-05 | Transaction history filterable | Filter tier (S/B/C/H), status, date range, amount range |
| WALLET-06 | Export transaction CSV | Cá nhân download (cho ai cần khai thuế) |
| WALLET-07 | Withdraw to ZaloPay (manual fallback) | Nếu auto-release lỗi, user request rút thủ công |
| WALLET-08 | Risk Adjustment notification | Khi LME đồng biến động >15%/tuần, hệ thống giảm tạm ứng từ 70% → 60% — show banner explain |
| WALLET-09 | Casing Fraud education modal | Lần đầu user đặt Tier C → modal animation 3 frame explain "Vì sao Hold tiền" với example tráo ruột mô tơ; checkbox "Không hiện lại" |
| WALLET-10 | Hub Spot Check notification | Đơn rơi 10% sample → notif "Đơn được kiểm tra ngẫu nhiên — verify thêm 24h, không ảnh hưởng giá" + badge trên order detail |
| WALLET-11 | Chain of Custody timeline | 4-stage timeline: cân tại nhà → vào Hub → rã xác multi-angle camera → cân BOM thực; mỗi stage có Smart Scale photo + signed checksum |
| WALLET-12 | Hub Tier transparency badge | Hiển thị "Verify tại Hub Tier 1/2/3" trên order detail + tooltip explain Hub Tier system (Informal/Basic/Certified) |
| WALLET-13 | Hold expire auto-release (72h) | Hub không verify trong 72h → auto-release tạm ứng theo BOM kỳ vọng (no penalty user, RE-LOOP gánh risk) |
| WALLET-14 | Refund flow khi dispute thắng | Compensation về ZaloPay trong 24h sau team review confirm; show breakdown compensation vs original |
| WALLET-15 | Tax invoice download | PDF theo template Bộ Tài Chính, có VAT breakdown, dùng khai thuế cá nhân thu nhập từ thanh lý |
| WALLET-16 | Payment fee transparency | Order summary: "Phí ZaloPay 1.5% RE-LOOP chịu — bạn nhận đủ 38.400đ" (không trừ user) |
| WALLET-17 | Cash incentive disclosure | Khi chọn Tiền mặt: "Collector ứng tiền cho bạn — RE-LOOP cộng 2.000đ phí Collector ứng (user không trả thêm)" |

### 4.6 Module 6 — Trust Score

| ID | Feature | Spec |
|---|---|---|
| TRUST-01 | Trust Score gauge 0-100 với 3 zone | Đỏ 0-30 (mới) / Vàng 30-70 (tích lũy) / Lime 70-100 (đáng tin) |
| TRUST-02 | Tạm ứng % visibility theo Trust Score | 30% / 50% / 70% — show next milestone |
| TRUST-03 | Trust Score history log | Mỗi đơn ±N điểm, cancel -5, dispute lose -10, dispute win +5 |
| TRUST-04 | Trust Score impact preview | Trước khi cancel, show "Hành động này -5 Trust Score → tạm ứng giảm xuống 50%" |
| TRUST-05 | AI Anti-fraud soft-flag UX | Banner đỏ "Chúng tôi đang review hoạt động bất thường — tạm ứng giảm 20% × 7 ngày" + appeal form + audit log |
| TRUST-06 | Trust Score milestone celebration | Animation lottie khi đạt 30/50/70/100 + GP bonus +50/+100/+200/+500 |
| TRUST-07 | Trust Score recovery path | Sau cancel/lose dispute: hiển thị "Hoàn 3 đơn thành công để khôi phục Trust Score về mức cũ" + progress tracker |

### 4.7 Module 7 — Green Points & Loyalty

| ID | Feature | Spec |
|---|---|---|
| GP-01 | GP balance + earn từ orders | 1 GP = 1.000đ giá trị đơn |
| GP-02 | GP history | List earn/redeem, filter by source |
| GP-03 | Earn extra GP first order + weekly streak | First order +100 GP, 4 tuần liên tiếp +500 GP |
| GP-04 | Streak Bonus dashboard | Visual streak counter, next milestone |
| GP-05 | Referral program (+200 GP/người) | Unique referral code, share link |
| GP-06 | "Cháu giúp bà" — +50 GP đặt hộ | Logic ở ORDER-14 |
| GP-07 | Voucher redemption | Shopee, GrabFood, Tiki — partner API integration |
| GP-08 | Cash equivalent | 1.000 GP = 10.000đ vào ZaloPay, cap 1tr GP/tháng |
| GP-09 | Plant tree (Gaia partnership) | 200 GP = 1 cây thông + certificate |
| GP-10 | Donation | Quỹ bảo vệ trẻ em VN, tự chọn GP, tax receipt |
| GP-11 | ZaloPay incentive | User chọn ZaloPay = +5% GP (vs Tiền mặt) |
| LOYALTY-01 | Tier Bronze/Silver/Gold | Auto-promote theo total GP earned (lifetime) |
| LOYALTY-02 | Tier benefits display | Bronze priority slot / Silver +5% GP / Gold +10% GP + dedicated Collector |
| GP-12 | GP earning rate per tier | Tier S earn ngay khi pickup done; Tier C earn **sau** Hub verify (anti-fraud); Tier H +50 GP fixed; Tier B earn sau mass balance verify |
| GP-13 | GP expiration policy | Không activity > 12 tháng → GP expire; warn email 30 ngày + 7 ngày trước; 1 đơn nào cũng reset clock |
| GP-14 | GP rounding rule | Round down (38.400đ → 38 GP, không 39); breakdown rõ trong GP history |
| GP-15 | Voucher partner fee transparency | Help section: "Voucher Shopee 50.000đ = 50 GP — RE-LOOP và Shopee cùng subsidize, bạn không trả thêm" |
| GP-16 | Streak break recovery (grace) | 1 grace 1 tuần/quý — đứt streak 1 tuần không reset counter; GP-04 dashboard show grace remaining |
| LOYALTY-03 | Tier thresholds cụ thể | Bronze 0-1.000 GP / Silver 1.001-10.000 GP / Gold 10.001+ GP (lifetime earned, không phải balance) |
| LOYALTY-04 | Tier upgrade animation + perks unlock | Modal lottie celebrate khi cross threshold + show new perks + share social card option |
| LOYALTY-05 | Tier downgrade rule | **KHÔNG downgrade** — lifetime tier để giữ retention long-term, kể cả user inactive 12 tháng |

### 4.8 Module 8 — Profile & Settings

| ID | Feature | Spec |
|---|---|---|
| PROFILE-01 | Manage personal info | Tên, SĐT, email, avatar |
| PROFILE-02 | Multi-address management | Logic ở GEO-03 |
| PROFILE-03 | Notification preferences | Toggle push/SMS/email per event type |
| PROFILE-04 | Language (vi-VN only) | Locked, future-proof structure |
| PROFILE-05 | Privacy settings | Theo NĐ 13/2023/NĐ-CP — data export, delete account |
| PROFILE-06 | Linked payment methods | ZaloPay/MoMo unlink, default selection |
| EASY-01 | UI "Đơn giản" toggle | Theme switch — font 1.5x, ít nút, contrast cao |
| EASY-02 | Voice guidance prompts | Web Speech API, vi-VN voice |
| EASY-03 | Default payment Tiền mặt khi EASY mode | Pre-select để Bà Năm không cần chọn ZaloPay |

### 4.9 Module 9 — Communication

| ID | Feature | Spec |
|---|---|---|
| NOTIF-01 | Web push notifications | Service worker, browser permission |
| NOTIF-02 | SMS fallback events quan trọng | Order confirmed, Collector arriving, BOM verify done, dispute outcome |
| NOTIF-03 | Email order confirmations | Template Vietnamese, branded |
| NOTIF-04 | In-app inbox | Lưu archive notif 90 ngày, mark read/unread |
| NOTIF-05 | Hotline shortcut deep link | `tel:19007356677` button trên header EASY mode + footer global |
| NOTIF-06 | Multi-payment outage notification | "ZaloPay tạm ngừng — đơn của bạn đã chuyển sang MoMo" banner |
| CHAT-01 | In-app chat với Collector | Logic ở TRACK-04 |

### 4.10 Module 10 — Reviews, Disputes & Help

| ID | Feature | Spec |
|---|---|---|
| REVIEW-01 | Rate Collector after pickup (1-5 sao + comment) | Trong 24h sau hoàn tất, sau đó auto-5★ |
| REVIEW-02 | Rate Hub khi BOM verify done (Tier C only) | Optional, ảnh hưởng Hub Tier rating |
| DISPUTE-01 | Khiếu nại BOM thực Tier C | Trigger khi BOM lệch >25%, form + upload evidence |
| DISPUTE-02 | Khiếu nại Collector behavior | Subjective, escalate manual review |
| DISPUTE-03 | Dispute outcome view | Compensation/explanation, accept/escalate |
| HELP-01 | FAQ + tutorial onboarding tour | Logic ở AUTH-08 |
| HELP-02 | Hotline shortcut | Logic ở NOTIF-05 |
| HELP-03 | Tier explainer pages | Static doc cho mỗi tier S/B/C/H — UX để user hiểu trước khi đặt |
| HELP-04 | Support ticket form | Email-based, in-app fallback |

### 4.11 Module 11 — Impact Visualization ("Xanh nhà em")

| ID | Feature | Spec |
|---|---|---|
| IMPACT-01 | CO₂ saved dashboard | Total + per-month chart |
| IMPACT-02 | Tree growing animation | Visual gamification, theo total đơn hoàn tất |
| IMPACT-03 | Material breakdown | Total nhựa/đồng/sắt/nhôm/giấy đã tái chế |
| IMPACT-04 | Share social card | PNG 1080×1080 download, FB/Zalo share API |
| IMPACT-05 | Comparison metric | "Bạn bằng X cây thông trồng / Y chuyến xe máy giảm CO₂" |

---

## 5. NON-FUNCTIONAL REQUIREMENTS (NFR)

### 5.1 Performance
- First Contentful Paint < 1.5s trên 3G slow
- Time to Interactive < 3s trên mobile mid-tier (Redmi Note 10)
- AI photo detection response < 5s
- Real-time tracking update mỗi 30s (chấp nhận 60s khi pin saving)
- Tier B Auction live-bid update qua WebSocket, latency < 2s
- Polyline route render < 200ms khi GPS update; route replay load < 1s với 100+ segment
- Geofence detection accuracy ±50m, false-positive rate < 5%

### 5.2 Browsers/Devices
- Chrome 100+, Safari 15+, Edge 100+, Samsung Internet 18+
- Mobile: iOS 14+ Safari, Android 9+ Chrome
- Desktop: 1280×832 minimum (landing), 1024×768 minimum (app)
- Mobile portrait only cho phần đặt đơn (camera)
- PWA installable (Add to Home Screen) — không phải native

### 5.3 Accessibility
- WCAG 2.1 Level AA cho UI Đơn giản mode
- Font scale tối đa 200% mà không break layout
- High contrast mode (dark theme đã có)
- Voice guidance optional cho EASY mode (Web Speech API)
- Touch targets ≥ 48×48dp (mobile)
- Screen reader compatibility cho main user flows

### 5.4 Security & Privacy
- HTTPS only, HSTS enabled
- ZaloPay/MoMo/VNPay integration: webhook signature verify
- PII encrypt at rest (SĐT, địa chỉ)
- Photos uploaded: signed URLs, expire 30 ngày
- BOM data: read-only after Hub verify (immutable audit trail)
- 2FA optional cho user > 1tr GP balance
- Tuân thủ NĐ 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân
- GDPR-style data export + delete account
- Chain of Custody data immutable + signed checksums (SHA-256) cho mỗi CustodyEvent
- AI fraud flag audit log retain 24 tháng, có appeal trail đầy đủ
- RouteTrace GPS data privacy: chỉ user của đơn xem được, không share third-party

### 5.5 Offline & Edge cases
- Form data autosave local (chụp ảnh, draft đơn)
- Offline mode: view order history + wallet (cached qua service worker)
- Network drop trong khi đặt đơn → resume từ last step
- Image upload: retry 3 lần, fallback compressed quality
- ZaloPay outage > 2h → auto-switch MoMo + banner notif
- LME hedging trigger → user-facing Risk Adjustment banner

### 5.6 Localization
- Vietnamese only (vi-VN), structure cho future EN
- Tiền: VND format dấu chấm (213.700đ)
- Ngày: dd/MM/yyyy
- Giờ: 24h format
- Number: dấu chấm thousands separator

### 5.7 Analytics & Tracking
- Event tracking từng bước order flow (funnel analysis)
- Funnel: signup → first order → repeat order → loyalty redeem
- Trust Score progression tracking
- Drop-off analysis trên tier explanation modals
- Tier B Auction conversion rate (Speed vs Auction)
- Tier H awareness reach (Persona Hà segment)
- A/B testing framework cho UI Đơn giản onboarding
- Casing Fraud education modal completion rate (skip vs read-through)
- Hub Spot Check user sentiment (anxiety/calm signal qua session behavior)
- Dispute success ratio per Hub Tier (detect Hub fraud pattern)
- Route replay engagement: % user mở tab "Hành trình" sau pickup
- AI Anti-fraud false-positive rate (appeal-success / total-flag)

### 5.8 Compliance
- NĐ 08/2022/NĐ-CP: thông tin EPR liên quan B2B (out-of-scope cho B2C UI nhưng data pipeline phải capture)
- NĐ 13/2023/NĐ-CP: data privacy, data export/delete
- Thuế giao dịch cá nhân: invoice template đáp ứng yêu cầu future Tax Reform

---

## 6. MODULE BREAKDOWN — SUMMARY TABLE

| Module | Tên | Feature count | Phase 1 | Phase 2 | Phase 3 | Phase 4 |
|---|---|---|---|---|---|---|
| 1 | Auth & Onboarding | 11 | 5 | 3 | 2 | 1 |
| 2 | Order Creation | 18 | 9 | 5 | 3 | 1 |
| 3 | Real-time Tracking | 12 | 5 | 4 | 3 | 0 |
| 4 | At-home Transaction | 8 | 4 | 2 | 2 | 0 |
| 5 | Wallet & BOM | 17 | 8 | 5 | 3 | 1 |
| 6 | Trust Score | 7 | 3 | 2 | 2 | 0 |
| 7 | Green Points & Loyalty | 21 | 3 | 8 | 7 | 3 |
| 8 | Profile & Settings | 9 | 5 | 2 | 2 | 0 |
| 9 | Communication | 7 | 4 | 2 | 1 | 0 |
| 10 | Reviews, Disputes & Help | 8 | 4 | 2 | 2 | 0 |
| 11 | Impact ("Xanh nhà em") | 5 | 0 | 1 | 2 | 2 |
| **Total** | | **125** | **54** | **36** | **28** | **7** |

---

## 7. DATA MODEL (high-level B2C entities)

| Entity | Key fields |
|---|---|
| User | id, phone, name, email, avatar, addresses[], trustScore, gpBalance, loyaltyTier, twoFAEnabled, easyModeOn, language |
| Address | id, label, fullText, lat, lng, isPrimary |
| Order | id, userId, tier (S/B/C/H), items[], photos[], status, advance, total, paymentMethod, slot, addressId, createdAt, completedAt |
| Item | id, orderId, name, expectedTier, expectedBOM, actualWeight, actualBOM, actualPrice |
| Bid (Tier B Auction) | id, orderId, collectorId, price, rating, eta, submittedAt |
| HoldVoucher | id, orderId, amount, status (Hold/Verifying/Released), holdAt, releasedAt |
| BOMRecord | id, orderId, materials[], photosBefore[], photosAfter[], videoUrl, massBalance, hubId |
| GPTransaction | id, userId, delta, source (order/streak/referral/redemption/cgb), createdAt |
| Notification | id, userId, type, channel (push/sms/email/inbox), payload, readAt |
| Review | id, orderId, targetType (collector/hub), rating, comment, createdAt |
| Dispute | id, orderId, reason, evidence[], status, outcome, createdAt, resolvedAt |
| Voucher (redeemed) | id, userId, partnerCode, code, value, expiresAt, usedAt |
| RouteTrace | id, orderId, segments[{lat, lng, ts, speed, heading}], polylineEncoded, replayUrl, totalDistance, totalDuration |
| SpotCheck | id, orderId, sampledAt, outcome (pending/passed/failed), notifSentAt, extendedVerifyHours |
| CustodyEvent | id, orderId, stage (home_weigh/hub_intake/disassembly/bom_weigh), photos[], cameraAngle, smartScaleSnapshotUrl, ts, signedChecksum (SHA-256) |
| FraudFlag | id, userId, severity (soft/hard), reason, advanceReductionPct, expiresAt, appealStatus (none/pending/upheld/overturned) |
| TaxInvoice | id, orderId, pdfUrl, vatAmount, grossAmount, issuedAt |

---

## 8. DEPLOYMENT ROADMAP

### Phase 1 — MVP (T1-3/2026)
- 3 quận TPHCM: Q.7, Bình Thạnh, Q.4
- Tier S + Tier C only (skip B/H)
- Payment: ZaloPay + Tiền mặt
- 43 features (xem §6)
- Goal: validate Anti-fraud Tier C, Trust Score, Hold ví ảo

### Phase 2 — Pilot (T4-6/2026)
- Mở rộng 8 quận TPHCM
- Bổ sung Tier B (Speed + Auction) + Tier H
- Payment: + MoMo backup, hybrid cash incentive
- Loyalty Tier Bronze/Silver/Gold ra mắt
- "Cháu giúp bà" + Referral
- 26 features mới
- Goal: validate B2B pipeline (Hub Tier 3), retention 30d ≥ 45%

### Phase 3 — Scale (T7-12/2026)
- Toàn TPHCM (24 quận) + HN (5 quận) + ĐN (5 quận)
- Multi-payment đầy đủ (VNPay B2B-flow)
- Risk Adjustment LME notification
- 2FA optional, advanced privacy controls
- 21 features mới
- Goal: unit economics positive (LTV/CAC ≥ 2.5), Series A 3-5tr USD

### Phase 4 — Long tail (2027+)
- "Xanh nhà em" gamification full
- Tree planting (Gaia), Donation expansion
- Voucher partner ecosystem (10+ brands)
- Advanced impact visualization, social sharing viral
- 6 features mới

---

## 9. RESOLVED OPEN QUESTIONS (từ v0.1)

| Q | Decision (v5.0) | Rationale |
|---|---|---|
| Q1 — Auth strategy | OTP SMS primary + Zalo OAuth optional (Phase 1) | OTP đơn giản cho Bà Năm; Zalo OAuth phổ biến VN giảm SMS cost |
| Q2 — AI Photo | Hybrid: Google Vision generic + custom model cho Tier C critical items | Cân bằng cost vs accuracy; custom model train từ 2.847 đơn rã xác |
| Q3 — UI Đơn giản | Theme toggle (1 codebase, conditional render) | Effort thấp, đáp ứng Bà Năm + Linh share device |
| Q4 — Wallet | Hybrid: Internal wallet cho Hold + ZaloPay cho real disbursement | Full control Hold logic + tận dụng ZaloPay disbursement infrastructure |
| Q5 — MVP Tier scope | Tier S + Tier C only (Phase 1) | Focus innovation Tier C, đủ volume Tier S; B/H Phase 2 |

---

## 10. PROPOSED NEXT STEPS

Sau v0.2 này, BA sẽ deliver:

| Round | Deliverable | Effort |
|---|---|---|
| Round 2 | User stories detailed per Module với acceptance criteria + edge cases | 5-7 days |
| Round 3 | Information Architecture + sitemap (96 features → routes) | 2-3 days |
| Round 4 | Wireframes low-fi cho 10 critical flows (4 tier + EASY + dispute + redemption + impact + cgb + auction) | 7-10 days |
| Round 5 | Tech architecture: stack, integrations (ZaloPay/MoMo/VNPay/Mapbox/Gaia/partner voucher API), data model SQL | 3-4 days |
| Round 6 | Sprint plan (12 sprints × 2 tuần = 24 tuần full Phase 1+2) | 1-2 days |

---

*— END Requirements Analysis v0.2 —*

*BA Note: v0.3 phân tích đầy đủ 125 features cho B2C web app, plug 3 critical gap (Tier C anti-fraud user-facing, Route tracking pro-grade, Payment/GP precise rules). Supersedes v0.2 + v0.1. Các hệ thống khác (Collector App, Hub Portal, B2B Marketplace, Admin Panel, Operator Dashboard) cần BA phân tích riêng.*
