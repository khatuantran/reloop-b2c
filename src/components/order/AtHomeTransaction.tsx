import { useEffect, useState } from 'react';
import type { Order, Collector } from '../../lib/mock';
import { USER, trustScoreZone } from '../../lib/mock';
import { formatVND } from '../../lib/format';

type SubStep = 'WEIGHING' | 'WEIGHT_REVEAL' | 'PEEK_CHECK' | 'PRICE_S' | 'HOLD_C' | 'OTP' | 'DONE';

interface Props {
  order: Order;
  collector: Collector;
  initialSubStep?: SubStep;
  isStaticDemo?: boolean;
  prefilledOtp?: boolean;
}

export default function AtHomeTransaction({
  order,
  collector,
  initialSubStep = 'WEIGHING',
  isStaticDemo = false,
  prefilledOtp = false,
}: Props) {
  const isTierC = order.tier === 'C';
  const [sub, setSub] = useState<SubStep>(initialSubStep);
  const [otp, setOtp] = useState<string[]>(
    prefilledOtp ? ['1', '2', '3', '4', '5', '6'] : ['', '', '', '', '', '']
  );

  useEffect(() => {
    if (isStaticDemo) return;
    if (sub === 'WEIGHING') {
      const t = setTimeout(() => setSub('WEIGHT_REVEAL'), 2000);
      return () => clearTimeout(t);
    }
    if (sub === 'PEEK_CHECK') {
      const t = setTimeout(() => setSub('HOLD_C'), 3000);
      return () => clearTimeout(t);
    }
  }, [sub, isStaticDemo]);

  const trustZone = trustScoreZone(USER.trustScore);
  const finalAmount = isTierC
    ? Math.round(((order.expectedRange?.[0] ?? 0) + (order.expectedRange?.[1] ?? 0)) / 2 * trustZone.advanceRatio)
    : order.amount ?? 0;
  const userShareS = Math.round((order.amount ?? 0) * 0.75);

  const handleOtp = (idx: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp];
    next[idx] = v;
    setOtp(next);
    if (v && idx < 5) document.getElementById(`otp-${idx + 1}`)?.focus();
  };

  const otpFilled = otp.every((d) => d);

  const finalize = () => {
    setTimeout(() => {
      window.location.href = `/orders/${order.id}.html`;
    }, 1500);
    setSub('DONE');
  };

  const btnPrimary = 'px-space-32 py-[14px] rounded-2xl bg-lime text-text-on-lime font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition active:scale-[0.98]';

  return (
    <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-48 max-w-[800px] mx-auto min-h-[480px]">
      {sub === 'WEIGHING' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">Đang cân tại nhà</span>
          <div className="w-28 h-28 rounded-3xl bg-clay-sky flex items-center justify-center shadow-clay">
            <span className="material-symbols-rounded fill !text-[52px] text-info animate-spin" style={{ animationDuration: '1.5s' }}>scale</span>
          </div>
          <h2 className="font-h1 text-h1 text-text-primary">{collector.name} đang cân vật phẩm…</h2>
          <p className="font-body-md text-body-md text-text-secondary">Smart Scale ghi khối lượng + chụp ảnh tự động</p>
        </div>
      )}

      {sub === 'WEIGHT_REVEAL' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">Khối lượng thực</span>
          <div className="bg-clay-mint border-2 border-tier-s/30 rounded-3xl p-space-48 shadow-clay">
            <div className="font-display font-extrabold text-[80px] text-text-primary tabular-nums leading-none">{order.weight}<span className="text-[28px] text-text-tertiary ml-space-4">kg</span></div>
          </div>
          <span className="font-body-md text-[14px] text-text-secondary">
            Ước tính ban đầu: ~{order.weight} kg · <strong className="text-tier-s">khớp ✓</strong>
          </span>
          <div className="flex gap-space-12">
            <button className="px-space-24 py-space-12 rounded-2xl text-tier-h border-2 border-tier-h/30 bg-clay-blush hover:shadow-clay-sm font-medium text-[13px] transition">
              Báo sai (-5 Trust)
            </button>
            <button onClick={() => setSub(isTierC ? 'PEEK_CHECK' : 'PRICE_S')} className={btnPrimary}>
              Khớp ✓
            </button>
          </div>
        </div>
      )}

      {sub === 'PEEK_CHECK' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">Tier C · Peek Check</span>
          <div className="w-28 h-28 rounded-3xl bg-clay-butter flex items-center justify-center shadow-clay">
            <span className="material-symbols-rounded fill !text-[52px] text-amber-deep animate-pulse">policy</span>
          </div>
          <h2 className="font-h1 text-h1 text-text-primary">{collector.name} đang Peek Check…</h2>
          <p className="font-body-md text-body-md text-text-secondary max-w-[480px]">
            Xé góc nhỏ vỏ vật phẩm để verify không có gạch/xi măng tráo ruột. Anti-fraud bắt buộc cho user mới Trust Score &lt; 50.
          </p>
          <span className="font-mono-md text-[14px] text-tier-s font-semibold">Verify ✓ trong 8 giây…</span>
        </div>
      )}

      {sub === 'PRICE_S' && (
        <div className="flex flex-col gap-space-32">
          <div className="text-center">
            <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">Tier S · Giá cuối</span>
            <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Sẵn sàng chuyển tiền</h2>
          </div>
          <div className="bg-clay-mint border-2 border-tier-s/30 rounded-3xl p-space-48 flex flex-col gap-space-12 items-center text-center shadow-clay">
            <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">Bạn nhận (75%)</span>
            <div className="font-display font-extrabold text-[64px] text-text-primary tabular-nums leading-none">{formatVND(userShareS)}</div>
            <span className="font-body-md text-[13px] text-text-secondary">→ ZaloPay 0901 234 567 · phí RE-LOOP chịu</span>
          </div>
          <button onClick={() => setSub('OTP')} className={`self-end ${btnPrimary}`}>
            Tiếp tục xác nhận →
          </button>
        </div>
      )}

      {sub === 'HOLD_C' && (
        <div className="flex flex-col gap-space-32">
          <div className="text-center">
            <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">Tier C · Tạm ứng HOLD</span>
            <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Tiền đã vào ví ảo</h2>
          </div>
          <div className="bg-clay-butter border-2 border-amber-deep/40 rounded-3xl p-space-48 flex flex-col gap-space-16 items-center text-center shadow-clay">
            <div className="w-14 h-14 rounded-2xl bg-amber-deep/10 flex items-center justify-center">
              <span className="material-symbols-rounded fill !text-[28px] text-amber-deep">lock</span>
            </div>
            <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">Tạm ứng {Math.round(trustZone.advanceRatio * 100)}% · Trust {USER.trustScore}</span>
            <div className="font-display font-extrabold text-[64px] text-amber-deep tabular-nums leading-none">{formatVND(finalAmount)}</div>
            <p className="font-body-md text-[13px] text-text-secondary max-w-[440px]">
              Số tiền HOLD trong ví ảo · <strong className="text-amber-deep">chưa rút được</strong>. Sau khi Hub rã xác (16-24h) và verify mass balance ≥ 90%, phần chênh tự động chuyển ZaloPay.
            </p>
          </div>
          <button onClick={() => setSub('OTP')} className={`self-end ${btnPrimary}`}>
            Đã hiểu, xác nhận →
          </button>
        </div>
      )}

      {sub === 'OTP' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">Sign-off · Xác nhận</span>
          <h2 className="font-h1 text-h1 text-text-primary">Nhập OTP RE-LOOP</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Đã gửi đến <strong className="text-text-primary">0901 234 567</strong>. Mã demo: <code className="font-mono-md text-tier-s font-semibold">123456</code>
          </p>
          <div className="flex gap-space-8">
            {otp.map((d, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                value={d}
                onChange={(e) => handleOtp(i, e.target.value)}
                maxLength={1}
                className={[
                  'w-12 h-14 text-center rounded-2xl font-mono-md text-[24px] font-bold outline-none border-2 transition',
                  d ? 'bg-clay-mint text-text-primary border-tier-s' : 'bg-bg-surface text-text-primary border-border-default focus:border-tier-s focus:ring-4 focus:ring-tier-s/20',
                ].join(' ')}
              />
            ))}
          </div>
          <button
            onClick={finalize}
            disabled={!otpFilled}
            className={otpFilled ? btnPrimary : 'px-space-32 py-[14px] rounded-2xl bg-border-default text-text-tertiary cursor-not-allowed font-semibold text-[14px]'}
          >
            Xác nhận giao dịch ✓
          </button>
        </div>
      )}

      {sub === 'DONE' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <div className="w-32 h-32 rounded-3xl bg-lime flex items-center justify-center shadow-clay-lime animate-bounce" style={{ animationIterationCount: 1 }}>
            <span className="material-symbols-rounded fill !text-[64px] text-text-on-lime">check</span>
          </div>
          <h2 className="font-h1 text-h1 text-text-primary">Giao dịch hoàn tất</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            {isTierC ? 'Vật phẩm đã chuyển Hub · Verify trong 16-24h' : `${formatVND(userShareS)} đã vào ZaloPay`}
          </p>
          <span className="font-mono-md text-[12px] text-text-tertiary">Đang chuyển đến chi tiết đơn…</span>
        </div>
      )}
    </div>
  );
}
