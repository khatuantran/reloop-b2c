import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// SPA Vite + React + React Router. Static build → dist/ (deploy y như Astro static cũ).
// KHÔNG dùng ảnh base64 nữa — ảnh raster nằm trong public/images/ (tham chiếu /images/x.jpg).
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
});
