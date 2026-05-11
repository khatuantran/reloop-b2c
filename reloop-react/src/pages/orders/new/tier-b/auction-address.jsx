import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function AuctionAddress() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Auction Live', icon: 'gavel', href: '/orders/new/tier-b/auction-live.html' },
    { n: 4, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/auction-address.html' },
    { n: 5, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/auction-confirm.html' },
  ];
  
  const winningBid = {
    collector: 'Anh Hùng',
    hub: 'Hub Q.7',
    tier: 3,
    rating: 4.9,
    completed: 142,
    amount: 1_720_000,
    vehicle: 'Xe tải nhỏ 500kg · 51C-234.56',
  };
  
  const addresses = [
    { id: 'home', label: 'Nhà riêng', address: '124/15 Nguyễn Thị Thập, P. Tân Phú, Q.7, TPHCM', tag: 'Mặc định', note: 'Chuông tầng 4 · Có thang máy', icon: 'home', selected: true },
    { id: 'office', label: 'Văn phòng', address: '15 Tôn Đức Thắng, P. Bến Nghé, Q.1, TPHCM', tag: 'Công ty', note: 'Lễ tân tầng 1', icon: 'business' },
  ];
  
  // Auction winner proposes specific slots
  const collectorSlots = [
    { time: 'Hôm nay · 16:00 — 18:00', distance: '0.8 km', eta: '~6 phút', recommended: true, note: 'Anh Hùng đề xuất' },
    { time: 'Hôm nay · 18:00 — 20:00', distance: '0.8 km', eta: '~8 phút', note: 'Sau ca chiều' },
    { time: 'Mai · 08:00 — 10:00', distance: '0.8 km', eta: '~5 phút', note: 'Sáng sớm thoáng đường' },
    { time: 'Mai · 14:00 — 16:00', distance: '0.8 km', eta: '~7 phút', note: 'Slot trống cuối ngày' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b/auction-live" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-info font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 3 · Auction Live
            </a>
      
            <OrderStepperBar steps={steps} activeStep={4} tierAccent="amber-deep" />
      
            {/* Winning bid confirmed banner */}
            <div className="bg-clay-sky border-2 border-info/40 rounded-2xl p-space-20 mb-space-24 flex items-center gap-space-16 shadow-clay">
              <div className="w-14 h-14 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                <span className="material-symbols-rounded fill !text-[26px] text-info">gavel</span>
              </div>
              <div className="flex-1 text-col">
                <span className="font-mono-md text-[10px] uppercase tracking-wider text-info font-bold block">AUCTION ĐÃ CHỐT · BƯỚC 3 ✓</span>
                <span className="font-display font-bold text-[15px] text-text-primary">{winningBid.collector} ({winningBid.hub} · Tier {winningBid.tier}) thắng đấu giá <span className="text-info tabular-nums">{winningBid.amount.toLocaleString('vi-VN')}đ</span></span>
                <span className="font-mono-md text-[11px] text-text-secondary block mt-[2px]">+520.000đ so với giá sàn (+43% Speed Mode)</span>
              </div>
              <a href="/orders/new/tier-b/auction-live" className="font-mono-md text-[11px] text-info font-bold hover:underline shrink-0">Đổi báo giá</a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Address picker */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-center justify-between mb-space-16">
                    <div className="text-col">
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">location_on</span>
                        ĐỊA CHỈ THU GOM
                      </span>
                      <h2 className="font-h2 text-h2 text-text-primary mt-space-8">{winningBid.collector} sẽ đến tận nơi</h2>
                    </div>
                    <button className="bg-clay-sky border-2 border-info/40 px-space-16 py-space-8 rounded-full font-mono-md text-[12px] text-info font-bold shadow-clay-sm hover:shadow-clay shrink-0 inline-flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[14px]">add</span>
                      Thêm
                    </button>
                  </div>
      
                  <div className="flex flex-col gap-space-12">
                    {addresses.map((a) => (
                      <label className={cx(['flex items-start gap-space-16 p-space-20 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm', a.selected ? 'bg-clay-sky border-info' : 'bg-bg-base border-border-subtle hover:border-info/40'])}>
                        <input type="radio" name="address" checked={a.selected} className="mt-space-4 w-5 h-5 accent-info" />
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[22px] text-info">{a.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <div className="flex items-center gap-space-8 flex-wrap">
                            <span className="font-display font-bold text-[15px] text-text-primary">{a.label}</span>
                            <span className="px-space-8 py-[2px] rounded-full bg-info/15 text-info font-mono-md text-[10px] font-bold uppercase tracking-wider">{a.tag}</span>
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
      
                  {/* Mini map: collector route */}
                  <div className="mt-space-20 relative rounded-2xl overflow-hidden border-2 border-info/30 shadow-clay-sm h-[200px]">
                    <svg viewBox="0 0 600 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                      <defs>
                        <pattern id="grid-auc" width="30" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#C8D6BE" strokeWidth="0.5" opacity="0.6" />
                        </pattern>
                      </defs>
                      <rect width="600" height="200" fill="#E5EDDD" />
                      <rect width="600" height="200" fill="url(#grid-auc)" />
                      <path d="M 0 100 L 600 100" stroke="#A0B496" strokeWidth="14" opacity="0.4" />
                      <path d="M 320 0 L 320 200" stroke="#A0B496" strokeWidth="10" opacity="0.4" />
                      <path d="M 50 40 Q 200 60 400 130" stroke="#A0B496" strokeWidth="6" opacity="0.35" fill="none" />
                      {/* Collector position */}
                      <circle cx="220" cy="80" r="18" fill="#3B82F6" opacity="0.2">
                        <animate attributeName="r" values="14;22;14" dur="2s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="220" cy="80" r="10" fill="#3B82F6" />
                      <text x="220" y="58" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">ANH HÙNG</text>
                      {/* Pickup pin */}
                      <circle cx="420" cy="130" r="22" fill="#E8B340" opacity="0.25" />
                      <circle cx="420" cy="130" r="13" fill="#E8B340" />
                      <path d="M 420 117 L 420 143" stroke="#FFFFFF" strokeWidth="2" />
                      <circle cx="420" cy="130" r="4" fill="#FFFFFF" />
                      <text x="420" y="164" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fontWeight="700" fill="#0F1F18">NHÀ BẠN</text>
                      {/* Route */}
                      <path d="M 220 80 Q 320 60 420 130" stroke="#3B82F6" strokeWidth="3" strokeDasharray="6 4" fill="none" opacity="0.7" />
                    </svg>
                    <div className="absolute top-space-12 right-space-12 bg-bg-elevated/95 backdrop-blur px-space-12 py-space-8 rounded-full shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">local_shipping</span>
                      <span className="font-mono-md text-[11px] text-text-primary font-bold tabular-nums">0.8 km · ~6 phút</span>
                    </div>
                    <div className="absolute bottom-space-12 left-space-12 bg-info/95 text-white px-space-12 py-space-8 rounded-full shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px]">my_location</span>
                      <span className="font-mono-md text-[11px] font-bold">Collector gần nhất sau auction</span>
                    </div>
                  </div>
                </section>
      
                {/* Slot picker — collector proposes */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="mb-space-16 text-col">
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">event_available</span>
                      SLOT DO {winningBid.collector.toUpperCase()} ĐỀ XUẤT
                    </span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">4 khung giờ collector đang trống</h2>
                    <p className="font-body-md text-[13px] text-text-secondary mt-space-4">Khác Speed Mode (slot mở chung), Auction winner đề xuất khung giờ riêng theo lịch xe của họ. Bạn chọn 1 hoặc đề nghị slot khác.</p>
                  </div>
      
                  <div className="grid grid-cols-2 gap-space-12">
                    {collectorSlots.map((s) => (
                      <label className={cx(['relative p-space-20 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm text-col',
                        s.recommended ? 'bg-clay-sky border-info' : 'bg-bg-base/50 border-border-subtle hover:border-info/40'])}>
                        <input type="radio" name="slot" checked={s.recommended} className="absolute top-space-12 right-space-12 w-5 h-5 accent-info" />
                        <span className="font-display font-bold text-[15px] text-text-primary block tabular-nums pr-space-32">{s.time}</span>
                        <div className="mt-space-8 flex items-center gap-space-12 flex-wrap">
                          <span className="font-mono-md text-[11px] text-text-tertiary flex items-center gap-space-4">
                            <span className="material-symbols-rounded !text-[12px]">straighten</span>
                            {s.distance}
                          </span>
                          <span className="font-mono-md text-[11px] text-text-tertiary flex items-center gap-space-4">
                            <span className="material-symbols-rounded !text-[12px]">schedule</span>
                            {s.eta}
                          </span>
                        </div>
                        <span className={cx(['mt-space-12 inline-flex items-center gap-space-4 px-space-12 py-[3px] rounded-full font-mono-md text-[10px] font-bold whitespace-nowrap shadow-clay-sm',
                          s.recommended ? 'bg-info text-white' : 'bg-clay-mint text-tier-s'])}>
                          <span className="material-symbols-rounded fill !text-[12px]">{s.recommended ? 'star' : 'check_circle'}</span>
                          {s.note}
                        </span>
                      </label>
                    ))}
                  </div>
      
                  <div className="mt-space-16 p-space-16 bg-clay-mint/50 border border-tier-s/20 rounded-2xl flex items-start gap-space-12">
                    <span className="material-symbols-rounded fill !text-[20px] text-tier-s mt-[2px] shrink-0">chat</span>
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[13px] text-text-primary block">Cần khung giờ khác?</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Chat trực tiếp với {winningBid.collector} để thoả thuận slot phù hợp. Họ sẽ phản hồi trong 5 phút.</p>
                    </div>
                    <button className="px-space-16 py-space-8 rounded-full bg-tier-s text-white font-mono-md text-[11px] font-bold shadow-clay-sm hover:-translate-y-[1px] transition shrink-0 inline-flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[14px]">chat</span>
                      Chat
                    </button>
                  </div>
                </section>
      
                {/* Pickup notes */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded !text-[16px]">edit_note</span>
                    GHI CHÚ CHO {winningBid.collector.toUpperCase()}
                  </span>
                  <textarea rows="3" className="w-full p-space-16 bg-bg-base/50 border border-border-subtle rounded-2xl font-body-md text-[13px] text-text-primary resize-none focus:border-info focus:outline-none">Tủ lạnh đặt sát tường bếp tầng 1 · đã rút phích · cần 2 người khiêng · có xe đẩy ở cổng</textarea>
                  <div className="flex flex-wrap gap-space-8 mt-space-12">
                    <span className="px-space-12 py-space-4 rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[11px] text-tier-s font-semibold flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[12px]">elevator</span>
                      Có thang máy
                    </span>
                    <span className="px-space-12 py-space-4 rounded-full bg-clay-butter border border-amber-deep/30 font-mono-md text-[11px] text-amber-deep font-semibold flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[12px]">groups_2</span>
                      2 người khiêng
                    </span>
                    <span className="px-space-12 py-space-4 rounded-full bg-clay-sky border border-info/30 font-mono-md text-[11px] text-info font-semibold flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[12px]">local_shipping</span>
                      {winningBid.vehicle.split(' ·')[0]}
                    </span>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                {/* Winning bid card */}
                <div className="bg-clay-sky rounded-[24px] shadow-clay border-2 border-info/40 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">gavel</span>
                    GIÁ AUCTION ĐÃ CHỐT
                  </span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">{winningBid.collector} trả</span>
                    <span className="font-display font-extrabold text-[32px] text-info tabular-nums leading-none mt-space-4 block">{winningBid.amount.toLocaleString('vi-VN')}đ</span>
                    <div className="mt-space-8 flex items-center gap-space-8">
                      <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold whitespace-nowrap shadow-clay-sm">+520k vs Speed</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold">+43%</span>
                    </div>
                  </div>
                </div>
      
                {/* Collector card */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">COLLECTOR THẮNG ĐẤU</span>
                  <div className="flex items-center gap-space-12">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                      H
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">{winningBid.collector}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">{winningBid.hub} · Tier {winningBid.tier}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 grid grid-cols-2 gap-space-8">
                    <div className="bg-bg-base/60 rounded-xl p-space-16 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đánh giá</span>
                      <span className="font-display font-bold text-[16px] text-amber-deep tabular-nums mt-space-4 block">★ {winningBid.rating}</span>
                    </div>
                    <div className="bg-bg-base/60 rounded-xl p-space-16 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đơn xong</span>
                      <span className="font-display font-bold text-[16px] text-tier-s tabular-nums mt-space-4 block">{winningBid.completed}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 p-space-12 bg-bg-base/60 rounded-xl text-col">
                    <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phương tiện</span>
                    <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{winningBid.vehicle}</span>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">CHI TIẾT THU GOM</span>
                  <div className="flex flex-col gap-space-12 text-col">
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">location_on</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Địa chỉ</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">124/15 Nguyễn Thị Thập, Q.7</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">event</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Slot collector đề xuất</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Hôm nay · 16:00 — 18:00</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">payments</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Phí vận chuyển</span>
                        <span className="font-body-md text-[12px] text-tier-s font-semibold">Collector chịu (đã tính trong bid)</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <a href="/orders/new/tier-b/auction-confirm" className="bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  Tới Bước 5 · Xác nhận
                  <span className="material-symbols-rounded fill !text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
