import { cx } from '@/lib/cx';

export default function TxnSidebar({ collectorName, collectorAvatar, collectorTierLabel, collectorRating, collectorVehicle,
  itemName, itemHint, itemIcon, accent,
  avatarGradient = 'from-clay-mint to-tier-s', itemClay = 'bg-clay-mint', subSteps,
  orderId, collectorPhone, children }) {
  // Persistent sidebar cho các màn giao dịch tại nhà (transaction-flow) — collector + vật phẩm + tiến trình sub-step.
  // Prototype: không có order id trong flow giao dịch generic → suy ra theo tier để link sang chat/đơn hợp lệ.
  const txnOrderId = orderId ?? (accent === 'tier-c' ? 'RL-2026-001240' : accent === 'amber-deep' ? 'RL-2026-001236' : 'RL-2026-001234');
  const txnPhone = collectorPhone ?? (accent === 'tier-c' ? '0908 222 333' : '0912 345 678');
  const accentText = { 'tier-s': 'text-tier-s', 'tier-c': 'text-tier-c', 'amber-deep': 'text-amber-deep', 'info': 'text-info' };
  const dotClass = (s) =>
    s === 'done' ? 'bg-tier-s text-white border-tier-s'
    : s === 'active' ? `${accent === 'tier-c' ? 'bg-clay-peach' : accent === 'amber-deep' ? 'bg-clay-butter' : accent === 'info' ? 'bg-clay-sky' : 'bg-clay-mint'} ${accentText[accent]} border-current animate-pulse`
    : 'bg-bg-base text-text-tertiary border-border-subtle';
  return (
    <>
      <div className="flex flex-col gap-space-16">
        {/* Collector */}
        <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
          <span className={cx(['font-mono-md text-[11px] uppercase tracking-wider font-bold flex items-center gap-space-8 mb-space-16', accentText[accent]])}>
            <span className="material-symbols-rounded fill !text-[14px]">person_pin</span>
            COLLECTOR ĐANG XỬ LÝ
          </span>
          <div className="flex items-center gap-space-12">
            <div className={cx(['w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0', avatarGradient])}>{collectorAvatar}</div>
            <div className="flex-1 text-col">
              <span className="font-display font-bold text-[14px] text-text-primary block">{collectorName}</span>
              <span className="font-mono-md text-[11px] text-text-tertiary">{collectorTierLabel}</span>
            </div>
          </div>
          <div className="mt-space-12 grid grid-cols-2 gap-space-8">
            <div className="bg-bg-base/60 rounded-xl p-space-12 text-col"><span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đánh giá</span><span className="font-display font-bold text-[16px] text-amber-deep tabular-nums mt-space-4 block">★ {collectorRating}</span></div>
            <div className="bg-bg-base/60 rounded-xl p-space-12 text-col"><span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phương tiện</span><span className="font-body-md text-[11px] text-text-primary font-semibold mt-space-4 block">{collectorVehicle}</span></div>
          </div>
          <div className="mt-space-12 grid grid-cols-2 gap-space-8">
            <a href={`tel:${txnPhone.replace(/\s/g, '')}`} className={cx(['text-white py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:-translate-y-[1px] transition', accent === 'tier-c' ? 'bg-tier-c' : accent === 'amber-deep' ? 'bg-amber-deep' : accent === 'info' ? 'bg-info' : 'bg-tier-s'])}><span className="material-symbols-rounded fill !text-[16px]">call</span>Gọi</a>
            <a href={`/orders/${txnOrderId}/chat`} className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:shadow-clay transition"><span className="material-symbols-rounded fill !text-[16px]">chat</span>Chat</a>
          </div>
        </div>
      
        {/* Item */}
        <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24 flex items-center gap-space-12">
          <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', itemClay])}><span className={cx(['material-symbols-rounded fill !text-[24px]', accentText[accent]])}>{itemIcon}</span></div>
          <div className="flex-1 text-col"><span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Vật phẩm</span><span className="font-display font-bold text-[14px] text-text-primary block">{itemName}</span><span className="font-mono-md text-[11px] text-text-tertiary">{itemHint}</span></div>
        </div>
      
        {/* Sub-step progress */}
        <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
          <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded !text-[14px]">checklist</span>TIẾN TRÌNH GIAO DỊCH</span>
          <ol className="relative">
            <div className="absolute left-[13px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
            <div className="flex flex-col gap-space-12">
              {subSteps.map((s) => (
                <li className="relative flex items-center gap-space-12">
                  <div className={cx(['relative z-10 w-7 h-7 rounded-lg flex items-center justify-center shadow-clay-sm shrink-0 border-2', dotClass(s.state)])}>
                    <span className="material-symbols-rounded fill !text-[14px]">{s.state === 'done' ? 'check' : s.state === 'active' ? 'play_arrow' : 'circle'}</span>
                  </div>
                  <span className={cx(['font-mono-md text-[12px]', s.state === 'pending' ? 'text-text-tertiary' : 'text-text-primary font-semibold'])}>{s.label}</span>
                </li>
              ))}
            </div>
          </ol>
        </div>
      
        {children}
      </div>
    </>
  );
}
