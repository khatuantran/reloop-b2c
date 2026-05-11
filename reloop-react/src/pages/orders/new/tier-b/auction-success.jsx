import { cx } from '@/lib/cx';

export default function AuctionSuccess() {
  const order = {
    id: 'RL-2026-001242',
    createdAt: '10/05/2026 · 14:35',
    item: 'Tủ lạnh đôi 300L Samsung RT35K',
    weight: 62,
    speedFloor: 1_200_000,
    winningBid: 1_720_000,
    premiumMax: 200_000,
    hub: 'Hub Q.7 RE-LOOP',
    collector: 'Anh Hùng',
    collectorTier: 3,
    collectorRating: 4.9,
    collectorCompleted: 142,
    vehicle: 'Xe tải nhỏ 500kg · 51C-234.56',
    slot: 'Hôm nay · 16:00 — 18:00',
    address: '124/15 Nguyễn Thị Thập, Q.7',
    paymentMethod: 'ZaloPay 0901-***-456',
    gp: 248,
    co2: 58,
    totalBidders: 5,
    bidWindow: '32 phút',
  };
  const delta = order.winningBid - order.speedFloor;
  const deltaPct = Math.round((delta / order.speedFloor) * 100);
  
  const auctionTimeline = [
    { time: 'Vừa xong', label: 'Auction chốt thắng', sub: `${order.collector} thắng với ${order.winningBid.toLocaleString('vi-VN')}đ`, icon: 'gavel', state: 'done' },
    { time: 'Đang diễn ra', label: 'Hợp đồng auction đã ký', sub: `Bid lock-in 24h · 4 collector khác đã thông báo`, icon: 'handshake', state: 'active' },
    { time: 'Trong 5 phút', label: `${order.collector} điều xe`, sub: `Sẽ gọi xác nhận vị trí + slot`, icon: 'call', state: 'pending' },
    { time: 'Theo slot', label: 'Đến nhà cân + thanh toán', sub: 'Bạn nhận tiền ZaloPay 60s sau khi cân', icon: 'local_shipping', state: 'pending' },
  ];
  
  const otherBids = [
    { collector: 'Chị Mai', amount: 1_680_000, status: 'Đã thông báo · cảm ơn' },
    { collector: 'Anh Phúc', amount: 1_590_000, status: 'Đã thông báo' },
    { collector: 'Anh Tuấn', amount: 1_520_000, status: 'Đã thông báo' },
  ];
  
  const quickActions = [
    { icon: 'visibility', label: 'Xem chi tiết đơn', href: `/orders/${order.id}/index.html`, accent: 'info', bg: 'bg-clay-sky', border: 'border-info/30' },
    { icon: 'my_location', label: 'Theo dõi collector', href: `/orders/${order.id}/track.html`, accent: 'tier-s', bg: 'bg-clay-mint', border: 'border-tier-s/30' },
    { icon: 'chat', label: `Chat ${order.collector}`, href: '#', accent: 'amber-deep', bg: 'bg-clay-butter', border: 'border-amber-deep/30' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            {/* Hero with auction win celebration */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border-2 border-info/40 p-space-48 mb-space-32 relative overflow-hidden">
              {/* Confetti decorations */}
              <svg className="absolute top-space-24 left-space-32 w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 5l3 8h8l-7 5 3 8-7-5-7 5 3-8-7-5h8z" fill="#3B82F6" opacity="0.5" />
              </svg>
              <svg className="absolute top-space-32 right-[15%] w-7 h-7" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="5" fill="#52E08D" opacity="0.55" />
              </svg>
              <svg className="absolute bottom-space-32 left-[35%] w-9 h-9" viewBox="0 0 36 36" fill="none">
                <rect x="8" y="8" width="6" height="20" fill="#3B82F6" opacity="0.5" transform="rotate(15 11 18)" />
                <rect x="22" y="6" width="6" height="22" fill="#F2D58F" opacity="0.55" transform="rotate(-20 25 17)" />
              </svg>
              <svg className="absolute bottom-space-24 right-space-48 w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.6" />
              </svg>
      
              <div className="relative grid grid-cols-[auto_1fr_auto] gap-space-32 items-center">
                {/* Big trophy badge */}
                <div className="relative w-[120px] h-[120px] shrink-0">
                  <div className="absolute inset-0 rounded-full bg-info/20 animate-ping"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-info to-blue-700 flex items-center justify-center shadow-clay-lg">
                    <span className="material-symbols-rounded fill text-white" style={{ 'fontSize': '64px' }}>workspace_premium</span>
                  </div>
                </div>
      
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">gavel</span>
                    AUCTION MODE · ĐẤU GIÁ THẮNG
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Bạn lời thêm <span className="text-info tabular-nums">{delta.toLocaleString('vi-VN')}đ</span> nhờ chờ {order.bidWindow}</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">{order.totalBidders} collector đặt giá · <strong>{order.collector} ({order.hub})</strong> thắng với <strong className="text-info tabular-nums">{order.winningBid.toLocaleString('vi-VN')}đ</strong>. Mã đơn <strong className="font-mono-md text-info tabular-nums">{order.id}</strong>.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">trending_up</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold whitespace-nowrap">+{deltaPct}% vs Speed</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">{order.winningBid.toLocaleString('vi-VN')}đ</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">schedule</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">{order.slot}</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">eco</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold tabular-nums">+{order.gp} GP · −{order.co2}kg CO₂</span>
                    </span>
                  </div>
                </div>
      
                <div className="hidden lg:flex flex-col gap-space-8 shrink-0">
                  <button className="bg-bg-elevated/95 backdrop-blur border border-border-subtle p-space-12 rounded-2xl shadow-clay-sm hover:shadow-clay flex items-center gap-space-8 transition">
                    <span className="material-symbols-rounded !text-[18px] text-text-secondary">share</span>
                    <span className="font-mono-md text-[11px] text-text-primary font-bold">Khoe chiến tích</span>
                  </button>
                  <button className="bg-bg-elevated/95 backdrop-blur border border-border-subtle p-space-12 rounded-2xl shadow-clay-sm hover:shadow-clay flex items-center gap-space-8 transition">
                    <span className="material-symbols-rounded !text-[18px] text-text-secondary">qr_code</span>
                    <span className="font-mono-md text-[11px] text-text-primary font-bold">QR đơn</span>
                  </button>
                </div>
              </div>
            </section>
      
            {/* Quick actions strip */}
            <div className="grid grid-cols-3 gap-space-16 mb-space-32">
              {quickActions.map((a) => (
                <a href={a.href} className={cx(['rounded-2xl border-2 p-space-20 shadow-clay-sm hover:shadow-clay flex items-center gap-space-16 transition group', a.bg, a.border])}>
                  <div className={`w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0 text-${a.accent}`}>
                    <span className="material-symbols-rounded fill !text-[24px]">{a.icon}</span>
                  </div>
                  <span className="font-display font-bold text-[15px] text-text-primary flex-1 text-col">{a.label}</span>
                  <span className={`material-symbols-rounded !text-[20px] text-${a.accent} group-hover:translate-x-1 transition`}>arrow_forward</span>
                </a>
              ))}
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Auction recap */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">leaderboard</span>
                    KẾT QUẢ ĐẤU GIÁ
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">{order.totalBidders} báo giá nhận được trong {order.bidWindow}</h2>
      
                  {/* Winning bid prominent */}
                  <div className="bg-clay-sky border-2 border-info rounded-2xl p-space-24 mb-space-16 shadow-clay relative">
                    <span className="absolute -top-3 left-space-20 px-space-12 py-[3px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold whitespace-nowrap shadow-clay-sm">CAO NHẤT · ĐÃ CHỐT</span>
                    <div className="flex items-center gap-space-16">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-[26px] shadow-clay-sm shrink-0">
                        H
                      </div>
                      <div className="flex-1 text-col">
                        <div className="flex items-center gap-space-8 flex-wrap">
                          <span className="font-display font-bold text-[16px] text-text-primary">{order.collector}</span>
                          <span className="px-space-8 py-[2px] rounded-full bg-info text-white font-mono-md text-[10px] font-bold whitespace-nowrap">TIER {order.collectorTier}</span>
                        </div>
                        <span className="font-mono-md text-[12px] text-text-secondary block mt-space-4">{order.hub} · ★ {order.collectorRating} · {order.collectorCompleted} đơn xong</span>
                      </div>
                      <div className="text-right text-col shrink-0">
                        <span className="font-display font-extrabold text-[24px] text-info tabular-nums leading-none block">{order.winningBid.toLocaleString('vi-VN')}đ</span>
                        <span className="font-mono-md text-[11px] text-tier-s font-bold mt-space-4 block tabular-nums">+{delta.toLocaleString('vi-VN')}đ</span>
                      </div>
                    </div>
                  </div>
      
                  {/* Other bidders thanked */}
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">{otherBids.length} collector khác · đã thông báo cảm ơn</span>
                  <div className="flex flex-col gap-space-8">
                    {otherBids.map((b) => (
                      <div className="bg-bg-base/50 rounded-xl p-space-16 flex items-center gap-space-12 border border-border-subtle">
                        <div className="w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded !text-[18px] text-text-tertiary">person</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{b.collector}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{b.status}</span>
                        </div>
                        <span className="font-mono-md text-[14px] text-text-tertiary tabular-nums">{b.amount.toLocaleString('vi-VN')}đ</span>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Timeline */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">timeline</span>
                    TIẾN TRÌNH ĐƠN
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">{order.collector} đang chuẩn bị xe</h2>
      
                  <div className="relative">
                    <div className="absolute left-[27px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
                    <div className="flex flex-col gap-space-20">
                      {auctionTimeline.map((t) => (
                        <div className="relative flex items-start gap-space-20">
                          <div className={cx(['relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 border-2',
                            t.state === 'done' ? 'bg-tier-s text-white border-tier-s' :
                            t.state === 'active' ? 'bg-clay-sky text-info border-info animate-pulse' :
                            'bg-bg-base text-text-tertiary border-border-subtle'])}>
                            <span className="material-symbols-rounded fill !text-[24px]">{t.icon}</span>
                          </div>
                          <div className="flex-1 text-col pt-space-4">
                            <div className="flex items-center gap-space-12 flex-wrap">
                              <span className="font-display font-bold text-[15px] text-text-primary">{t.label}</span>
                              <span className={cx(['px-space-8 py-[2px] rounded-full font-mono-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap',
                                t.state === 'done' ? 'bg-tier-s/15 text-tier-s' :
                                t.state === 'active' ? 'bg-info/15 text-info' :
                                'bg-bg-base text-text-tertiary'])}>
                                {t.time}
                              </span>
                            </div>
                            <p className="font-body-md text-[13px] text-text-secondary mt-space-4">{t.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
      
                {/* Tips */}
                <section className="bg-clay-mint rounded-[28px] shadow-clay-sm border-2 border-tier-s/30 p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">tips_and_updates</span>
                    CHUẨN BỊ TRƯỚC SLOT
                  </span>
                  <div className="grid grid-cols-3 gap-space-16">
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-20 text-col">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">power</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Rút phích điện</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Ngắt nguồn 24h trước · hết gas lạnh</p>
                    </div>
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-20 text-col">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">photo_camera</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Chụp tình trạng</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Đề phòng dispute · đỡ premium spot check</p>
                    </div>
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-20 text-col">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">door_open</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Mở lối khiêng</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Đo cửa + thang máy · tránh kẹt</p>
                    </div>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                {/* Collector card prominent */}
                <div className="bg-clay-sky rounded-[24px] shadow-clay border-2 border-info/40 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">verified</span>
                    COLLECTOR ĐÃ CHỐT
                  </span>
                  <div className="mt-space-16 flex items-center gap-space-12">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                      H
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">{order.collector}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">{order.hub} · Tier {order.collectorTier}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 grid grid-cols-2 gap-space-8">
                    <div className="bg-bg-elevated/60 rounded-xl p-space-12 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đánh giá</span>
                      <span className="font-display font-bold text-[16px] text-amber-deep tabular-nums mt-space-4 block">★ {order.collectorRating}</span>
                    </div>
                    <div className="bg-bg-elevated/60 rounded-xl p-space-12 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đơn xong</span>
                      <span className="font-display font-bold text-[16px] text-tier-s tabular-nums mt-space-4 block">{order.collectorCompleted}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 p-space-12 bg-bg-elevated/60 rounded-xl text-col">
                    <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phương tiện</span>
                    <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{order.vehicle}</span>
                  </div>
                  <a href="#" className="mt-space-12 w-full bg-info text-white py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:-translate-y-[1px] transition">
                    <span className="material-symbols-rounded fill !text-[16px]">call</span>
                    Gọi ngay
                  </a>
                </div>
      
                {/* Auction summary stat */}
                <div className="bg-clay-butter rounded-[24px] shadow-clay-sm border border-amber-deep/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">savings</span>
                    LỜI THÊM
                  </span>
                  <span className="font-display font-extrabold text-[32px] text-tier-s tabular-nums leading-none mt-space-12 block">+{delta.toLocaleString('vi-VN')}đ</span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-8 text-col">Bằng <strong>2 ngày tiền cơm trưa</strong>. Lần sau cứ Auction nha!</p>
                  <a href="/share" className="mt-space-12 inline-flex items-center gap-space-4 font-mono-md text-[12px] text-amber-deep font-bold hover:underline">
                    Khoe Facebook
                    <span className="material-symbols-rounded !text-[14px]">share</span>
                  </a>
                </div>
      
                {/* Cancel/Reschedule (limited for auction) */}
                <div className="bg-clay-blush/40 rounded-[24px] shadow-clay-sm border border-tier-h/20 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">edit_calendar</span>
                    ĐỔI Ý?
                  </span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-12 text-col">Auction lock-in 24h. Đổi collector sang bid #2 (Chị Mai · 1.680.000đ) trước slot 1h.</p>
                  <div className="mt-space-16 flex flex-col gap-space-8">
                    <button className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">
                      Đổi sang Chị Mai
                    </button>
                    <button className="bg-bg-elevated text-tier-h border border-tier-h/30 py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:bg-clay-blush">
                      Huỷ đơn (phí 50k)
                    </button>
                  </div>
                </div>
      
                <a href="/orders" className="bg-text-primary text-white py-space-16 rounded-2xl font-bold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[20px]">list_alt</span>
                  Về danh sách đơn
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
