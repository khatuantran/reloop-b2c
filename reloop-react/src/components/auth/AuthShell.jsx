import { cx } from '@/lib/cx';

export default function AuthShell({ flow, steps, activeStep, children }) {
  const otherFlow = flow === 'login' ? '/signup.html' : '/login.html';
  const otherFlowLabel = flow === 'login' ? 'Đăng ký' : 'Đăng nhập';
  const otherFlowQ = flow === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?';
  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-bg-base"></div>
        <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-clay-mint opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-clay-butter opacity-50 blur-3xl"></div>
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-clay-sky opacity-40 blur-3xl"></div>
      
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Top bar */}
          <header className="px-[80px] py-space-24 flex items-center justify-between max-w-[1280px] w-full mx-auto">
            <a href="/" className="inline-flex items-center gap-space-12">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime to-lime-deep shadow-clay-lime flex items-center justify-center">
                <span className="material-symbols-rounded fill text-text-on-lime !text-[22px]">recycling</span>
              </div>
              <div>
                <span className="font-display text-[18px] font-extrabold tracking-tight text-text-primary leading-none block">RE-LOOP</span>
                <span className="font-mono-md text-[10px] text-text-tertiary leading-none mt-[2px] block">Q.7 · Bình Thạnh · Q.4</span>
              </div>
            </a>
            <a href={otherFlow} className="font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold inline-flex items-center gap-space-8">
              {otherFlowQ}
              <span className="bg-clay-mint border border-tier-s/30 text-tier-s px-space-12 py-space-4 rounded-full font-bold">{otherFlowLabel}</span>
            </a>
          </header>
      
          {/* Stepper bar (full width) */}
          <div className="px-[80px] mb-space-24 max-w-[1280px] w-full mx-auto">
            <div className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-border-subtle p-space-16">
              <div className="flex items-center gap-space-4">
                {steps.map((s, i) => {
                  const done = s.n < activeStep;
                  const active = s.n === activeStep;
                  return (
                    <a href={done ? s.href : '#'} className={cx(['flex items-center gap-space-8 flex-1', !done && !active && 'pointer-events-none'])}>
                      <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 border-2', done ? 'bg-tier-s text-white border-tier-s' : active ? 'bg-clay-mint border-tier-s text-tier-s animate-pulse' : 'bg-bg-surface border-border-subtle text-text-tertiary'])}>
                        <span className="material-symbols-rounded fill !text-[18px]">{done ? 'check' : s.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={cx(['font-mono-md text-[9px] uppercase tracking-wider font-bold block', done || active ? 'text-tier-s' : 'text-text-tertiary'])}>BƯỚC {s.n}/{steps.length}</span>
                        <span className={cx(['font-display font-bold text-[12px] leading-tight block truncate', done || active ? 'text-text-primary' : 'text-text-tertiary'])}>{s.label}</span>
                      </div>
                      {i < steps.length - 1 && <div className={cx(['flex-1 h-[2px] rounded-full max-w-[60px]', done ? 'bg-tier-s' : 'bg-border-subtle'])}></div>}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
      
          {/* Main content slot */}
          <div className="flex-1 px-[80px] py-space-16 max-w-[1280px] w-full mx-auto">
            {children}
          </div>
      
          {/* Footer */}
          <footer className="px-[80px] py-space-24 max-w-[1280px] w-full mx-auto flex items-center justify-between text-[12px] text-text-tertiary">
            <span className="font-mono-md">© 2026 RE-LOOP Việt Nam · Pilot 3 quận TPHCM</span>
            <div className="flex items-center gap-space-16">
              <span className="inline-flex items-center gap-space-4">
                <span className="material-symbols-rounded fill !text-[14px] text-tier-s">verified</span>
                ISO 14001
              </span>
              <span>·</span>
              <span className="inline-flex items-center gap-space-4">
                <span className="material-symbols-rounded fill !text-[14px] text-tier-s">gavel</span>
                NĐ 13/2023
              </span>
              <span>·</span>
              <a href="/help" className="hover:text-tier-s">Trợ giúp</a>
              <span>·</span>
              <a href="#" className="hover:text-tier-s">Bảo mật</a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
