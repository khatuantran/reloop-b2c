import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';
import StepHero from '../../../../components/order/StepHero';
import ItemPhoto from '../../../../components/illustrations/ItemPhoto';

export default function Step2() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-c.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/tier-c/step-2.html' },
    { n: 3, label: 'Dải BOM', icon: 'analytics', href: '/orders/new/tier-c/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/tier-c/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/tier-c/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-c/step-6.html' },
  ];
  
  const materials = [
    { name: 'Đồng (chân tụ, dây, mạ)', pct: 18, color: 'bg-tier-c' },
    { name: 'Sắt / thép (giá đỡ, ốc)', pct: 32, color: 'bg-text-tertiary' },
    { name: 'Nhôm (tản nhiệt)', pct: 12, color: 'bg-info' },
    { name: 'Nhựa + FR4 (board, vỏ)', pct: 38, color: 'bg-amber-deep' },
  ];
  const reasons = [
    { icon: 'blender', t: 'Hỗn hợp vật liệu', d: 'Mainboard trộn đồng/sắt/nhôm/nhựa với tỷ lệ khác nhau mỗi board — AI nhìn vỏ ngoài chỉ ước được.' },
    { icon: 'precision_manufacturing', t: 'Hub rã xác', d: 'Sau khi tháo, cân từng loại vật liệu thực (BOM) trong 16-24h tại Hub Tier 3.' },
    { icon: 'price_check', t: 'Phần chênh ZaloPay', d: 'BOM thực ≥ tạm ứng → RE-LOOP chuyển thêm; thấp hơn → bạn vẫn giữ tạm ứng.' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-c" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 1 · Chụp ảnh
            </a>
      
            <OrderStepperBar steps={steps} activeStep={2} tierAccent="tier-c" />
      
            <StepHero
              eyebrow="Tier C · Bước 2/6 · AI nhận diện"
              title="AI đã nhận diện — vật phẩm hỗn hợp"
              subtitle="Phân loại sơ bộ vật liệu · Tier C cần Hub rã xác để chốt BOM thực"
              accent="tier-c"
              illustration="tier-c"
              chips={[
                { icon: 'smart_toy', label: 'Confidence', value: '92%', tone: 'peach' },
                { icon: 'scale', label: 'Khối lượng ước', value: '~1.0 kg', tone: 'butter' },
                { icon: 'category', label: 'Tier', value: 'C · Composite', tone: 'peach' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-c font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">visibility</span>
                    KẾT QUẢ NHẬN DIỆN
                  </span>
                  <div className="mt-space-20 grid grid-cols-[220px_1fr] gap-space-24 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-clay-sm border-2 border-tier-c/20 aspect-[4/3]">
                      <ItemPhoto item="mainboard" className="w-full h-full" />
                      <span className="absolute top-space-8 left-space-8 px-space-8 py-[2px] rounded-full bg-tier-c text-white font-mono-md text-[10px] font-bold uppercase tracking-wider">Tier C</span>
                      <div className="absolute inset-[14%] border-2 border-dashed border-white/85 rounded-lg"></div>
                      <span className="absolute bottom-space-8 right-space-8 px-space-8 py-[1px] rounded-full bg-bg-elevated/95 backdrop-blur font-mono-md text-[9px] text-tier-c font-bold">AI box · 92%</span>
                    </div>
                    <div className="text-col">
                      <h2 className="font-h2 text-h2 text-text-primary">Mainboard PC ATX</h2>
                      <p className="font-mono-md text-[12px] text-text-tertiary mt-space-4">~1.0 kg · giá thực sau Hub rã xác</p>
                      <div className="mt-space-16">
                        <div className="flex items-center justify-between mb-space-4">
                          <span className="font-mono-md text-[11px] text-text-secondary uppercase tracking-wider">AI confidence (loại vật phẩm)</span>
                          <span className="font-mono-md text-[13px] text-tier-c font-bold tabular-nums">92%</span>
                        </div>
                        <div className="h-3 rounded-full bg-bg-base overflow-hidden"><div className="h-full rounded-full bg-gradient-to-r from-tier-c to-amber-deep" style={{ 'width': '92%' }}></div></div>
                      </div>
                      <p className="font-mono-md text-[11px] text-amber-deep mt-space-12 flex items-start gap-space-4"><span className="material-symbols-rounded !text-[14px]">info</span><span className="text-col">AI nhìn vỏ ngoài → chỉ ước <strong>dải giá</strong>. Hub rã xác mới chốt được BOM thực.</span></p>
                    </div>
                  </div>
      
                  {/* Material composition estimate */}
                  <div className="mt-space-24">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded !text-[14px]">pie_chart</span>VẬT LIỆU ƯỚC (BOM Library)</span>
                    <div className="flex h-4 rounded-full overflow-hidden mb-space-12">
                      {materials.map((m) => <div className={cx([m.color])} style={{ 'width': `${m.pct}%` }}></div>)}
                    </div>
                    <div className="grid grid-cols-2 gap-space-8">
                      {materials.map((m) => (
                        <div className="flex items-center gap-space-8 p-space-12 bg-bg-base/50 rounded-xl">
                          <span className={cx(['w-3 h-3 rounded shrink-0', m.color])}></span>
                          <span className="font-body-md text-[12px] text-text-secondary flex-1 text-col">{m.name}</span>
                          <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums shrink-0">~{m.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
      
                  <div className="mt-space-24 flex justify-end gap-space-12 flex-wrap">
                    <a href="/orders/new/tier-c" className="px-space-24 py-space-12 rounded-2xl text-text-primary border border-border-default bg-bg-elevated shadow-clay-sm hover:shadow-clay font-medium text-[13px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[16px]">edit</span>Sai? Sửa thủ công</a>
                    <a href="/orders/new/tier-c/step-3" className="px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Đúng → Bước 3 · Dải BOM<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-peach rounded-[24px] shadow-clay border-2 border-tier-c/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-c font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">help</span>VÌ SAO TIER C ≠ TIER S?</span>
                  <ul className="flex flex-col gap-space-12">
                    {reasons.map((r) => (
                      <li className="flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-c">{r.icon}</span></div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">{r.t}</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">{r.d}</p></div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24 flex items-start gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-s">verified_user</span></div>
                  <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">Hub Tier 3 · ISO 14001</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">Hub rã xác có chứng chỉ môi trường, chuỗi hành trình mẫu công khai trên app.</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
