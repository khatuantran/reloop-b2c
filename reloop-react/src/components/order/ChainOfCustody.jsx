import { cx } from '@/lib/cx';

export default function ChainOfCustody({ events, orderId, layout = 'vertical' }) {
  
  const stageMeta = {
    PICKUP: { icon: 'home', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    TRANSIT: { icon: 'local_shipping', clay: 'bg-clay-sky', accent: 'text-info' },
    HUB_RECEIVE: { icon: 'warehouse', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    DISASSEMBLY: { icon: 'build', clay: 'bg-clay-peach', accent: 'text-tier-c' },
    VERIFIED: { icon: 'verified', clay: 'bg-clay-mint', accent: 'text-tier-s' },
  };
  return (
    <>
      <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
        <div className="flex items-end justify-between mb-space-24">
          <div>
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
              <span className="material-symbols-rounded fill !text-[16px]">link</span>
              CHAIN OF CUSTODY
            </span>
            <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Hành trình minh bạch</h3>
            <p className="font-body-md text-[12px] text-text-secondary mt-space-4">
              Mỗi giai đoạn ghi log + ảnh evidence + hash blockchain · Xem được sau khi đăng nhập tài khoản RE-LOOP
            </p>
          </div>
          <span className="font-mono-md text-[11px] text-text-tertiary bg-bg-surface px-space-12 py-space-4 rounded-full border border-border-subtle">
            {orderId}
          </span>
        </div>
      
        {layout === 'vertical' ? (
          <div className="flex flex-col">
            {events.map((e, i) => {
              const meta = stageMeta[e.stage];
              const isLast = i === events.length - 1;
              return (
                <div className="flex gap-space-16 relative">
                  {!isLast && (
                    <div className={cx(['absolute left-[23px] top-12 w-[2px] h-[calc(100%-12px)]', e.done ? 'bg-tier-s' : 'bg-border-subtle'])} />
                  )}
                  <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 z-10 border-2', e.done ? `${meta.clay} border-current ${meta.accent}` : e.active ? 'bg-amber-deep text-white border-amber-deep animate-pulse' : 'bg-bg-surface border-border-subtle text-text-tertiary'])}>
                    <span className="material-symbols-rounded fill !text-[22px]">
                      {e.done ? 'check' : e.active ? 'hourglass_top' : meta.icon}
                    </span>
                  </div>
                  <div className={cx(['flex-1 pb-space-24', isLast && 'pb-0'])}>
                    <div className="flex items-baseline justify-between mb-space-4">
                      <span className="font-display font-bold text-[15px] text-text-primary">{e.label}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary tabular-nums">{e.time}</span>
                    </div>
                    <span className="font-mono-md text-[12px] text-text-secondary block mb-space-8">{e.actor}</span>
                    <div className="flex flex-wrap gap-space-8">
                      {e.evidenceCount && (
                        <div className={cx(['rounded-xl px-space-12 py-space-4 shadow-clay-sm border-2 flex items-center gap-space-4', meta.clay, `border-${meta.accent.replace('text-', '')}/30`])}>
                          <span className={cx(['material-symbols-rounded fill !text-[14px]', meta.accent])}>photo_library</span>
                          <span className={cx(['font-mono-md text-[11px] font-bold', meta.accent])}>{e.evidenceCount} ảnh / video</span>
                        </div>
                      )}
                      {e.hashShort && (
                        <div className="rounded-xl px-space-12 py-space-4 shadow-clay-sm border border-border-subtle bg-bg-surface flex items-center gap-space-4">
                          <span className="material-symbols-rounded !text-[14px] text-text-tertiary">tag</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary font-semibold tabular-nums">{e.hashShort}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="relative">
            {/* Horizontal connector line */}
            <div className="absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-border-subtle"></div>
            <div className="absolute top-[24px] left-[10%] h-[2px] bg-tier-s" style={{ 'width': `${(events.filter(e => e.done).length - 0.5) / events.length * 80}%` }}></div>
            <div className="grid grid-cols-5 gap-space-12 relative">
              {events.map((e) => {
                const meta = stageMeta[e.stage];
                return (
                  <div className="flex flex-col items-center text-center">
                    <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm z-10 border-2 mb-space-12 bg-bg-elevated', e.done ? `${meta.clay} border-current ${meta.accent}` : e.active ? 'bg-amber-deep text-white border-amber-deep animate-pulse' : 'border-border-subtle text-text-tertiary'])}>
                      <span className="material-symbols-rounded fill !text-[22px]">
                        {e.done ? 'check' : e.active ? 'hourglass_top' : meta.icon}
                      </span>
                    </div>
                    <span className="font-display font-bold text-[13px] text-text-primary leading-tight mb-space-4">{e.label}</span>
                    <span className="font-mono-md text-[10px] text-text-secondary block mb-space-4 line-clamp-2 leading-tight">{e.actor}</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums block mb-space-8">{e.time}</span>
                    <div className="flex flex-col gap-space-4 items-center">
                      {e.evidenceCount && (
                        <div className={cx(['rounded-lg px-space-8 py-[2px] shadow-clay-sm border flex items-center gap-space-4', meta.clay, `border-${meta.accent.replace('text-', '')}/30`])}>
                          <span className={cx(['material-symbols-rounded fill !text-[12px]', meta.accent])}>photo_library</span>
                          <span className={cx(['font-mono-md text-[10px] font-bold', meta.accent])}>{e.evidenceCount}</span>
                        </div>
                      )}
                      {e.hashShort && (
                        <span className="font-mono-md text-[9px] text-text-tertiary tabular-nums">{e.hashShort}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      
        <div className="mt-space-16 p-space-16 bg-clay-mint/40 rounded-2xl border border-tier-s/20 flex items-start gap-space-12">
          <span className="material-symbols-rounded fill !text-[20px] text-tier-s shrink-0">verified_user</span>
          <p className="font-body-md text-[12px] text-text-secondary leading-relaxed">
            <strong className="text-text-primary">Mass-balance verify ≥ 90%</strong> · Mỗi sự kiện được ký bằng private key collector/Hub + lưu hash trên hệ thống audit. Bạn có thể yêu cầu raw data trong vòng 30 ngày.
          </p>
        </div>
      </div>
    </>
  );
}
