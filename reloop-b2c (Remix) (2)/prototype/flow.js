/* RE-LOOP prototype — flow catalogue
 * Mirrors handoff/docs/FIGMA_IMPORT_GUIDE.md.
 * Canonical 87-frame map, grouped by [Module] in the same order the guide imports them.
 * To add a frame:  push { path, label } into the right module.  Step labels (B2, GD1, Done…)
 * follow the guide's naming convention so the floating chrome can show "B3/B6 — Báo giá" etc.
 */
window.MODULES = [
  {
    id: 'auth', tag: 'Auth', title: 'Auth & Onboarding',
    screens: [
      { path: 'onboarding',     label: 'Onboarding' },
      { path: 'login',          label: 'Đăng nhập' },
      { path: 'login/otp',      label: 'Đăng nhập · OTP' },
      { path: 'signup',         label: 'Đăng ký' },
      { path: 'signup/info',    label: 'Đăng ký · Thông tin' },
      { path: 'signup/address', label: 'Đăng ký · Địa chỉ' },
      { path: 'signup/otp',     label: 'Đăng ký · OTP' },
      { path: 'signup/done',    label: 'Đăng ký · Hoàn tất' },
    ],
  },
  {
    id: 'home', tag: 'Home', title: 'Home',
    screens: [
      { path: 'index', label: 'Dashboard' },
    ],
  },
  {
    id: 'wallet', tag: 'Wallet', title: 'Wallet',
    screens: [
      { path: 'wallet',        label: 'Ví' },
      { path: 'wallet/policy', label: 'Chính sách thanh toán' },
    ],
  },
  {
    id: 'profile', tag: 'Profile', title: 'Profile',
    screens: [
      { path: 'profile',      label: 'Hồ sơ' },
      { path: 'profile/edit', label: 'Sửa hồ sơ' },
    ],
  },
  {
    id: 'orders', tag: 'Orders', title: 'Orders',
    screens: [
      { path: 'orders',             label: 'Danh sách đơn' },
      { path: 'orders/new',         label: 'Chọn Tier' },
      { path: 'orders/new/tier-s',  label: 'Tier S giới thiệu' },
      { path: 'orders/new/tier-b',  label: 'Tier B giới thiệu' },
      { path: 'orders/new/tier-c',  label: 'Tier C giới thiệu' },
      { path: 'orders/new/tier-h',  label: 'Tier H giới thiệu' },
    ],
  },
  {
    id: 'tier-s', tag: 'Tier S', title: 'Tier S', tier: 'S',
    screens: [
      { path: 'orders/new/step-2', step: 'B2', label: 'AI nhận diện' },
      { path: 'orders/new/step-3', step: 'B3', label: 'Báo giá' },
      { path: 'orders/new/step-4', step: 'B4', label: 'Địa chỉ' },
      { path: 'orders/new/step-5', step: 'B5', label: 'Lịch hẹn' },
      { path: 'orders/new/step-6', step: 'B6', label: 'Xác nhận' },
      { path: 'orders/new/success', step: 'Done', label: 'Đặt đơn thành công' },
      { path: 'orders/transaction-flow/tier-s/weighing',      step: 'GD1', label: 'Cân tại nhà' },
      { path: 'orders/transaction-flow/tier-s/weight-reveal', step: 'GD2', label: 'Hiện khối lượng' },
      { path: 'orders/transaction-flow/tier-s/price',         step: 'GD3', label: 'Báo giá + Thanh toán' },
      { path: 'orders/transaction-flow/tier-s/otp',           step: 'GD4', label: 'OTP xác nhận' },
      { path: 'orders/transaction-flow/tier-s/done',          step: 'GD5', label: 'Hoàn tất' },
    ],
  },
  {
    id: 'tier-b-speed', tag: 'Tier B Speed', title: 'Tier B Speed', tier: 'B',
    screens: [
      { path: 'orders/new/tier-b/quote',   step: 'B2',   label: 'Mode + Quote' },
      { path: 'orders/new/tier-b/address', step: 'B3',   label: 'Địa chỉ + Slot' },
      { path: 'orders/new/tier-b/confirm', step: 'B4',   label: 'Xác nhận' },
      { path: 'orders/new/tier-b/success', step: 'Done', label: 'Đặt đơn thành công' },
    ],
  },
  {
    id: 'tier-b-auction', tag: 'Tier B Auction', title: 'Tier B Auction', tier: 'B',
    screens: [
      { path: 'orders/new/tier-b/auction',         step: 'B3',   label: 'Chờ báo giá' },
      { path: 'orders/new/tier-b/auction-live',    step: 'B3+',  label: 'Live bidding' },
      { path: 'orders/new/tier-b/auction-address', step: 'B4',   label: 'Địa chỉ + Slot' },
      { path: 'orders/new/tier-b/auction-confirm', step: 'B5',   label: 'Xác nhận' },
      { path: 'orders/new/tier-b/auction-success', step: 'Done', label: 'Đấu giá thắng' },
    ],
  },
  {
    id: 'tier-c', tag: 'Tier C', title: 'Tier C', tier: 'C',
    screens: [
      { path: 'orders/new/tier-c/step-2',  step: 'B2',   label: 'AI nhận diện' },
      { path: 'orders/new/tier-c/step-3',  step: 'B3',   label: 'Dải BOM' },
      { path: 'orders/new/tier-c/step-4',  step: 'B4',   label: 'Địa chỉ' },
      { path: 'orders/new/tier-c/step-5',  step: 'B5',   label: 'Lịch hẹn' },
      { path: 'orders/new/tier-c/step-6',  step: 'B6',   label: 'Xác nhận' },
      { path: 'orders/new/tier-c/success', step: 'Done', label: 'Đặt đơn thành công' },
      { path: 'orders/transaction-flow/tier-c/weighing',      step: 'GD1', label: 'Cân tại nhà' },
      { path: 'orders/transaction-flow/tier-c/weight-reveal', step: 'GD2', label: 'Hiện khối lượng' },
      { path: 'orders/transaction-flow/tier-c/peek-check',    step: 'GD3', label: 'Peek-check' },
      { path: 'orders/transaction-flow/tier-c/hold',          step: 'GD4', label: 'HOLD ví ảo' },
      { path: 'orders/transaction-flow/tier-c/otp',           step: 'GD5', label: 'OTP bàn giao' },
      { path: 'orders/transaction-flow/tier-c/done',          step: 'GD6', label: 'Hoàn tất' },
    ],
  },
  {
    id: 'tier-h', tag: 'Tier H', title: 'Tier H', tier: 'H',
    screens: [
      { path: 'orders/new/tier-h/items',   step: 'B2',   label: 'Loại + Số lượng' },
      { path: 'orders/new/tier-h/confirm', step: 'B3',   label: 'Xác nhận thu gom' },
      { path: 'orders/new/tier-h/success', step: 'Done', label: 'Đặt thu gom thành công' },
    ],
  },
  {
    id: 'detail', tag: 'Detail', title: 'Order detail / Track / Chat',
    screens: [
      { path: 'orders/RL-2026-001234',             label: 'RL-001234 (Tier S) · Chi tiết',  group: 'RL-001234' },
      { path: 'orders/RL-2026-001234/track',       label: 'RL-001234 · Theo dõi',           group: 'RL-001234' },
      { path: 'orders/RL-2026-001234/chat',        label: 'RL-001234 · Chat',               group: 'RL-001234' },
      { path: 'orders/RL-2026-001241',             label: 'RL-001241 (Tier B Speed) · Chi tiết', group: 'RL-001241' },
      { path: 'orders/RL-2026-001241/track',       label: 'RL-001241 · Theo dõi',           group: 'RL-001241' },
      { path: 'orders/RL-2026-001241/chat',        label: 'RL-001241 · Chat',               group: 'RL-001241' },
      { path: 'orders/RL-2026-001242',             label: 'RL-001242 (Tier B Auction) · Chi tiết', group: 'RL-001242' },
      { path: 'orders/RL-2026-001242/track',       label: 'RL-001242 · Theo dõi',           group: 'RL-001242' },
      { path: 'orders/RL-2026-001242/chat',        label: 'RL-001242 · Chat',               group: 'RL-001242' },
      { path: 'orders/RL-2026-001243',             label: 'RL-001243 (Tier B đang giao) · Chi tiết', group: 'RL-001243' },
      { path: 'orders/RL-2026-001243/track',       label: 'RL-001243 · Theo dõi',           group: 'RL-001243' },
      { path: 'orders/RL-2026-001243/chat',        label: 'RL-001243 · Chat',               group: 'RL-001243' },
      { path: 'orders/RL-2026-001236',             label: 'RL-001236 (Tier C done) · Chi tiết', group: 'RL-001236' },
      { path: 'orders/RL-2026-001236/track',       label: 'RL-001236 · Theo dõi',           group: 'RL-001236' },
      { path: 'orders/RL-2026-001236/chat',        label: 'RL-001236 · Chat',               group: 'RL-001236' },
      { path: 'orders/RL-2026-001240',             label: 'RL-001240 (Tier C pending) · Chi tiết', group: 'RL-001240' },
      { path: 'orders/RL-2026-001240/track',       label: 'RL-001240 · Theo dõi',           group: 'RL-001240' },
      { path: 'orders/RL-2026-001240/chat',        label: 'RL-001240 · Chat',               group: 'RL-001240' },
      { path: 'orders/RL-H-2026-000086',           label: 'RL-H-000086 (Tier H done) · Chi tiết', group: 'RL-H-000086' },
      { path: 'orders/RL-H-2026-000086/track',     label: 'RL-H-000086 · Theo dõi',         group: 'RL-H-000086' },
      { path: 'orders/RL-H-2026-000086/chat',      label: 'RL-H-000086 · Chat',             group: 'RL-H-000086' },
      { path: 'orders/RL-H-2026-000087',           label: 'RL-H-000087 (Tier H pending) · Chi tiết', group: 'RL-H-000087' },
      { path: 'orders/RL-H-2026-000087/track',     label: 'RL-H-000087 · Theo dõi',         group: 'RL-H-000087' },
      { path: 'orders/RL-H-2026-000087/chat',      label: 'RL-H-000087 · Chat',             group: 'RL-H-000087' },
    ],
  },
  {
    id: 'disputes', tag: 'Disputes', title: 'Tranh chấp',
    screens: [
      { path: 'disputes',             label: 'Danh sách tranh chấp' },
      { path: 'disputes/new',         label: 'Tạo tranh chấp' },
      { path: 'disputes/D-2026-0042', label: 'D-0042 Chi tiết' },
    ],
  },
  {
    id: 'misc', tag: 'Misc', title: 'Misc',
    screens: [
      { path: 'help',          label: 'Trợ giúp' },
      { path: 'help/chat',     label: 'Trợ giúp · AI Chat Bot' },
      { path: 'notifications', label: 'Thông báo' },
      { path: 'impact',        label: 'Impact' },
      { path: 'rewards',       label: 'Rewards / GP' },
      { path: 'share',         label: 'Chia sẻ' },
    ],
  },
];

/* Flat lookup helpers */
window.SCREEN_BY_PATH = (() => {
  const m = new Map();
  for (const mod of window.MODULES) for (const s of mod.screens) {
    m.set(s.path, { ...s, module: mod });
  }
  return m;
})();
window.ALL_SCREENS = (() => {
  const list = [];
  for (const mod of window.MODULES) for (const s of mod.screens) list.push({ ...s, module: mod });
  return list;
})();
