import { cx } from '@/lib/cx';
import StepHero from '../../../../components/order/StepHero';
import TxnSidebar from '../../../../components/order/TxnSidebar';

export default function PeekCheck() {
  const stepsTC = (active) => ['Cân tại nhà', 'Hiện khối lượng', 'Peek-check', 'HOLD ví ảo', 'OTP bàn giao', 'Hoàn tất'].map((label, i) => ({ label, state: (i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'pending') }));
  const fraud = [
    { icon: 'block', t: 'Chống tráo ruột', d: 'Verify không có gạch/xi măng/sắt vụn nhồi trong vỏ vật phẩm.' },
    { icon: 'photo_camera', t: 'Evidence cho Hub', d: 'Ảnh + video peek-check lưu vào chuỗi hành trình mẫu, công khai trên app.' },
    { icon: 'shield_person', t: 'Bắt buộc Trust < 50', d: 'User mới làm peek-check tất cả đơn Tier C; Trust cao có thể bỏ qua ngẫu nhiên.' },
  ];
  const checklist = [
    { icon: 'content_cut', t: 'Xé góc nhỏ vỏ ngoài', d: 'Mở ~2cm để nhìn lõi', done: true },
    { icon: 'visibility', t: 'Soi ruột bên trong', d: 'Không gạch/xi măng/sắt vụn', done: true },
    { icon: 'photo_camera', t: 'Chụp 3 ảnh + video 8s', d: 'Lưu vào log chuỗi hành trình', done: false },
    { icon: 'fact_check', t: 'Đối chiếu khai báo', d: 'Khớp ảnh khi đặt đơn', done: false },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/transaction-flow/tier-c/weight-reveal" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại · Khối lượng
            </a>
      
            <StepHero
              eyebrow="Tier C · Giao dịch 3/6 · Anti-fraud Peek-check"
              title="Peek-check — kiểm tra mẫu chống tráo ruột"
              subtitle="Collector xé góc nhỏ vỏ vật phẩm + chụp ảnh evidence · verify trong ~8 giây"
              accent="tier-c"
              illustration="hub"
              chips={[
                { icon: 'find_in_page', label: 'Kiểm tra', value: 'Xé góc vỏ', tone: 'peach' },
                { icon: 'photo_camera', label: 'Evidence', value: '3 ảnh + video', tone: 'butter' },
                { icon: 'verified', label: 'Kết quả', value: 'OK ✓', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-40 flex flex-col gap-space-24 relative overflow-hidden">
                <svg className="absolute top-space-24 left-space-32 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#E68A3F" opacity="0.4" /></svg>
                <svg className="absolute bottom-space-24 right-space-32 w-9 h-9" viewBox="0 0 36 36" fill="none"><path d="M18 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#E8B340" opacity="0.32" /></svg>
      
                <div className="flex items-center gap-space-12 relative">
                  <div className="relative w-14 h-14 shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-amber-deep/15 animate-ping"></div>
                    <div className="relative w-full h-full rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm"><span className="material-symbols-rounded fill text-amber-deep animate-pulse !text-[28px]">policy</span></div>
                  </div>
                  <div className="flex-1 text-col">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold">ĐANG PEEK-CHECK · ANTI-FRAUD</span>
                    <h2 className="font-h2 text-h2 text-text-primary">Chị Hoa đang kiểm tra mẫu</h2>
                  </div>
                  <span className="px-space-12 py-[5px] rounded-full bg-clay-butter border border-amber-deep/30 font-mono-md text-[10px] text-amber-deep font-bold uppercase tracking-wider flex items-center gap-space-4 shrink-0"><span className="w-[6px] h-[6px] rounded-full bg-amber-deep animate-pulse"></span>~8s</span>
                </div>
      
                {/* Verify checklist */}
                <div className="bg-clay-butter/50 rounded-2xl border border-amber-deep/20 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8 mb-space-16"><span className="material-symbols-rounded fill !text-[14px]">checklist</span>QUY TRÌNH PEEK-CHECK</span>
                  <div className="grid grid-cols-2 gap-space-12">
                    {checklist.map((c, i) => (
                      <div className={cx(['flex items-start gap-space-12 p-space-12 rounded-2xl border-2 shadow-clay-sm', c.done ? 'bg-clay-butter border-amber-deep/30' : (i === 2 ? 'bg-bg-elevated border-amber-deep/40' : 'bg-bg-base/50 border-border-subtle')])}>
                        <div className={cx(['w-8 h-8 rounded-xl flex items-center justify-center shadow-clay-sm shrink-0', c.done ? 'bg-amber-deep text-white' : (i === 2 ? 'bg-clay-butter text-amber-deep animate-pulse' : 'bg-bg-elevated text-text-tertiary')])}><span className="material-symbols-rounded fill !text-[16px]">{c.done ? 'check' : c.icon}</span></div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{c.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block mt-[2px]">{c.d}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* Result verdict */}
                <div className="bg-clay-mint rounded-2xl border-2 border-tier-s/30 p-space-24 flex items-center gap-space-16 shadow-clay-sm relative overflow-hidden">
                  <svg className="absolute -bottom-2 right-space-32 w-10 h-10" viewBox="0 0 40 40" fill="none"><path d="M20 4l2.5 7.5h8l-6.5 5 2.5 7.5L20 26l-6.5 5 2.5-7.5-6.5-5h8z" fill="#52E08D" opacity="0.2" /></svg>
                  <div className="relative w-12 h-12 rounded-2xl bg-tier-s flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[24px] text-white">verified</span></div>
                  <div className="relative flex-1 text-col">
                    <span className="font-mono-md text-[10px] uppercase tracking-wider text-tier-s font-bold block">KẾT QUẢ PEEK-CHECK</span>
                    <span className="font-display font-extrabold text-[18px] text-text-primary block mt-[2px]">Không phát hiện gian lận ✓</span>
                    <span className="font-body-md text-[12px] text-text-secondary">Ruột vật phẩm đúng linh kiện điện tử · evidence đã lưu vào chuỗi hành trình → tiếp tục tạm ứng HOLD ví ảo.</span>
                  </div>
                </div>
      
                {/* Evidence thumbs */}
                <div className="grid grid-cols-4 gap-space-12">
                  {['photo_camera', 'photo_camera', 'photo_camera', 'videocam'].map((ic, i) => (
                    <div className="h-[88px] rounded-2xl bg-clay-butter border-2 border-amber-deep/20 shadow-clay-sm flex flex-col items-center justify-center gap-space-4">
                      <span className="material-symbols-rounded fill !text-[20px] text-amber-deep">{ic}</span>
                      <span className="font-mono-md text-[9px] text-amber-deep font-bold">{i < 3 ? `Ảnh ${i + 1}` : 'Video 8s'}</span>
                    </div>
                  ))}
                </div>
      
                <a href="/orders/transaction-flow/tier-c/hold" className="self-center px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Tiếp tục → HOLD ví ảo<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
              </section>
      
              <TxnSidebar
                collectorName="Chị Hoa" collectorAvatar="H" collectorTierLabel="Tier 2 · Hub Q.7 · Verified Tier C" collectorRating={4.9} collectorVehicle="Xe ba gác · 51B-67890"
                itemName="Mainboard PC ATX" itemHint="1.0 kg · đang verify mẫu" itemIcon="developer_board"
                accent="tier-c" avatarGradient="from-clay-peach to-tier-c" itemClay="bg-clay-peach"
                subSteps={stepsTC(3)}
              >
                <div className="bg-clay-butter rounded-[24px] shadow-clay-sm border-2 border-amber-deep/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">verified_user</span>PEEK-CHECK LÀ GÌ?</span>
                  <div className="flex flex-col gap-space-8">
                    {fraud.map((f) => (
                      <div className="flex items-start gap-space-12 p-space-12 bg-bg-elevated/70 rounded-xl">
                        <div className="w-8 h-8 rounded-xl bg-clay-butter flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[16px] text-amber-deep">{f.icon}</span></div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{f.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block mt-[2px]">{f.d}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              </TxnSidebar>
            </div>
          </div>
        </main>
    </>
  );
}
