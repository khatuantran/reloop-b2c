# Data model & lib utilities

There is no backend. Every page reads from [`src/lib/mock.js`](../src/lib/mock.js) — the
single source of truth — and mutates copies in local `useState`. Two small helper modules:
[`src/lib/format.js`](../src/lib/format.js) (vi-VN formatting) and [`src/lib/cx.js`](../src/lib/cx.js)
(className / inline-style helpers).

Persona baked into the mock: **Linh, 32, Q.7 TP.HCM** — Trust Score 65 ("Đang tích lũy"),
1240 GP, ZaloPay balance 528.400đ + 60.000đ on Hold, 8 historical orders + 2 pending verify.

## `src/lib/mock.js`

### Types

```ts
type Tier = 'S' | 'B' | 'C' | 'H';
type OrderStatus = 'COMPLETED' | 'PENDING_VERIFY' | 'IN_TRANSIT' | 'AT_PICKUP' | 'CANCELLED';

interface User    { id; name; phone; email; address; district; trustScore; greenPoints; memberSince }
interface Wallet  { zaloPayBalance; holdAmount }
interface Collector { id; name; tier: 1|2|3; vehicle; plate; rating; completedOrders; phone; avatarColor }

interface Order {
  id; tier: Tier; status: OrderStatus; item;
  itemSlug: 'pet'|'carton'|'aluminum'|'motor-wm'|'mainboard'|'wire-cu'|'fridge'|'tv'|'sofa'|'washer'|'pin-aa'|'pin-li'|'bulb'|'oil';
  mode?: 'speed'|'auction';          // Tier B
  winningBid?; speedFloor?;          // Tier B Auction
  hazardousItems?: { name; count; unit }[];   // Tier H
  weight;                            // kg
  amount?;                           // Tier S final price, or Tier C total
  advance?; settled?;                // Tier C: tạm ứng / phần chênh
  expectedRange?: [number, number];  // Tier C BOM value range
  createdAt; completedAt?; collectorId?;
  bomReal?: { Cu; Fe; Al; plastic };  // Tier C real BOM (kg)
  massBalance?;                       // Tier C mass-balance ratio (~0.95–0.97)
}

interface Transaction { id; type: 'IN'|'OUT'|'HOLD'|'RELEASE'; amount; date; orderId?; description }
interface Price       { material; perKg; unit }     // unit = a price-band label ("Cao" / "Trung bình" / …)
interface BomItem     { id; name; weightRange: [n,n]; defaultWeight; expectedBom; realBom; expectedRange: [n,n] }
```

### Mock objects

| Export | Shape | Contents |
|---|---|---|
| `USER` | `User` | Linh — `id u-001`, `0901 234 567`, `linh.nguyen@example.com`, `123 Nguyễn Văn Linh, P. Tân Phong`, `Q.7, TP.HCM`, `trustScore 65`, `greenPoints 1240`, `memberSince 2026-03-15` |
| `WALLET` | `Wallet` | `zaloPayBalance 528_400`, `holdAmount 60_000` |
| `COLLECTORS` | `Record<string, Collector>` | `c-001` Anh Tuấn (tier 1, Honda Wave, 51A-12345, ★4.8, 87 đơn) · `c-002` Chị Hoa (tier 2, xe ba gác, 51B-67890, ★4.9, 124 đơn) · `c-003` Anh Sơn (tier 1, Yamaha Sirius, 59X1-44321, ★4.7, 56 đơn) |
| `ORDERS` | `Order[]` | 11 orders — see table below |
| `TRANSACTIONS` | `Transaction[]` | 8 wallet entries (t-001…t-008): IN payouts, the `001240` mainboard HOLD 60.000đ, and the two Tier C RELEASE→IN pairs (`001236`, `001239`) |
| `PRICES` | `Price[]` | Đồng 178.000đ/kg (Cao) · Nhôm 36.000đ (Cao) · Sắt 6.500đ (Trung bình) · PET 12.000đ (Trung bình) · Carton 2.500đ (Phổ biến) · Lon nhôm 38.000đ (Cao) |
| `BOM_LIBRARY` | `Record<string, BomItem>` | `motor-wm` (Mô tơ máy giặt 1HP, 7–9kg, range 200k–260k) · `mainboard` (Mainboard PC, 0.5–1.5kg, range 25k–60k) · `wire-cu` (Dây điện 1.5mm² đồng, 1–5kg, range 200k–240k) |

### `ORDERS` quick reference

| id | tier | status | item | key amounts |
|---|---|---|---|---|
| `RL-2026-001234` | S | COMPLETED | Chai PET 500ml (3.2kg) | 38.400đ · collector c-001 |
| `RL-2026-001235` | S | COMPLETED | Hộp carton khô (2.5kg) | 6.250đ · c-003 |
| `RL-2026-001236` | C | COMPLETED | Mô tơ máy giặt 1HP (8.2kg) | total 213.700đ = advance 175.000đ + settled 38.700đ · range 200k–260k · bomReal Cu 1.85 Fe 5.10 plastic 1.05 · massBalance 0.97 · c-002 |
| `RL-2026-001237` | S | COMPLETED | Lon nhôm Coca (1.8kg) | 68.400đ · c-001 |
| `RL-2026-001239` | C | COMPLETED | Dây điện 1.5mm² đồng (2.0kg) | total 218.400đ = advance 150.000đ + settled 68.400đ · range 200k–240k · bomReal Cu 1.26 plastic 0.74 · massBalance 0.95 · c-002 |
| `RL-2026-001240` | C | **PENDING_VERIFY** | Mainboard PC (1.0kg) | advance 60.000đ · range 25k–60k · c-002 |
| `RL-2026-001241` | B | COMPLETED | Tủ lạnh đôi 300L Samsung (62kg) | 1.650.000đ · mode `speed` · c-002 |
| `RL-2026-001242` | B | COMPLETED | Tivi LCD 42" Samsung (14kg) | 850.000đ · mode `auction` · winningBid 850.000đ · speedFloor 580.000đ · c-002 |
| `RL-2026-001243` | B | **IN_TRANSIT** | Sofa 3 chỗ vải (38kg) | 320.000đ · mode `speed` · c-002 |
| `RL-H-2026-000086` | H | COMPLETED | Pin AA + bóng huỳnh quang (0.8kg) | amount 0 · hazardousItems: 18 pin AA/AAA, 3 bóng huỳnh quang · c-001 |
| `RL-H-2026-000087` | H | **PENDING_VERIFY** | Pin xe máy + pin AA (4.8kg) | amount 0 · hazardousItems: 12 pin AA/AAA, 1 pin xe máy · c-001 |

(There is intentionally **no** `RL-2026-001238`.)

### Helpers / derived

| Export | Signature | Behavior |
|---|---|---|
| `getOrderById` | `(id: string) => Order \| undefined` | `ORDERS.find(o => o.id === id)` — used by all dynamic `/orders/:id*` pages with a `<NotFound>` guard |
| `getCollectorById` | `(id: string) => Collector \| undefined` | `COLLECTORS[id]` |
| `trustScoreZone` | `(score: number) => { label; color: 'error'\|'warning'\|'success'; advanceRatio }` | `<20` → "User mới" / error / 0.3 · `<80` → "Đang tích lũy" / warning / 0.5 · `≥80` → "Đáng tin" / success / 0.7 |
| `STATS` | object | `totalOrders` (COMPLETED count), `tierSCount`, `tierCCount`, `avgMassBalance` 0.96 |

> Note: `trustScoreZone` uses 20/80 cutoffs; the SVG [`TrustScoreGauge`](../src/components/profile/TrustScoreGauge.jsx) draws its 3 colour zones at 30/70 with 30%/50%/70% labels. Both describe the same "advance %" concept — keep them consistent if you touch the thresholds.

## `src/lib/format.js` (vi-VN)

| Function | Output example |
|---|---|
| `formatVND(n)` | `213.700đ` (`n.toLocaleString('vi-VN') + 'đ'`) |
| `formatDate(d)` | `09/05/2026` (`dd/MM/yyyy`) — accepts `string \| Date` |
| `formatTime(d)` | `10:00` (`HH:mm`) |
| `formatDateTime(d)` | `09/05/2026 · 10:00` |
| `formatRelative(d)` | `vừa xong` / `N phút trước` / `N giờ trước` / `N ngày trước` / falls back to `formatDate`. **Anchored to a fixed `NOW_REF = 2026-05-09T10:00:00`** so the prototype is deterministic. |
| `formatWeight(kg)` | `1,5 kg` (1 decimal, comma decimal separator) |
| `statusLabel(s)` | `COMPLETED→Hoàn tất`, `PENDING_VERIFY→Chờ Hub verify`, `IN_TRANSIT→Đang đến`, `AT_PICKUP→Đang cân tại nhà`, `CANCELLED→Đã huỷ` (unknown → returns `s`) |

## `src/lib/cx.js`

- `cx(...args)` — Astro `class:list` replacement. Accepts `string | number | false | null | undefined | Record<string, boolean> | nested arrays`, flattens, drops falsy, joins with spaces. Default export is also `cx`.
- `__css(css)` — parses an inline-CSS string `"a-b: c; d: e"` into a React style object `{ aB: 'c', d: 'e' }` (kebab→camel). Used where the Astro original wrote `style={\`…\`}` with multiple props; named `__css` to avoid clashing with single-letter map vars (`s`, `t`, …). If passed an object, returns it unchanged.
