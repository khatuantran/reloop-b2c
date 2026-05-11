import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';
import StepHero from '../../../../components/order/StepHero';

export default function Step5() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-c.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/tier-c/step-2.html' },
    { n: 3, label: 'Dải BOM', icon: 'analytics', href: '/orders/new/tier-c/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/tier-c/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/tier-c/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-c/step-6.html' },
  ];
  
  const days = [
    {
      day: 'Hôm nay', dow: 'T7', date: '10', slots: [
        { time: '14:00 — 16:00', collectors: 3, eta: '~14 phút', state: 'recommended', label: 'Đề xuất · Hub kịp nhận' },
        { time: '15:00 — 17:00', collectors: 2, eta: '~18 phút', state: 'available' },
      ],
    },
    {
      day: 'Mai', dow: 'CN', date: '11', slots: [
        { time: '08:00 — 10:00', collectors: 4, eta: '~12 phút', state: 'available' },
        { time: '10:00 — 12:00', collectors: 3, eta: '~16 phút', state: 'available' },
      ],
    },
  ];
  const heat = [
    [0, 1, 2, 0],
    [1, 2, 2, 1],
    [1, 2, 1, 0],
  ];
  const heatColor = (v) => v >= 2 ? 'bg-tier-c' : v === 1 ? 'bg-tier-c/45' : 'bg-bg-base';
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-c/step-4" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 4 · Địa chỉ
            </a>
      
            <OrderStepperBar steps={steps} activeStep={5} tierAccent="tier-c" />
      
            <StepHero
              eyebrow="Tier C · Bước 5/6 · Khung giờ"
              title="Chọn slot tiện nhất"
              subtitle="Tier C chỉ thu giờ hành chính 8h–17h để Hub kịp tiếp nhận trong ngày"
              accent="tier-c"
              illustration="hub"
              chips={[
                { icon: 'schedule', label: 'Khung Tier C', value: '8h–17h', tone: 'peach' },
                { icon: 'today', label: 'Đặt trước', value: 'Tới 3 ngày', tone: 'sky' },
                { icon: 'precision_manufacturing', label: 'Hub rã xác', value: '16–24h', tone: 'butter' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-c font-semibold flex items-center gap-space-8 mb-space-16"><span className="material-symbols-rounded fill !text-[16px]">event</span>CHỌN KHUNG GIỜ</span>
                  <div className="flex flex-col gap-space-16">
                    {days.map((d) => (
                      <div className="bg-bg-base/50 rounded-2xl border border-border-subtle p-space-20">
                        <div className="flex items-center gap-space-12 mb-space-12">
                          <div className="w-14 h-14 rounded-2xl bg-clay-peach flex items-center justify-center shadow-clay-sm shrink-0 text-center"><div><span className="font-mono-md text-[9px] text-tier-c font-bold uppercase block leading-none">{d.dow}</span><span className="font-display font-extrabold text-[16px] text-text-primary tabular-nums leading-none mt-[2px] block">{d.date}</span></div></div>
                          <div className="text-col"><span className="font-display font-bold text-[15px] text-text-primary block">{d.day}</span><span className="font-mono-md text-[11px] text-text-tertiary">{d.date}/05/2026 · giờ hành chính</span></div>
                        </div>
                        <div className="grid grid-cols-2 gap-space-8">
                          {d.slots.map((s) => (
                            <label className={cx(['relative p-space-16 rounded-xl border-2 cursor-pointer transition shadow-clay-sm text-col', s.state === 'recommended' ? 'bg-clay-peach border-tier-c' : 'bg-bg-elevated border-border-subtle hover:border-tier-c/40'])}>
                              <input type="radio" name="slot" checked={s.state === 'recommended'} className="absolute top-space-8 right-space-8 w-4 h-4 accent-tier-c" />
                              <span className="font-display font-bold text-[13px] text-text-primary block tabular-nums">{s.time}</span>
                              <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4 flex items-center gap-space-4"><span className="material-symbols-rounded !text-[12px]">group</span>{s.collectors} rảnh · {s.eta}</span>
                              {s.label && <span className="absolute -top-2 left-space-8 px-space-8 py-[1px] rounded-full bg-tier-c text-white font-mono-md text-[9px] font-bold whitespace-nowrap shadow-clay-sm">{s.label}</span>}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono-md text-[11px] text-text-tertiary mt-space-16 flex items-start gap-space-4"><span className="material-symbols-rounded !text-[14px]">info</span><span className="text-col">Chọn sớm trong ngày → Hub kịp rã xác cùng ngày → có BOM thực nhanh hơn.</span></p>
                  <div className="mt-space-20 flex justify-between gap-space-12">
                    <a href="/orders/new/tier-c/step-4" className="px-space-24 py-space-12 rounded-2xl text-text-primary border border-border-default bg-bg-elevated shadow-clay-sm hover:shadow-clay font-medium text-[13px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[16px]">arrow_back</span>Quay lại</a>
                    <a href="/orders/new/tier-c/step-6" className="px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Tiếp tục → Bước 6 · Xác nhận<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
                  </div>
                </section>
              </div>
      
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-peach rounded-[24px] shadow-clay border-2 border-tier-c/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-c font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">calendar_month</span>MẬT ĐỘ COLLECTOR TIER C</span>
                  <div className="flex gap-space-4 mb-space-8"><span className="w-8 shrink-0"></span>{['8h','10h','14h','16h'].map((h) => <span className="flex-1 text-center font-mono-md text-[9px] text-text-tertiary">{h}</span>)}</div>
                  {heat.map((row, ri) => (
                    <div className="flex items-center gap-space-4 mb-space-4">
                      <span className="w-8 shrink-0 font-mono-md text-[9px] text-text-tertiary text-right">{['T7','CN','T2'][ri]}</span>
                      {row.map((v) => <span className={cx(['flex-1 h-5 rounded-md', heatColor(v)])}></span>)}
                    </div>
                  ))}
                  <div className="flex items-center gap-space-8 mt-space-12 font-mono-md text-[9px] text-text-tertiary"><span className="w-3 h-3 rounded bg-bg-base"></span>Không thu<span className="w-3 h-3 rounded bg-tier-c/45"></span>Vừa<span className="w-3 h-3 rounded bg-tier-c"></span>Nhiều</div>
                </div>
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24 flex items-start gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-clay-peach flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-c">schedule</span></div>
                  <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">Vì sao chỉ 8h–17h?</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">Hub đóng cửa tiếp nhận sau 18h. Thu trong giờ hành chính → vật phẩm vào Hub cùng ngày, rã xác nhanh.</p></div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
