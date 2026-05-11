import { cx } from '@/lib/cx';

export default function CancelRescheduleCard({ orderId, status, trustImpact = -5 }) {
  const slotsToday = ['14:00 - 16:00', '16:00 - 18:00', '18:00 - 20:00'];
  const slotsTomorrow = ['08:00 - 10:00', '10:00 - 12:00', '14:00 - 16:00', '16:00 - 18:00'];
  return (
    <>
      <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
        <div className="flex items-end justify-between mb-space-24">
          <div>
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
              <span className="material-symbols-rounded fill !text-[16px]">edit_calendar</span>
              ĐIỀU CHỈNH ĐƠN
            </span>
            <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Reschedule hoặc Cancel</h3>
            <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Đơn {orderId} · Còn 30 phút trước khi collector xuất phát</p>
          </div>
        </div>
      
        {/* Trust impact preview banner */}
        <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl p-space-16 mb-space-24 flex items-start gap-space-16">
          <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
            <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">warning</span>
          </div>
          <div className="flex-1">
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block">TRUST IMPACT PREVIEW</span>
            <p className="font-body-md text-[13px] text-text-secondary mt-space-4 mb-space-8">
              <strong className="text-text-primary">Reschedule không ảnh hưởng Trust.</strong> Cancel sau khi collector đã nhận đơn sẽ trừ {trustImpact} điểm Trust và reset streak.
            </p>
            <div className="flex items-center gap-space-12 flex-wrap">
              <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold inline-flex items-center gap-space-4">
                <span className="material-symbols-rounded fill !text-[12px]">event_repeat</span>
                Reschedule: 0 ảnh hưởng
              </span>
              <span className="px-space-8 py-[2px] rounded-full bg-clay-blush border border-tier-h/30 font-mono-md text-[10px] text-tier-h font-bold">
                Cancel: {trustImpact} Trust · Streak reset
              </span>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-2 gap-space-16">
          {/* Reschedule (recommended) */}
          <div className="bg-clay-mint rounded-2xl border-2 border-tier-s/30 shadow-clay-sm p-space-24 ring-2 ring-tier-s/40 relative">
            <span className="absolute top-space-8 right-space-8 px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold tracking-wider shadow-clay-sm">KHUYẾN NGHỊ</span>
            <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
              <span className="material-symbols-rounded fill !text-[22px] text-tier-s">event_repeat</span>
            </div>
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold">RESCHEDULE</span>
            <h4 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-12">Đổi giờ thu gom</h4>
            <p className="font-body-md text-[12px] text-text-secondary mb-space-16">Chọn slot khác — collector sẽ đến đúng giờ mới. Không ảnh hưởng Trust Score.</p>
      
            <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">HÔM NAY</span>
            <div className="grid grid-cols-3 gap-space-8 mb-space-12">
              {slotsToday.map((s, i) => (
                <button className={cx(['px-space-8 py-space-8 rounded-xl border-2 font-mono-md text-[11px] font-bold shadow-clay-sm transition', i === 1 ? 'bg-tier-s text-white border-tier-s' : 'bg-bg-elevated border-border-subtle text-text-primary hover:border-tier-s'])}>{s}</button>
              ))}
            </div>
            <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">NGÀY MAI</span>
            <div className="grid grid-cols-2 gap-space-8 mb-space-16">
              {slotsTomorrow.slice(0, 4).map((s) => (
                <button className="px-space-8 py-space-8 rounded-xl border-2 border-border-subtle bg-bg-elevated text-text-primary font-mono-md text-[11px] font-bold shadow-clay-sm hover:border-tier-s">{s}</button>
              ))}
            </div>
            <button className="w-full bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[13px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
              <span className="material-symbols-rounded fill !text-[16px]">check</span>
              Xác nhận đổi 16:00 - 18:00
            </button>
          </div>
      
          {/* Cancel */}
          <div className="bg-clay-blush rounded-2xl border-2 border-tier-h/30 shadow-clay-sm p-space-24">
            <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
              <span className="material-symbols-rounded fill !text-[22px] text-tier-h">cancel</span>
            </div>
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold">CANCEL</span>
            <h4 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-12">Huỷ đơn hoàn toàn</h4>
            <p className="font-body-md text-[12px] text-text-secondary mb-space-16">Vật phẩm không còn cần bán hoặc hoàn cảnh thay đổi. Trust Score và streak sẽ bị ảnh hưởng.</p>
      
            <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">LÝ DO HUỶ</span>
            <div className="flex flex-col gap-space-8 mb-space-16">
              {[
                { id: 'no_longer', label: 'Không còn nhu cầu bán' },
                { id: 'wrong_tier', label: 'Đặt nhầm tier' },
                { id: 'busy', label: 'Bận đột xuất, không reschedule được' },
                { id: 'other', label: 'Lý do khác' },
              ].map((r, i) => (
                <label className="flex items-center gap-space-12 p-space-8 bg-bg-elevated/60 rounded-xl border border-tier-h/20 cursor-pointer">
                  <input type="radio" name="cancel-reason" checked={i === 0} className="w-4 h-4 accent-tier-h" />
                  <span className="font-body-md text-[12px] text-text-primary">{r.label}</span>
                </label>
              ))}
            </div>
      
            <div className="bg-bg-elevated/80 rounded-xl p-space-12 mb-space-16 flex flex-col gap-space-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">Trust Score sẽ giảm</span>
                <span className="font-mono-md text-[14px] text-tier-h font-bold tabular-nums">{trustImpact} → 60</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">% tạm ứng Tier C</span>
                <span className="font-mono-md text-[12px] text-amber-deep font-bold">50% → 30%</span>
              </div>
            </div>
            <button className="w-full bg-tier-h text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[13px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
              <span className="material-symbols-rounded fill !text-[16px]">cancel</span>
              Xác nhận huỷ đơn
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
