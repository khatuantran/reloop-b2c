import { cx } from '@/lib/cx';

export default function MaterialsBreakdown({ bomReal, totalWeight, massBalance = 0.94 }) {
  
  const total = bomReal.Cu + bomReal.Fe + bomReal.Al + bomReal.plastic;
  const massBalancePct = Math.round(massBalance * 100);
  
  const materials = [
    {
      key: 'Cu',
      name: 'Đồng (Cu)',
      weight: bomReal.Cu,
      pct: total > 0 ? (bomReal.Cu / total) * 100 : 0,
      icon: 'bolt',
      clay: 'bg-clay-butter',
      accent: 'text-amber-deep',
      bar: 'from-amber-deep to-[#A07033]',
      pricePerKg: 215_000,
    },
    {
      key: 'Fe',
      name: 'Sắt (Fe)',
      weight: bomReal.Fe,
      pct: total > 0 ? (bomReal.Fe / total) * 100 : 0,
      icon: 'hardware',
      clay: 'bg-clay-sky',
      accent: 'text-info',
      bar: 'from-info to-[#3F5C2A]',
      pricePerKg: 12_000,
    },
    {
      key: 'Al',
      name: 'Nhôm (Al)',
      weight: bomReal.Al,
      pct: total > 0 ? (bomReal.Al / total) * 100 : 0,
      icon: 'inventory_2',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      bar: 'from-tier-s to-lime-deep',
      pricePerKg: 35_000,
    },
    {
      key: 'plastic',
      name: 'Nhựa',
      weight: bomReal.plastic,
      pct: total > 0 ? (bomReal.plastic / total) * 100 : 0,
      icon: 'water_bottle',
      clay: 'bg-clay-peach',
      accent: 'text-tier-c',
      bar: 'from-tier-c to-[#A8634E]',
      pricePerKg: 5_500,
    },
  ];
  return (
    <>
      <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
        <div className="flex items-end justify-between mb-space-24">
          <div>
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
              <span className="material-symbols-rounded fill !text-[16px]">analytics</span>
              PHÂN TÍCH VẬT LIỆU THỰC
            </span>
            <h3 className="font-h2 text-h2 text-text-primary mt-space-8">BOM thực Hub rã xác</h3>
            <p className="font-body-md text-[12px] text-text-secondary mt-space-4">
              Tổng <strong className="text-text-primary tabular-nums">{total.toFixed(2)} kg</strong> vật liệu thu hồi · {totalWeight.toFixed(2)} kg cân ban đầu
            </p>
          </div>
          <div className="bg-clay-mint border-2 border-tier-s/40 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex flex-col items-center">
            <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold">MASS-BALANCE</span>
            <span className="font-display font-extrabold text-[28px] text-tier-s tabular-nums leading-none mt-space-4">{massBalancePct}%</span>
            <span className="font-mono-md text-[9px] text-text-tertiary mt-space-4">Yêu cầu ≥ 90% ✓</span>
          </div>
        </div>
      
        {/* 4 horizontal bars */}
        <div className="flex flex-col gap-space-16">
          {materials.map((m) => (
            <div>
              <div className="flex items-center gap-space-12 mb-space-8">
                <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', m.clay])}>
                  <span className={cx(['material-symbols-rounded fill !text-[20px]', m.accent])}>{m.icon}</span>
                </div>
                <span className="font-display font-bold text-[14px] text-text-primary flex-1">{m.name}</span>
                <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">{m.weight.toFixed(2)} kg</span>
                <span className={cx(['font-mono-md text-[12px] font-bold tabular-nums w-12 text-right', m.accent])}>{m.pct.toFixed(0)}%</span>
                <span className="font-mono-md text-[11px] text-text-tertiary tabular-nums w-24 text-right">{(m.weight * m.pricePerKg).toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="h-3 bg-bg-surface rounded-full overflow-hidden ml-[52px]">
                <div className={cx(['h-full rounded-full bg-gradient-to-r shadow-inset-soft', m.bar])} style={{ 'width': `${m.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      
        {/* Footer note */}
        <div className="mt-space-24 grid grid-cols-2 gap-space-12">
          <div className="bg-clay-mint/40 rounded-2xl border border-tier-s/20 p-space-12 flex items-start gap-space-8">
            <span className="material-symbols-rounded fill !text-[18px] text-tier-s shrink-0">verified</span>
            <p className="font-body-md text-[11px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Hub Q.7 verified</strong> · Video timelapse 8 phút + 12 ảnh evidence trong Chain of Custody
            </p>
          </div>
          <div className="bg-clay-sky/40 rounded-2xl border border-info/20 p-space-12 flex items-start gap-space-8">
            <span className="material-symbols-rounded fill !text-[18px] text-info shrink-0">policy</span>
            <p className="font-body-md text-[11px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">BOM Library v3.2</strong> · Đối chiếu giá thị trường LME · Cập nhật hàng ngày 6:00 sáng
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
