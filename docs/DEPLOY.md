# Deploy guide — Netlify

Astro static export → deploy lên Netlify free tier. Build output `dist/` (44 HTML files với CSS/JS/images split). Không deploy `dist-figma/` — đã ignore trong `.gitignore`.

## Bước 1: Push code lên GitHub

```bash
cd /Users/khatran/Work/reloop-rework
git init
git add -A
git commit -m "Initial RE-LOOP B2C web app"
git branch -M main

# Tạo repo trên github.com/new (đặt tên `reloop-rework`)
git remote add origin https://github.com/<your-username>/reloop-rework.git
git push -u origin main
```

> `.gitignore` đã ignore `node_modules/`, `dist/`, `dist-figma/`, `scripts/.cache/`.

## Bước 2a: Deploy qua Netlify Dashboard (Recommended)

1. Vào https://app.netlify.com/start
2. Sign in với GitHub
3. Click "Import an existing project" → "Deploy with GitHub"
4. Authorize Netlify access repos → chọn `reloop-rework`
5. Build settings (auto-detect từ `netlify.toml`):
   - Branch: `main`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 22 (qua env var trong `netlify.toml`)
6. Click **Deploy site** → đợi ~1-2 phút
7. URL: `https://<random-name>.netlify.app` — đổi tên trong Site Settings → Site information → Change site name → đổi thành `reloop-rework` hoặc khác.

## Bước 2b: Deploy qua Netlify CLI (alternative)

```bash
npm i -g netlify-cli
cd /Users/khatran/Work/reloop-rework

netlify login           # mở browser, auth GitHub
netlify init            # link repo, chọn team, set build command
netlify deploy --prod   # deploy production
```

## Bước 3: Auto-deploy mỗi push

Mặc định Netlify listen GitHub webhook:
- Push `main` → auto rebuild + deploy production
- Push branch khác → auto deploy preview URL `deploy-preview-N--<site>.netlify.app`
- Mở PR → Netlify comment auto trên PR với preview link

Không cần làm gì thêm.

## Custom domain (free)

1. Netlify Dashboard → Domain management → Add custom domain
2. Nhập `reloop.vn` hoặc `app.reloop.vn`
3. Netlify hiển thị DNS records cần add (A 75.2.60.5 hoặc CNAME `<site>.netlify.app`)
4. Add records vào nhà cung cấp domain → đợi DNS propagate (5-30 phút)
5. Click "Verify DNS configuration" → SSL/HTTPS auto-issue qua Let's Encrypt

## Verify sau deploy

Mở `https://<your-site>.netlify.app/` kiểm:
- [ ] Dashboard render, hero image hiện
- [ ] Click "+ Đặt lịch" → `/orders/new.html` → Step 1
- [ ] Navigate qua tracking, transaction (Tier S + Tier C — 11 sub-step pages)
- [ ] Wallet, orders list, profile load OK
- [ ] DevTools → Network: tất cả CSS/JS/images return 200, không 404

## Config trong `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"

[build.processing.html]
  pretty_urls = false   # không strip .html — link nội bộ đã có .html

# Cache static assets 1 năm
[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Troubleshooting

**Build fail "Node version not supported"**:
- Verify `NODE_VERSION = "22"` trong `[build.environment]` của `netlify.toml`. Astro 5 cần Node 18.20.8+ hoặc 20+.

**404 trên route `/orders/RL-2026-001234.html`**:
- Verify file tồn tại: build local `npm run build`, kiểm `dist/orders/RL-2026-001234.html`. Nếu có local mà không có trên Netlify → trigger redeploy.

**CSS không load**:
- Path đã được `relativize.mjs` chuyển thành relative (`./_astro/...` hoặc `../_astro/...`). Netlify serve từ root vẫn resolve đúng.
- Mở `https://<site>.netlify.app/_astro/index.<hash>.css` trực tiếp — phải return 200.

**Images broken**:
- `dist/images/` phải có 8 file jpg. Source ở `public/images/` được Astro auto-copy sang `dist/images/`.

**Deploy log**:
- Netlify Dashboard → Deploys → click deploy → xem full build log.

## Free tier limits Netlify (2026)

- 100 GB bandwidth/month
- 300 build minutes/month (mỗi deploy ~1.5 phút)
- Unlimited deploys
- Team members: 1 (Starter plan)
- Custom domain: ✅ free
- HTTPS: ✅ free auto

## KHÔNG deploy `dist-figma/`

Folder `dist-figma/` (1.8 MB × 28+ file = ~50MB) chỉ dùng cho import Figma `html.to.design` plugin. Đã ignore trong `.gitignore`, không lên GitHub, không build trên Netlify.

Để share file `dist-figma/*.html` cho designer:
- Email / Slack / Drive
- Hoặc zip cả folder + share link
- Hoặc paste content HTML trực tiếp vào plugin Figma
