import { cx } from '@/lib/cx';

export default function Pill({ variant = 'neutral', icon, children }) {
  const variants = {
    success: 'bg-clay-mint border-tier-s/40 text-tier-s',
    warning: 'bg-clay-butter border-amber-deep/40 text-amber-deep',
    error: 'bg-clay-blush border-tier-h/40 text-tier-h',
    info: 'bg-clay-sky border-info/40 text-info',
    neutral: 'bg-bg-elevated border-border-subtle text-text-secondary',
    lime: 'bg-lime border-lime-deep text-text-on-lime',
  };
  return (
    <>
      <span
        className={cx([
          'inline-flex items-center gap-space-8 px-space-12 py-space-4 rounded-full border-2 font-mono-md text-[12px] font-semibold shadow-clay-sm',
          variants[variant],
        ])}
      >
        {icon && <span className="material-symbols-rounded !text-[14px]">{icon}</span>}
        {children}
      </span>
    </>
  );
}
