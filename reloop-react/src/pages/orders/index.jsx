import { cx } from '@/lib/cx';
import OrderCard from '../../components/order/OrderCard';
import PackageScene from '../../components/illustrations/PackageScene';
import { ORDERS } from '../../lib/mock';
import { formatVND } from '../../lib/format';

export default function Index() {
  const tierSCount = ORDERS.filter((o) => o.tier === 'S').length;
  const tierBCount = ORDERS.filter((o) => o.tier === 'B').length;
  const tierCCount = ORDERS.filter((o) => o.tier === 'C').length;
  const tierHCount = ORDERS.filter((o) => o.tier === 'H').length;
  const pendingCount = ORDERS.filter((o) => o.status === 'PENDING_VERIFY').length;
  const totalEarned = ORDERS.filter((o) => o.status === 'COMPLETED').reduce((s, o) => s + (o.amount ?? 0), 0);
  const totalKg = ORDERS.reduce((s, o) => s + (o.weight ?? 0), 0);
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            {/* Header (visual hero) */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[12px] uppercase tracking-[0.2em] text-tier-s mb-space-12 block font-semibold">LỊCH SỬ ĐƠN</span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-none tracking-tight text-text-primary mb-space-12">Đơn của tôi</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-24">
                    <strong className="text-text-primary">{ORDERS.length}</strong> đơn · {tierSCount} Tier S · {tierBCount} Tier B · {tierCCount} Tier C · {tierHCount} Tier H · {pendingCount} chờ verify
                  </p>
                  <div className="flex flex-wrap gap-space-12 mb-space-24">
                    <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[28px] text-tier-s">payments</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold">Đã nhận</span>
                        <span className="font-mono-md text-[16px] text-text-primary font-bold tabular-nums">{formatVND(totalEarned)}</span>
                      </div>
                    </div>
                    <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[28px] text-amber-deep">scale</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold">Tổng cân</span>
                        <span className="font-mono-md text-[16px] text-text-primary font-bold tabular-nums">{totalKg.toFixed(1)} kg</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/orders/new"
                    className="bg-lime text-text-on-lime px-space-32 py-[14px] rounded-2xl font-semibold text-[15px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8"
                  >
                    <span className="material-symbols-rounded fill !text-[20px]">add_circle</span>
                    Đặt đơn mới
                  </a>
                </div>
                <div className="relative h-[280px]">
                  <PackageScene className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Filter chips */}
            <div className="flex flex-wrap gap-space-12 mb-space-24" id="filter-bar">
              {[
                { id: 'all', label: 'Tất cả', icon: 'apps', count: ORDERS.length, activeBg: 'bg-clay-mint', activeBorder: 'border-tier-s', activeText: 'text-tier-s' },
                { id: 'S', label: 'Tier S', icon: 'water_bottle', count: tierSCount, activeBg: 'bg-clay-mint', activeBorder: 'border-tier-s', activeText: 'text-tier-s' },
                { id: 'B', label: 'Tier B', icon: 'kitchen', count: tierBCount, activeBg: 'bg-clay-butter', activeBorder: 'border-amber-deep', activeText: 'text-amber-deep' },
                { id: 'C', label: 'Tier C', icon: 'memory', count: tierCCount, activeBg: 'bg-clay-peach', activeBorder: 'border-tier-c', activeText: 'text-tier-c' },
                { id: 'H', label: 'Tier H', icon: 'battery_alert', count: tierHCount, activeBg: 'bg-clay-blush', activeBorder: 'border-tier-h', activeText: 'text-tier-h' },
                { id: 'pending', label: 'Chờ verify', icon: 'hourglass_top', count: pendingCount, activeBg: 'bg-clay-butter', activeBorder: 'border-amber-deep', activeText: 'text-amber-deep' },
              ].map((f, i) => (
                <button
                  data-filter={f.id}
                  data-active-bg={f.activeBg}
                  data-active-border={f.activeBorder}
                  data-active-text={f.activeText}
                  className={cx([
                    'filter-chip px-space-16 py-space-8 rounded-full border-2 font-mono-md text-[13px] font-semibold flex items-center gap-space-8 transition-all shadow-clay-sm',
                    i === 0 ? `${f.activeBg} ${f.activeBorder} ${f.activeText}` : 'bg-bg-elevated border-border-subtle text-text-secondary hover:border-border-default',
                  ])}
                >
                  <span className="material-symbols-rounded fill !text-[16px]">{f.icon}</span>
                  {f.label}
                  <span className="px-space-8 py-[1px] rounded-full bg-bg-elevated border border-border-subtle font-mono-md text-[10px] tabular-nums text-text-primary">{f.count}</span>
                </button>
              ))}
            </div>
      
            {/* Order list */}
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden divide-y divide-border-subtle" id="order-list">
              {ORDERS.map((o) => (
                <div data-tier={o.tier} data-status={o.status}>
                  <OrderCard order={o} variant="row" />
                </div>
              ))}
            </div>
          </div>
        </main>
    </>
  );
}
