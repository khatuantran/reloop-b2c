# Contributing / extending the app

How to add things to `reloop-react`. Read [ARCHITECTURE.md](./ARCHITECTURE.md) first for the
big picture, [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for tokens, [DATA_MODEL.md](./DATA_MODEL.md)
for the mock data, [COMPONENTS.md](./COMPONENTS.md) for what already exists.

## Add a page / route

1. Pick the route path and the page file path (keep the Astro-style folder structure, e.g. `orders/new/step-7` → `src/pages/orders/new/step-7.jsx`; `:id` pages live in `[id]/` folders).
2. Create `src/pages/<file>.jsx` with a **default export** React component. It should render only `<main className="pt-[100px] pb-space-96 ...">` (the `pt-[100px]` clears the fixed `TopNav`); `AppLayout` already supplies `TopNav` + `Footer` + scroll-to-top + link interception. Use a `max-w-[1280px] mx-auto px-[80px]` content wrapper.
3. Add an entry to [`src/routes.js`](../src/routes.js): `{ path: '/orders/new/step-7', file: 'orders/new/step-7', name: '[Tier S] B7 …' }`. `App.jsx` picks it up automatically via `import.meta.glob` — no other registration.
4. Add the row to [ROUTES.md](./ROUTES.md) (and, if it maps to a feature, tick it in the root [`FEATURE_TRACKER.md`](../../docs/FEATURE_TRACKER.md)).

**Dynamic `:id` pages** — use `useParams()`, look the entity up via a `getXById` helper, and guard:

```tsx
import { useParams } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import { getOrderById } from '../../../lib/mock';

export default function OrderDetail() {
  const { id } = useParams();
  const order = getOrderById(id!);
  if (!order) return <NotFound what="Đơn hàng" backTo="/orders" backLabel="Về danh sách đơn" />;
  // …render
}
```

Don't forget to add the new id(s) to the mock data so the page is reachable. If you don't create the page file yet, the route still renders — as `<Stub>` ("CHƯA PORT").

## Add a component

- Put it in the matching folder: `components/ui/` (generic primitives), `components/order/`, `components/home/`, `components/auth/`, `components/profile/`, `components/wallet/`, `components/nav/`, `components/layout/`, `components/illustrations/`.
- Default-export a function component. Existing components type props as `any` (ported) or with an inline type — either is fine; prefer an inline type for new code.
- **Reuse before you build:** `ui/Button`, `ui/Card`, `ui/StatusChip`, `ui/TierBadge`, `ui/Pill`, `ui/EmptyState`; `cx()` for conditional classes; `format.*` for VND/date/weight; `OrderStepperBar`/`StepHero`/`TxnSidebar` etc. for flow pages.
- **Tokens only** — no hardcoded hex/px (see [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)). Material icons via `<span className="material-symbols-rounded fill !text-[Npx]">name</span>`.
- Apply the **visual-first rule**: a section ≥200px tall needs ≥3 visual elements (illustration / clay card / icon-in-clay-box / chip / badge / data viz / sparkle). Don't ship text-only blocks.

## Add an illustration

- New file `src/components/illustrations/<Name>.jsx` (PascalCase; add `Scene` suffix for complex multi-object scenes), props `{ className?: string }`, inline `<svg>`.
- ViewBox: 400×300 (card thumbnail), 400×400 (square hero), 480×480 (landscape hero).
- Follow the **8-criteria "đặc sắc" standard** (multi-layer composition, 3-stop gradients, depth shadows/highlights/ambient glow, brand-palette colors only, themed sparkles, context-specific objects, Vietnamese brand-marker pills, no relying on Material icons) — full text in [`../../CLAUDE.md`](../../CLAUDE.md) / [`../../docs/DESIGN_SYSTEM.md`](../../docs/DESIGN_SYSTEM.md). Use `RecycleScene.jsx` / `TierSScene.jsx` as templates.
- Wrap usages in a `shadow-clay rounded-[28px]` container with floating chip overlays for hero treatments.
- Register the new file in [COMPONENTS.md](./COMPONENTS.md) and the root [`FEATURE_TRACKER.md`](../../docs/FEATURE_TRACKER.md). Don't add stock photos except for sample product / BOM before-after / map backgrounds.

## Wire static prototype UI to real interaction

Some chips/tabs render but aren't wired (filter chips on `/notifications`, `/orders`; Speed/Auction tabs on `/orders/new/tier-b`). The pattern (see [`wallet/TransactionHistory.jsx`](../src/components/wallet/TransactionHistory.jsx)):

```tsx
const [filter, setFilter] = useState('all');
const list = useMemo(() => filter === 'all' ? DATA : DATA.filter(x => x.type === filter), [filter]);
```

There's no backend — derive everything from copies of [`src/lib/mock.js`](../src/lib/mock.js) data held in component state. If you need to mutate, copy first (`const [orders, setOrders] = useState(() => [...ORDERS])`).

## Conventions

- **Vietnamese** user-facing copy. Money `213.700đ` (`formatVND`). Dates `dd/MM/yyyy` (`formatDate`). Never the word "demo".
- 1280px desktop is the target; mobile is best-effort.
- Internal links: `<Link to="...">` is cleanest, but plain `<a href="/...">` also works (`AppLayout` intercepts it). External links / `tel:` / `mailto:` / `target="_blank"` pass through.
- Pages must not render their own `TopNav`/`Footer`.

## Commands

```bash
npm install        # Node 20+ (Netlify builds with NODE_VERSION=22)
npm run dev        # http://localhost:5173 — HMR
npm run build      # vite build → dist/ (static SPA, hashed assets)
npm run preview    # serve the built dist/
```

Deploy: host `dist/` statically with an SPA fallback `/* → /index.html` — `netlify.toml` already configures this (plus long-cache headers for `/assets/*` and `/images/*`).
