import RecycleScene from '../illustrations/RecycleScene';
import TierSScene from '../illustrations/TierSScene';
import TierCScene from '../illustrations/TierCScene';
import HubWarehouse from '../illustrations/HubWarehouse';
import MilestoneCelebration from '../illustrations/MilestoneCelebration';
import CollectorScene from '../illustrations/CollectorScene';
import OtpPhone from '../illustrations/OtpPhone';
import WalletScene from '../illustrations/WalletScene';
import PackageScene from '../illustrations/PackageScene';
import GreenPointsBadge from '../illustrations/GreenPointsBadge';

export default function StepHero({ eyebrow,
  title,
  subtitle,
  illustration = 'recycle',
  accent = 'tier-s',
  chips = [],
  back }) {
  const accentChipClass = {
    'tier-s': 'bg-clay-mint border-tier-s/30 text-tier-s',
    'amber-deep': 'bg-clay-butter border-amber-deep/30 text-amber-deep',
    'info': 'bg-clay-sky border-info/30 text-info',
    'tier-c': 'bg-clay-peach border-tier-c/30 text-tier-c',
  };
  
  const toneClass = {
    mint: 'bg-clay-mint border-tier-s/30',
    butter: 'bg-clay-butter border-amber-deep/30',
    sky: 'bg-clay-sky border-info/30',
    peach: 'bg-clay-peach border-tier-c/30',
    blush: 'bg-clay-blush border-tier-h/30',
  };
  const toneAccent = {
    mint: 'text-tier-s',
    butter: 'text-amber-deep',
    sky: 'text-info',
    peach: 'text-tier-c',
    blush: 'text-tier-h',
  };
  return (
    <>
      {back && (
        <a href={back.href} className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
          <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
          {back.label}
        </a>
      )}
      
      <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
        <div className="grid grid-cols-[1.3fr_1fr] gap-space-32 items-center">
          <div className="relative z-10">
            <span className={`font-mono-md text-[11px] uppercase tracking-[0.2em] font-bold border-2 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12 ${accentChipClass[accent]}`}>
              {eyebrow}
            </span>
            <h1 className="font-display-l text-[40px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-8">{title}</h1>
            {subtitle && <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">{subtitle}</p>}
            {chips.length > 0 && (
              <div className="flex flex-wrap gap-space-12">
                {chips.map((c) => (
                  <div className={`border-2 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12 ${toneClass[c.tone ?? 'mint']}`}>
                    <span className={`material-symbols-rounded fill !text-[24px] ${toneAccent[c.tone ?? 'mint']}`}>{c.icon}</span>
                    <div className="flex flex-col">
                      <span className={`font-mono-md text-[10px] uppercase tracking-wider font-semibold ${toneAccent[c.tone ?? 'mint']}`}>{c.label}</span>
                      <span className="font-mono-md text-[13px] text-text-primary font-bold tabular-nums">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative h-[240px]">
            {illustration === 'recycle' && <RecycleScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'tier-s' && <TierSScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'tier-c' && <TierCScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'hub' && <HubWarehouse className="absolute inset-0 w-full h-full" />}
            {illustration === 'milestone' && <MilestoneCelebration className="absolute inset-0 w-full h-full" />}
            {illustration === 'collector' && <CollectorScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'otp' && <OtpPhone className="absolute inset-0 w-full h-full" />}
            {illustration === 'wallet' && <WalletScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'package' && <PackageScene className="absolute inset-0 w-full h-full" />}
            {illustration === 'gp' && <GreenPointsBadge className="absolute inset-0 w-full h-full" />}
          </div>
        </div>
      </section>
    </>
  );
}
