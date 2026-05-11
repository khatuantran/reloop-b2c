import { cx } from '@/lib/cx';
import EcoTree from '../illustrations/EcoTree';

export default function ImpactPreview() {
  const stats = [
    { label: 'CO₂ tránh phát thải', value: '47.2', unit: 'kg', icon: 'cloud_off', color: 'text-tier-s', bg: 'bg-clay-mint' },
    { label: 'Nhựa tái chế', value: '8.4', unit: 'kg', icon: 'water_bottle', color: 'text-info', bg: 'bg-clay-sky' },
    { label: 'Kim loại thu hồi', value: '6.95', unit: 'kg', icon: 'precision_manufacturing', color: 'text-amber-deep', bg: 'bg-clay-butter' },
    { label: 'Cây trồng tương đương', value: '2', unit: 'cây', icon: 'park', color: 'text-tier-s', bg: 'bg-clay-mint' },
  ];
  return (
    <>
      <section className="mb-space-96 bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-8 p-space-48">
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s">XANH NHÀ EM</span>
            <h2 className="font-h1 text-h1 text-text-primary mt-space-8 mb-space-12">Tác động bạn đã tạo ra</h2>
            <p className="font-body-lg text-body-lg text-text-secondary mb-space-32 max-w-[520px]">
              12 tháng qua bạn đã giúp giảm phát thải tương đương trồng <strong className="text-tier-s">2 cây cổ thụ</strong>. Mỗi đơn Tier S/C đều được tính vào dấu chân xanh.
            </p>
            <div className="grid grid-cols-2 gap-space-16 mb-space-32">
              {stats.map(s => (
                <div className="bg-bg-surface rounded-2xl p-space-16 flex items-center gap-space-16 shadow-inset-soft">
                  <div className={cx(["w-12 h-12 rounded-2xl flex items-center justify-center", s.bg])}>
                    <span className={cx(["material-symbols-rounded fill !text-[22px]", s.color])}>{s.icon}</span>
                  </div>
                  <div>
                    <div className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">{s.label}</div>
                    <div className="font-display font-extrabold text-text-primary text-[22px] tabular-nums leading-none mt-space-4">
                      {s.value}<span className="text-[14px] text-text-tertiary ml-space-4">{s.unit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-space-12">
              <button className="bg-text-primary text-white px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                <span className="material-symbols-rounded fill !text-[18px]">share</span>
                Chia sẻ social card
              </button>
              <button className="bg-clay-mint text-tier-s border border-tier-s/30 px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay transition">
                <span className="material-symbols-rounded fill !text-[18px]">park</span>
                Đổi 200 GP = 1 cây thật (Gaia)
              </button>
            </div>
          </div>
          <div className="col-span-4 relative overflow-hidden bg-gradient-to-br from-clay-mint via-lime-soft to-clay-butter">
            <EcoTree className="absolute inset-0 w-full h-full" />
            {/* Floating chip top-right */}
            <div className="absolute top-space-24 right-space-24 px-space-16 py-space-12 rounded-2xl bg-bg-elevated/95 backdrop-blur-sm shadow-clay">
              <div className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">THÁNG NÀY</div>
              <div className="font-display font-extrabold text-tier-s text-[22px] leading-none mt-space-4">+5.2 kg CO₂</div>
            </div>
            {/* Floating chip bottom */}
            <div className="absolute bottom-space-24 left-space-24 right-space-24 bg-forest text-white rounded-2xl px-space-16 py-space-12 shadow-clay">
              <div className="font-mono-md text-[10px] text-lime uppercase tracking-wider font-semibold">BOM thực · Q.7</div>
              <div className="font-display font-bold text-white text-[14px] leading-tight mt-space-4">Cu 1.85kg · Fe 5.10kg · Nhựa 1.05kg</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
