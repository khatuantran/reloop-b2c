# Feature Tracker

IDs canonical từ `docs/requirement.md` **v0.3** (125 features, 11 modules). Tick khi xong. Round hiện tại chỉ build 15 critical Phase 1 — phần còn lại để post-MVP.

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

## Post-MVP backlog (requirement v0.3, chưa build)

### Module 2 — Order Creation (Tier B, Tier H, advanced)

- [x] ORDER-06 Tier B Speed Mode (giá sàn 4 vật phẩm + premium tối đa) — `/orders/new/tier-b`
- [x] ORDER-07 Tier B Auction Mode (3 báo giá collector + highlight cao nhất) — `/orders/new/tier-b`
- [x] ORDER-08 Tier H free pickup + env certificate (6 hazardous items + +50 GP + Veolia partner) — `/orders/new/tier-h`
- [ ] ORDER-13 Multi-item single order
- [x] ORDER-14 "Cháu giúp bà" đặt hộ người thân — `/share` (3 member + 3 đơn shared + invite + EASY mode CTA)
- [x] ORDER-16/17/18 Cancel/Reschedule + Trust impact — CancelRescheduleCard inject vào /orders/[id] pending

### Module 3 — Tracking pro-grade (gap plug v0.3)

- [ ] TRACK-04 In-app chat với Collector
- [ ] TRACK-05 Tier H Collector certificate display
- [ ] TRACK-06 Polyline route visualization
- [ ] TRACK-07 Multi-stop cluster view
- [ ] TRACK-08 Geofence 200m arrival notif
- [ ] TRACK-09 Traffic-based ETA recalc
- [ ] TRACK-10 Route replay (trip log)
- [ ] TRACK-11 Hub-leg tracking (Tier C)
- [ ] TRACK-12 Movement indicator (direction + speed)

### Module 4 — Transaction (Tier B/H + receipt)

- [ ] TRANS-05 Tier B mass balance verify ±5%
- [ ] TRANS-06 Tier H confirm pickup (no money)
- [ ] TRANS-08 Receipt PDF download

### Module 5 — Wallet anti-fraud + payment rules (gap plug v0.3)

- [x] WALLET-06 Export transaction CSV (CTA card trong /wallet)
- [ ] WALLET-07 Manual withdraw fallback
- [ ] WALLET-08 Risk Adjustment LME notif
- [x] WALLET-09 Casing Fraud education modal (CasingFraudCard component)
- [x] WALLET-10 Hub Spot Check notification (SpotCheckCard với 4 record gần nhất + pass rate 94%)
- [x] WALLET-11 Chain of Custody timeline (ChainOfCustody component 5-stage trong /orders/[id] Tier C)
- [x] WALLET-12 Hub Tier transparency badge (HubTierBadge ISO 14001 + capacity + spot check stats)
- [x] WALLET-13 Hold expire auto-release 72h (progress bar 64h/72h trong /wallet · auto-release + bonus 5%)
- [x] WALLET-14 Refund flow khi dispute thắng (timeline + +28k300 hoàn + 100 GP đền bù trong /disputes/[id])
- [x] WALLET-15 Tax invoice download (CTA "Tải hoá đơn GTGT 04/2026" trong /wallet)
- [x] WALLET-16 Payment fee transparency (3 card minh bạch trong /wallet: ZaloPay 0đ + cash incentive + GTGT)
- [x] WALLET-17 Cash incentive 2.000đ disclosure (card riêng trong /wallet payment rules)

### Module 6 — Trust Score (advanced)

- [x] TRUST-03 Trust Score history log (sparkline 90 ngày + 5 event log với delta +/- trong /profile)
- [x] TRUST-04 Trust Score impact preview (3 card grid trong /profile: cancel impact preview với delta điểm/% tạm ứng/streak)
- [x] TRUST-05 AI Anti-fraud soft-flag UX (card cảnh báo nhẹ trong /profile: cân lệch + pattern giờ)
- [x] TRUST-06 Milestone celebration animation (gradient banner với confetti dot + share/perks CTA trong /profile)
- [x] TRUST-07 Trust Score recovery path (3 step recovery card trong /profile: +2/đơn S, +1/review, +3/BOM thực)

### Module 7 — Green Points & Loyalty (gap plug v0.3) — `/rewards`

- [x] GP-01..11 (basic earn/history/streak/referral/voucher/cash/tree/donation/ZaloPay incentive)
- [x] GP-12 Earning rate per tier (Tier C earn sau Hub verify)
- [x] GP-13 GP expiration 12 tháng
- [x] GP-14 Rounding rule (round down)
- [x] GP-15 Voucher partner fee transparency
- [x] GP-16 Streak break recovery (1 grace/quý)
- [x] LOYALTY-01..02 Bronze/Silver/Gold + benefits
- [x] LOYALTY-03 Tier thresholds (0-1k/1-10k/10k+)
- [x] LOYALTY-04 Upgrade animation + perks unlock (progress bar)
- [x] LOYALTY-05 No-downgrade rule

### Module 8-11 (Auth, Profile, Notif, Reviews, Impact)

- [x] AUTH-01..08 (OTP/Zalo OAuth/2FA/onboarding tour) — `/login`, `/signup`, `/onboarding`
- [x] GEO-01..03 (geo-check/waitlist/multi-address) — `/onboarding` waitlist + `/profile/edit` multi-address
- [x] PROFILE-01..06 (info/notif prefs/privacy NĐ 13/payment methods) — `/profile/edit` 4 section + danger zone
- [x] EASY-01..03 (UI Đơn giản, voice guidance, default cash) — `/easy` mode page với 3 big button + voice CTA + 3-step
- [x] NOTIF-01..06 (push/SMS/email/inbox/hotline/payment outage) — `/notifications`
- [x] CHAT-01 In-app chat — `/orders/[id]/chat` (8 message thread + quick reply + system marker + report flag + sidebar)
- [x] REVIEW-01..02 (rate Collector/Hub) — ReviewSection component inject vào /orders/[id] completed
- [x] DISPUTE-01..03 (BOM dispute, Collector behavior, outcome view) — `/disputes`, `/disputes/new`, `/disputes/[id]`
- [x] HELP-01..04 (FAQ/hotline/tier explainer/support ticket) — `/help`
- [x] IMPACT-01..05 (CO₂ dashboard, tree animation, material breakdown, share, comparison) — `/impact`

## Pages built

- [x] `/` Dashboard (Linh's home) — greeting, balance, quick action, 3 recent orders
- [x] `/orders/new` Order creation 6-step flow
- [x] `/orders/[id]/track` Real-time tracking với fake map
- [x] `/orders/[id]/transaction` At-home weighing 5-substep
- [x] `/orders/[id]` Order detail (Tier S done / Tier C done with BOM / Tier C pending)
- [x] `/orders` Order history list + 4-chip filter
- [x] `/wallet` Balance + Hold + BOM history + Transaction history
- [x] `/profile` Trust Score gauge + progression milestones + read-only profile + stats
- [x] `/impact` Xanh nhà em — CO₂ dashboard 12 tháng + breakdown + comparisons + milestones + share + Gaia tree
- [x] `/notifications` Inbox 8 thông báo · 4 channel pref · 4 filter tab · push/SMS/email/hotline
- [x] `/help` FAQ 8 câu + Tier explainer 4-card + 4 support channel + ticket CTA
- [x] `/rewards` GP balance + 3 loyalty tier + earn rules per Tier + 8 voucher catalog + streak + history + referral
- [x] `/disputes` Dispute list 3 case (WON/PROCESSING/LOST) + 4 stat card + win rate
- [x] `/disputes/new` Form 4-step (chọn đơn → loại → mô tả → evidence upload) + sidebar quy trình
- [x] `/disputes/[id]` Detail outcome view (3 case mock) + timeline 5-step + evidence list + re-appeal/bổ sung CTA
- [x] `/orders/[id]/chat` In-app chat collector (8 message + quick reply + system marker + report)
- [x] `/login` 2-col auth với phone + Zalo OAuth + sinh trắc + trust marks NĐ 13/2023
- [x] `/signup` 2-col form với 4 benefit + name/phone/district/referral + consent
- [x] `/onboarding` 4-screen tour với progress dot + setup checklist 5 mục + waitlist Q.1/Thủ Đức/Q.3
- [x] `/orders/new/tier-b` Speed (4 floor + premium) + Auction (3 báo giá) + mass-balance ±5%
- [x] `/orders/new/tier-h` 6 hazardous item + quantity counter + 4 benefit + B2B contract CTA
- [x] `/profile/edit` Personal info + multi-address + payment methods + notif prefs table + privacy NĐ 13 + danger zone
- [x] `/share` Cháu giúp bà 3 member card + invite slot + 3 shared order + 4-step process
- [x] `/easy` Chế độ Đơn giản UI font xl + 3 big button + 3-step explainer + 3 trust mark + hotline CTA

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

- **2026-05-10 (Round 13 — Trợ lý ảo AI hỗ trợ)** — 1 page mới + 1 illustration:
  - **`/help/chat`** — Trợ lý ảo "RE-LOOP AI" (HELP module, prototype — hội thoại dựng sẵn): hero + `SupportBot` illustration + chip "Phản hồi ~tức thì"; chat panel `h-[680px]` (header bot avatar lime + status + nút "Gặp CSKH thật"/FAQ; bubble hội thoại mock 4 chủ đề: BOM thực / đơn RL-…1240 đang ở đâu / Hold ví ảo / escalate CSKH — bot bubble có action chip; typing indicator; quick-reply 6 chủ đề + chip "Gặp CSKH thật"; composer + disclaimer "trợ lý ảo có thể nhầm"); sidebar 4 card (RE-LOOP AI làm được gì / FAQ shortcuts / Đơn gần đây từ mock / Cần người thật → hotline + tạo ticket).
  - **1 illustration mới**: `SupportBot.astro` (robot claymorphism — đầu mint screen-face mắt+nụ cười, ăng-ten lá tái chế, thân ôm bong bóng chat "AI", coin lá, badge "AI · 24/7", sparkles).
  - **`/help`** — đổi search bar hero thành link "Hỏi RE-LOOP AI" + nút "Mở trợ lý ảo"; thêm chip "Hỏi RE-LOOP AI →" cạnh tiêu đề FAQ; section CTA cuối: 2-card "Chat với RE-LOOP AI" (24/7) + "Gửi ticket cho CSKH" (4h).
  - **Figma**: thêm `RULE(/^help\/chat$/, 'Misc', 'Trợ giúp · AI Chat Bot')` → 86 → **87 frame**; chỉ re-import 2 frame (`help.html` + `help/chat.html`), không đụng BaseLayout/trang khác.
- **2026-05-10 (Round 12 — AUTH + Tier B/H + Cancel + Profile edit + Cháu giúp bà + EASY)** — 8 page mới + 1 component + 22 features tick:
  - **1 illustration mới**: `AuthPhone` (phone với shield + OTP cells + Zalo login button + fingerprint floating).
  - **`/login`** — 2-col layout: form trái (phone +84 verified + Zalo OAuth + sinh trắc + trust marks NĐ 13/2023 + Triton 2FA), hero phải (AuthPhone illustration + 12.4K member badge + pilot 3 quận badge).
  - **`/signup`** — Form 4-benefit grid (+100 GP / Bronze / Xanh nhà em / 1 cây Gaia) + name/phone/district picker (Q.7/BT/Q.4) + referral code field +100 GP + consent NĐ 13/2023 + sidebar 3 stat (12.4K hộ / 580T CO₂ / 94% accuracy).
  - **`/onboarding`** — Progress dot 4-step + active screen 2 (CollectorScene) + 4-step preview row (RecycleScene/CollectorScene/HubWarehouse/GreenPointsBadge) + setup checklist 5 mục + waitlist quận khác (Q.1 847/Thủ Đức 512/Q.3 298 đăng ký).
  - **`/orders/new/tier-b`** — Tab toggle Speed/Auction; Speed mode 4 floor item (tủ lạnh/TV/sofa/máy giặt) với floor + premium price + photo upload + brand/year input; Auction preview 3 báo giá với highlight cao nhất; sidebar Speed quote 1.2M + mass-balance ±5%.
  - **`/orders/new/tier-h`** — 6 hazardous item card (pin AA/lithium/bóng đèn/dầu nhớt/thuốc/sơn) + quantity stepper +/− + ảnh đóng gói 2 ảnh + warning đóng gói riêng + sidebar 4 benefit Tier H (0đ phí, ESG cert, Veolia partner, +50 GP) + B2B contract CTA.
  - **`/profile/edit`** — 4 section (personal info + multi-address với 2 saved + payment methods ZaloPay/cash + notif prefs table 4 nhóm × 3 channel) + sidebar privacy NĐ 13/2023 (export JSON, audit log, partners) + danger zone (logout/delete account 7-day grace).
  - **`/share`** — Cháu giúp bà 3 member card (Bà Năm 68 active / Minh 22 active / Bố 70 invited) + invite empty slot + 3 shared order recent + sidebar EASY mode CTA + 4-step how-it-works.
  - **`/easy`** — Chế độ Đơn giản font xl/large (h1 72px, body 22px) + 3 big button (BÁN RÁC lime / XEM ĐƠN butter / GỌI NGAY blush) + 3-step explainer cards full-illustration + 3 trust mark + voice guidance toggle + giant hotline CTA 1900-RELOOP.
  - **`CancelRescheduleCard.astro`** component injected vào `/orders/[id]` pending — 2-card grid (Reschedule khuyến nghị với slot today/tomorrow + Cancel với 4 lý do radio + Trust impact preview −5/streak reset/% tạm ứng).
  - **`/orders/new`** thêm 4-card tier picker (S đang mở / B / C / H) + link tới /tier-b và /tier-h.
  - **`/profile`** thêm 2-card row (Edit hồ sơ + EASY mode toggle).
  - **Footer +3 link**: /share, /onboarding, /easy.
  - **Build**: 67 page (+8 từ 59) — 1.61s clean. **Tổng tick 89/125 features (71%)**, từ 67/125.
  - **Backlog Round 13**: TRACK pro-grade (TRACK-04..12 polyline/cluster/geofence/replay/Hub-leg), TRANS-05/06/08 (Tier B mass balance verify, Tier H confirm pickup, receipt PDF), WALLET-07/08 (manual withdraw + risk LME), TRUST advanced (chỉ còn vài), ORDER-13 multi-item, NOTIF/HELP polish.
- **2026-05-10 (Round 11 — Anti-fraud + Dispute + Review + Trust advanced)** — 4 page mới + 5 component + 25 features tick xong:
  - **2 illustration mới**: `AntiFraudShield` (shield + eye of vigilance + chain links + verified badge), `DisputeScene` (cân công lý 2 đĩa BOM Library vs BOM thực + búa + question marks).
  - **5 component nghiệp vụ mới** trong `src/components/order/`:
    - `ChainOfCustody.astro` — timeline 5-stage (PICKUP → TRANSIT → HUB_RECEIVE → DISASSEMBLY → VERIFIED) với evidence count + hash blockchain short
    - `HubTierBadge.astro` — variants inline/card với ISO 14001 + capacity + staff + spot-check pass rate
    - `SpotCheckCard.astro` — list 4 record gần nhất với status PASSED/MINOR/MAJOR + clay BG
    - `CasingFraudCard.astro` — variants inline/modal với 4 hình thức gian lận + 4 cơ chế bảo vệ + lần đầu Tier C badge
    - `ReviewSection.astro` — 5★ rating Collector + Hub + 6 tag (Đúng giờ/Cân chuẩn/Lịch sự…) + free text + alreadyReviewed mode
  - **`/disputes`** index — Hero DisputeScene + 4 stat card (won/processing/win rate/mẹo) + 3 dispute mock (WON/PROCESSING/LOST) với refund display.
  - **`/disputes/new`** — Form 4-step (radio chọn đơn + radio loại tranh chấp + textarea mô tả + 4 ảnh evidence upload) + sidebar cam kết minh bạch + quy trình 4 bước + hotline.
  - **`/disputes/[id]`** — 3 case detail (D-2026-0042 WON, D-2026-0038 PROCESSING, D-2026-0030 LOST) với timeline xử lý audit team + evidence list (ảnh/video/audio download) + re-appeal/bổ sung evidence CTA conditional.
  - **`/orders/[id]/chat`** — Chat panel với 8 message mock (collector/me/system 3 type), quick reply chip, attach + send composer, sidebar order context + collector location + report behavior.
  - **`/orders/[id]` injection**: ChainOfCustody (Tier C), HubTierBadge (Tier C), ReviewSection (completed), Dispute CTA (48h still open).
  - **`/wallet` injection**: Hold expire progress bar 64h/72h + auto-release bonus 5%, CasingFraudCard inline + AntiFraudShield 94% mass-balance card, SpotCheckCard 50 lần check, payment rules transparency 3-card (ZaloPay 0đ/cash incentive 2k/GTGT auto), CSV export + invoice download CTA.
  - **`/profile` extension**: Trust Score sparkline SVG 90 ngày + 5 event log với delta, 3-card grid (Recovery path / AI soft-flag 2 cảnh báo / Cancel impact preview), milestone celebration banner gradient với share + perks CTA.
  - **Footer +1 link**: /disputes.html.
  - **Tracking page**: 2 CTA card (Chat + Call) ở dưới map.
  - **Build**: 59 page (+11 từ 48) — 1.47s clean. Tổng đã tick 67/125 features (54%).
  - **Backlog Round 12**: AUTH/GEO/PROFILE editable + EASY mode (Bà Năm UI Đơn giản + voice guidance) + ORDER advanced (Tier B Speed/Auction + Tier H + multi-item + cancel/reschedule) + TRACK pro-grade (polyline/cluster/geofence/replay).
- **2026-05-10 (Round 10 — Backlog cluster A+B+C)** — 4 page mới + 27 features tick xong:
  - **`/impact`** (IMPACT-01..05) — Hero EcoTree + 4 stat card (CO₂/nhựa/kim loại/cây) + bar chart 12 tháng (động hover) + breakdown 4 vật liệu với progress bar + 4 comparison "dễ hình dung" (km xe máy/chai PET/cây/lít nước) + milestone 5-step (10/25/50/100/250 kg) + 2 CTA card (Gaia trồng cây thật + social share Facebook/Zalo/PNG).
  - **`/notifications`** (NOTIF-01..06) — Hero OtpPhone + counter unread + 4 channel pref card (Push/SMS/Email/Hotline) + 4 filter tab (Tất cả/Đơn/Ví&GP/Hệ thống) + 8 thông báo mock (order/wallet/gp/eta/trust/system/payout) với clay icon BG + unread dot + CTA inline.
  - **`/help`** (HELP-01..04) — Hero HubWarehouse + search bar ⌘K + 4 support channel (Hotline/Email/Zalo/Hub Q.7) + 4 Tier explainer card với SVG illustration full + 8 FAQ details/summary collapsible (BOM/Trust/Hold expire/GP/Tier H/dispute) + ticket submit CTA.
  - **`/rewards`** (GP-01..16, LOYALTY-01..05) — Hero GreenPointsBadge + balance 4.250 GP với expiring + earn this month + 3 loyalty tier (Bronze/Silver current/Gold) với perk list + progress bar tới Gold + 4 earn rule per Tier (1.0×/1.2×/1.5×/50 GP fixed) + footer rule (rounding/streak grace/multiplier) + 8 voucher card (Shopee/Grab/Highlands/CGV/Gaia hot/Greenpeace/ZaloPay cash-out/Lazada) + streak 7-day với grace pass + earn history 5 dòng + referral CTA với link copy.
  - **TopNav** thêm 3 quick icon (rewards/notifications với unread dot/help) trước balance pill.
  - **Footer** cập nhật Quick links trỏ đúng /help, /notifications, /rewards, /impact, /profile.
  - **Build**: 48 page (+4 từ 44), tổng 1.41s clean.
  - **Backlog còn**: WALLET-09..17 anti-fraud + payment rules, TRUST-03..07, REVIEW, DISPUTE, CHAT, AUTH, GEO, PROFILE, EASY, ORDER advanced (Tier B/H/multi-item/cancel), TRACK pro-grade. Round 11 plan: anti-fraud Tier C (modal Casing Fraud + Spot Check timeline + Chain of Custody 4-stage trong wallet/order detail) + dispute/review.
- **2026-05-10 (Round 9 — Visual-first Rule)** — Bổ sung quy tắc bắt buộc trang nhiều hình + icon, không text-only:
  - **CLAUDE.md** thêm section "Visual-first rule" trong "Quy tắc bắt buộc": density target per page, 8 visual elements toolkit, "magazine cover not Word doc" pattern, 3-test review (density count + editorial feel + text break), reference quality (Apple/Notion/Stripe vs Wikipedia anti-pattern).
  - **docs/DESIGN_SYSTEM.md §9** thêm "Visual-first Rule" canonical với 6 sub-section: 9.1 density target table (hero/section/card/empty/form/stat/row), 9.2 toolkit, 9.3 pattern + 3-test, 9.4 reference quality, 9.5 patterns mẫu đã apply (9 pages), 9.6 anti-patterns TRÁNH.
  - Mọi page mới từ giờ phải đáp ứng: ≥3 visual elements/section, hero không text-only, card có icon/illustration leading, empty state SVG đặc sắc + chip CTA, form input có leading icon, stat group có Material icon clay box.
- **2026-05-10 (Round 8 — Illustration Rule)** — Document quy tắc bắt buộc dùng SVG đặc sắc tự vẽ thay stock photo:
  - Thêm 6 SVG illustrations đặc sắc mới: `RecycleScene` (hero home), `EcoTree` (impact), `GreenPointsBadge` (trust GP), `TierSScene` / `TierBScene` / `TierCScene` / `TierHScene` (4 tier explainer cards), `WalletScene` (wallet hero), `PersonaLinh` (profile avatar) — tổng 9 illustrations mới.
  - Mỗi SVG đáp ứng 8 tiêu chuẩn: multi-layer, gradient richness, depth cues, brand palette, sparkles, context objects, brand markers, scene complete.
  - Document rule trong `CLAUDE.md` (section "Illustration rule") + `docs/DESIGN_SYSTEM.md` §8 (8.1 tiêu chuẩn, 8.2 library, 8.3 cách tạo mới, 8.4 stock photo cho phép, 8.5 backlog).
  - Stock photo chỉ giữ 3 trường hợp: sample product (order flow), BOM before/after (Chain of Custody), map background (Google Maps).
  - Backlog illustration tiếp theo: `PersonaBaNam`, `PersonaMinh`, `HubWarehouse`, `CollectorScene`, `DisputeScene`, `MilestoneCelebration`, `VoucherShopee`, `TreePlantingGaia`, `AntiFraudShield`.
- **2026-05-10 (Round 7 — Design v2 rollout)** — Light + Claymorphism + Home enrichment + Footer:
  - Tokens: `tailwind.config.ts` rewrite — sage `#E5EDDD` base, cream surface `#D6E3CC`, lime DNA giữ, tier softened, 6 clay pastels, 4 cấp clay shadow, Material Symbols Rounded, Roboto font cho map.
  - 6 SVG illustrations clay-style: RecycleBin, CoinStack, CollectorTruck, GrowingTree, Package, OtpPhone (`src/components/illustrations/`).
  - Footer 4-section (Contact 1900-RELOOP, Certifications ISO 14001/Big4/NĐ 08/VRA, Quick links 4 Tier, Legal NĐ 13/2023 + Anti-fraud + BOM disclosure) — auto include trong BaseLayout.
  - Home redesign: Hero 3D + Tier explainer 4-card S/B/C/H + Trust progression gauge + "Xanh nhà em" impact preview với 4 stat + Recent orders.
  - TrackingMap upgrade: real Google Maps screenshot bg (`public/images/map-bg.png`) + smooth bezier polyline Google blue + 3 HTML pins (Hub/Collector/User) + zoom controls + cluster info.
  - All UI primitives clay restyle: Button (5 variants), Card (8 variants), StatusChip border-2, TierBadge solid/soft, Pill, EmptyState.
  - Business components restyle: OrderCreate 6-step + Tier C Hold modal clay-butter, AtHomeTransaction 6 sub-step, BOMRevealCard 3 trạng thái lime/mint/butter, TrustScoreGauge 3-zone red/butter/lime, TransactionHistory clay filter chips, OrderCard với clay icon BG.
  - 21 sub-step pages bulk-patched: pt-32→pt-[100px], material-symbols-outlined→rounded, hover:text-success→hover:text-tier-s, eyebrow tracking-wider font-semibold.
  - Build: 28 HTML pages dist/ thành công, 5.5MB.
- **2026-05-09 (Round 6 — Requirement v0.3)** — Plug 3 critical gap trong requirement.md (docs only, no code change):
  - Tier C anti-fraud user-facing: WALLET-09/10/11/12 + TRUST-05 (Casing Fraud modal, Hub Spot Check notif, Chain of Custody timeline 4-stage, Hub Tier badge, AI soft-flag UX)
  - Driver route tracking pro-grade: TRACK-06..12 (polyline, multi-stop cluster, geofence, traffic ETA, route replay, Hub-leg, movement indicator)
  - Payment & GP precise rules: WALLET-13..17 + GP-12..16 + LOYALTY-03..05 + TRUST-06/07 (Hold expire 72h, refund flow, tax invoice, fee transparency, cash incentive 2k disclosure, GP earning per tier, expiration 12 tháng, rounding down, voucher fee, streak grace, loyalty thresholds + no-downgrade)
  - Bổ sung 2 journey: K (route replay), L (AI soft-flag); 5 entity (RouteTrace, SpotCheck, CustodyEvent, FraudFlag, TaxInvoice)
  - Total: 96 → 125 features. PRD.md update reference v0.1 → v0.3.
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
