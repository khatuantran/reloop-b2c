import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function Confirm() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-h.html' },
    { n: 2, label: 'Loại + số lượng', icon: 'checklist', href: '/orders/new/tier-h/items.html' },
    { n: 3, label: 'Xác nhận thu gom', icon: 'check_circle', href: '/orders/new/tier-h/confirm.html' },
  ];
  
  const items = [
    { name: 'Pin AA/AAA', count: 12, unit: 'cục', icon: 'battery_full', weight: 0.3 },
    { name: 'Pin xe máy', count: 1, unit: 'cục', icon: 'electric_bolt', weight: 4.5 },
  ];
  
  const totalWeight = items.reduce((s, i) => s + i.count * i.weight, 0);
  
  const policies = [
    { icon: 'attach_money', title: 'Phí thu gom 0đ', desc: 'NĐ 08/2022 trợ giá môi trường. Không thu user, kể cả phí xe.' },
    { icon: 'verified_user', title: 'Đối tác Veolia · IMVS', desc: 'Đã có giấy phép Bộ TN&MT xử lý chất thải nguy hại. Quy trình ISO 14001.' },
    { icon: 'description', title: 'Chứng chỉ ESG có MST', desc: 'PDF gửi mail trong 24h. Doanh nghiệp dùng cho ESG report annual.' },
    { icon: 'block', title: 'Không vứt chung rác sinh hoạt', desc: 'Pin/dầu/thuốc rò rỉ vào đất sẽ ô nhiễm 1 nguồn nước trong 30 năm.' },
  ];
  
  const safety = [
    { icon: 'inventory_2', title: 'Đóng gói riêng', desc: 'Pin trong hộp giấy/zip · dầu trong chai kín · bóng đèn bọc giấy báo' },
    { icon: 'do_not_touch', title: 'Không vỡ pin lithium', desc: 'Nếu pin xe máy phồng → để xa nguồn nhiệt, gọi hotline' },
    { icon: 'sanitizer', title: 'Đeo găng tay', desc: 'Khi đụng dầu/thuốc cũ. Rửa tay sau khi giao' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-h/items" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-h font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 2 · Loại + số lượng
            </a>
      
            <OrderStepperBar steps={steps} activeStep={3} tierAccent="tier-h" />
      
            {/* Hero */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border border-tier-h/30 p-space-40 mb-space-24 relative overflow-hidden">
              <div className="absolute top-space-24 right-space-24 w-32 h-32 rounded-full bg-tier-h/10 blur-3xl"></div>
              <div className="relative grid grid-cols-[1.5fr_1fr] gap-space-32 items-center">
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">warning</span>
                    TIER H · CHẤT THẢI NGUY HẠI · BƯỚC CUỐI
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Xác nhận thu gom miễn phí</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">Hub Q.7 sẽ điều xe chuyên dụng đến nhà bạn. Không thu phí — Veolia/IMVS xử lý theo NĐ 08/2022.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-h">scale</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">~{totalWeight.toFixed(1)} kg</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-h">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">Phí 0đ</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">redeem</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold">+50 GP + Chứng chỉ</span>
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-bg-elevated rounded-[24px] shadow-clay border-2 border-tier-h/30 p-space-24">
                    <span className="font-mono-md text-[10px] text-tier-h uppercase tracking-wider font-bold block">VẬT PHẨM ĐÃ CHỌN</span>
                    <div className="mt-space-12 flex flex-col gap-space-12">
                      {items.map((it) => (
                        <div className="flex items-center gap-space-12">
                          <div className="w-10 h-10 rounded-2xl bg-clay-blush flex items-center justify-center shadow-clay-sm shrink-0">
                            <span className="material-symbols-rounded fill !text-[20px] text-tier-h">{it.icon}</span>
                          </div>
                          <div className="flex-1 text-col">
                            <span className="font-display font-bold text-[13px] text-text-primary block">{it.name}</span>
                            <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{it.count} {it.unit} · ~{(it.count * it.weight).toFixed(1)} kg</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Pickup info */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">location_on</span>
                    ĐỊA CHỈ + KHUNG GIỜ
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Hub Q.7 đến tận nơi</h2>
      
                  <div className="grid grid-cols-2 gap-space-16">
                    <div className="bg-bg-base/50 rounded-2xl p-space-20 border border-border-subtle text-col">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <div className="w-10 h-10 rounded-2xl bg-clay-blush flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[20px] text-tier-h">home</span>
                        </div>
                        <span className="font-mono-md text-[10px] text-tier-h uppercase tracking-wider font-bold">ĐỊA CHỈ</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary block">Nhà riêng · Q.7</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">124/15 Nguyễn Thị Thập, P. Tân Phú, Q.7, TPHCM</p>
                      <p className="font-mono-md text-[11px] text-text-tertiary mt-space-8 flex items-center gap-space-4">
                        <span className="material-symbols-rounded !text-[12px]">sticky_note_2</span>
                        Chuông tầng 4 · có thang máy
                      </p>
                    </div>
      
                    <div className="bg-clay-blush border border-tier-h/30 rounded-2xl p-space-20 text-col">
                      <div className="flex items-center gap-space-12 mb-space-12">
                        <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[20px] text-tier-h">event</span>
                        </div>
                        <span className="font-mono-md text-[10px] text-tier-h uppercase tracking-wider font-bold">SLOT (XE TIER H)</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary block">Mai · Thứ 2 · 12/05</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">14:00 — 16:00 (xe Tier H chỉ chạy T2 + T5)</p>
                      <p className="font-mono-md text-[11px] text-text-tertiary mt-space-8 flex items-center gap-space-4">
                        <span className="material-symbols-rounded !text-[12px]">local_shipping</span>
                        Xe chuyên dụng kín có khoá an toàn
                      </p>
                    </div>
                  </div>
                </section>
      
                {/* Hazardous waste policies */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">policy</span>
                    QUYỀN LỢI + CAM KẾT
                  </span>
                  <div className="grid grid-cols-2 gap-space-16">
                    {policies.map((p) => (
                      <div className="bg-bg-base/50 rounded-2xl border border-border-subtle p-space-20 flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-xl bg-clay-blush flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-tier-h">{p.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{p.title}</span>
                          <p className="font-body-md text-[12px] text-text-secondary mt-space-4">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Safety prep */}
                <section className="bg-clay-blush rounded-[28px] shadow-clay-sm border-2 border-tier-h/30 p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">health_and_safety</span>
                    CHUẨN BỊ AN TOÀN TRƯỚC SLOT
                  </span>
                  <div className="grid grid-cols-3 gap-space-16">
                    {safety.map((s) => (
                      <div className="bg-bg-elevated/80 rounded-2xl p-space-20 text-col">
                        <div className="w-10 h-10 rounded-2xl bg-clay-blush flex items-center justify-center shadow-clay-sm mb-space-12">
                          <span className="material-symbols-rounded fill !text-[20px] text-tier-h">{s.icon}</span>
                        </div>
                        <span className="font-display font-bold text-[13px] text-text-primary block">{s.title}</span>
                        <p className="font-body-md text-[12px] text-text-secondary mt-space-4">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Terms */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-24">
                  <label className="flex items-start gap-space-12 cursor-pointer">
                    <input type="checkbox" checked className="mt-space-4 w-5 h-5 accent-tier-h shrink-0" />
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">Tôi đồng ý điều khoản Tier H</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Bao gồm: cam kết khai đúng vật phẩm + số lượng (sai có thể bị từ chối tại điểm), <a href="/wallet/policy" className="text-tier-h font-bold hover:underline">Quy định Veolia/IMVS</a> và xử lý dữ liệu theo PDPL 2024.</p>
                    </div>
                  </label>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-blush rounded-[24px] shadow-clay border-2 border-tier-h/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold block">TIER H CHECKOUT</span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Phí thu gom</span>
                    <span className="font-display font-extrabold text-[36px] text-tier-h tabular-nums leading-none mt-space-4 block">0đ</span>
                    <span className="font-mono-md text-[11px] text-text-secondary mt-space-4 block">NĐ 08/2022 trợ giá môi trường</span>
                  </div>
                  <div className="mt-space-16 p-space-16 bg-bg-elevated/60 rounded-2xl flex items-center gap-space-12">
                    <div className="w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-s">redeem</span>
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Bạn nhận</span>
                      <span className="font-display font-bold text-[14px] text-tier-s block">+50 GP · Chứng chỉ ESG</span>
                    </div>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">TÓM TẮT ĐƠN</span>
                  <div className="flex flex-col gap-space-12 text-col">
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-h mt-[2px]">checklist</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Vật phẩm</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">{items.length} loại · ~{totalWeight.toFixed(1)} kg</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-h mt-[2px]">location_on</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Địa chỉ</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">124/15 Nguyễn Thị Thập, Q.7</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-h mt-[2px]">event</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Slot xe Tier H</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Thứ 2 · 12/05 · 14:00 — 16:00</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-tier-h mt-[2px]">recycling</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Xử lý cuối</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Veolia · IMVS</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <a href="/orders/new/tier-h/success" className="bg-tier-h text-white py-space-16 rounded-2xl font-bold shadow-clay text-[16px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[22px]">verified</span>
                  Đặt thu gom miễn phí
                </a>
                <button className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">
                  Lưu nháp · Đặt sau
                </button>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
