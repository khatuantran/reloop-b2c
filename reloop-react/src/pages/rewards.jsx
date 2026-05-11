import { cx } from '@/lib/cx';
import GreenPointsBadge from '../components/illustrations/GreenPointsBadge';
import EcoTree from '../components/illustrations/EcoTree';

export default function Rewards() {
  const gpBalance = 4250;
  const expiringIn30Days = 320;
  const earnedThisMonth = 580;
  
  const loyaltyTiers = [
    { name: 'Bronze', range: '0–1.000 GP', current: false, achieved: true, perks: ['Earn 1.0×', 'Voucher cơ bản', 'Hotline 8h-22h'], clay: 'bg-clay-peach', accent: 'text-tier-c', icon: 'workspace_premium' },
    { name: 'Silver', range: '1.000–10.000 GP', current: true, achieved: false, perks: ['Earn 1.2×', 'Voucher đặc quyền', 'Hotline 24/7', 'Skip queue Tier B'], clay: 'bg-clay-sky', accent: 'text-info', icon: 'military_tech' },
    { name: 'Gold', range: '10.000+ GP', current: false, achieved: false, perks: ['Earn 1.5×', 'Quà tặng sinh nhật', 'Concierge priority', 'Tax invoice tự động'], clay: 'bg-clay-butter', accent: 'text-amber-deep', icon: 'emoji_events' },
  ];
  
  const earnRules = [
    { tier: 'S', rate: '1 GP / 1.000đ', condition: 'Cộng ngay khi ZaloPay xác nhận', icon: 'water_bottle', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { tier: 'B', rate: '1.2 GP / 1.000đ', condition: 'Cộng sau khi giao hàng + xác nhận', icon: 'kitchen', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { tier: 'C', rate: '1.5 GP / 1.000đ', condition: 'Cộng sau khi Hub verify BOM thực', icon: 'memory', clay: 'bg-clay-peach', accent: 'text-tier-c' },
    { tier: 'H', rate: '50 GP / lần', condition: 'Cộng khi nhận env certificate', icon: 'warning', clay: 'bg-clay-blush', accent: 'text-tier-h' },
  ];
  
  const vouchers = [
    { partner: 'Shopee', logo: 'shopping_bag', name: 'Voucher 50.000đ', cost: 200, fee: 'Free', color: 'text-tier-h', clay: 'bg-clay-blush' },
    { partner: 'Grab', logo: 'directions_car', name: 'Voucher GrabFood 30k', cost: 120, fee: 'Free', color: 'text-tier-s', clay: 'bg-clay-mint' },
    { partner: 'Highlands', logo: 'local_cafe', name: 'Voucher cà phê 35k', cost: 140, fee: 'Free', color: 'text-amber-deep', clay: 'bg-clay-butter' },
    { partner: 'CGV', logo: 'theaters', name: 'Vé xem phim 90k', cost: 360, fee: '5% partner fee', color: 'text-info', clay: 'bg-clay-sky' },
    { partner: 'Gaia', logo: 'park', name: '1 cây thật trồng Cần Giờ', cost: 200, fee: 'Free', color: 'text-tier-s', clay: 'bg-clay-mint', highlighted: true },
    { partner: 'Greenpeace VN', logo: 'volunteer_activism', name: 'Donation 100.000đ', cost: 100, fee: '0% — toàn bộ vào quỹ', color: 'text-tier-s', clay: 'bg-clay-mint' },
    { partner: 'ZaloPay', logo: 'payments', name: 'Cash-out 8.000đ', cost: 1000, fee: 'Tỉ giá đặc biệt', color: 'text-info', clay: 'bg-clay-sky' },
    { partner: 'Lazada', logo: 'shopping_cart', name: 'Voucher 40.000đ', cost: 160, fee: 'Free', color: 'text-tier-h', clay: 'bg-clay-blush' },
  ];
  
  const streakDays = 5;
  const streakGrace = 1;
  const earnHistory = [
    { date: '10/05/2026', desc: 'Đơn RL-2026-001241 (PET 8.4kg)', gp: 214, type: 'earn' },
    { date: '08/05/2026', desc: 'Streak 5 ngày bonus', gp: 50, type: 'streak' },
    { date: '05/05/2026', desc: 'Đổi voucher Grab 30k', gp: -120, type: 'redeem' },
    { date: '03/05/2026', desc: 'Đơn RL-2026-001239 (Mainboard)', gp: 312, type: 'earn' },
    { date: '01/05/2026', desc: 'Referral bạn Hà tham gia', gp: 100, type: 'referral' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Trang chủ
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">redeem</span>
                    GREEN POINTS · SILVER TIER
                  </span>
                  <h1 className="font-display-l text-[72px] font-extrabold leading-[1] tracking-tight text-text-primary tabular-nums mb-space-8">{gpBalance.toLocaleString('vi-VN')} <span className="text-[28px] text-tier-s">GP</span></h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    Earn <strong className="text-tier-s">+{earnedThisMonth} GP</strong> tháng này · <strong className="text-amber-deep">{expiringIn30Days} GP</strong> hết hạn sau 30 ngày
                  </p>
                  <div className="flex flex-wrap gap-space-12">
                    <button className="bg-lime text-text-on-lime px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-lime text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                      <span className="material-symbols-rounded fill !text-[18px]">redeem</span>
                      Đổi quà ngay
                    </button>
                    <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay transition">
                      <span className="material-symbols-rounded fill !text-[18px]">history</span>
                      Lịch sử GP
                    </button>
                  </div>
                </div>
                <div className="relative h-[300px]">
                  <GreenPointsBadge className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Loyalty tier ladder */}
            <section className="mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">LOYALTY</span>
                  <h2 className="font-h1 text-h1 text-text-primary mt-space-8">3 hạng thành viên</h2>
                </div>
                <span className="font-mono-md text-[13px] text-text-secondary">No-downgrade rule · Không bao giờ tụt hạng</span>
              </div>
              <div className="grid grid-cols-3 gap-space-16">
                {loyaltyTiers.map((t) => (
                  <div className={cx(['rounded-[28px] shadow-clay border-2 p-space-32 relative overflow-hidden', t.clay, t.current ? `border-${t.accent.replace('text-', '')}` : `border-${t.accent.replace('text-', '')}/30`, t.current && 'ring-4 ring-tier-s/30'])}>
                    {t.current && (
                      <span className="absolute top-space-16 right-space-16 px-space-12 py-[4px] rounded-full bg-text-primary text-white font-mono-md text-[10px] font-bold tracking-wider shadow-clay-sm">HẠNG HIỆN TẠI</span>
                    )}
                    {t.achieved && !t.current && (
                      <span className="absolute top-space-16 right-space-16 px-space-12 py-[4px] rounded-full bg-tier-s/20 border border-tier-s/40 text-tier-s font-mono-md text-[10px] font-bold tracking-wider">ĐÃ QUA</span>
                    )}
                    <div className="w-16 h-16 rounded-3xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-16">
                      <span className={cx(['material-symbols-rounded fill !text-[32px]', t.accent])}>{t.icon}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-[28px] text-text-primary leading-none">{t.name}</h3>
                    <span className={cx(['font-mono-md text-[12px] uppercase tracking-wider font-semibold mt-space-4 block', t.accent])}>{t.range}</span>
                    <div className="h-px bg-border-subtle my-space-16"></div>
                    <ul className="flex flex-col gap-space-8">
                      {t.perks.map((p) => (
                        <li className="flex items-center gap-space-8">
                          <span className={cx(['material-symbols-rounded fill !text-[16px]', t.accent])}>check_circle</span>
                          <span className="font-body-md text-[13px] text-text-primary">{p}</span>
                        </li>
                      ))}
                    </ul>
                    {t.current && (
                      <div className="mt-space-16 bg-bg-elevated/60 rounded-2xl p-space-12">
                        <div className="flex items-center justify-between mb-space-8">
                          <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">Tới Gold</span>
                          <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">5.750 GP nữa</span>
                        </div>
                        <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-info to-tier-s rounded-full" style={{ 'width': '42%' }}></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
      
            {/* Earn rules per tier */}
            <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">CÁCH KIẾM GP</span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Tỉ lệ earn theo Tier</h2>
                </div>
                <div className="bg-clay-butter rounded-2xl px-space-16 py-space-8 border border-amber-deep/30 shadow-clay-sm flex items-center gap-space-8">
                  <span className="material-symbols-rounded fill !text-[16px] text-amber-deep">timer</span>
                  <span className="font-mono-md text-[12px] text-amber-deep font-bold">Hết hạn 12 tháng</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-space-16">
                {earnRules.map((r) => (
                  <div className={cx(['rounded-2xl p-space-24 shadow-clay-sm border-2 flex flex-col gap-space-8', r.clay, `border-${r.accent.replace('text-', '')}/20`])}>
                    <div className="flex items-center gap-space-8">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                        <span className={cx(['material-symbols-rounded fill !text-[20px]', r.accent])}>{r.icon}</span>
                      </div>
                      <span className={cx(['font-mono-md text-[11px] uppercase tracking-wider font-bold', r.accent])}>Tier {r.tier}</span>
                    </div>
                    <span className="font-display font-extrabold text-[20px] text-text-primary tabular-nums">{r.rate}</span>
                    <span className="font-body-md text-[11px] text-text-secondary">{r.condition}</span>
                  </div>
                ))}
              </div>
              <div className="mt-space-16 p-space-16 bg-clay-mint/40 rounded-2xl border border-tier-s/20 flex items-start gap-space-12">
                <span className="material-symbols-rounded fill !text-[20px] text-tier-s shrink-0">info</span>
                <p className="font-body-md text-[12px] text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Rounding rule:</strong> GP làm tròn xuống. <strong className="text-text-primary">Streak grace:</strong> 1 lần/quý gián đoạn không reset. <strong className="text-text-primary">Tier multiplier:</strong> Silver 1.2× — Gold 1.5×.
                </p>
              </div>
            </section>
      
            {/* Voucher catalog */}
            <section className="mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">VOUCHER & CASH-OUT</span>
                  <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Đổi GP lấy quà</h2>
                </div>
                <span className="font-mono-md text-[13px] text-text-secondary">{vouchers.length} đối tác · Cập nhật hằng tuần</span>
              </div>
              <div className="grid grid-cols-4 gap-space-16">
                {vouchers.map((v) => (
                  <div className={cx(['rounded-[24px] shadow-clay border-2 p-space-24 flex flex-col gap-space-12 hover:-translate-y-[2px] transition', v.clay, `border-${v.color.replace('text-', '')}/20`, v.highlighted && 'ring-2 ring-tier-s/40'])}>
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                        <span className={cx(['material-symbols-rounded fill !text-[24px]', v.color])}>{v.logo}</span>
                      </div>
                      {v.highlighted && <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[9px] font-bold tracking-wider shadow-clay-sm">HOT</span>}
                    </div>
                    <div>
                      <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold block', v.color])}>{v.partner}</span>
                      <h3 className="font-display font-bold text-[14px] text-text-primary leading-tight mt-space-4">{v.name}</h3>
                    </div>
                    <div className="bg-bg-elevated/60 rounded-2xl p-space-8 flex items-center justify-between">
                      <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Phí partner</span>
                      <span className="font-mono-md text-[11px] text-text-primary font-semibold">{v.fee}</span>
                    </div>
                    <button className={cx(['w-full py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] flex items-center justify-center gap-space-8 transition', gpBalance >= v.cost ? 'bg-text-primary text-white hover:-translate-y-[2px]' : 'bg-bg-surface text-text-tertiary cursor-not-allowed border border-border-subtle'])}>
                      {gpBalance >= v.cost ? (
                        <>
                          <span className="material-symbols-rounded fill !text-[16px]">redeem</span>
                          Đổi {v.cost} GP
                        </>
                      ) : (
                        <>
                          <span className="material-symbols-rounded !text-[16px]">lock</span>
                          Cần {v.cost} GP
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </section>
      
            {/* Streak + History grid */}
            <section className="grid grid-cols-[1fr_2fr] gap-space-24">
              {/* Streak */}
              <div className="bg-clay-butter rounded-[28px] shadow-clay border-2 border-amber-deep/30 p-space-32">
                <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">local_fire_department</span>
                </div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-bold">STREAK HÀNG NGÀY</span>
                <h3 className="font-display font-extrabold text-[56px] text-text-primary tabular-nums leading-none mt-space-8">{streakDays} <span className="text-[18px] text-text-tertiary">ngày</span></h3>
                <p className="font-body-md text-[12px] text-text-secondary mt-space-12 mb-space-16">Đặt đơn liên tiếp · Bonus +50 GP mỗi 5 ngày</p>
                <div className="flex gap-space-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                    <div className={cx(['flex-1 aspect-square rounded-xl flex items-center justify-center shadow-clay-sm', d <= streakDays ? 'bg-amber-deep text-white' : 'bg-bg-elevated border border-border-subtle text-text-tertiary'])}>
                      <span className={cx(['material-symbols-rounded fill !text-[18px]'])}>{d <= streakDays ? 'check' : 'circle'}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-space-16 p-space-12 bg-bg-elevated/60 rounded-2xl flex items-center justify-between">
                  <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">Grace pass</span>
                  <span className="font-mono-md text-[13px] text-text-primary font-bold tabular-nums">{streakGrace}/quý</span>
                </div>
              </div>
      
              {/* Earn history */}
              <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                <div className="flex items-end justify-between mb-space-16">
                  <div>
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">LỊCH SỬ GP</span>
                    <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Vào / Ra gần đây</h3>
                  </div>
                  <button className="font-mono-md text-[12px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4">
                    Xem tất cả
                    <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                  </button>
                </div>
                <div className="flex flex-col divide-y divide-border-subtle">
                  {earnHistory.map((h) => {
                    const isPositive = h.gp > 0;
                    const typeIcon = { earn: 'recycling', streak: 'local_fire_department', redeem: 'redeem', referral: 'group_add' }[h.type] || 'circle';
                    const typeClay = isPositive ? 'bg-clay-mint' : 'bg-clay-blush';
                    const typeAccent = isPositive ? 'text-tier-s' : 'text-tier-h';
                    return (
                      <div className="flex items-center gap-space-16 py-space-16">
                        <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', typeClay])}>
                          <span className={cx(['material-symbols-rounded fill !text-[18px]', typeAccent])}>{typeIcon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[14px] text-text-primary block truncate">{h.desc}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{h.date}</span>
                        </div>
                        <span className={cx(['font-mono-md text-[16px] font-bold tabular-nums', isPositive ? 'text-tier-s' : 'text-tier-h'])}>{isPositive ? '+' : ''}{h.gp} GP</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
      
            {/* Referral CTA */}
            <section className="mt-space-32 bg-clay-mint rounded-[28px] shadow-clay border-2 border-tier-s/30 p-space-32 grid grid-cols-[1fr_auto] gap-space-32 items-center relative overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-[300px] opacity-30">
                <EcoTree className="w-full h-full" />
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-tier-s">group_add</span>
                </div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold">REFERRAL</span>
                <h3 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-12">Mời bạn bè · Cả 2 cùng nhận 100 GP</h3>
                <p className="font-body-md text-[13px] text-text-secondary mb-space-16">Bạn của bạn đặt đơn đầu tiên thành công → cả 2 nhận thưởng. Không giới hạn số bạn mời.</p>
                <div className="bg-bg-elevated/95 backdrop-blur rounded-2xl shadow-clay-sm border border-border-subtle p-space-12 flex items-center gap-space-12 inline-flex">
                  <span className="material-symbols-rounded !text-[20px] text-tier-s">link</span>
                  <span className="font-mono-md text-[13px] text-text-primary font-semibold">reloop.vn/r/linh-q7</span>
                  <button className="bg-text-primary text-white px-space-12 py-[6px] rounded-xl font-mono-md text-[11px] font-bold shadow-clay-sm hover:-translate-y-[1px] transition">COPY</button>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
