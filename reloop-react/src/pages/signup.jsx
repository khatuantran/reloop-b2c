import AuthShell from '../components/auth/AuthShell';
import AuthSidebar from '../components/auth/AuthSidebar';

export default function Signup() {
  const steps = [
    { n: 1, label: 'Số điện thoại', icon: 'smartphone', href: '/signup.html' },
    { n: 2, label: 'Nhập OTP', icon: 'sms', href: '/signup/otp.html' },
    { n: 3, label: 'Thông tin', icon: 'person', href: '/signup/info.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/signup/address.html' },
    { n: 5, label: 'Hoàn tất', icon: 'celebration', href: '/signup/done.html' },
  ];
  return (
    <>
      <AuthShell flow="signup" steps={steps} activeStep={1}>
          <div className="grid grid-cols-[1fr_400px] gap-space-32">
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-48">
              <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold mb-space-8 block">BƯỚC 1/5 · SỐ ĐIỆN THOẠI</span>
              <h1 className="font-display-l text-[40px] font-extrabold leading-tight tracking-tight text-text-primary mb-space-8">Tham gia 12.4K hộ Q.7</h1>
              <p className="font-body-lg text-[15px] text-text-secondary mb-space-32 max-w-[480px]">
                Đăng ký miễn phí trong 90 giây · Tặng <strong className="text-tier-s">100 GP + 1 cây trồng</strong> cho đơn đầu
              </p>
      
              <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">SỐ ĐIỆN THOẠI <span className="text-tier-h">*</span></span>
              <div className="bg-bg-surface rounded-2xl border-2 border-tier-s shadow-inset-soft p-space-12 flex items-center gap-space-12 mb-space-12">
                <div className="bg-clay-mint border border-tier-s/30 rounded-xl px-space-12 py-space-8 flex items-center gap-space-8">
                  <span className="text-[16px]">🇻🇳</span>
                  <span className="font-mono-md text-[14px] text-text-primary font-bold">+84</span>
                </div>
                <input type="tel" value="901 234 567" autofocus className="flex-1 bg-transparent border-0 focus:outline-none font-mono-md text-[18px] text-text-primary tabular-nums" />
                <span className="material-symbols-rounded fill !text-[22px] text-tier-s">check_circle</span>
              </div>
              <p className="font-mono-md text-[11px] text-text-tertiary mb-space-24 inline-flex items-center gap-space-4">
                <span className="material-symbols-rounded !text-[14px]">info</span>
                Số sẽ là username · OTP gửi 0đ qua SMS
              </p>
      
              <label className="flex items-start gap-space-12 p-space-12 bg-clay-mint/40 rounded-2xl border border-tier-s/20 cursor-pointer mb-space-24">
                <input type="checkbox" checked className="w-5 h-5 mt-[2px] accent-tier-s" />
                <span className="font-body-md text-[12px] text-text-secondary leading-relaxed">
                  Đồng ý <a href="#" className="text-tier-s font-bold hover:underline">Điều khoản</a> · <a href="#" className="text-tier-s font-bold hover:underline">Chính sách bảo mật NĐ 13/2023</a> · Cho phép RE-LOOP gửi push/SMS/Zalo
                </span>
              </label>
      
              <a href="/signup/otp" className="w-full bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition mb-space-16">
                <span className="material-symbols-rounded fill !text-[20px]">sms</span>
                Gửi OTP · Tiếp tục bước 2
              </a>
      
              <div className="flex items-center gap-space-12 my-space-16">
                <div className="flex-1 h-px bg-border-subtle"></div>
                <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">Hoặc đăng ký nhanh</span>
                <div className="flex-1 h-px bg-border-subtle"></div>
              </div>
              <button className="w-full bg-bg-surface text-text-primary border-2 border-border-subtle py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center justify-center gap-space-8 hover:shadow-clay hover:border-info transition">
                <div className="w-6 h-6 rounded-md bg-info flex items-center justify-center">
                  <span className="font-display font-extrabold text-[12px] text-white">Z</span>
                </div>
                Đăng ký nhanh với Zalo OAuth
              </button>
            </div>
      
            <AuthSidebar flow="signup" />
          </div>
        </AuthShell>
    </>
  );
}
