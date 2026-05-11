import OrderStepperBar from '../../../components/order/OrderStepperBar';
import StepHero from '../../../components/order/StepHero';
import ItemPhoto from '../../../components/illustrations/ItemPhoto';

export default function Step2() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-s.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/step-2.html' },
    { n: 3, label: 'Báo giá', icon: 'paid', href: '/orders/new/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/step-6.html' },
  ];
  
  const detected = [
    { label: 'Chai PET 500ml trong suốt', count: '14 chai', pct: 78, icon: 'water_bottle' },
    { label: 'Chai nước ngọt có màu', count: '4 chai', pct: 22, icon: 'local_drink' },
  ];
  const reasons = [
    { icon: 'category', title: 'Vật liệu đồng nhất', desc: '100% nhựa PET — AI biết chính xác giá thị trường mỗi kg, không cần Hub rã xác.' },
    { icon: 'verified', title: 'Giá CHẮC CHẮN', desc: 'Báo giá ở bước sau là giá cuối — không thương lượng, không chờ verify.' },
    { icon: 'bolt', title: 'ZaloPay 60 giây', desc: 'Collector cân tại nhà → tiền vào ví ngay sau khi bạn xác nhận khối lượng.' },
  ];
  const refPrices = [
    { name: 'Chai PET sạch', price: '5.500đ/kg' },
    { name: 'Lon nhôm', price: '22.000đ/kg' },
    { name: 'Carton khô', price: '2.500đ/kg' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-s" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 1 · Chụp ảnh
            </a>
      
            <OrderStepperBar steps={steps} activeStep={2} tierAccent="tier-s" />
      
            <StepHero
              eyebrow="Tier S · Bước 2/6 · AI nhận diện"
              title="AI đã nhận diện vật phẩm"
              subtitle="Phân loại vật liệu, ước khối lượng, xác định Tier — confidence 97%"
              accent="tier-s"
              illustration="tier-s"
              chips={[
                { icon: 'smart_toy', label: 'Confidence', value: '97%', tone: 'mint' },
                { icon: 'scale', label: 'Khối lượng ước', value: '~3.2 kg', tone: 'sky' },
                { icon: 'check_circle', label: 'Tier', value: 'S · Standard', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">visibility</span>
                    KẾT QUẢ NHẬN DIỆN
                  </span>
      
                  <div className="mt-space-20 grid grid-cols-[220px_1fr] gap-space-24 items-center">
                    <div className="relative rounded-2xl overflow-hidden shadow-clay-sm border-2 border-tier-s/20 aspect-[4/3]">
                      <ItemPhoto item="pet" className="w-full h-full" />
                      <span className="absolute top-space-8 left-space-8 px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold uppercase tracking-wider">Tier S</span>
                      <div className="absolute inset-[16%] border-2 border-dashed border-white/85 rounded-lg"></div>
                      <span className="absolute bottom-space-8 right-space-8 px-space-8 py-[1px] rounded-full bg-bg-elevated/95 backdrop-blur font-mono-md text-[9px] text-tier-s font-bold">AI box · 97%</span>
                    </div>
                    <div className="text-col">
                      <h2 className="font-h2 text-h2 text-text-primary">Chai PET 500ml</h2>
                      <p className="font-mono-md text-[12px] text-text-tertiary mt-space-4">18 chai · ~3.2 kg · 5.500đ/kg</p>
                      <div className="mt-space-16">
                        <div className="flex items-center justify-between mb-space-4">
                          <span className="font-mono-md text-[11px] text-text-secondary uppercase tracking-wider">AI confidence</span>
                          <span className="font-mono-md text-[13px] text-tier-s font-bold tabular-nums">97%</span>
                        </div>
                        <div className="h-3 rounded-full bg-bg-base overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-tier-s to-lime-deep" style={{ 'width': '97%' }}></div>
                        </div>
                      </div>
                      <div className="mt-space-16">
                        <span className="font-mono-md text-[11px] text-text-secondary uppercase tracking-wider block mb-space-8">Vật liệu</span>
                        <div className="flex items-center gap-space-8">
                          <div className="flex-1 h-3 rounded-full bg-gradient-to-r from-tier-s to-lime-deep"></div>
                          <span className="font-mono-md text-[11px] text-tier-s font-bold whitespace-nowrap">100% PET nhựa</span>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="mt-space-24 flex flex-col gap-space-8">
                    {detected.map((d) => (
                      <div className="flex items-center gap-space-12 p-space-16 bg-bg-base/50 rounded-2xl border border-border-subtle">
                        <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-tier-s">{d.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{d.label}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{d.count}</span>
                        </div>
                        <div className="w-24 h-2 rounded-full bg-bg-base overflow-hidden shrink-0">
                          <div className="h-full rounded-full bg-tier-s" style={{ 'width': `${d.pct}%` }}></div>
                        </div>
                        <span className="font-mono-md text-[12px] text-text-secondary tabular-nums w-10 text-right shrink-0">{d.pct}%</span>
                      </div>
                    ))}
                  </div>
      
                  <div className="mt-space-24 flex justify-end gap-space-12 flex-wrap">
                    <a href="/orders/new/tier-s" className="px-space-24 py-space-12 rounded-2xl text-text-primary border border-border-default bg-bg-elevated shadow-clay-sm hover:shadow-clay font-medium text-[13px] transition inline-flex items-center gap-space-8">
                      <span className="material-symbols-rounded !text-[16px]">edit</span>
                      Sai? Sửa thủ công
                    </a>
                    <a href="/orders/new/step-3" className="px-space-32 py-[14px] rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">
                      Đúng → Bước 3 · Báo giá
                      <span className="material-symbols-rounded !text-[18px]">arrow_forward</span>
                    </a>
                  </div>
                </section>
              </div>
      
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-mint rounded-[24px] shadow-clay border-2 border-tier-s/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">help</span>
                    VÌ SAO LÀ TIER S?
                  </span>
                  <ul className="flex flex-col gap-space-12">
                    {reasons.map((r) => (
                      <li className="flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-tier-s">{r.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{r.title}</span>
                          <p className="font-body-md text-[12px] text-text-secondary mt-space-4">{r.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold block mb-space-12">GIÁ THỊ TRƯỜNG THAM KHẢO</span>
                  <div className="flex flex-col gap-space-8">
                    {refPrices.map((p) => (
                      <div className="flex items-center justify-between p-space-12 bg-bg-base/50 rounded-xl">
                        <span className="font-body-md text-[12px] text-text-secondary">{p.name}</span>
                        <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">{p.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono-md text-[10px] text-text-tertiary mt-space-12 text-col">Cập nhật theo sàn ve chai TPHCM · giá cuối ở bước 3</p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
