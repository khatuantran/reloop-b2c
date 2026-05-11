import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function Address() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/address.html' },
    { n: 4, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/confirm.html' },
  ];
  
  const addresses = [
    { id: 'home', label: 'Nhà riêng', address: '124/15 Nguyễn Thị Thập, P. Tân Phú, Q.7, TPHCM', tag: 'Mặc định', note: 'Chuông tầng 4 · Có thang máy', icon: 'home', selected: true },
    { id: 'office', label: 'Văn phòng', address: '15 Tôn Đức Thắng, P. Bến Nghé, Q.1, TPHCM', tag: 'Công ty', note: 'Lễ tân tầng 1 · Hẹn trước 30p', icon: 'business' },
  ];
  
  const slots = [
    { day: 'Hôm nay', date: '10/05', dayOfWeek: 'Thứ 7', windows: [
      { time: '14:00 — 16:00', status: 'available', collectors: 4 },
      { time: '16:00 — 18:00', status: 'recommended', collectors: 6, label: 'Đề xuất · ETA tốt nhất' },
    ]},
    { day: 'Mai', date: '11/05', dayOfWeek: 'CN', windows: [
      { time: '08:00 — 10:00', status: 'available', collectors: 5 },
      { time: '10:00 — 12:00', status: 'available', collectors: 7 },
      { time: '14:00 — 16:00', status: 'busy', collectors: 2 },
    ]},
    { day: 'Thứ 2', date: '12/05', dayOfWeek: 'T2', windows: [
      { time: '08:00 — 10:00', status: 'available', collectors: 8 },
      { time: '14:00 — 16:00', status: 'available', collectors: 6 },
    ]},
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b/quote" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 2 · Quote
            </a>
      
            <OrderStepperBar steps={steps} activeStep={3} tierAccent="amber-deep" />
      
            {/* Mode confirmed banner */}
            <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl p-space-16 mb-space-24 flex items-center gap-space-12 shadow-clay-sm">
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">flash_on</span>
              </div>
              <div className="flex-1 text-col">
                <span className="font-mono-md text-[10px] uppercase tracking-wider text-amber-deep font-bold block">SPEED MODE · BƯỚC 2 ✓</span>
                <span className="font-display font-bold text-[14px] text-text-primary">Tủ lạnh đôi 300L · Giá sàn 1.200.000đ · Premium tối đa +450.000đ</span>
              </div>
              <a href="/orders/new/tier-b/quote" className="font-mono-md text-[11px] text-amber-deep font-bold hover:underline shrink-0">Đổi mode</a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Address picker */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center justify-between mb-space-16">
                    <div className="text-col">
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">location_on</span>
                        ĐỊA CHỈ THU GOM
                      </span>
                      <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Hub Q.7 đến tận nơi</h2>
                    </div>
                    <button className="bg-clay-butter border-2 border-amber-deep/40 px-space-16 py-space-8 rounded-full font-mono-md text-[12px] text-amber-deep font-bold shadow-clay-sm hover:shadow-clay shrink-0 inline-flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[14px]">add</span>
                      Thêm
                    </button>
                  </div>
      
                  <div className="flex flex-col gap-space-12">
                    {addresses.map((a) => (
                      <label className={cx(['flex items-start gap-space-16 p-space-20 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm', a.selected ? 'bg-clay-butter border-amber-deep' : 'bg-bg-base border-border-subtle hover:border-amber-deep/40'])}>
                        <input type="radio" name="address" checked={a.selected} className="mt-space-4 w-5 h-5 accent-amber-deep" />
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">{a.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <div className="flex items-center gap-space-8 flex-wrap">
                            <span className="font-display font-bold text-[15px] text-text-primary">{a.label}</span>
                            <span className="px-space-8 py-[2px] rounded-full bg-amber-deep/15 text-amber-deep font-mono-md text-[10px] font-bold uppercase tracking-wider">{a.tag}</span>
                          </div>
                          <p className="font-body-md text-[13px] text-text-secondary mt-space-4">{a.address}</p>
                          <p className="font-mono-md text-[11px] text-text-tertiary mt-space-4 flex items-center gap-space-4">
                            <span className="material-symbols-rounded !text-[12px]">sticky_note_2</span>
                            {a.note}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
      
                  {/* Mini map preview */}
                  <div className="mt-space-20 relative rounded-2xl overflow-hidden border-2 border-amber-deep/20 shadow-clay-sm h-[180px]">
                    <svg viewBox="0 0 600 180" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id="grid-addr" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C8D6BE" strokeWidth="0.5" opacity="0.6" />
                        </pattern>
                      </defs>
                      <rect width="600" height="180" fill="#E5EDDD" />
                      <rect width="600" height="180" fill="url(#grid-addr)" />
                      {/* Roads */}
                      <path d="M 0 90 L 600 90" stroke="#A0B496" strokeWidth="14" opacity="0.4" />
                      <path d="M 280 0 L 280 180" stroke="#A0B496" strokeWidth="10" opacity="0.4" />
                      <path d="M 100 30 Q 250 60 400 100 T 600 140" stroke="#A0B496" strokeWidth="6" opacity="0.35" fill="none" />
                      {/* Hub Q.7 */}
                      <circle cx="180" cy="60" r="14" fill="#52E08D" opacity="0.25" />
                      <circle cx="180" cy="60" r="8" fill="#2BB36A" />
                      <text x="180" y="42" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">HUB Q.7</text>
                      {/* Pickup pin */}
                      <circle cx="380" cy="110" r="20" fill="#E8B340" opacity="0.25" />
                      <circle cx="380" cy="110" r="12" fill="#E8B340" />
                      <path d="M 380 98 L 380 122" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="380" cy="110" r="4" fill="#FFFFFF" />
                      <text x="380" y="142" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">NHÀ BẠN</text>
                      {/* Route line */}
                      <path d="M 180 60 Q 280 40 380 110" stroke="#E8B340" strokeWidth="3" strokeDasharray="6 4" fill="none" opacity="0.7" />
                    </svg>
                    <div className="absolute top-space-12 right-space-12 bg-bg-elevated/95 backdrop-blur px-space-12 py-space-8 rounded-full shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-amber-deep">local_shipping</span>
                      <span className="font-mono-md text-[11px] text-text-primary font-bold tabular-nums">2.4 km · ~12 phút</span>
                    </div>
                  </div>
                </section>
      
                {/* Slot picker */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="mb-space-16 text-col">
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">event</span>
                      KHUNG GIỜ THU GOM
                    </span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Chọn slot tiện nhất</h2>
                    <p className="font-body-md text-[13px] text-text-secondary mt-space-4">Hub Q.7 mở từ 7h-19h hàng ngày · Tier B nặng nên thường trưa-chiều có nhiều collector rảnh hơn</p>
                  </div>
      
                  <div className="flex flex-col gap-space-16">
                    {slots.map((s) => (
                      <div className="bg-bg-base/50 rounded-2xl border border-border-subtle p-space-20">
                        <div className="flex items-center gap-space-12 mb-space-12">
                          <div className="w-14 h-14 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0">
                            <div className="text-center">
                              <span className="font-mono-md text-[9px] text-amber-deep font-bold uppercase block leading-none">{s.dayOfWeek}</span>
                              <span className="font-display font-extrabold text-[16px] text-text-primary tabular-nums leading-none mt-[2px] block">{s.date.split('/')[0]}</span>
                            </div>
                          </div>
                          <div className="text-col">
                            <span className="font-display font-bold text-[15px] text-text-primary block">{s.day}</span>
                            <span className="font-mono-md text-[11px] text-text-tertiary">{s.date}/2026</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-space-8">
                          {s.windows.map((w) => (
                            <label className={cx(['tile-pickable rounded-xl border-2 cursor-pointer transition shadow-clay-sm text-col',
                              w.label && 'tile-pickable-chip',
                              w.status === 'recommended' ? 'bg-clay-butter border-amber-deep' :
                              w.status === 'busy' ? 'bg-bg-base/30 border-border-subtle opacity-50 cursor-not-allowed' :
                              'bg-bg-elevated border-border-subtle hover:border-amber-deep/40'])}>
                              <input type="radio" name="slot" disabled={w.status === 'busy'} checked={w.status === 'recommended'} className="absolute top-space-8 right-space-8 w-4 h-4 accent-amber-deep" />
                              <span className="font-display font-bold text-[13px] text-text-primary block tabular-nums">{w.time}</span>
                              <span className={cx(['font-mono-md text-[10px] mt-space-4 block flex items-center gap-space-4',
                                w.status === 'busy' ? 'text-tier-h' : 'text-text-tertiary'])}>
                                <span className="material-symbols-rounded !text-[12px]">group</span>
                                {w.collectors} collector {w.status === 'busy' ? '· bận' : 'rảnh'}
                              </span>
                              {w.label && (
                                <span className="absolute -top-2 left-space-8 px-space-8 py-[1px] rounded-full bg-amber-deep text-white font-mono-md text-[9px] font-bold whitespace-nowrap shadow-clay-sm">
                                  {w.label}
                                </span>
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Pickup notes */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded !text-[16px]">edit_note</span>
                    GHI CHÚ CHO COLLECTOR
                  </span>
                  <textarea rows="3" placeholder="Vd: Tủ lạnh ở bếp tầng 1 · cửa hông xanh · gọi trước 5p để mở cổng" className="w-full p-space-16 bg-bg-base/50 border border-border-subtle rounded-2xl font-body-md text-[13px] text-text-primary resize-none focus:border-amber-deep focus:outline-none">Tủ lạnh đặt sát tường bếp tầng 1 · đã rút phích · cần 2 người khiêng · có xe đẩy ở cổng</textarea>
                  <div className="flex flex-wrap gap-space-8 mt-space-12">
                    <span className="px-space-12 py-space-4 rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[11px] text-tier-s font-semibold flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[12px]">elevator</span>
                      Có thang máy
                    </span>
                    <span className="px-space-12 py-space-4 rounded-full bg-clay-butter border border-amber-deep/30 font-mono-md text-[11px] text-amber-deep font-semibold flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[12px]">groups_2</span>
                      2 người khiêng
                    </span>
                    <button className="px-space-12 py-space-4 rounded-full bg-bg-base border border-border-subtle font-mono-md text-[11px] text-text-secondary font-semibold flex items-center gap-space-4 hover:border-amber-deep/40">
                      <span className="material-symbols-rounded !text-[12px]">add</span>
                      Thêm tag
                    </button>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-butter rounded-[24px] shadow-clay border-2 border-amber-deep/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">flash_on</span>
                    SPEED QUOTE TÓM TẮT
                  </span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Giá sàn cam kết</span>
                    <span className="font-display font-extrabold text-[32px] text-text-primary tabular-nums leading-none mt-space-4 block">1.200.000đ</span>
                    <span className="font-mono-md text-[11px] text-tier-s font-bold mt-space-4 block">+ tối đa 450.000đ premium</span>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">CHI TIẾT THU GOM</span>
                  <div className="flex flex-col gap-space-12 text-col">
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">location_on</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Địa chỉ</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">124/15 Nguyễn Thị Thập, Q.7</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">event</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Slot</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Hôm nay · 16:00 — 18:00</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">local_shipping</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Hub xa nhất</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Hub Q.7 · 2.4 km</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">payments</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Phí vận chuyển</span>
                        <span className="font-body-md text-[12px] text-tier-s font-semibold">RE-LOOP trả 100%</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-20">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">bolt</span>
                    SPEED ƯU TIÊN
                  </span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-8 text-col">Speed Mode đảm bảo collector đến trong 24h. Nếu trễ slot hơn 30 phút, RE-LOOP cộng <strong className="text-tier-s">+50.000đ</strong> bồi thường.</p>
                </div>
      
                <a href="/orders/new/tier-b/confirm" className="bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  Tới Bước 4 · Xác nhận
                  <span className="material-symbols-rounded fill !text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
