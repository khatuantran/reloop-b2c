// Port tay từ src/components/nav/TopNav.astro (codemod bỏ qua file này — xem KEEP_EXISTING).
import { Link, useLocation } from 'react-router-dom';
import { USER, WALLET } from '../../lib/mock';
import { formatVND } from '../../lib/format';

const links = [
  { id: 'home', label: 'Trang chủ', to: '/' },
  { id: 'orders', label: 'Đơn của tôi', to: '/orders' },
  { id: 'wallet', label: 'Ví', to: '/wallet' },
  { id: 'profile', label: 'Hồ sơ', to: '/profile' },
];

function activeFromPath(pathname) {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/orders')) return 'orders';
  if (pathname.startsWith('/wallet')) return 'wallet';
  if (pathname.startsWith('/profile')) return 'profile';
  return 'home';
}

export default function TopNav() {
  const active = activeFromPath(useLocation().pathname);
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 backdrop-blur-lg border-b border-border-subtle"
      style={{ backgroundColor: 'rgba(229, 237, 221, 0.85)' }}
    >
      <div className="max-w-[1280px] mx-auto h-full flex justify-between items-center px-[80px]">
        <Link to="/" className="flex items-center gap-space-12">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lime to-lime-deep shadow-clay-lime flex items-center justify-center">
            <span className="material-symbols-rounded fill text-text-on-lime !text-[22px]">recycling</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[20px] font-extrabold tracking-tight text-text-primary leading-none">RE-LOOP</span>
            <span className="font-mono-md text-[10px] text-text-tertiary leading-none mt-1">Q.7 · TPHCM</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-space-8">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className={[
                'font-body-md text-[14px] font-medium transition-all duration-200 px-space-16 py-space-8 rounded-full',
                active === link.id
                  ? 'bg-clay-mint text-tier-s shadow-clay-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/60',
              ].join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-space-8">
          <Link to="/rewards" title="Green Points" className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle hover:border-lime-deep shadow-clay-sm hover:shadow-clay flex items-center justify-center transition-all">
            <span className="material-symbols-rounded fill !text-[20px] text-tier-s">redeem</span>
          </Link>
          <Link to="/notifications" title="Thông báo" className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle hover:border-lime-deep shadow-clay-sm hover:shadow-clay flex items-center justify-center transition-all relative">
            <span className="material-symbols-rounded fill !text-[20px] text-text-secondary">notifications</span>
            <span className="absolute top-[6px] right-[6px] w-2 h-2 rounded-full bg-tier-h"></span>
          </Link>
          <Link to="/help" title="Trợ giúp" className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle hover:border-lime-deep shadow-clay-sm hover:shadow-clay flex items-center justify-center transition-all">
            <span className="material-symbols-rounded fill !text-[20px] text-text-secondary">help</span>
          </Link>
          <Link to="/wallet" className="px-space-16 py-space-8 rounded-full bg-bg-elevated border border-border-subtle hover:border-lime-deep shadow-clay-sm hover:shadow-clay flex items-center gap-space-8 transition-all">
            <span className="material-symbols-rounded fill !text-[16px] text-tier-s">account_balance_wallet</span>
            <span className="font-mono-md text-[13px] text-text-primary tabular-nums font-semibold">{formatVND(WALLET.zaloPayBalance)}</span>
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-space-4 pl-space-4 pr-space-8 py-[2px] rounded-full bg-bg-elevated border border-border-subtle hover:border-tier-s/50 shadow-clay-sm hover:shadow-clay transition">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-clay-mint to-lime-soft border-2 border-tier-s/40 flex items-center justify-center">
                <span className="font-display text-[15px] font-extrabold text-tier-s">{USER.name[0]}</span>
              </div>
              <span className="material-symbols-rounded !text-[16px] text-text-tertiary group-hover:rotate-180 transition">expand_more</span>
            </button>
            <div className="absolute right-0 top-[calc(100%+8px)] w-[280px] bg-bg-elevated rounded-2xl shadow-clay-lg border border-border-subtle p-space-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-clay-mint rounded-xl p-space-12 mb-space-8 flex items-center gap-space-12 border border-tier-s/30">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-clay-mint to-lime-soft border-2 border-tier-s flex items-center justify-center">
                  <span className="font-display text-[16px] font-extrabold text-tier-s">{USER.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-[13px] text-text-primary block truncate">{USER.name}</span>
                  <span className="font-mono-md text-[10px] text-tier-s">● Đang đăng nhập</span>
                </div>
              </div>
              <Link to="/profile" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-bg-surface transition">
                <span className="material-symbols-rounded !text-[18px] text-text-secondary">person</span>
                <span className="font-body-md text-[13px] text-text-primary font-semibold">Hồ sơ</span>
              </Link>
              <Link to="/profile/edit" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-bg-surface transition">
                <span className="material-symbols-rounded !text-[18px] text-text-secondary">settings</span>
                <span className="font-body-md text-[13px] text-text-primary font-semibold">Cài đặt</span>
              </Link>
              <Link to="/easy" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-bg-surface transition">
                <span className="material-symbols-rounded !text-[18px] text-amber-deep">accessibility_new</span>
                <span className="font-body-md text-[13px] text-text-primary font-semibold">Chế độ Đơn giản</span>
              </Link>
              <div className="h-px bg-border-subtle my-space-8"></div>
              <Link to="/login" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-bg-surface transition">
                <span className="material-symbols-rounded !text-[18px] text-info">switch_account</span>
                <span className="font-body-md text-[13px] text-text-primary font-semibold">Đổi tài khoản</span>
              </Link>
              <Link to="/signup" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-bg-surface transition">
                <span className="material-symbols-rounded !text-[18px] text-tier-s">person_add</span>
                <span className="font-body-md text-[13px] text-text-primary font-semibold">Đăng ký mới</span>
              </Link>
              <Link to="/login" className="flex items-center gap-space-8 px-space-12 py-space-8 rounded-xl hover:bg-clay-blush transition">
                <span className="material-symbols-rounded !text-[18px] text-tier-h">logout</span>
                <span className="font-body-md text-[13px] text-tier-h font-semibold">Đăng xuất</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
