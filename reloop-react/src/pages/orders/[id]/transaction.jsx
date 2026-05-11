import { useParams } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import AtHomeTransaction from '../../../components/order/AtHomeTransaction';
import TierBadge from '../../../components/ui/TierBadge';
import StatusChip from '../../../components/ui/StatusChip';
import TierSScene from '../../../components/illustrations/TierSScene';
import TierCScene from '../../../components/illustrations/TierCScene';
import { ORDERS, COLLECTORS, getOrderById, getCollectorById } from '../../../lib/mock';

export default function Transaction() {
  const { id } = useParams();
  const order = getOrderById(id);
  if (!order) return <NotFound what="Đơn hàng" backTo="/orders" backLabel="Về danh sách đơn" />;
  const collector = getCollectorById(order.collectorId ?? 'c-001') ?? COLLECTORS['c-001'];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href={`/orders/${order.id}/track`} className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Về tracking
            </a>
      
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.3fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <div className="flex items-center gap-space-12 flex-wrap mb-space-12">
                    <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px]">scale</span>
                      AT-HOME TRANSACTION
                    </span>
                    <TierBadge tier={order.tier} size="sm" />
                    <StatusChip status={order.status} />
                  </div>
                  <h1 className="font-display-l text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-8">Giao dịch tại nhà</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">{order.item} · {order.id}</p>
                  <div className="flex flex-wrap gap-space-12">
                    <div className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-tier-s">person_pin_circle</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">Collector</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">{collector.name}</span>
                      </div>
                    </div>
                    <div className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-info">verified_user</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">Cân chuẩn</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">QTĐLVN 252</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[260px]">
                  {order.tier === 'C' ? (
                    <TierCScene className="absolute inset-0 w-full h-full" />
                  ) : (
                    <TierSScene className="absolute inset-0 w-full h-full" />
                  )}
                </div>
              </div>
            </section>
      
            <AtHomeTransaction order={order} collector={collector} />
          </div>
        </main>
    </>
  );
}
