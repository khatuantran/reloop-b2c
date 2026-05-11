import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function AuctionLive() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Auction Live', icon: 'gavel', href: '/orders/new/tier-b/auction-live.html' },
    { n: 4, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/auction-address.html' },
    { n: 5, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/auction-confirm.html' },
  ];
  
  // Live auction data — bid history sorted descending by amount
  const bids = [
    { id: 'b-1', collector: 'Anh Hùng', hub: 'Hub Q.7', tier: 3, rating: 4.9, completed: 142, amount: 1_720_000, time: '23 giây trước', highlight: true, badge: 'CAO NHẤT' },
    { id: 'b-2', collector: 'Chị Mai', hub: 'Hub Bình Thạnh', tier: 3, rating: 4.8, completed: 98, amount: 1_680_000, time: '2 phút trước' },
    { id: 'b-3', collector: 'Anh Phúc', hub: 'Hub Q.4', tier: 2, rating: 4.7, completed: 76, amount: 1_590_000, time: '5 phút trước' },
    { id: 'b-4', collector: 'Anh Tuấn', hub: 'Hub Q.7', tier: 2, rating: 4.6, completed: 87, amount: 1_520_000, time: '8 phút trước' },
    { id: 'b-5', collector: 'Chị Lan', hub: 'Hub Bình Thạnh', tier: 1, rating: 4.4, completed: 32, amount: 1_420_000, time: '12 phút trước' },
  ];
  
  const speedFloor = 1_200_000;
  const auctionMin = 1_350_000;
  const bestBid = bids[0].amount;
  const premium = bestBid - speedFloor;
  const premiumPct = Math.round(((bestBid - speedFloor) / speedFloor) * 100);
  
  // Bid timeline — values for sparkline (chronological asc)
  const timeline = [...bids].reverse().map((b) => b.amount);
  const minT = Math.min(...timeline, speedFloor);
  const maxT = Math.max(...timeline);
  const range = maxT - minT;
  const points = timeline.map((v, i) => `${(i / (timeline.length - 1)) * 360 + 20},${100 - ((v - minT) / range) * 70}`).join(' ');
  
  const collectorColors = ['from-clay-sky to-info', 'from-clay-mint to-tier-s', 'from-clay-butter to-amber-deep', 'from-clay-peach to-tier-c', 'from-clay-blush to-tier-h'];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 1 · Đổi ảnh
            </a>
      
            <OrderStepperBar steps={steps} activeStep={3} tierAccent="amber-deep" />
      
            {/* Confirmed photo summary */}
            <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl p-space-16 mb-space-24 flex items-center gap-space-12 shadow-clay-sm">
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">verified</span>
              </div>
              <div className="flex-1">
                <span className="font-mono-md text-[10px] uppercase tracking-wider text-amber-deep font-bold block">ẢNH ĐÃ XÁC NHẬN · BƯỚC 1 ✓</span>
                <span className="font-display font-bold text-[14px] text-text-primary">Tủ lạnh đôi 300L Samsung RT35K (~62 kg) · AI confidence 94%</span>
              </div>
              <a href="/orders/new/tier-b" className="font-mono-md text-[11px] text-amber-deep font-bold hover:underline">Sửa ảnh</a>
            </div>
      
            {/* Mode toggle tabs */}
            <div className="bg-bg-elevated rounded-full shadow-clay-sm border border-border-subtle p-space-8 inline-flex gap-space-4 mb-space-32">
              <a href="/orders/new/tier-b/quote" className="px-space-32 py-space-12 rounded-full text-text-secondary font-mono-md text-[13px] font-semibold hover:bg-bg-surface flex items-center gap-space-8 transition">
                <span className="material-symbols-rounded !text-[16px]">flash_on</span>
                Speed Mode
              </a>
              <a href="/orders/new/tier-b/auction-live" className="px-space-32 py-space-12 rounded-full bg-clay-sky border-2 border-info text-info font-mono-md text-[13px] font-bold shadow-clay-sm flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[16px]">gavel</span>
                Auction Mode
                <span className="px-space-8 py-[1px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold">LIVE</span>
              </a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              {/* LEFT main */}
              <div className="flex flex-col gap-space-24">
                {/* Auction status hero */}
                <section className="bg-clay-sky border-2 border-info/40 rounded-[28px] shadow-clay p-space-32 relative overflow-hidden">
                  {/* Pulse rings decoration */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-2 border-info/20 animate-pulse"></div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-2 border-info/30"></div>
      
                  <div className="relative z-10 grid grid-cols-[auto_1fr_auto] gap-space-24 items-center mb-space-24">
                    <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm relative">
                      <span className="material-symbols-rounded fill !text-[32px] text-info">gavel</span>
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-tier-h animate-pulse shadow-[0_0_12px_var(--tier-h)]"></span>
                    </div>
                    <div>
                      <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-info font-bold flex items-center gap-space-8">
                        <span className="w-2 h-2 rounded-full bg-tier-h animate-pulse"></span>
                        ĐẤU GIÁ ĐANG DIỄN RA
                      </span>
                      <h2 className="font-display-l text-[36px] font-extrabold text-text-primary leading-tight mt-space-4">5 báo giá · còn 24 phút</h2>
                      <p className="font-body-md text-[13px] text-text-secondary mt-space-4">Báo giá tốt nhất hiện tại từ <strong>Anh Hùng (Hub Q.7)</strong> — bạn có thể chấp nhận ngay hoặc chờ thêm</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">CAO NHẤT</span>
                      <span className="font-display font-extrabold text-[42px] text-info tabular-nums leading-none mt-space-4 block">{bestBid.toLocaleString('vi-VN')}đ</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold mt-space-4 block">↑ +{premium.toLocaleString('vi-VN')}đ ({premiumPct}%) so với Speed</span>
                    </div>
                  </div>
      
                  {/* Time progress bar */}
                  <div className="bg-bg-elevated/60 rounded-2xl p-space-16">
                    <div className="flex items-center justify-between mb-space-8">
                      <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold">THỜI GIAN CÒN LẠI</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">24:18 / 30:00</span>
                    </div>
                    <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-tier-s via-info to-tier-h rounded-full" style={{ 'width': '19%' }}></div>
                    </div>
                    <div className="flex items-center justify-between mt-space-8 font-mono-md text-[10px] text-text-tertiary">
                      <span>Mở 5 phút trước</span>
                      <span>Tối đa 30 phút · auto-accept báo giá cao nhất</span>
                    </div>
                  </div>
                </section>
      
                {/* Bid timeline chart */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-end justify-between mb-space-16">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">trending_up</span>
                        BIỂU ĐỒ ĐẤU GIÁ
                      </span>
                      <h3 className="font-h3 text-h3 text-text-primary mt-space-8">Diễn biến 5 báo giá</h3>
                    </div>
                    <div className="flex items-center gap-space-8">
                      <span className="px-space-8 py-[2px] rounded-full bg-clay-butter border border-amber-deep/30 font-mono-md text-[10px] text-amber-deep font-bold">Speed sàn 1.2M</span>
                      <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold">+43% so sàn</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 400 120" className="w-full h-[140px]">
                    <defs>
                      <linearGradient id="bid-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066B3" stopOpacity="0.4"/>
                        <stop offset="100%" stopColor="#0066B3" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    {/* Speed floor reference line */}
                    <line x1="20" y1={100 - ((speedFloor - minT) / range) * 70} x2="380" y2={100 - ((speedFloor - minT) / range) * 70} stroke="#E8B340" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7"/>
                    <text x="380" y={100 - ((speedFloor - minT) / range) * 70 - 4} textAnchor="end" fontSize="9" fill="#7A5410" fontFamily="JetBrains Mono" fontWeight="700">Speed sàn 1.2M</text>
                    {/* Filled area */}
                    <polygon points={`20,100 ${points} 380,100`} fill="url(#bid-area)"/>
                    {/* Line */}
                    <polyline points={points} stroke="#0066B3" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Bid dots with labels */}
                    {timeline.map((v, i) => {
                      const x = (i / (timeline.length - 1)) * 360 + 20;
                      const y = 100 - ((v - minT) / range) * 70;
                      const isLast = i === timeline.length - 1;
                      return (
                        <g>
                          <circle cx={x} cy={y} r={isLast ? 6 : 3.5} fill={isLast ? '#0066B3' : 'white'} stroke="#0066B3" strokeWidth="2"/>
                          <text x={x} y={y - 12} textAnchor="middle" fontSize="9" fill="#0066B3" fontWeight="800" fontFamily="JetBrains Mono">{(v / 1_000_000).toFixed(2)}M</text>
                        </g>
                      );
                    })}
                  </svg>
                </section>
      
                {/* Bid list */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden">
                  <div className="p-space-32 pb-space-16 flex items-end justify-between">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">list</span>
                        DANH SÁCH BÁO GIÁ ({bids.length})
                      </span>
                      <h3 className="font-h3 text-h3 text-text-primary mt-space-8">Sắp xếp theo giá cao nhất</h3>
                    </div>
                    <button className="font-mono-md text-[11px] text-text-tertiary font-bold hover:text-info inline-flex items-center gap-space-4">
                      <span className="material-symbols-rounded !text-[14px]">sort</span>
                      Sắp xếp
                    </button>
                  </div>
                  <div className="divide-y divide-border-subtle">
                    {bids.map((b, i) => (
                      <label className={cx(['flex items-center gap-space-16 px-space-32 py-space-20 cursor-pointer transition group', b.highlight ? 'bg-clay-sky/40' : 'hover:bg-bg-surface/50'])}>
                        <input type="radio" name="bid-pick" checked={b.highlight} className="w-5 h-5 accent-info" />
                        <div className={cx(['w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-display font-extrabold text-[20px] shadow-clay-sm shrink-0', collectorColors[i]])}>
                          {b.collector.split(' ').slice(-1)[0][0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8 mb-space-4 flex-wrap">
                            <span className="font-display font-bold text-[15px] text-text-primary">{b.collector}</span>
                            <span className={cx(['px-space-8 py-[2px] rounded-full font-mono-md text-[10px] font-bold border', b.tier === 3 ? 'bg-clay-mint border-tier-s/30 text-tier-s' : b.tier === 2 ? 'bg-clay-sky border-info/30 text-info' : 'bg-bg-surface border-border-default text-text-tertiary'])}>Tier {b.tier}</span>
                            {b.badge && <span className="px-space-8 py-[2px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold animate-pulse">{b.badge}</span>}
                          </div>
                          <div className="flex items-center gap-space-12 mb-space-4">
                            <div className="flex items-center gap-[2px]">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <span className={cx(['material-symbols-rounded fill !text-[12px]', s <= Math.floor(b.rating) ? 'text-amber-deep' : 'text-text-tertiary opacity-30'])}>star</span>
                              ))}
                              <span className="font-mono-md text-[11px] text-text-primary font-bold tabular-nums ml-space-4">{b.rating}</span>
                            </div>
                            <span className="font-mono-md text-[10px] text-text-tertiary">·</span>
                            <span className="font-mono-md text-[11px] text-text-tertiary">{b.completed} đơn · {b.hub}</span>
                          </div>
                          <span className="font-mono-md text-[10px] text-text-tertiary">{b.time}</span>
                        </div>
                        <div className="text-right">
                          <span className={cx(['font-display font-extrabold text-[20px] tabular-nums leading-none block', b.highlight ? 'text-info' : 'text-text-primary'])}>{b.amount.toLocaleString('vi-VN')}đ</span>
                          <span className={cx(['font-mono-md text-[10px] font-bold mt-space-4 inline-block', b.amount >= speedFloor ? 'text-tier-s' : 'text-amber-deep'])}>+{(b.amount - speedFloor).toLocaleString('vi-VN')}đ vs sàn</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="p-space-16 bg-bg-surface border-t border-border-subtle flex items-center justify-between">
                    <span className="font-mono-md text-[11px] text-text-tertiary inline-flex items-center gap-space-4">
                      <span className="w-2 h-2 rounded-full bg-tier-s animate-pulse"></span>
                      Auto-refresh mỗi 5 giây · Báo giá mới gần nhất 23 giây trước
                    </span>
                    <span className="font-mono-md text-[11px] text-info font-bold">Min báo giá: {auctionMin.toLocaleString('vi-VN')}đ</span>
                  </div>
                </section>
      
                {/* Comparison Speed vs Auction */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 pt-space-40">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">compare_arrows</span>
                    SPEED vs AUCTION
                  </span>
                  <h3 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-24">So sánh trực tiếp</h3>
                  <div className="grid grid-cols-2 gap-space-16 pt-space-8">
                    <div className="bg-clay-butter rounded-2xl p-space-24 border-2 border-amber-deep/30 shadow-clay-sm min-w-0">
                      <div className="flex items-center gap-space-8 mb-space-12 min-w-0">
                        <span className="material-symbols-rounded fill !text-[20px] text-amber-deep shrink-0">flash_on</span>
                        <span className="font-display font-bold text-[15px] text-amber-deep truncate">Speed Mode</span>
                      </div>
                      <div className="font-display font-extrabold text-[24px] text-text-primary tabular-nums leading-none">{speedFloor.toLocaleString('vi-VN')}đ</div>
                      <ul className="mt-space-16 flex flex-col gap-space-8 font-mono-md text-[11px] text-text-secondary">
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-s shrink-0 mt-[1px]">check</span><span className="text-col">Chốt ngay 5 phút</span></li>
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-s shrink-0 mt-[1px]">check</span><span className="text-col">Giá cam kết, không thương lượng</span></li>
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded !text-[14px] text-text-tertiary shrink-0 mt-[1px]">close</span><span className="text-col">Không có cạnh tranh giá</span></li>
                      </ul>
                    </div>
                    <div className="bg-clay-sky rounded-2xl p-space-24 border-2 border-info/30 shadow-clay-sm ring-2 ring-info/40 relative min-w-0">
                      <span className="absolute -top-3 left-space-16 px-space-12 py-[3px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold tracking-wider shadow-clay-sm whitespace-nowrap">+43% TỐT HƠN</span>
                      <div className="flex items-center gap-space-8 mb-space-12 min-w-0">
                        <span className="material-symbols-rounded fill !text-[20px] text-info shrink-0">gavel</span>
                        <span className="font-display font-bold text-[15px] text-info truncate">Auction Mode</span>
                      </div>
                      <div className="font-display font-extrabold text-[24px] text-info tabular-nums leading-none">{bestBid.toLocaleString('vi-VN')}đ</div>
                      <ul className="mt-space-16 flex flex-col gap-space-8 font-mono-md text-[11px] text-text-secondary">
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-s shrink-0 mt-[1px]">check</span><span className="text-col">3-5 collector cạnh tranh</span></li>
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-s shrink-0 mt-[1px]">check</span><span className="text-col">Có thể giá Premium cao hơn</span></li>
                        <li className="flex items-start gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-amber-deep shrink-0 mt-[1px]">schedule</span><span className="text-col">Chờ tối đa 30 phút</span></li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
      
              {/* RIGHT sidebar */}
              <div className="flex flex-col gap-space-16">
                {/* Best bid summary */}
                <div className="bg-clay-sky rounded-[28px] shadow-clay border-2 border-info/40 p-space-24 relative overflow-hidden">
                  <span className="absolute top-space-12 right-space-12 px-space-8 py-[2px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold tracking-wider shadow-clay-sm flex items-center gap-space-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    LIVE
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[24px] text-info">trending_up</span>
                  </div>
                  <span className="font-mono-md text-[10px] uppercase tracking-wider text-info font-bold">BÁO GIÁ CAO NHẤT</span>
                  <div className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4">{bestBid.toLocaleString('vi-VN')}đ</div>
                  <span className="font-mono-md text-[11px] text-text-secondary mt-space-4 block">Anh Hùng · Hub Q.7 · Tier 3</span>
      
                  <div className="mt-space-12 grid grid-cols-2 gap-space-8">
                    <div className="bg-bg-elevated/80 rounded-xl p-space-16">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Premium vs sàn</span>
                      <span className="font-display font-bold text-[16px] text-tier-s tabular-nums mt-space-4 block">+{premium.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <div className="bg-bg-elevated/80 rounded-xl p-space-16">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phí vận chuyển</span>
                      <span className="font-display font-bold text-[14px] text-text-primary mt-space-4 block">RE-LOOP trả</span>
                    </div>
                  </div>
      
                  <a href="/orders/new/tier-b/auction-address" className="mt-space-16 w-full bg-info text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                    <span className="material-symbols-rounded fill !text-[18px]">check_circle</span>
                    Chấp nhận · Bước 4
                  </a>
                  <button className="mt-space-8 w-full bg-bg-elevated/60 text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">
                    Chờ thêm 25 phút (auto-accept cao nhất)
                  </button>
                </div>
      
                {/* Auction rules */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">policy</span>
                    QUY TẮC AUCTION
                  </span>
                  <ul className="flex flex-col gap-space-12">
                    {[
                      { icon: 'group', label: 'Tối đa 5 collector báo giá', sub: 'Auto-broadcast trong bán kính 5km' },
                      { icon: 'timer', label: 'Phiên đấu giá 30 phút', sub: 'Có thể chấp nhận sớm bất kỳ lúc nào' },
                      { icon: 'paid', label: 'Min báo giá ≥ 1.350.000đ', sub: 'Cao hơn Speed sàn 12.5% để collector cạnh tranh' },
                      { icon: 'verified', label: 'Mass-balance ±5%', sub: 'Giống Speed · Premium chỉ trả khi 95%+' },
                      { icon: 'cancel', label: 'Bạn không bắt buộc chấp nhận', sub: 'Có thể fallback Speed sàn 1.2M sau hết phiên' },
                    ].map((r) => (
                      <li className="flex items-start gap-space-8">
                        <div className="w-7 h-7 rounded-xl bg-clay-sky flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[14px] text-info">{r.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[12px] text-text-primary block leading-tight">{r.label}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary mt-[2px] block">{r.sub}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
      
                {/* Trust info */}
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24 min-w-0">
                  <span className="material-symbols-rounded fill !text-[24px] text-tier-s">verified_user</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mt-space-8">COLLECTOR ĐỀU VERIFIED</span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-8 leading-relaxed">
                    Tất cả collector đã pass <strong>Hub Tier check</strong>, <strong>training Tier B</strong> và đạt <strong>≥30 đơn hoàn tất</strong>. Yên tâm chọn báo giá cao nhất.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
