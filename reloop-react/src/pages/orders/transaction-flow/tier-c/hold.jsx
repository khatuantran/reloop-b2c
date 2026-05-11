import { cx } from '@/lib/cx';
import StepHero from '../../../../components/order/StepHero';
import TxnSidebar from '../../../../components/order/TxnSidebar';

export default function Hold() {
  const stepsTC = (active) => ['Cân tại nhà', 'Hiện khối lượng', 'Peek-check', 'HOLD ví ảo', 'OTP bàn giao', 'Hoàn tất'].map((label, i) => ({ label, state: (i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'pending') }));
  const advance = 60_000;
  const walletAvail = 528_400;
  const trust = 65;
  // % tạm ứng theo Trust Score
  const trustTiers = [
    { range: '0–30', label: 'Người mới', pct: 30, active: false },
    { range: '30–65', label: 'Đang tích lũy', pct: 50, active: false },
    { range: '65+', label: 'Đáng tin', pct: 90, active: true },
  ];
  const bomTimeline = [
    { icon: 'lock', t: 'Xác nhận OTP bàn giao → HOLD ví ảo', d: `Áp tạm ứng ~${advance.toLocaleString('vi-VN')}đ ngay khi bạn xác nhận`, state: 'active' },
    { icon: 'precision_manufacturing', t: 'Hub rã xác 16-24h', d: 'Cân BOM thực: đồng / sắt / nhôm / nhựa', state: 'pending' },
    { icon: 'scale', t: 'Verify mass-balance ≥ 90%', d: 'Đảm bảo không thất thoát vật liệu', state: 'pending' },
    { icon: 'price_check', t: 'Phần chênh về ZaloPay', d: 'BOM thực ≥ tạm ứng → trả thêm tự động', state: 'pending' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/transaction-flow/tier-c/peek-check" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại · Peek-check
            </a>
      
            <StepHero
              eyebrow="Tier C · Giao dịch 4/6 · Tạm ứng HOLD"
              title="Số tiền tạm ứng — HOLD ví ảo khi bạn xác nhận OTP"
              subtitle="Đây là số sẽ giữ trong ví ảo ngay sau khi bạn xác nhận OTP bàn giao ở bước kế · phần chênh về ZaloPay sau khi Hub rã xác (16-24h)"
              accent="tier-c"
              illustration="wallet"
              chips={[
                { icon: 'pending_actions', label: 'Tạm ứng', value: `~${advance.toLocaleString('vi-VN')}đ`, tone: 'butter' },
                { icon: 'lock', label: 'HOLD khi', value: 'Xác nhận OTP', tone: 'peach' },
                { icon: 'hourglass_top', label: 'BOM thực', value: '≤ 24h', tone: 'butter' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-40 flex flex-col gap-space-24 relative overflow-hidden">
                <svg className="absolute top-space-24 left-space-32 w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 4l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#E68A3F" opacity="0.45" /></svg>
                <svg className="absolute bottom-space-24 right-space-32 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#E8B340" opacity="0.4" /></svg>
      
                {/* Wallet mini-mockup */}
                <div className="bg-forest rounded-[24px] p-space-32 shadow-clay relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.07]" style={{ 'backgroundImage': 'radial-gradient(circle,#E8B340 1px,transparent 1px)', 'backgroundSize': '14px 14px' }}></div>
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono-md text-[10px] uppercase tracking-[0.2em] text-clay-butter font-bold flex items-center gap-space-8"><span className="material-symbols-rounded fill !text-[14px]">account_balance_wallet</span>VÍ RE-LOOP</span>
                    <span className="font-mono-md text-[11px] text-white/50">Linh · 0901-***-456</span>
                  </div>
                  <div className="relative mt-space-20 grid grid-cols-2 gap-space-16">
                    <div className="bg-white/5 rounded-2xl p-space-16">
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-white/40 font-bold block">Rút được (ZaloPay)</span>
                      <span className="font-display font-extrabold text-[24px] text-white tabular-nums block mt-space-4">{walletAvail.toLocaleString('vi-VN')}đ</span>
                    </div>
                    <div className="bg-clay-butter/15 rounded-2xl p-space-16 border border-dashed border-amber-deep/50 relative">
                      <span className="absolute top-space-12 right-space-12"><span className="material-symbols-rounded fill !text-[14px] text-clay-butter">hourglass_top</span></span>
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-clay-butter font-bold block">Sẽ HOLD sau khi xác nhận OTP</span>
                      <span className="font-display font-extrabold text-[24px] text-clay-butter tabular-nums block mt-space-4">~{advance.toLocaleString('vi-VN')}đ</span>
                    </div>
                  </div>
                  <p className="relative mt-space-16 font-mono-md text-[11px] text-white/50">HOLD = tạm ứng cam kết · <strong className="text-clay-butter">áp ngay khi bạn xác nhận OTP bàn giao</strong> (bước kế), chưa rút được cho tới khi Hub verify BOM thực. Quá 72h chưa verify → auto-release + 5% phạt chậm.</p>
                </div>
      
                {/* Trust → % tạm ứng */}
                <div className="bg-bg-base/50 rounded-2xl p-space-20">
                  <div className="flex items-center justify-between mb-space-16">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8"><span className="material-symbols-rounded fill !text-[14px] text-tier-c">verified_user</span>% TẠM ỨNG THEO TRUST SCORE</span>
                    <span className="font-mono-md text-[12px] text-tier-c font-bold">Trust {trust} → 90%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-space-12">
                    {trustTiers.map((t) => (
                      <div className={cx(['rounded-2xl border-2 p-space-12 text-center shadow-clay-sm', t.active ? 'bg-clay-peach border-tier-c' : 'bg-bg-elevated/60 border-border-subtle'])}>
                        <span className={cx(['font-display font-extrabold text-[22px] tabular-nums block', t.active ? 'text-tier-c' : 'text-text-tertiary'])}>{t.pct}%</span>
                        <span className="font-mono-md text-[10px] text-text-secondary block mt-space-4">Trust {t.range}</span>
                        <span className={cx(['font-mono-md text-[9px] block mt-[2px]', t.active ? 'text-tier-c font-bold' : 'text-text-tertiary'])}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-space-12 h-2 rounded-full bg-bg-base overflow-hidden"><div className="h-full rounded-full bg-tier-c" style={{ 'width': '90%' }}></div></div>
                  <p className="mt-space-8 font-mono-md text-[10px] text-text-tertiary">Đơn đúng → Trust tăng → lần sau tạm ứng cao hơn. Cơ chế chống "casing fraud".</p>
                </div>
      
                {/* Big amount + note */}
                <div className="bg-clay-butter border-2 border-amber-deep/40 rounded-2xl p-space-24 flex items-center gap-space-20 shadow-clay-sm relative overflow-hidden">
                  <svg className="absolute -bottom-2 right-space-32 w-10 h-10" viewBox="0 0 40 40" fill="none"><path d="M20 4l2.5 7.5h8l-6.5 5 2.5 7.5L20 26l-6.5 5 2.5-7.5-6.5-5h8z" fill="#E8B340" opacity="0.25" /></svg>
                  <div className="relative w-14 h-14 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[28px] text-amber-deep">lock</span></div>
                  <div className="relative flex-1 text-col">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block">TẠM ỨNG 90% · TRUST 65 — HOLD KHI BẠN XÁC NHẬN OTP BÀN GIAO</span>
                    <div className="font-display font-extrabold text-[44px] text-amber-deep tabular-nums leading-none mt-space-4">~{advance.toLocaleString('vi-VN')}đ</div>
                    <span className="font-body-md text-[12px] text-text-secondary">Xác nhận OTP ở bước kế để hoàn tất bàn giao Hub + áp HOLD vào ví ảo. BOM thực thấp hơn → bạn vẫn giữ nguyên tạm ứng. Cao hơn → phần chênh tự động về ZaloPay sau verify mass-balance ≥ 90%.</span>
                  </div>
                </div>
      
                <a href="/orders/transaction-flow/tier-c/otp" className="self-center px-space-32 py-[14px] rounded-2xl bg-tier-c text-white font-semibold text-[14px] shadow-clay hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">Đã hiểu → Xác nhận OTP bàn giao<span className="material-symbols-rounded !text-[18px]">arrow_forward</span></a>
              </section>
      
              <TxnSidebar
                collectorName="Chị Hoa" collectorAvatar="H" collectorTierLabel="Tier 2 · Hub Q.7 · Verified Tier C" collectorRating={4.9} collectorVehicle="Xe ba gác · 51B-67890"
                itemName="Mainboard PC ATX" itemHint={`1.0 kg · tạm ứng ~${advance.toLocaleString('vi-VN')}đ`} itemIcon="developer_board"
                accent="tier-c" avatarGradient="from-clay-peach to-tier-c" itemClay="bg-clay-peach"
                subSteps={stepsTC(4)}
              >
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">timeline</span>HÀNH TRÌNH TỚI BOM THỰC</span>
                  <ol className="relative">
                    <div className="absolute left-[13px] top-space-12 bottom-space-12 w-[2px] bg-border-subtle"></div>
                    <div className="flex flex-col gap-space-12">
                      {bomTimeline.map((x) => (
                        <li className="relative flex items-start gap-space-12">
                          <div className={cx(['relative z-10 w-7 h-7 rounded-lg flex items-center justify-center shadow-clay-sm shrink-0 border-2', x.state === 'active' ? 'bg-clay-butter text-amber-deep border-amber-deep animate-pulse' : 'bg-bg-base text-text-tertiary border-border-subtle'])}><span className="material-symbols-rounded fill !text-[14px]">{x.icon}</span></div>
                          <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{x.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block mt-[2px]">{x.d}</span></div>
                        </li>
                      ))}
                    </div>
                  </ol>
                </div>
              </TxnSidebar>
            </div>
          </div>
        </main>
    </>
  );
}
