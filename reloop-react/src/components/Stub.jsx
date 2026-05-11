import { Link } from 'react-router-dom';

// Placeholder cho trang chưa port. Khi port xong: tạo src/pages/<file>.tsx (default export),
// glob trong App.tsx tự nhận, route sẽ render trang thật thay vì Stub này.
export default function Stub({ route, name }) {
  return (
    <main className="pt-[100px] pb-space-96 min-h-screen flex items-center">
      <div className="max-w-[1280px] mx-auto px-[80px] w-full">
        <div className="grad-hero rounded-[32px] px-space-48 py-space-48 border border-border-subtle shadow-clay">
          <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-amber-deep font-bold bg-clay-butter border-2 border-amber-deep/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-16">
            <span className="material-symbols-rounded fill !text-[14px]">construction</span>
            CHƯA PORT
          </span>
          <h1 className="font-display-l text-[40px] font-extrabold tracking-tight text-text-primary mb-space-12">{name}</h1>
          <p className="font-body-lg text-body-lg text-text-secondary mb-space-8">
            Route <code className="font-mono-md text-tier-s">{route}</code> chưa được port sang React.
          </p>
          <p className="font-body-md text-[13px] text-text-tertiary mb-space-24">
            Port: tạo file <code className="font-mono-md">src/pages/&lt;file&gt;.tsx</code> (xem cột <code className="font-mono-md">file</code> trong <code className="font-mono-md">src/routes.ts</code>) — chuyển từ <code className="font-mono-md">src/pages/*.astro</code> của repo gốc theo quy tắc trong <code className="font-mono-md">CONVERSION.md</code>.
          </p>
          <Link to="/" className="inline-flex items-center gap-space-8 bg-lime text-text-on-lime px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-lime hover:-translate-y-[2px] transition">
            <span className="material-symbols-rounded fill !text-[18px]">home</span>Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
