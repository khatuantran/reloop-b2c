import { cx, __css } from '@/lib/cx';
import EcoTree from '../components/illustrations/EcoTree';
import GreenPointsBadge from '../components/illustrations/GreenPointsBadge';

export default function Impact() {
  const monthlyImpact = [
    { month: 'T1', co2: 3.2 },
    { month: 'T2', co2: 4.8 },
    { month: 'T3', co2: 5.5 },
    { month: 'T4', co2: 6.1 },
    { month: 'T5', co2: 4.9 },
    { month: 'T6', co2: 7.2 },
    { month: 'T7', co2: 5.8 },
    { month: 'T8', co2: 6.4 },
    { month: 'T9', co2: 4.3 },
    { month: 'T10', co2: 8.1 },
    { month: 'T11', co2: 6.5 },
    { month: 'T12', co2: 5.2 },
  ];
  const maxCo2 = Math.max(...monthlyImpact.map(m => m.co2));
  
  const breakdownMaterials = [
    { label: 'Nhựa PET', kg: 8.4, pct: 38, icon: 'water_bottle', clay: 'bg-clay-sky', accent: 'text-info' },
    { label: 'Kim loại (Cu/Fe/Al)', kg: 6.95, pct: 31, icon: 'bolt', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { label: 'Carton/Giấy', kg: 4.2, pct: 19, icon: 'inventory_2', clay: 'bg-clay-peach', accent: 'text-tier-c' },
    { label: 'Linh kiện điện tử', kg: 2.65, pct: 12, icon: 'memory', clay: 'bg-clay-mint', accent: 'text-tier-s' },
  ];
  
  const comparisons = [
    { icon: 'directions_car', label: 'Tương đương', value: '241 km lái xe máy', clay: 'bg-clay-blush', accent: 'text-tier-h' },
    { icon: 'local_drink', label: 'Tiết kiệm', value: '1.840 chai PET không ra biển', clay: 'bg-clay-sky', accent: 'text-info' },
    { icon: 'park', label: 'Tương đương', value: '2 cây cổ thụ trồng 1 năm', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { icon: 'water', label: 'Tiết kiệm', value: '380 lít nước sản xuất nhựa mới', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
  ];
  
  const milestones = [
    { kg: 10, label: 'Người mới xanh', achieved: true },
    { kg: 25, label: 'Bạn thân môi trường', achieved: true },
    { kg: 50, label: 'Chiến binh tái chế', achieved: false, current: true, progress: 47.2 },
    { kg: 100, label: 'Anh hùng xanh', achieved: false },
    { kg: 250, label: 'Đại sứ RE-LOOP', achieved: false },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Trang chủ
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.3fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">eco</span>
                    XANH NHÀ EM · 2026
                  </span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Bạn đã tránh phát thải <span className="text-tier-s">47,2 kg CO₂</span></h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">Tương đương 2 cây cổ thụ trồng 1 năm · 1.840 chai PET không ra biển</p>
                  <div className="flex flex-wrap gap-space-12">
                    <button className="bg-lime text-text-on-lime px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-lime text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                      <span className="material-symbols-rounded fill !text-[18px]">share</span>
                      Chia sẻ social card
                    </button>
                    <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay transition">
                      <span className="material-symbols-rounded fill !text-[18px]">download</span>
                      Tải báo cáo PDF
                    </button>
                  </div>
                </div>
                <div className="relative h-[300px]">
                  <EcoTree className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Top stat cards */}
            <section className="grid grid-cols-4 gap-space-16 mb-space-32">
              <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-tier-s">cloud_off</span>
                </div>
                <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold block">CO₂ tránh phát thải</span>
                <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">47,2<span className="text-[16px] text-text-tertiary ml-space-4">kg</span></span>
                <span className="font-body-md text-[11px] text-text-secondary mt-space-8 block">↑ 18% so với năm ngoái</span>
              </div>
              <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-info">water_bottle</span>
                </div>
                <span className="font-mono-md text-[10px] text-info uppercase tracking-wider font-semibold block">Nhựa tái chế</span>
                <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">22,2<span className="text-[16px] text-text-tertiary ml-space-4">kg</span></span>
                <span className="font-body-md text-[11px] text-text-secondary mt-space-8 block">5 đơn Tier S</span>
              </div>
              <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">precision_manufacturing</span>
                </div>
                <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold block">Kim loại thu hồi</span>
                <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">6,95<span className="text-[16px] text-text-tertiary ml-space-4">kg</span></span>
                <span className="font-body-md text-[11px] text-text-secondary mt-space-8 block">2 đơn Tier C verified</span>
              </div>
              <div className="bg-clay-mint rounded-[24px] shadow-clay border-2 border-tier-s/30 p-space-24 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-tier-s">park</span>
                </div>
                <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold block">Cây trồng tương đương</span>
                <span className="font-display font-extrabold text-[36px] text-text-primary tabular-nums leading-none mt-space-4 block">2<span className="text-[16px] text-text-tertiary ml-space-4">cây</span></span>
                <span className="font-body-md text-[11px] text-text-secondary mt-space-8 block">Đổi 200 GP → trồng cây thật</span>
              </div>
            </section>
      
            {/* Monthly chart */}
            <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">CO₂ THEO THÁNG</span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Diễn biến 12 tháng qua</h2>
                </div>
                <div className="flex items-center gap-space-12">
                  <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider">Tổng</span>
                  <span className="font-display font-extrabold text-[28px] text-tier-s tabular-nums">68,0 kg</span>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-space-12 h-[200px] items-end">
                {monthlyImpact.map((m) => (
                  <div className="flex flex-col items-center gap-space-8">
                    <div className="w-full flex items-end h-full relative group">
                      <div
                        className="w-full bg-gradient-to-t from-tier-s to-lime rounded-t-xl shadow-clay-sm transition-all hover:shadow-clay relative"
                        style={{ 'height': `${(m.co2 / maxCo2) * 100}%` }}
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono-md text-[10px] text-text-primary font-bold opacity-0 group-hover:opacity-100 transition whitespace-nowrap">{m.co2} kg</span>
                      </div>
                    </div>
                    <span className="font-mono-md text-[10px] text-text-tertiary font-semibold">{m.month}</span>
                  </div>
                ))}
              </div>
            </section>
      
            {/* Material breakdown + Comparisons */}
            <section className="grid grid-cols-2 gap-space-24 mb-space-32">
              {/* Material breakdown */}
              <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">PHÂN LOẠI VẬT LIỆU</span>
                <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">Bạn đã tái chế</h2>
                <div className="flex flex-col gap-space-16">
                  {breakdownMaterials.map((m) => (
                    <div>
                      <div className="flex items-center gap-space-12 mb-space-8">
                        <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm', m.clay])}>
                          <span className={cx(['material-symbols-rounded fill !text-[20px]', m.accent])}>{m.icon}</span>
                        </div>
                        <span className="font-display font-bold text-[14px] text-text-primary flex-1">{m.label}</span>
                        <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">{m.kg} kg</span>
                        <span className={cx(['font-mono-md text-[11px] font-bold tabular-nums w-10 text-right', m.accent])}>{m.pct}%</span>
                      </div>
                      <div className="h-2 bg-bg-surface rounded-full overflow-hidden">
                        <div className={cx(['h-full rounded-full', m.clay.replace('clay-', '').replace('bg-', '')])} style={__css(`width: ${m.pct}%; background: linear-gradient(90deg, var(--lime), var(--lime-deep))`)}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Comparisons */}
              <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">DỄ HÌNH DUNG HƠN</span>
                <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">47,2 kg CO₂ là bao nhiêu?</h2>
                <div className="grid grid-cols-2 gap-space-12">
                  {comparisons.map((c) => (
                    <div className={cx(['rounded-2xl p-space-16 shadow-clay-sm border-2 flex flex-col gap-space-8', c.clay, `border-${c.accent.replace('text-', '')}/20`])}>
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                        <span className={cx(['material-symbols-rounded fill !text-[20px]', c.accent])}>{c.icon}</span>
                      </div>
                      <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-semibold', c.accent])}>{c.label}</span>
                      <span className="font-display font-bold text-[14px] text-text-primary leading-tight">{c.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Milestones progression */}
            <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">DANH HIỆU XANH</span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Hành trình của bạn</h2>
                </div>
                <span className="font-mono-md text-[13px] text-text-secondary">Tiếp theo: <strong className="text-tier-s">2,8 kg nữa</strong></span>
              </div>
              <div className="relative">
                <div className="absolute top-6 left-0 right-0 h-1 bg-bg-surface rounded-full"></div>
                <div className="absolute top-6 left-0 h-1 bg-gradient-to-r from-tier-s to-lime rounded-full" style={{ 'width': '47%' }}></div>
                <div className="grid grid-cols-5 relative">
                  {milestones.map((m) => (
                    <div className="flex flex-col items-center gap-space-8">
                      <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm relative z-10 border-2', m.achieved ? 'bg-tier-s text-white border-tier-s' : m.current ? 'bg-clay-butter border-amber-deep animate-pulse' : 'bg-bg-surface border-border-subtle'])}>
                        <span className={cx(['material-symbols-rounded fill !text-[22px]', m.achieved ? 'text-white' : m.current ? 'text-amber-deep' : 'text-text-tertiary'])}>
                          {m.achieved ? 'check' : m.current ? 'hourglass_top' : 'lock'}
                        </span>
                      </div>
                      <span className="font-mono-md text-[11px] font-bold tabular-nums text-text-primary">{m.kg} kg</span>
                      <span className={cx(['font-mono-md text-[10px] text-center', m.achieved || m.current ? 'text-text-primary font-semibold' : 'text-text-tertiary'])}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      
            {/* Share + Tree planting CTA */}
            <section className="grid grid-cols-2 gap-space-24">
              <div className="bg-clay-mint rounded-[28px] shadow-clay border-2 border-tier-s/30 p-space-32 relative overflow-hidden">
                <div className="absolute right-[-30px] top-[-20px] w-32 h-32 opacity-30">
                  <GreenPointsBadge className="w-full h-full" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[22px] text-tier-s">park</span>
                  </div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold">ĐỔI GP TRỒNG CÂY THẬT</span>
                  <h3 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-12">200 GP = 1 cây thật</h3>
                  <p className="font-body-md text-[13px] text-text-secondary mb-space-16">Đối tác Gaia trồng tại rừng Cần Giờ · GPS report + ảnh trồng gửi về sau 2 tuần</p>
                  <button className="bg-lime text-text-on-lime px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-lime text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                    Đổi ngay (bạn có 4.250 GP)
                    <span className="material-symbols-rounded fill !text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="bg-clay-butter rounded-[28px] shadow-clay border-2 border-amber-deep/30 p-space-32 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">share</span>
                </div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-bold">SOCIAL CARD</span>
                <h3 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-12">Khoe thành tích xanh</h3>
                <p className="font-body-md text-[13px] text-text-secondary mb-space-16">Chia sẻ Facebook/Zalo · 1080×1080 PNG · Tag bạn bè để rủ tham gia RE-LOOP</p>
                <div className="flex gap-space-8">
                  <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-16 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] inline-flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[18px] text-info">thumb_up</span>
                    Facebook
                  </button>
                  <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-16 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] inline-flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[18px] text-info">chat</span>
                    Zalo
                  </button>
                  <button className="bg-bg-elevated text-text-primary border border-border-subtle px-space-16 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] inline-flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[18px] text-tier-s">download</span>
                    Tải PNG
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
