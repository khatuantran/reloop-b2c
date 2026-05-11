import { cx } from '@/lib/cx';

export default function OrderStepperBar({ steps, activeStep, tierAccent = 'tier-s' }) {
  
  const accentClay = {
    'tier-s': 'bg-clay-mint border-tier-s text-tier-s',
    'tier-c': 'bg-clay-peach border-tier-c text-tier-c',
    'amber-deep': 'bg-clay-butter border-amber-deep text-amber-deep',
    'tier-h': 'bg-clay-blush border-tier-h text-tier-h',
  };
  
  const accentSolid = {
    'tier-s': 'bg-tier-s text-white border-tier-s',
    'tier-c': 'bg-tier-c text-white border-tier-c',
    'amber-deep': 'bg-amber-deep text-white border-amber-deep',
    'tier-h': 'bg-tier-h text-white border-tier-h',
  };
  
  const accentBar = {
    'tier-s': 'bg-tier-s',
    'tier-c': 'bg-tier-c',
    'amber-deep': 'bg-amber-deep',
    'tier-h': 'bg-tier-h',
  };
  return (
    <>
      <div className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-border-subtle p-space-16 mb-space-32">
        <div className="flex items-center gap-space-4">
          {steps.map((s, i) => {
            const done = s.n < activeStep;
            const active = s.n === activeStep;
            const Tag = (done && s.href) ? 'a' : 'div';
            return (
              <>
                <Tag href={done ? s.href : undefined} className={cx(['flex items-center gap-space-8 flex-1 min-w-0', !done && !active && 'pointer-events-none opacity-60'])}>
                  <div className={cx([
                    'w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 border-2',
                    done ? accentSolid[tierAccent] : active ? accentClay[tierAccent] + ' animate-pulse' : 'bg-bg-surface border-border-subtle text-text-tertiary'
                  ])}>
                    <span className="material-symbols-rounded fill !text-[18px]">{done ? 'check' : s.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={cx(['font-mono-md text-[9px] uppercase tracking-wider font-bold block', done || active ? `text-${tierAccent}` : 'text-text-tertiary'])}>BƯỚC {s.n}/{steps.length}</span>
                    <span className={cx(['font-display font-bold text-[12px] leading-tight block truncate', done || active ? 'text-text-primary' : 'text-text-tertiary'])}>{s.label}</span>
                  </div>
                </Tag>
                {i < steps.length - 1 && <div className={cx(['flex-1 h-[2px] rounded-full max-w-[40px]', done ? accentBar[tierAccent] : 'bg-border-subtle'])}></div>}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
