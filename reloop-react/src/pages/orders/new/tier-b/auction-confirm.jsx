import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../../components/order/OrderStepperBar';

export default function AuctionConfirm() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Auction Live', icon: 'gavel', href: '/orders/new/tier-b/auction-live.html' },
    { n: 4, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/auction-address.html' },
    { n: 5, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/auction-confirm.html' },
  ];
  
  const item = {
    name: 'Tủ lạnh đôi 300L Samsung RT35K',
    weight: 62,
    condition: 'Còn hoạt động · ngoại hình 90%',
  };
  
  const winning = {
    collector: 'Anh Hùng',
    hub: 'Hub Q.7',
    tier: 3,
    rating: 4.9,
    completed: 142,
    amount: 1_720_000,
    vehicle: 'Xe tải nhỏ 500kg · 51C-234.56',
  };
  
  const speedFloor = 1_200_000;
  const delta = winning.amount - speedFloor;
  const deltaPct = Math.round((delta / speedFloor) * 100);
  
  const breakdown = [
    { label: `Báo giá thắng từ ${winning.collector}`, value: winning.amount, accent: 'primary', sub: 'Hub trả ngay khi cân và verify xong' },
    { label: 'Phí vận chuyển', value: 0, accent: 'tier-s', sub: 'Đã bao gồm trong bid (collector chịu)', strike: 80_000 },
    { label: 'Phí đấu giá RE-LOOP', value: 0, accent: 'tier-s', sub: 'Miễn phí cho user · platform thu từ collector', strike: 25_000 },
    { label: 'Premium spot check (nếu pass)', value: 200_000, accent: 'tier-s', sub: 'Cộng thêm nếu Hub đánh giá ≥95% nguyên vẹn' },
  ];
  
  const finalAmount = winning.amount;
  const finalMax = winning.amount + 200_000;
  
  const aucPolicies = [
    { icon: 'gavel', title: 'Cam kết bid thắng', desc: `${winning.collector} đã ký nhận bid ${winning.amount.toLocaleString('vi-VN')}đ. Không thương lượng xuống.` },
    { icon: 'verified', title: 'Verified collector Tier 3', desc: '142 đơn hoàn tất · ★4.9 · 0 dispute trong 6 tháng. Hub bảo lãnh.' },
    { icon: 'replay_circle_filled', title: 'Đổi collector trước slot 1h', desc: 'Nếu thấy không hợp, RE-LOOP gọi lại bid thứ 2 (Chị Mai · 1.680.000đ) trong 30 phút.' },
    { icon: 'shield', title: 'Bảo hiểm rủi ro', desc: 'Trầy xước/hư hại trong vận chuyển → RE-LOOP đền theo định giá Hub.' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/tier-b/auction-address" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-info font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 4 · Địa chỉ + Slot
            </a>
      
            <OrderStepperBar steps={steps} activeStep={5} tierAccent="amber-deep" />
      
            {/* Hero */}
            <section className="grad-hero rounded-[32px] shadow-clay-lg border border-info/30 p-space-40 mb-space-24 relative overflow-hidden">
              <div className="absolute top-space-24 right-space-24 w-32 h-32 rounded-full bg-info/15 blur-3xl"></div>
              <div className="relative grid grid-cols-[1.5fr_1fr] gap-space-32 items-center">
                <div className="text-col">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">gavel</span>
                    AUCTION MODE · BƯỚC CUỐI
                  </span>
                  <h1 className="font-h1 text-h1 text-text-primary mt-space-12">Chốt đơn với báo giá thắng</h1>
                  <p className="font-body-lg text-[15px] text-text-secondary mt-space-12">Sau khi xác nhận, {winning.collector} ({winning.hub}) sẽ nhận đơn. Anh sẽ điều xe đến trong slot bạn đã chọn.</p>
                  <div className="mt-space-20 flex flex-wrap gap-space-12">
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">payments</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">{winning.amount.toLocaleString('vi-VN')}đ</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">trending_up</span>
                      <span className="font-mono-md text-[12px] text-tier-s font-bold whitespace-nowrap">+{deltaPct}% vs Speed</span>
                    </span>
                    <span className="px-space-16 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">schedule</span>
                      <span className="font-mono-md text-[12px] text-text-primary font-bold">Hôm nay 16:00 — 18:00</span>
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-bg-elevated rounded-[24px] shadow-clay border-2 border-info/30 p-space-24">
                    <div className="flex items-center gap-space-12 mb-space-12">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                        H
                      </div>
                      <div className="flex-1 text-col">
                        <div className="flex items-center gap-space-8 flex-wrap">
                          <span className="font-display font-bold text-[14px] text-text-primary">{winning.collector}</span>
                          <span className="px-space-8 py-[1px] rounded-full bg-info text-white font-mono-md text-[9px] font-bold whitespace-nowrap">TIER {winning.tier}</span>
                        </div>
                        <span className="font-mono-md text-[11px] text-text-tertiary block mt-[2px]">★ {winning.rating} · {winning.completed} đơn xong</span>
                      </div>
                    </div>
                    <div className="border-t border-border-subtle pt-space-12">
                      <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Báo giá thắng</span>
                      <span className="font-display font-extrabold text-[28px] text-info tabular-nums leading-none mt-space-4 block">{winning.amount.toLocaleString('vi-VN')}đ</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums mt-space-4 block">+{delta.toLocaleString('vi-VN')}đ vs Speed sàn</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Comparison: Speed vs Auction outcome */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 pt-space-40 relative">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">compare_arrows</span>
                    SO VỚI SPEED MODE BAN ĐẦU
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Auction lời hơn bao nhiêu?</h2>
                  <div className="grid grid-cols-2 gap-space-16">
                    <div className="bg-bg-base/50 border-2 border-border-subtle rounded-2xl p-space-24 text-col">
                      <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-bold block">SPEED MODE (giả định)</span>
                      <span className="font-display font-bold text-[14px] text-text-secondary mt-space-8 block">Giá sàn cố định</span>
                      <span className="font-display font-extrabold text-[28px] text-text-tertiary tabular-nums leading-none mt-space-8 block">{speedFloor.toLocaleString('vi-VN')}đ</span>
                      <span className="font-mono-md text-[11px] text-text-tertiary mt-space-8 block">Hub trả ngay · không thương lượng</span>
                    </div>
                    <div className="bg-clay-sky border-2 border-info rounded-2xl p-space-24 relative text-col shadow-clay">
                      <span className="absolute -top-3 left-space-16 px-space-12 py-[3px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold whitespace-nowrap shadow-clay-sm">+{deltaPct}% TỐT HƠN</span>
                      <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">AUCTION MODE (thực tế)</span>
                      <span className="font-display font-bold text-[14px] text-info mt-space-8 block">{winning.collector} thắng đấu</span>
                      <span className="font-display font-extrabold text-[28px] text-info tabular-nums leading-none mt-space-8 block">{winning.amount.toLocaleString('vi-VN')}đ</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold mt-space-8 block tabular-nums">+{delta.toLocaleString('vi-VN')}đ tăng thêm</span>
                    </div>
                  </div>
                  <div className="mt-space-16 p-space-16 bg-clay-mint/40 border border-tier-s/20 rounded-2xl flex items-center gap-space-12">
                    <span className="material-symbols-rounded fill !text-[20px] text-tier-s shrink-0">savings</span>
                    <p className="font-body-md text-[12px] text-text-secondary text-col">Bạn lời thêm <strong className="text-tier-s tabular-nums">{delta.toLocaleString('vi-VN')}đ</strong> nhờ chờ 30 phút auction. Bằng <strong>2 ngày tiền cơm trưa</strong>.</p>
                  </div>
                </section>
      
                {/* Breakdown */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">receipt_long</span>
                    CHI TIẾT GIÁ AUCTION
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-20">Cấu trúc thanh toán</h2>
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
                    <div className="pt-space-20 mt-space-8 flex items-center justify-between bg-clay-sky -mx-space-32 px-space-32 py-space-20 rounded-b-[28px]">
                      <div className="text-col">
                        <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">TỔNG NHẬN</span>
                        <span className="font-mono-md text-[11px] text-text-secondary mt-[2px] block">Premium phụ thuộc Hub spot check</span>
                      </div>
                      <div className="text-right text-col">
                        <span className="font-display font-extrabold text-[28px] text-info tabular-nums leading-none block">{finalAmount.toLocaleString('vi-VN')}đ</span>
                        <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums mt-space-4 block">+ tối đa 200.000đ premium</span>
                      </div>
                    </div>
                  </div>
                </section>
      
                {/* Auction-specific policies */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-info font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">policy</span>
                    CHÍNH SÁCH AUCTION
                  </span>
                  <div className="grid grid-cols-2 gap-space-16">
                    {aucPolicies.map((p) => (
                      <div className="bg-bg-base/50 rounded-2xl border border-border-subtle p-space-20 flex items-start gap-space-12">
                        <div className="w-10 h-10 rounded-xl bg-clay-sky flex items-center justify-center shadow-clay-sm shrink-0">
                          <span className="material-symbols-rounded fill !text-[18px] text-info">{p.icon}</span>
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
                <section className="bg-clay-sky rounded-[28px] shadow-clay-sm border-2 border-info/40 p-space-24">
                  <label className="flex items-start gap-space-12 cursor-pointer">
                    <input type="checkbox" checked className="mt-space-4 w-5 h-5 accent-info shrink-0" />
                    <div className="flex-1 text-col">
                      <span className="font-display font-bold text-[14px] text-text-primary block">Tôi đồng ý điều khoản Tier B Auction</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Bao gồm: cam kết với báo giá thắng <strong className="text-info tabular-nums">{winning.amount.toLocaleString('vi-VN')}đ</strong>, <a href="/wallet/policy" className="text-info font-bold hover:underline">Chính sách thanh toán</a>, <a href="/wallet/policy" className="text-info font-bold hover:underline">Quy định Hub spot check</a> và Bảo hiểm rủi ro vận chuyển.</p>
                    </div>
                  </label>
                </section>
              </div>
      
              {/* Sidebar */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-sky rounded-[24px] shadow-clay border-2 border-info/40 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold block">AUCTION CHECKOUT</span>
                  <div className="mt-space-12">
                    <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Bạn nhận</span>
                    <span className="font-display font-extrabold text-[36px] text-info tabular-nums leading-none mt-space-4 block">{finalAmount.toLocaleString('vi-VN')}đ</span>
                    <div className="mt-space-8 flex items-center gap-space-8 flex-wrap">
                      <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold whitespace-nowrap shadow-clay-sm">+{delta.toLocaleString('vi-VN')}đ vs Speed</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold tabular-nums">+ tối đa 200k</span>
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
                    <a href="/wallet" className="font-mono-md text-[10px] text-info font-bold hover:underline shrink-0">Đổi</a>
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold mb-space-12 block">TÓM TẮT ĐƠN</span>
                  <div className="flex flex-col gap-space-12 text-col">
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">kitchen</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Vật phẩm</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">{item.name}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">person</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Collector</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">{winning.collector} · {winning.hub}</span>
                      </div>
                    </div>
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
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Slot</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold">Hôm nay · 16:00 — 18:00</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-12">
                      <span className="material-symbols-rounded fill !text-[18px] text-info mt-[2px]">eco</span>
                      <div className="flex-1 text-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Reward</span>
                        <span className="font-body-md text-[12px] text-tier-s font-semibold">+248 GP · −58kg CO₂</span>
                      </div>
                    </div>
                  </div>
                </div>
      
                <a href="/orders/new/tier-b/auction-success" className="bg-info text-white py-space-16 rounded-2xl font-bold shadow-clay text-[16px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[22px]">gavel</span>
                  Chốt với {winning.collector}
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
