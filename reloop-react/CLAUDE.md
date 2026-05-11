# CLAUDE.md — RE-LOOP Web App (React + Vite)

Hướng dẫn cho AI agent làm việc trong package `reloop-react/`. Đây là bản **React port độc lập**
của app Astro ở repo gốc. Repo gốc (`../CLAUDE.md`) là context Astro — **file này thắng** cho mọi
việc trong thư mục `reloop-react/`.

## Bối cảnh

RE-LOOP là nền tảng kinh tế tuần hoàn B2C cho hộ gia đình Việt Nam — bán rác tái chế qua web app.
**Không backend, không DB, không auth thật.** State = mock data (`src/lib/mock.js`) + React `useState`.
App giả định persona "Linh" (32, Q.7 TP.HCM) đã đăng nhập sẵn. Đây là **prototype tĩnh** — một số UI
tương tác (filter chip, tab) render đúng nhưng chưa wire.

## Stack

- **Vite 6 + React 19 + React Router 6 + Tailwind 3 + JavaScript** (no TypeScript — esbuild via Vite handles JSX; no separate typecheck step)
- SPA tĩnh → `dist/`; ảnh raster trong `public/images/` tham chiếu `/images/x.jpg` (không base64)
- **Node 20+ bắt buộc** — nếu hệ thống có node v12 cũ: `export PATH="/opt/homebrew/bin:$PATH"` trước khi chạy npm

## Tài liệu (đọc trước khi sửa)

Bộ tài liệu kỹ thuật đầy đủ trong [`docs/`](docs/):

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — entry chain `main.jsx`→`App.jsx`→`routes.js`, router data-driven (`import.meta.glob`), `AppLayout` shell + click interceptor, route động `:id` + guard, build/deploy, prototype gaps
- [docs/ROUTES.md](docs/ROUTES.md) — bản đồ 68 route (mirror `src/routes.js`)
- [docs/COMPONENTS.md](docs/COMPONENTS.md) — inventory component theo folder + 24 illustration SVG, kèm prop signatures
- [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — `src/lib/mock.js` (types, mock objects, helpers), `format.js`, `cx.js`
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — token cheat-sheet từ `tailwind.config.js`, font/icon, visual-first + illustration rules
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) — cách thêm page / component / illustration, wire static UI, conventions

Spec sản phẩm canonical (125 features, 11 modules, 12 journeys, data model, roadmap), design tokens
gốc, feature tracker, Figma/handoff guides: ở repo gốc `../docs/` (`requirement.md`, `PRD.md`,
`DESIGN_SYSTEM.md`, `FEATURE_TRACKER.md`, `AI_HANDOFF.md`, `FIGMA_IMPORT_GUIDE.md`).

## Kiến trúc — tóm tắt (chi tiết: docs/ARCHITECTURE.md)

- `src/routes.js` = nguồn chuẩn cho mọi route. Mỗi entry `{ path, file, name }`: `path` = URL React Router (route động dùng `:id`), `file` = `src/pages/<file>.jsx` (giữ cấu trúc thư mục kiểu Astro).
- `src/App.jsx` dùng `import.meta.glob('./pages/**/*.jsx')` để lazy-load page; thiếu file → render `<Stub>`; mỗi route bọc `<ErrorBoundary><Suspense>`; `path="*"` → page `404`.
- `src/layouts/AppLayout.jsx` = khung chung: `<TopNav/>` + `<Outlet/>` + `<Footer/>` + scroll-to-top + **click interceptor** (`<a href="/...">` nội bộ → `navigate()`, chuẩn hoá `/x.html`→`/x`, `/dir/index.html`→`/dir/`). Page chỉ render `<main className="pt-[100px] ...">`, **không** tự render TopNav/Footer.
- Route động `:id` (`/orders/:id`, `/orders/:id/track|chat|transaction`, `/disputes/:id`): dùng `useParams()` + `getXById()` + guard `if (!entity) return <NotFound .../>`. Mock order ids: `RL-2026-001234..001243` (không có `001238`), `RL-H-2026-000086/87`; disputes: `D-2026-0042/0038/0030`.

## Quy tắc bắt buộc

### Không dùng từ "demo"
App thật mock, không phải demo. Bỏ "demo" trong copy, route, tên component, label.

### Tokens — không hardcode
Luôn dùng class token: `bg-bg-elevated`, `text-text-primary`, `border-border-subtle`, `text-tier-s`,
`shadow-clay`, `p-space-24`, `font-display text-h2`. **Không bao giờ** `bg-[#52E08D]` hay px thô khi có `space-*`.
Canonical: `tailwind.config.js` + [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md).

### Fonts — chỉ 3 + icon (nạp qua `<link>` trong `index.html`)
Plus Jakarta Sans 600/700/800 (heading) · Inter 400/500/600/700 (body/label/button) · JetBrains Mono 400/500 (số/tiền/mã/token) · Material Symbols Rounded/Outlined (icon — `<span className="material-symbols-rounded fill !text-[Npx]">name</span>`).

### Visual-first + illustration
Mọi page/section visual-rich (≥3 visual element / section ≥200px): SVG illustration + Material icon trong clay box + clay pastel card + chips/badges. Illustration = **SVG inline tự vẽ** trong `src/components/illustrations/` theo chuẩn "đặc sắc" 8 tiêu chí (xem `../CLAUDE.md` / `../docs/DESIGN_SYSTEM.md`) — không stock photo (trừ sample product / BOM before-after / map bg), không coi Material icon là illustration.

### Mock data — single source
Mọi page import từ `src/lib/mock.js` (`USER, WALLET, ORDERS, COLLECTORS, BOM_LIBRARY, PRICES, TRANSACTIONS` + getters). State change qua `useState` in-memory (copy data trước khi mutate). Wiring static UI: theo pattern `src/components/wallet/TransactionHistory.jsx`.

### Vietnamese copy
User-facing là tiếng Việt. Tiền VND dấu chấm: `213.700đ` (`formatVND`). Date `dd/MM/yyyy` (`formatDate`). Reuse `src/lib/format.js`.

### Thêm route mới
1) tạo `src/pages/<file>.jsx` (default export, render `<main className="pt-[100px] ...">`); 2) thêm entry vào `src/routes.js`; 3) update [docs/ROUTES.md](docs/ROUTES.md) + tick `../docs/FEATURE_TRACKER.md` nếu là feature. Route `:id` → thêm guard + thêm id vào mock. Chi tiết: [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md).

## Lệnh

```bash
export PATH="/opt/homebrew/bin:$PATH"   # nếu hệ thống có node v12 cũ
npm install        # Node 20+ (Netlify dùng NODE_VERSION=22)
npm run dev        # http://localhost:5173
npm run build      # vite build → dist/ (SPA tĩnh, asset hashed)
npm run preview    # serve dist/
```

Deploy: host `dist/` tĩnh + SPA fallback `/* → /index.html` (đã có trong `netlify.toml`, kèm long-cache headers cho `/assets/*` và `/images/*`).

## Persona context

App build cho **Linh, 32, Q.7 TP.HCM**: Trust Score 65 ("Đang tích lũy", tạm ứng 50%), 1240 GP,
ZaloPay 528.400đ + Hold ví ảo 60.000đ, quen ZaloPay (không cần UI Đơn giản), bán PET/carton hằng tuần,
mô tơ thỉnh thoảng. Mock đã có 8 đơn done + 2 đơn PENDING_VERIFY. Bà Năm + Minh ("Cháu giúp bà") là round sau.
