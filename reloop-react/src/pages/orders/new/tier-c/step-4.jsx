import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';
import StepHero from '../../../../components/order/StepHero';
import { USER } from '../../../../lib/mock';

export default function Step4() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-c.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/tier-c/step-2.html' },
    { n: 3, label: 'Dải BOM', icon: 'analytics', href: '/orders/new/tier-c/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/tier-c/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/tier-c/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-c/step-6.html' },
  ];
  
  const addresses = [
    { id: 'home', label: 'Nhà riêng', icon: 'home', tag: 'Mặc định', addr: `${USER.address}, ${USER.district}`, note: 'Chuông tầng 4 · có thang máy', selected: true },
    { id: 'office', label: 'Văn phòng', icon: 'business', tag: 'Công ty', addr: '15 Tôn Đức Thắng, P. Bến Nghé, Q.1, TPHCM', note: 'Lễ tân tầng 1 · hẹn trước 30p', selected: false },
  ];
  const nearby = [
    { name: 'Chị Hoa', dist: '0.8 km', rating: 4.9, done: 124, av: 'H', tag: 'Verified Tier C' },
    { name: 'Anh Phúc', dist: '2.1 km', rating: 4.7, done: 76, av: 'P', tag: 'Verified Tier C' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-c/step-3" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 3 · Dải BOM
            </a>
      
            <OrderStepperBar steps={steps} activeStep={4} tierAccent="tier-c" />
      
            <StepHero
              eyebrow="Tier C · Bước 4/6 · Địa chỉ thu gom"
              title="Collector chuyên Tier C đến tận nhà"
              subtitle="Đội verified xử lý vật phẩm hỗn hợp · có peek-check chống tráo ruột"
              accent="info"
              illustration="collector"
              chips={[
                { icon: 'verified_user', label: 'Collector', value: 'Verified Tier C', tone: 'sky' },
                { icon: 'pin_drop', label: 'Bán kính', value: '3 km', tone: 'mint' },
                { icon: 'fact_check', label: 'Anti-fraud', value: 'Peek-check', tone: 'sky' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-c font-semibold flex items-center gap-space-8 mb-space-16"><span className="material-symbols-rounded fill !text-[16px]">location_on</span>CHỌN ĐỊA CHỈ</span>
                  <div className="flex flex-col gap-space-12">
                    {addresses.map((a) => (
                      <label className={cx(['flex items-start gap-space-16 p-space-20 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm', a.selected ? 'bg-clay-peach border-tier-c' : 'bg-bg-base border-border-subtle hover:border-tier-c/40'])}>
                        <input type="radio" name="addr" checked={a.selected} className="mt-space-4 w-5 h-5 accent-tier-c" />
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[22px] text-tier-c">{a.icon}</span></div>
                        <div className="flex-1 text-col">
                          <div className="flex items-center gap-space-8 flex-wrap"><span className="font-display font-bold text-[15px] text-text-primary">{a.label}</span><span className="px-space-8 py-[2px] rounded-full bg-tier-c/15 text-tier-c font-mono-md text-[10px] font-bold uppercase tracking-wider">{a.tag}</span></div>
                          <p className="font-body-md text-[13px] text-text-secondary mt-space-4">{a.addr}</p>
                          <p className="font-mono-md text-[11px] text-text-tertiary mt-space-4 flex items-center gap-space-4"><span className="material-symbols-rounded !text-[12px]">sticky_note_2</span>{a.note}</p>
                        </div>
                      </label>
                    ))}
                  </div>
      
                  <div className="mt-space-20 relative rounded-2xl overflow-hidden border-2 border-tier-c/20 shadow-clay-sm h-[200px]">
                    <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <defs><pattern id="grid-c4" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C8D6BE" strokeWidth="0.5" opacity="0.6" /></pattern></defs>
                      <rect width="600" height="200" fill="#E5EDDD" /><rect width="600" height="200" fill="url(#grid-c4)" />
                      <path d="M 0 100 L 600 100" stroke="#A0B496" strokeWidth="14" opacity="0.4" /><path d="M 300 0 L 300 200" stroke="#A0B496" strokeWidth="10" opacity="0.4" />
                      <circle cx="190" cy="70" r="14" fill="#E68A3F" opacity="0.22" /><circle cx="190" cy="70" r="8" fill="#E68A3F" /><text x="190" y="52" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">HUB Q.7</text>
                      <circle cx="300" cy="120" r="6" fill="#3B8DD1" /><circle cx="430" cy="90" r="6" fill="#3B8DD1" />
                      <circle cx="390" cy="125" r="20" fill="#E68A3F" opacity="0.22" /><circle cx="390" cy="125" r="12" fill="#E68A3F" /><path d="M 390 113 L 390 137" stroke="#FFFFFF" strokeWidth="2" /><circle cx="390" cy="125" r="4" fill="#FFFFFF" /><text x="390" y="157" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">NHÀ BẠN</text>
                      <path d="M 300 120 Q 350 105 390 125" stroke="#E68A3F" strokeWidth="3" strokeDasharray="6 4" fill="none" opacity="0.7" />
                    </svg>
                    <div className="absolute top-space-12 right-space-12 bg-bg-elevated/95 backdrop-blur px-space-12 py-space-8 rounded-full shadow-clay-sm flex items-center gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-c">near_me</span><span className="font-mono-md text-[11px] text-text-primary font-bold">2 collector verified Tier C trong 3 km</span></div>
                  </div>
      
                  <div className="mt-space-20">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-8"><span className="material-symbols-rounded !text-[14px]">edit_note</span>GHI CHÚ CHO COLLECTOR</span>
                    <textarea rows="2" className="w-full p-space-16 bg-bg-base/50 border border-border-subtle rounded-2xl font-body-md text-[13px] text-text-primary resize-none focus:border-tier-c focus:outline-none">Mainboard bọc xốp chống va đập · đã chụp ảnh tình trạng · gọi trước 5 phút</textarea>
                  </div>
      
                  <div className="mt-space-20 flex justify-between gap-space-12">
                    <a href="/orders/new/tier-c/step-3" className="px-space-24 py-space-12 rounded-2xl text-text-primary border border-border-default bg-bg-elevated shadow-clay-sm hover:shadow-clay font-medium text-[13px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[16px]">arrow_back</span>Quay lại</a>
                    <a href="/orders/new/tier-c/step-5" className="px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Chọn lịch hẹn → Bước 5<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
                  </div>
                </section>
              </div>
      
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-sky rounded-[24px] shadow-clay border-2 border-info/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">group</span>COLLECTOR VERIFIED TIER C</span>
                  <div className="flex flex-col gap-space-8">
                    {nearby.map((c) => (
                      <div className="flex items-center gap-space-12 p-space-12 bg-bg-elevated/70 rounded-2xl">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-clay-peach to-tier-c flex items-center justify-center text-white font-display font-extrabold shadow-clay-sm shrink-0">{c.av}</div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">{c.name}</span><span className="font-mono-md text-[10px] text-text-tertiary">★ {c.rating} · {c.done} đơn · {c.dist}</span></div>
                        <span className="material-symbols-rounded fill !text-[16px] text-tier-s shrink-0">verified</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24 flex items-start gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-clay-peach flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-c">fact_check</span></div>
                  <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">Peek-check tại nhà</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">Collector xé góc nhỏ vỏ vật phẩm verify không có gạch/xi măng tráo ruột — bắt buộc với user Trust &lt; 50.</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
