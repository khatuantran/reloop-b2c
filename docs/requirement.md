# RE-LOOP B2C Web App — Requirements Analysis v0.1

> **Author:** Senior BA (Claude)
> **Source:** RE-LOOP v5.0 Executive Summary (Stress-Tested Edition)
> **Scope:** B2C web app (reloop.vn) — phía người dân bán rác
> **Date:** May 2026
> **Status:** v0.1 Draft — Pending stakeholder confirmation

---

## 1. SCOPE & OUT-OF-SCOPE

### 1.1 In-scope

**Web app B2C duy nhất** cho hộ gia đình muốn bán rác tái chế:
- Đăng ký, định giá, đặt lịch, theo dõi, thanh toán, quản lý điểm thưởng
- Truy cập qua `reloop.vn` trên trình duyệt (desktop + mobile web)
- Hỗ trợ 2 phân khúc: user trẻ (chính) + người 50+ (UI "Đơn giản")
- 4 Tier rác (S/B/C/H) với 4 cơ chế định giá khác nhau
- Pilot 3 quận TPHCM (Q.7, Bình Thạnh, Q.4) → mở rộng theo roadmap

### 1.2 Out-of-scope (giải pháp riêng, không build trong app này)

| Hệ thống | Lý do tách |
|---|---|
| **Collector App** | Gig drivers cần app riêng (xe máy/ba gác/tải nhỏ) — UX hoàn toàn khác |
| **Hub Portal** | Vựa đối tác cần dashboard rã xác + Smart Scale + camera multi-angle |
| **B2B Marketplace** | Doanh nghiệp B2B cần marketplace riêng để mua sỉ |
| **ESG/EPR Dashboard** | MNCs (Unilever, Coca-Cola) cần báo cáo audit-ready |
| **Admin / Ops Panel** | Internal tool cho RE-LOOP staff (spot check, dispute, fraud review) |
| **Native iOS/Android** | v5 cam kết web-first — KHÔNG build native trong giai đoạn này |

### 1.3 Pilot constraints (Phase 1 MVP, T1-3/2026)

Theo doc v5, MVP chỉ launch:
- **3 quận TPHCM** (Q.7, Bình Thạnh, Q.4) — geo-gating bắt buộc
- **Tier S + Tier C only** (skip Tier B và Tier H trong MVP)
- 10 Collector Tier 1 + 5 Tier 2
- 3 Hub: 2 Informal + 1 Certified

Phase 2 (T4-6): bổ sung Tier B + Tier H, mở rộng 8 quận
Phase 3 (T7-12): scale toàn TPHCM + HN + ĐN

---

## 2. USER PERSONAS

### 2.1 Persona 1 — Linh, 32 tuổi (PRIMARY USER)

**Demographics:** Nhân viên văn phòng, sống chung cư Q.7, có chồng + 2 con
**Tech:** Smartphone Samsung, dùng ZaloPay + MoMo, quen mở Zalo + Facebook hơn cài app mới
**Pain:** Có rác PET + carton mỗi tuần, mô tơ máy giặt cũ định bán nhưng ngại ve chai dạo ép giá. Bận, không có thời gian thương lượng.
**Motivation:** Tiền + sự minh bạch + tiện lợi. Muốn cảm giác "không bị lừa".
**Quote:** *"Tôi muốn biết chính xác mình được bao nhiêu trước khi đồng ý."*
**Use cases:** Bán Tier S thường xuyên (PET, carton hằng tuần), Tier C thỉnh thoảng (mô tơ, dây điện).

### 2.2 Persona 2 — Bà Năm, 68 tuổi (SECONDARY — UI "Đơn giản")

**Demographics:** Nghỉ hưu, sống Bình Thạnh, có cháu trai 28 tuổi giúp dùng smartphone
**Tech:** Có smartphone con cho, nhưng chỉ dùng Zalo gọi điện. Không có ZaloPay/MoMo. Quen tiền mặt.
**Pain:** Có nhiều ve chai (chai PET, lon, sắt vụn) tích lũy. Trước đây bán cho ve chai dạo nhưng giá thấp, không tin.
**Motivation:** Tiền mặt + cảm giác an toàn + có người đến tận nhà.
**Quote:** *"Tôi không cần app phức tạp — gọi điện là được."*
**Use cases:** Bán Tier S đơn giản, hotline 1900-RELOOP, nhận tiền mặt.

### 2.3 Persona 3 — Minh, 26 tuổi (SECONDARY — "Cháu giúp bà")

**Demographics:** Lập trình viên, sống chung với ông bà nội ở Q.4
**Tech:** Heavy smartphone user, sử dụng app banking, MoMo, Shopee
**Pain:** Ông bà có nhiều ve chai cũ nhưng không biết dùng app. Anh muốn giúp ông bà có thêm tiền mặt nhưng không có thời gian gọi ve chai dạo.
**Motivation:** Giúp ông bà + nhận thưởng Green Points + tiện lợi
**Quote:** *"Tôi đặt giúp nhưng tiền vào tay bà nội."*
**Use cases:** Đặt đơn hộ ông bà ("Cháu giúp bà"), tiền vào tài khoản người nhận, nhận +50 Green Points.

---

## 3. USER JOURNEY MAPS

### 3.1 Journey A — Linh bán Tier S (PET 3kg, đơn giản nhất)

```
[1] Mở reloop.vn (desktop hoặc mobile web)
        ↓
[2] Geo-check: nhập "Q.7" → ✓ Hỗ trợ
        ↓
[3] Đăng ký: SĐT + OTP SMS → tạo profile
        ↓
[4] Click "+ Đặt lịch thu gom"
        ↓
[5] Chụp ảnh rác (PET trong bao)
        ↓
[6] AI detect: "Tier S - PET nhựa - ước tính 3kg"
        ↓
[7] User confirm + nhập note tùy chọn
        ↓
[8] Hiển thị giá CHẮC CHẮN: "3kg PET = 36.000đ"
        ↓
[9] Chọn slot: ngày mai 9:00-11:00
        ↓
[10] Chọn payment: ZaloPay (default)
        ↓
[11] Confirm đơn → đợi match Collector
        ↓
[12] "Anh Tuấn (Tier 1) sẽ đến — ETA 25 phút"
        ↓
[13] Track location real-time trên map
        ↓
[14] Collector đến nhà → cân thực: 3.2kg
        ↓
[15] Final price: 38.400đ → user confirm
        ↓
[16] Tiền vào ZaloPay trong 60s
        ↓
[17] Notification: "+38.400đ + 38 Green Points"
        ↓
[18] Rate Collector (5 sao) → done

Touch points: 17 steps
Pain points to address: step 5 (image quality), step 13 (ETA accuracy)
Time end-to-end: ~2-3 ngày từ đăng đơn → nhận tiền
```

### 3.2 Journey B — Linh bán Tier C (mô tơ máy giặt, complex)

```
[1-7] Như Journey A (đăng ký, geo-check, chụp ảnh)
        ↓
[8] AI detect: "Tier C - Mô tơ điện - phức tạp"
        ↓ Modal explain:
[9] "Đây là Tier C. Bạn nhận tạm ứng + chốt sau Hub rã xác."
        ↓
[10] Hiển thị:
     - Dải giá ước tính: 200.000-260.000đ
     - Tạm ứng (Trust Score 20 = mới): 60.000đ HOLD ví ảo (30%)
     - "Số tiền này chưa rút được. Sẽ vào ZaloPay sau Hub verify."
        ↓
[11] User accept → schedule + payment
        ↓
[12-13] Collector đến → Peek Check (xé góc vỏ verify) → cân
        ↓
[14] Cân thực 8.2kg → tạm ứng 60.000đ → HOLD ví ảo
        ↓
[15] Notification: "Mô tơ đã chuyển Hub. Verify trong 16-24h."
        ↓
[16] [Sau 18h] Notification: "Hub đang rã xác — xem video timelapse"
        ↓
[17] [Sau 28h] Notification: "Đã verify mass balance 97% ✓"
        ↓
[18] Modal hiển thị:
     - BOM thực: Cu 1.85kg + Fe 5.10kg + nhựa 1.05kg
     - Photos trước/sau rã xác
     - Video timelapse 2 phút
     - Giá thực: 213.700đ
     - Phần chênh: +153.700đ (đã release ví ảo + chuyển ZaloPay)
        ↓
[19] User confirm → tiền vào ZaloPay
        ↓
[20] Total nhận: 213.700đ + 28 Green Points
        ↓
[21] (Trust Score tăng từ 20 → 28 sau đơn này)

Touch points: 21 steps
Time end-to-end: ~3-5 ngày
Critical UX: step 10 (explain Hold ví ảo), step 18 (transparency about real BOM)
```

### 3.3 Journey C — Bà Năm (UI Đơn giản + Tiền mặt)

```
[Path 1 — qua web]
[1] Cháu giúp bật chế độ "Đơn giản" trên reloop.vn
        ↓
[2] UI hiển thị: font lớn, ít nút, giọng nói hướng dẫn từng bước
        ↓
[3] "Bấm vào nút lớn ✓ để chụp ảnh"
        ↓
[4-15] Same flow, nhưng:
        - Chữ to hơn 1.5x
        - Mỗi bước chỉ 1 nút action chính
        - Voice prompt: "Hãy chụp ảnh rác của bạn"
[16] Payment: chọn "Tiền mặt" (default cho UI Đơn giản)
        ↓
[17] Collector đến → cân → đưa tiền mặt trực tiếp
        ↓
[18] Bà Năm xác nhận đã nhận tiền (nút lớn ✓)

[Path 2 — qua hotline]
[1] Bà Năm gọi 1900-RELOOP từ điện thoại
        ↓
[2] Operator nhận cuộc gọi → tạo đơn hộ qua Operator Dashboard
        ↓
[3] Operator: "Tên cô là gì? Địa chỉ? Bán gì?"
        ↓
[4] Operator confirm + slot → SMS xác nhận đến SĐT bà Năm
        ↓
[5-7] Collector đến → cân → tiền mặt → done

Out-of-scope cho web app: Operator Dashboard (tool nội bộ riêng)
In-scope cho web app: deep link tel:1900RELOOP từ web → trigger phone app
```

### 3.4 Journey D — Minh đặt giúp ông bà ("Cháu giúp bà")

```
[1] Minh login reloop.vn (account riêng)
        ↓
[2] Click "+ Đặt lịch thu gom" → modal hỏi "Đặt cho ai?"
        ↓
[3] Chọn "Cho người thân (Cháu giúp bà)"
        ↓
[4] Form:
     - SĐT người thân: 0901xxx (Bà Nội)
     - Tên: Bà Hoàng Thị Năm
     - Địa chỉ: 123 ABC, Bình Thạnh
     - Quan hệ: Bà nội
        ↓
[5] System verify: "+50 Green Points sẽ vào account của bạn (Minh)"
        ↓
[6] Continue normal flow (chụp ảnh, schedule, payment)
        ↓
[7] Payment: cho phép chọn "Tiền mặt cho bà" (default)
        ↓
[8] Confirm → SMS gửi đến SĐT bà nội: "Cháu Minh đã đặt thu gom..."
        ↓
[9] Collector đến nhà bà → cân → tiền mặt → done
        ↓
[10] Minh nhận notification: "+50 Green Points · Bà nhận 38.400đ"

Critical: tiền vào tay người nhận (bà), Green Points vào tài khoản người đặt (Minh)
```

---

## 4. FEATURE LIST (MoSCoW PRIORITIZED)

Sắp xếp theo Phase deployment.

### 4.1 MUST HAVE — Phase 1 MVP (T1-3/2026)

| ID | Feature | Notes |
|---|---|---|
| **AUTH-01** | Đăng ký tài khoản via OTP SMS | Verify SĐT VN |
| **AUTH-02** | Đăng nhập (OTP / password) | |
| **AUTH-03** | Profile setup (tên, SĐT, địa chỉ, avatar) | |
| **GEO-01** | Geo-check khu vực hỗ trợ (Q.7, BT, Q.4) | Block đơn ngoài 3 quận |
| **GEO-02** | Waitlist sign-up cho khu vực chưa hỗ trợ | Email collection |
| **ORDER-01** | Snap photo rác (max 4 ảnh) | Web camera API |
| **ORDER-02** | AI detect Tier S + Tier C | Custom model, skip B/H trong MVP |
| **ORDER-03** | Confirm tier + add description | User override AI nếu cần |
| **ORDER-04** | Estimated price display: Tier S CHẮC CHẮN | "3kg PET = 36k" |
| **ORDER-05** | Estimated price display: Tier C dải giá + tạm ứng % theo Trust Score | Modal explain Hold ví ảo |
| **ORDER-06** | Address picker với map pin | Map integration |
| **ORDER-07** | Schedule pickup slot (ngày + 2h window) | Min 4h ahead |
| **ORDER-08** | Payment method: ZaloPay (primary) + Tiền mặt | Skip MoMo trong MVP |
| **ORDER-09** | Order summary + confirm | |
| **TRACK-01** | Real-time Collector location on map | Updates every 30s |
| **TRACK-02** | ETA countdown + Collector profile (rating, vehicle) | |
| **TRACK-03** | Notification: "Collector sắp đến (5 phút)" | Web push + SMS |
| **TRANS-01** | At-home weighing flow (Collector input → user confirm) | Both parties verify |
| **TRANS-02** | Tier S: instant final price calculation + payment | |
| **TRANS-03** | Tier C: Peek Check checkbox cho user mới + Hold ví ảo | |
| **TRANS-04** | Digital sign-off (signature pad hoặc OTP confirm) | Audit trail |
| **WALLET-01** | Wallet view: Real balance (ZaloPay) + HOLD ví ảo | Separate sections |
| **WALLET-02** | Hold ví ảo dashboard (Tier C orders pending verification) | Status: Hold/Verifying/Released |
| **WALLET-03** | BOM thực view (sau Hub rã xác): materials + ảnh + video timelapse | Read-only display |
| **WALLET-04** | Phần chênh notification + auto-release vào ZaloPay | Push notification |
| **WALLET-05** | Transaction history (filter by tier, date, status) | |
| **TRUST-01** | Trust Score display + level (User mới 0-50 / Có lịch sử 50+) | Visible on profile |
| **TRUST-02** | Tạm ứng % visibility theo Trust Score | "Trust Score 80 → tạm ứng 70%" |
| **GP-01** | Green Points balance + earn từ orders (1 GP = 1.000đ giá trị) | |
| **GP-02** | Green Points history | |
| **NOTIF-01** | Web push notifications | Order updates |
| **NOTIF-02** | SMS fallback cho events quan trọng | Backup, cost-conscious |
| **NOTIF-03** | Email order confirmations | |
| **PROFILE-01** | Manage personal info, addresses (multi-address) | |
| **PROFILE-02** | Notification preferences | |
| **REVIEW-01** | Rate Collector after pickup (1-5 sao + comment) | |
| **CANCEL-01** | Cancel order trước khi Collector đi từ Hub | Free cancel |
| **CANCEL-02** | Cancellation reasons + impact on Trust Score | Cancel sau khi Collector đi: -5 Trust Score |
| **HELP-01** | FAQ + tutorial onboarding tour | |
| **HELP-02** | Hotline shortcut (deep link tel:19007356677) | "Gọi 1900-RELOOP" button |

### 4.2 SHOULD HAVE — Phase 1 MVP (nice-to-have, có thể defer)

| ID | Feature | Notes |
|---|---|---|
| **EASY-01** | "UI Đơn giản" toggle (font lớn, ít nút) | Theme switch |
| **EASY-02** | Voice guidance prompts | Web Speech API |
| **CHAT-01** | In-app chat with Collector | Realtime, simple text |
| **DISPUTE-01** | Report issue / dispute flow (nhẹ) | Nếu BOM thực sai > 25% |
| **AUTH-04** | Login via Zalo OAuth | Phổ biến VN |
| **GP-03** | Earn extra GP từ first order, weekly streaks | |

### 4.3 COULD HAVE — Phase 2 Pilot (T4-6/2026)

| ID | Feature | Notes |
|---|---|---|
| **ORDER-10** | Tier B (Speed Mode + Auction Mode) | Bulky items |
| **ORDER-11** | Tier H (free pickup, no money) | Hazardous waste |
| **ORDER-12** | Multi-item single order | 1 đơn nhiều loại |
| **ORDER-13** | MoMo payment integration | Backup payment |
| **GP-04** | Streak Bonus (4 weeks consecutive = +500 GP) | Loyalty |
| **GP-05** | Referral program (+200 GP per friend onboarded) | Growth |
| **CGB-01** | "Cháu giúp bà" — đặt đơn hộ người thân (+50 GP) | New user flow |
| **GP-06** | Voucher redemption (Shopee, GrabFood) | Partnerships |
| **GP-07** | Plant tree / Donation options | ESG signaling |
| **IMPACT-01** | "Xanh nhà em" — CO₂ saved visualization | Long-term retention |
| **PROFILE-03** | Tier system: Bronze/Silver/Gold | Loyalty tiering |

### 4.4 WON\'T HAVE (this phase) — defer to Phase 3 or later

- Native iOS/Android apps (web-first cam kết)
- Direct in-app messaging giữa users
- Social sharing impact reports
- Crypto / NFT / blockchain features
- Multi-language (Vietnamese only)
- Operator Dashboard (separate internal tool)
- Collector / Hub / B2B portals (separate apps)

---

## 5. MODULE BREAKDOWN

10 modules logic, mỗi module = 1 epic trong backlog.

### Module 1 — Authentication & Onboarding
Đăng ký, login, profile setup, geo-check, waitlist
**Phase 1 features:** AUTH-01..04, GEO-01, GEO-02

### Module 2 — Order Creation
Snap photo, AI detection, tier classification, schedule, payment selection
**Phase 1 features:** ORDER-01..09

### Module 3 — Real-time Tracking
Match Collector, live location, ETA, notifications
**Phase 1 features:** TRACK-01..03

### Module 4 — At-home Transaction
Weighing, Peek Check, sign-off, payment finalization
**Phase 1 features:** TRANS-01..04

### Module 5 — Wallet & BOM Verification
Real wallet, Hold ví ảo, BOM thực view, phần chênh, transaction history
**Phase 1 features:** WALLET-01..05

### Module 6 — Trust Score
Score calculation, display, tạm ứng % logic
**Phase 1 features:** TRUST-01, TRUST-02

### Module 7 — Green Points & Loyalty
Earn, balance, history, redemption (P2)
**Phase 1 features:** GP-01, GP-02
**Phase 2 features:** GP-03..07, CGB-01, IMPACT-01, PROFILE-03

### Module 8 — Profile & Settings
Personal info, addresses, notifications, preferences, "UI Đơn giản"
**Phase 1 features:** PROFILE-01..02
**Should have:** EASY-01, EASY-02

### Module 9 — Communication
Push, SMS, email, chat with Collector (P2)
**Phase 1 features:** NOTIF-01..03
**Should have:** CHAT-01

### Module 10 — Reviews, Disputes & Help
Rate Collector, dispute flow, FAQ, hotline shortcut
**Phase 1 features:** REVIEW-01, CANCEL-01, CANCEL-02, HELP-01, HELP-02
**Should have:** DISPUTE-01

---

## 6. NON-FUNCTIONAL REQUIREMENTS (NFR)

### 6.1 Performance
- First Contentful Paint < 1.5s trên 3G slow
- Time to Interactive < 3s trên mobile mid-tier (Redmi Note 10)
- AI photo detection response < 5s
- Real-time tracking update mỗi 30s (chấp nhận 60s nếu pin saving)

### 6.2 Browsers/Devices
- Chrome 100+, Safari 15+, Edge 100+, Samsung Internet 18+
- Mobile: iOS 14+ Safari, Android 9+ Chrome
- Desktop: 1280×832 minimum (landing), 1024×768 minimum (app)
- Mobile portrait only cho phần đặt đơn (camera)
- PWA installable (Add to Home Screen) — không phải native app

### 6.3 Accessibility
- WCAG 2.1 Level AA cho UI Đơn giản mode
- Font scale: tối đa 200% mà không break layout
- High contrast mode (dark theme đã có)
- Voice guidance optional cho EASY mode
- Touch targets ≥ 48x48dp (mobile)

### 6.4 Security & Privacy
- HTTPS only, HSTS enabled
- ZaloPay integration: webhook verification + signature
- PII data: encrypted at rest (SĐT, địa chỉ)
- Photos uploaded: signed URLs, expire 30 ngày
- BOM data: read-only after Hub verify (immutable audit trail)
- Tuân thủ NĐ 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân
- 2FA optional cho user có > 1tr GP

### 6.5 Offline & Edge cases
- Form data autosave local (chụp ảnh, draft đơn)
- Offline mode: view order history + wallet (cached)
- Network drop trong khi đặt đơn → resume từ last step
- Image upload: retry 3 lần, fallback to compressed quality

### 6.6 Localization
- Vietnamese only (vi-VN)
- Tiền: VND format dấu chấm (213.700đ)
- Ngày: dd/MM/yyyy (Vietnamese standard)
- Giờ: 24h format
- Number format: dấu chấm thousands separator

### 6.7 Analytics & Tracking
- Event tracking: từng bước trong order flow (funnel analysis)
- Funnel metrics: signup → first order → repeat order
- Trust Score progression tracking
- Drop-off analysis trên các tier explanation modals

---

## 7. OPEN QUESTIONS (CRITICAL — cần confirm trước khi đi tiếp)

Các quyết định này ảnh hưởng đến scope, tech stack, và effort estimation. BA cần stakeholder trả lời trước khi đi xuống user stories.

### Q1 — Authentication strategy
Đăng ký bằng gì là MUST trong MVP?
- **A.** OTP SMS only (cost ~250đ/SMS, đơn giản, ai cũng dùng được)
- **B.** OTP SMS + Zalo OAuth (Zalo phổ biến VN, giảm SMS cost)
- **C.** Email + password (cost 0, nhưng người 50+ không có email)
- **D.** Mix: OTP SMS primary + Zalo OAuth optional

### Q2 — AI Photo Recognition
Build hay buy?
- **A.** Custom model (Cu/Fe/PET classifier) — train từ 2.847 đơn rã xác. Effort cao (~3 tháng + ML team) nhưng moat.
- **B.** Google Vision API + custom rules — fast, cost biến động
- **C.** Hybrid: Google Vision cho generic detection + custom model cho Tier C critical items

### Q3 — "UI Đơn giản" implementation
Build như thế nào?
- **A.** Theme toggle trong app (1 codebase, conditional render) — effort thấp
- **B.** Separate route reloop.vn/easy với UX hoàn toàn riêng — UX tốt hơn cho người 50+, effort cao hơn
- **C.** Same app + voice guidance bật/tắt — middle ground

### Q4 — Wallet & Hold ví ảo
Build internal hay tích hợp ZaloPay escrow?
- **A.** Internal wallet system (DB ghi nhận balance, manual disbursement) — full control, high tech effort
- **B.** ZaloPay Escrow API — depend ZaloPay, fee + dependency risk
- **C.** Internal wallet cho Hold + ZaloPay cho real disbursement (hybrid)

### Q5 — MVP Tier scope
Phase 1 MVP nào trong các option?
- **A.** Tier S + Tier C only (theo doc v5) — focus on innovation Tier C
- **B.** Tier S + Tier B + Tier C (skip H) — more volume
- **C.** Tất cả 4 tiers — high effort

---

## 8. PROPOSED NEXT STEPS

Sau khi stakeholder trả lời 5 câu hỏi trên, BA sẽ deliver tiếp:

| Round | Deliverable | Effort |
|---|---|---|
| **Round 2** | User stories detailed (theo Module) với acceptance criteria | 2-3 days |
| **Round 3** | Information architecture + sitemap | 1-2 days |
| **Round 4** | Wireframes low-fi cho 5 critical flows | 3-5 days |
| **Round 5** | Tech architecture: stack, integrations, data model | 2-3 days |
| **Round 6** | Sprint plan (8 sprints × 2 tuần = 16 tuần MVP) | 1 day |

---

*— END Requirements Analysis v0.1 —*

*BA Note: Tài liệu này focus on B2C web app scope. Các hệ thống khác (Collector App, Hub Portal, B2B Marketplace, Admin Panel) cần BA phân tích riêng.*