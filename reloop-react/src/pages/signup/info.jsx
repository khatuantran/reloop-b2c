import { cx } from '@/lib/cx';
import AuthShell from '../../components/auth/AuthShell';
import AuthSidebar from '../../components/auth/AuthSidebar';

export default function Info() {
  const steps = [
    { n: 1, label: 'Số điện thoại', icon: 'smartphone', href: '/signup.html' },
    { n: 2, label: 'Nhập OTP', icon: 'sms', href: '/signup/otp.html' },
    { n: 3, label: 'Thông tin', icon: 'person', href: '/signup/info.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/signup/address.html' },
    { n: 5, label: 'Hoàn tất', icon: 'celebration', href: '/signup/done.html' },
  ];
  return (
    <>
      <AuthShell flow="signup" steps={steps} activeStep={3}>
          <div className="grid grid-cols-[1fr_400px] gap-space-32">
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-48">
              <a href="/signup/otp" className="inline-flex items-center gap-space-4 font-mono-md text-[11px] text-text-tertiary hover:text-tier-s font-semibold mb-space-16">
                <span className="material-symbols-rounded !text-[14px]">arrow_back</span>
                Quay lại bước 2
              </a>
              <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold mb-space-8 block">BƯỚC 3/5 · THÔNG TIN CÁ NHÂN</span>
              <h1 className="font-display-l text-[40px] font-extrabold leading-tight tracking-tight text-text-primary mb-space-8">Cho RE-LOOP biết tên bạn</h1>
              <p className="font-body-md text-[14px] text-text-secondary mb-space-32">
                Số <strong className="text-text-primary tabular-nums">+84 901 234 567</strong> ✓ đã xác thực · Còn 2 bước nữa
              </p>
      
              <div className="flex flex-col gap-space-16 mb-space-24">
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">HỌ TÊN ĐẦY ĐỦ <span className="text-tier-h">*</span></span>
                  <div className="bg-bg-surface rounded-2xl border-2 border-tier-s shadow-inset-soft p-space-12 flex items-center gap-space-12">
                    <span className="material-symbols-rounded !text-[20px] text-tier-s">person</span>
                    <input type="text" value="Nguyễn Thị Linh" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[15px] text-text-primary" />
                    <span className="material-symbols-rounded fill !text-[20px] text-tier-s">check_circle</span>
                  </div>
                </div>
      
                <div className="grid grid-cols-2 gap-space-12">
                  <div>
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">NGÀY SINH</span>
                    <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                      <span className="material-symbols-rounded !text-[20px] text-text-tertiary">cake</span>
                      <input type="text" value="15/03/1994" className="flex-1 bg-transparent border-0 focus:outline-none font-mono-md text-[14px] text-text-primary tabular-nums" />
                    </div>
                  </div>
                  <div>
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">GIỚI TÍNH</span>
                    <div className="grid grid-cols-3 gap-space-4">
                      {['Nam', 'Nữ', 'Khác'].map((g, i) => (
                        <button className={cx(['py-space-8 rounded-xl border-2 font-mono-md text-[12px] font-bold shadow-clay-sm transition', i === 1 ? 'bg-clay-mint border-tier-s text-tier-s' : 'bg-bg-surface border-border-subtle text-text-secondary hover:border-tier-s'])}>{g}</button>
                      ))}
                    </div>
                  </div>
                </div>
      
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">EMAIL <span className="text-text-tertiary normal-case">(tuỳ chọn — nhận hoá đơn GTGT)</span></span>
                  <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">mail</span>
                    <input type="email" placeholder="linh@example.com" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" />
                  </div>
                </div>
      
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">MÃ GIỚI THIỆU <span className="text-text-tertiary normal-case">(tuỳ chọn)</span></span>
                  <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">redeem</span>
                    <input type="text" value="linh-q7" className="flex-1 bg-transparent border-0 focus:outline-none font-mono-md text-[14px] text-text-primary tabular-nums" />
                    <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold">+100 GP</span>
                  </div>
                </div>
              </div>
      
              <div className="flex gap-space-12">
                <a href="/signup/otp" className="bg-bg-surface text-text-primary border border-border-subtle px-space-24 py-space-16 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay">
                  <span className="material-symbols-rounded !text-[18px]">arrow_back</span>
                  Quay lại
                </a>
                <a href="/signup/address" className="flex-1 bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  Tiếp tục bước 4 · Địa chỉ
                  <span className="material-symbols-rounded fill !text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
      
            <AuthSidebar flow="signup" />
          </div>
        </AuthShell>
    </>
  );
}
