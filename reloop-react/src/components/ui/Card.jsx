import { cx } from '@/lib/cx';

export default function Card({ hover = false,
  padding = 'md',
  radius = 'lg',
  variant = 'default',
  shadow = 'md',
  className = '', children }) {
  const paddings = { sm: 'p-space-16', md: 'p-space-24', lg: 'p-space-48' };
  const radii = { md: 'rounded-2xl', lg: 'rounded-3xl', xl: 'rounded-[28px]' };
  const shadows = { none: '', sm: 'shadow-clay-sm', md: 'shadow-clay', lg: 'shadow-clay-lg' };
  
  const variants = {
    default: 'bg-bg-elevated border border-border-subtle',
    flat: 'bg-bg-surface border border-border-subtle',
    mint: 'bg-clay-mint border border-tier-s/20',
    butter: 'bg-clay-butter border border-amber-deep/20',
    peach: 'bg-clay-peach border border-tier-c/20',
    blush: 'bg-clay-blush border border-tier-h/20',
    sky: 'bg-clay-sky border border-info/20',
    lavender: 'bg-clay-lavender border border-border-default',
  };
  return (
    <>
      <div
        className={cx([
          variants[variant],
          paddings[padding],
          radii[radius],
          shadows[shadow],
          hover && 'transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-clay-lg',
          className,
        ])}
      >
        {children}
      </div>
    </>
  );
}
