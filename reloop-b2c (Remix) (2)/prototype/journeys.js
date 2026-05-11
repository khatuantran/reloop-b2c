/* RE-LOOP prototype — 5 canonical end-to-end journeys
 * Source: handoff/docs/FIGMA_IMPORT_GUIDE.md §Sau khi import + wire prototype.
 * Each journey is an ordered list of screen paths.  The shell uses these to
 * power the journey picker, progress dot-bar and the "next step" hint.
 */
window.JOURNEYS = [
  {
    id: 'tier-s', name: 'Tier S — bán PET/lon',
    tier: 'S',
    summary: 'Đặt đơn rác Standard → collector đến nhà → cân + thanh toán ZaloPay 60 giây.',
    steps: [
      'index',
      'orders',
      'orders/new',
      'orders/new/tier-s',
      'orders/new/step-2',
      'orders/new/step-3',
      'orders/new/step-4',
      'orders/new/step-5',
      'orders/new/step-6',
      'orders/new/success',
      'orders/RL-2026-001234',
      'orders/RL-2026-001234/track',
      'orders/RL-2026-001234/chat',
      'orders/transaction-flow/tier-s/weighing',
      'orders/transaction-flow/tier-s/weight-reveal',
      'orders/transaction-flow/tier-s/price',
      'orders/transaction-flow/tier-s/otp',
      'orders/transaction-flow/tier-s/done',
    ],
  },
  {
    id: 'tier-b-speed', name: 'Tier B — Speed',
    tier: 'B',
    summary: 'Đồ to/điện cũ — chọn mode Speed (giá sàn cố định), đặt nhanh.',
    steps: [
      'index',
      'orders/new',
      'orders/new/tier-b',
      'orders/new/tier-b/quote',
      'orders/new/tier-b/address',
      'orders/new/tier-b/confirm',
      'orders/new/tier-b/success',
      'orders/RL-2026-001241',
      'orders/RL-2026-001241/track',
      'orders/RL-2026-001241/chat',
    ],
  },
  {
    id: 'tier-b-auction', name: 'Tier B — Auction',
    tier: 'B',
    summary: 'Đồ to/điện cũ — đấu giá 3 báo giá, chốt người trả cao nhất.',
    steps: [
      'index',
      'orders/new',
      'orders/new/tier-b',
      'orders/new/tier-b/quote',
      'orders/new/tier-b/auction',
      'orders/new/tier-b/auction-live',
      'orders/new/tier-b/auction-address',
      'orders/new/tier-b/auction-confirm',
      'orders/new/tier-b/auction-success',
      'orders/RL-2026-001242',
      'orders/RL-2026-001242/track',
      'orders/RL-2026-001242/chat',
    ],
  },
  {
    id: 'tier-c', name: 'Tier C — composite (mainboard)',
    tier: 'C',
    summary: 'Đồ rã xác (mainboard, mô-tơ) — tạm ứng 90% theo Trust → Hub rã → BOM thực → trả nốt.',
    steps: [
      'index',
      'orders/new',
      'orders/new/tier-c',
      'orders/new/tier-c/step-2',
      'orders/new/tier-c/step-3',
      'orders/new/tier-c/step-4',
      'orders/new/tier-c/step-5',
      'orders/new/tier-c/step-6',
      'orders/new/tier-c/success',
      'orders/RL-2026-001240',
      'orders/RL-2026-001240/track',
      'orders/RL-2026-001240/chat',
      'orders/transaction-flow/tier-c/weighing',
      'orders/transaction-flow/tier-c/weight-reveal',
      'orders/transaction-flow/tier-c/peek-check',
      'orders/transaction-flow/tier-c/hold',
      'orders/transaction-flow/tier-c/otp',
      'orders/transaction-flow/tier-c/done',
    ],
  },
  {
    id: 'tier-h', name: 'Tier H — hazardous (pin/dầu)',
    tier: 'H',
    summary: 'Pin AA/lithium, dầu nhớt, sơn — miễn phí thu gom + chứng chỉ môi trường.',
    steps: [
      'index',
      'orders/new',
      'orders/new/tier-h',
      'orders/new/tier-h/items',
      'orders/new/tier-h/confirm',
      'orders/new/tier-h/success',
      'orders/RL-H-2026-000086',
      'orders/RL-H-2026-000086/track',
      'orders/RL-H-2026-000086/chat',
    ],
  },
];

/* Build a map { path → array of journeys it belongs to } so the chrome can
 * highlight the active journey and offer "next step" suggestions. */
window.JOURNEYS_BY_PATH = (() => {
  const m = new Map();
  for (const j of window.JOURNEYS) {
    j.steps.forEach((path, idx) => {
      if (!m.has(path)) m.set(path, []);
      m.get(path).push({ journey: j, index: idx });
    });
  }
  return m;
})();
