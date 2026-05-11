import { cx } from '@/lib/cx';
import AuthPhone from '../illustrations/AuthPhone';

export default function AuthSidebar({ flow }) {
  const benefits = flow === 'signup'
    ? [
        { label: '+100 GP đăng ký', icon: 'redeem' },
        { label: '+100 GP referral', icon: 'group_add' },
        { label: '+50 GP cho đơn đầu', icon: 'shopping_bag' },
        { label: '1 cây thật trồng Cần Giờ', icon: 'park' },
      ]
    : [
        { label: 'ZaloPay 60s sau cân', icon: 'payments' },
        { label: 'Hub Tier 3 ISO 14001', icon: 'verified' },
        { label: 'BOM thực minh bạch', icon: 'fact_check' },
        { label: 'Trust Score & GP', icon: 'workspace_premium' },
      ];
  
  const trustMarks = [
    { label: 'NĐ 13/2023', sub: 'Bảo mật dữ liệu', icon: 'gavel', clay: 'bg-clay-sky', accent: 'text-info' },
    { label: 'E2E encryption', sub: 'AES-256 + TLS 1.3', icon: 'lock', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { label: 'Triton 2FA', sub: 'Hash xác thực', icon: 'security', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
  ];
  return (
    <>
      <aside className="flex flex-col gap-space-12 min-w-0">
        {/* Hero illustration (capped height to avoid taking too much space) */}
        <div className="relative w-full max-h-[300px] flex items-center justify-center">
          <AuthPhone className="w-full h-full max-h-[300px]" />
        </div>
      
        {/* Benefits */}
        <div className="bg-clay-mint rounded-[20px] shadow-clay border-2 border-tier-s/30 p-space-16">
          <span className="font-mono-md text-[10px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-4 mb-space-8">
            <span className="material-symbols-rounded fill !text-[12px]">card_giftcard</span>
            {flow === 'signup' ? 'QUÀ ĐĂNG KÝ · 250 GP' : 'QUYỀN LỢI THÀNH VIÊN'}
          </span>
          <ul className="flex flex-col gap-space-4">
            {benefits.map((b) => (
              <li className="flex items-center gap-space-8 min-w-0">
                <span className="material-symbols-rounded fill !text-[14px] text-tier-s shrink-0">{b.icon}</span>
                <span className="font-body-md text-[12px] text-text-primary truncate">{b.label}</span>
              </li>
            ))}
          </ul>
        </div>
      
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-space-8">
          <div className="bg-bg-elevated rounded-xl shadow-clay-sm border border-border-subtle p-space-8 text-center min-w-0">
            <span className="font-display font-extrabold text-[16px] text-tier-s tabular-nums leading-none block">12.4K</span>
            <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider mt-space-4 block truncate">Hộ Q.7</span>
          </div>
          <div className="bg-bg-elevated rounded-xl shadow-clay-sm border border-border-subtle p-space-8 text-center min-w-0">
            <span className="font-display font-extrabold text-[16px] text-tier-s tabular-nums leading-none block">580T</span>
            <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider mt-space-4 block truncate">CO₂ giảm</span>
          </div>
          <div className="bg-bg-elevated rounded-xl shadow-clay-sm border border-border-subtle p-space-8 text-center min-w-0">
            <span className="font-display font-extrabold text-[16px] text-tier-s tabular-nums leading-none block">94%</span>
            <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider mt-space-4 block truncate">BOM verify</span>
          </div>
        </div>
      
        {/* Trust marks */}
        <div className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-border-subtle p-space-16">
          <span className="font-mono-md text-[10px] uppercase tracking-wider text-tier-s font-bold block mb-space-8">CAM KẾT BẢO MẬT</span>
          <ul className="flex flex-col gap-space-8">
            {trustMarks.map((t) => (
              <li className="flex items-center gap-space-8 min-w-0">
                <div className={cx(['w-7 h-7 rounded-lg flex items-center justify-center shadow-clay-sm shrink-0', t.clay])}>
                  <span className={cx(['material-symbols-rounded fill !text-[12px]', t.accent])}>{t.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-[11px] text-text-primary block leading-tight truncate">{t.label}</span>
                  <span className="font-mono-md text-[10px] text-text-tertiary truncate block">{t.sub}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      
        {/* Help */}
        <a href="/help" className="bg-clay-sky rounded-[20px] shadow-clay-sm border-2 border-info/30 p-space-12 flex items-center gap-space-8 hover:shadow-clay transition min-w-0">
          <span className="material-symbols-rounded fill !text-[20px] text-info shrink-0">support_agent</span>
          <div className="flex-1 min-w-0">
            <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">CẦN TRỢ GIÚP?</span>
            <span className="font-display font-bold text-[12px] text-text-primary truncate block">1900-RELOOP miễn phí</span>
          </div>
        </a>
      </aside>
    </>
  );
}
