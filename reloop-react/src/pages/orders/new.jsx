import { cx } from '@/lib/cx';
import RecycleScene from '../../components/illustrations/RecycleScene';
import TierSScene from '../../components/illustrations/TierSScene';
import TierBScene from '../../components/illustrations/TierBScene';
import TierCScene from '../../components/illustrations/TierCScene';
import TierHScene from '../../components/illustrations/TierHScene';

export default function New() {
  const tiers = [
    {
      code: 'S',
      name: 'Standard',
      tagline: 'Vật phẩm phổ thông · giá CHẮC CHẮN',
      examples: ['PET 5.500đ/kg', 'Carton 2.500đ/kg', 'Lon nhôm 22.000đ/kg', 'Giấy 3.200đ/kg'],
      icon: 'water_bottle',
      illustration: 'tier-s',
      href: '/orders/new/tier-s.html',
      accent: 'tier-s',
      clay: 'bg-clay-mint',
      flowSteps: '6 bước · 5 phút',
      payment: 'ZaloPay 60s sau cân',
      badge: 'PHỔ BIẾN NHẤT',
      estTime: '<30 phút',
    },
    {
      code: 'B',
      name: 'Bulky / Big',
      tagline: 'Đồ to đồ điện cũ · Speed hoặc Auction',
      examples: ['Tủ lạnh 1.2M', 'Tivi 580k', 'Sofa 320k', 'Máy giặt 850k'],
      icon: 'kitchen',
      illustration: 'tier-b',
      href: '/orders/new/tier-b.html',
      accent: 'amber-deep',
      clay: 'bg-clay-butter',
      flowSteps: '4 bước · 8 phút',
      payment: 'Speed (5 phút) hoặc Auction (30 phút)',
      badge: null,
      estTime: '1-2 giờ',
    },
    {
      code: 'C',
      name: 'Composite',
      tagline: 'Hỗn hợp linh kiện · Hub rã xác BOM thực',
      examples: ['Mainboard PC', 'Mô-tơ máy giặt', 'Dây đồng', 'Quạt cũ'],
      icon: 'memory',
      illustration: 'tier-c',
      href: '/orders/new/tier-c.html',
      accent: 'tier-c',
      clay: 'bg-clay-peach',
      flowSteps: '6 bước · 5 phút',
      payment: 'Tạm ứng + BOM thực sau Hub',
      badge: 'GIÁ CAO NHẤT',
      estTime: '<30 phút + 24h Hub',
    },
    {
      code: 'H',
      name: 'Hazardous',
      tagline: 'Chất thải nguy hại · MIỄN PHÍ + chứng chỉ',
      examples: ['Pin AA / lithium', 'Bóng đèn huỳnh quang', 'Dầu nhớt thải', 'Thuốc hết hạn'],
      icon: 'warning',
      illustration: 'tier-h',
      href: '/orders/new/tier-h.html',
      accent: 'tier-h',
      clay: 'bg-clay-blush',
      flowSteps: '3 bước · 3 phút',
      payment: '0đ · +50 GP + ESG cert',
      badge: 'MIỄN PHÍ',
      estTime: '<45 phút',
    },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Trang chủ
            </a>
      
            {/* Hero (compact, focus on the question) */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.5fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">category</span>
                    BƯỚC 1 · CHỌN LOẠI VẬT PHẨM
                  </span>
                  <h1 className="font-display-l text-[48px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Bạn muốn bán loại gì hôm nay?</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16 max-w-[520px]">
                    4 loại vật phẩm — mỗi loại có cách định giá và quy trình khác nhau. Chọn loại phù hợp để xem flow chi tiết.
                  </p>
                  <div className="flex items-center gap-space-16">
                    <div className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-2xl px-space-12 py-space-8 shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-s">smart_toy</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-semibold">AI nhận dạng tự động</span>
                    </div>
                    <div className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-2xl px-space-12 py-space-8 shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[18px] text-info">help</span>
                      <a href="/help#tiers" className="font-mono-md text-[12px] text-text-primary font-semibold hover:text-tier-s">Phân vân? Xem so sánh</a>
                    </div>
                  </div>
                </div>
                <div className="relative h-[220px]">
                  <RecycleScene className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* 4-tier picker — large clickable cards */}
            <div className="grid grid-cols-2 gap-space-24 mb-space-32">
              {tiers.map((t) => (
                <a href={t.href} className={cx(['rounded-[28px] shadow-clay border-2 overflow-hidden hover:-translate-y-[4px] hover:shadow-clay-lg transition-all flex flex-col', t.clay, `border-${t.accent}/30`])}>
                  {/* Top section with illustration + badge */}
                  <div className={cx(['relative h-[180px] bg-gradient-to-br from-bg-elevated/40 to-transparent'])}>
                    {t.illustration === 'tier-s' && <TierSScene className="absolute inset-0 w-full h-full" />}
                    {t.illustration === 'tier-b' && <TierBScene className="absolute inset-0 w-full h-full" />}
                    {t.illustration === 'tier-c' && <TierCScene className="absolute inset-0 w-full h-full" />}
                    {t.illustration === 'tier-h' && <TierHScene className="absolute inset-0 w-full h-full" />}
                    <div className="absolute top-space-16 left-space-16 flex items-center gap-space-8">
                      <div className={cx(['w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm'])}>
                        <span className={cx(['material-symbols-rounded fill !text-[24px]', `text-${t.accent}`])}>{t.icon}</span>
                      </div>
                      <div className={cx(['px-space-12 py-space-4 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm font-mono-md text-[12px] font-extrabold tracking-wider', `text-${t.accent}`])}>TIER {t.code}</div>
                    </div>
                    {t.badge && (
                      <span className={cx(['absolute top-space-16 right-space-16 px-space-12 py-space-4 rounded-full text-white font-mono-md text-[10px] font-bold tracking-wider shadow-clay-sm', `bg-${t.accent}`])}>{t.badge}</span>
                    )}
                  </div>
      
                  {/* Body */}
                  <div className="p-space-32 flex-1 flex flex-col">
                    <h3 className="font-display-l text-[28px] font-extrabold text-text-primary leading-tight mb-space-4">{t.name}</h3>
                    <p className={cx(['font-mono-md text-[12px] uppercase tracking-wider font-semibold mb-space-16', `text-${t.accent}`])}>{t.tagline}</p>
      
                    {/* Examples grid */}
                    <div className="bg-bg-elevated/60 rounded-2xl p-space-16 mb-space-16">
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-space-8">VÍ DỤ VẬT PHẨM</span>
                      <div className="grid grid-cols-2 gap-space-8">
                        {t.examples.map((ex) => (
                          <div className="flex items-center gap-space-4">
                            <span className={cx(['material-symbols-rounded fill !text-[12px]', `text-${t.accent}`])}>check_circle</span>
                            <span className="font-mono-md text-[11px] text-text-primary tabular-nums">{ex}</span>
                          </div>
                        ))}
                      </div>
                    </div>
      
                    {/* Flow info */}
                    <div className="grid grid-cols-2 gap-space-8 mb-space-16">
                      <div className="bg-bg-elevated/60 rounded-xl p-space-12 flex items-center gap-space-8">
                        <span className={cx(['material-symbols-rounded fill !text-[18px]', `text-${t.accent}`])}>route</span>
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold">Quy trình</span>
                          <span className="font-mono-md text-[11px] text-text-primary font-bold truncate">{t.flowSteps}</span>
                        </div>
                      </div>
                      <div className="bg-bg-elevated/60 rounded-xl p-space-12 flex items-center gap-space-8">
                        <span className={cx(['material-symbols-rounded fill !text-[18px]', `text-${t.accent}`])}>schedule</span>
                        <div className="flex flex-col min-w-0">
                          <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold">ETA collector</span>
                          <span className="font-mono-md text-[11px] text-text-primary font-bold truncate">{t.estTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-bg-elevated/60 rounded-xl p-space-12 flex items-center gap-space-8 mb-space-16">
                      <span className={cx(['material-symbols-rounded fill !text-[18px]', `text-${t.accent}`])}>payments</span>
                      <span className="font-mono-md text-[11px] text-text-primary font-semibold">{t.payment}</span>
                    </div>
      
                    {/* CTA */}
                    <div className={cx(['mt-auto rounded-2xl px-space-24 py-space-12 flex items-center justify-between font-display font-bold text-[14px] shadow-clay group', `bg-${t.accent} text-white`])}>
                      <span>Bắt đầu Tier {t.code} →</span>
                      <span className="font-mono-md text-[11px] opacity-80">{t.flowSteps.split(' · ')[0]}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
      
            {/* Help section */}
            <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 grid grid-cols-3 gap-space-24">
              <div className="flex items-center gap-space-16">
                <div className="w-12 h-12 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[24px] text-tier-s">smart_toy</span>
                </div>
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block">AI HELP</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">Chụp ảnh, AI gợi ý tier</span>
                </div>
              </div>
              <div className="flex items-center gap-space-16">
                <div className="w-12 h-12 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[24px] text-info">help</span>
                </div>
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold block">PHÂN VÂN?</span>
                  <a href="/help#tiers" className="font-display font-bold text-[13px] text-text-primary hover:text-tier-s">Xem so sánh 4 Tier chi tiết</a>
                </div>
              </div>
              <div className="flex items-center gap-space-16">
                <div className="w-12 h-12 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">support_agent</span>
                </div>
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block">HOTLINE 24/7</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">1900-RELOOP miễn phí</span>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
