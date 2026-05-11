// Port từ src/components/ui/TierBadge.astro.

const solidStyles = {
  S: 'bg-tier-s text-white',
  B: 'bg-tier-b text-text-primary',
  C: 'bg-tier-c text-white',
  H: 'bg-tier-h text-white',
};
const softStyles = {
  S: 'bg-clay-mint text-tier-s border border-tier-s/40',
  B: 'bg-clay-butter text-amber-deep border border-amber-deep/40',
  C: 'bg-clay-peach text-tier-c border border-tier-c/40',
  H: 'bg-clay-blush text-tier-h border border-tier-h/40',
};
const labels = { S: 'Standard', B: 'Bulky', C: 'Complex', H: 'Hazardous' };

export default function TierBadge({
  tier,
  label,
  size = 'md',
  variant = 'solid',
}) {
  const text = label ?? (size === 'sm' ? tier : `Tier ${tier} · ${labels[tier]}`);
  const padding = size === 'sm' ? 'px-space-8 py-[2px]' : size === 'lg' ? 'px-space-16 py-space-8' : 'px-space-12 py-space-4';
  const fontSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-[14px]' : 'text-[12px]';
  const styles = variant === 'solid' ? solidStyles[tier] : softStyles[tier];
  return (
    <span className={['inline-flex items-center gap-space-8 rounded-full font-mono-md font-bold', padding, fontSize, styles].join(' ')}>
      {text}
    </span>
  );
}
