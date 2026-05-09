import { useEffect, useMemo, useState } from 'react';
import { USER, BOM_LIBRARY, trustScoreZone } from '../../lib/mock';
import { formatVND } from '../../lib/format';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const samples = [
  {
    id: 'pet',
    label: 'Bịch chai PET',
    weight: 3.2,
    pricePerKg: 12_000,
    tier: 'S' as const,
    confidence: 95,
    icon: 'water_bottle',
    image: '/images/sample-pet.jpg',
    aiName: 'Chai PET nhựa',
  },
  {
    id: 'mainboard',
    label: 'Mainboard PC cũ',
    weight: 1.0,
    pricePerKg: 0, // dùng BOM
    tier: 'C' as const,
    confidence: 78,
    icon: 'developer_board',
    image: '/images/sample-mainboard.jpg',
    aiName: 'Mainboard PC',
  },
];

const slots = [
  { id: 'morning', label: 'Sáng nay', time: '9:00 — 11:00' },
  { id: 'afternoon', label: 'Chiều nay', time: '14:00 — 16:00' },
  { id: 'tomorrow-am', label: 'Mai sáng', time: '8:00 — 10:00' },
  { id: 'tomorrow-pm', label: 'Mai chiều', time: '13:00 — 15:00' },
];

const stepLabels = ['Chụp ảnh', 'AI nhận diện', 'Báo giá', 'Địa chỉ', 'Lịch hẹn', 'Xác nhận'];

interface OrderCreateProps {
  initialStep?: Step;
  initialSampleId?: 'pet' | 'mainboard';
}

export default function OrderCreate({ initialStep = 1, initialSampleId }: OrderCreateProps = {}) {
  const presetSample = initialSampleId ? samples.find((s) => s.id === initialSampleId) ?? null : null;
  const [step, setStep] = useState<Step>(initialStep);
  const [sample, setSample] = useState<(typeof samples)[number] | null>(presetSample);
  // Khi pre-load step >= 2 với sample sẵn → bỏ qua AI loading, hiện ngay reveal
  const [aiLoading, setAiLoading] = useState(initialStep === 2 && !presetSample);
  const [slot, setSlot] = useState('afternoon');
  const [payment, setPayment] = useState<'zalopay' | 'cash'>('zalopay');

  useEffect(() => {
    if (step === 2 && sample && aiLoading) {
      const t = setTimeout(() => setAiLoading(false), 1500);
      return () => clearTimeout(t);
    }
  }, [step, sample, aiLoading]);

  const next = () => setStep((s) => Math.min(6, (s + 1) as Step));
  const back = () => setStep((s) => Math.max(1, (s - 1) as Step));

  const trustZone = trustScoreZone(USER.trustScore);

  const pricing = useMemo(() => {
    if (!sample) return null;
    if (sample.tier === 'S') {
      const total = Math.round(sample.weight * sample.pricePerKg);
      return {
        type: 'S' as const,
        total,
        userShare: Math.round(total * 0.75),
        hubShare: Math.round(total * 0.15),
        reloopShare: Math.round(total * 0.1),
      };
    }
    const bom = BOM_LIBRARY[sample.id]!;
    const advance = Math.round(((bom.expectedRange[0] + bom.expectedRange[1]) / 2) * trustZone.advanceRatio);
    return {
      type: 'C' as const,
      lowEst: bom.expectedRange[0],
      highEst: bom.expectedRange[1],
      advance,
    };
  }, [sample, trustZone.advanceRatio]);

  const confirmAndGo = () => {
    // Mock: tạo đơn mới ID rồi redirect tracking page
    const newOrderId = sample?.tier === 'S' ? 'RL-2026-001234' : 'RL-2026-001240';
    window.location.href = `/orders/${newOrderId}/track.html`;
  };

  return (
    <div className="max-w-[1280px] mx-auto px-[80px] py-space-48">
      {/* Stepper */}
      <div className="flex items-center justify-between mb-space-64 max-w-[960px] mx-auto">
        {stepLabels.map((label, i) => {
          const idx = (i + 1) as Step;
          const done = step > idx;
          const active = step === idx;
          return (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-space-8">
                <div
                  className={[
                    'w-9 h-9 rounded-full flex items-center justify-center font-mono-md text-[13px] font-bold transition-all',
                    done
                      ? 'bg-success text-[#0A1410]'
                      : active
                      ? 'bg-success/20 border-2 border-success text-success'
                      : 'bg-bg-elevated border border-border-subtle text-text-tertiary',
                  ].join(' ')}
                >
                  {done ? '✓' : idx}
                </div>
                <span
                  className={[
                    'font-mono-md text-[10px] uppercase whitespace-nowrap',
                    active || done ? 'text-success' : 'text-text-tertiary',
                  ].join(' ')}
                >
                  {label}
                </span>
              </div>
              {i < stepLabels.length - 1 && (
                <div className={['flex-1 h-px mx-space-4 mb-6 transition-colors', done ? 'bg-success' : 'bg-border-subtle'].join(' ')} />
              )}
            </div>
          );
        })}
      </div>

      {/* Card */}
      <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-48 max-w-[800px] mx-auto min-h-[520px]">
        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-space-32">
            <div>
              <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 1 · Chụp ảnh</span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Chọn vật phẩm muốn bán</h2>
              <p className="font-body-md text-body-md text-text-secondary mt-space-8">
                Trong app thật bạn sẽ chụp/upload từ điện thoại. Ở đây chọn 1 trong 2 mẫu để mô phỏng AI nhận diện.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-16">
              {samples.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSample(s)}
                  className={[
                    'flex flex-col gap-space-12 p-space-24 rounded-2xl border-2 transition-all text-left',
                    sample?.id === s.id ? 'border-success bg-success/5' : 'border-border-subtle hover:border-border-default',
                  ].join(' ')}
                >
                  <div className="aspect-video rounded-xl bg-bg-base border border-border-subtle overflow-hidden relative">
                    <img src={s.image} alt={s.label} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-base/40 to-transparent" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-h4 text-[16px] text-text-primary block">{s.label}</span>
                      <span className="font-mono-md text-[12px] text-text-tertiary">~{s.weight} kg ước tính</span>
                    </div>
                    <span
                      className={[
                        'px-space-8 py-[2px] rounded font-mono-md text-[11px]',
                        s.tier === 'S' ? 'bg-tier-s/10 text-tier-s border border-tier-s/30' : 'bg-tier-c/10 text-tier-c border border-tier-c/30',
                      ].join(' ')}
                    >
                      Tier {s.tier}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={next}
              disabled={!sample}
              className={[
                'self-end px-space-32 py-space-16 rounded-full font-body-md font-semibold text-[14px] transition-all',
                sample
                  ? 'bg-success text-[#0A1410] hover:bg-success/90 active:scale-95'
                  : 'bg-border-default text-text-tertiary cursor-not-allowed',
              ].join(' ')}
            >
              Tiếp tục →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && sample && (
          <div className="flex flex-col gap-space-32 items-center text-center">
            <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 2 · AI nhận diện</span>
            {aiLoading ? (
              <>
                <div className="w-24 h-24 rounded-full bg-success/10 border-2 border-success/30 flex items-center justify-center">
                  <span className="material-symbols-outlined !text-[48px] text-success animate-spin" style={{ animationDuration: '1.5s' }}>
                    auto_awesome
                  </span>
                </div>
                <h2 className="font-h2 text-h2 text-text-primary">Đang phân tích ảnh…</h2>
                <p className="font-body-md text-body-md text-text-secondary">Phân loại vật liệu, ước tính khối lượng, xác định Tier</p>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-full bg-success flex items-center justify-center">
                  <span className="material-symbols-outlined fill !text-[40px] text-[#0A1410]">check</span>
                </div>
                <h2 className="font-h2 text-h2 text-text-primary">Đã nhận diện</h2>
                <div className="flex flex-col gap-space-8 items-center">
                  <span
                    className={[
                      'px-space-12 py-space-4 rounded font-mono-md text-[12px] border',
                      sample.tier === 'S'
                        ? 'bg-tier-s/10 border-tier-s/30 text-tier-s'
                        : 'bg-tier-c/10 border-tier-c/30 text-tier-c',
                    ].join(' ')}
                  >
                    Tier {sample.tier} · {sample.tier === 'S' ? 'Standard' : 'Complex'}
                  </span>
                  <span className="font-h3 text-h3 text-text-primary">{sample.aiName}</span>
                  <span className="font-mono-md text-[14px] text-text-secondary">~{sample.weight} kg · Confidence {sample.confidence}%</span>
                </div>
                <div className="flex gap-space-12">
                  <button onClick={back} className="px-space-24 py-space-12 rounded-full text-text-secondary border border-border-subtle hover:bg-bg-surface font-body-md text-[13px]">
                    Sai? Sửa thủ công
                  </button>
                  <button
                    onClick={next}
                    className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95"
                  >
                    Đúng, tiếp tục →
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && sample && pricing && (
          <div className="flex flex-col gap-space-32">
            <div>
              <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 3 · Báo giá</span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8">
                {pricing.type === 'S' ? 'Giá CHẮC CHẮN' : 'Dải giá ước tính'}
              </h2>
            </div>

            {pricing.type === 'S' && (
              <>
                <div className="bg-bg-base border border-border-subtle rounded-2xl p-space-32 flex flex-col gap-space-16">
                  <div className="flex items-baseline justify-between">
                    <span className="font-body-md text-body-md text-text-secondary">
                      {sample.weight} kg × {sample.pricePerKg.toLocaleString('vi-VN')}đ
                    </span>
                    <span className="font-mono-md text-[40px] text-success font-bold tabular-nums">{formatVND(pricing.total)}</span>
                  </div>
                  <div className="h-px bg-border-subtle" />
                  <div className="flex flex-col gap-space-12">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-space-8 font-body-md text-[14px] text-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-success" /> Bạn nhận (75%)
                      </span>
                      <span className="font-mono-md text-[16px] text-success tabular-nums">{formatVND(pricing.userShare)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-space-8 font-body-md text-[14px] text-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-warning" /> Hub (15%)
                      </span>
                      <span className="font-mono-md text-[14px] text-text-secondary tabular-nums">{formatVND(pricing.hubShare)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-space-8 font-body-md text-[14px] text-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-info" /> RE-LOOP (10%)
                      </span>
                      <span className="font-mono-md text-[14px] text-text-secondary tabular-nums">{formatVND(pricing.reloopShare)}</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {pricing.type === 'C' && (
              <>
                <div className="bg-bg-base border-2 border-tier-c/40 rounded-2xl p-space-32 flex flex-col gap-space-16">
                  <div className="flex items-baseline justify-between">
                    <span className="font-body-md text-body-md text-text-secondary">{sample.weight} kg · BOM-based</span>
                    <span className="font-mono-md text-[28px] text-tier-c font-bold tabular-nums">
                      {formatVND(pricing.lowEst)} — {formatVND(pricing.highEst)}
                    </span>
                  </div>
                </div>

                <div className="bg-warning/5 border border-warning/30 rounded-2xl p-space-24 flex flex-col gap-space-12">
                  <div className="flex items-center gap-space-8">
                    <span className="material-symbols-outlined !text-[20px] text-warning">info</span>
                    <span className="font-h4 text-h4 text-text-primary">Vì sao không định giá ngay?</span>
                  </div>
                  <p className="font-body-md text-[14px] text-text-secondary">
                    Mainboard PC chứa hỗn hợp đồng/nhôm/nhựa với tỷ lệ khác nhau theo nhà sản xuất. AI nhìn vỏ ngoài không biết chính xác. Sau khi Hub rã xác (16-24h),
                    cân BOM thực, RE-LOOP sẽ chuyển <strong className="text-text-primary">phần chênh</strong> vào ZaloPay của bạn.
                  </p>
                  <div className="h-px bg-warning/20" />
                  <div className="flex items-baseline justify-between">
                    <span className="font-body-md text-[14px] text-text-secondary">
                      Tạm ứng <strong className="text-text-primary">{Math.round(trustZone.advanceRatio * 100)}%</strong> (Trust Score {USER.trustScore} · {trustZone.label})
                    </span>
                    <span className="font-mono-md text-[20px] text-warning font-bold tabular-nums">{formatVND(pricing.advance)}</span>
                  </div>
                  <span className="font-mono-md text-[11px] text-warning">🔒 HOLD trong ví ảo · chưa rút được · auto-release sau Hub verify</span>
                </div>
              </>
            )}

            <div className="flex justify-between gap-space-12">
              <button onClick={back} className="px-space-24 py-space-12 rounded-full text-text-secondary border border-border-subtle hover:bg-bg-surface font-body-md text-[13px]">
                ← Quay lại
              </button>
              <button onClick={next} className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95">
                Tiếp tục →
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="flex flex-col gap-space-32">
            <div>
              <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 4 · Địa chỉ thu gom</span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Collector sẽ đến đâu?</h2>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-2xl p-space-24 flex items-start gap-space-16">
              <div className="w-12 h-12 rounded-full bg-success/10 border border-success/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined fill !text-[24px] text-success">location_on</span>
              </div>
              <div className="flex-1">
                <span className="font-mono-md text-[11px] text-text-tertiary uppercase block mb-space-4">Địa chỉ mặc định</span>
                <span className="font-h4 text-[16px] text-text-primary block">{USER.address}</span>
                <span className="font-body-md text-[13px] text-text-secondary block">{USER.district}</span>
                <button className="mt-space-8 font-body-md text-[12px] text-text-tertiary cursor-not-allowed" disabled>
                  Đổi địa chỉ (Phase 2)
                </button>
              </div>
            </div>
            <div className="bg-bg-base border border-border-subtle rounded-2xl p-space-16 aspect-[16/7] relative overflow-hidden">
              {/* Fake map preview */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A2D24" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="600" height="200" fill="url(#grid)" />
                  <path d="M 0 100 Q 200 80 400 110 T 600 100" stroke="#2A4034" strokeWidth="3" fill="none" />
                  <path d="M 100 0 L 110 200" stroke="#2A4034" strokeWidth="2" fill="none" />
                  <circle cx="300" cy="100" r="14" fill="#52E08D" opacity="0.3" />
                  <circle cx="300" cy="100" r="8" fill="#52E08D" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 px-space-12 py-space-4 rounded-full bg-bg-elevated/90 backdrop-blur border border-border-subtle">
                <span className="font-mono-md text-[11px] text-success">📍 Vị trí của bạn</span>
              </div>
            </div>
            <div className="flex justify-between gap-space-12">
              <button onClick={back} className="px-space-24 py-space-12 rounded-full text-text-secondary border border-border-subtle hover:bg-bg-surface font-body-md text-[13px]">
                ← Quay lại
              </button>
              <button onClick={next} className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95">
                Chọn lịch hẹn →
              </button>
            </div>
          </div>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <div className="flex flex-col gap-space-32">
            <div>
              <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 5 · Lịch hẹn</span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Khi nào Collector tới?</h2>
              <p className="font-body-md text-[13px] text-text-secondary mt-space-4">
                Min 4h ahead · Có thể đổi trước khi Collector xuất phát
              </p>
            </div>
            <div className="grid grid-cols-2 gap-space-12">
              {slots.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSlot(s.id)}
                  className={[
                    'flex flex-col gap-space-4 p-space-16 rounded-xl border-2 text-left transition-all',
                    slot === s.id ? 'border-success bg-success/5' : 'border-border-subtle hover:border-border-default',
                  ].join(' ')}
                >
                  <span className="font-h4 text-[16px] text-text-primary">{s.label}</span>
                  <span className="font-mono-md text-[12px] text-text-tertiary">{s.time}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between gap-space-12">
              <button onClick={back} className="px-space-24 py-space-12 rounded-full text-text-secondary border border-border-subtle hover:bg-bg-surface font-body-md text-[13px]">
                ← Quay lại
              </button>
              <button onClick={next} className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95">
                Tiếp tục →
              </button>
            </div>
          </div>
        )}

        {/* Step 6 */}
        {step === 6 && sample && pricing && (
          <div className="flex flex-col gap-space-32">
            <div>
              <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bước 6 · Xác nhận</span>
              <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Tóm tắt đơn hàng</h2>
            </div>

            {/* Payment */}
            <div className="grid grid-cols-2 gap-space-12">
              {(['zalopay', 'cash'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPayment(p)}
                  className={[
                    'flex items-center gap-space-12 p-space-16 rounded-xl border-2 text-left transition-all',
                    payment === p ? 'border-success bg-success/5' : 'border-border-subtle hover:border-border-default',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      p === 'zalopay' ? 'bg-info/10 text-info' : 'bg-warning/10 text-warning',
                    ].join(' ')}
                  >
                    <span className="material-symbols-outlined !text-[20px]">{p === 'zalopay' ? 'account_balance_wallet' : 'payments'}</span>
                  </div>
                  <div>
                    <span className="font-h4 text-[14px] text-text-primary block">{p === 'zalopay' ? 'ZaloPay' : 'Tiền mặt'}</span>
                    <span className="font-mono-md text-[11px] text-text-tertiary">{p === 'zalopay' ? 'Tự động · 60 giây' : 'Collector đưa tận tay'}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Summary card */}
            <div className="bg-bg-base border border-border-subtle rounded-2xl p-space-24 flex flex-col gap-space-12">
              <div className="flex justify-between font-body-md text-[14px]">
                <span className="text-text-secondary">Vật phẩm</span>
                <span className="text-text-primary">{sample.aiName} · {sample.weight} kg</span>
              </div>
              <div className="flex justify-between font-body-md text-[14px]">
                <span className="text-text-secondary">Tier</span>
                <span className={sample.tier === 'S' ? 'text-tier-s' : 'text-tier-c'}>Tier {sample.tier}</span>
              </div>
              <div className="flex justify-between font-body-md text-[14px]">
                <span className="text-text-secondary">Slot</span>
                <span className="text-text-primary">{slots.find((s) => s.id === slot)?.label} · {slots.find((s) => s.id === slot)?.time}</span>
              </div>
              <div className="flex justify-between font-body-md text-[14px]">
                <span className="text-text-secondary">Địa chỉ</span>
                <span className="text-text-primary text-right">{USER.address}<br />{USER.district}</span>
              </div>
              <div className="h-px bg-border-subtle" />
              {pricing.type === 'S' ? (
                <div className="flex justify-between items-baseline">
                  <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Bạn sẽ nhận</span>
                  <span className="font-mono-md text-[28px] text-success font-bold tabular-nums">{formatVND(pricing.userShare)}</span>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono-md text-[12px] text-warning uppercase">Tạm ứng HOLD ví ảo</span>
                    <span className="font-mono-md text-[20px] text-warning font-bold tabular-nums">{formatVND(pricing.advance)}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono-md text-[12px] text-text-tertiary uppercase">Phần chênh sau Hub verify</span>
                    <span className="font-mono-md text-[14px] text-text-secondary">~ {formatVND(pricing.lowEst - pricing.advance)} – {formatVND(pricing.highEst - pricing.advance)}</span>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-between gap-space-12">
              <button onClick={back} className="px-space-24 py-space-12 rounded-full text-text-secondary border border-border-subtle hover:bg-bg-surface font-body-md text-[13px]">
                ← Quay lại
              </button>
              <button
                onClick={confirmAndGo}
                className="px-space-32 py-space-16 rounded-full bg-success text-[#0A1410] hover:bg-success/90 font-body-md text-[14px] font-semibold active:scale-95"
              >
                Xác nhận đặt đơn ✓
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
