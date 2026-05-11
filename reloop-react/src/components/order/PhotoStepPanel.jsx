import { cx } from '@/lib/cx';
import TierSScene from '../illustrations/TierSScene';
import TierBScene from '../illustrations/TierBScene';
import TierCScene from '../illustrations/TierCScene';
import TierHScene from '../illustrations/TierHScene';
import ItemPhoto from '../illustrations/ItemPhoto';

export default function PhotoStepPanel({ tier,
  tierName,
  accent,
  clay,
  samples,
  selectedSampleId,
  detectedItem,
  detectedConfidence,
  detectedTier,
  thumbnailItems,
  nextHref,
  nextLabel,
  guidanceTips }) {
  const TierScene = tier === 'S' ? TierSScene : tier === 'B' ? TierBScene : tier === 'C' ? TierCScene : TierHScene;
  
  // Default thumbnails: tier scene + 2-3 different items (mix selected + others)
  const thumbs = thumbnailItems
    ? thumbnailItems.map((k, i) => ({ key: k, label: i === 0 ? 'Chính' : `Góc ${i + 1}`, rotate: (i % 3 - 1) * 4 }))
    : [
        { key: selectedSampleId, label: 'Chính', rotate: 0 },
        { key: 'scene', label: 'Tổng quát', rotate: -2 },
        { key: samples.find((s) => s.id !== selectedSampleId)?.id ?? selectedSampleId, label: 'Góc 3', rotate: 3 },
      ];
  return (
    <>
      <div className="grid grid-cols-[1.5fr_1fr] gap-space-32 mb-space-32">
        {/* LEFT: camera demo + samples */}
        <div className="flex flex-col gap-space-24">
          {/* Camera viewfinder demo */}
          <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
            <div className="flex items-end justify-between mb-space-16">
              <div>
                <span className={cx(['font-mono-md text-[12px] uppercase tracking-wider font-semibold flex items-center gap-space-8', `text-${accent}`])}>
                  <span className="material-symbols-rounded fill !text-[16px]">photo_camera</span>
                  BƯỚC 1 · CHỤP ẢNH
                </span>
                <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Chụp ảnh vật phẩm</h2>
                <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Ngắm vào vật phẩm, chạm nút tròn để chụp · AI sẽ phân tích trong &lt; 3 giây</p>
              </div>
            </div>
      
            {/* Camera viewfinder (phone-style) */}
            <div className="relative mb-space-16">
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-[#0F1F18] shadow-clay-lg">
                {/* Captured illustration as background — currently selected item */}
                <div className="absolute inset-0 w-full h-full">
                  <ItemPhoto item={selectedSampleId} className="w-full h-full" />
                </div>
      
                {/* Grid overlay (rule of thirds) */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/3 left-0 right-0 h-px bg-white/30"></div>
                  <div className="absolute top-2/3 left-0 right-0 h-px bg-white/30"></div>
                  <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/30"></div>
                  <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/30"></div>
                </div>
      
                {/* AI detection box overlay (rule of thirds focus) */}
                <div className="absolute top-[18%] left-[15%] right-[15%] bottom-[28%] border-2 border-tier-s rounded-2xl shadow-[0_0_0_4px_rgba(82,224,141,0.3)] pointer-events-none">
                  <span className={cx(['absolute -top-3 left-3 px-space-8 py-[2px] rounded-md font-mono-md text-[10px] font-bold text-white shadow-clay-sm', `bg-tier-s`])}>{detectedConfidence}% · TIER {detectedTier}</span>
                </div>
      
                {/* Top bar: flash + settings */}
                <div className="absolute top-space-16 left-space-16 right-space-16 flex items-center justify-between">
                  <div className="flex items-center gap-space-8">
                    <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition">
                      <span className="material-symbols-rounded fill !text-[20px]">flash_auto</span>
                    </button>
                    <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition">
                      <span className="material-symbols-rounded !text-[20px]">grid_3x3</span>
                    </button>
                  </div>
                  <div className="bg-black/40 backdrop-blur rounded-full px-space-12 py-[4px] flex items-center gap-space-4">
                    <span className="w-2 h-2 rounded-full bg-tier-s animate-pulse"></span>
                    <span className="font-mono-md text-[10px] text-white font-bold">AI ĐANG QUÉT</span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:bg-black/60 transition">
                    <span className="material-symbols-rounded !text-[20px]">close</span>
                  </button>
                </div>
      
                {/* Bottom bar: gallery + shutter + switch */}
                <div className="absolute bottom-space-16 left-0 right-0 flex items-center justify-around px-space-32">
                  <button className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white shadow-clay bg-bg-elevated">
                    <TierScene className="w-full h-full" />
                  </button>
                  <button className="w-20 h-20 rounded-full bg-white shadow-clay-lg border-4 border-white/40 flex items-center justify-center hover:scale-105 transition">
                    <div className="w-16 h-16 rounded-full bg-white border-4 border-[#0F1F18]"></div>
                  </button>
                  <button className="w-12 h-12 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white">
                    <span className="material-symbols-rounded fill !text-[24px]">flip_camera_android</span>
                  </button>
                </div>
              </div>
      
              {/* Floating "shutter just clicked" pulse indicator */}
              <div className={cx(['absolute -top-2 -right-2 text-white px-space-12 py-[4px] rounded-full shadow-clay-lg font-mono-md text-[11px] font-bold flex items-center gap-space-4', `bg-${accent}`])}>
                <span className="material-symbols-rounded fill !text-[14px]">check_circle</span>
                ĐÃ CHỤP {thumbs.length} ẢNH
              </div>
            </div>
      
            {/* Captured photos strip — đa dạng vật phẩm */}
            <div className="mb-space-16">
              <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-bold block mb-space-8">ẢNH ĐÃ CHỤP · CÓ THỂ XOÁ HOẶC CHỤP THÊM</span>
              <div className="grid grid-cols-4 gap-space-8">
                {thumbs.map((t, i) => (
                  <div className={cx(['aspect-square rounded-2xl overflow-hidden border-2 shadow-clay-sm relative group bg-bg-elevated', i === 0 ? `border-${accent}` : 'border-border-subtle'])}>
                    <div className="absolute inset-0" style={{ 'transform': `rotate(${t.rotate}deg)` }}>
                      {t.key === 'scene' ? <TierScene className="w-full h-full" /> : <ItemPhoto item={t.key} className="w-full h-full" />}
                    </div>
                    {i === 0 && (
                      <div className={cx(['absolute top-space-4 left-space-4 px-space-4 py-[1px] rounded-md text-white font-mono-md text-[8px] font-bold z-10', `bg-${accent}`])}>CHÍNH</div>
                    )}
                    <span className="absolute bottom-space-4 right-space-4 px-space-4 py-[1px] rounded-md bg-black/60 backdrop-blur text-white font-mono-md text-[8px] font-bold z-10">{t.label}</span>
                    <button className="absolute top-space-4 right-space-4 w-5 h-5 rounded-full bg-black/60 backdrop-blur text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition z-10">
                      <span className="material-symbols-rounded !text-[12px]">close</span>
                    </button>
                  </div>
                ))}
                <button className="aspect-square rounded-2xl border-2 border-dashed border-border-default bg-bg-surface shadow-clay-sm flex flex-col items-center justify-center gap-space-4 hover:border-tier-s hover:bg-clay-mint/40 transition">
                  <span className="material-symbols-rounded !text-[24px] text-text-tertiary">add_a_photo</span>
                  <span className="font-mono-md text-[10px] text-text-tertiary font-semibold">Chụp thêm</span>
                </button>
              </div>
            </div>
      
            {/* AI detection result */}
            <div className={cx(['rounded-2xl border-2 p-space-16 flex items-start gap-space-16 shadow-clay-sm', clay, `border-${accent}/40`])}>
              <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                <span className={cx(['material-symbols-rounded fill !text-[24px]', `text-${accent}`])}>smart_toy</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-space-8 mb-space-4 flex-wrap">
                  <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold', `text-${accent}`])}>AI ĐÃ NHẬN DIỆN · {`<3 giây`}</span>
                  <span className={cx(['px-space-8 py-[2px] rounded-full font-mono-md text-[10px] font-bold', `bg-${accent}/15 text-${accent}`])}>Confidence {detectedConfidence}%</span>
                </div>
                <span className="font-display font-extrabold text-[18px] text-text-primary block leading-tight">{detectedItem}</span>
                <span className="font-mono-md text-[12px] text-text-secondary mt-space-4 block">Phân loại: <strong className={cx([`text-${accent}`])}>Tier {detectedTier}</strong> · {tierName}</span>
                {/* Confidence bar */}
                <div className="mt-space-8 h-1.5 bg-bg-elevated rounded-full overflow-hidden">
                  <div className={cx(['h-full rounded-full', `bg-${accent}`])} style={{ 'width': `${detectedConfidence}%` }}></div>
                </div>
              </div>
              <button className="font-mono-md text-[11px] text-text-tertiary font-bold hover:text-tier-s shrink-0 self-center">
                Sai? Sửa thủ công →
              </button>
            </div>
          </div>
      
          {/* Sample picker WITH REAL PHOTOS */}
          <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
            <span className={cx(['font-mono-md text-[12px] uppercase tracking-wider font-semibold flex items-center gap-space-8', `text-${accent}`])}>
              <span className="material-symbols-rounded fill !text-[16px]">collections</span>
              CHƯA CÓ ẢNH? CHỌN MẪU CÓ SẴN
            </span>
            <h3 className="font-h3 text-h3 text-text-primary mt-space-8 mb-space-16">{samples.length} mẫu Tier {tier} phổ biến</h3>
            <div className="grid grid-cols-2 gap-space-12">
              {samples.map((s) => (
                <button className={cx(['rounded-2xl border-2 cursor-pointer transition shadow-clay-sm hover:shadow-clay hover:-translate-y-[2px] overflow-hidden flex', s.id === selectedSampleId ? `${clay} border-${accent} ring-2 ring-${accent}/40` : 'bg-bg-surface border-border-subtle'])}>
                  {/* Mỗi sample 1 illustration riêng */}
                  <div className="w-28 h-28 shrink-0 overflow-hidden relative bg-bg-elevated">
                    <ItemPhoto item={s.id} className="w-full h-full" />
                    <div className="absolute bottom-space-4 left-space-4 w-7 h-7 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                      <span className={cx(['material-symbols-rounded fill !text-[14px]', `text-${accent}`])}>{s.icon}</span>
                    </div>
                    {s.id === selectedSampleId && (
                      <div className="absolute inset-0 flex items-center justify-center bg-bg-elevated/40 backdrop-blur-sm">
                        <span className={cx(['material-symbols-rounded fill !text-[36px] drop-shadow-clay', `text-${accent}`])}>check_circle</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left p-space-12 flex flex-col gap-space-4">
                    <span className="font-display font-bold text-[13px] text-text-primary block leading-tight">{s.label}</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary block">{s.desc}</span>
                    <span className={cx(['mt-auto font-mono-md text-[10px] font-bold', `text-${accent}`])}>{s.id === selectedSampleId ? '● ĐANG XEM' : 'Dùng mẫu này →'}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      
        {/* RIGHT: guidance + tips + next CTA */}
        <div className="flex flex-col gap-space-16">
          {/* Guidance card */}
          <div className={cx(['rounded-[24px] shadow-clay border-2 p-space-24', clay, `border-${accent}/30`])}>
            <span className={cx(['material-symbols-rounded fill !text-[32px]', `text-${accent}`])}>tips_and_updates</span>
            <span className={cx(['font-mono-md text-[11px] uppercase tracking-wider font-bold block mt-space-8', `text-${accent}`])}>CHỤP ẢNH ĐẸP</span>
            <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-12">Để AI nhận diện chính xác</h4>
            <ul className="flex flex-col gap-space-8">
              {guidanceTips.map((tip) => (
                <li className="flex items-start gap-space-8">
                  <span className={cx(['material-symbols-rounded fill !text-[16px] shrink-0 mt-[2px]', `text-${accent}`])}>check_circle</span>
                  <span className="font-body-md text-[12px] text-text-secondary leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
      
          {/* Trust card */}
          <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8">
              <span className="material-symbols-rounded fill !text-[14px]">smart_toy</span>
              AI VISION ENGINE
            </span>
            <h4 className="font-display font-bold text-[14px] text-text-primary mt-space-8 mb-space-12">95% accuracy · &lt; 3 giây</h4>
            <div className="flex flex-col gap-space-8">
              <div className="bg-bg-surface rounded-xl p-space-12 flex items-center gap-space-8 border border-border-subtle">
                <span className="material-symbols-rounded fill !text-[16px] text-tier-s">verified</span>
                <span className="font-mono-md text-[11px] text-text-primary font-semibold">Train trên 120K ảnh Việt Nam</span>
              </div>
              <div className="bg-bg-surface rounded-xl p-space-12 flex items-center gap-space-8 border border-border-subtle">
                <span className="material-symbols-rounded fill !text-[16px] text-info">policy</span>
                <span className="font-mono-md text-[11px] text-text-primary font-semibold">Ảnh không lưu sau verify</span>
              </div>
            </div>
          </div>
      
          {/* Next CTA */}
          <a href={nextHref} className={cx(['rounded-2xl px-space-24 py-space-16 flex items-center justify-between font-display font-bold text-[15px] shadow-clay hover:-translate-y-[2px] transition', `bg-${accent} text-white`])}>
            <div className="flex flex-col items-start">
              <span className="font-mono-md text-[10px] uppercase tracking-wider opacity-80">TIẾP TỤC</span>
              <span>{nextLabel}</span>
            </div>
            <span className="material-symbols-rounded fill !text-[24px]">arrow_forward</span>
          </a>
      
          <a href="/orders/new" className="bg-bg-elevated text-text-tertiary border border-border-subtle rounded-2xl px-space-24 py-space-12 text-center font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay">
            ← Đổi loại vật phẩm
          </a>
        </div>
      </div>
    </>
  );
}
