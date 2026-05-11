import { cx } from '@/lib/cx';
import PersonaLinh from '../components/illustrations/PersonaLinh';
import EcoTree from '../components/illustrations/EcoTree';

export default function Share() {
  const householdMembers = [
    { name: 'Bà Năm (Mẹ)', age: 68, district: 'Q.7', orders: 4, status: 'active', avatar: 'elderly_woman', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { name: 'Minh (Em)', age: 22, district: 'Bình Thạnh', orders: 12, status: 'active', avatar: 'face_6', clay: 'bg-clay-sky', accent: 'text-info' },
    { name: 'Bố', age: 70, district: 'Q.7', orders: 0, status: 'invited', avatar: 'face_3', clay: 'bg-bg-surface', accent: 'text-text-tertiary' },
  ];
  
  const sharedOrders = [
    { id: 'RL-2026-001242', who: 'Bà Năm', item: 'Carton + chai PET', amount: 45_600, date: '08/05/2026', icon: 'inventory_2' },
    { id: 'RL-2026-001241', who: 'Minh', item: 'PCB cũ', amount: 87_300, date: '06/05/2026', icon: 'memory' },
    { id: 'RL-2026-001238', who: 'Bà Năm', item: 'Lon nhôm', amount: 12_400, date: '02/05/2026', icon: 'water_bottle' },
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
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">family_restroom</span>
                    CHÁU GIÚP BÀ
                  </span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Đặt hộ người thân</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">Bà 68 tuổi không quen smartphone? Em 22 tuổi đi làm xa? <strong className="text-tier-s">Bạn đặt hộ — RE-LOOP gửi GP về tài khoản của họ.</strong></p>
                  <div className="flex flex-wrap gap-space-12">
                    <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-tier-s">groups</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold">Tối đa</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">5 thành viên</span>
                      </div>
                    </div>
                    <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                      <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">redeem</span>
                      <div className="flex flex-col">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold">Mỗi member +</span>
                        <span className="font-mono-md text-[13px] text-text-primary font-bold">+50 GP welcome</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative h-[260px] flex items-center justify-center">
                  <EcoTree className="w-full h-full" />
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-24">
              {/* Left: members + orders */}
              <div className="flex flex-col gap-space-24">
                {/* Household members */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-end justify-between mb-space-24">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">groups</span>
                        THÀNH VIÊN GIA ĐÌNH
                      </span>
                      <h2 className="font-h2 text-h2 text-text-primary mt-space-8">3 / 5 thành viên</h2>
                    </div>
                    <button className="bg-lime text-text-on-lime px-space-16 py-space-8 rounded-full font-mono-md text-[12px] font-bold shadow-clay-lime hover:-translate-y-[1px] flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">person_add</span>
                      Mời thêm
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-space-16">
                    {householdMembers.map((m) => (
                      <div className={cx(['rounded-[24px] shadow-clay-sm border-2 p-space-24 flex flex-col gap-space-12', m.clay, `border-${m.accent.replace('text-', '')}/30`])}>
                        <div className="flex items-start justify-between">
                          <div className="w-14 h-14 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                            <span className={cx(['material-symbols-rounded fill !text-[28px]', m.accent])}>{m.avatar}</span>
                          </div>
                          {m.status === 'active' ? (
                            <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold">ACTIVE</span>
                          ) : (
                            <span className="px-space-8 py-[2px] rounded-full bg-amber-deep text-white font-mono-md text-[10px] font-bold">CHỜ</span>
                          )}
                        </div>
                        <div>
                          <span className="font-display font-extrabold text-[16px] text-text-primary block leading-tight">{m.name}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary mt-space-4 block">{m.age} tuổi · {m.district}</span>
                        </div>
                        <div className="bg-bg-elevated/60 rounded-xl p-space-8 flex items-center justify-between">
                          <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">Đơn đã đặt hộ</span>
                          <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">{m.orders}</span>
                        </div>
                        <div className="flex gap-space-8">
                          {m.status === 'active' ? (
                            <button className="flex-1 bg-text-primary text-white py-space-8 rounded-xl font-mono-md text-[11px] font-bold shadow-clay-sm flex items-center justify-center gap-space-4">
                              <span className="material-symbols-rounded fill !text-[14px]">add_shopping_cart</span>
                              Đặt hộ
                            </button>
                          ) : (
                            <button className="flex-1 bg-bg-elevated text-text-primary border border-border-subtle py-space-8 rounded-xl font-mono-md text-[11px] font-bold shadow-clay-sm">Gửi lại lời mời</button>
                          )}
                        </div>
                      </div>
                    ))}
                    <button className="rounded-[24px] border-2 border-dashed border-border-default p-space-24 flex flex-col items-center justify-center gap-space-8 hover:bg-clay-mint/40 hover:border-tier-s transition shadow-clay-sm aspect-square">
                      <span className="material-symbols-rounded !text-[32px] text-text-tertiary">person_add</span>
                      <span className="font-mono-md text-[12px] text-text-tertiary font-bold">Mời thêm</span>
                      <span className="font-mono-md text-[10px] text-text-tertiary">Còn 2 slot</span>
                    </button>
                  </div>
                </section>
      
                {/* Recent shared orders */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden">
                  <div className="p-space-32 pb-space-16">
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">history</span>
                      ĐƠN ĐẶT HỘ GẦN ĐÂY
                    </span>
                    <h2 className="font-h2 text-h2 text-text-primary mt-space-8">3 đơn cho gia đình</h2>
                  </div>
                  <div className="divide-y divide-border-subtle">
                    {sharedOrders.map((o) => (
                      <div className="flex items-center gap-space-16 px-space-32 py-space-24">
                        <div className="w-12 h-12 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                          <span className="material-symbols-rounded fill !text-[22px] text-tier-s">{o.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8 mb-space-4">
                            <span className="font-display font-bold text-[14px] text-text-primary">{o.item}</span>
                            <span className="px-space-8 py-[2px] rounded-full bg-clay-butter border border-amber-deep/30 font-mono-md text-[10px] text-amber-deep font-bold">cho {o.who}</span>
                          </div>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{o.id} · {o.date}</span>
                        </div>
                        <span className="font-mono-md text-[14px] text-tier-s font-bold tabular-nums">{o.amount.toLocaleString('vi-VN')}đ → {o.who}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
      
              {/* Right: how it works + EASY mode CTA */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-butter rounded-[24px] shadow-clay-sm border-2 border-amber-deep/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[32px] text-amber-deep">elderly</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block mt-space-8">UI ĐƠN GIẢN</span>
                  <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-12">Cho người lớn tuổi</h4>
                  <p className="font-body-md text-[12px] text-text-secondary mb-space-12">Bà Năm có thể tự đặt với UI Đơn giản: font xl, voice guidance, default tiền mặt, 3 bước.</p>
                  <a href="/easy" className="w-full bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[13px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[1px]">
                    <span className="material-symbols-rounded fill !text-[16px]">accessibility_new</span>
                    Bật chế độ Đơn giản
                  </a>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">CÁCH HOẠT ĐỘNG</span>
                  <ol className="flex flex-col gap-space-12">
                    {[
                      { n: 1, label: 'Mời số điện thoại của thành viên', sub: 'Họ nhận SMS link tham gia' },
                      { n: 2, label: 'Bạn đặt hộ — chọn member', sub: 'Form như đặt cho mình' },
                      { n: 3, label: 'Tiền + GP về tài khoản họ', sub: 'Bạn thấy log, không thấy ví họ' },
                      { n: 4, label: 'Họ nhận SMS xác nhận', sub: 'Có thể duyệt/từ chối nếu muốn' },
                    ].map((s) => (
                      <li className="flex items-start gap-space-8">
                        <span className="w-7 h-7 rounded-full bg-clay-mint border border-tier-s/40 flex items-center justify-center font-mono-md text-[12px] text-tier-s font-extrabold shrink-0">{s.n}</span>
                        <div className="flex-1">
                          <span className="font-display font-bold text-[12px] text-text-primary block">{s.label}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary">{s.sub}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
      
                <a href="/help" className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 flex items-center gap-space-12 hover:shadow-clay">
                  <span className="material-symbols-rounded fill !text-[24px] text-info">help</span>
                  <div className="flex-1">
                    <span className="font-mono-md text-[11px] text-info uppercase tracking-wider font-bold block">FAQ</span>
                    <span className="font-display font-bold text-[14px] text-text-primary">Cháu giúp bà có an toàn?</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
