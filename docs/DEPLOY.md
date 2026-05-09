# Deploy guide

Hiện ứng dụng là Astro static export → deploy lên bất kỳ static host nào. Round 5 + 5d build ra `dist/` (43+ HTML files với CSS/JS/images split) và `dist-figma/` (self-contained cho Figma — KHÔNG deploy folder này).

Production target: **Vercel free tier**.

## Bước 1: Push code lên GitHub

```bash
cd /Users/khatran/Work/reloop-rework
git init
git add -A
git commit -m "Initial RE-LOOP B2C web app"
git branch -M main

# Tạo repo mới trên github.com/new (đặt tên `reloop-rework`, public hoặc private đều OK)
git remote add origin https://github.com/<your-username>/reloop-rework.git
git push -u origin main
```

> `.gitignore` đã ignore `node_modules/`, `dist/`, `dist-figma/`, `scripts/.cache/` — chỉ source code lên GitHub.

## Bước 2a: Deploy qua Vercel Dashboard (Recommended cho lần đầu)

1. Vào https://vercel.com/new
2. Sign in với GitHub account
3. Click "Import" repo `reloop-rework`
4. Vercel auto-detect Astro framework. Chấp nhận default config:
   - Framework Preset: **Astro** (auto)
   - Build Command: `npm run build` (auto, từ `vercel.json`)
   - Output Directory: `dist` (auto, từ `vercel.json`)
   - Install Command: `npm install` (auto)
5. Click **Deploy** → đợi ~1-2 phút
6. URL: `https://reloop-rework-<hash>.vercel.app` (production) + `https://reloop-rework.vercel.app` (alias)

## Bước 2b: Deploy qua Vercel CLI (alternative)

```bash
npm i -g vercel
cd /Users/khatran/Work/reloop-rework
vercel               # lần đầu: link project, chọn account
vercel --prod        # deploy production
```

## Bước 3: Auto-deploy mỗi push

Mặc định Vercel listen GitHub webhook:
- Push lên `main` → auto rebuild + deploy production
- Push branch khác → auto deploy preview URL riêng (mỗi PR có URL preview)

Không cần làm gì thêm.

## Custom domain (free)

1. Vercel Dashboard → Project → Settings → Domains
2. Add domain `reloop.vn` (hoặc subdomain `app.reloop.vn`)
3. Vercel hiển thị DNS records cần add (A record hoặc CNAME)
4. Add records vào nhà cung cấp domain → đợi DNS propagate (~5-30 phút)
5. SSL/HTTPS auto-issue qua Let's Encrypt

## Verify sau deploy

Mở `https://<your-deploy-url>/` kiểm tra:
- [ ] Dashboard render, hero image hiện
- [ ] Click "+ Đặt lịch" → `/orders/new` → Step 1
- [ ] Navigate qua tracking, transaction (Tier S + Tier C)
- [ ] Wallet, orders list, profile load OK
- [ ] Trong DevTools → Network: tất cả CSS/JS/images return 200, không 404

## Troubleshooting

**404 trên route động `/orders/RL-2026-001234.html`**:
- Astro emit file tại path đó nhờ `astro.config.mjs` có `format: 'file'`. Verify `dist/orders/RL-2026-001234.html` có tồn tại sau build local.

**CSS không load**:
- `npm run build` local, kiểm `dist/_astro/index.*.css` có tồn tại.
- Path trong HTML đã được `relativize.mjs` chuyển thành relative — Vercel serve từ root vẫn resolve đúng.

**Images broken**:
- `dist/images/` phải có 8 file jpg. Nếu thiếu, kiểm `public/images/` source.

## Free tier limits Vercel (2026)

- 100 GB bandwidth/month — đủ cho demo + share team
- Unlimited deploys
- Build minutes: 6000/month (mỗi deploy ~1 phút build)
- Team members: 1 (Hobby plan)
- Custom domain: ✅ free

## KHÔNG deploy `dist-figma/`

Folder `dist-figma/` (1.8 MB × 28 file = ~50MB) chỉ dùng cho import Figma `html.to.design`. Không cần serve qua HTTP. Đã ignore trong `.gitignore`.

Nếu cần share file `dist-figma/*.html` cho designer:
- Gửi file qua email / Slack / Drive
- Hoặc zip cả folder và share link
- HOẶC paste content HTML trực tiếp vào plugin Figma
