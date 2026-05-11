import { cx } from '@/lib/cx';
import StepHero from '../../../../components/order/StepHero';
import TxnSidebar from '../../../../components/order/TxnSidebar';

export default function Otp() {
  const stepsTS = (active) => ['Cân tại nhà', 'Hiện khối lượng', 'Báo giá cuối', 'OTP xác nhận', 'Hoàn tất'].map((label, i) => ({ label, state: (i + 1 < active ? 'done' : i + 1 === active ? 'active' : 'pending') }));
  const otp = ['1', '2', '3', '4', '5', '6'];
  const sec = [
    { icon: 'sms', t: 'OTP gửi qua SMS', d: 'Tới số đã đăng ký 0901-***-456' },
    { icon: 'pin', t: 'Bạn nhập 6 số', d: 'Hết hạn sau 5 phút' },
    { icon: 'verified_user', t: 'Collector mới nhận tiền', d: 'Không OTP → giao dịch không hoàn tất' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/transaction-flow/tier-s/price" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Quay lại · Giá cuối
            </a>
      
            <StepHero
              eyebrow="Tier S · Giao dịch 4/5 · OTP xác nhận"
              title="Nhập OTP RE-LOOP — xác nhận giao dịch"
              subtitle="OTP gửi qua SMS · collector chỉ nhận tiền sau khi bạn nhập đúng"
              accent="tier-s"
              illustration="otp"
              chips={[
                { icon: 'sms', label: 'OTP qua', value: 'SMS', tone: 'mint' },
                { icon: 'lock', label: 'Bảo mật', value: '6 số · 5 phút', tone: 'mint' },
                { icon: 'shield', label: 'Sign-off', value: 'Bắt buộc', tone: 'mint' },
              ]}
            />
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-40 flex flex-col gap-space-24 relative overflow-hidden">
                <svg className="absolute top-space-24 right-space-32 w-9 h-9" viewBox="0 0 36 36" fill="none"><path d="M18 9a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1v-3a5 5 0 0 1 5-5z" fill="#2BB36A" opacity="0.16" /></svg>
                <svg className="absolute bottom-space-24 left-space-32 w-7 h-7" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="4" fill="#52E08D" opacity="0.32" /></svg>
      
                <div className="flex items-center gap-space-12 relative">
                  <div className="w-14 h-14 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[28px] text-tier-s">lock</span></div>
                  <div className="flex-1 text-col">
                    <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold">OTP XÁC NHẬN GIAO DỊCH</span>
                    <h2 className="font-h2 text-h2 text-text-primary">Nhập OTP RE-LOOP để hoàn tất</h2>
                  </div>
                  <span className="px-space-12 py-[5px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold uppercase tracking-wider flex items-center gap-space-4 shrink-0"><span className="material-symbols-rounded !text-[12px]">timer</span>4:32</span>
                </div>
      
                <div className="grid grid-cols-[1fr_1.1fr] gap-space-20 items-center">
                  {/* SMS phone mockup */}
                  <div className="bg-forest rounded-[24px] p-space-20 shadow-clay relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.07]" style={{ 'backgroundImage': 'radial-gradient(circle,#52E08D 1px,transparent 1px)', 'backgroundSize': '14px 14px' }}></div>
                    <div className="relative flex items-center justify-between mb-space-12">
                      <span className="font-mono-md text-[9px] uppercase tracking-wider text-lime font-bold flex items-center gap-space-4"><span className="material-symbols-rounded !text-[12px]">sms</span>TIN NHẮN</span>
                      <span className="font-mono-md text-[9px] text-white/40">0901-***-456 · vừa xong</span>
                    </div>
                    <div className="relative bg-white/10 rounded-2xl rounded-tl-md p-space-12">
                      <span className="font-mono-md text-[10px] text-lime font-bold block mb-space-4">RE-LOOP</span>
                      <p className="font-body-md text-[11px] text-white/80 leading-relaxed">Mã OTP xác nhận giao dịch <strong className="text-white">RL-…1234</strong> nhận <strong className="text-lime">13.200đ</strong>: <strong className="text-white font-mono-md tracking-[0.2em]">123456</strong>. Hết hạn 5 phút. Không chia sẻ.</p>
                    </div>
                  </div>
                  {/* OTP cells */}
                  <div className="flex flex-col gap-space-12">
                    <span className="font-mono-md text-[11px] text-text-secondary">Đã gửi tới <strong className="text-text-primary">0901-***-456</strong> · mã <code className="font-mono-md text-tier-s font-semibold">123456</code></span>
                    <div className="flex gap-space-8">
                      {otp.map((d) => (
                        <div className="w-12 h-16 flex items-center justify-center rounded-2xl font-mono-md text-[26px] font-bold border-2 bg-clay-mint text-text-primary border-tier-s shadow-clay-sm">{d}</div>
                      ))}
                    </div>
                    <button className="self-start font-mono-md text-[11px] text-tier-s font-bold inline-flex items-center gap-space-4 hover:underline"><span className="material-symbols-rounded !text-[14px]">refresh</span>Gửi lại mã (00:42)</button>
                  </div>
                </div>
      
                {/* Sign-off flow mini */}
                <div className="bg-bg-base/50 rounded-2xl p-space-20">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold flex items-center gap-space-8 mb-space-16"><span className="material-symbols-rounded fill !text-[14px] text-tier-s">bolt</span>SAU KHI BẠN XÁC NHẬN OTP</span>
                  <div className="flex items-center gap-space-8">
                    {[
                      { icon: 'pin', t: 'Bạn nhập 6 số' },
                      { icon: 'verified', t: 'Hệ thống verify' },
                      { icon: 'account_balance_wallet', t: 'Collector nhận tiền' },
                      { icon: 'bolt', t: 'ZaloPay ≤ 60s' },
                    ].map((s, i, arr) => (
                      <>
                        <div className="flex-1 flex flex-col items-center gap-space-8 text-center">
                          <div className={cx(['w-9 h-9 rounded-xl flex items-center justify-center shadow-clay-sm', i === 0 ? 'bg-tier-s text-white animate-pulse' : 'bg-clay-mint text-tier-s'])}><span className="material-symbols-rounded fill !text-[16px]">{s.icon}</span></div>
                          <span className="font-mono-md text-[10px] text-text-secondary leading-tight">{s.t}</span>
                        </div>
                        {i < arr.length - 1 && <span className="material-symbols-rounded !text-[14px] text-tier-s/50 -mt-space-16">arrow_forward</span>}
                      </>
                    ))}
                  </div>
                </div>
      
                <a href="/orders/transaction-flow/tier-s/done" className="self-center px-space-32 py-[14px] rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8"><span className="material-symbols-rounded !text-[18px]">check</span>Xác nhận giao dịch</a>
              </section>
      
              <TxnSidebar
                collectorName="Anh Tuấn" collectorAvatar="T" collectorTierLabel="Tier 1 · Hub Q.7" collectorRating={4.8} collectorVehicle="Xe máy Honda Wave · 51A-12345"
                itemName="Chai PET 500ml" itemHint="3.2 kg · nhận 13.200đ" itemIcon="water_bottle"
                accent="tier-s" avatarGradient="from-clay-mint to-tier-s" itemClay="bg-clay-mint"
                subSteps={stepsTS(4)}
              >
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-12"><span className="material-symbols-rounded fill !text-[14px]">shield</span>VÌ SAO CẦN OTP?</span>
                  <div className="flex flex-col gap-space-8">
                    {sec.map((s) => (
                      <div className="flex items-center gap-space-12 p-space-12 bg-bg-elevated/70 rounded-xl">
                        <div className="w-8 h-8 rounded-xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[16px] text-tier-s">{s.icon}</span></div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{s.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block">{s.d}</span></div>
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
