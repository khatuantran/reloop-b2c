import { cx } from '@/lib/cx';

export default function Success() {
  const order = {
    id: 'RL-H-2026-000087',
    createdAt: '10/05/2026 · 14:42',
    items: [
      { name: 'Pin AA/AAA', count: 12, unit: 'cục', icon: 'battery_full', weight: 0.3 },
      { name: 'Pin xe máy', count: 1, unit: 'cục', icon: 'electric_bolt', weight: 4.5 },
    ],
    hub: 'Hub Q.7 RE-LOOP',
    driver: 'Anh Nam · Tài xế xe Tier H',
    driverPhone: '0938-***-712',
    vehicle: 'Xe chuyên dụng kín · 51H-984.21',
    slot: 'Mai · Thứ 2 · 12/05 · 14:00 — 16:00',
    address: '124/15 Nguyễn Thị Thập, Q.7',
    partner: 'Veolia Vietnam',
    certEta: '24h sau thu gom',
    gp: 50,
    co2Soil: 1, // 1 nguồn nước
  };
  const totalWeight = order.items.reduce((s, i) => s + i.count * i.weight, 0);
  
  const timeline = [
    { time: 'Vừa xong', label: 'Đơn Tier H đã tạo', sub: `Mã ${order.id}`, icon: 'check_circle', state: 'done' },
    { time: 'Trong 4 giờ', label: 'Hub Q.7 xếp xe', sub: `${order.driver} sẽ gọi xác nhận lộ trình`, icon: 'route', state: 'active' },
    { time: 'Mai · 14:00', label: 'Đến nhà thu gom', sub: 'Đem găng tay + bao đóng kín pin/dầu', icon: 'local_shipping', state: 'pending' },
    { time: '+24h sau thu', label: 'Chứng chỉ ESG về mail', sub: 'PDF có MST · dùng cho ESG report', icon: 'description', state: 'pending' },
    { time: '+7 ngày', label: 'Veolia hoàn tất xử lý', sub: 'Báo cáo định danh chất thải · gửi link tracking', icon: 'recycling', state: 'pending' },
  ];
  
  const certPreview = {
    no: 'CT-RL-2026-000087',
    issuedTo: 'Trần Mai Linh',
    partner: 'Veolia Vietnam — Cấp phép #1234/BTNMT',
    scope: '12 cục pin AA/AAA + 1 cục pin xe máy (~4.8 kg)',
    signedBy: 'Nguyễn V. An — Trưởng Hub Q.7',
    qr: 'reloop.vn/c/CT-RL-2026-000087',
  };
  
  const impact = [
    { icon: 'water_drop', value: '1 nguồn nước', label: 'Tránh nhiễm chì 30 năm', clay: 'bg-clay-sky', accent: 'text-info' },
    { icon: 'forest', value: '~12 m²', label: 'Đất tránh ô nhiễm pin', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { icon: 'eco', value: '+50 GP', label: 'Cộng vào ví khi nhận chứng chỉ', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
  ];
  
  const quickActions = [
    { icon: 'visibility', label: 'Xem chi tiết đơn', href: `/orders/${order.id}/index.html`, accent: 'tier-h', bg: 'bg-clay-blush', border: 'border-tier-h/30' },
    { icon: 'description', label: 'Xem chứng chỉ mẫu', href: '#cert', accent: 'amber-deep', bg: 'bg-clay-butter', border: 'border-amber-deep/30' },
    { icon: 'business', label: 'Đăng ký B2B Tier H', href: '#', accent: 'info', bg: 'bg-clay-sky', border: 'border-info/30' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            {/* Hero */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border-2 border-tier-h/30 p-space-48 mb-space-32 relative overflow-hidden">
              {/* Decorative elements */}
              <svg className="absolute top-space-24 left-space-32 w-9 h-9" viewBox="0 0 36 36" fill="none">
                <path d="M18 4l3 8h8l-7 5 3 9-7-5-7 5 3-9-7-5h8z" fill="#D14B3B" opacity="0.45" />
              </svg>
              <svg className="absolute top-space-32 right-[18%] w-7 h-7" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="5" fill="#52E08D" opacity="0.55" />
              </svg>
              <svg className="absolute bottom-space-32 left-[42%] w-8 h-8" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="6" width="6" height="20" fill="#D14B3B" opacity="0.5" transform="rotate(15 9 16)" />
                <rect x="20" y="4" width="6" height="22" fill="#F2D58F" opacity="0.55" transform="rotate(-20 23 15)" />
              </svg>
      
              <div className="relative grid grid-cols-[auto_1fr_auto] gap-space-32 items-center">
                {/* Big shield badge */}
                <div className="relative w-[120px] h-[120px] shrink-0">
                  <div className="absolute inset-0 rounded-full bg-tier-h/15 animate-ping"></div>
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-tier-h to-red-700 flex items-center justify-center shadow-clay-lg">
                    <span className="material-symbols-rounded fill text-white" style={{ 'fontSize': '64px' }}>verified_user</span>
                  </div>
                </div>
      
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">shield</span>
                    TIER H · ĐƠN ĐÃ ĐẶT MIỄN PHÍ
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Cảm ơn bạn đã chọn xử lý đúng cách</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">Mã đơn <strong className="font-mono-md text-tier-h tabular-nums">{order.id}</strong> · {order.totalItems || `${order.items.length} loại`} · ~{totalWeight.toFixed(1)} kg. {order.driver.split(' · ')[0]} sẽ gọi trong 4 giờ.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-h">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">Phí 0đ · NĐ 08/2022</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-h">schedule</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">{order.slot}</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">eco</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold">+{order.gp} GP · Chứng chỉ ESG</span>
                    </span>
                  </div>
                </div>
      
                <div className="hidden lg:flex flex-col gap-space-8 shrink-0">
                  <button className="bg-bg-elevated/95 backdrop-blur border border-border-subtle p-space-12 rounded-2xl shadow-clay-sm hover:shadow-clay flex items-center gap-space-8 transition">
                    <span className="material-symbols-rounded !text-[18px] text-text-secondary">share</span>
                    <span className="font-mono-md text-[11px] text-text-primary font-bold">Truyền cảm hứng</span>
                  </button>
                  <button className="bg-bg-elevated/95 backdrop-blur border border-border-subtle p-space-12 rounded-2xl shadow-clay-sm hover:shadow-clay flex items-center gap-space-8 transition">
                    <span className="material-symbols-rounded !text-[18px] text-text-secondary">qr_code</span>
                    <span className="font-mono-md text-[11px] text-text-primary font-bold">QR đơn</span>
                  </button>
                </div>
              </div>
            </section>
      
            {/* Quick actions */}
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
                {/* Impact stats — Tier H specific */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">public</span>
                    TÁC ĐỘNG MÔI TRƯỜNG
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Bạn vừa cứu</h2>
                  <div className="grid grid-cols-3 gap-space-16">
                    {impact.map((i) => (
                      <div className={cx(['rounded-2xl p-space-24 border', i.clay, 'border-tier-h/20'])}>
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                          <span className={cx(['material-symbols-rounded fill !text-[24px]', i.accent])}>{i.icon}</span>
                        </div>
                        <span className={cx(['font-display font-extrabold text-[22px] tabular-nums block', i.accent])}>{i.value}</span>
                        <p className="font-body-md text-[12px] text-text-secondary mt-space-4 text-col">{i.label}</p>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Timeline */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">timeline</span>
                    LỘ TRÌNH XỬ LÝ
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">Từ nhà bạn → Veolia</h2>
      
                  <div className="relative">
                    <div className="absolute left-[27px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
                    <div className="flex flex-col gap-space-20">
                      {timeline.map((t) => (
                        <div className="relative flex items-start gap-space-20">
                          <div className={cx(['relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 border-2',
                            t.state === 'done' ? 'bg-tier-s text-white border-tier-s' :
                            t.state === 'active' ? 'bg-clay-blush text-tier-h border-tier-h animate-pulse' :
                            'bg-bg-base text-text-tertiary border-border-subtle'])}>
                            <span className="material-symbols-rounded fill !text-[24px]">{t.icon}</span>
                          </div>
                          <div className="flex-1 text-col pt-space-4">
                            <div className="flex items-center gap-space-12 flex-wrap">
                              <span className="font-display font-bold text-[15px] text-text-primary">{t.label}</span>
                              <span className={cx(['px-space-8 py-[2px] rounded-full font-mono-md text-[10px] font-bold uppercase tracking-wider whitespace-nowrap',
                                t.state === 'done' ? 'bg-tier-s/15 text-tier-s' :
                                t.state === 'active' ? 'bg-tier-h/15 text-tier-h' :
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
      
                {/* Cert preview */}
                <section id="cert" className="bg-bg-elevated rounded-[28px] shadow-clay border-2 border-amber-deep/30 p-space-32 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-clay-butter/30 rounded-full blur-2xl"></div>
                  <span className="relative font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">workspace_premium</span>
                    CHỨNG CHỈ ESG · MẪU
                  </span>
                  <h2 className="relative font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">PDF gửi mail trong {order.certEta}</h2>
      
                  <div className="relative bg-clay-butter/40 border-2 border-dashed border-amber-deep/40 rounded-2xl p-space-32">
                    <div className="flex items-start justify-between mb-space-20">
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-bold block">CHỨNG NHẬN XỬ LÝ CHẤT THẢI NGUY HẠI</span>
                        <h3 className="font-h2 text-h2 text-text-primary mt-space-8 tabular-nums">#{certPreview.no}</h3>
                        <span className="font-mono-md text-[11px] text-text-tertiary block mt-space-4">Cấp ngày {order.createdAt.split(' ·')[0]}</span>
                      </div>
                      <div className="w-20 h-20 bg-bg-elevated rounded-2xl border-2 border-amber-deep/40 flex items-center justify-center shadow-clay-sm shrink-0">
                        <svg viewBox="0 0 80 80" className="w-16 h-16">
                          <rect width="80" height="80" fill="#FFFFFF" />
                          {Array.from({length: 64}).map((_, i) => (
                            <rect x={(i % 8) * 10 + 4} y={Math.floor(i / 8) * 10 + 4} width="8" height="8" fill={Math.random() > 0.5 ? '#0F1F18' : '#FFFFFF'} />
                          ))}
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-space-16">
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-bold block">Người nhận</span>
                        <span className="font-display font-bold text-[14px] text-text-primary mt-space-4 block">{certPreview.issuedTo}</span>
                      </div>
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-bold block">Đối tác xử lý</span>
                        <span className="font-display font-bold text-[14px] text-text-primary mt-space-4 block">{certPreview.partner}</span>
                      </div>
                      <div className="col-span-2 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-bold block">Phạm vi xử lý</span>
                        <span className="font-body-md text-[13px] text-text-primary mt-space-4 block">{certPreview.scope}</span>
                      </div>
                      <div className="col-span-2 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-bold block">Ký xác nhận</span>
                        <span className="font-body-md text-[13px] text-text-primary mt-space-4 block">{certPreview.signedBy}</span>
                      </div>
                    </div>
                    <div className="mt-space-20 pt-space-16 border-t border-amber-deep/20 flex items-center justify-between">
                      <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{certPreview.qr}</span>
                      <span className="px-space-12 py-space-4 rounded-full bg-amber-deep/15 text-amber-deep font-mono-md text-[10px] font-bold uppercase tracking-wider">CHƯA CẤP</span>
                    </div>
                  </div>
      
                  <p className="relative font-body-md text-[12px] text-text-tertiary mt-space-16 text-col">Doanh nghiệp dùng chứng chỉ này cho ESG report annual. Mã QR trên cert verify trên reloop.vn/c/&lt;mã&gt;.</p>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                {/* Driver/vehicle card */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">local_shipping</span>
                    XE TIER H ĐIỀU PHỐI
                  </span>
                  <div className="mt-space-16 flex items-center gap-space-12">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-blush to-tier-h flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                      N
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">{order.driver.split(' · ')[0]}</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">{order.driver.split(' · ')[1]}</span>
                    </div>
                  </div>
                  <div className="mt-space-12 p-space-16 bg-bg-base/60 rounded-xl text-col">
                    <span className="font-mono-md text-[9px] text-text-tertiary uppercase tracking-wider font-semibold block">Phương tiện</span>
                    <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{order.vehicle}</span>
                  </div>
                  <a href={`tel:${order.driverPhone}`} className="mt-space-12 w-full bg-tier-h text-white py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm inline-flex items-center justify-center gap-space-8 hover:-translate-y-[1px] transition">
                    <span className="material-symbols-rounded fill !text-[16px]">call</span>
                    Gọi {order.driverPhone}
                  </a>
                </div>
      
                {/* Items recap */}
                <div className="bg-clay-blush/40 rounded-[24px] shadow-clay-sm border border-tier-h/20 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">checklist</span>
                    VẬT PHẨM ĐÃ KHAI
                  </span>
                  <div className="flex flex-col gap-space-8">
                    {order.items.map((it) => (
                      <div className="bg-bg-elevated/70 rounded-xl p-space-12 flex items-center gap-space-12">
                        <div className="w-10 h-10 rounded-xl bg-clay-blush flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-tier-h">{it.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[12px] text-text-primary block">{it.name}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{it.count} {it.unit} · ~{(it.count * it.weight).toFixed(1)} kg</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="font-mono-md text-[10px] text-text-tertiary mt-space-12 text-col">Khai sai → tài xế có quyền từ chối tại điểm. Thay đổi trước slot 4h: chat hub.</p>
                </div>
      
                {/* B2B upsell */}
                <a href="#" className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 flex items-start gap-space-12 hover:shadow-clay transition">
                  <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                    <span className="material-symbols-rounded fill !text-[20px] text-info">business</span>
                  </div>
                  <div className="flex-1 text-col">
                    <span className="font-mono-md text-[10px] uppercase tracking-wider text-info font-bold block">DOANH NGHIỆP?</span>
                    <span className="font-display font-bold text-[14px] text-text-primary block mt-space-4">B2B contract Tier H</span>
                    <p className="font-mono-md text-[11px] text-text-tertiary mt-space-4">Định kỳ + ESG report tháng + dashboard riêng</p>
                  </div>
                </a>
      
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
