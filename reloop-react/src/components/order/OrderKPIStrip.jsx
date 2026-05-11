import { cx } from '@/lib/cx';

export default function OrderKPIStrip({ kpis }) {
  return (
    <>
      <section className="grid grid-cols-4 gap-space-16 mb-space-32">
        {kpis.map((k) => (
          <div className={cx(['rounded-[24px] shadow-clay border-2 p-space-24 relative overflow-hidden', k.clay, `border-${k.accent.replace('text-', '')}/30`])}>
            <div className="flex items-start justify-between mb-space-12">
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                <span className={cx(['material-symbols-rounded fill !text-[24px]', k.accent])}>{k.icon}</span>
              </div>
            </div>
            <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold block', k.accent])}>{k.label}</span>
            <span className="font-display font-extrabold text-[28px] text-text-primary tabular-nums leading-none mt-space-4 block">{k.value}</span>
            {k.sub && <span className="font-mono-md text-[11px] text-text-secondary mt-space-8 block">{k.sub}</span>}
            {k.progress !== undefined && (
              <div className="mt-space-12">
                <div className="h-1.5 bg-bg-elevated/60 rounded-full overflow-hidden">
                  <div className={cx(['h-full rounded-full bg-gradient-to-r from-tier-s via-amber-deep to-tier-h'])} style={{ 'width': `${k.progress}%` }}></div>
                </div>
                <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums mt-space-4 block">{k.progress}% đã trôi</span>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
