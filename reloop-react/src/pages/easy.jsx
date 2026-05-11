import RecycleScene from '../components/illustrations/RecycleScene';
import CollectorScene from '../components/illustrations/CollectorScene';
import GreenPointsBadge from '../components/illustrations/GreenPointsBadge';

export default function Easy() {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-clay-mint via-bg-base to-clay-butter">
          {/* Top bar */}
          <header className="px-[80px] py-space-32 flex items-center justify-between max-w-[1280px] mx-auto">
            <div className="flex items-center gap-space-16">
              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-lime to-lime-deep shadow-clay-lime flex items-center justify-center">
                <span className="material-symbols-rounded fill text-text-on-lime !text-[36px]">recycling</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-[32px] text-text-primary leading-none block">RE-LOOP</span>
                <span className="font-mono-md text-[14px] text-text-tertiary leading-none mt-[4px] block">Chế độ Đơn giản</span>
              </div>
            </div>
            <div className="flex items-center gap-space-12">
              <button className="bg-clay-mint border-2 border-tier-s/40 px-space-24 py-space-16 rounded-3xl shadow-clay-sm flex items-center gap-space-12 hover:shadow-clay transition">
                <span className="material-symbols-rounded fill !text-[28px] text-tier-s">volume_up</span>
                <span className="font-display font-extrabold text-[18px] text-tier-s">Hướng dẫn giọng nói</span>
              </button>
              <a href="/" className="bg-bg-elevated border-2 border-border-subtle px-space-24 py-space-16 rounded-3xl shadow-clay-sm flex items-center gap-space-12 hover:shadow-clay transition">
                <span className="material-symbols-rounded fill !text-[28px] text-text-secondary">accessibility</span>
                <span className="font-display font-bold text-[18px] text-text-secondary">Đổi sang chế độ Đầy đủ</span>
              </a>
            </div>
          </header>
      
          {/* Hero greeting */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48">
            <div className="bg-bg-elevated rounded-[40px] shadow-clay border border-border-subtle p-space-48 grid grid-cols-[1.2fr_1fr] gap-space-32 items-center">
              <div>
                <span className="font-mono-md text-[16px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">CHÀO BÀ NĂM 👵</span>
                <h1 className="font-display-l text-[72px] font-extrabold leading-[1] tracking-tight text-text-primary mb-space-16">Bà cần gì hôm nay?</h1>
                <p className="font-body-lg text-[22px] text-text-secondary leading-relaxed">Chỉ <strong className="text-tier-s">3 bước</strong> đơn giản. Cháu đã cài sẵn — bà chỉ cần bấm nút lớn.</p>
              </div>
              <div className="relative h-[280px]">
                <RecycleScene className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </section>
      
          {/* 3 BIG buttons */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48">
            <div className="grid grid-cols-3 gap-space-24">
              <button className="bg-lime rounded-[32px] shadow-clay-lime border-4 border-lime-deep p-space-48 flex flex-col items-center gap-space-16 hover:-translate-y-[4px] transition relative overflow-hidden">
                <div className="w-24 h-24 rounded-3xl bg-bg-elevated flex items-center justify-center shadow-clay">
                  <span className="material-symbols-rounded fill !text-[64px] text-tier-s">add_shopping_cart</span>
                </div>
                <span className="font-display font-extrabold text-[40px] text-text-on-lime leading-tight">BÁN RÁC</span>
                <span className="font-body-lg text-[20px] text-text-on-lime/80 text-center">Chai nhựa · Carton · Lon</span>
                <span className="absolute top-space-16 right-space-16 px-space-12 py-space-4 rounded-full bg-text-primary text-white font-mono-md text-[14px] font-bold">PHỔ BIẾN</span>
              </button>
      
              <button className="bg-clay-butter rounded-[32px] shadow-clay border-4 border-amber-deep p-space-48 flex flex-col items-center gap-space-16 hover:-translate-y-[4px] transition">
                <div className="w-24 h-24 rounded-3xl bg-bg-elevated flex items-center justify-center shadow-clay">
                  <span className="material-symbols-rounded fill !text-[64px] text-amber-deep">history</span>
                </div>
                <span className="font-display font-extrabold text-[40px] text-text-primary leading-tight">XEM ĐƠN</span>
                <span className="font-body-lg text-[20px] text-text-secondary text-center">Đơn cũ · Tiền đã nhận</span>
              </button>
      
              <a href="tel:19007356677" className="bg-clay-blush rounded-[32px] shadow-clay border-4 border-tier-h p-space-48 flex flex-col items-center gap-space-16 hover:-translate-y-[4px] transition">
                <div className="w-24 h-24 rounded-3xl bg-bg-elevated flex items-center justify-center shadow-clay">
                  <span className="material-symbols-rounded fill !text-[64px] text-tier-h">call</span>
                </div>
                <span className="font-display font-extrabold text-[40px] text-text-primary leading-tight">GỌI NGAY</span>
                <span className="font-body-lg text-[20px] text-text-secondary text-center">1900-RELOOP · Miễn phí</span>
              </a>
            </div>
          </section>
      
          {/* 3-step explainer */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48">
            <h2 className="font-display-l text-[48px] font-extrabold text-text-primary text-center mb-space-32">Bán rác chỉ <span className="text-tier-s">3 bước</span></h2>
            <div className="grid grid-cols-3 gap-space-24">
              {[
                { n: 1, label: 'CHỤP ẢNH', desc: 'Bà chụp 1 ảnh rác — máy nhận biết tự động', icon: 'photo_camera', illustration: 'recycle' },
                { n: 2, label: 'COLLECTOR ĐẾN', desc: 'Anh thanh niên RE-LOOP đến cân tại nhà', icon: 'home', illustration: 'collector' },
                { n: 3, label: 'NHẬN TIỀN', desc: 'Tiền vào ZaloPay hoặc tiền mặt — bà chọn', icon: 'paid', illustration: 'gp' },
              ].map((s) => (
                <div className="bg-bg-elevated rounded-[32px] shadow-clay border-2 border-border-subtle overflow-hidden">
                  <div className="relative h-[200px] bg-gradient-to-br from-clay-mint to-clay-butter">
                    {s.illustration === 'recycle' && <RecycleScene className="absolute inset-0 w-full h-full" />}
                    {s.illustration === 'collector' && <CollectorScene className="absolute inset-0 w-full h-full" />}
                    {s.illustration === 'gp' && <GreenPointsBadge className="absolute inset-0 w-full h-full" />}
                    <span className="absolute top-space-16 left-space-16 w-16 h-16 rounded-2xl bg-tier-s text-white flex items-center justify-center font-display font-extrabold text-[32px] shadow-clay">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-space-32">
                    <h3 className="font-display font-extrabold text-[28px] text-text-primary leading-tight">{s.label}</h3>
                    <p className="font-body-lg text-[18px] text-text-secondary mt-space-12 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
      
          {/* Trust marks for elderly */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48">
            <div className="bg-clay-mint rounded-[32px] shadow-clay border-2 border-tier-s/30 p-space-48 grid grid-cols-3 gap-space-24">
              <div className="flex items-center gap-space-16">
                <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-s">verified_user</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-[20px] text-text-primary block">An toàn</span>
                  <span className="font-body-lg text-[16px] text-text-secondary">Collector có huy hiệu</span>
                </div>
              </div>
              <div className="flex items-center gap-space-16">
                <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-s">attach_money</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-[20px] text-text-primary block">Giá đúng</span>
                  <span className="font-body-lg text-[16px] text-text-secondary">Theo giá thị trường</span>
                </div>
              </div>
              <div className="flex items-center gap-space-16">
                <div className="w-16 h-16 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-s">support_agent</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-[20px] text-text-primary block">CS 24/7</span>
                  <span className="font-body-lg text-[16px] text-text-secondary">1900-RELOOP miễn phí</span>
                </div>
              </div>
            </div>
          </section>
      
          {/* Big phone CTA */}
          <section className="max-w-[1280px] mx-auto px-[80px] mb-space-48 text-center">
            <p className="font-body-lg text-[24px] text-text-secondary mb-space-16">Bà cần giúp? Bấm nút này</p>
            <a href="tel:19007356677" className="inline-flex items-center gap-space-16 bg-tier-h text-white px-space-48 py-space-32 rounded-3xl shadow-clay text-[40px] font-display font-extrabold hover:-translate-y-[4px] transition">
              <span className="material-symbols-rounded fill !text-[56px]">call</span>
              1900-RELOOP
            </a>
            <p className="font-mono-md text-[16px] text-text-tertiary mt-space-12">Miễn phí 6h-22h · Nói tiếng Việt</p>
          </section>
        </main>
    </>
  );
}
