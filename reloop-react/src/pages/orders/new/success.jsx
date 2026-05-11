import { cx } from '@/lib/cx';

export default function Success() {
  // Tier S — đơn vừa đặt (demo dùng đơn mẫu RL-2026-001234 để các link chi tiết/track/chat hoạt động)
  const order = {
    id: 'RL-2026-001234',
    createdAt: '10/05/2026 · 09:14',
    item: 'Chai PET 500ml',
    itemHint: '~3.2 kg ước tính · AI confidence 95%',
    marketPrice: 38_400,
    userReceive: 28_800,
    hub: 'Hub Q.7 RE-LOOP',
    collector: 'Anh Tuấn',
    collectorTier: 1,
    collectorRating: 4.8,
    collectorDone: 87,
    collectorVehicle: 'Xe máy Honda Wave · 51A-12345',
    slot: 'Hôm nay · 14:00 — 16:00',
    address: '123 Nguyễn Văn Linh, P. Tân Phong, Q.7',
    paymentMethod: 'ZaloPay 0901-***-456',
    gp: 16,
    co2: 5,
  };
  
  const timeline = [
    { time: 'Vừa xong', label: 'Đơn đã tạo', sub: `Mã ${order.id}`, icon: 'check_circle', state: 'done' },
    { time: 'Đang diễn ra', label: 'Hub Q.7 điều phối', sub: '6 collector trong bán kính 3 km', icon: 'broadcast_on_personal', state: 'active' },
    { time: 'Trong 5 phút', label: 'Collector phản hồi', sub: `${order.collector} sẽ gọi xác nhận`, icon: 'call', state: 'pending' },
    { time: 'Theo slot', label: 'Đến nhà cân + thanh toán', sub: 'Cân QTĐLVN 252 tại nhà → khối lượng → báo giá → OTP xác nhận → ZaloPay 60s. Bấm để xem trước flow.', icon: 'local_shipping', state: 'pending', href: '/orders/transaction-flow/tier-s/weighing.html' },
  ];
  
  const quickActions = [
    { icon: 'visibility', label: 'Xem chi tiết đơn', href: `/orders/${order.id}/index.html`, accent: 'tier-s', bg: 'bg-clay-mint', border: 'border-tier-s/30' },
    { icon: 'my_location', label: 'Theo dõi collector', href: `/orders/${order.id}/track.html`, accent: 'info', bg: 'bg-clay-sky', border: 'border-info/30' },
    { icon: 'chat', label: `Chat với ${order.collector}`, href: `/orders/${order.id}/chat.html`, accent: 'amber-deep', bg: 'bg-clay-butter', border: 'border-amber-deep/30' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            {/* Confetti hero */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border-2 border-tier-s/30 p-space-48 mb-space-32 relative overflow-hidden">
              <svg className="absolute top-space-24 left-space-32 w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.7" />
              </svg>
              <svg className="absolute top-space-40 right-[20%] w-6 h-6" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="4" fill="#E8B340" opacity="0.6" />
              </svg>
              <svg className="absolute bottom-space-24 right-space-48 w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="8" width="6" height="20" fill="#52E08D" opacity="0.5" transform="rotate(15 11 18)" />
                <rect x="22" y="6" width="6" height="22" fill="#2BB36A" opacity="0.5" transform="rotate(-20 25 17)" />
              </svg>
              <svg className="absolute bottom-space-32 left-[40%] w-8 h-8" viewBox="0 0 32 32" fill="none">
                <path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#2BB36A" opacity="0.6" />
              </svg>
      
              <div className="relative grid grid-cols-[auto_1fr_auto] gap-space-32 items-center">
                <div className="relative w-[120px] h-[120px] shrink-0">
                  <div className="absolute inset-0 rounded-full bg-tier-s/20 animate-ping"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-tier-s to-lime-deep flex items-center justify-center shadow-clay-lg">
                    <span className="material-symbols-rounded fill text-white" style={{ 'fontSize': '64px' }}>check_circle</span>
                  </div>
                </div>
      
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">bolt</span>
                    TIER S · ĐƠN ĐÃ ĐẶT
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Collector sắp đến lấy chai PET của bạn</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">Mã đơn <strong className="font-mono-md text-tier-s tabular-nums">{order.id}</strong> · tạo lúc {order.createdAt}. {order.collector} sẽ gọi xác nhận trong 5 phút, đến cân tại nhà & chuyển ZaloPay ngay.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">~{order.userReceive.toLocaleString('vi-VN')}đ vào ZaloPay</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">schedule</span>
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
                    <span className="font-mono-md text-[11px] text-text-primary font-bold">Chia sẻ</span>
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
                {/* Timeline */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">timeline</span>
                    TIẾN TRÌNH ĐƠN
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">Hub đang điều phối collector</h2>
      
                  <div className="relative">
                    <div className="absolute left-[27px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
                    <div className="flex flex-col gap-space-20">
                      {timeline.map((t) => {
                        const Wrap = t.href ? 'a' : 'div';
                        return (
                        <Wrap href={t.href} className={cx(['relative flex items-start gap-space-20', t.href && 'group rounded-2xl -mx-space-8 px-space-8 py-space-8 hover:bg-clay-mint/40 transition'])}>
                          <div className={cx(['relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 border-2',
                            t.state === 'done' ? 'bg-tier-s text-white border-tier-s' :
                            t.state === 'active' ? 'bg-clay-mint text-tier-s border-tier-s animate-pulse' :
                            t.href ? 'bg-clay-mint text-tier-s border-tier-s/40' :
                            'bg-bg-base text-text-tertiary border-border-subtle'])}>
                            <span className="material-symbols-rounded fill !text-[24px]">{t.icon}</span>
                          </div>
                          <div className="flex-1 text-col pt-space-4">
                            <div className="flex items-center gap-space-12 flex-wrap">
                              <span className="font-display font-bold text-[15px] text-text-primary">{t.label}</span>
                              <span className={cx(['px-space-8 py-[2px] rounded-full font-mono-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap',
                                t.state === 'done' ? 'bg-tier-s/15 text-tier-s' :
                                t.state === 'active' ? 'bg-tier-s/15 text-tier-s' :
                                'bg-bg-base text-text-tertiary'])}>
                                {t.time}
                              </span>
                            </div>
                            <p className="font-body-md text-[13px] text-text-secondary mt-space-4">{t.sub}</p>
                          </div>
                          {t.href && <span className="material-symbols-rounded !text-[20px] text-tier-s self-center shrink-0 group-hover:translate-x-1 transition">arrow_forward</span>}
                        </Wrap>
                        );
                      })}
                    </div>
                  </div>
                </section>
      
                {/* Order summary */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">receipt_long</span>
                    CHI TIẾT ĐƠN
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Tóm tắt</h2>
      
                  <div className="grid grid-cols-2 gap-space-16">
                    <div className="bg-clay-mint/40 rounded-2xl p-space-20 border border-tier-s/20">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">water_bottle</span>
                        <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold">VẬT PHẨM</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary block text-col">{order.item}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary block mt-space-4">{order.itemHint}</span>
                    </div>
      
                    <div className="bg-clay-mint/40 rounded-2xl p-space-20 border border-tier-s/20">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">payments</span>
                        <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold">BẠN NHẬN</span>
                      </div>
                      <span className="font-display font-extrabold text-[20px] text-text-primary tabular-nums block">~{order.userReceive.toLocaleString('vi-VN')}đ</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary mt-space-4 block">75% giá thị trường ({order.marketPrice.toLocaleString('vi-VN')}đ) · Hub + RE-LOOP lo logistics</span>
                    </div>
      
                    <div className="bg-clay-sky/40 rounded-2xl p-space-20 border border-info/20">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-info">location_on</span>
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold">ĐỊA CHỈ + SLOT</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary block text-col">{order.address}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary block mt-space-4">{order.slot}</span>
                    </div>
      
                    <div className="bg-clay-lavender/40 rounded-2xl p-space-20 border border-info/20">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-info">account_balance_wallet</span>
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold">THANH TOÁN</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary block">{order.paymentMethod}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary block mt-space-4">Chuyển ngay ≤ 60 giây sau khi cân</span>
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
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">inventory_2</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Gom vào bao trong suốt</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Để collector cân nhanh, đỡ sai số</p>
                    </div>
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-20 text-col">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">water_drop</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Đổ hết nước, bóp dẹp</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Chai sạch + dẹp = giá tốt hơn</p>
                    </div>
                    <div className="bg-bg-elevated/70 rounded-2xl p-space-20 text-col">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">door_open</span>
                      </div>
                      <span className="font-display font-bold text-[13px] text-text-primary block">Đợi sẵn trước cổng</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Collector mặc áo xanh RE-LOOP, đeo huy hiệu</p>
                    </div>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">person_pin</span>
                    COLLECTOR ĐỀ XUẤT
                  </span>
                  <div className="mt-space-16 flex items-center gap-space-12">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-mint to-tier-s flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                      T
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">{order.collector}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">{order.hub} · Tier {order.collectorTier}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 grid grid-cols-2 gap-space-8">
                    <div className="bg-bg-base/60 rounded-xl p-space-12 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đánh giá</span>
                      <span className="font-display font-bold text-[16px] text-amber-deep tabular-nums mt-space-4 block">★ {order.collectorRating}</span>
                    </div>
                    <div className="bg-bg-base/60 rounded-xl p-space-12 text-col">
                      <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Đơn xong</span>
                      <span className="font-display font-bold text-[16px] text-tier-s tabular-nums mt-space-4 block">{order.collectorDone}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 p-space-12 bg-bg-base/60 rounded-xl text-col">
                    <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phương tiện</span>
                    <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{order.collectorVehicle}</span>
                  </div>
                  <div className="mt-space-12 grid grid-cols-2 gap-space-8">
                    <a href="#" className="bg-tier-s text-white py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:-translate-y-[1px] transition">
                      <span className="material-symbols-rounded fill !text-[16px]">call</span>
                      Gọi
                    </a>
                    <a href={`/orders/${order.id}/chat`} className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:shadow-clay transition">
                      <span className="material-symbols-rounded fill !text-[16px]">chat</span>
                      Chat
                    </a>
                  </div>
                </div>
      
                {/* Collector đã đến → vào flow giao dịch tại nhà */}
                <a href="/orders/transaction-flow/tier-s/weighing" className="bg-clay-mint rounded-[24px] shadow-clay border-2 border-tier-s/30 p-space-24 group hover:shadow-clay-lg transition relative overflow-hidden">
                  <svg className="absolute -top-2 -right-2 w-12 h-12" viewBox="0 0 48 48" fill="none"><path d="M24 6l3 9h9l-7.5 6 3 9-7.5-6-7.5 6 3-9-7.5-6h9z" fill="#2BB36A" opacity="0.18" /></svg>
                  <div className="flex items-center gap-space-12">
                    <div className="relative w-12 h-12 shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-tier-s/20 animate-ping"></div>
                      <div className="relative w-full h-full rounded-2xl bg-tier-s flex items-center justify-center shadow-clay-sm"><span className="material-symbols-rounded fill !text-[22px] text-white">waving_hand</span></div>
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-tier-s font-bold block">COLLECTOR ĐÃ ĐẾN NHÀ</span>
                      <span className="font-display font-bold text-[15px] text-text-primary">Bắt đầu cân tại nhà →</span>
                    </div>
                    <span className="material-symbols-rounded !text-[20px] text-tier-s group-hover:translate-x-1 transition shrink-0">arrow_forward</span>
                  </div>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-12 text-col">{order.collector} quét QR đơn để mở: cân QTĐLVN 252 → khối lượng → báo giá → OTP → ZaloPay 60 giây.</p>
                  <div className="mt-space-12 flex gap-space-8">
                    {['scale', 'monitor_weight', 'paid', 'lock', 'check_circle'].map((ic, i) => (
                      <div className={cx(['w-8 h-8 rounded-xl flex items-center justify-center shadow-clay-sm', i === 0 ? 'bg-tier-s text-white' : 'bg-bg-elevated/80 text-text-tertiary'])}><span className="material-symbols-rounded fill !text-[14px]">{ic}</span></div>
                    ))}
                  </div>
                </a>
      
                {/* Cancel/Reschedule */}
                <div className="bg-clay-blush/40 rounded-[24px] shadow-clay-sm border border-tier-h/20 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">edit_calendar</span>
                    ĐỔI Ý?
                  </span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-12 text-col">Huỷ miễn phí trước slot 1 giờ. Đổi slot/địa chỉ bất kỳ lúc nào trước khi collector xuất phát.</p>
                  <div className="mt-space-16 flex flex-col gap-space-8">
                    <button className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">
                      Đổi slot / địa chỉ
                    </button>
                    <button className="bg-bg-elevated text-tier-h border border-tier-h/30 py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:bg-clay-blush">
                      Huỷ đơn
                    </button>
                  </div>
                </div>
      
                {/* Reorder hint */}
                <div className="bg-clay-mint/50 rounded-[24px] shadow-clay-sm border border-tier-s/20 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">replay</span>
                    BÁN HẰNG TUẦN?
                  </span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-12 text-col">Đơn này lưu thành <strong>template Chai PET</strong>. Lần sau gom đủ bao, chỉ cần 2 tap là đặt được.</p>
                  <a href={`/orders/${order.id}`} className="mt-space-12 inline-flex items-center gap-space-4 font-mono-md text-[12px] text-tier-s font-bold hover:underline">
                    Lưu template
                    <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                  </a>
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
