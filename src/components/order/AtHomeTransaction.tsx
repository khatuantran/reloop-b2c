import { useEffect, useState } from 'react';
import type { Order, Collector } from '../../lib/mock';
import { USER, trustScoreZone } from '../../lib/mock';
import { formatVND } from '../../lib/format';

type SubStep = 'WEIGHING' | 'WEIGHT_REVEAL' | 'PEEK_CHECK' | 'PRICE_S' | 'HOLD_C' | 'OTP' | 'DONE';

interface Props {
  order: Order;
  collector: Collector;
  initialSubStep?: SubStep;
  isStaticDemo?: boolean; // khi true: không auto-advance timeouts (Figma frame state)
  prefilledOtp?: boolean; // khi true: OTP pre-fill 123456 để show enabled state
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
    if (isStaticDemo) return; // disable auto-advance trong static demo mode
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
  const finalAmount =
    isTierC
      ? Math.round(((order.expectedRange?.[0] ?? 0) + (order.expectedRange?.[1] ?? 0)) / 2 * trustZone.advanceRatio)
      : order.amount ?? 0;

  const userShareS = Math.round((order.amount ?? 0) * 0.75);

  const handleOtp = (idx: number, v: string) => {
    if (!/^\d?$/.test(v)) return;
    const next = [...otp];
    next[idx] = v;
    setOtp(next);
    if (v && idx < 5) {
      const elem = document.getElementById(`otp-${idx + 1}`);
      elem?.focus();
    }
  };

  const otpFilled = otp.every((d) => d);

  const finalize = () => {
    setTimeout(() => {
      window.location.href = `/orders/${order.id}.html`;
    }, 1500);
    setSub('DONE');
  };

  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-48 max-w-[800px] mx-auto min-h-[480px]">
      {sub === 'WEIGHING' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Đang cân tại nhà</span>
          <div className="w-24 h-24 rounded-full bg-info/10 border-2 border-info/30 flex items-center justify-center">
            <span className="material-symbols-outlined !text-[48px] text-info animate-spin" style={{ animationDuration: '1.5s' }}>scale</span>
          </div>
          <h2 className="font-h2 text-h2 text-text-primary">{collector.name} đang cân vật phẩm…</h2>
          <p className="font-body-md text-body-md text-text-secondary">Smart Scale đang ghi khối lượng + chụp ảnh</p>
        </div>
      )}

      {sub === 'WEIGHT_REVEAL' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Khối lượng thực</span>
          <div className="font-mono-md text-[80px] text-success font-bold tabular-nums leading-none">{order.weight} kg</div>
          <span className="font-body-md text-[14px] text-text-secondary">
            Ước tính ban đầu: ~{order.weight} kg · <strong className="text-success">khớp</strong>
          </span>
          <div className="flex gap-space-12">
            <button className="px-space-24 py-space-12 rounded-full text-error border border-error/30 hover:bg-error/10 font-body-md text-[13px]">
              Báo sai (-5 Trust)
            </button>
            <button
              onClick={() => setSub(isTierC ? 'PEEK_CHECK' : 'PRICE_S')}
              className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95"
            >
              Khớp với ước tính ✓
            </button>
          </div>
        </div>
      )}

      {sub === 'PEEK_CHECK' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-warning uppercase">Tier C · Peek Check</span>
          <div className="w-24 h-24 rounded-full bg-warning/10 border-2 border-warning/30 flex items-center justify-center">
            <span className="material-symbols-outlined !text-[40px] text-warning animate-pulse">policy</span>
          </div>
          <h2 className="font-h2 text-h2 text-text-primary">{collector.name} đang Peek Check…</h2>
          <p className="font-body-md text-body-md text-text-secondary max-w-[480px]">
            Xé góc nhỏ vỏ vật phẩm để verify không có gạch/xi măng tráo ruột. Đây là cơ chế anti-fraud bắt buộc cho Tier C.
          </p>
          <span className="font-mono-md text-[14px] text-success">Verify ✓ trong 8 giây…</span>
        </div>
      )}

      {sub === 'PRICE_S' && (
        <div className="flex flex-col gap-space-32">
          <div className="text-center">
            <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Tier S · Giá cuối</span>
            <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Sẵn sàng chuyển tiền</h2>
          </div>
          <div className="bg-bg-base border border-success/30 rounded-2xl p-space-32 flex flex-col gap-space-16 items-center text-center">
            <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bạn nhận (75%)</span>
            <div className="font-mono-md text-[64px] text-success font-bold tabular-nums leading-none">{formatVND(userShareS)}</div>
            <span className="font-body-md text-[13px] text-text-secondary">→ ZaloPay 0901 234 567</span>
          </div>
          <button
            onClick={() => setSub('OTP')}
            className="self-end px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95"
          >
            Tiếp tục xác nhận →
          </button>
        </div>
      )}

      {sub === 'HOLD_C' && (
        <div className="flex flex-col gap-space-32">
          <div className="text-center">
            <span className="font-mono-md text-[12px] text-warning uppercase">Tier C · Tạm ứng HOLD</span>
            <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Tiền đã vào ví ảo</h2>
          </div>
          <div className="bg-warning/5 border-2 border-warning/40 rounded-2xl p-space-32 flex flex-col gap-space-16 items-center text-center">
            <span className="material-symbols-outlined fill !text-[32px] text-warning">lock</span>
            <span className="font-mono-md text-[12px] text-warning uppercase">Tạm ứng {Math.round(trustZone.advanceRatio * 100)}% (Trust Score {USER.trustScore})</span>
            <div className="font-mono-md text-[64px] text-warning font-bold tabular-nums leading-none">{formatVND(finalAmount)}</div>
            <p className="font-body-md text-[13px] text-text-secondary max-w-[440px]">
              Số tiền HOLD trong ví ảo · <strong className="text-warning">chưa rút được</strong>. Sau khi Hub rã xác (16-24h) và verify mass balance ≥ 90%, phần chênh sẽ tự động chuyển ZaloPay.
            </p>
          </div>
          <button
            onClick={() => setSub('OTP')}
            className="self-end px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95"
          >
            Đã hiểu, xác nhận →
          </button>
        </div>
      )}

      {sub === 'OTP' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Sign-off · Xác nhận giao dịch</span>
          <h2 className="font-h2 text-h2 text-text-primary">Nhập OTP RE-LOOP</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            Đã gửi đến <strong className="text-text-primary">0901 234 567</strong>. Mã: <code className="font-mono-md text-success">123456</code>
          </p>
          <div className="flex gap-space-8">
            {otp.map((d, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                value={d}
                onChange={(e) => handleOtp(i, e.target.value)}
                maxLength={1}
                className="w-12 h-14 text-center bg-bg-base border-2 border-border-subtle focus:border-success rounded-xl font-mono-md text-[24px] text-text-primary outline-none"
              />
            ))}
          </div>
          <button
            onClick={finalize}
            disabled={!otpFilled}
            className={[
              'px-space-32 py-space-16 rounded-full font-body-md text-[14px] font-semibold transition-all',
              otpFilled ? 'bg-success text-[#0A1410] hover:bg-success/90 active:scale-95' : 'bg-border-default text-text-tertiary cursor-not-allowed',
            ].join(' ')}
          >
            Xác nhận giao dịch ✓
          </button>
        </div>
      )}

      {sub === 'DONE' && (
        <div className="flex flex-col gap-space-32 items-center text-center">
          <div className="w-28 h-28 rounded-full bg-success flex items-center justify-center animate-bounce" style={{ animationIterationCount: 1 }}>
            <span className="material-symbols-outlined fill !text-[56px] text-[#0A1410]">check</span>
          </div>
          <h2 className="font-h2 text-h2 text-text-primary">Giao dịch hoàn tất</h2>
          <p className="font-body-md text-body-md text-text-secondary">
            {isTierC
              ? 'Vật phẩm đã chuyển Hub · Verify trong 16-24h'
              : `${formatVND(userShareS)} đã vào ZaloPay`}
          </p>
          <span className="font-mono-md text-[12px] text-text-tertiary">Đang chuyển đến chi tiết đơn…</span>
        </div>
      )}
    </div>
  );
}
