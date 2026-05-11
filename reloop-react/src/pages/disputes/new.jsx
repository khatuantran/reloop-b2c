import { cx } from '@/lib/cx';
import DisputeScene from '../../components/illustrations/DisputeScene';
import { ORDERS } from '../../lib/mock';

export default function New() {
  const eligibleOrders = ORDERS.filter((o) => o.status === 'COMPLETED' || o.status === 'PENDING_VERIFY');
  
  const disputeTypes = [
    { id: 'BOM_DISPUTE', label: 'BOM thực không khớp', desc: 'Khối lượng vật liệu sau Hub rã xác thấp hơn kỳ vọng', icon: 'fact_check', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { id: 'WEIGHT_MISMATCH', label: 'Cân tại nhà sai', desc: 'Cân điện tử hiển thị khác kết quả cuối', icon: 'scale', clay: 'bg-clay-sky', accent: 'text-info' },
    { id: 'COLLECTOR_BEHAVIOR', label: 'Hành vi Collector', desc: 'Trễ hẹn không thông báo, thái độ thiếu tôn trọng', icon: 'person_off', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { id: 'PRICE_MISMATCH', label: 'Giá tính sai', desc: 'Giá hiển thị khác đơn giá Tier S đã công bố', icon: 'paid', clay: 'bg-clay-peach', accent: 'text-tier-c' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/disputes" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Tranh chấp
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-amber-deep font-bold bg-clay-butter border-2 border-amber-deep/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">add_comment</span>
                    TẠO TRANH CHẤP MỚI
                  </span>
                  <h1 className="font-display-l text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Bạn cần khiếu nại điều gì?</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    CS phản hồi trong 24h · Đính kèm ảnh/video evidence để tăng cơ hội thắng · Win rate trung bình 23%
                  </p>
                  <div className="flex flex-wrap gap-space-12">
                    <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-tier-s">photo_camera</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold">Evidence quyết định</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">78% kết quả</span>
                      </div>
                    </div>
                    <div className="bg-clay-sky border-2 border-info/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-info">schedule</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-semibold">Thời hạn gửi</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">48h sau Hub verify</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[260px]">
                  <DisputeScene className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Form */}
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              {/* Left col: form */}
              <div className="flex flex-col gap-space-24">
                {/* Step 1: Pick order */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center gap-space-12 mb-space-16">
                    <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                      <span className="font-display font-extrabold text-[16px] text-tier-s">1</span>
                    </div>
                    <div>
                      <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-semibold">BƯỚC 1</span>
                      <h3 className="font-h3 text-h3 text-text-primary">Chọn đơn liên quan</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-space-12">
                    {eligibleOrders.slice(0, 4).map((o, i) => (
                      <label className={cx(['flex items-center gap-space-16 p-space-16 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm hover:shadow-clay', i === 0 ? 'bg-clay-mint border-tier-s' : 'bg-bg-surface border-border-subtle hover:border-border-default'])}>
                        <input type="radio" name="order" checked={i === 0} className="w-5 h-5 accent-tier-s shrink-0" />
                        <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm', o.tier === 'S' ? 'bg-clay-mint text-tier-s' : 'bg-clay-peach text-tier-c'])}>
                          <span className="font-display font-extrabold text-[14px]">{o.tier}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[14px] text-text-primary block truncate">{o.item}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{o.id} · {o.weight}kg</span>
                        </div>
                        <span className="font-mono-md text-[12px] text-text-secondary tabular-nums">{(o.amount ?? o.advance ?? 0).toLocaleString('vi-VN')}đ</span>
                      </label>
                    ))}
                  </div>
                </section>
      
                {/* Step 2: Type */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center gap-space-12 mb-space-16">
                    <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                      <span className="font-display font-extrabold text-[16px] text-tier-s">2</span>
                    </div>
                    <div>
                      <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-semibold">BƯỚC 2</span>
                      <h3 className="font-h3 text-h3 text-text-primary">Loại tranh chấp</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-space-12">
                    {disputeTypes.map((t, i) => (
                      <label className={cx(['flex items-start gap-space-12 p-space-16 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm hover:shadow-clay', i === 0 ? `${t.clay} border-${t.accent.replace('text-', '')}` : 'bg-bg-surface border-border-subtle'])}>
                        <input type="radio" name="type" checked={i === 0} className="w-5 h-5 mt-space-4 accent-tier-s shrink-0" />
                        <div className="flex-1">
                          <div className={cx(['w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-8'])}>
                            <span className={cx(['material-symbols-rounded fill !text-[20px]', t.accent])}>{t.icon}</span>
                          </div>
                          <span className="font-display font-bold text-[13px] text-text-primary block">{t.label}</span>
                          <span className="font-body-md text-[11px] text-text-secondary mt-space-4 block">{t.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </section>
      
                {/* Step 3: Description */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center gap-space-12 mb-space-16">
                    <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                      <span className="font-display font-extrabold text-[16px] text-tier-s">3</span>
                    </div>
                    <div>
                      <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-semibold">BƯỚC 3</span>
                      <h3 className="font-h3 text-h3 text-text-primary">Mô tả chi tiết</h3>
                    </div>
                  </div>
                  <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle p-space-16 mb-space-12 shadow-inset-soft min-h-[128px]">
                    <p className="font-body-md text-[14px] text-text-tertiary leading-relaxed">Mô tả chi tiết: BOM thực thiếu vật liệu nào, cân sai khoảng bao nhiêu, hành vi cụ thể của collector…</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-md text-[11px] text-text-tertiary">Tối thiểu 50 ký tự · Mô tả càng chi tiết càng tăng cơ hội thắng</span>
                    <span className="font-mono-md text-[11px] text-text-tertiary tabular-nums">0 / 1000</span>
                  </div>
                </section>
      
                {/* Step 4: Evidence upload */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center gap-space-12 mb-space-16">
                    <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                      <span className="font-display font-extrabold text-[16px] text-tier-s">4</span>
                    </div>
                    <div>
                      <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-semibold">BƯỚC 4</span>
                      <h3 className="font-h3 text-h3 text-text-primary">Đính kèm evidence</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-space-12 mb-space-12">
                    {[1, 2, 3].map((i) => (
                      <div className="h-[140px] rounded-2xl bg-clay-mint border-2 border-tier-s/30 shadow-clay-sm overflow-hidden flex flex-col items-center justify-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[28px] text-tier-s">image</span>
                        <span className="font-mono-md text-[10px] text-tier-s font-bold">Ảnh {i}.jpg</span>
                      </div>
                    ))}
                    <button className="h-[140px] rounded-2xl bg-bg-surface border-2 border-dashed border-border-default shadow-clay-sm flex flex-col items-center justify-center gap-space-8 hover:border-tier-s hover:bg-clay-mint/40 transition">
                      <span className="material-symbols-rounded !text-[28px] text-text-tertiary">add_photo_alternate</span>
                      <span className="font-mono-md text-[10px] text-text-tertiary font-semibold">Thêm</span>
                    </button>
                  </div>
                  <div className="flex items-center gap-space-12 p-space-12 bg-clay-butter rounded-2xl border border-amber-deep/20">
                    <span className="material-symbols-rounded fill !text-[20px] text-amber-deep shrink-0">tips_and_updates</span>
                    <p className="font-body-md text-[12px] text-text-secondary">
                      <strong className="text-text-primary">Mẹo:</strong> Ảnh trước khi niêm phong + video lúc cân + ghi âm trao đổi với collector tăng win rate lên ~78%.
                    </p>
                  </div>
                </section>
      
                {/* Submit */}
                <div className="flex gap-space-12">
                  <button className="flex-1 bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                    <span className="material-symbols-rounded fill !text-[20px]">send</span>
                    Gửi tranh chấp
                  </button>
                  <a href="/disputes" className="bg-bg-elevated text-text-primary border border-border-subtle px-space-32 py-space-16 rounded-2xl font-semibold shadow-clay-sm text-[15px] inline-flex items-center gap-space-8 hover:shadow-clay">
                    Hủy
                  </a>
                </div>
              </div>
      
              {/* Right col: sidebar info */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24 flex flex-col gap-space-12">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-s">verified_user</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold">CAM KẾT MINH BẠCH</span>
                  <h4 className="font-h3 text-h3 text-text-primary">Thắng dispute = hoàn 100%</h4>
                  <p className="font-body-md text-[13px] text-text-secondary">Nếu RE-LOOP audit và kết luận bạn đúng, bạn nhận lại 100% chênh + 100 GP đền bù.</p>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">QUY TRÌNH 4 BƯỚC</span>
                  <ol className="flex flex-col gap-space-12">
                    {[
                      { n: 1, label: 'Bạn gửi → CS confirm trong 4h' },
                      { n: 2, label: 'CS audit log + ảnh evidence' },
                      { n: 3, label: 'Quyết định trong 24h' },
                      { n: 4, label: 'Hoàn tiền + GP nếu thắng' },
                    ].map((s) => (
                      <li className="flex items-start gap-space-8">
                        <span className="w-6 h-6 rounded-full bg-clay-mint border border-tier-s/40 flex items-center justify-center font-mono-md text-[11px] text-tier-s font-extrabold shrink-0">{s.n}</span>
                        <span className="font-body-md text-[13px] text-text-secondary">{s.label}</span>
                      </li>
                    ))}
                  </ol>
                </div>
      
                <a href="/help" className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 flex items-center gap-space-12 hover:shadow-clay transition">
                  <span className="material-symbols-rounded fill !text-[28px] text-info">support_agent</span>
                  <div className="flex-1">
                    <span className="font-mono-md text-[11px] text-info uppercase tracking-wider font-bold block">Cần tư vấn trước?</span>
                    <span className="font-display font-bold text-[14px] text-text-primary">Hotline 1900-RELOOP</span>
                  </div>
                  <span className="material-symbols-rounded !text-[18px] text-info">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
