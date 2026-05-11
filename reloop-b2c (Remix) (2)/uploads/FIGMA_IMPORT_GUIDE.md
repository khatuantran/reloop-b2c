# Figma Import Guide — RE-LOOP B2C Prototype

Hướng dẫn import 87 screens vào **1 Figma Page** bằng plugin `html.to.design`.

> Mới: thêm trang **Trợ lý ảo `/help/chat`** (chat AI bot) — vào từ trang Trợ giúp (`/help`: nút "Mở trợ lý ảo" / search bar / chip "Hỏi RE-LOOP AI"). Chỉ cần re-import 2 frame: `help.html` (đổi CTA cuối + search bar) + `help/chat.html` (mới); các frame khác không đổi. Wiring: `[Misc] · Trợ giúp` → `[Misc] · Trợ giúp · AI Chat Bot`; trong frame chat: nút "Chuyển CSKH thật" / "Tạo ticket" → `[Misc] · Trợ giúp`.

> Bảng danh sách + đoạn snippet đổi tên ở cuối file được **auto-generate** bằng `node scripts/figma-frames.mjs`. Thêm page mới → `npm run build:figma` rồi chạy lại script (nếu page chưa có rule, script báo lỗi — thêm 1 dòng vào `ROUTE_RULES`).

## Chuẩn bị

1. `npm run build:figma` → đảm bảo `dist-figma/` có 107 file (`find dist-figma -name "*.html" | wc -l` = 107). Cần **Google Chrome** cài sẵn (để rasterize illustration). Mỗi file **standalone ~4-6MB** — inline CSS, ảnh base64, text font base64; **Material Symbols icon → inline `<svg>` màu hex đã resolve** (không phụ thuộc font, không bị đen); **illustration SVG phức tạp → PNG `<img>`** (plugin rasterize 100% chính xác, không vỡ/lệch). Bước này cũng inject lớp CSS "figma-optimize" (tắt `backdrop-blur`, làm phẳng `grad-hero`, bỏ `position: sticky`).
2. Figma desktop → tạo file mới `RE-LOOP B2C Prototype` → đổi tên Page mặc định thành `Prototype`.
3. Cài plugin `html.to.design` (Figma Community).
4. Workflow mỗi file: mở `dist-figma/<route>.html` trong editor → Cmd+A → Cmd+C → Figma plugin "Import from HTML" tab "Paste code" → paste → Import.

### Kỳ vọng độ chính xác khi import

`html.to.design` cho ~85–90% fidelity. Những điểm **bình thường, không phải lỗi**:
- **Footer xanh đậm** (`bg-forest` navy) — thiết kế cố ý, mọi page đều vậy.
- Material icons giờ là inline `<svg>` (màu hex đã resolve) nên hiện đúng — không còn lỗi đen/ligature. Nếu icon nào vẫn không hiện → check log `npm run build:figma` xem có dòng `[icon] không lấy được ...`.
- Illustration giờ là PNG `<img>` nên không còn vỡ/lệch. Cần Chrome lúc build — nếu thiếu Chrome thì log báo "bỏ qua rasterize" và illustration giữ inline SVG (có thể vỡ).
- Footer grid 4 cột: plugin có thể render ở viewport hẹp rồi stack lại → trong Figma chọn frame footer → đổi layout sang Horizontal.
- Shadow clay (`shadow-clay`) có thể nhạt hơn — không ảnh hưởng layout.

Nếu 1 page vỡ nặng (hiếm): thử import từ `dist/<route>.html` qua tab "Import from URL" với `npm run preview` đang chạy.

## Naming convention — `[Module] · <step> <mô tả>`

KHÔNG dùng số thứ tự toàn cục (thêm screen không phải đánh lại số). Format:
- **`[Module]`** — tag cố định: `Auth · Home · Wallet · Profile · Orders · Tier S · Tier B Speed · Tier B Auction · Tier C · Tier H · Detail · Disputes · Misc`. Layers panel sort alphabetical theo `[Module]` → tự group.
- **`<step>`** — chỉ với màn trong flow tuần tự: `B2 B3 B4 …` (bước đặt đơn — `B1` = màn "Tier X giới thiệu"/chụp ảnh ở module Orders), `GD1 GD2 …` (giao dịch tại nhà, đánh số theo đúng thứ tự thực hiện), `Done …` (màn cuối). Bỏ qua với module không tuần tự. Chèn screen giữa flow → dùng `B3.5` / `B3b` (chỉ ảnh hưởng module đó, không đụng module khác).
- **`<mô tả>`** — tiếng Việt ngắn.

Ví dụ: `[Auth] · Đăng ký · OTP` · `[Tier B Speed] · B3 Địa chỉ + Slot` · `[Detail] · RL-001234 (Tier S) · 2 Theo dõi`.

## Layout trên canvas (1 Page)

Sắp xếp **hàng = module**, trong hàng screens trải trái→phải theo journey. Gợi ý: frame rộng 1280px, cách 80px ngang; hàng cách ~400px dọc (frame cao ~3000px → hàng mới bắt đầu `y += 3400`). Hoặc đơn giản: import xong kéo thả grid 6 cột — Figma có minimap.

## Đổi tên hàng loạt trong Figma

Đỡ phải sửa tay 87 frame. **Điều kiện**: import ĐỦ 86 file theo ĐÚNG thứ tự bảng dưới, vào 1 Page trống.

1. `node scripts/figma-frames.mjs --snippet` → copy đoạn JS in ra.
2. Trong Figma: Plugins → Development → "Open console" (hoặc đưa đoạn JS cho Claude chạy qua MCP `use_figma`) → paste → Enter. Frame được đổi tên theo thứ tự.
   - Nếu thứ tự import bị xáo (hiếm): import từng module → select các frame mới → trong snippet đổi `const ALL = true` thành `false` → chạy (đổi tên theo selection).

## Thứ tự import + tên frame

Chạy `node scripts/figma-frames.mjs` để in bảng dưới (auto-generated). Import theo thứ tự trên → dưới.

<!-- BEGIN AUTO-GENERATED (node scripts/figma-frames.mjs) -->

Tổng **87 frame** · import theo thứ tự dưới (trên → dưới).

### Auth

| Frame name | File import |
|---|---|
| `[Auth] · Onboarding` | `dist-figma/onboarding.html` |
| `[Auth] · Đăng nhập` | `dist-figma/login.html` |
| `[Auth] · Đăng nhập · OTP` | `dist-figma/login/otp.html` |
| `[Auth] · Đăng ký` | `dist-figma/signup.html` |
| `[Auth] · Đăng ký · Thông tin` | `dist-figma/signup/info.html` |
| `[Auth] · Đăng ký · Địa chỉ` | `dist-figma/signup/address.html` |
| `[Auth] · Đăng ký · OTP` | `dist-figma/signup/otp.html` |
| `[Auth] · Đăng ký · Hoàn tất` | `dist-figma/signup/done.html` |

### Home

| Frame name | File import |
|---|---|
| `[Home] · Dashboard` | `dist-figma/index.html` |

### Wallet

| Frame name | File import |
|---|---|
| `[Wallet] · Ví` | `dist-figma/wallet.html` |
| `[Wallet] · Chính sách thanh toán` | `dist-figma/wallet/policy.html` |

### Profile

| Frame name | File import |
|---|---|
| `[Profile] · Hồ sơ` | `dist-figma/profile.html` |
| `[Profile] · Sửa hồ sơ` | `dist-figma/profile/edit.html` |

### Orders

| Frame name | File import |
|---|---|
| `[Orders] · Danh sách đơn` | `dist-figma/orders.html` |
| `[Orders] · Chọn Tier` | `dist-figma/orders/new.html` |
| `[Orders] · Tier S giới thiệu` | `dist-figma/orders/new/tier-s.html` |
| `[Orders] · Tier B giới thiệu` | `dist-figma/orders/new/tier-b.html` |
| `[Orders] · Tier C giới thiệu` | `dist-figma/orders/new/tier-c.html` |
| `[Orders] · Tier H giới thiệu` | `dist-figma/orders/new/tier-h.html` |

### Tier S

| Frame name | File import |
|---|---|
| `[Tier S] · B2 AI nhận diện` | `dist-figma/orders/new/step-2.html` |
| `[Tier S] · B3 Báo giá` | `dist-figma/orders/new/step-3.html` |
| `[Tier S] · B4 Địa chỉ` | `dist-figma/orders/new/step-4.html` |
| `[Tier S] · B5 Lịch hẹn` | `dist-figma/orders/new/step-5.html` |
| `[Tier S] · B6 Xác nhận` | `dist-figma/orders/new/step-6.html` |
| `[Tier S] · Done Đặt đơn thành công` | `dist-figma/orders/new/success.html` |
| `[Tier S] · GD1 Cân tại nhà` | `dist-figma/orders/transaction-flow/tier-s/weighing.html` |
| `[Tier S] · GD2 Hiện khối lượng` | `dist-figma/orders/transaction-flow/tier-s/weight-reveal.html` |
| `[Tier S] · GD3 Báo giá + Thanh toán` | `dist-figma/orders/transaction-flow/tier-s/price.html` |
| `[Tier S] · GD4 OTP xác nhận` | `dist-figma/orders/transaction-flow/tier-s/otp.html` |
| `[Tier S] · GD5 Hoàn tất` | `dist-figma/orders/transaction-flow/tier-s/done.html` |

### Tier B Speed

| Frame name | File import |
|---|---|
| `[Tier B Speed] · B2 Mode + Quote` | `dist-figma/orders/new/tier-b/quote.html` |
| `[Tier B Speed] · B3 Địa chỉ + Slot` | `dist-figma/orders/new/tier-b/address.html` |
| `[Tier B Speed] · B4 Xác nhận` | `dist-figma/orders/new/tier-b/confirm.html` |
| `[Tier B Speed] · Done Đặt đơn thành công` | `dist-figma/orders/new/tier-b/success.html` |

### Tier B Auction

| Frame name | File import |
|---|---|
| `[Tier B Auction] · B3 Chờ báo giá` | `dist-figma/orders/new/tier-b/auction.html` |
| `[Tier B Auction] · B3 Live bidding` | `dist-figma/orders/new/tier-b/auction-live.html` |
| `[Tier B Auction] · B4 Địa chỉ + Slot` | `dist-figma/orders/new/tier-b/auction-address.html` |
| `[Tier B Auction] · B5 Xác nhận` | `dist-figma/orders/new/tier-b/auction-confirm.html` |
| `[Tier B Auction] · Done Đấu giá thắng` | `dist-figma/orders/new/tier-b/auction-success.html` |

### Tier C

| Frame name | File import |
|---|---|
| `[Tier C] · B2 AI nhận diện` | `dist-figma/orders/new/tier-c/step-2.html` |
| `[Tier C] · B3 Dải BOM` | `dist-figma/orders/new/tier-c/step-3.html` |
| `[Tier C] · B4 Địa chỉ` | `dist-figma/orders/new/tier-c/step-4.html` |
| `[Tier C] · B5 Lịch hẹn` | `dist-figma/orders/new/tier-c/step-5.html` |
| `[Tier C] · B6 Xác nhận` | `dist-figma/orders/new/tier-c/step-6.html` |
| `[Tier C] · Done Đặt đơn thành công` | `dist-figma/orders/new/tier-c/success.html` |
| `[Tier C] · GD1 Cân tại nhà` | `dist-figma/orders/transaction-flow/tier-c/weighing.html` |
| `[Tier C] · GD2 Hiện khối lượng` | `dist-figma/orders/transaction-flow/tier-c/weight-reveal.html` |
| `[Tier C] · GD3 Peek-check` | `dist-figma/orders/transaction-flow/tier-c/peek-check.html` |
| `[Tier C] · GD4 HOLD ví ảo` | `dist-figma/orders/transaction-flow/tier-c/hold.html` |
| `[Tier C] · GD5 OTP bàn giao` | `dist-figma/orders/transaction-flow/tier-c/otp.html` |
| `[Tier C] · GD6 Hoàn tất` | `dist-figma/orders/transaction-flow/tier-c/done.html` |

### Tier H

| Frame name | File import |
|---|---|
| `[Tier H] · B2 Loại + Số lượng` | `dist-figma/orders/new/tier-h/items.html` |
| `[Tier H] · B3 Xác nhận thu gom` | `dist-figma/orders/new/tier-h/confirm.html` |
| `[Tier H] · Done Đặt thu gom thành công` | `dist-figma/orders/new/tier-h/success.html` |

### Detail

| Frame name | File import |
|---|---|
| `[Detail] · RL-001234 (Tier S) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001234.html` |
| `[Detail] · RL-001234 (Tier S) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001234/track.html` |
| `[Detail] · RL-001234 (Tier S) · 3 Chat` | `dist-figma/orders/RL-2026-001234/chat.html` |
| `[Detail] · RL-001241 (Tier B Speed) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001241.html` |
| `[Detail] · RL-001241 (Tier B Speed) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001241/track.html` |
| `[Detail] · RL-001241 (Tier B Speed) · 3 Chat` | `dist-figma/orders/RL-2026-001241/chat.html` |
| `[Detail] · RL-001242 (Tier B Auction) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001242.html` |
| `[Detail] · RL-001242 (Tier B Auction) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001242/track.html` |
| `[Detail] · RL-001242 (Tier B Auction) · 3 Chat` | `dist-figma/orders/RL-2026-001242/chat.html` |
| `[Detail] · RL-001243 (Tier B đang giao) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001243.html` |
| `[Detail] · RL-001243 (Tier B đang giao) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001243/track.html` |
| `[Detail] · RL-001243 (Tier B đang giao) · 3 Chat` | `dist-figma/orders/RL-2026-001243/chat.html` |
| `[Detail] · RL-001236 (Tier C done) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001236.html` |
| `[Detail] · RL-001236 (Tier C done) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001236/track.html` |
| `[Detail] · RL-001236 (Tier C done) · 3 Chat` | `dist-figma/orders/RL-2026-001236/chat.html` |
| `[Detail] · RL-001240 (Tier C pending) · 1 Chi tiết` | `dist-figma/orders/RL-2026-001240.html` |
| `[Detail] · RL-001240 (Tier C pending) · 2 Theo dõi` | `dist-figma/orders/RL-2026-001240/track.html` |
| `[Detail] · RL-001240 (Tier C pending) · 3 Chat` | `dist-figma/orders/RL-2026-001240/chat.html` |
| `[Detail] · RL-H-000086 (Tier H done) · 1 Chi tiết` | `dist-figma/orders/RL-H-2026-000086.html` |
| `[Detail] · RL-H-000086 (Tier H done) · 2 Theo dõi` | `dist-figma/orders/RL-H-2026-000086/track.html` |
| `[Detail] · RL-H-000086 (Tier H done) · 3 Chat` | `dist-figma/orders/RL-H-2026-000086/chat.html` |
| `[Detail] · RL-H-000087 (Tier H pending) · 1 Chi tiết` | `dist-figma/orders/RL-H-2026-000087.html` |
| `[Detail] · RL-H-000087 (Tier H pending) · 2 Theo dõi` | `dist-figma/orders/RL-H-2026-000087/track.html` |
| `[Detail] · RL-H-000087 (Tier H pending) · 3 Chat` | `dist-figma/orders/RL-H-2026-000087/chat.html` |

### Disputes

| Frame name | File import |
|---|---|
| `[Disputes] · Danh sách tranh chấp` | `dist-figma/disputes.html` |
| `[Disputes] · Tạo tranh chấp` | `dist-figma/disputes/new.html` |
| `[Disputes] · D-0042 Chi tiết` | `dist-figma/disputes/D-2026-0042.html` |

### Misc

| Frame name | File import |
|---|---|
| `[Misc] · Trợ giúp` | `dist-figma/help.html` |
| `[Misc] · Trợ giúp · AI Chat Bot` | `dist-figma/help/chat.html` |
| `[Misc] · Thông báo` | `dist-figma/notifications.html` |
| `[Misc] · Impact` | `dist-figma/impact.html` |
| `[Misc] · Rewards / GP` | `dist-figma/rewards.html` |
| `[Misc] · Chia sẻ` | `dist-figma/share.html` |

<!-- END AUTO-GENERATED -->

## Sau khi import + đổi tên — wire prototype

Tab **Prototype**, kéo connection. 5 journey end-to-end (acceptance criteria), tham chiếu frame theo tên:

1. **Tier S**: `[Home] · Dashboard` → `[Orders] · Danh sách đơn` → `[Orders] · Chọn Tier` → `[Orders] · Tier S giới thiệu` (B1 Chụp ảnh) → `[Tier S] · B2 AI nhận diện` → `B3 Báo giá` → `B4 Địa chỉ` → `B5 Lịch hẹn` → `B6 Xác nhận` → `[Tier S] · Done Đặt đơn thành công` → nhánh từ Done: ▸ "Xem chi tiết đơn" → `[Detail] · RL-001234 (Tier S) · 1 Chi tiết` ▸ "Theo dõi collector" → `· 2 Theo dõi` ▸ "Chat với collector" → `· 3 Chat` ▸ **dòng timeline "Đến nhà cân + thanh toán"** → `[Tier S] · GD1 Cân tại nhà` → `GD2 Hiện khối lượng` → `GD3 Báo giá + Thanh toán` → `GD4 OTP xác nhận` → `GD5 Hoàn tất` → (nút "Xem chi tiết đơn") `[Detail] · RL-001234 (Tier S) · 1 Chi tiết`
2. **Tier B Speed**: `[Home] · Dashboard` → `[Orders] · Chọn Tier` → `[Orders] · Tier B giới thiệu` → `[Tier B Speed] · B2 Mode + Quote` → `B3 Địa chỉ + Slot` → `B4 Xác nhận` → `Done Đặt đơn thành công` → nhánh: Chi tiết / Theo dõi / **Chat** `[Detail] · RL-001241 …`
3. **Tier B Auction**: … → `[Orders] · Tier B giới thiệu` → `[Tier B Speed] · B2 Mode + Quote` → `[Tier B Auction] · B3 Chờ báo giá` → `B3 Live bidding` → `B4 Địa chỉ + Slot` → `B5 Xác nhận` → `Done Đấu giá thắng` → nhánh: Chi tiết / Theo dõi / **Chat** `[Detail] · RL-001242 …`
4. **Tier C**: … → `[Orders] · Tier C giới thiệu` (B1 Chụp ảnh) → `[Tier C] · B2 AI nhận diện` → `B3 Dải BOM` → `B4 Địa chỉ` → `B5 Lịch hẹn` → `B6 Xác nhận` → `[Tier C] · Done Đặt đơn thành công` → nhánh từ Done: ▸ "Xem chi tiết đơn" → `[Detail] · RL-001240 (Tier C pending) · 1 Chi tiết` ▸ "Theo dõi collector" → `· 2 Theo dõi` ▸ "Chat với collector" → `· 3 Chat` ▸ **dòng timeline "Đến nhà · Peek-check + cân"** → `[Tier C] · GD1 Cân tại nhà` → `GD2 Hiện khối lượng` → `GD3 Peek-check` → `GD4 HOLD ví ảo` → `GD5 OTP bàn giao` → `GD6 Hoàn tất` → (nút "Xem chi tiết đơn") `[Detail] · RL-001240 (Tier C pending) · 1 Chi tiết`
5. **Tier H**: … → `[Orders] · Tier H giới thiệu` → `[Tier H] · B2 Loại + Số lượng` → `B3 Xác nhận thu gom` → `Done Đặt thu gom thành công` → nhánh: Chi tiết / Theo dõi / **Chat** `[Detail] · RL-H-000086 …`

**Chat với collector trong flow đặt đơn**: cả 5 màn `Done …` (success) đều có nút "Chat với collector" + 1 nút Chat trong card collector ở sidebar → wire sang frame `[Detail] · <đơn> · 3 Chat` tương ứng. Đây là điểm demo live-chat ngay trong flow đặt đơn (không cần đợi tới trang chi tiết).

Animation: forward trong flow = **Smart Animate** 200ms ease-out; back = **Instant**; đổi module / mở Chat = **Push left** 300ms.

Bonus links: TopNav 4 nút (Home / Orders / Wallet / Profile) ở mỗi frame · Order list row → Detail tương ứng · Detail/Track "Theo dõi"/"Chat" → frame tương ứng · trong frame Chat: nút "Về tracking" → frame Track.

## Bỏ qua (không import — đã loại trong `scripts/figma-frames.mjs` BLOCK)

- `orders/RL-2026-001235|001237|001239*` — dup template Tier S/C, đã có sample 001234/001236
- `orders/RL-2026-00124x/transaction.html` — dup transaction-flow ở module Tier S/C
- `disputes/D-2026-0030|0038.html` — dup template với D-0042
- `easy.html` — chỉ có shell, ít content
