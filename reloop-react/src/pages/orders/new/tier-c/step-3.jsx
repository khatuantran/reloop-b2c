import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';
import StepHero from '../../../../components/order/StepHero';
import { USER } from '../../../../lib/mock';

export default function Step3() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-c.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/tier-c/step-2.html' },
    { n: 3, label: 'Dải BOM', icon: 'analytics', href: '/orders/new/tier-c/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/tier-c/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/tier-c/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-c/step-6.html' },
  ];
  
  const lowEst = 25_000;
  const highEst = 60_000;
  const advance = 60_000; // tạm ứng theo Trust score
  const bomTimeline = [
    { icon: 'scale', t: 'Collector cân tại nhà', d: 'Smart Scale + peek-check chống tráo ruột' },
    { icon: 'pending_actions', t: 'HOLD ví ảo ngay', d: `~${advance.toLocaleString('vi-VN')}đ giữ trong ví, chưa rút được` },
    { icon: 'precision_manufacturing', t: 'Hub rã xác 16-24h', d: 'Cân BOM thực: đồng / sắt / nhôm / nhựa' },
    { icon: 'price_check', t: 'Phần chênh về ZaloPay', d: 'BOM thực ≥ tạm ứng → trả thêm tự động' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-c/step-2" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 2 · AI nhận diện
            </a>
      
            <OrderStepperBar steps={steps} activeStep={3} tierAccent="tier-c" />
      
            <StepHero
              eyebrow="Tier C · Bước 3/6 · Dải giá BOM-based"
              title="Dải giá kỳ vọng + tạm ứng ví ảo"
              subtitle="Giá chốt sau khi Hub rã xác — tạm ứng theo Trust Score, phần chênh ZaloPay sau"
              accent="tier-c"
              illustration="hub"
              chips={[
                { icon: 'pending_actions', label: 'Tạm ứng', value: 'Ví ảo HOLD', tone: 'peach' },
                { icon: 'fact_check', label: 'BOM Library', value: '95% accuracy', tone: 'mint' },
                { icon: 'lock', label: 'Auto-release', value: 'Sau verify', tone: 'butter' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Range card */}
                <section className="bg-clay-peach rounded-[28px] shadow-clay border-2 border-tier-c/30 p-space-40 relative overflow-hidden">
                  <svg className="absolute top-space-16 right-space-24 w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#E68A3F" opacity="0.5" /></svg>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-c font-semibold flex items-center gap-space-8"><span className="material-symbols-rounded fill !text-[16px]">price_change</span>DẢI GIÁ KỲ VỌNG</span>
                  <div className="font-display font-extrabold text-[40px] text-text-primary tabular-nums leading-none mt-space-12">{lowEst.toLocaleString('vi-VN')} – {highEst.toLocaleString('vi-VN')}đ</div>
                  <p className="font-body-md text-[13px] text-text-secondary mt-space-8">~1.0 kg · chốt chính xác sau Hub rã xác (16-24h)</p>
                  <div className="mt-space-24 p-space-20 bg-bg-elevated/60 rounded-2xl">
                    <div className="flex items-baseline justify-between">
                      <span className="font-body-md text-[13px] text-text-secondary">Tạm ứng <strong className="text-text-primary">90%</strong> · Trust {USER.trustScore} ({USER.trustScore >= 70 ? 'Đáng tin' : 'Đang tích lũy'})</span>
                      <span className="font-mono-md text-[28px] text-amber-deep font-bold tabular-nums">{advance.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <div className="flex items-center gap-space-8 text-amber-deep font-mono-md text-[11px] font-semibold mt-space-8"><span className="material-symbols-rounded fill !text-[14px]">lock</span>HOLD ví ảo · auto-release sau khi Hub verify mass-balance ≥ 90%</div>
                  </div>
                </section>
      
                {/* Why not fixed price */}
                <section className="bg-clay-butter rounded-[28px] shadow-clay-sm border-2 border-amber-deep/30 p-space-32">
                  <div className="flex items-center gap-space-8 mb-space-12">
                    <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-amber-deep">help</span></div>
                    <span className="font-display font-bold text-[16px] text-text-primary">Vì sao không định giá ngay?</span>
                  </div>
                  <p className="font-body-md text-[13px] text-text-secondary text-col">Mainboard PC chứa hỗn hợp đồng/nhôm/nhựa/FR4 với tỷ lệ khác nhau từng board. AI nhìn vỏ ngoài không biết chính xác. Sau khi Hub rã xác, cân BOM thực, RE-LOOP chuyển <strong className="text-text-primary">phần chênh</strong> vào ZaloPay. Nếu BOM thực thấp hơn tạm ứng, bạn <strong className="text-text-primary">vẫn giữ nguyên tạm ứng</strong> — không bị trừ.</p>
                  <div className="mt-space-16 grid grid-cols-2 gap-space-12">
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-16 text-col"><span className="material-symbols-rounded fill !text-[20px] text-tier-s">trending_up</span><span className="font-display font-bold text-[12px] text-text-primary block mt-space-4">BOM cao hơn?</span><span className="font-mono-md text-[10px] text-text-tertiary block">→ Phần chênh ZaloPay tự động</span></div>
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-16 text-col"><span className="material-symbols-rounded fill !text-[20px] text-amber-deep">shield</span><span className="font-display font-bold text-[12px] text-text-primary block mt-space-4">BOM thấp hơn?</span><span className="font-mono-md text-[10px] text-text-tertiary block">→ Giữ nguyên tạm ứng, không trừ</span></div>
                  </div>
                </section>
      
                <div className="flex justify-between gap-space-12">
                  <a href="/orders/new/tier-c/step-2" className="px-space-24 py-space-12 rounded-2xl text-text-primary border border-border-default bg-bg-elevated shadow-clay-sm hover:shadow-clay font-medium text-[13px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[16px]">arrow_back</span>Quay lại</a>
                  <a href="/orders/new/tier-c/step-4" className="px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Tiếp tục → Bước 4 · Địa chỉ<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
                </div>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-c font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">timeline</span>HÀNH TRÌNH TỚI BOM THỰC</span>
                  <ol className="relative">
                    <div className="absolute left-[15px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
                    <div className="flex flex-col gap-space-16">
                      {bomTimeline.map((x, i) => (
                        <li className="relative flex items-start gap-space-12">
                          <div className={cx(['relative z-10 w-8 h-8 rounded-xl flex items-center justify-center shadow-clay-sm shrink-0 border-2', i === 0 ? 'bg-clay-peach text-tier-c border-tier-c' : 'bg-bg-base text-text-tertiary border-border-subtle'])}><span className="material-symbols-rounded fill !text-[14px]">{x.icon}</span></div>
                          <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{x.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block mt-[2px]">{x.d}</span></div>
                        </li>
                      ))}
                    </div>
                  </ol>
                </div>
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-20 flex items-start gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-s">scale</span></div>
                  <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">Mass-balance ≥ 90%</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">Tổng vật liệu sau rã ≥ 90% khối lượng đã cân → đảm bảo không thất thoát.</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
