import HeroSection from '../components/home/HeroSection';
import TierExplainerGrid from '../components/home/TierExplainerGrid';
import TrustScoreSection from '../components/home/TrustScoreSection';
import ImpactPreview from '../components/home/ImpactPreview';
import OrderCard from '../components/order/OrderCard';
import { ORDERS } from '../lib/mock';

export default function Index() {
  const recentOrders = ORDERS.slice(0, 3);
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <HeroSection />
            <TierExplainerGrid />
            <TrustScoreSection />
            <ImpactPreview />
      
            {/* Recent orders */}
            <section>
              <div className="flex items-baseline justify-between mb-space-32">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s">LỊCH SỬ</span>
                  <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Đơn gần nhất</h2>
                </div>
                <a href="/orders" className="font-body-md text-[14px] text-tier-s font-semibold hover:underline inline-flex items-center gap-space-8">
                  Xem tất cả {ORDERS.length} đơn
                  <span className="material-symbols-rounded !text-[16px]">arrow_forward</span>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-space-24">
                {recentOrders.map((order) => <OrderCard order={order} />)}
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
