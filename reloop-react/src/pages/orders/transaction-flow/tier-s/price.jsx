import { cx } from '@/lib/cx';
import StepHero from '../../../../components/order/StepHero';
import TxnSidebar from '../../../../components/order/TxnSidebar';

export default function Price() {
  const stepsTS = (active) => ['Cân tại nhà', 'Hiện khối lượng', 'Báo giá cuối', 'OTP xác nhận', 'Hoàn tất'].map((label, i) => ({ label, state: (i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'pending') }));
  const total = 17_600;
  const userShare = 13_200;
  const hubShare = Math.round(total * 0.15);
  const reloopShare = total - userShare - hubShare;
  const split = [
    { who: 'Bạn nhận', pct: 75, amount: userShare, strong: true, accent: 'text-tier-s', bar: 'bg-tier-s', clay: 'bg-clay-mint' },
    { who: 'Hub thu gom', pct: 15, amount: hubShare, strong: false, accent: 'text-info', bar: 'bg-info', clay: 'bg-clay-sky' },
    { who: 'Phí RE-LOOP', pct: 10, amount: reloopShare, strong: false, accent: 'text-amber-deep', bar: 'bg-amber-deep', clay: 'bg-clay-butter' },
  ];
  // so sánh với đồng nát truyền thống (≈ 2.800đ/kg, trả tiền mặt, tự mang ra)
  const traditional = Math.round(3.2 * 2_800);
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/transaction-flow/tier-s/weight-reveal" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại · Khối lượng
            </a>
      
            <StepHero
              eyebrow="Tier S · Giao dịch 3/5 · Giá cuối"
              title="Sẵn sàng chuyển tiền ZaloPay"
              subtitle="Giá CHẮC CHẮN không thay đổi · tiền vào ví trong 60 giây sau khi bạn xác nhận OTP"
              accent="tier-s"
              illustration="wallet"
              chips={[
                { icon: 'paid', label: 'Giá thị trường', value: `${total.toLocaleString('vi-VN')}đ`, tone: 'mint' },
                { icon: 'pie_chart', label: 'Bạn nhận', value: '75%', tone: 'sky' },
                { icon: 'bolt', label: 'ZaloPay', value: '60 giây', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 flex flex-col gap-space-24 relative overflow-hidden">
                <svg className="absolute top-space-24 left-space-32 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#2BB36A" opacity="0.35" /></svg>
      
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8 relative"><span className="material-symbols-rounded fill !text-[16px]">payments</span>GIÁ CUỐI · CHẮC CHẮN</span>
      
                <div className="bg-clay-mint border-2 border-tier-s/30 rounded-[28px] p-space-40 flex flex-col items-center text-center gap-space-12 shadow-clay relative overflow-hidden">
                  <svg className="absolute top-space-16 right-space-24 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#2BB36A" opacity="0.4" /></svg>
                  <svg className="absolute bottom-space-12 left-space-24 w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.4" /></svg>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">BẠN NHẬN (75% GIÁ THỊ TRƯỜNG)</span>
                  <div className="font-display font-extrabold text-[64px] text-text-primary tabular-nums leading-none">{userShare.toLocaleString('vi-VN')}đ</div>
                  <span className="font-body-md text-[13px] text-text-secondary text-col">3.2 kg × 5.500đ/kg = {total.toLocaleString('vi-VN')}đ giá thị trường · phí RE-LOOP chịu · vào ZaloPay ≤ 60s sau OTP</span>
                </div>
      
                {/* Stacked split bar */}
                <div className="bg-bg-base/50 rounded-2xl p-space-20">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px] text-tier-s">pie_chart</span>CHIA {total.toLocaleString('vi-VN')}đ GIÁ THỊ TRƯỜNG</span>
                  <div className="flex h-4 rounded-full overflow-hidden mb-space-12">
                    {split.map((s) => <div className={s.bar} style={{ 'width': `${s.pct}%` }}></div>)}
                  </div>
                  <div className="grid grid-cols-3 gap-space-12">
                    {split.map((s) => (
                      <div className={cx(['rounded-2xl border-2 border-border-subtle p-space-12 shadow-clay-sm', s.clay])}>
                        <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold block', s.accent])}>{s.who}</span>
                        <span className="font-display font-extrabold text-[18px] text-text-primary tabular-nums block mt-space-4">{s.amount.toLocaleString('vi-VN')}đ</span>
                        <span className={cx(['font-mono-md text-[10px] block', s.accent])}>{s.pct}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-space-12 font-mono-md text-[10px] text-text-tertiary">Hub + RE-LOOP lo toàn bộ logistics, cân kiểm định, thanh toán — bạn không trả phí, không tự mang đi.</p>
                </div>
      
                {/* So sánh */}
                <div className="bg-clay-mint rounded-2xl border-2 border-tier-s/30 p-space-20 flex items-center gap-space-16 shadow-clay-sm relative overflow-hidden">
                  <svg className="absolute -bottom-2 right-space-24 w-10 h-10" viewBox="0 0 40 40" fill="none"><path d="M20 4l2.5 7.5h8l-6.5 5 2.5 7.5L20 26l-6.5 5 2.5-7.5-6.5-5h8z" fill="#52E08D" opacity="0.2" /></svg>
                  <div className="relative flex flex-col items-center text-center px-space-12">
                    <span className="font-mono-md text-[9px] uppercase tracking-wider text-text-tertiary font-bold">Đồng nát thường</span>
                    <span className="font-display font-bold text-[16px] text-text-tertiary tabular-nums line-through mt-space-4">~{traditional.toLocaleString('vi-VN')}đ</span>
                    <span className="font-mono-md text-[9px] text-text-tertiary">tiền mặt · tự mang ra</span>
                  </div>
                  <span className="material-symbols-rounded !text-[20px] text-tier-s shrink-0">trending_up</span>
                  <div className="relative flex flex-col items-center text-center px-space-12">
                    <span className="font-mono-md text-[9px] uppercase tracking-wider text-tier-s font-bold">Qua RE-LOOP</span>
                    <span className="font-display font-extrabold text-[20px] text-tier-s tabular-nums mt-space-4">{userShare.toLocaleString('vi-VN')}đ</span>
                    <span className="font-mono-md text-[9px] text-text-secondary">ZaloPay 60s · thu tận nhà</span>
                  </div>
                  <div className="relative flex-1 text-col text-right">
                    <span className="font-mono-md text-[10px] text-text-tertiary block">Cao hơn</span>
                    <span className="font-display font-extrabold text-[18px] text-tier-s tabular-nums">+{Math.round((userShare / traditional - 1) * 100)}%</span>
                  </div>
                </div>
      
                <a href="/orders/transaction-flow/tier-s/otp" className="self-end px-space-32 py-[14px] rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Tiếp tục xác nhận → OTP<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
              </section>
      
              <TxnSidebar
                collectorName="Anh Tuấn" collectorAvatar="T" collectorTierLabel="Tier 1 · Hub Q.7" collectorRating={4.8} collectorVehicle="Xe máy Honda Wave · 51A-12345"
                itemName="Chai PET 500ml" itemHint="3.2 kg · 5.500đ/kg" itemIcon="water_bottle"
                accent="tier-s" avatarGradient="from-clay-mint to-tier-s" itemClay="bg-clay-mint"
                subSteps={stepsTS(3)}
              >
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-20 flex items-center gap-space-12">
                  <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[18px] text-tier-s">bolt</span></div>
                  <div className="flex-1 text-col"><span className="font-display font-bold text-[13px] text-text-primary block">ZaloPay 60 giây</span><span className="font-mono-md text-[11px] text-text-tertiary">Tự động sau OTP · không trừ phí</span></div>
                </div>
              </TxnSidebar>
            </div>
          </div>
        </main>
    </>
  );
}
