import { useEffect, useState } from 'react';
import type { Order, Collector } from '../../lib/mock';
import { formatVND } from '../../lib/format';

interface Props {
  order: Order;
  collector: Collector;
}

export default function TrackingMap({ order, collector }: Props) {
  const [progress, setProgress] = useState(0); // 0..1, Collector di chuyển từ 0 (Hub) → 1 (nhà Linh)
  const [eta, setEta] = useState(25 * 60); // 25 phút seconds
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      setEta((e) => Math.max(0, e - 1));
      setProgress((p) => Math.min(1, p + 1 / (25 * 60)));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  useEffect(() => {
    if (eta <= 5 * 60 && eta > 5 * 60 - 2 && !showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  }, [eta, showToast]);

  const minutes = Math.floor(eta / 60);
  const seconds = eta % 60;
  const etaLabel = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  // Pin position
  const pinX = 80 + progress * 480; // 80→560
  const pinY = 280 - Math.sin(progress * Math.PI) * 30 + progress * 60; // arc

  const arrived = () => {
    window.location.href = `/orders/${order.id}/transaction.html`;
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-bg-elevated border border-success rounded-2xl px-space-24 py-space-16 flex items-center gap-space-12 shadow-2xl animate-pulse">
          <span className="material-symbols-outlined fill !text-[24px] text-success">notifications_active</span>
          <div className="flex flex-col">
            <span className="font-h4 text-[14px] text-text-primary">Anh {collector.name.split(' ')[1]} sắp đến</span>
            <span className="font-mono-md text-[12px] text-text-secondary">~5 phút nữa</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-12 gap-space-32">
        {/* Map fake */}
        <div className="col-span-7 bg-bg-elevated border border-border-subtle rounded-3xl overflow-hidden relative">
          <div className="aspect-[4/3] relative">
            <svg viewBox="0 0 640 480" className="absolute inset-0 w-full h-full">
              <defs>
                <pattern id="trkgrid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1A2D24" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="640" height="480" fill="url(#trkgrid)" />
              {/* Streets */}
              <path d="M 0 200 Q 200 180 400 220 T 640 200" stroke="#2A4034" strokeWidth="6" fill="none" />
              <path d="M 0 340 L 640 340" stroke="#2A4034" strokeWidth="4" fill="none" />
              <path d="M 200 0 L 220 480" stroke="#2A4034" strokeWidth="4" fill="none" />
              <path d="M 480 0 L 460 480" stroke="#2A4034" strokeWidth="4" fill="none" />
              {/* Route from Hub to Home */}
              <path
                d={`M 80 200 Q 320 ${280 - 30} ${pinX} ${pinY} T 560 340`}
                stroke="#52E08D"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
                opacity="0.4"
              />
              {/* Hub origin */}
              <circle cx="80" cy="200" r="12" fill="#F4B860" opacity="0.3" />
              <circle cx="80" cy="200" r="6" fill="#F4B860" />
              {/* Home destination */}
              <circle cx="560" cy="340" r="14" fill="#52E08D" opacity="0.3" />
              <circle cx="560" cy="340" r="8" fill="#52E08D" />
              {/* Collector pin (animated) */}
              <g transform={`translate(${pinX} ${pinY})`}>
                <circle r="20" fill="#52E08D" opacity="0.2" className="animate-ping" />
                <circle r="14" fill="#0F1F18" stroke="#52E08D" strokeWidth="2" />
                <text x="0" y="5" fontSize="14" textAnchor="middle" fill="#52E08D">🛵</text>
              </g>
            </svg>
            <div className="absolute top-4 left-4 px-space-12 py-space-4 rounded-full bg-bg-base/90 backdrop-blur border border-warning/30">
              <span className="font-mono-md text-[11px] text-warning">Hub Tier 3 · Q.4</span>
            </div>
            <div className="absolute bottom-4 right-4 px-space-12 py-space-4 rounded-full bg-bg-base/90 backdrop-blur border border-success/30">
              <span className="font-mono-md text-[11px] text-success">📍 Nhà bạn · Q.7</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-span-5 flex flex-col gap-space-24">
          {/* ETA */}
          <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-32 text-center">
            <span className="font-mono-md text-[12px] text-text-tertiary uppercase block mb-space-8">ETA · còn lại</span>
            <div className="font-mono-md text-[64px] text-success font-bold tabular-nums leading-none">{etaLabel}</div>
            <span className="font-body-md text-[13px] text-text-secondary mt-space-8 block">phút : giây</span>
          </div>

          {/* Collector card */}
          <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-24 flex flex-col gap-space-16">
            <div className="flex items-center gap-space-16">
              <div className={`w-14 h-14 rounded-full ${collector.avatarColor} flex items-center justify-center`}>
                <span className="font-h3 font-extrabold text-[#0A1410]">{collector.name.split(' ').slice(-1)[0][0]}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-space-8">
                  <span className="font-h4 text-h4 text-text-primary">{collector.name}</span>
                  <span className="px-space-8 py-[2px] rounded bg-tier-s/10 border border-tier-s/30 font-mono-md text-[10px] text-tier-s">Tier {collector.tier}</span>
                </div>
                <span className="font-mono-md text-[12px] text-text-secondary block">⭐ {collector.rating} · {collector.completedOrders} đơn</span>
              </div>
            </div>
            <div className="h-px bg-border-subtle" />
            <div className="flex flex-col gap-space-4">
              <span className="font-mono-md text-[11px] text-text-tertiary uppercase">Phương tiện</span>
              <span className="font-body-md text-[14px] text-text-primary">{collector.vehicle}</span>
              <span className="font-mono-md text-[12px] text-text-secondary">{collector.plate}</span>
            </div>
            <a
              href={`tel:${collector.phone.replace(/\s/g, '')}`}
              className="w-full py-space-12 rounded-full border border-border-default text-text-primary font-body-md text-[14px] font-semibold hover:bg-bg-surface hover:border-success/50 transition-colors flex items-center justify-center gap-space-8"
            >
              <span className="material-symbols-outlined !text-[18px]">call</span>
              Gọi {collector.phone}
            </a>
          </div>

          {/* Status timeline */}
          <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-24">
            <span className="font-mono-md text-[12px] text-text-tertiary uppercase block mb-space-16">Trạng thái</span>
            <div className="flex flex-col gap-space-12">
              {[
                { label: 'Đã đặt', done: true },
                { label: `${collector.name} nhận đơn`, done: true },
                { label: 'Đang trên đường', done: progress < 1, active: progress < 1 },
                { label: 'Đến nhà', done: progress >= 1, active: progress >= 1 },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-space-12">
                  <div
                    className={[
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      s.done && !s.active
                        ? 'bg-success'
                        : s.active
                        ? 'bg-info animate-pulse'
                        : 'bg-bg-base border border-border-subtle',
                    ].join(' ')}
                  >
                    {s.done && !s.active && <span className="material-symbols-outlined fill !text-[14px] text-[#0A1410]">check</span>}
                  </div>
                  <span className={s.done || s.active ? 'font-body-md text-[13px] text-text-primary' : 'font-body-md text-[13px] text-text-tertiary'}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={arrived}
            className="w-full py-space-16 rounded-full bg-success text-[#0A1410] font-body-md text-[15px] font-semibold hover:bg-success/90 active:scale-[0.98] transition-all"
          >
            {collector.name} đã đến →
          </button>
        </div>
      </div>
    </>
  );
}
