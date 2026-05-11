import { cx } from '@/lib/cx';
import OrderStepperBar from '../../../components/order/OrderStepperBar';
import StepHero from '../../../components/order/StepHero';
import { USER } from '../../../lib/mock';

export default function Step6() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-s.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/step-2.html' },
    { n: 3, label: 'Báo giá', icon: 'paid', href: '/orders/new/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/step-6.html' },
  ];
  
  const userShare = 13_200;
  const summary = [
    { icon: 'water_bottle', label: 'VẬT PHẨM', value: 'Chai PET 500ml', sub: '18 chai · ~3.2 kg', bg: 'bg-clay-mint/40', border: 'border-tier-s/20', accent: 'text-tier-s' },
    { icon: 'payments', label: 'BẠN NHẬN', value: `${userShare.toLocaleString('vi-VN')}đ`, sub: '75% giá thị trường · phí xe + ZaloPay RE-LOOP chịu', bg: 'bg-clay-mint/40', border: 'border-tier-s/20', accent: 'text-tier-s', big: true },
    { icon: 'location_on', label: 'ĐỊA CHỈ', value: `${USER.address}, Q.7`, sub: 'Nhà riêng · chuông tầng 4', bg: 'bg-clay-sky/40', border: 'border-info/20', accent: 'text-info' },
    { icon: 'schedule', label: 'KHUNG GIỜ', value: 'Hôm nay · 14:00 — 16:00', sub: '6 collector rảnh · ETA ~12 phút', bg: 'bg-clay-sky/40', border: 'border-info/20', accent: 'text-info' },
  ];
  const prep = [
    { icon: 'inventory_2', t: 'Gom vào bao trong suốt' },
    { icon: 'water_drop', t: 'Đổ hết nước, bóp dẹp' },
    { icon: 'door_open', t: 'Đợi sẵn trước cổng' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new/step-5" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Bước 5 · Lịch hẹn
            </a>
      
            <OrderStepperBar steps={steps} activeStep={6} tierAccent="tier-s" />
      
            <StepHero
              eyebrow="Tier S · Bước 6/6 · Xác nhận"
              title="Tổng kết & xác nhận đặt đơn"
              subtitle="Kiểm tra lần cuối — collector sẽ liên hệ trong vòng 5 phút"
              accent="tier-s"
              illustration="milestone"
              chips={[
                { icon: 'verified', label: 'Cam kết', value: 'Giá CHẮC CHẮN', tone: 'mint' },
                { icon: 'bolt', label: 'Thanh toán', value: 'ZaloPay 60s', tone: 'sky' },
                { icon: 'support_agent', label: 'Hỗ trợ', value: '1900-RELOOP', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <div className="flex flex-col gap-space-24">
                {/* Summary */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">receipt_long</span>
                    TÓM TẮT ĐƠN
                  </span>
                  <div className="grid grid-cols-2 gap-space-16">
                    {summary.map((s) => (
                      <div className={cx(['rounded-2xl p-space-20 border text-col', s.bg, s.border])}>
                        <div className="flex items-center gap-space-12 mb-space-12">
                          <span className={cx(['material-symbols-rounded fill !text-[20px]', s.accent])}>{s.icon}</span>
                          <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold', s.accent])}>{s.label}</span>
                        </div>
                        {s.big
                          ? <span className="font-display font-extrabold text-[24px] text-text-primary tabular-nums block">{s.value}</span>
                          : <span className="font-display font-bold text-[14px] text-text-primary block">{s.value}</span>}
                        <span className="font-mono-md text-[11px] text-text-tertiary mt-space-4 block">{s.sub}</span>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Payment method */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay-sm border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[16px]">credit_card</span>
                    PHƯƠNG THỨC NHẬN TIỀN
                  </span>
                  <div className="grid grid-cols-2 gap-space-12">
                    <label className="flex items-center gap-space-12 p-space-16 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm bg-clay-mint border-tier-s">
                      <input type="radio" name="pay" checked className="w-5 h-5 accent-tier-s" />
                      <div className="w-11 h-11 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[22px] text-info">account_balance_wallet</span></div>
                      <div className="text-col"><span className="font-display font-bold text-[14px] text-text-primary block">ZaloPay</span><span className="font-mono-md text-[10px] text-text-tertiary">Tự động 60s · 0901-***-456 · phí RE-LOOP chịu</span></div>
                    </label>
                    <label className="flex items-center gap-space-12 p-space-16 rounded-2xl border-2 cursor-pointer transition shadow-clay-sm bg-bg-base border-border-subtle hover:border-amber-deep/40">
                      <input type="radio" name="pay" className="w-5 h-5 accent-amber-deep" />
                      <div className="w-11 h-11 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[22px] text-amber-deep">payments</span></div>
                      <div className="text-col"><span className="font-display font-bold text-[14px] text-text-primary block">Tiền mặt</span><span className="font-mono-md text-[10px] text-text-tertiary">Collector ứng tại nhà · +2.000đ phí RE-LOOP</span></div>
                    </label>
                  </div>
                  <label className="flex items-start gap-space-12 cursor-pointer mt-space-20 p-space-16 bg-clay-mint/40 border border-tier-s/20 rounded-2xl">
                    <input type="checkbox" checked className="mt-space-4 w-5 h-5 accent-tier-s shrink-0" />
                    <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">Tôi đồng ý điều khoản Tier S</span><p className="font-body-md text-[12px] text-text-secondary mt-space-4">Khai đúng vật phẩm + khối lượng · <a href="/wallet/policy" className="text-tier-s font-bold hover:underline">Chính sách thanh toán ZaloPay</a></p></div>
                  </label>
                </section>
              </div>
      
              {/* Sidebar — checkout */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-mint rounded-[24px] shadow-clay border-2 border-tier-s/30 p-space-24 relative overflow-hidden">
                  <svg className="absolute top-space-12 right-space-16 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#2BB36A" opacity="0.4" /></svg>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block">TỔNG KẾT THANH TOÁN</span>
                  <div className="mt-space-12"><span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">Bạn nhận (cam kết)</span><span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">{userShare.toLocaleString('vi-VN')}đ</span></div>
                  <div className="mt-space-12 p-space-12 bg-bg-elevated/60 rounded-2xl flex items-center gap-space-12">
                    <div className="w-10 h-10 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-info">account_balance_wallet</span></div>
                    <div className="flex-1 text-col"><span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider block">Chuyển vào</span><span className="font-display font-bold text-[13px] text-text-primary block">ZaloPay 0901-***-456</span></div>
                  </div>
                  <div className="mt-space-8 p-space-12 bg-bg-elevated/60 rounded-2xl flex items-center justify-between"><span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">Reward</span><span className="font-mono-md text-[13px] text-tier-s font-bold">+16 GP · −5kg CO₂</span></div>
                </div>
      
                <a href="/orders/new/success" className="bg-lime text-text-on-lime py-space-16 rounded-2xl font-bold shadow-clay-lime text-[16px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[22px]">check_circle</span>
                  Xác nhận đặt đơn
                </a>
                <button className="bg-bg-elevated text-text-primary border border-border-subtle py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">Lưu nháp · Đặt sau</button>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded !text-[14px]">tips_and_updates</span>CHUẨN BỊ TRƯỚC SLOT</span>
                  <div className="flex flex-col gap-space-8">
                    {prep.map((p) => (
                      <div className="flex items-center gap-space-12 p-space-12 bg-bg-base/50 rounded-xl">
                        <div className="w-8 h-8 rounded-xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[16px] text-tier-s">{p.icon}</span></div>
                        <span className="font-body-md text-[12px] text-text-primary">{p.t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
