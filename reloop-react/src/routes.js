// Bản đồ route — port 1-1 từ src/pages/**/*.astro của dự án Astro.
// path = URL React Router (bỏ đuôi .html; route động `:id`). file = đường dẫn trong src/pages/ (giữ cấu trúc thư mục như Astro).
// App.jsx dùng import.meta.glob để tìm src/pages/<file>.jsx; chưa có file → render <Stub>.

export const ROUTES = [
  // Auth & Onboarding
  { path: '/onboarding', file: 'onboarding', name: '[Auth] Onboarding' },
  { path: '/login', file: 'login', name: '[Auth] Đăng nhập' },
  { path: '/login/otp', file: 'login/otp', name: '[Auth] Đăng nhập · OTP' },
  { path: '/signup', file: 'signup', name: '[Auth] Đăng ký' },
  { path: '/signup/info', file: 'signup/info', name: '[Auth] Đăng ký · Thông tin' },
  { path: '/signup/address', file: 'signup/address', name: '[Auth] Đăng ký · Địa chỉ' },
  { path: '/signup/otp', file: 'signup/otp', name: '[Auth] Đăng ký · OTP' },
  { path: '/signup/done', file: 'signup/done', name: '[Auth] Đăng ký · Hoàn tất' },
  // Home / Wallet / Profile
  { path: '/', file: 'index', name: '[Home] Dashboard' },
  { path: '/wallet', file: 'wallet', name: '[Wallet] Ví' },
  { path: '/wallet/policy', file: 'wallet/policy', name: '[Wallet] Chính sách thanh toán' },
  { path: '/profile', file: 'profile', name: '[Profile] Hồ sơ' },
  { path: '/profile/edit', file: 'profile/edit', name: '[Profile] Sửa hồ sơ' },
  // Orders list + Tier picker
  { path: '/orders', file: 'orders/index', name: '[Orders] Danh sách đơn' },
  { path: '/orders/new', file: 'orders/new', name: '[Orders] Chọn Tier' },
  { path: '/orders/new/tier-s', file: 'orders/new/tier-s', name: '[Orders] Tier S giới thiệu' },
  { path: '/orders/new/tier-b', file: 'orders/new/tier-b', name: '[Orders] Tier B giới thiệu' },
  { path: '/orders/new/tier-c', file: 'orders/new/tier-c', name: '[Orders] Tier C giới thiệu' },
  { path: '/orders/new/tier-h', file: 'orders/new/tier-h', name: '[Orders] Tier H giới thiệu' },
  // Tier S đặt đơn + giao dịch
  { path: '/orders/new/step-2', file: 'orders/new/step-2', name: '[Tier S] B2 AI nhận diện' },
  { path: '/orders/new/step-3', file: 'orders/new/step-3', name: '[Tier S] B3 Báo giá' },
  { path: '/orders/new/step-4', file: 'orders/new/step-4', name: '[Tier S] B4 Địa chỉ' },
  { path: '/orders/new/step-5', file: 'orders/new/step-5', name: '[Tier S] B5 Lịch hẹn' },
  { path: '/orders/new/step-6', file: 'orders/new/step-6', name: '[Tier S] B6 Xác nhận' },
  { path: '/orders/new/success', file: 'orders/new/success', name: '[Tier S] Done Đặt đơn thành công' },
  { path: '/orders/transaction-flow/tier-s/weighing', file: 'orders/transaction-flow/tier-s/weighing', name: '[Tier S] GD1 Cân tại nhà' },
  { path: '/orders/transaction-flow/tier-s/weight-reveal', file: 'orders/transaction-flow/tier-s/weight-reveal', name: '[Tier S] GD2 Hiện khối lượng' },
  { path: '/orders/transaction-flow/tier-s/price', file: 'orders/transaction-flow/tier-s/price', name: '[Tier S] GD3 Báo giá + Thanh toán' },
  { path: '/orders/transaction-flow/tier-s/otp', file: 'orders/transaction-flow/tier-s/otp', name: '[Tier S] GD4 OTP xác nhận' },
  { path: '/orders/transaction-flow/tier-s/done', file: 'orders/transaction-flow/tier-s/done', name: '[Tier S] GD5 Hoàn tất' },
  // Tier B Speed / Auction
  { path: '/orders/new/tier-b/quote', file: 'orders/new/tier-b/quote', name: '[Tier B Speed] B2 Mode + Quote' },
  { path: '/orders/new/tier-b/address', file: 'orders/new/tier-b/address', name: '[Tier B Speed] B3 Địa chỉ + Slot' },
  { path: '/orders/new/tier-b/confirm', file: 'orders/new/tier-b/confirm', name: '[Tier B Speed] B4 Xác nhận' },
  { path: '/orders/new/tier-b/success', file: 'orders/new/tier-b/success', name: '[Tier B Speed] Done Đặt đơn thành công' },
  { path: '/orders/new/tier-b/auction', file: 'orders/new/tier-b/auction', name: '[Tier B Auction] B3 Chờ báo giá' },
  { path: '/orders/new/tier-b/auction-live', file: 'orders/new/tier-b/auction-live', name: '[Tier B Auction] B3 Live bidding' },
  { path: '/orders/new/tier-b/auction-address', file: 'orders/new/tier-b/auction-address', name: '[Tier B Auction] B4 Địa chỉ + Slot' },
  { path: '/orders/new/tier-b/auction-confirm', file: 'orders/new/tier-b/auction-confirm', name: '[Tier B Auction] B5 Xác nhận' },
  { path: '/orders/new/tier-b/auction-success', file: 'orders/new/tier-b/auction-success', name: '[Tier B Auction] Done Đấu giá thắng' },
  // Tier C đặt đơn + giao dịch
  { path: '/orders/new/tier-c/step-2', file: 'orders/new/tier-c/step-2', name: '[Tier C] B2 AI nhận diện' },
  { path: '/orders/new/tier-c/step-3', file: 'orders/new/tier-c/step-3', name: '[Tier C] B3 Dải BOM' },
  { path: '/orders/new/tier-c/step-4', file: 'orders/new/tier-c/step-4', name: '[Tier C] B4 Địa chỉ' },
  { path: '/orders/new/tier-c/step-5', file: 'orders/new/tier-c/step-5', name: '[Tier C] B5 Lịch hẹn' },
  { path: '/orders/new/tier-c/step-6', file: 'orders/new/tier-c/step-6', name: '[Tier C] B6 Xác nhận' },
  { path: '/orders/new/tier-c/success', file: 'orders/new/tier-c/success', name: '[Tier C] Done Đặt đơn thành công' },
  { path: '/orders/transaction-flow/tier-c/weighing', file: 'orders/transaction-flow/tier-c/weighing', name: '[Tier C] GD1 Cân tại nhà' },
  { path: '/orders/transaction-flow/tier-c/weight-reveal', file: 'orders/transaction-flow/tier-c/weight-reveal', name: '[Tier C] GD2 Hiện khối lượng' },
  { path: '/orders/transaction-flow/tier-c/peek-check', file: 'orders/transaction-flow/tier-c/peek-check', name: '[Tier C] GD3 Peek-check' },
  { path: '/orders/transaction-flow/tier-c/hold', file: 'orders/transaction-flow/tier-c/hold', name: '[Tier C] GD4 HOLD ví ảo' },
  { path: '/orders/transaction-flow/tier-c/otp', file: 'orders/transaction-flow/tier-c/otp', name: '[Tier C] GD5 OTP bàn giao' },
  { path: '/orders/transaction-flow/tier-c/done', file: 'orders/transaction-flow/tier-c/done', name: '[Tier C] GD6 Hoàn tất' },
  // Tier H
  { path: '/orders/new/tier-h/items', file: 'orders/new/tier-h/items', name: '[Tier H] B2 Loại + Số lượng' },
  { path: '/orders/new/tier-h/confirm', file: 'orders/new/tier-h/confirm', name: '[Tier H] B3 Xác nhận thu gom' },
  { path: '/orders/new/tier-h/success', file: 'orders/new/tier-h/success', name: '[Tier H] Done Đặt thu gom thành công' },
  // Detail / track / chat / transaction (route động :id)
  { path: '/orders/:id', file: 'orders/[id]/index', name: '[Detail] Chi tiết đơn' },
  { path: '/orders/:id/track', file: 'orders/[id]/track', name: '[Detail] Theo dõi' },
  { path: '/orders/:id/chat', file: 'orders/[id]/chat', name: '[Detail] Chat với collector' },
  { path: '/orders/:id/transaction', file: 'orders/[id]/transaction', name: '[Detail] Giao dịch tại nhà (generic)' },
  // Disputes
  { path: '/disputes', file: 'disputes/index', name: '[Disputes] Danh sách tranh chấp' },
  { path: '/disputes/new', file: 'disputes/new', name: '[Disputes] Tạo tranh chấp' },
  { path: '/disputes/:id', file: 'disputes/[id]', name: '[Disputes] Chi tiết tranh chấp' },
  // Misc
  { path: '/help', file: 'help', name: '[Misc] Trợ giúp' },
  { path: '/help/chat', file: 'help/chat', name: '[Misc] Trợ giúp · AI Chat Bot' },
  { path: '/notifications', file: 'notifications', name: '[Misc] Thông báo' },
  { path: '/impact', file: 'impact', name: '[Misc] Impact' },
  { path: '/rewards', file: 'rewards', name: '[Misc] Rewards / GP' },
  { path: '/share', file: 'share', name: '[Misc] Chia sẻ' },
  { path: '/easy', file: 'easy', name: '[Misc] Chế độ Đơn giản' },
];
