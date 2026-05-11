# Architecture

How the `reloop-react` SPA is wired together. Source of truth is the code; this doc is the
map. Stack: **Vite 6 + React 19 + React Router 6 + Tailwind 3 + JavaScript** (esbuild via Vite handles JSX;
no separate typecheck step; pages were auto-converted from TypeScript so a few still carry unused imports).

## Entry chain

```
index.html (loads fonts + Material Symbols, mounts #root)
  └─ src/main.jsx        createRoot → <StrictMode><BrowserRouter><App/>
       └─ src/App.jsx    builds <Routes> from ROUTES, wraps each in <ErrorBoundary><Suspense>
            └─ src/routes.js   ROUTES: { path, file, name }[]  ← single source of truth for routing
                 └─ src/pages/<file>.jsx   page components (one per route)
```

- `src/main.jsx` — `createRoot(...).render(<StrictMode><BrowserRouter><App/></BrowserRouter></StrictMode>)`, imports `./index.css`.
- `src/index.css` — `@tailwind base/components/utilities` + a `@layer base` block (page bg/colors, `::selection`, an overflow-safety net forcing `overflow-wrap: break-word` on text elements).

## Data-driven router (`src/App.jsx`)

`App.jsx` does **not** import page modules statically. It uses:

```ts
const pageModules = import.meta.glob('./pages/**/*.jsx');   // Vite glob — every page file
function pageFor(file) { return pageModules[`./pages/${file}.jsx`] ? lazy(...) : null; }
```

Then for each entry in `ROUTES` it renders a `<Route path={r.path}>` whose element is:

```
<ErrorBoundary><Suspense fallback={<Loading/>}>
  {C ? <C/> : <Stub route={r.path} name={r.name}/>}
</Suspense></ErrorBoundary>
```

- A `ROUTES` entry whose `file` has **no matching `src/pages/<file>.jsx`** renders [`<Stub>`](../src/components/Stub.jsx) ("CHƯA PORT" placeholder) instead of crashing.
- A render error inside any page is caught by [`<ErrorBoundary>`](../src/components/ErrorBoundary.jsx) (shows the stack in a clay-blush panel).
- The catch-all `path="*"` renders the `404` page (`src/pages/404.jsx`), or a `<Stub>` if that file is missing.

**Adding a route = add one entry to `src/routes.js` + create `src/pages/<file>.jsx`.** Nothing else. See [CONTRIBUTING.md](./CONTRIBUTING.md). The full route table is in [ROUTES.md](./ROUTES.md).

## Shared shell (`src/layouts/AppLayout.jsx`)

Every route is nested under one `<Route element={<AppLayout/>}>`. `AppLayout` renders:

```
<div className="bg-bg-base text-text-primary font-body-md min-h-screen" onClick={onClick}>
  <TopNav/>          ← components/nav/TopNav.jsx  (fixed, h-20, backdrop blur)
  <Outlet/>          ← the page; pages render only <main className="pt-[100px] ...">
  <Footer/>          ← components/layout/Footer.jsx
</div>
```

Two behaviors live here:

1. **Scroll-to-top on route change** — `useEffect(() => window.scrollTo({top:0}), [pathname])`.
2. **Internal-link click interceptor** — ported pages still use plain `<a href="/x">` (not `<Link>`). `onClick` walks up to the nearest `<a>`, and if the `href` is an internal path (`starts with "/"`, not `"//"`, not `target="_blank"`, not `download`), it `preventDefault()`s and `navigate()`s for SPA behavior. It also **normalizes Astro-style paths** before navigating:
   - `"/x.html"` → `"/x"`
   - `"/dir/index.html"` → `"/dir/"`
   - preserves `#hash`
   External links, `tel:`, `mailto:`, `#`-only, and modified clicks (cmd/ctrl/shift/alt) pass through untouched. Pages **must not** render their own `TopNav`/`Footer`.

## Dynamic `:id` routes and guards

Four routes take an `:id` param:

| Route | Page file | Looks up | Valid mock ids |
|---|---|---|---|
| `/orders/:id` | `orders/[id]/index.jsx` | `getOrderById(id)` | `RL-2026-001234..001237`, `001239`, `001240`, `001241..001243` (no `001238`); `RL-H-2026-000086`, `RL-H-2026-000087` |
| `/orders/:id/track` | `orders/[id]/track.jsx` | `getOrderById(id)` | same as above |
| `/orders/:id/chat` | `orders/[id]/chat.jsx` | `getOrderById(id)` | same as above |
| `/orders/:id/transaction` | `orders/[id]/transaction.jsx` | `getOrderById(id)` | same as above |
| `/disputes/:id` | `disputes/[id].jsx` | local `allDisputes` map | `D-2026-0042`, `D-2026-0038`, `D-2026-0030` |

Guard pattern (the Astro original used `getStaticPaths()` so it never hit unknown ids; the React port can):

```tsx
const order = getOrderById(id!);
if (!order) return <NotFound what="Đơn hàng" backTo="/orders" backLabel="Về danh sách đơn" />;
```

[`<NotFound>`](../src/components/NotFound.jsx) is a friendly "mã không tồn tại" page with a back link — **distinct** from the `404` page (`path="*"`, unmatched URLs) and from `<Stub>` (route exists in `ROUTES` but the page file isn't ported yet).

## Aliases, build, deploy

- **Path alias** `@/` → `src/` — declared in both `vite.config.js` (`resolve.alias`) and `jsconfig.json` (`paths`, editor only). Mixed usage in the codebase: ported pages use `@/lib/cx`; hand-written components often use relative `../../lib/...`. Both work.
- **Build** — `vite build` → `dist/` (static assets, hashed). Plain JavaScript + JSX; esbuild (via Vite) does the transform — no TypeScript, no `tsc`, no separate typecheck step.
- **No `scripts/` folder** here — unlike the root Astro project, there's no `build:figma` / `bundle-handoff` / codemod tooling in this package.
- **Raster images** live in `public/images/` and are referenced as `/images/x.jpg` (no base64).
- **Deploy** — host `dist/` as a static site with an SPA fallback `/* → /index.html` (client-side routing). `netlify.toml` already has this redirect + `NODE_VERSION=22` + long-cache headers for `/assets/*` and `/images/*`.

## Known prototype gaps

This is a static prototype — some interactive UI renders correctly but isn't wired:

- Filter chips on `/notifications` and `/orders` are decorative (no `useState`).
- The Speed/Auction tabs on `/orders/new/tier-b` are decorative.
- `react-router-dom` may warn about a controlled `<input value=...>` without `onChange` — harmless for the prototype; add `readOnly` to silence.
- `TransactionHistory` (wallet) **is** wired with real `useState` filtering — use it as the pattern when converting other static chips.

To wire something: add local `useState`, derive from copies of `src/lib/mock.js` data. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Relationship to the root Astro project

`reloop-rework/` (repo root) is the original **Astro 5** app; `reloop-rework/reloop-react/`
(this package) is a self-contained React port. Pages mirror `src/pages/**/*.astro` 1:1 (the
`file` column in `src/routes.js` keeps the Astro folder structure, e.g. `orders/new/step-2`,
`orders/[id]/index`, `disputes/[id]`, `help/chat`, `404`). Product spec, full design tokens,
the feature tracker, and Figma/handoff guides remain at the root in [`../../docs/`](../../docs/)
and [`../../CLAUDE.md`](../../CLAUDE.md).
