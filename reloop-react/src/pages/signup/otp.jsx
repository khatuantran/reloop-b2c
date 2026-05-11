import { cx } from '@/lib/cx';
import AuthShell from '../../components/auth/AuthShell';
import AuthSidebar from '../../components/auth/AuthSidebar';

export default function Otp() {
  const steps = [
    { n: 1, label: 'Số điện thoại', icon: 'smartphone', href: '/signup.html' },
    { n: 2, label: 'Nhập OTP', icon: 'sms', href: '/signup/otp.html' },
    { n: 3, label: 'Thông tin', icon: 'person', href: '/signup/info.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/signup/address.html' },
    { n: 5, label: 'Hoàn tất', icon: 'celebration', href: '/signup/done.html' },
  ];
  return (
    <>
      <AuthShell flow="signup" steps={steps} activeStep={2}>
          <div className="grid grid-cols-[1fr_400px] gap-space-32">
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-48">
              <a href="/signup" className="inline-flex items-center gap-space-4 font-mono-md text-[11px] text-text-tertiary hover:text-tier-s font-semibold mb-space-16">
                <span className="material-symbols-rounded !text-[14px]">arrow_back</span>
                Quay lại bước 1
              </a>
              <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold mb-space-8 block">BƯỚC 2/5 · XÁC THỰC OTP</span>
              <h1 className="font-display-l text-[40px] font-extrabold leading-tight tracking-tight text-text-primary mb-space-8">Nhập 6 số gửi qua SMS</h1>
              <p className="font-body-md text-[14px] text-text-secondary mb-space-32">
                Mã đã gửi đến <strong className="text-text-primary tabular-nums">+84 901 234 567</strong>
                · <a href="/signup" className="text-tier-s font-bold hover:underline">Đổi số</a>
              </p>
      
              {/* OTP cells */}
              <div className="grid grid-cols-6 gap-space-12 mb-space-16 max-w-[440px]">
                {[2, 6, 0, 4, '', ''].map((d, i) => (
                  <div className={cx(['aspect-square rounded-2xl shadow-clay-sm flex items-center justify-center font-display font-extrabold text-[36px] tabular-nums transition', d !== '' ? 'bg-clay-mint border-2 border-tier-s text-tier-s' : i === 4 ? 'bg-bg-surface border-2 border-tier-s shadow-inset-soft text-text-primary animate-pulse' : 'bg-bg-surface border-2 border-border-subtle text-text-tertiary'])}>
                    {d !== '' ? d : i === 4 ? '|' : ''}
                  </div>
                ))}
              </div>
      
              <div className="flex items-center justify-between mb-space-32 px-space-4 max-w-[440px]">
                <span className="font-mono-md text-[12px] text-text-tertiary inline-flex items-center gap-space-4">
                  <span className="material-symbols-rounded !text-[16px]">timer</span>
                  Còn <strong className="text-amber-deep tabular-nums">04:18</strong> trước khi mã hết hạn
                </span>
                <button className="font-mono-md text-[12px] text-tier-s font-bold hover:underline">Gửi lại OTP</button>
              </div>
      
              <a href="/signup/info" className="w-full bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition mb-space-16">
                Xác nhận · Tiếp tục bước 3
                <span className="material-symbols-rounded fill !text-[20px]">arrow_forward</span>
              </a>
      
              <div className="bg-clay-mint/40 rounded-2xl border border-tier-s/20 p-space-16 flex items-start gap-space-12">
                <span className="material-symbols-rounded fill !text-[20px] text-tier-s shrink-0">tips_and_updates</span>
                <p className="font-body-md text-[12px] text-text-secondary leading-relaxed">
                  <strong className="text-text-primary">Không nhận được SMS?</strong> Kiểm tra sóng → Bấm "Gửi lại" → Hoặc đổi sang Zalo OAuth ở bước 1
                </p>
              </div>
            </div>
      
            <AuthSidebar flow="signup" />
          </div>
        </AuthShell>
    </>
  );
}
