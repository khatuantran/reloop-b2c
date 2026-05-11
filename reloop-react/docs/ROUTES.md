# Routes

Mirrors [`src/routes.js`](../src/routes.js) — the single source of truth. Each entry is
`{ path, file, name }`: `path` is the React Router URL (dynamic segments use `:id`), `file`
is the page module at `src/pages/<file>.jsx` (folder structure preserved from the original
Astro project), `name` is the human label (also shown by `<Stub>` and used for Figma frame
names). `App.jsx` discovers page files via `import.meta.glob('./pages/**/*.jsx')`; a missing
file renders `<Stub>`. **68 entries in `routes.js`** (plus the `*` fallback wired in `App.jsx`,
and `src/pages/404.jsx` which backs it → 69 page files total). See [ARCHITECTURE.md](./ARCHITECTURE.md) for how the
router and dynamic-route guards work.

## Auth & Onboarding

| Path | Page file | Name |
|---|---|---|
| `/onboarding` | `onboarding` | [Auth] Onboarding |
| `/login` | `login` | [Auth] Đăng nhập |
| `/login/otp` | `login/otp` | [Auth] Đăng nhập · OTP |
| `/signup` | `signup` | [Auth] Đăng ký |
| `/signup/info` | `signup/info` | [Auth] Đăng ký · Thông tin |
| `/signup/address` | `signup/address` | [Auth] Đăng ký · Địa chỉ |
| `/signup/otp` | `signup/otp` | [Auth] Đăng ký · OTP |
| `/signup/done` | `signup/done` | [Auth] Đăng ký · Hoàn tất |

## Home / Wallet / Profile

| Path | Page file | Name |
|---|---|---|
| `/` | `index` | [Home] Dashboard |
| `/wallet` | `wallet` | [Wallet] Ví |
| `/wallet/policy` | `wallet/policy` | [Wallet] Chính sách thanh toán |
| `/profile` | `profile` | [Profile] Hồ sơ |
| `/profile/edit` | `profile/edit` | [Profile] Sửa hồ sơ |

## Orders list + Tier picker

| Path | Page file | Name |
|---|---|---|
| `/orders` | `orders/index` | [Orders] Danh sách đơn |
| `/orders/new` | `orders/new` | [Orders] Chọn Tier |
| `/orders/new/tier-s` | `orders/new/tier-s` | [Orders] Tier S giới thiệu |
| `/orders/new/tier-b` | `orders/new/tier-b` | [Orders] Tier B giới thiệu |
| `/orders/new/tier-c` | `orders/new/tier-c` | [Orders] Tier C giới thiệu |
| `/orders/new/tier-h` | `orders/new/tier-h` | [Orders] Tier H giới thiệu |

## Tier S — order creation + at-home transaction

| Path | Page file | Name |
|---|---|---|
| `/orders/new/step-2` | `orders/new/step-2` | [Tier S] B2 AI nhận diện |
| `/orders/new/step-3` | `orders/new/step-3` | [Tier S] B3 Báo giá |
| `/orders/new/step-4` | `orders/new/step-4` | [Tier S] B4 Địa chỉ |
| `/orders/new/step-5` | `orders/new/step-5` | [Tier S] B5 Lịch hẹn |
| `/orders/new/step-6` | `orders/new/step-6` | [Tier S] B6 Xác nhận |
| `/orders/new/success` | `orders/new/success` | [Tier S] Done Đặt đơn thành công |
| `/orders/transaction-flow/tier-s/weighing` | `orders/transaction-flow/tier-s/weighing` | [Tier S] GD1 Cân tại nhà |
| `/orders/transaction-flow/tier-s/weight-reveal` | `orders/transaction-flow/tier-s/weight-reveal` | [Tier S] GD2 Hiện khối lượng |
| `/orders/transaction-flow/tier-s/price` | `orders/transaction-flow/tier-s/price` | [Tier S] GD3 Báo giá + Thanh toán |
| `/orders/transaction-flow/tier-s/otp` | `orders/transaction-flow/tier-s/otp` | [Tier S] GD4 OTP xác nhận |
| `/orders/transaction-flow/tier-s/done` | `orders/transaction-flow/tier-s/done` | [Tier S] GD5 Hoàn tất |

## Tier B — Speed mode + Auction mode

| Path | Page file | Name |
|---|---|---|
| `/orders/new/tier-b/quote` | `orders/new/tier-b/quote` | [Tier B Speed] B2 Mode + Quote |
| `/orders/new/tier-b/address` | `orders/new/tier-b/address` | [Tier B Speed] B3 Địa chỉ + Slot |
| `/orders/new/tier-b/confirm` | `orders/new/tier-b/confirm` | [Tier B Speed] B4 Xác nhận |
| `/orders/new/tier-b/success` | `orders/new/tier-b/success` | [Tier B Speed] Done Đặt đơn thành công |
| `/orders/new/tier-b/auction` | `orders/new/tier-b/auction` | [Tier B Auction] B3 Chờ báo giá |
| `/orders/new/tier-b/auction-live` | `orders/new/tier-b/auction-live` | [Tier B Auction] B3 Live bidding |
| `/orders/new/tier-b/auction-address` | `orders/new/tier-b/auction-address` | [Tier B Auction] B4 Địa chỉ + Slot |
| `/orders/new/tier-b/auction-confirm` | `orders/new/tier-b/auction-confirm` | [Tier B Auction] B5 Xác nhận |
| `/orders/new/tier-b/auction-success` | `orders/new/tier-b/auction-success` | [Tier B Auction] Done Đấu giá thắng |

## Tier C — order creation + at-home transaction

| Path | Page file | Name |
|---|---|---|
| `/orders/new/tier-c/step-2` | `orders/new/tier-c/step-2` | [Tier C] B2 AI nhận diện |
| `/orders/new/tier-c/step-3` | `orders/new/tier-c/step-3` | [Tier C] B3 Dải BOM |
| `/orders/new/tier-c/step-4` | `orders/new/tier-c/step-4` | [Tier C] B4 Địa chỉ |
| `/orders/new/tier-c/step-5` | `orders/new/tier-c/step-5` | [Tier C] B5 Lịch hẹn |
| `/orders/new/tier-c/step-6` | `orders/new/tier-c/step-6` | [Tier C] B6 Xác nhận |
| `/orders/new/tier-c/success` | `orders/new/tier-c/success` | [Tier C] Done Đặt đơn thành công |
| `/orders/transaction-flow/tier-c/weighing` | `orders/transaction-flow/tier-c/weighing` | [Tier C] GD1 Cân tại nhà |
| `/orders/transaction-flow/tier-c/weight-reveal` | `orders/transaction-flow/tier-c/weight-reveal` | [Tier C] GD2 Hiện khối lượng |
| `/orders/transaction-flow/tier-c/peek-check` | `orders/transaction-flow/tier-c/peek-check` | [Tier C] GD3 Peek-check |
| `/orders/transaction-flow/tier-c/hold` | `orders/transaction-flow/tier-c/hold` | [Tier C] GD4 HOLD ví ảo |
| `/orders/transaction-flow/tier-c/otp` | `orders/transaction-flow/tier-c/otp` | [Tier C] GD5 OTP bàn giao |
| `/orders/transaction-flow/tier-c/done` | `orders/transaction-flow/tier-c/done` | [Tier C] GD6 Hoàn tất |

## Tier H — hazardous waste pickup

| Path | Page file | Name |
|---|---|---|
| `/orders/new/tier-h/items` | `orders/new/tier-h/items` | [Tier H] B2 Loại + Số lượng |
| `/orders/new/tier-h/confirm` | `orders/new/tier-h/confirm` | [Tier H] B3 Xác nhận thu gom |
| `/orders/new/tier-h/success` | `orders/new/tier-h/success` | [Tier H] Done Đặt thu gom thành công |

## Order detail / track / chat / transaction — dynamic `:id`

These guard on `getOrderById(id)` → `<NotFound>` for unknown ids. Valid mock order ids:
`RL-2026-001234..001237`, `RL-2026-001239`, `RL-2026-001240`, `RL-2026-001241..001243`
(note: **no** `RL-2026-001238`), plus Tier H `RL-H-2026-000086` / `RL-H-2026-000087`.

| Path | Page file | Name |
|---|---|---|
| `/orders/:id` | `orders/[id]/index` | [Detail] Chi tiết đơn |
| `/orders/:id/track` | `orders/[id]/track` | [Detail] Theo dõi |
| `/orders/:id/chat` | `orders/[id]/chat` | [Detail] Chat với collector |
| `/orders/:id/transaction` | `orders/[id]/transaction` | [Detail] Giao dịch tại nhà (generic) |

## Disputes — list / new / detail (`:id`)

`/disputes/:id` guards on a local `allDisputes` map. Valid ids: `D-2026-0042`, `D-2026-0038`, `D-2026-0030`.

| Path | Page file | Name |
|---|---|---|
| `/disputes` | `disputes/index` | [Disputes] Danh sách tranh chấp |
| `/disputes/new` | `disputes/new` | [Disputes] Tạo tranh chấp |
| `/disputes/:id` | `disputes/[id]` | [Disputes] Chi tiết tranh chấp |

## Misc

| Path | Page file | Name |
|---|---|---|
| `/help` | `help` | [Misc] Trợ giúp |
| `/help/chat` | `help/chat` | [Misc] Trợ giúp · AI Chat Bot |
| `/notifications` | `notifications` | [Misc] Thông báo |
| `/impact` | `impact` | [Misc] Impact |
| `/rewards` | `rewards` | [Misc] Rewards / GP |
| `/share` | `share` | [Misc] Chia sẻ |
| `/easy` | `easy` | [Misc] Chế độ Đơn giản |

## Fallback

| Path | Page file | Notes |
|---|---|---|
| `*` | `404` | Catch-all for any unmatched URL (configured in `App.jsx`, not in `ROUTES`). Falls back to `<Stub>` if `src/pages/404.jsx` is missing. |
