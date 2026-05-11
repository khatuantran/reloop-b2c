import TransactionHistory from '../components/wallet/TransactionHistory';
import BOMRevealCard from '../components/order/BOMRevealCard';
import WalletScene from '../components/illustrations/WalletScene';
import { WALLET, ORDERS, USER } from '../lib/mock';
import { formatVND, formatRelative } from '../lib/format';

export default function Wallet() {
  const pendingOrders = ORDERS.filter((o) => o.status === 'PENDING_VERIFY');
  const verifiedTierC = ORDERS.filter((o) => o.tier === 'C' && o.status === 'COMPLETED' && o.bomReal).slice(0, 2);
  
  // Monthly stat for sparkline-like context
  const earnedThisMonth = 213_700 + 38_400 + 6_250;
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px] flex flex-col gap-space-32">
            {/* Hero (compact, money-focused) */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">account_balance_wallet</span>
                    VÍ CỦA {USER.name.toUpperCase()}
                  </span>
                  <h1 className="font-display-l text-[48px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Ví & dòng tiền</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    Tháng này nhận <strong className="text-tier-s tabular-nums">{formatVND(earnedThisMonth)}</strong> · Hold ví ảo <strong className="text-amber-deep tabular-nums">{formatVND(WALLET.holdAmount)}</strong> chờ Hub verify
                  </p>
                  <a href="/wallet/policy" className="font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold inline-flex items-center gap-space-4">
                    <span className="material-symbols-rounded !text-[14px]">policy</span>
                    Quy tắc thanh toán & minh bạch chống gian lận →
                  </a>
                </div>
                <div className="relative h-[200px] flex items-center justify-center">
                  <WalletScene className="w-full h-full max-h-[200px] drop-shadow-[0_20px_30px_rgba(15,31,24,0.15)]" />
                </div>
              </div>
            </section>
      
            {/* Balance 2-card */}
            <section className="grid grid-cols-2 gap-space-24">
              <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 flex flex-col gap-space-16">
                <div className="flex items-center justify-between">
                  <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">ZaloPay · sẵn sàng rút</span>
                  <div className="w-11 h-11 rounded-2xl bg-clay-mint flex items-center justify-center shadow-inset-soft">
                    <span className="material-symbols-rounded fill !text-[22px] text-tier-s">account_balance_wallet</span>
                  </div>
                </div>
                <div className="font-display font-extrabold text-[56px] text-text-primary tabular-nums leading-none">{formatVND(WALLET.zaloPayBalance)}</div>
                <p className="font-body-md text-[13px] text-text-secondary">Số dư đã verify, không phí chuyển</p>
                <button className="self-start mt-space-8 px-space-24 py-space-12 rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">
                  <span className="material-symbols-rounded fill !text-[18px]">arrow_outward</span>
                  Rút về ZaloPay
                </button>
              </div>
              <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-[28px] shadow-clay p-space-32 flex flex-col gap-space-16">
                <div className="flex items-center justify-between">
                  <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">HOLD ví ảo</span>
                  <div className="w-11 h-11 rounded-2xl bg-bg-elevated/70 flex items-center justify-center shadow-inset-soft">
                    <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">hourglass_top</span>
                  </div>
                </div>
                <div className="font-display font-extrabold text-[56px] text-text-primary tabular-nums leading-none">{formatVND(WALLET.holdAmount)}</div>
                <p className="font-body-md text-[13px] text-amber-deep font-semibold">{pendingOrders.length} đơn Tier C · auto-release ≤ 72h + bonus 5%</p>
                <a href="#hold" className="self-start mt-space-8 px-space-24 py-space-12 rounded-2xl bg-bg-elevated border border-border-default text-text-primary font-semibold text-[14px] shadow-clay-sm hover:shadow-clay transition inline-flex items-center gap-space-8">
                  <span className="material-symbols-rounded fill !text-[18px]">visibility</span>
                  Xem đơn pending
                </a>
              </div>
            </section>
      
            {/* Quick actions strip (download/export) */}
            <section className="grid grid-cols-4 gap-space-12">
              <button className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12 hover:shadow-clay hover:-translate-y-[2px] transition">
                <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[20px] text-tier-s">receipt</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold block">BIÊN LAI PDF</span>
                  <span className="font-display font-bold text-[12px] text-text-primary block truncate">Đơn gần nhất</span>
                </div>
              </button>
              <button className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12 hover:shadow-clay hover:-translate-y-[2px] transition">
                <div className="w-10 h-10 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[20px] text-info">description</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-bold block">HOÁ ĐƠN GTGT</span>
                  <span className="font-display font-bold text-[12px] text-text-primary block truncate">04/2026</span>
                </div>
              </button>
              <button className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12 hover:shadow-clay hover:-translate-y-[2px] transition">
                <div className="w-10 h-10 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[20px] text-amber-deep">file_download</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-bold block">EXPORT CSV</span>
                  <span className="font-display font-bold text-[12px] text-text-primary block truncate">Tất cả giao dịch</span>
                </div>
              </button>
              <a href="/rewards" className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12 hover:shadow-clay hover:-translate-y-[2px] transition">
                <div className="w-10 h-10 rounded-2xl bg-clay-peach flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[20px] text-tier-c">redeem</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <span className="font-mono-md text-[10px] text-tier-c uppercase tracking-wider font-bold block">ĐỔI GP</span>
                  <span className="font-display font-bold text-[12px] text-text-primary block truncate">{USER.greenPoints.toLocaleString('vi-VN')} GP</span>
                </div>
              </a>
            </section>
      
            {/* Hold dashboard */}
            {pendingOrders.length > 0 && (
              <section id="hold">
                <div className="mb-space-16 flex items-end justify-between">
                  <div>
                    <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">PENDING VERIFY</span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Đang chờ Hub rã xác</h2>
                  </div>
                  <div className="bg-clay-butter rounded-2xl px-space-16 py-space-8 border border-amber-deep/30 shadow-clay-sm flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px] text-amber-deep">timer</span>
                    <span className="font-mono-md text-[12px] text-amber-deep font-bold">Auto-release 72h + bonus 5%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-12">
                  {pendingOrders.map((o) => (
                    <a
                      href={`/orders/${o.id}`}
                      className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-amber-deep/20 hover:shadow-clay hover:-translate-y-[2px] transition-all p-space-24 flex items-center gap-space-24 group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-clay-butter flex items-center justify-center shadow-inset-soft">
                        <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">hourglass_top</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-display font-bold text-[16px] text-text-primary block">{o.item}</span>
                        <span className="font-mono-md text-[12px] text-text-tertiary">{o.id} · {formatRelative(o.createdAt)} · Hết hạn HOLD trong ~8h</span>
                        <div className="mt-space-8 flex items-center gap-space-8">
                          <div className="flex-1 h-1.5 bg-bg-surface rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-tier-s via-amber-deep to-tier-h rounded-full" style={{ 'width': '89%' }}></div>
                          </div>
                          <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">64h / 72h</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold">Tạm ứng</span>
                        <span className="font-mono-md text-[22px] text-text-primary font-bold tabular-nums">{formatVND(o.advance ?? 0)}</span>
                        <span className="font-mono-md text-[10px] text-text-tertiary">~ {formatVND(o.expectedRange?.[0] ?? 0)} – {formatVND(o.expectedRange?.[1] ?? 0)}</span>
                      </div>
                      <span className="material-symbols-rounded !text-[20px] text-text-tertiary group-hover:text-amber-deep group-hover:translate-x-1 transition-all">chevron_right</span>
                    </a>
                  ))}
                </div>
              </section>
            )}
      
            {/* BOM history */}
            {verifiedTierC.length > 0 && (
              <section>
                <div className="mb-space-16 flex items-end justify-between">
                  <div>
                    <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">BOM ĐÃ VERIFY</span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Lịch sử Tier C settled</h2>
                  </div>
                  <a href="/orders" className="font-mono-md text-[12px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4">
                    Xem tất cả đơn
                    <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-space-24">
                  {verifiedTierC.map((o) => (
                    <BOMRevealCard order={o} />
                  ))}
                </div>
              </section>
            )}
      
            {/* Transaction history */}
            <TransactionHistory />
      
            {/* Footer link to policy page */}
            <a href="/wallet/policy" className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24 flex items-center gap-space-16 hover:shadow-clay hover:-translate-y-[2px] transition">
              <div className="w-12 h-12 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm shrink-0">
                <span className="material-symbols-rounded fill !text-[22px] text-info">policy</span>
              </div>
              <div className="flex-1">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold block">QUY TẮC & MINH BẠCH</span>
                <span className="font-display font-bold text-[14px] text-text-primary">Quy tắc thanh toán · Anti-fraud Tier C · Hub Spot Check</span>
                <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Tất cả thông tin minh bạch về cách RE-LOOP định giá, kiểm tra và bảo vệ bạn</p>
              </div>
              <span className="material-symbols-rounded !text-[20px] text-info">arrow_forward</span>
            </a>
          </div>
        </main>
    </>
  );
}
