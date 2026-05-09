# CLAUDE.md — RE-LOOP B2C Web App

Hướng dẫn cho AI agent làm việc trên repository này.

## Bối cảnh

RE-LOOP là nền tảng kinh tế tuần hoàn B2C cho hộ gia đình Việt Nam — bán rác tái chế qua web app `reloop.vn`. Repo này build **frontend B2C web app**, không có backend, không có database, không có authentication thật. State quản lý qua mock data trong `src/lib/mock.ts` + React `useState`.

Tài liệu nguồn:

- `docs/requirement.md` v0.1 — **canonical spec** từ BA. Chứa 4 user journey, 10 modules, 40+ feature IDs (AUTH-XX, ORDER-XX, TRACK-XX, TRANS-XX, WALLET-XX, TRUST-XX...). Tất cả discussion feature **phải tham chiếu IDs trong file này**.
- `docs/PRD.md` — "what we built" cho round hiện tại (subset của requirement.md).
- `docs/DESIGN_SYSTEM.md` — design tokens canonical.
- `docs/FEATURE_TRACKER.md` — checklist tiến độ.
- `docs/RE-LOOP_v5_Executive_Summary.docx` — business logic gốc.

## Scope hiện tại (Round 2)

**Critical path 15 features** từ requirement.md §4.1:

- ORDER-01..09 (chụp ảnh → AI detect → tier → giá → address → slot → payment → summary → confirm)
- TRACK-01..03 (real-time location, ETA, notif toast)
- TRANS-01..04 (cân tại nhà, instant Tier S, Hold ví ảo Tier C, sign-off)
- WALLET-01..05 (balance, Hold dashboard, BOM thực, phần chênh, history)
- TRUST-01..02 (score display, tạm ứng % logic)

**Skip cho round này** (sẽ làm round sau): AUTH, GEO, PROFILE, NOTIF (real), REVIEW, HELP, GP, DISPUTE, Tier B/H flows, mobile-first, real AI/map.

## Stack

- **Astro 5** — output static, mỗi route → 1 file `.html`
- **React 19** islands — chỉ cho block tương tác (`OrderCreate`, `TrackingMap`, `AtHomeTransaction`, `TransactionHistory`)
- **Tailwind 3** — config map 1-1 với `docs/DESIGN_SYSTEM.md`
- **TypeScript** strict
- **Node 22+** bắt buộc (`export PATH="/opt/homebrew/bin:$PATH"` nếu hệ thống có node v12 cũ)

## Routes (8)

| Route | Page |
|-------|------|
| `/` | Dashboard (Linh's home) |
| `/orders/new` | Order creation flow |
| `/orders` | Order history list |
| `/orders/[id]` | Order detail (Tier C show BOM thực) |
| `/orders/[id]/track` | Real-time tracking |
| `/orders/[id]/transaction` | At-home weighing |
| `/wallet` | Wallet & BOM verification |
| `/profile` | Read-only profile + Trust Score |

Không có `/login`, `/signup`, `/`-as-marketing-landing. App giả định user "Linh" đã đăng nhập sẵn.

## Quy tắc bắt buộc

### Không dùng từ "demo"
Repo round 1 từng là demo. Round 2 là **app thật mock**. Bỏ hết "demo" trong copy, route, component name, button label.

### Fonts — chỉ 3 fonts (Figma compatibility)
- **Plus Jakarta Sans** (600/700/800) — heading
- **Inter** (400/500/600) — body, label, button
- **JetBrains Mono** (400/500) — token name, hex, số tiền, mã đơn

### Design tokens — không hardcode
Luôn dùng class token: `bg-bg-elevated`, `text-text-primary`, `border-border-subtle`, `text-tier-s`, `font-display-xl text-display-xl`, `p-space-24`. Không bao giờ `bg-[#52E08D]`.

### Mock data — single source
Mọi page import từ `src/lib/mock.ts` (USER, WALLET, ORDERS, COLLECTORS, BOM_LIBRARY, PRICES). State change qua React `useState` in-memory.

### Width target
1280px desktop, padding ngang 80px, max-width center. Mobile responsive là best-effort, không phải priority.

### Vietnamese copy canonical
Toàn bộ user-facing là tiếng Việt. Định dạng tiền VND dấu chấm: `213.700đ`. Date `dd/MM/yyyy`.

### Cập nhật FEATURE_TRACKER
Mỗi feature xong → tick checkbox trong `docs/FEATURE_TRACKER.md` + thêm dòng "Latest changes" log.

## Lệnh

```bash
export PATH="/opt/homebrew/bin:$PATH"   # nếu hệ thống có Node v12 cũ
npm run dev          # localhost:4321
npm run build        # → dist/ với post-build relativize (multi-file, dev preview)
npm run build:figma  # → dist-figma/ self-contained HTML cho Figma html.to.design import
npm run preview      # serve dist/
```

## Building for Figma import

Plugin Figma `html.to.design` thường chỉ nhận **1 file HTML đơn lẻ** — không reach được folder `images/` hoặc `_astro/css` cùng cấp. Vì vậy chạy `npm run build:figma` để tạo folder `dist-figma/` song song với `dist/`:

- Mỗi `dist-figma/<route>.html` self-contained ~3MB:
  - CSS bundle inline `<style>` block
  - Images base64 data URI
  - Material Symbols Outlined font woff2 base64 + @font-face inline
  - JS bundles strip (Figma không exec)
- Plus Jakarta Sans / Inter / JetBrains Mono **vẫn load qua Google Fonts CDN** vì Figma có sẵn 3 font này trong library.
- Font Material Symbols cache lần đầu vào `scripts/.cache/material-symbols.woff2`, build lần sau không re-fetch.

Workflow Figma import:
1. `npm run build:figma`
2. Mở Figma, chạy plugin `html.to.design`
3. Drag-drop hoặc paste content của 1 file `dist-figma/*.html`
4. Plugin render full visuals + import vào frame Figma

## Persona context

App build cho **Linh, 32 tuổi, Q.7 TPHCM** (PRIMARY persona theo requirement.md §2.1):

- Trust Score 65 ("Đang tích lũy" zone)
- Đã có 5 đơn lịch sử (3 Tier S done, 2 Tier C done, 1 Tier C đang Pending Verify)
- Wallet ZaloPay 528.400đ + Hold ví ảo 60.000đ
- Quen ZaloPay, không cần UI Đơn giản
- Bán PET/carton hằng tuần, mô tơ thỉnh thoảng

Mọi UX quyết định bám persona này. Bà Năm + Minh ("Cháu giúp bà") là round sau.
