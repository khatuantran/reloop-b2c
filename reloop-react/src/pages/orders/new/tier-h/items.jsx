import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function Items() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-h.html' },
    { n: 2, label: 'Loại + số lượng', icon: 'checklist', href: '/orders/new/tier-h/items.html' },
    { n: 3, label: 'Xác nhận thu gom', icon: 'check_circle', href: '/orders/new/tier-h/confirm.html' },
  ];
  
  const hazardousItems = [
    { item: 'Pin AA/AAA', icon: 'battery_full', count: 'Theo gói', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { item: 'Pin xe máy/lithium', icon: 'electric_bolt', count: '/cục', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { item: 'Bóng đèn huỳnh quang', icon: 'lightbulb', count: '/bóng', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { item: 'Dầu nhớt thải', icon: 'water_drop', count: '/lít', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { item: 'Thuốc hết hạn', icon: 'medication', count: '/gói', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { item: 'Sơn/dung môi', icon: 'palette', count: '/lít', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
  ];
  
  const benefits = [
    { icon: 'attach_money', label: 'Phí thu gom', value: '0đ', desc: 'NĐ 08/2022 trợ giá môi trường' },
    { icon: 'verified', label: 'Chứng chỉ ESG', value: 'PDF có MST', desc: 'Doanh nghiệp dùng cho ESG report' },
    { icon: 'recycling', label: 'Đối tác xử lý', value: 'Veolia · IMVS', desc: 'Cấp phép Bộ TN&MT' },
    { icon: 'redeem', label: 'Thưởng GP', value: '+50 GP/lần', desc: 'Cộng khi nhận chứng chỉ' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-h" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-h font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 1 · Đổi ảnh
            </a>
      
            <OrderStepperBar steps={steps} activeStep={2} tierAccent="tier-h" />
      
            {/* Confirmed photo summary */}
            <div className="bg-clay-blush border-2 border-tier-h/30 rounded-2xl p-space-16 mb-space-24 flex items-center gap-space-12 shadow-clay-sm">
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                <span className="material-symbols-rounded fill !text-[22px] text-tier-h">verified</span>
              </div>
              <div className="flex-1">
                <span className="font-mono-md text-[10px] uppercase tracking-wider text-tier-h font-bold block">ẢNH ĐÃ XÁC NHẬN · BƯỚC 1 ✓</span>
                <span className="font-display font-bold text-[14px] text-text-primary">Pin AA / AAA × ~12 cục (đóng túi) · AI confidence 89%</span>
              </div>
              <a href="/orders/new/tier-h" className="font-mono-md text-[11px] text-tier-h font-bold hover:underline">Sửa ảnh</a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Items selection */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">checklist</span>
                    CHỌN LOẠI VẬT PHẨM
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-16">Đánh dấu các loại bạn có</h2>
                  <div className="grid grid-cols-2 gap-space-12">
                    {hazardousItems.map((it, i) => (
                      <label className={cx(['flex items-center gap-space-12 p-space-16 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm hover:shadow-clay', i < 2 ? `${it.clay} border-${it.accent.replace('text-', '')}/40` : 'bg-bg-surface border-border-subtle'])}>
                        <input type="checkbox" checked={i < 2} className="w-5 h-5 accent-tier-h" />
                        <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm', i < 2 ? 'bg-bg-elevated' : it.clay])}>
                          <span className={cx(['material-symbols-rounded fill !text-[22px]', it.accent])}>{it.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[14px] text-text-primary block leading-tight">{it.item}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary mt-space-4 block">Tính {it.count}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </section>
      
                {/* Quantity for selected */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-h font-semibold">SỐ LƯỢNG ƯỚC TÍNH</span>
                  <h3 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-16">Đã chọn 2 loại</h3>
                  <div className="flex flex-col gap-space-12">
                    <div className="flex items-center gap-space-16 p-space-16 bg-clay-blush rounded-2xl border border-tier-h/30 shadow-clay-sm">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-h">battery_full</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary flex-1">Pin AA/AAA</span>
                      <div className="flex items-center gap-space-8">
                        <button className="w-8 h-8 rounded-xl bg-bg-elevated border border-tier-h/30 shadow-clay-sm flex items-center justify-center font-display font-bold text-tier-h">−</button>
                        <span className="font-mono-md text-[15px] text-text-primary font-bold tabular-nums w-8 text-center">12</span>
                        <button className="w-8 h-8 rounded-xl bg-bg-elevated border border-tier-h/30 shadow-clay-sm flex items-center justify-center font-display font-bold text-tier-h">+</button>
                      </div>
                      <span className="font-mono-md text-[12px] text-text-tertiary">cục</span>
                    </div>
                    <div className="flex items-center gap-space-16 p-space-16 bg-clay-blush rounded-2xl border border-tier-h/30 shadow-clay-sm">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-h">electric_bolt</span>
                      </div>
                      <span className="font-display font-bold text-[14px] text-text-primary flex-1">Pin xe máy</span>
                      <div className="flex items-center gap-space-8">
                        <button className="w-8 h-8 rounded-xl bg-bg-elevated border border-tier-h/30 shadow-clay-sm flex items-center justify-center font-display font-bold text-tier-h">−</button>
                        <span className="font-mono-md text-[15px] text-text-primary font-bold tabular-nums w-8 text-center">1</span>
                        <button className="w-8 h-8 rounded-xl bg-bg-elevated border border-tier-h/30 shadow-clay-sm flex items-center justify-center font-display font-bold text-tier-h">+</button>
                      </div>
                      <span className="font-mono-md text-[12px] text-text-tertiary">cục</span>
                    </div>
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-mint rounded-[24px] shadow-clay border-2 border-tier-s/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-s">eco</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mt-space-8">QUYỀN LỢI TIER H</span>
                  <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-16">Miễn phí + chứng chỉ</h4>
                  <ul className="flex flex-col gap-space-12">
                    {benefits.map((b) => (
                      <li className="flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-tier-s">{b.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8">
                            <span className="font-display font-bold text-[12px] text-text-primary">{b.label}</span>
                            <span className="font-mono-md text-[12px] text-tier-s font-bold">{b.value}</span>
                          </div>
                          <span className="font-mono-md text-[10px] text-text-tertiary block mt-space-4">{b.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
      
                <a href="#" className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 flex items-center gap-space-12 hover:shadow-clay transition">
                  <span className="material-symbols-rounded fill !text-[24px] text-info">groups</span>
                  <div className="flex-1">
                    <span className="font-mono-md text-[11px] text-info uppercase tracking-wider font-bold block">DOANH NGHIỆP?</span>
                    <span className="font-display font-bold text-[14px] text-text-primary">B2B contract Tier H</span>
                  </div>
                  <span className="material-symbols-rounded !text-[18px] text-info">arrow_forward</span>
                </a>
      
                <a href="/orders/new/tier-h/confirm" className="bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[20px]">verified</span>
                  Đặt thu gom miễn phí · Bước 3
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
