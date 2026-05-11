import GreenPointsBadge from '../illustrations/GreenPointsBadge';
import { USER } from '../../lib/mock';

export default function TrustScoreSection() {
  const score = USER.trustScore;
  const zone = score < 30 ? 'new' : score < 70 ? 'medium' : 'high';
  const zoneText = zone === 'new' ? 'Mới · tạm ứng 30%' : zone === 'medium' ? 'Đang tích lũy · tạm ứng 50%' : 'Đáng tin · tạm ứng 70%';
  const nextMilestone = zone === 'new' ? 30 : zone === 'medium' ? 70 : 100;
  const remain = nextMilestone - score;
  return (
    <>
      <section className="mb-space-96 grid grid-cols-12 gap-space-32">
        <div className="col-span-7 bg-bg-elevated rounded-[28px] p-space-48 shadow-clay border border-border-subtle">
          <div className="flex items-baseline gap-space-12 mb-space-32">
            <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s">TRUST SCORE</span>
            <span className="px-space-12 py-[3px] rounded-full bg-clay-butter text-amber-deep border border-amber-deep/50 font-mono-md text-[11px] font-semibold">{zoneText}</span>
          </div>
          <div className="flex items-end gap-space-32 mb-space-32">
            <div className="font-display font-extrabold text-[96px] text-text-primary leading-none tabular-nums">{score}<span className="text-[32px] text-text-tertiary">/100</span></div>
            <div className="flex-1 mb-space-8">
              <div className="h-3 bg-bg-surface rounded-full overflow-hidden flex">
                <div className="h-full bg-tier-h" style={{ 'width': `${(30/100)*100}%` }}></div>
                <div className="h-full bg-tier-b" style={{ 'width': `${(40/100)*100}%` }}></div>
                <div className="h-full bg-tier-s" style={{ 'width': `${(30/100)*100}%` }}></div>
              </div>
              <div className="flex justify-between font-mono-md text-[11px] text-text-tertiary mt-space-4">
                <span>0 <span className="text-tier-h">Mới</span></span>
                <span>30 <span className="text-amber-deep">Tích lũy</span></span>
                <span>70 <span className="text-tier-s">Đáng tin</span></span>
                <span>100</span>
              </div>
            </div>
          </div>
          <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl p-space-24">
            <div className="flex items-start gap-space-16">
              <span className="material-symbols-rounded fill !text-[28px] text-tier-s">flag</span>
              <div className="flex-1">
                <div className="font-display font-bold text-text-primary text-[16px] mb-space-4">Còn {remain} điểm để đạt mốc {nextMilestone}</div>
                <div className="text-[13px] text-text-secondary">Hoàn thành thêm <strong>3 đơn Tier S</strong> hoặc <strong>1 đơn Tier C verify</strong> để lên zone tiếp theo.</div>
              </div>
              <a href="/profile" className="font-body-md text-[13px] text-tier-s font-semibold inline-flex items-center gap-space-4 whitespace-nowrap">
                Xem chi tiết
                <span className="material-symbols-rounded !text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      
        <div className="col-span-5 rounded-[28px] shadow-clay border border-tier-s/30 bg-gradient-to-br from-clay-mint via-lime-soft to-clay-mint min-h-[360px] overflow-hidden relative">
          <div className="grid grid-cols-[1fr_auto] h-full">
            {/* Left: text only, clean BG */}
            <div className="p-space-32 flex flex-col justify-between relative z-10">
              <div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-lime-deep font-bold">GREEN POINTS</span>
                <div className="font-display font-extrabold text-[72px] text-forest leading-none tabular-nums mt-space-12">{USER.greenPoints.toLocaleString('vi-VN')}</div>
                <p className="text-[13px] text-text-primary mt-space-12 max-w-[260px] leading-relaxed font-medium">
                  Đổi voucher Shopee · GrabFood · Trồng cây Gaia · Donation Quỹ trẻ em
                </p>
              </div>
              <div className="flex flex-col gap-space-8 mt-space-24 items-start">
                <span className="bg-bg-elevated px-space-12 py-space-4 rounded-full font-mono-md text-[11px] text-tier-s font-bold shadow-clay-sm border border-tier-s/30 whitespace-nowrap">+50 GP đặt hộ</span>
                <span className="bg-bg-elevated px-space-12 py-space-4 rounded-full font-mono-md text-[11px] text-tier-s font-bold shadow-clay-sm border border-tier-s/30 whitespace-nowrap">+200 GP referral</span>
                <span className="bg-bg-elevated px-space-12 py-space-4 rounded-full font-mono-md text-[11px] text-tier-s font-bold shadow-clay-sm border border-tier-s/30 whitespace-nowrap">+500 GP streak 4 tuần</span>
              </div>
            </div>
            {/* Right: SVG illustration only, contained */}
            <div className="w-[200px] relative">
              <GreenPointsBadge className="absolute right-[-30px] top-1/2 -translate-y-1/2 w-[280px] h-[280px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
