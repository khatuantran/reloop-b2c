import StepHero from '../../../../components/order/StepHero';
import TxnSidebar from '../../../../components/order/TxnSidebar';

export default function WeightReveal() {
  const stepsTS = (active) => ['Cân tại nhà', 'Hiện khối lượng', 'Báo giá cuối', 'OTP xác nhận', 'Hoàn tất'].map((label, i) => ({ label, state: (i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'pending') }));
  const evidence = [
    { icon: 'photo_camera', t: 'Toàn cảnh', d: 'Vật phẩm trên cân' },
    { icon: 'center_focus_strong', t: 'Cận mặt cân', d: 'Số 3.2 kg rõ nét' },
    { icon: 'videocam', t: 'Video 12s', d: 'Đặt lên + ổn định' },
  ];
  const pricePerKg = 5_500;
  const weight = 3.2;
  const total = Math.round(weight * pricePerKg);
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/transaction-flow/tier-s/weighing" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại · Đang cân
            </a>
      
            <StepHero
              eyebrow="Tier S · Giao dịch 2/5 · Khối lượng thực"
              title="Đã cân xong — kết quả công khai"
              subtitle="Hiển thị real-time trên cân + ảnh chụp tự động lưu hệ thống · bạn xác nhận hoặc báo sai"
              accent="tier-s"
              illustration="recycle"
              chips={[
                { icon: 'monitor_weight', label: 'Hiển thị', value: 'Real-time', tone: 'mint' },
                { icon: 'photo_camera', label: 'Ảnh evidence', value: 'Đã lưu', tone: 'sky' },
                { icon: 'check_circle', label: 'Đối chiếu ước', value: 'Khớp ✓', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-40 flex flex-col gap-space-24 relative overflow-hidden">
                <svg className="absolute top-space-24 left-space-32 w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.5" /></svg>
                <svg className="absolute bottom-space-24 right-space-32 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#2BB36A" opacity="0.4" /></svg>
      
                {/* Big number + verdict */}
                <div className="flex items-center gap-space-32 flex-wrap justify-center text-center">
                  <div className="bg-clay-mint border-2 border-tier-s/30 rounded-[28px] px-space-48 py-space-32 shadow-clay relative overflow-hidden">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-8">KHỐI LƯỢNG THỰC</span>
                    <div className="font-display font-extrabold text-[80px] text-text-primary tabular-nums leading-none">3.2<span className="text-[28px] text-text-tertiary ml-space-4">kg</span></div>
                  </div>
                  <div className="flex flex-col gap-space-12 items-start text-left">
                    <span className="px-space-16 py-space-8 rounded-full bg-clay-mint border-2 border-tier-s/30 font-mono-md text-[12px] text-tier-s font-bold uppercase tracking-wider inline-flex items-center gap-space-8 shadow-clay-sm"><span className="material-symbols-rounded fill !text-[16px]">verified</span>Khớp ước tính ✓</span>
                    <p className="font-body-md text-[13px] text-text-secondary text-col max-w-[260px]">Ước tính ban đầu <strong className="text-text-primary">~3.2 kg</strong> · sai số 0%. Đơn giá PET hôm nay <strong className="text-tier-s">{pricePerKg.toLocaleString('vi-VN')}đ/kg</strong>.</p>
                  </div>
                </div>
      
                {/* Estimate vs actual bar */}
                <div className="bg-bg-base/50 rounded-2xl p-space-20">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-16"><span className="material-symbols-rounded fill !text-[14px] text-tier-s">compare_arrows</span>ĐỐI CHIẾU ƯỚC TÍNH ↔ THỰC TẾ</span>
                  <div className="flex flex-col gap-space-12">
                    <div>
                      <div className="flex justify-between mb-space-4"><span className="font-body-md text-[12px] text-text-secondary">Ước tính khi đặt đơn</span><span className="font-mono-md text-[12px] text-text-primary font-bold tabular-nums">~3.2 kg</span></div>
                      <div className="h-3 rounded-full bg-bg-base overflow-hidden"><div className="h-full rounded-full bg-tier-s/40" style={{ 'width': '97%' }}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-space-4"><span className="font-body-md text-[12px] text-text-secondary">Cân thực tế tại nhà</span><span className="font-mono-md text-[12px] text-tier-s font-bold tabular-nums">3.2 kg</span></div>
                      <div className="h-3 rounded-full bg-bg-base overflow-hidden"><div className="h-full rounded-full bg-tier-s" style={{ 'width': '100%' }}></div></div>
                    </div>
                  </div>
                  <div className="mt-space-16 flex items-center gap-space-12 p-space-12 bg-clay-mint rounded-xl border border-tier-s/20">
                    <span className="material-symbols-rounded fill !text-[18px] text-tier-s shrink-0">payments</span>
                    <p className="font-body-md text-[12px] text-text-secondary text-col">Tạm tính: <strong className="text-text-primary tabular-nums">3.2 kg × {pricePerKg.toLocaleString('vi-VN')}đ = {total.toLocaleString('vi-VN')}đ</strong> giá thị trường · bạn nhận 75% — chốt ở bước Báo giá.</p>
                  </div>
                </div>
      
                {/* Evidence thumbnails */}
                <div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px] text-info">photo_library</span>ẢNH EVIDENCE ĐÃ LƯU VÀO LOG</span>
                  <div className="grid grid-cols-3 gap-space-12">
                    {evidence.map((e) => (
                      <div className="h-[120px] rounded-2xl bg-clay-mint border-2 border-tier-s/20 shadow-clay-sm flex flex-col items-center justify-center gap-space-8 relative overflow-hidden">
                        <svg className="absolute top-space-8 right-space-8 w-4 h-4" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" fill="#2BB36A" opacity="0.5" /></svg>
                        <div className="w-9 h-9 rounded-xl bg-bg-elevated flex items-center justify-center shadow-clay-sm"><span className="material-symbols-rounded fill !text-[18px] text-tier-s">{e.icon}</span></div>
                        <span className="font-display font-bold text-[12px] text-text-primary">{e.t}</span>
                        <span className="font-mono-md text-[9px] text-text-tertiary">{e.d}</span>
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* Actions */}
                <div className="flex gap-space-12 flex-wrap justify-center">
                  <button className="px-space-24 py-space-12 rounded-2xl text-tier-h border-2 border-tier-h/30 bg-clay-blush hover:shadow-clay-sm font-medium text-[13px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[16px]">report</span>Báo sai (−5 Trust)</button>
                  <a href="/orders/transaction-flow/tier-s/price" className="px-space-32 py-[14px] rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[18px]">check</span>Khớp ✓ → Báo giá</a>
                </div>
              </section>
      
              <TxnSidebar
                collectorName="Anh Tuấn" collectorAvatar="T" collectorTierLabel="Tier 1 · Hub Q.7" collectorRating={4.8} collectorVehicle="Xe máy Honda Wave · 51A-12345"
                itemName="Chai PET 500ml" itemHint="18 chai · 3.2 kg (đã cân)" itemIcon="water_bottle"
                accent="tier-s" avatarGradient="from-clay-mint to-tier-s" itemClay="bg-clay-mint"
                subSteps={stepsTS(2)}
              >
                <div className="bg-clay-blush/40 rounded-[24px] shadow-clay-sm border border-tier-h/20 p-space-20">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">help</span>SỐ CÂN KHÔNG ĐÚNG?</span>
                  <p className="font-body-md text-[12px] text-text-secondary text-col">Bấm <strong className="text-tier-h">Báo sai</strong> → collector cân lại trước mặt bạn. Nếu vẫn lệch &gt; 5%, mở tranh chấp trong 48h kèm ảnh evidence — RE-LOOP review trong 24h.</p>
                  <div className="mt-space-12 flex items-center gap-space-8 font-mono-md text-[11px] text-text-tertiary"><span className="material-symbols-rounded !text-[14px] text-tier-s">verified</span>Cân kiểm định QTĐLVN 252 · tem niêm phong còn nguyên</div>
                </div>
              </TxnSidebar>
            </div>
          </div>
        </main>
    </>
  );
}
