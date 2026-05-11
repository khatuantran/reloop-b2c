import { cx } from '@/lib/cx';
import TierSScene from '../illustrations/TierSScene';
import TierBScene from '../illustrations/TierBScene';
import TierCScene from '../illustrations/TierCScene';
import TierHScene from '../illustrations/TierHScene';

export default function TierExplainerGrid() {
  const tiers = [
    {
      code: 'S',
      name: 'Standard',
      color: 'bg-tier-s',
      bg: 'bg-clay-mint',
      icon: 'water_bottle',
      pricing: 'Giá CHẮC CHẮN',
      sample: 'PET, carton, lon nhôm, sắt vụn',
      example: '3kg PET = 38.400đ',
    },
    {
      code: 'B',
      name: 'Bulky',
      color: 'bg-tier-b',
      bg: 'bg-clay-butter',
      icon: 'kitchen',
      pricing: 'Speed / Auction',
      sample: 'Tủ lạnh, máy giặt, sofa cũ',
      example: 'Đợi 30 phút · max 3 báo giá',
    },
    {
      code: 'C',
      name: 'Complex',
      color: 'bg-tier-c',
      bg: 'bg-clay-peach',
      icon: 'memory',
      pricing: 'Tạm ứng + chốt sau',
      sample: 'Mô tơ, mainboard, dây điện',
      example: 'Hub rã xác minh bạch BOM',
    },
    {
      code: 'H',
      name: 'Hazardous',
      color: 'bg-tier-h',
      bg: 'bg-clay-blush',
      icon: 'battery_alert',
      pricing: 'Free pickup',
      sample: 'Pin, ắc quy, bóng đèn',
      example: '+50 GP · không nhận tiền',
    },
  ];
  return (
    <>
      <section className="mb-space-96">
        <div className="flex items-baseline justify-between mb-space-32">
          <div>
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s">4 TIER WASTE</span>
            <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Bạn muốn bán loại nào?</h2>
          </div>
          <a href="#" className="font-body-md text-[14px] text-text-secondary hover:text-text-primary inline-flex items-center gap-space-8">
            Xem chi tiết phân loại
            <span className="material-symbols-rounded !text-[16px]">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-4 gap-space-24">
          {tiers.map(t => (
            <a href="/orders/new" className="bg-bg-elevated rounded-[28px] p-space-16 shadow-clay-sm hover:shadow-clay-lg hover:-translate-y-1 border border-border-subtle transition-all duration-300 group flex flex-col">
              {/* SVG scene header */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-space-16">
                {t.code === 'S' && <TierSScene className="w-full h-full" />}
                {t.code === 'B' && <TierBScene className="w-full h-full" />}
                {t.code === 'C' && <TierCScene className="w-full h-full" />}
                {t.code === 'H' && <TierHScene className="w-full h-full" />}
                {/* Tier code chip overlay */}
                <span className={cx(["absolute top-space-12 left-space-12 text-white font-display font-extrabold text-[13px] px-space-12 py-space-4 rounded-full shadow-clay-sm", t.color])}>
                  Tier {t.code}
                </span>
                {/* Icon overlay */}
                <div className={cx(["absolute bottom-space-12 right-space-12 w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm backdrop-blur-sm", t.bg])}>
                  <span className="material-symbols-rounded fill !text-[20px] text-text-primary/85">{t.icon}</span>
                </div>
              </div>
      
              {/* Body */}
              <div className="px-space-16 pb-space-16 flex flex-col flex-1">
                <span className="font-display font-bold text-text-primary text-[18px] mb-space-4">{t.name}</span>
                <div className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider mb-space-12">{t.pricing}</div>
                <p className="font-body-md text-[13px] text-text-secondary mb-space-16 min-h-[40px]">{t.sample}</p>
                <div className="font-mono-md text-[12px] text-text-primary font-semibold mb-space-16 pb-space-16 border-b border-border-subtle">{t.example}</div>
                <div className="font-body-md text-[13px] text-tier-s font-semibold inline-flex items-center gap-space-4 group-hover:gap-space-8 transition-all mt-auto">
                  Đặt loại này
                  <span className="material-symbols-rounded !text-[16px]">arrow_forward</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
