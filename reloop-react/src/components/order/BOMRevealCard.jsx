import { formatVND } from '../../lib/format';

export default function BOMRevealCard({ order }) {
  const bomReal = order.bomReal;
  const total = Object.values(bomReal).reduce((a, b) => a + b, 0);
  const massBalance = order.massBalance ?? 0;
  return (
    <>
      <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 flex flex-col gap-space-24">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">CHAIN OF CUSTODY</span>
            <h3 className="font-h2 text-h2 text-text-primary mt-space-8">BOM thực sau Hub rã xác</h3>
          </div>
          <span className="px-space-12 py-space-4 rounded-full bg-clay-mint border-2 border-tier-s/40 font-mono-md text-[12px] text-tier-s font-bold">
            Mass balance {(massBalance * 100).toFixed(0)}%
          </span>
        </div>
      
        {/* 3 trạng thái stacked */}
        <div className="flex flex-col gap-space-12">
          {/* HOLD released */}
          <div className="rounded-2xl p-space-16 border-2 border-tier-s/30 bg-clay-mint flex items-center justify-between shadow-clay-sm">
            <div className="flex items-center gap-space-12">
              <div className="w-10 h-10 rounded-2xl bg-tier-s flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-rounded fill !text-[20px] text-white">lock_open</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-md text-[11px] text-tier-s uppercase tracking-wider font-semibold">01 · HOLD ví ảo</span>
                <span className="font-body-md text-[14px] text-text-primary font-semibold">Đã release sau verify</span>
              </div>
            </div>
            <span className="font-mono-md text-[18px] text-text-primary font-bold tabular-nums">{formatVND(order.advance ?? 0)}</span>
          </div>
      
          {/* Verified */}
          <div className="rounded-2xl p-space-16 border-2 border-tier-s/30 bg-clay-mint flex items-center justify-between shadow-clay-sm">
            <div className="flex items-center gap-space-12">
              <div className="w-10 h-10 rounded-2xl bg-tier-s flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-rounded fill !text-[20px] text-white">fact_check</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono-md text-[11px] text-tier-s uppercase tracking-wider font-semibold">02 · Verify mass balance</span>
                <span className="font-body-md text-[14px] text-text-primary font-semibold">Đạt chuẩn ≥ 90%</span>
              </div>
            </div>
            <span className="font-mono-md text-[18px] text-text-primary font-bold tabular-nums">{(massBalance * 100).toFixed(0)}%</span>
          </div>
      
          {/* Settled */}
          <div className="rounded-2xl p-space-16 bg-lime shadow-clay-lime">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-12">
                <div className="w-10 h-10 rounded-2xl bg-text-on-lime flex items-center justify-center">
                  <span className="material-symbols-rounded fill !text-[20px] text-lime">account_balance_wallet</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono-md text-[11px] text-text-on-lime/70 uppercase tracking-wider font-semibold">03 · Phần chênh → ZaloPay</span>
                  <span className="font-body-md text-[14px] text-text-on-lime font-bold">Đã chuyển</span>
                </div>
              </div>
              <span className="font-mono-md text-[24px] text-text-on-lime font-bold tabular-nums">+{formatVND(order.settled ?? 0)}</span>
            </div>
          </div>
        </div>
      
        {/* Hub Tier badge */}
        <div className="flex items-center gap-space-12 px-space-16 py-space-12 bg-clay-sky rounded-2xl border border-info/30">
          <span className="material-symbols-rounded fill !text-[20px] text-info">verified</span>
          <span className="font-mono-md text-[12px] text-info font-semibold">Verify tại Hub Tier 3 · ISO 14001 · audit Big4</span>
        </div>
      
        {/* BOM table */}
        <div className="bg-bg-surface border border-border-subtle rounded-2xl p-space-24 shadow-inset-soft">
          <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider block mb-space-12 font-semibold">Vật liệu thực (cân tại Hub)</span>
          <div className="grid grid-cols-4 gap-space-12">
            {
              Object.entries(bomReal).map(([k, v]) => (
                <div className="bg-bg-elevated rounded-xl p-space-12 shadow-clay-sm">
                  <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">{k}</span>
                  <div className="font-mono-md text-[18px] text-text-primary font-bold tabular-nums mt-space-4">{v.toFixed(2)} kg</div>
                  <span className="font-mono-md text-[10px] text-tier-s font-semibold">{(v / total * 100).toFixed(1)}%</span>
                </div>
              ))
            }
          </div>
        </div>
      
        {/* Photos + timelapse */}
        <div className="grid grid-cols-3 gap-space-12">
          <div className="aspect-square rounded-2xl overflow-hidden relative shadow-clay-sm">
            <img src="/images/bom-before.jpg" alt="Trước rã xác" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-2 left-2 px-space-8 py-[2px] rounded-full bg-bg-elevated/95 backdrop-blur font-mono-md text-[10px] text-text-primary font-semibold">Trước rã xác</span>
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden relative shadow-clay-sm">
            <img src="/images/bom-after.jpg" alt="Sau rã xác" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <span className="absolute bottom-2 left-2 px-space-8 py-[2px] rounded-full bg-bg-elevated/95 backdrop-blur font-mono-md text-[10px] text-text-primary font-semibold">Sau rã xác</span>
          </div>
          <button className="aspect-square rounded-2xl bg-clay-mint border-2 border-tier-s/30 hover:shadow-clay flex flex-col items-center justify-center gap-space-8 transition relative overflow-hidden shadow-clay-sm">
            <img src="/images/bom-after.jpg" alt="Video timelapse" className="absolute inset-0 w-full h-full object-cover opacity-25" />
            <span className="material-symbols-rounded fill !text-[44px] text-tier-s relative z-10">play_circle</span>
            <span className="font-mono-md text-[11px] text-tier-s font-semibold relative z-10">Video timelapse</span>
            <span className="font-mono-md text-[10px] text-text-secondary relative z-10">2:00 phút · multi-angle</span>
          </button>
        </div>
      </div>
    </>
  );
}
