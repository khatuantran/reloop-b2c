import { cx } from '@/lib/cx';

export default function CasingFraudCard({ variant = 'inline', isFirstTimeTierC = true }) {
  const casingExamples = [
    { icon: 'water_bottle', label: 'Đóng gói trong chai PET', risk: 'Cao', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { icon: 'inventory_2', label: 'Hộp carton chứa rác đất', risk: 'Trung', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { icon: 'lunch_dining', label: 'Bao bì xốp/giấy ngụy trang', risk: 'Trung', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { icon: 'recycling', label: 'Trộn vật liệu khác tier', risk: 'Cao', clay: 'bg-clay-blush', accent: 'text-tier-h' },
  ];
  
  const protections = [
    { icon: 'visibility', label: 'Peek Check tại nhà', desc: 'Collector mở 1 túi ngẫu nhiên' },
    { icon: 'photo_camera', label: '3 ảnh + video evidence', desc: 'Chụp tự động lưu blockchain' },
    { icon: 'qr_code_2', label: 'Niêm phong QR code', desc: 'Mỗi túi 1 mã unique' },
    { icon: 'verified_user', label: 'Hub Spot Check', desc: 'Kiểm tra ngẫu nhiên 10% đơn' },
  ];
  return (
    <>
      <div className={cx(['rounded-[28px] shadow-clay border-2 border-amber-deep/40 bg-clay-butter overflow-hidden', variant === 'modal' && 'max-w-[680px]'])}>
        {/* Header */}
        <div className="bg-amber-deep p-space-24 flex items-center gap-space-16">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center shadow-clay-sm">
            <span className="material-symbols-rounded fill !text-[28px] text-white">shield</span>
          </div>
          <div className="flex-1">
            <span className="font-mono-md text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold block">CHỐNG GIAN LẬN TIER C</span>
            <h3 className="font-display font-extrabold text-[20px] text-white leading-tight mt-space-4">Casing Fraud — Đóng gói lừa</h3>
          </div>
          {isFirstTimeTierC && (
            <span className="px-space-12 py-[4px] rounded-full bg-white/20 backdrop-blur font-mono-md text-[10px] text-white font-bold tracking-wider shadow-clay-sm shrink-0">LẦN ĐẦU TIER C</span>
          )}
        </div>
      
        {/* Body */}
        <div className="p-space-32 flex flex-col gap-space-24">
          <p className="font-body-lg text-[14px] text-text-primary leading-relaxed">
            "Casing fraud" là hành vi <strong>đóng gói vật liệu giá thấp bên ngoài</strong> để lừa cân nặng/tier — ví dụ giấu rác đất trong chai PET. Đây là lý do <strong className="text-amber-deep">Tier C cần Hub rã xác</strong> trước khi trả phần chênh.
          </p>
      
          {/* Casing examples grid */}
          <div>
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block mb-space-12">CÁC HÌNH THỨC THƯỜNG GẶP</span>
            <div className="grid grid-cols-2 gap-space-12">
              {casingExamples.map((c) => (
                <div className={cx(['rounded-2xl shadow-clay-sm border-2 p-space-12 flex items-center gap-space-12', c.clay, `border-${c.accent.replace('text-', '')}/30`])}>
                  <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                    <span className={cx(['material-symbols-rounded fill !text-[20px]', c.accent])}>{c.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-display font-bold text-[12px] text-text-primary block leading-tight">{c.label}</span>
                    <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-semibold mt-[2px] block', c.accent])}>Rủi ro: {c.risk}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          {/* Protection grid */}
          <div>
            <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">CƠ CHẾ BẢO VỆ NGƯỜI BÁN THẬT</span>
            <div className="grid grid-cols-2 gap-space-12">
              {protections.map((p) => (
                <div className="rounded-2xl shadow-clay-sm border-2 border-tier-s/20 bg-clay-mint p-space-12 flex items-start gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                    <span className="material-symbols-rounded fill !text-[20px] text-tier-s">{p.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-display font-bold text-[12px] text-text-primary block leading-tight">{p.label}</span>
                    <span className="font-body-md text-[11px] text-text-secondary mt-[2px] block">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
      
          <div className="bg-bg-elevated rounded-2xl p-space-16 shadow-clay-sm border border-border-subtle flex items-start gap-space-12">
            <span className="material-symbols-rounded fill !text-[20px] text-tier-s shrink-0">info</span>
            <p className="font-body-md text-[12px] text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Đóng gói trung thực = Trust Score tăng nhanh.</strong> Sau 5 đơn Tier C đúng, % tạm ứng từ 30% → 50% → 70%. RE-LOOP <strong className="text-tier-s">không penalize</strong> nếu BOM thực thấp hơn kỳ vọng — chỉ block khi phát hiện casing rõ ràng.
            </p>
          </div>
      
          {variant === 'modal' && (
            <div className="flex gap-space-12 mt-space-8">
              <button className="flex-1 bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[14px]">Đã hiểu, tiếp tục</button>
              <a href="/help" className="bg-bg-elevated text-text-primary border border-border-subtle px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay">
                <span className="material-symbols-rounded fill !text-[16px]">help</span>
                Tìm hiểu thêm
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
