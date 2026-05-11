import { cx } from '@/lib/cx';
import RecycleScene from '../components/illustrations/RecycleScene';
import CollectorScene from '../components/illustrations/CollectorScene';
import HubWarehouse from '../components/illustrations/HubWarehouse';
import GreenPointsBadge from '../components/illustrations/GreenPointsBadge';

export default function Onboarding() {
  const screens = [
    {
      n: 1,
      eyebrow: 'BƯỚC 1/4',
      title: 'Chụp ảnh — AI nhận dạng tier',
      desc: 'Chỉ cần chụp 1 ảnh, AI sẽ phân loại Tier S/B/C/H trong < 3 giây và đề xuất giá phù hợp',
      illustration: 'recycle',
      accent: 'tier-s',
      clay: 'bg-clay-mint',
      feature: 'AI Vision · 95% accuracy',
    },
    {
      n: 2,
      eyebrow: 'BƯỚC 2/4',
      title: 'Collector đến tận nhà',
      desc: 'Đội ngũ verified Hub Tier 3 trong bán kính 3km · ETA trung bình 28 phút · Track real-time',
      illustration: 'collector',
      accent: 'info',
      clay: 'bg-clay-sky',
      feature: 'Live tracking · 24/7',
    },
    {
      n: 3,
      eyebrow: 'BƯỚC 3/4',
      title: 'Cân tại nhà · Chuyển ZaloPay',
      desc: 'Cân QTĐLVN 252 dán tem niêm phong · Tier S nhận tiền ngay 60s · Tier C tạm ứng + BOM thực sau Hub rã',
      illustration: 'warehouse',
      accent: 'amber-deep',
      clay: 'bg-clay-butter',
      feature: 'ZaloPay 60s · BOM minh bạch',
    },
    {
      n: 4,
      eyebrow: 'BƯỚC 4/4',
      title: 'Nhận GP · Đổi quà · Trồng cây',
      desc: '1 GP = 1.000đ · Đổi voucher Shopee/Grab/CGV · Hoặc trồng cây thật qua Gaia · Streak 7 ngày bonus',
      illustration: 'gp',
      accent: 'tier-s',
      clay: 'bg-clay-mint',
      feature: '8 đối tác · 200 GP = 1 cây',
    },
  ];
  
  const checks = [
    { icon: 'verified_user', label: 'Tài khoản đã xác thực', done: true },
    { icon: 'location_on', label: 'Q.7 trong vùng phục vụ', done: true },
    { icon: 'sms', label: 'Push + SMS notifications', done: true },
    { icon: 'account_balance_wallet', label: 'Liên kết ZaloPay', done: false },
    { icon: 'redeem', label: 'Nhận 100 GP welcome', done: false },
  ];
  return (
    <>
      <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-clay-mint via-bg-base to-clay-butter">
          {/* Top bar with skip */}
          <header className="px-[80px] py-space-24 flex items-center justify-between max-w-[1280px] mx-auto">
            <div className="flex items-center gap-space-12">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lime to-lime-deep shadow-clay-lime flex items-center justify-center">
                <span className="material-symbols-rounded fill text-text-on-lime !text-[22px]">recycling</span>
              </div>
              <span className="font-display font-extrabold text-[20px] text-text-primary">RE-LOOP</span>
            </div>
            <a href="/" className="font-mono-md text-[12px] text-text-tertiary hover:text-tier-s font-semibold">Bỏ qua hướng dẫn →</a>
          </header>
      
          {/* Progress steps */}
          <div className="max-w-[1280px] mx-auto px-[80px] mb-space-32">
            <div className="bg-bg-elevated rounded-full shadow-clay-sm border border-border-subtle p-space-8 flex items-center gap-space-8">
              {screens.map((s, i) => (
                <div className={cx(['flex-1 flex items-center gap-space-8', i === 0 ? 'flex-none w-auto' : ''])}>
                  {i > 0 && <div className={cx(['flex-1 h-1 rounded-full', i <= 1 ? 'bg-tier-s' : 'bg-bg-surface'])}></div>}
                  <div className={cx(['w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[14px] shadow-clay-sm shrink-0', i === 0 ? 'bg-tier-s text-white' : i === 1 ? 'bg-clay-mint border-2 border-tier-s text-tier-s animate-pulse' : 'bg-bg-surface border-2 border-border-subtle text-text-tertiary'])}>
                    {i === 0 ? '✓' : s.n}
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {/* Active screen (showing screen 2 as the focused one) */}
          <div className="max-w-[1280px] mx-auto px-[80px] grid grid-cols-2 gap-space-48 items-center mb-space-48">
            <div>
              <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-info font-bold bg-clay-sky border-2 border-info/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-16">
                <span className="material-symbols-rounded fill !text-[14px]">local_shipping</span>
                BƯỚC 2/4
              </span>
              <h1 className="font-display-l text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-16">Collector đến tận nhà</h1>
              <p className="font-body-lg text-body-lg text-text-secondary mb-space-24 max-w-[480px]">Đội ngũ verified Hub Tier 3 trong bán kính 3km. ETA trung bình 28 phút. Track real-time qua bản đồ.</p>
              <div className="flex flex-wrap gap-space-12 mb-space-32">
                <div className="bg-clay-sky border-2 border-info/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                  <span className="material-symbols-rounded fill !text-[24px] text-info">my_location</span>
                  <div className="flex flex-col">
                    <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-semibold">Live tracking</span>
                    <span className="font-mono-md text-[13px] text-text-primary font-bold">Real-time GPS</span>
                  </div>
                </div>
                <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                  <span className="material-symbols-rounded fill !text-[24px] text-tier-s">verified_user</span>
                  <div className="flex flex-col">
                    <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold">Hub Tier</span>
                    <span className="font-mono-md text-[13px] text-text-primary font-bold">A/B/C verified</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-space-12">
                <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay">
                  <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
                  Quay lại
                </button>
                <button className="bg-text-primary text-white px-space-32 py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition flex-1 justify-center">
                  Tiếp tục bước 3
                  <span className="material-symbols-rounded fill !text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-clay-lg border-[6px] border-bg-elevated bg-gradient-to-br from-clay-sky to-clay-mint">
                <CollectorScene className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </div>
      
          {/* All steps preview row */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48">
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold block mb-space-16">TOÀN BỘ HÀNH TRÌNH</span>
            <div className="grid grid-cols-4 gap-space-16">
              {screens.map((s, i) => (
                <div className={cx(['rounded-[24px] shadow-clay border-2 overflow-hidden flex flex-col', s.clay, `border-${s.accent.replace('text-', '')}/30`, i === 1 && 'ring-4 ring-info/40'])}>
                  <div className="relative h-[120px] bg-gradient-to-br from-bg-elevated/40 to-transparent">
                    {s.illustration === 'recycle' && <RecycleScene className="absolute inset-0 w-full h-full" />}
                    {s.illustration === 'collector' && <CollectorScene className="absolute inset-0 w-full h-full" />}
                    {s.illustration === 'warehouse' && <HubWarehouse className="absolute inset-0 w-full h-full" />}
                    {s.illustration === 'gp' && <GreenPointsBadge className="absolute inset-0 w-full h-full" />}
                    <span className={cx(['absolute top-space-8 left-space-8 w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-[14px] shadow-clay-sm bg-bg-elevated', `text-${s.accent}`])}>{s.n}</span>
                  </div>
                  <div className="p-space-16 flex flex-col gap-space-4">
                    <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold', `text-${s.accent}`])}>{s.eyebrow}</span>
                    <h3 className="font-display font-bold text-[14px] text-text-primary leading-tight">{s.title}</h3>
                    <span className="font-mono-md text-[11px] text-text-secondary mt-space-4">{s.feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
      
          {/* Setup checklist + geo waitlist */}
          <section className="max-w-[1280px] mx-auto px-[80px] grid grid-cols-2 gap-space-24 mb-space-48">
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
              <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[16px]">checklist</span>
                SETUP TÀI KHOẢN
              </span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-16">3/5 mục đã hoàn tất</h2>
              <ul className="flex flex-col gap-space-12">
                {checks.map((c) => (
                  <li className={cx(['flex items-center gap-space-12 p-space-12 rounded-2xl border-2 shadow-clay-sm', c.done ? 'bg-clay-mint border-tier-s/30' : 'bg-bg-surface border-border-subtle'])}>
                    <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm', c.done ? 'bg-tier-s text-white' : 'bg-bg-elevated border border-border-subtle'])}>
                      <span className={cx(['material-symbols-rounded fill !text-[18px]', c.done ? 'text-white' : 'text-text-tertiary'])}>{c.done ? 'check' : c.icon}</span>
                    </div>
                    <span className={cx(['font-display font-bold text-[14px] flex-1', c.done ? 'text-text-primary' : 'text-text-secondary'])}>{c.label}</span>
                    {!c.done && <span className="font-mono-md text-[11px] text-tier-s font-bold hover:underline cursor-pointer">Hoàn tất →</span>}
                  </li>
                ))}
              </ul>
            </div>
      
            <div id="waitlist" className="bg-clay-butter rounded-[28px] shadow-clay border-2 border-amber-deep/30 p-space-32 flex flex-col">
              <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[16px]">map</span>
                QUẬN KHÁC?
              </span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-16">Đăng ký waitlist</h2>
              <p className="font-body-md text-[13px] text-text-secondary mb-space-16">RE-LOOP đang mở rộng — Q.1, Q.3, Thủ Đức dự kiến T07/2026. Đăng ký để được thông báo + 50 GP welcome.</p>
              <div className="bg-bg-elevated rounded-2xl border border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12 mb-space-12">
                <span className="material-symbols-rounded !text-[20px] text-text-tertiary">location_on</span>
                <input type="text" placeholder="Quận/huyện của bạn" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" />
              </div>
              <button className="bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center justify-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[18px]">notifications_active</span>
                Đăng ký waitlist
              </button>
              <div className="mt-space-16 grid grid-cols-3 gap-space-8">
                {[
                  { name: 'Q.1', count: '847 đăng ký' },
                  { name: 'Thủ Đức', count: '512 đăng ký' },
                  { name: 'Q.3', count: '298 đăng ký' },
                ].map((d) => (
                  <div className="bg-bg-elevated/60 rounded-xl p-space-8 text-center">
                    <span className="font-display font-bold text-[12px] text-text-primary block">{d.name}</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary">{d.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
