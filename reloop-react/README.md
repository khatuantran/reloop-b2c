# RE-LOOP — Web App (React + Vite)

Dự án **độc lập**, self-contained. Vite 6 + React 19 + React Router 6 + Tailwind 3. 69 trang + ~55 component + 24 illustration SVG. Ảnh raster trong `public/images/` (tham chiếu `/images/x.jpg`) — không dùng base64.

> RE-LOOP là nền tảng kinh tế tuần hoàn B2C cho hộ gia đình Việt Nam — bán rác tái chế qua web app. Không backend, không DB, không auth thật: state qua mock data (`src/lib/mock.js`) + React `useState`. App giả định user "Linh" (Q.7 TPHCM) đã đăng nhập.

## Lệnh

```bash
npm install        # Node 20+
npm run dev        # http://localhost:5173
npm run build      # → dist/  (SPA tĩnh)
npm run preview    # serve dist/
```

Deploy: host `dist/` như static site; cần SPA fallback `/* → /index.html` (đã có sẵn trong `netlify.toml`).

## Cấu trúc

- `src/main.jsx` — `createRoot` + `<BrowserRouter><App/></BrowserRouter>`, import `./index.css`.
- `src/App.jsx` — router data-driven theo `src/routes.js`; dùng `import.meta.glob('./pages/**/*.jsx')` để lazy-load trang; mỗi route bọc `<ErrorBoundary><Suspense>` ; route `*` → trang `404`.
- `src/routes.js` — nguồn chuẩn cho mọi route. Mỗi entry `{ path, file, name }`: `path` là URL React Router (route động dùng `:id`), `file` là đường dẫn dưới `src/pages/` (cấu trúc thư mục giữ nguyên — vd `orders/new/step-2`, `orders/[id]/index`, `disputes/[id]`, `help/chat`, `404`).
- `src/layouts/AppLayout.jsx` — khung chung: `<TopNav/>` + `<Outlet/>` + `<Footer/>` + scroll-to-top khi đổi route + **click interceptor**: `<a href="/...">` nội bộ → `navigate()` (SPA). Trang chỉ render `<main className="pt-[100px] ...">`, không tự render TopNav/Footer.
- `src/components/` — UI components (`ui/*`, `order/*`, `home/*`, `auth/*`, `profile/*`, `nav/*`, `layout/*`, `illustrations/*`). `Stub.jsx` (placeholder), `ErrorBoundary.jsx`, `NotFound.jsx` (fallback cho route động `:id` khi entity không tồn tại trong mock).
- `src/lib/` — `mock.js` (USER, WALLET, ORDERS, COLLECTORS, BOM_LIBRARY, PRICES + getters), `format.js` (VND `213.700đ`, date `dd/MM/yyyy`, weight), `cx.js` (`cx()` ghép className động, `__css()` parse chuỗi CSS → React style object).
- `src/index.css` — Tailwind + design tokens (clay shadows, clay pastels, lime DNA, 3 fonts: Plus Jakarta Sans / Inter / JetBrains Mono). `tailwind.config.js` map 1-1 với tokens. Fonts + Material Symbols Rounded nạp qua `<link>` trong `index.html`.

## Tài liệu

Bộ tài liệu kỹ thuật cho codebase này nằm trong [`docs/`](docs/):

- [docs/README.md](docs/README.md) — chỉ mục
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — router data-driven, `AppLayout`, route động, build/deploy
- [docs/ROUTES.md](docs/ROUTES.md) — bản đồ 69 route (mirror `src/routes.js`)
- [docs/COMPONENTS.md](docs/COMPONENTS.md) — inventory component + 24 illustration SVG
- [docs/DATA_MODEL.md](docs/DATA_MODEL.md) — `src/lib/mock.js`, `format.js`, `cx.js`
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — token, font/icon, visual-first rule
- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) — cách thêm page/component/illustration

Spec sản phẩm + design tokens canonical + feature tracker + Figma/handoff: xem `../docs/` ở repo gốc và `../CLAUDE.md`.

## Ghi chú

- Route động `:id` (`/orders/:id`, `/orders/:id/track|chat|transaction`, `/disputes/:id`) có guard `if (!entity) return <NotFound .../>` — id không có trong mock → trang "không tồn tại" + nút quay lại, không crash. Mock order ids: `RL-2026-001234..001243` (không có `001238`), Tier H `RL-H-2026-000086/87`; disputes: `D-2026-0042`, `D-2026-0051`, …
- Tương tác client-side phức tạp (filter chip ở `/notifications`, `/orders`, tab Speed/Auction ở `/orders/new/tier-b`) là prototype tĩnh — UI hiện đúng nhưng nút lọc/tab chưa wire; dựng lại bằng `useState` nếu cần.
- `react-router-dom` warning về `value` trên `<input>` không có `onChange` (controlled-without-handler) — vô hại với prototype tĩnh; thêm `readOnly` nếu muốn dẹp warning.
