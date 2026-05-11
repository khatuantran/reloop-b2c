import { cx } from '@/lib/cx';
import RecycleBin from '../components/illustrations/RecycleBin';

export default function P404() {
  const links = [
    { icon: 'home', label: 'Trang chủ', href: '/index.html', clay: 'bg-clay-mint', accent: 'text-tier-s', border: 'border-tier-s/30' },
    { icon: 'inventory_2', label: 'Đơn của tôi', href: '/orders.html', clay: 'bg-clay-sky', accent: 'text-info', border: 'border-info/30' },
    { icon: 'help_center', label: 'Trung tâm hỗ trợ', href: '/help.html', clay: 'bg-clay-butter', accent: 'text-amber-deep', border: 'border-amber-deep/30' },
    { icon: 'smart_toy', label: 'Hỏi RE-LOOP AI', href: '/help/chat.html', clay: 'bg-clay-peach', accent: 'text-tier-c', border: 'border-tier-c/30' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen flex items-center">
          <div className="max-w-[1280px] mx-auto px-[80px] w-full">
            <section className="grad-hero rounded-[40px] px-space-48 py-space-48 border border-border-subtle relative overflow-hidden">
              <svg className="absolute top-space-32 left-[18%] w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.5" /></svg>
              <svg className="absolute bottom-space-32 right-[22%] w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#2BB36A" opacity="0.4" /></svg>
      
              <div className="grid grid-cols-[1.2fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-h font-bold bg-clay-blush border-2 border-tier-h/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">error</span>
                    LỖI 404
                  </span>
                  <h1 className="font-display-l text-[64px] font-extrabold leading-[1.0] tracking-tight text-text-primary mb-space-12">Trang này đã… được tái chế 🌿</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-24">
                    Không tìm thấy nội dung bạn cần — có thể link cũ hoặc gõ sai. Thử các lối tắt dưới đây nhé.
                  </p>
                  <div className="grid grid-cols-2 gap-space-12">
                    {links.map((l) => (
                      <a href={l.href} className={cx(['rounded-2xl border-2 p-space-20 shadow-clay-sm hover:-translate-y-[2px] hover:shadow-clay transition flex items-center gap-space-12 group', l.clay, l.border])}>
                        <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className={cx(['material-symbols-rounded fill !text-[20px]', l.accent])}>{l.icon}</span></div>
                        <span className="flex-1 font-display font-bold text-[14px] text-text-primary">{l.label}</span>
                        <span className={cx(['material-symbols-rounded !text-[18px] group-hover:translate-x-1 transition', l.accent])}>arrow_forward</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="relative h-[260px]">
                  <RecycleBin className="absolute inset-0 w-full h-full" />
                  <span className="absolute bottom-space-12 right-space-8 px-space-12 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm font-mono-md text-[11px] text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">recycling</span>0 lãng phí
                  </span>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
