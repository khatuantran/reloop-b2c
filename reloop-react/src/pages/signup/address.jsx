import { cx } from '@/lib/cx';
import AuthShell from '../../components/auth/AuthShell';
import AuthSidebar from '../../components/auth/AuthSidebar';

export default function Address() {
  const steps = [
    { n: 1, label: 'Số điện thoại', icon: 'smartphone', href: '/signup.html' },
    { n: 2, label: 'Nhập OTP', icon: 'sms', href: '/signup/otp.html' },
    { n: 3, label: 'Thông tin', icon: 'person', href: '/signup/info.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/signup/address.html' },
    { n: 5, label: 'Hoàn tất', icon: 'celebration', href: '/signup/done.html' },
  ];
  
  const districts = [
    { id: 'q7', label: 'Q.7', sub: '847 collector', selected: true },
    { id: 'bt', label: 'Bình Thạnh', sub: '512 collector' },
    { id: 'q4', label: 'Q.4', sub: '298 collector' },
  ];
  return (
    <>
      <AuthShell flow="signup" steps={steps} activeStep={4}>
          <div className="grid grid-cols-[1fr_400px] gap-space-32">
            <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-48">
              <a href="/signup/info" className="inline-flex items-center gap-space-4 font-mono-md text-[11px] text-text-tertiary hover:text-tier-s font-semibold mb-space-16">
                <span className="material-symbols-rounded !text-[14px]">arrow_back</span>
                Quay lại bước 3
              </a>
              <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold mb-space-8 block">BƯỚC 4/5 · ĐỊA CHỈ THU GOM</span>
              <h1 className="font-display-l text-[40px] font-extrabold leading-tight tracking-tight text-text-primary mb-space-8">Collector đến chỗ nào?</h1>
              <p className="font-body-md text-[14px] text-text-secondary mb-space-32">
                Bán kính phục vụ 3km · Có thể thêm nhiều địa chỉ sau ở Hồ sơ
              </p>
      
              {/* District */}
              <div className="mb-space-24">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">QUẬN/HUYỆN <span className="text-tier-h">*</span></span>
                <div className="grid grid-cols-3 gap-space-12">
                  {districts.map((d) => (
                    <button className={cx(['rounded-2xl border-2 px-space-12 py-space-16 shadow-clay-sm flex flex-col items-center gap-space-4 transition relative', d.selected ? 'bg-clay-mint border-tier-s ring-2 ring-tier-s/40' : 'bg-bg-surface border-border-subtle hover:border-border-default'])}>
                      {d.selected && <span className="absolute top-space-8 right-space-8 material-symbols-rounded fill !text-[16px] text-tier-s">check_circle</span>}
                      <span className="material-symbols-rounded fill !text-[24px] text-tier-s">location_on</span>
                      <span className="font-display font-bold text-[14px] text-text-primary">{d.label}</span>
                      <span className="font-mono-md text-[10px] text-text-tertiary">{d.sub}</span>
                      <span className="px-space-8 py-[1px] rounded-full bg-tier-s/15 font-mono-md text-[8px] font-bold text-tier-s tracking-wider">● LIVE</span>
                    </button>
                  ))}
                </div>
                <a href="#" className="font-mono-md text-[11px] text-text-tertiary mt-space-8 inline-flex items-center gap-space-4 hover:text-tier-s">
                  <span className="material-symbols-rounded !text-[14px]">map</span>
                  Quận khác? Đăng ký waitlist
                </a>
              </div>
      
              {/* Phường */}
              <div className="mb-space-16">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">PHƯỜNG/XÃ <span className="text-tier-h">*</span></span>
                <div className="bg-bg-surface rounded-2xl border-2 border-tier-s shadow-inset-soft p-space-12 flex items-center gap-space-12">
                  <span className="material-symbols-rounded !text-[20px] text-tier-s">apartment</span>
                  <select className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary cursor-pointer">
                    <option>Phường Tân Phú</option>
                    <option>Phường Tân Quy</option>
                    <option>Phường Tân Thuận Đông</option>
                    <option>Phường Phú Mỹ</option>
                  </select>
                  <span className="material-symbols-rounded !text-[20px] text-text-tertiary">expand_more</span>
                </div>
              </div>
      
              {/* Street */}
              <div className="mb-space-16">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">SỐ NHÀ + ĐƯỜNG <span className="text-tier-h">*</span></span>
                <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                  <span className="material-symbols-rounded !text-[20px] text-text-tertiary">signpost</span>
                  <input type="text" value="123 Lê Văn Thiêm" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary" />
                </div>
              </div>
      
              {/* Apartment + floor */}
              <div className="grid grid-cols-2 gap-space-12 mb-space-16">
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">CHUNG CƯ/TÒA NHÀ</span>
                  <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">apartment</span>
                    <input type="text" placeholder="Sky Garden 3" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" />
                  </div>
                </div>
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">TẦNG / SỐ PHÒNG</span>
                  <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">elevator</span>
                    <input type="text" placeholder="Tầng 12 · P.1208" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" />
                  </div>
                </div>
              </div>
      
              {/* Map preview */}
              <div className="mb-space-16 rounded-2xl overflow-hidden border-2 border-border-subtle shadow-clay-sm relative h-[180px] bg-gradient-to-br from-clay-mint via-clay-sky to-clay-butter">
                <svg viewBox="0 0 400 180" className="absolute inset-0 w-full h-full opacity-40">
                  <g stroke="#88AA77" strokeWidth="0.5" fill="none">
                    <line x1="0" y1="40" x2="400" y2="40"/>
                    <line x1="0" y1="90" x2="400" y2="90"/>
                    <line x1="0" y1="140" x2="400" y2="140"/>
                    <line x1="100" y1="0" x2="100" y2="180"/>
                    <line x1="200" y1="0" x2="200" y2="180"/>
                    <line x1="300" y1="0" x2="300" y2="180"/>
                  </g>
                  <path d="M0 90 Q150 70 250 100 T400 80" stroke="#FAFAF7" strokeWidth="6" fill="none"/>
                  <path d="M180 0 Q200 90 220 180" stroke="#FAFAF7" strokeWidth="4" fill="none"/>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 rounded-full bg-tier-s text-white flex items-center justify-center shadow-clay-lg animate-pulse">
                    <span className="material-symbols-rounded fill !text-[28px]">home</span>
                  </div>
                </div>
                <div className="absolute top-space-12 left-space-12 bg-bg-elevated/95 backdrop-blur rounded-xl px-space-12 py-space-4 shadow-clay-sm flex items-center gap-space-4">
                  <span className="material-symbols-rounded fill !text-[14px] text-tier-s">my_location</span>
                  <span className="font-mono-md text-[11px] text-text-primary font-bold tabular-nums">10.7378° N, 106.7234° E</span>
                </div>
                <button className="absolute bottom-space-12 right-space-12 bg-bg-elevated/95 backdrop-blur rounded-xl px-space-12 py-space-4 shadow-clay-sm font-mono-md text-[11px] text-tier-s font-bold">
                  Điều chỉnh trên bản đồ →
                </button>
              </div>
      
              {/* Note */}
              <div className="mb-space-24">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">GHI CHÚ CHO COLLECTOR <span className="text-text-tertiary normal-case">(tuỳ chọn)</span></span>
                <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-start gap-space-12">
                  <span className="material-symbols-rounded !text-[20px] text-text-tertiary mt-[2px]">notes</span>
                  <textarea rows="2" placeholder="VD: Cổng B · Bảo vệ ghi tên · Gọi trước 5 phút" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[13px] text-text-primary placeholder:text-text-tertiary resize-none"></textarea>
                </div>
              </div>
      
              <div className="flex gap-space-12">
                <a href="/signup/info" className="bg-bg-surface text-text-primary border border-border-subtle px-space-24 py-space-16 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay">
                  <span className="material-symbols-rounded !text-[18px]">arrow_back</span>
                  Quay lại
                </a>
                <a href="/signup/done" className="flex-1 bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                  Hoàn tất đăng ký
                  <span className="material-symbols-rounded fill !text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
      
            <AuthSidebar flow="signup" />
          </div>
        </AuthShell>
    </>
  );
}
