import { cx } from '@/lib/cx';
import AuthShell from '../../components/auth/AuthShell';
import MilestoneCelebration from '../../components/illustrations/MilestoneCelebration';

export default function Done() {
  const steps = [
    { n: 1, label: 'Số điện thoại', icon: 'smartphone', href: '/signup.html' },
    { n: 2, label: 'Nhập OTP', icon: 'sms', href: '/signup/otp.html' },
    { n: 3, label: 'Thông tin', icon: 'person', href: '/signup/info.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/signup/address.html' },
    { n: 5, label: 'Hoàn tất', icon: 'celebration', href: '/signup/done.html' },
  ];
  
  const rewards = [
    { label: '+100 GP đăng ký', icon: 'redeem', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { label: '+100 GP referral linh-q7', icon: 'group_add', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { label: '+50 GP cho đơn đầu', icon: 'shopping_bag', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { label: '1 cây thật trồng Cần Giờ', icon: 'park', clay: 'bg-clay-sky', accent: 'text-info' },
  ];
  
  const nextSteps = [
    { label: 'Đặt đơn đầu tiên', sub: 'Tier S/B/C/H · 0đ phí', icon: 'add_shopping_cart', href: '/orders/new.html', highlight: true },
    { label: 'Xem hướng dẫn 4 bước', sub: 'Onboarding tour', icon: 'tour', href: '/onboarding.html' },
    { label: 'Xem chế độ Đơn giản', sub: 'Cho người lớn tuổi', icon: 'accessibility_new', href: '/easy.html' },
    { label: 'Mời bạn bè +100 GP', sub: 'Share referral link', icon: 'group_add', href: '/rewards.html' },
  ];
  return (
    <>
      <AuthShell flow="signup" steps={steps} activeStep={5}>
          <div className="max-w-[1000px] mx-auto">
            {/* Hero done card */}
            <div className="bg-gradient-to-br from-clay-mint via-clay-butter to-clay-peach rounded-[40px] shadow-clay border-2 border-tier-s/30 p-space-48 mb-space-24 relative overflow-hidden">
              <div className="grid grid-cols-[1fr_280px] gap-space-32 items-center relative z-10">
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold mb-space-8 block">🎉 BƯỚC 5/5 · HOÀN TẤT</span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-[1] tracking-tight text-text-primary mb-space-12">Chào mừng <span className="text-tier-s">Linh</span> 🌱</h1>
                  <p className="font-body-lg text-[16px] text-text-secondary mb-space-24 max-w-[480px]">
                    Tài khoản RE-LOOP đã sẵn sàng · 250 GP welcome đã cộng vào ví · Đang chuyển trang chủ trong 5 giây...
                  </p>
                  <div className="flex items-center gap-space-12 flex-wrap">
                    <span className="bg-bg-elevated/95 backdrop-blur border-2 border-tier-s/40 rounded-full px-space-16 py-space-8 font-mono-md text-[12px] text-tier-s font-bold inline-flex items-center gap-space-8 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px]">verified</span>
                      +84 901 234 567 verified
                    </span>
                    <span className="bg-bg-elevated/95 backdrop-blur border-2 border-tier-s/40 rounded-full px-space-16 py-space-8 font-mono-md text-[12px] text-tier-s font-bold inline-flex items-center gap-space-8 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px]">workspace_premium</span>
                      Bronze tier · Trust 50
                    </span>
                  </div>
                </div>
                <div className="relative aspect-square">
                  <MilestoneCelebration className="w-full h-full" />
                </div>
              </div>
            </div>
      
            {/* Welcome rewards */}
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 mb-space-24">
              <div className="flex items-end justify-between mb-space-16">
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">card_giftcard</span>
                    QUÀ ĐĂNG KÝ ĐÃ CỘNG
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Tổng 250 GP + 1 cây trồng</h2>
                </div>
                <a href="/rewards" className="font-mono-md text-[12px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4">
                  Xem ví GP
                  <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-4 gap-space-12">
                {rewards.map((r) => (
                  <div className={cx(['rounded-2xl shadow-clay-sm border-2 p-space-16 flex flex-col items-center gap-space-8 text-center', r.clay, `border-${r.accent.replace('text-', '')}/30`])}>
                    <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                      <span className={cx(['material-symbols-rounded fill !text-[24px]', r.accent])}>{r.icon}</span>
                    </div>
                    <span className="font-display font-bold text-[12px] text-text-primary leading-tight">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
      
            {/* Next steps */}
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
              <div className="mb-space-16">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold">BƯỚC TIẾP THEO</span>
                <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Bạn muốn làm gì trước?</h2>
              </div>
              <div className="grid grid-cols-2 gap-space-12">
                {nextSteps.map((s) => (
                  <a href={s.href} className={cx(['rounded-2xl border-2 p-space-16 shadow-clay-sm hover:shadow-clay hover:-translate-y-[2px] transition flex items-center gap-space-12', s.highlight ? 'bg-lime border-lime-deep' : 'bg-bg-surface border-border-subtle hover:border-tier-s'])}>
                    <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', s.highlight ? 'bg-bg-elevated' : 'bg-clay-mint'])}>
                      <span className={cx(['material-symbols-rounded fill !text-[24px]', s.highlight ? 'text-tier-s' : 'text-tier-s'])}>{s.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={cx(['font-display font-bold text-[14px] block', s.highlight ? 'text-text-on-lime' : 'text-text-primary'])}>{s.label}</span>
                      <span className={cx(['font-mono-md text-[11px]', s.highlight ? 'text-text-on-lime/80' : 'text-text-tertiary'])}>{s.sub}</span>
                    </div>
                    <span className={cx(['material-symbols-rounded !text-[20px]', s.highlight ? 'text-text-on-lime' : 'text-text-tertiary'])}>arrow_forward</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AuthShell>
    </>
  );
}
