import RecycleScene from '../illustrations/RecycleScene';
import { USER, WALLET } from '../../lib/mock';
import { formatVND, formatDate } from '../../lib/format';

export default function HeroSection() {
  const today = formatDate(new Date('2026-05-10'));
  return (
    <>
      <section className="grad-hero rounded-[40px] px-space-64 py-space-96 mb-space-48 relative overflow-hidden border border-border-subtle">
        <div className="grid grid-cols-12 gap-space-48 items-center">
          <div className="col-span-7">
            <div className="font-mono-md text-[12px] uppercase tracking-[0.2em] text-tier-s mb-space-24">{today} · TPHCM</div>
            <h1 className="font-display-l text-display-l text-text-primary mb-space-24 leading-none">
              Chào <span className="text-lime-deep">{USER.name}</span>,<br />
              bán rác hôm nay?
            </h1>
            <p className="font-body-lg text-body-lg text-text-secondary mb-space-32 max-w-[520px]">
              Chụp ảnh rác → AI nhận diện 4 Tier → Collector đến tận nhà. ZaloPay 60 giây cho Tier S, BOM minh bạch cho Tier C.
            </p>
            <div className="flex flex-wrap gap-space-12 mb-space-32">
              <a href="/orders/new" className="bg-lime text-text-on-lime px-space-32 py-[14px] rounded-2xl font-semibold shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[20px]">add_circle</span>
                Đặt lịch thu gom
              </a>
              <a href="/orders" className="bg-bg-elevated border border-border-default text-text-primary px-space-32 py-[14px] rounded-2xl font-semibold shadow-clay-sm hover:shadow-clay transition inline-flex items-center gap-space-8">
                Xem đơn của tôi
                <span className="material-symbols-rounded !text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-space-12">
              <span className="bg-bg-elevated border border-border-subtle rounded-full px-space-16 py-space-8 text-[13px] font-mono-md shadow-clay-sm">
                <span className="text-tier-s font-semibold">{formatVND(WALLET.zaloPayBalance)}</span> trong ZaloPay
              </span>
              <span className="bg-clay-butter border border-amber-deep/30 rounded-full px-space-16 py-space-8 text-[13px] font-mono-md text-amber-deep font-semibold shadow-clay-sm">
                Hold {formatVND(WALLET.holdAmount)} · 1 đơn Tier C
              </span>
              <span className="bg-bg-elevated border border-border-subtle rounded-full px-space-16 py-space-8 text-[13px] font-mono-md shadow-clay-sm">
                Trust Score <span className="text-amber-deep font-semibold">{USER.trustScore}</span>/100
              </span>
            </div>
          </div>
          <div className="col-span-5 flex justify-center">
            <div className="relative w-full max-w-[460px]">
              <RecycleScene className="w-full drop-shadow-[0_30px_30px_rgba(15,31,24,0.12)]" />
              {/* Floating chip top-right */}
              <div className="absolute top-space-16 right-space-16 bg-bg-elevated/95 backdrop-blur-sm rounded-2xl px-space-12 py-space-8 shadow-clay flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[18px] text-tier-s">eco</span>
                <span className="font-mono-md text-[11px] text-text-primary font-semibold">+5.2 kg CO₂</span>
              </div>
              {/* Floating chip bottom-left */}
              <div className="absolute bottom-space-16 left-space-16 bg-lime rounded-2xl px-space-16 py-space-8 shadow-clay-lime flex items-center gap-space-8">
                <span className="material-symbols-rounded fill !text-[18px] text-text-on-lime">verified</span>
                <span className="font-mono-md text-[11px] text-text-on-lime font-bold">Hub Tier 3 · ISO 14001</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
