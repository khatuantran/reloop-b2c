import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';
import CollectorScene from '../../../../components/illustrations/CollectorScene';

export default function Auction() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Auction Live', icon: 'gavel', href: '/orders/new/tier-b/auction-live.html' },
    { n: 4, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/auction-address.html' },
    { n: 5, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/auction-confirm.html' },
  ];
  
  const broadcastedHubs = [
    { name: 'Hub Q.7 RE-LOOP', distance: '0.8 km', collectors: 4, status: 'received' },
    { name: 'Hub Bình Thạnh', distance: '2.4 km', collectors: 5, status: 'received' },
    { name: 'Hub Q.4', distance: '3.1 km', collectors: 3, status: 'received' },
  ];
  const totalCollectors = broadcastedHubs.reduce((s, h) => s + h.collectors, 0);
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b/quote" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại Speed Mode
            </a>
      
            <OrderStepperBar steps={steps} activeStep={3} tierAccent="amber-deep" />
      
            {/* Confirmed photo summary */}
            <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl p-space-16 mb-space-24 flex items-center gap-space-12 shadow-clay-sm min-w-0">
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">verified</span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-mono-md text-[10px] uppercase tracking-wider text-amber-deep font-bold block">ẢNH ĐÃ XÁC NHẬN · BƯỚC 1 ✓</span>
                <span className="font-display font-bold text-[14px] text-text-primary truncate block">Tủ lạnh đôi 300L Samsung RT35K (~62 kg) · AI confidence 94%</span>
              </div>
              <a href="/orders/new/tier-b" className="font-mono-md text-[11px] text-amber-deep font-bold hover:underline shrink-0">Sửa ảnh</a>
            </div>
      
            {/* Mode tabs */}
            <div className="bg-bg-elevated rounded-full shadow-clay-sm border border-border-subtle p-space-8 inline-flex gap-space-4 mb-space-32">
              <a href="/orders/new/tier-b/quote" className="px-space-32 py-space-12 rounded-full text-text-secondary font-mono-md text-[13px] font-semibold hover:bg-bg-surface flex items-center gap-space-8 transition">
                <span className="material-symbols-rounded !text-[16px]">flash_on</span>
                Speed Mode
              </a>
              <a href="/orders/new/tier-b/auction" className="px-space-32 py-space-12 rounded-full bg-clay-sky border-2 border-info text-info font-mono-md text-[13px] font-bold shadow-clay-sm flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[16px]">gavel</span>
                Auction Mode
                <span className="px-space-8 py-[1px] rounded-full bg-amber-deep text-white font-mono-md text-[10px] font-bold animate-pulse">CHỜ</span>
              </a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              {/* LEFT main */}
              <div className="flex flex-col gap-space-24">
                {/* Big waiting hero */}
                <section className="bg-clay-sky border-2 border-info/40 rounded-[28px] shadow-clay p-space-48 relative overflow-hidden">
                  {/* Multiple pulse rings */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-info/30 animate-ping" style={{ 'animationDuration': '3s' }}></div>
                    <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-info/20 animate-ping" style={{ 'animationDuration': '3s', 'animationDelay': '0.6s' }}></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full border border-info/15 animate-ping" style={{ 'animationDuration': '3s', 'animationDelay': '1.2s' }}></div>
                  </div>
      
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-3xl bg-bg-elevated flex items-center justify-center shadow-clay-lg mb-space-24 relative">
                      <span className="material-symbols-rounded fill !text-[48px] text-info">gavel</span>
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-tier-h animate-pulse shadow-[0_0_16px_var(--tier-h)]"></span>
                    </div>
      
                    <span className="font-mono-md text-[12px] uppercase tracking-[0.3em] text-info font-bold flex items-center gap-space-8 mb-space-12">
                      <span className="w-2 h-2 rounded-full bg-tier-h animate-pulse"></span>
                      ĐANG GỬI YÊU CẦU
                      <span className="w-2 h-2 rounded-full bg-tier-h animate-pulse"></span>
                    </span>
                    <h1 className="font-display-l text-[48px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Chờ collector báo giá...</h1>
                    <p className="font-body-lg text-[16px] text-text-secondary max-w-[480px] mb-space-24">
                      Đã broadcast yêu cầu tới <strong className="text-info">{totalCollectors} collector</strong> trong bán kính 5km · Báo giá đầu tiên thường đến trong <strong className="text-tier-s">3-8 phút</strong>
                    </p>
      
                    {/* Live countdown */}
                    <div className="bg-bg-elevated/95 backdrop-blur rounded-2xl shadow-clay border border-info/30 px-space-24 py-space-16 mb-space-16 inline-flex items-center gap-space-16">
                      <div className="text-center">
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">ĐÃ MỞ</span>
                        <span className="font-display font-extrabold text-[28px] text-text-primary tabular-nums leading-none mt-space-4 block">00:42</span>
                      </div>
                      <div className="w-px h-10 bg-border-subtle"></div>
                      <div className="text-center">
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">CÒN LẠI</span>
                        <span className="font-display font-extrabold text-[28px] text-tier-s tabular-nums leading-none mt-space-4 block">29:18</span>
                      </div>
                      <div className="w-px h-10 bg-border-subtle"></div>
                      <div className="text-center">
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">BÁO GIÁ</span>
                        <span className="font-display font-extrabold text-[28px] text-amber-deep tabular-nums leading-none mt-space-4 block">0/5</span>
                      </div>
                    </div>
      
                    <a href="/orders/new/tier-b/auction-live" className="bg-text-primary text-white px-space-32 py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                      <span className="material-symbols-rounded fill !text-[18px]">visibility</span>
                      Xem báo giá đang đến
                    </a>
                  </div>
                </section>
      
                {/* Empty bid skeleton list */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-end justify-between mb-space-16">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">hourglass_top</span>
                        CHỜ COLLECTOR XEM YÊU CẦU
                      </span>
                      <h3 className="font-h3 text-h3 text-text-primary mt-space-8">5 chỗ trống đang chờ báo giá</h3>
                    </div>
                    <span className="font-mono-md text-[11px] text-text-tertiary inline-flex items-center gap-space-4">
                      <span className="w-2 h-2 rounded-full bg-tier-s animate-pulse"></span>
                      Auto-refresh mỗi 5s
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-12">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div className={cx(['flex items-center gap-space-16 p-space-16 rounded-2xl border-2 border-dashed shadow-clay-sm', i === 1 ? 'border-info/40 bg-clay-sky/30 animate-pulse' : 'border-border-subtle bg-bg-surface'])}>
                        <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', i === 1 ? 'bg-clay-sky' : 'bg-bg-elevated'])}>
                          <span className={cx(['material-symbols-rounded !text-[22px]', i === 1 ? 'fill text-info' : 'text-text-tertiary'])}>{i === 1 ? 'visibility' : 'person'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8 mb-space-4">
                            <div className="h-3 w-24 rounded-full bg-bg-elevated"></div>
                            <div className={cx(['h-4 w-12 rounded-full', i === 1 ? 'bg-info/30' : 'bg-bg-elevated'])}></div>
                          </div>
                          <div className="h-2.5 w-40 rounded-full bg-bg-elevated/70 mb-space-4"></div>
                          {i === 1 && <span className="font-mono-md text-[10px] text-info font-bold">Anh Hùng (Hub Q.7) đang xem · báo giá trong 1-2 phút</span>}
                          {i !== 1 && <div className="h-2 w-32 rounded-full bg-bg-elevated/70"></div>}
                        </div>
                        <div className="text-right shrink-0">
                          <div className="h-5 w-24 rounded-full bg-bg-elevated mb-space-4"></div>
                          <div className="h-2 w-16 rounded-full bg-bg-elevated/70 ml-auto"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Broadcast status */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">podcasts</span>
                    ĐÃ GỬI YÊU CẦU TỚI
                  </span>
                  <h3 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-16">{broadcastedHubs.length} Hub · {totalCollectors} collector</h3>
                  <div className="grid grid-cols-3 gap-space-12">
                    {broadcastedHubs.map((h) => (
                      <div className="bg-clay-mint rounded-2xl p-space-16 border-2 border-tier-s/30 shadow-clay-sm">
                        <div className="flex items-center gap-space-8 mb-space-8">
                          <div className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                            <span className="material-symbols-rounded fill !text-[18px] text-tier-s">warehouse</span>
                          </div>
                          <span className="material-symbols-rounded fill !text-[16px] text-tier-s ml-auto">check_circle</span>
                        </div>
                        <span className="font-display font-bold text-[13px] text-text-primary block leading-tight">{h.name}</span>
                        <span className="font-mono-md text-[11px] text-text-tertiary mt-space-4 block">{h.distance} · {h.collectors} collector</span>
                      </div>
                    ))}
                  </div>
                  {/* Map preview placeholder */}
                  <div className="mt-space-16 rounded-2xl overflow-hidden border-2 border-border-subtle shadow-clay-sm relative h-[160px] bg-gradient-to-br from-clay-sky via-clay-mint to-clay-butter">
                    <svg viewBox="0 0 600 160" className="absolute inset-0 w-full h-full opacity-40">
                      <g stroke="#88AA77" strokeWidth="0.5" fill="none">
                        {[40, 80, 120].map((y) => <line x1="0" y1={y} x2="600" y2={y}/>)}
                        {[100, 200, 300, 400, 500].map((x) => <line x1={x} y1="0" x2={x} y2="160"/>)}
                      </g>
                      <path d="M0 80 Q150 60 300 90 T600 70" stroke="#FAFAF7" strokeWidth="6" fill="none"/>
                      <path d="M280 0 Q300 80 320 160" stroke="#FAFAF7" strokeWidth="4" fill="none"/>
                    </svg>
                    {/* Center user pin */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-tier-s text-white flex items-center justify-center shadow-clay-lg">
                        <span className="material-symbols-rounded fill !text-[24px]">home</span>
                      </div>
                      {/* Broadcast rings */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-info/40 animate-ping"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-info/30 animate-ping" style={{ 'animationDelay': '0.5s' }}></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-info/20 animate-ping" style={{ 'animationDelay': '1s' }}></div>
                    </div>
                    {/* Hub pins */}
                    <div className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-info text-white flex items-center justify-center shadow-clay border-2 border-white">
                      <span className="material-symbols-rounded fill !text-[14px]">warehouse</span>
                    </div>
                    <div className="absolute top-[60%] left-[78%] w-8 h-8 rounded-full bg-info text-white flex items-center justify-center shadow-clay border-2 border-white">
                      <span className="material-symbols-rounded fill !text-[14px]">warehouse</span>
                    </div>
                    <div className="absolute top-[20%] left-[70%] w-8 h-8 rounded-full bg-info text-white flex items-center justify-center shadow-clay border-2 border-white">
                      <span className="material-symbols-rounded fill !text-[14px]">warehouse</span>
                    </div>
                    <div className="absolute bottom-space-8 left-space-8 bg-bg-elevated/95 backdrop-blur rounded-xl px-space-12 py-[4px] shadow-clay-sm flex items-center gap-space-4">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">podcasts</span>
                      <span className="font-mono-md text-[11px] text-text-primary font-bold">Bán kính 5 km · {broadcastedHubs.length} Hub</span>
                    </div>
                  </div>
                </section>
              </div>
      
              {/* RIGHT sidebar */}
              <div className="flex flex-col gap-space-16">
                {/* Action card: cancel auction */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">tune</span>
                    CÒN PHÂN VÂN?
                  </span>
                  <h4 className="font-h3 text-h3 text-text-primary mb-space-12">Có thể đổi ngay</h4>
                  <a href="/orders/new/tier-b/quote" className="w-full bg-clay-butter border-2 border-amber-deep/40 text-amber-deep py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:shadow-clay transition mb-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">flash_on</span>
                    Chốt Speed sàn 1.200.000đ ngay
                  </a>
                  <button className="w-full bg-bg-surface text-tier-h border border-tier-h/40 py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:shadow-clay transition">
                    <span className="material-symbols-rounded fill !text-[16px]">cancel</span>
                    Huỷ phiên auction
                  </button>
                  <p className="font-mono-md text-[10px] text-text-tertiary mt-space-8 text-center">Huỷ không ảnh hưởng Trust Score</p>
                </div>
      
                {/* Live broadcast illustration card */}
                <div className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 relative overflow-hidden">
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30">
                    <CollectorScene className="w-full h-full" />
                  </div>
                  <div className="relative z-10">
                    <span className="material-symbols-rounded fill !text-[24px] text-info">podcasts</span>
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold block mt-space-8">DEMO TIMELINE</span>
                    <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-12">Giai đoạn auction</h4>
                    <ol className="flex flex-col gap-space-8">
                      {[
                        { t: '0:00', label: 'Bạn submit yêu cầu', done: true, current: false },
                        { t: '0:42', label: 'Đang broadcast (hiện tại)', done: false, current: true },
                        { t: '~3-5p', label: 'Báo giá đầu tiên đến', done: false, current: false },
                        { t: '~15p', label: '3-5 báo giá đầy đủ', done: false, current: false },
                        { t: '30:00', label: 'Auto-accept báo giá cao nhất', done: false, current: false },
                      ].map((s) => (
                        <li className="flex items-start gap-space-8">
                          <span className={cx(['w-6 h-6 rounded-full flex items-center justify-center shadow-clay-sm shrink-0 border-2', s.done ? 'bg-tier-s text-white border-tier-s' : s.current ? 'bg-info text-white border-info animate-pulse' : 'bg-bg-elevated border-border-subtle'])}>
                            <span className="material-symbols-rounded fill !text-[12px]">{s.done ? 'check' : s.current ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold block', s.done ? 'text-tier-s' : s.current ? 'text-info' : 'text-text-tertiary'])}>{s.t}</span>
                            <span className={cx(['font-display font-bold text-[12px] block leading-tight', s.done || s.current ? 'text-text-primary' : 'text-text-tertiary'])}>{s.label}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
      
                {/* Trust info */}
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24 min-w-0">
                  <span className="material-symbols-rounded fill !text-[24px] text-tier-s">notifications_active</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mt-space-8">SẼ THÔNG BÁO</span>
                  <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-8">Khi có báo giá mới</h4>
                  <p className="font-body-md text-[12px] text-text-secondary leading-relaxed">
                    Push notification + SMS (đăng ký tại Hồ sơ). Có thể đóng tab, auction vẫn chạy nền 30 phút.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
