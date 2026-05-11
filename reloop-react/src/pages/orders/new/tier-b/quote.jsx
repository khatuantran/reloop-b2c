import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function Quote() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/address.html' },
    { n: 4, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/confirm.html' },
  ];
  
  const speedFloors = [
    { item: 'Tủ lạnh đôi 300L', condition: 'Còn hoạt động', floor: 1_200_000, premium: 1_650_000 },
    { item: 'Tivi LCD 42"', condition: 'Còn hoạt động', floor: 580_000, premium: 850_000 },
    { item: 'Sofa 3 chỗ vải', condition: 'Còn dùng được', floor: 320_000, premium: 480_000 },
    { item: 'Máy giặt cửa trên 8kg', condition: 'Còn hoạt động', floor: 850_000, premium: 1_180_000 },
  ];
  
  const auctionBids = [
    { collector: 'Anh Hùng · Hub Q.7', tier: '3', rating: 4.9, amount: 1_650_000, time: '2 phút trước', highlight: true },
    { collector: 'Chị Mai · Hub Bình Thạnh', tier: '3', rating: 4.8, amount: 1_580_000, time: '5 phút trước' },
    { collector: 'Anh Tuấn · Hub Q.7', tier: '2', rating: 4.6, amount: 1_420_000, time: '8 phút trước' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 1 · Đổi ảnh
            </a>
      
            <OrderStepperBar steps={steps} activeStep={2} tierAccent="amber-deep" />
      
            {/* Confirmed photo summary banner */}
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
              <a href="/orders/new/tier-b/quote" className="px-space-32 py-space-12 rounded-full bg-clay-butter border-2 border-amber-deep text-amber-deep font-mono-md text-[13px] font-bold shadow-clay-sm flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[16px]">flash_on</span>
                Speed Mode
              </a>
              <a href="/orders/new/tier-b/auction" className="px-space-32 py-space-12 rounded-full text-text-secondary font-mono-md text-[13px] font-semibold hover:bg-bg-surface flex items-center gap-space-8 transition">
                <span className="material-symbols-rounded !text-[16px]">gavel</span>
                Auction Mode
                <span className="px-space-8 py-[1px] rounded-full bg-info/15 text-info font-mono-md text-[10px] font-bold">+30-50%</span>
              </a>
            </div>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Speed Mode floor table */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden">
                  <div className="p-space-32 pb-space-16">
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">flash_on</span>
                      SPEED MODE · GIÁ SÀN CỐ ĐỊNH
                    </span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Đối chiếu giá theo vật phẩm</h2>
                    <p className="font-body-md text-[13px] text-text-secondary mt-space-4">Giá sàn: thu ngay không thương lượng. Premium: nếu Hub đánh giá còn nguyên 100%, Hub trả thêm.</p>
                  </div>
                  <div className="divide-y divide-border-subtle">
                    {speedFloors.map((f, i) => (
                      <label className={cx(['flex items-center gap-space-16 px-space-32 py-space-24 cursor-pointer transition', i === 0 ? 'bg-clay-butter/40' : 'hover:bg-bg-surface/50'])}>
                        <input type="radio" name="speed-item" checked={i === 0} className="w-5 h-5 accent-amber-deep" />
                        <div className="w-12 h-12 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm">
                          <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">{i === 0 ? 'kitchen' : i === 1 ? 'tv' : i === 2 ? 'chair' : 'local_laundry_service'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[15px] text-text-primary block">{f.item}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{f.condition}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Sàn / Premium</span>
                          <span className="font-display font-bold text-[14px] text-text-primary tabular-nums block mt-space-4">
                            {f.floor.toLocaleString('vi-VN')}đ <span className="text-tier-s">→ {f.premium.toLocaleString('vi-VN')}đ</span>
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </section>
      
                {/* Auction preview */}
                <section className="bg-clay-sky rounded-[28px] shadow-clay border-2 border-info/30 p-space-32">
                  <div className="flex items-center justify-between mb-space-16">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">gavel</span>
                        AUCTION MODE · NẾU MUỐN GIÁ TỐT HƠN
                      </span>
                      <h3 className="font-h2 text-h2 text-text-primary mt-space-8">3 collector báo giá tốt nhất</h3>
                    </div>
                    <a href="/orders/new/tier-b/auction" className="bg-text-primary text-white px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                      Bắt đầu Auction
                      <span className="material-symbols-rounded !text-[16px]">arrow_forward</span>
                    </a>
                  </div>
                  <p className="font-body-md text-[13px] text-text-secondary mb-space-16">Đăng đơn → 3 collector trong 30 phút sẽ báo giá. Bạn chọn báo giá tốt nhất. <strong className="text-info">Có thể được giá cao hơn Speed 30-50%.</strong></p>
                  <div className="flex flex-col gap-space-8">
                    {auctionBids.map((b) => (
                      <div className={cx(['flex items-center gap-space-12 p-space-16 rounded-2xl border-2 shadow-clay-sm', b.highlight ? 'bg-clay-mint border-tier-s' : 'bg-bg-elevated border-border-subtle'])}>
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold shadow-clay-sm">
                          {b.collector[0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{b.collector}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">★ {b.rating} · Tier {b.tier} · {b.time}</span>
                        </div>
                        <span className={cx(['font-mono-md text-[16px] font-bold tabular-nums', b.highlight ? 'text-tier-s' : 'text-text-primary'])}>{b.amount.toLocaleString('vi-VN')}đ</span>
                        {b.highlight && <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold">CAO NHẤT</span>}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-butter rounded-[24px] shadow-clay border-2 border-amber-deep/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold">SPEED QUOTE</span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Giá sàn (cam kết)</span>
                    <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">1.200.000đ</span>
                  </div>
                  <div className="mt-space-12 p-space-16 bg-bg-elevated/60 rounded-2xl flex items-center justify-between">
                    <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">Premium tối đa</span>
                    <span className="font-mono-md text-[14px] text-tier-s font-bold tabular-nums">+450.000đ</span>
                  </div>
                  <div className="mt-space-8 p-space-16 bg-bg-elevated/60 rounded-2xl flex items-center justify-between">
                    <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">Phí vận chuyển Hub</span>
                    <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">RE-LOOP trả</span>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">scale</span>
                    MASS-BALANCE TIER B
                  </span>
                  <h4 className="font-display font-bold text-[14px] text-text-primary mt-space-8 mb-space-8">Sai số ±5% chấp nhận</h4>
                  <p className="font-body-md text-[12px] text-text-secondary">Khác Tier C (90%), Tier B chấp nhận sai số 5% do đồ điện tử cũ có hao mòn. Premium chỉ trả khi còn nguyên vẹn 95%+.</p>
                </div>
      
                <a href="/orders/new/tier-b/address" className="bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[20px]">flash_on</span>
                  Chốt Speed → Bước 3
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
