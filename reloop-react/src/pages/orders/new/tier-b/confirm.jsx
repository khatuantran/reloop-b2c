import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function Confirm() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/address.html' },
    { n: 4, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/confirm.html' },
  ];
  
  const item = {
    name: 'Tủ lạnh đôi 300L Samsung RT35K',
    weight: 62,
    condition: 'Còn hoạt động · ngoại hình 90%',
    floor: 1_200_000,
    premiumMax: 450_000,
  };
  
  const breakdown = [
    { label: 'Giá sàn cam kết', value: 1_200_000, accent: 'primary', sub: 'Hub trả ngay khi cân xong' },
    { label: 'Premium tối đa (nếu pass spot check)', value: 450_000, accent: 'tier-s', sub: 'Cộng vào ZaloPay sau Hub verify' },
    { label: 'Phí vận chuyển Hub Q.7', value: 0, accent: 'tier-s', sub: 'RE-LOOP trả 100% (Speed Mode)', strike: 80_000 },
    { label: 'Phí dịch vụ', value: 0, accent: 'tier-s', sub: 'Miễn phí cho user Trust ≥ 50', strike: 25_000 },
  ];
  
  const total = item.floor;
  const totalMax = item.floor + item.premiumMax;
  
  const policies = [
    { icon: 'shield', title: 'Cam kết giá sàn', desc: 'Hub không thương lượng xuống. Nếu cân thiếu, vẫn trả đủ giá sàn cho khối lượng đã ghi nhận.' },
    { icon: 'schedule', title: 'Slot 16:00 — 18:00', desc: 'Trễ hơn 30 phút, RE-LOOP cộng +50.000đ bồi thường vào ví ZaloPay.' },
    { icon: 'replay', title: 'Đổi/huỷ trước 2h', desc: 'Huỷ miễn phí trước slot 2 giờ. Sau đó tính 30.000đ phí điều xe.' },
    { icon: 'verified_user', title: 'Đảm bảo thanh toán', desc: 'Tiền chuyển ZaloPay trong 60s sau khi cân xong. Không có chuyện "khất nợ".' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b/address" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 3 · Địa chỉ + Slot
            </a>
      
            <OrderStepperBar steps={steps} activeStep={4} tierAccent="amber-deep" />
      
            {/* Hero */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border border-amber-deep/20 p-space-40 mb-space-24 relative overflow-hidden">
              <div className="absolute top-space-24 right-space-24 w-32 h-32 rounded-full bg-amber-deep/10 blur-3xl"></div>
              <div className="relative grid grid-cols-[1.5fr_1fr] gap-space-32 items-center">
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">flash_on</span>
                    SPEED MODE · BƯỚC CUỐI
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Sẵn sàng đặt đơn Tier B</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">Sau khi xác nhận, đơn sẽ broadcast tới Hub Q.7 ngay. Anh Hùng (collector trực hôm nay) sẽ phản hồi trong 5 phút.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-amber-deep">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">1.200.000 — 1.650.000đ</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-amber-deep">schedule</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">Hôm nay 16:00 — 18:00</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">eco</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold tabular-nums">+186 GP</span>
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-bg-elevated rounded-[24px] shadow-clay border-2 border-amber-deep/30 p-space-24">
                    <div className="flex items-center gap-space-12 mb-space-12">
                      <div className="w-12 h-12 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0">
                        <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">kitchen</span>
                      </div>
                      <div className="flex-1 text-col">
                        <span className="font-display font-bold text-[14px] text-text-primary block">{item.name}</span>
                        <span className="font-mono-md text-[11px] text-text-tertiary">{item.weight} kg · {item.condition}</span>
                      </div>
                    </div>
                    <div className="border-t border-border-subtle pt-space-12 flex items-end justify-between">
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Bạn nhận</span>
                        <span className="font-display font-extrabold text-[26px] text-text-primary tabular-nums leading-none mt-space-4 block">{total.toLocaleString('vi-VN')}đ</span>
                      </div>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums">→ tối đa {totalMax.toLocaleString('vi-VN')}đ</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Price breakdown */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">receipt_long</span>
                    CHI TIẾT GIÁ
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Cấu trúc giá Speed</h2>
                  <div className="flex flex-col divide-y divide-border-subtle">
                    {breakdown.map((b) => (
                      <div className="py-space-16 flex items-start gap-space-16">
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[14px] text-text-primary block">{b.label}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary mt-[2px] block">{b.sub}</span>
                        </div>
                        <div className="text-right shrink-0 text-col">
                          {b.strike && (
                            <span className="font-mono-md text-[11px] text-text-tertiary line-through tabular-nums block">{b.strike.toLocaleString('vi-VN')}đ</span>
                          )}
                          <span className={cx(['font-display font-extrabold text-[18px] tabular-nums block',
                            b.value === 0 ? 'text-tier-s' :
                            b.accent === 'tier-s' ? 'text-tier-s' : 'text-text-primary'])}>
                            {b.value === 0 ? 'Miễn phí' : (b.accent === 'tier-s' ? '+' : '') + b.value.toLocaleString('vi-VN') + 'đ'}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="pt-space-20 mt-space-8 flex items-center justify-between bg-clay-butter -mx-space-32 px-space-32 py-space-20 rounded-b-[28px]">
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-bold block">TỔNG NHẬN (TỐI THIỂU)</span>
                        <span className="font-mono-md text-[11px] text-text-secondary mt-[2px] block">Premium phụ thuộc Hub spot check</span>
                      </div>
                      <div className="text-right text-col">
                        <span className="font-display font-extrabold text-[28px] text-text-primary tabular-nums leading-none block">{total.toLocaleString('vi-VN')}đ</span>
                        <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums mt-space-4 block">+ tối đa {item.premiumMax.toLocaleString('vi-VN')}đ premium</span>
                      </div>
                    </div>
                  </div>
                </section>
      
                {/* Policies */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">policy</span>
                    CHÍNH SÁCH ÁP DỤNG
                  </span>
                  <div className="grid grid-cols-2 gap-space-16">
                    {policies.map((p) => (
                      <div className="bg-bg-base/50 rounded-2xl border border-border-subtle p-space-20 flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-amber-deep">{p.icon}</span>
                        </div>
                        <div className="flex-1 text-col">
                          <span className="font-display font-bold text-[13px] text-text-primary block">{p.title}</span>
                          <p className="font-body-md text-[12px] text-text-secondary mt-space-4">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Terms */}
                <section className="bg-clay-mint rounded-[28px] shadow-clay-sm border-2 border-tier-s/30 p-space-24">
                  <label className="flex items-start gap-space-12 cursor-pointer">
                    <input type="checkbox" checked className="mt-space-4 w-5 h-5 accent-tier-s shrink-0" />
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">Tôi đồng ý điều khoản Tier B Speed</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Bao gồm: <a href="/wallet/policy" className="text-tier-s font-bold hover:underline">Chính sách thanh toán ZaloPay</a> · <a href="/wallet/policy" className="text-tier-s font-bold hover:underline">Quy định Hub spot check</a> · Cam kết tính chính xác cân nặng và mô tả vật phẩm.</p>
                    </div>
                  </label>
                </section>
              </div>
      
              {/* Sidebar — sticky checkout */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-butter rounded-[24px] shadow-clay border-2 border-amber-deep/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block">SPEED CHECKOUT</span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Bạn nhận tối thiểu</span>
                    <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">{total.toLocaleString('vi-VN')}đ</span>
                    <div className="mt-space-8 flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">trending_up</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums">+ tối đa {item.premiumMax.toLocaleString('vi-VN')}đ</span>
                    </div>
                  </div>
                  <div className="mt-space-16 p-space-12 bg-bg-elevated/60 rounded-2xl flex items-center gap-space-12">
                    <div className="w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                      <span className="material-symbols-rounded fill !text-[18px] text-info">account_balance_wallet</span>
                    </div>
                    <div className="flex-1 text-col">
                      <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Chuyển vào</span>
                      <span className="font-display font-bold text-[13px] text-text-primary block">ZaloPay 0901-***-456</span>
                    </div>
                    <a href="/wallet" className="font-mono-md text-[10px] text-amber-deep font-bold hover:underline shrink-0">Đổi</a>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">TÓM TẮT ĐƠN</span>
                  <div className="flex flex-col gap-space-12 text-col">
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">kitchen</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Vật phẩm</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">{item.name}</span>
                      </div>
                    </div>
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
                      <span className="material-symbols-rounded fill !text-[18px] text-amber-deep mt-[2px]">eco</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Reward</span>
                        <span className="font-body-md text-[12px] text-tier-s font-semibold">+186 GP · −58kg CO₂</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <a href="/orders/new/tier-b/success" className="bg-amber-deep text-white py-space-16 rounded-2xl font-bold shadow-clay text-[16px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[22px]">flash_on</span>
                  Xác nhận đặt đơn
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
