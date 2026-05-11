import { useEffect, useState } from 'react';


export default function TrackingMap({ order, collector }) {
  const [progress, setProgress] = useState(0);
  const [eta, setEta] = useState(12 * 60 + 43);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const tick = setInterval(() => {
      setEta((e) => Math.max(0, e - 1));
      setProgress((p) => Math.min(1, p + 1 / (12 * 60 + 43)));
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

  const collectorPos = {
    left: `${10 + progress * 60}%`,
    top: `${77 - progress * 45}%`,
  };

  const arrived = () => {
    window.location.href = `/orders/${order.id}/transaction.html`;
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-bg-elevated border-2 border-tier-s rounded-2xl px-space-24 py-space-16 flex items-center gap-space-12 shadow-clay-lg animate-pulse">
          <span className="material-symbols-rounded fill !text-[24px] text-tier-s">notifications_active</span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-[14px] text-text-primary">{collector.name} sắp đến</span>
            <span className="font-mono-md text-[12px] text-text-secondary">~5 phút nữa</span>
          </div>
        </div>
      )}

      <div className="bg-bg-elevated rounded-[28px] border border-border-subtle shadow-clay overflow-hidden" style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
        <div className="grid grid-cols-[1fr_360px] items-stretch min-h-[560px]">
          {/* Real Google Maps screenshot bg + RE-LOOP overlay */}
          <div className="relative overflow-hidden">
            <img src="/images/map-bg.png" alt="Google Maps" className="absolute inset-0 w-full h-full object-cover object-center" />

            {/* Smooth route polyline */}
            <svg viewBox="0 0 800 520" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d="M80 400 C 140 392, 200 360, 250 335 S 360 285, 400 260"
                stroke="white"
                strokeWidth="11"
                fill="none"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M400 260 C 445 248, 490 215, 525 195 S 555 175, 560 166"
                stroke="white"
                strokeWidth="11"
                fill="none"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M80 400 C 140 392, 200 360, 250 335 S 360 285, 400 260"
                stroke="#1A73E8"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M400 260 C 445 248, 490 215, 525 195 S 555 175, 560 166"
                stroke="#1A73E8"
                strokeWidth="7"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="11 8"
                opacity="0.85"
              />
            </svg>

            {/* Hub origin pin */}
            <div className="absolute" style={{ left: '10%', top: '77%', transform: 'translate(-50%,-100%)' }}>
              <div className="flex flex-col items-center">
                <div className="px-space-12 py-space-4 bg-forest rounded-md text-white text-[10px] font-bold mb-space-4 whitespace-nowrap shadow-clay-sm">HUB Q.4</div>
                <div className="w-7 h-7 rounded-full bg-forest border-[3px] border-white flex items-center justify-center shadow-clay">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>
            </div>

            {/* Collector animated pin */}
            <div className="absolute transition-all duration-1000 ease-linear" style={{ ...collectorPos, transform: 'translate(-50%,-50%)' }}>
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-info opacity-25 animate-pulse"></div>
                <div className="relative w-9 h-9 rounded-full bg-info border-[3px] border-white flex items-center justify-center shadow-clay">
                  <span className="material-symbols-rounded fill text-white" style={{ fontSize: '18px' }}>two_wheeler</span>
                </div>
              </div>
            </div>

            {/* User home pin */}
            <div className="absolute" style={{ left: '70%', top: '32%', transform: 'translate(-50%,-100%)' }}>
              <div className="relative" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.25))' }}>
                <svg width="38" height="48" viewBox="0 0 38 48">
                  <path d="M19 0 C8.5 0 0 8.5 0 19 C0 33.25 19 48 19 48 C19 48 38 33.25 38 19 C38 8.5 29.5 0 19 0 Z" fill="#52E08D" stroke="#0F3D26" strokeWidth="2" />
                  <circle cx="19" cy="19" r="9" fill="#0F3D26" />
                </svg>
                <span className="absolute inset-0 flex items-start justify-center pt-[10px] material-symbols-rounded fill text-[#52E08D]" style={{ fontSize: '16px' }}>home</span>
              </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute bottom-4 right-4 flex flex-col bg-white rounded-2xl shadow-clay overflow-hidden">
              <button className="w-11 h-11 flex items-center justify-center text-text-primary hover:bg-bg-surface border-b border-border-subtle">
                <span className="material-symbols-rounded">add</span>
              </button>
              <button className="w-11 h-11 flex items-center justify-center text-text-primary hover:bg-bg-surface">
                <span className="material-symbols-rounded">remove</span>
              </button>
            </div>

            <div className="absolute bottom-2 left-3 text-[11px] text-[#5A5A5A] font-medium">
              Map data ©2026 Google · <a href="#" className="underline">Terms</a>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-bg-elevated p-space-32 flex flex-col">
            <div className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider mb-space-8">ETA · cập nhật mỗi 30s</div>
            <div className="font-display font-extrabold text-[64px] leading-none text-text-primary tabular-nums">{etaLabel.split(':')[0]}<span className="text-tier-s">:</span>{etaLabel.split(':')[1]}</div>
            <div className="text-[13px] text-text-tertiary mt-space-4 mb-space-24">{collector.name} đang trên QL56 · 28 km/h</div>

            <div className="bg-bg-surface rounded-2xl p-space-16 shadow-inset-soft mb-space-16">
              <div className="flex items-center gap-space-16">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-xl shadow-clay-sm">
                  {collector.name.split(' ').slice(-1)[0][0]}
                </div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-[16px] text-text-primary">{collector.name}</div>
                  <div className="font-mono-md text-[11px] text-text-tertiary">Tier {collector.tier} · {collector.vehicle}</div>
                  <div className="flex items-center gap-space-4 mt-space-4">
                    <span className="text-tier-b text-[12px]">★★★★★</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary">{collector.rating} · {collector.completedOrders} đơn</span>
                  </div>
                </div>
                <a href={`tel:${collector.phone.replace(/\s/g, '')}`} className="w-11 h-11 rounded-2xl bg-tier-s text-white flex items-center justify-center shadow-clay-sm hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill">call</span>
                </a>
              </div>
            </div>

            <div className="bg-clay-butter border border-amber-deep/30 rounded-2xl p-space-16 mb-space-16">
              <div className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider mb-space-4 font-semibold">CỤM 3 ĐƠN</div>
              <div className="text-[13px] text-text-primary">{collector.name} đang ở đơn <strong>2/3</strong> — bạn là đơn cuối cùng.</div>
            </div>

            <div className="space-y-space-12 flex-1">
              {[
                { label: 'Đã đặt đơn', done: true },
                { label: `${collector.name} nhận`, done: true },
                { label: 'Đang trên đường', done: false, active: progress < 1 },
                { label: 'Đến nhà', done: progress >= 1, active: progress >= 1 },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-space-12">
                  <div className={['w-7 h-7 rounded-full flex items-center justify-center text-[14px]', s.done && !s.active ? 'bg-tier-s text-white' : s.active ? 'bg-info text-white animate-pulse' : 'bg-bg-surface border-2 border-border-default text-text-tertiary'].join(' ')}>
                    {s.done && !s.active ? '✓' : s.active ? '🛵' : i + 1}
                  </div>
                  <span className={s.done || s.active ? 'font-mono-md text-[13px] text-text-primary font-semibold' : 'font-mono-md text-[13px] text-text-tertiary'}>{s.label}</span>
                </div>
              ))}
            </div>

            <button onClick={arrived} className="bg-lime text-text-on-lime py-[14px] rounded-2xl font-semibold shadow-clay-lime mt-space-24 hover:-translate-y-[2px] transition">
              {collector.name} đã đến →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
