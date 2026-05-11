import { cx } from '@/lib/cx';

export default function SpotCheckCard({ recentChecks, passRate, totalChecks }) {
  
  const statusMeta = {
    PASSED: { label: 'Đạt 100%', clay: 'bg-clay-mint', accent: 'text-tier-s', icon: 'check_circle' },
    MINOR: { label: 'Sai số nhỏ', clay: 'bg-clay-butter', accent: 'text-amber-deep', icon: 'warning' },
    MAJOR: { label: 'Cảnh báo', clay: 'bg-clay-blush', accent: 'text-tier-h', icon: 'error' },
  };
  return (
    <>
      <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
        <div className="flex items-end justify-between mb-space-24">
          <div>
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
              <span className="material-symbols-rounded fill !text-[16px]">policy</span>
              HUB SPOT CHECK
            </span>
            <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Kiểm tra ngẫu nhiên 10%</h3>
            <p className="font-body-md text-[12px] text-text-secondary mt-space-4 max-w-[440px]">
              RE-LOOP audit ngẫu nhiên 10% đơn Tier C tại Hub · Kết quả công khai để bạn theo dõi tính minh bạch
            </p>
          </div>
          <div className="bg-clay-mint rounded-2xl p-space-16 border-2 border-tier-s/30 shadow-clay-sm flex flex-col items-center min-w-[120px]">
            <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold">PASS RATE</span>
            <span className="font-display font-extrabold text-[32px] text-tier-s tabular-nums leading-none mt-space-4">{passRate}%</span>
            <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4">{totalChecks} lần check</span>
          </div>
        </div>
      
        <div className="flex flex-col divide-y divide-border-subtle">
          {recentChecks.map((c) => {
            const meta = statusMeta[c.status];
            return (
              <div className="flex items-center gap-space-16 py-space-16">
                <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', meta.clay])}>
                  <span className={cx(['material-symbols-rounded fill !text-[22px]', meta.accent])}>{meta.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-space-8 mb-space-4">
                    <span className="font-display font-bold text-[14px] text-text-primary truncate">{c.hubName}</span>
                    <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold px-space-8 py-[2px] rounded-full border', meta.accent, `border-${meta.accent.replace('text-', '')}/40`, meta.clay])}>{meta.label}</span>
                  </div>
                  <span className="font-mono-md text-[11px] text-text-tertiary">{c.date} · {c.passed}/{c.itemsChecked} mục đạt · {c.evidenceCount} ảnh evidence</span>
                </div>
                <a href="#" className="font-mono-md text-[11px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4 shrink-0">
                  Xem
                  <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
