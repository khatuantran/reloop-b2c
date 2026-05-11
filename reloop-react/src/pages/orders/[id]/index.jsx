import { cx } from '@/lib/cx';
import { useParams } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import TierBadge from '../../../components/ui/TierBadge';
import StatusChip from '../../../components/ui/StatusChip';
import BOMRevealCard from '../../../components/order/BOMRevealCard';
import ChainOfCustody from '../../../components/order/ChainOfCustody';
import HubTierBadge from '../../../components/order/HubTierBadge';
import ReviewSection from '../../../components/order/ReviewSection';
import CancelRescheduleCard from '../../../components/order/CancelRescheduleCard';
import OrderKPIStrip from '../../../components/order/OrderKPIStrip';
import MaterialsBreakdown from '../../../components/order/MaterialsBreakdown';
import MilestoneCelebration from '../../../components/illustrations/MilestoneCelebration';
import HubWarehouse from '../../../components/illustrations/HubWarehouse';
import TierSScene from '../../../components/illustrations/TierSScene';
import TierCScene from '../../../components/illustrations/TierCScene';
import { ORDERS, getOrderById, getCollectorById, COLLECTORS, USER } from '../../../lib/mock';
import { formatVND, formatDateTime, formatWeight } from '../../../lib/format';

export default function Index() {
  const { id } = useParams();
  const order = getOrderById(id);
  if (!order) return <NotFound what="Đơn hàng" backTo="/orders" backLabel="Về danh sách đơn" />;
  const collector = getCollectorById(order.collectorId ?? 'c-001') ?? COLLECTORS['c-001'];
  
  const isPending = order.status === 'PENDING_VERIFY';
  const isTierC = order.tier === 'C';
  const isCompleted = order.status === 'COMPLETED';
  
  // Status callout per state
  const statusCallout = isCompleted
    ? isTierC
      ? { icon: 'verified', clay: 'bg-clay-mint', accent: 'text-tier-s', label: `+${formatVND((order.amount ?? 0) - (order.advance ?? 0))} phần chênh đã chuyển ZaloPay · Hub verify ${Math.round((order.massBalance ?? 0.94) * 100)}%` }
      : { icon: 'check_circle', clay: 'bg-clay-mint', accent: 'text-tier-s', label: `+${formatVND(Math.round((order.amount ?? 0) * 0.75))} đã chuyển ZaloPay · ZP-${order.id.slice(-6)}` }
    : isPending
      ? { icon: 'hourglass_top', clay: 'bg-clay-butter', accent: 'text-amber-deep', label: 'Còn 8 giờ · Hub Q.7 đang rã xác · BOM thực sẽ verify trong 24h' }
      : { icon: 'local_shipping', clay: 'bg-clay-sky', accent: 'text-info', label: `${collector.name} đang trên đường · ETA 12 phút` };
  
  // KPI strip data per state
  const co2Saved = (order.weight * 1.65).toFixed(1);
  const gpEarned = Math.round((order.amount ?? order.advance ?? 0) / 1000);
  
  const kpis = isPending && isTierC
    ? [
        { icon: 'scale', label: 'KHỐI LƯỢNG', value: `${order.weight} kg`, sub: `Cân tại nhà · QTĐLVN 252`, clay: 'bg-clay-mint', accent: 'text-tier-s' },
        { icon: 'pending_actions', label: 'HOLD VÍ ẢO', value: formatVND(order.advance ?? 0), sub: `${Math.round(((order.advance ?? 0) / ((order.expectedRange?.[0] ?? 1))) * 100)}% giá kỳ vọng tối thiểu`, clay: 'bg-clay-butter', accent: 'text-amber-deep' },
        { icon: 'analytics', label: 'DẢI BOM LIBRARY', value: `${formatVND(order.expectedRange?.[0] ?? 0).replace(/đ$/, 'k').replace(/\.000$/, '')}–${formatVND(order.expectedRange?.[1] ?? 0).replace(/\.000$/, 'k')}`, sub: 'Phần chênh sau Hub verify', clay: 'bg-clay-sky', accent: 'text-info' },
        { icon: 'timer', label: 'CÒN LẠI', value: '8 giờ', sub: '64h / 72h auto-release', clay: 'bg-clay-peach', accent: 'text-tier-c', progress: 89 },
      ]
    : isCompleted && isTierC
      ? [
          { icon: 'scale', label: 'KHỐI LƯỢNG', value: `${order.weight} kg`, sub: 'Cân nhà + Hub đối chiếu', clay: 'bg-clay-mint', accent: 'text-tier-s' },
          { icon: 'analytics', label: 'TỔNG BOM THỰC', value: formatVND(order.amount ?? 0), sub: `${Math.round((order.massBalance ?? 0.94) * 100)}% mass-balance`, clay: 'bg-clay-butter', accent: 'text-amber-deep' },
          { icon: 'redeem', label: 'GP EARNED', value: `+${gpEarned}`, sub: `Tier C ×1.5 multiplier`, clay: 'bg-clay-sky', accent: 'text-info' },
          { icon: 'eco', label: 'CO₂ TRÁNH', value: `${co2Saved} kg`, sub: 'Tương đương 1 cây 6 tháng', clay: 'bg-clay-peach', accent: 'text-tier-c' },
        ]
      : isCompleted
        ? [
            { icon: 'scale', label: 'KHỐI LƯỢNG', value: `${order.weight} kg`, sub: 'Cân tại nhà QTĐLVN 252', clay: 'bg-clay-mint', accent: 'text-tier-s' },
            { icon: 'payments', label: 'BẠN NHẬN (75%)', value: formatVND(Math.round((order.amount ?? 0) * 0.75)), sub: `Tổng ${formatVND(order.amount ?? 0)}`, clay: 'bg-clay-butter', accent: 'text-amber-deep' },
            { icon: 'redeem', label: 'GP EARNED', value: `+${gpEarned}`, sub: '1 GP = 1.000đ giá trị', clay: 'bg-clay-sky', accent: 'text-info' },
            { icon: 'eco', label: 'CO₂ TRÁNH', value: `${co2Saved} kg`, sub: 'Quy đổi từ vật liệu', clay: 'bg-clay-peach', accent: 'text-tier-c' },
          ]
        : [
            { icon: 'scale', label: 'KHỐI LƯỢNG', value: `${order.weight} kg`, sub: 'Ước tính ban đầu', clay: 'bg-clay-mint', accent: 'text-tier-s' },
            { icon: 'paid', label: 'GIÁ ƯỚC TÍNH', value: formatVND(order.amount ?? order.advance ?? 0), sub: 'Cuối cùng sau cân nhà', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
            { icon: 'person_pin_circle', label: 'COLLECTOR', value: collector.name, sub: `Tier ${collector.tier} · ★ ${collector.rating}`, clay: 'bg-clay-sky', accent: 'text-info' },
            { icon: 'schedule', label: 'ETA', value: '12 phút', sub: 'Real-time GPS', clay: 'bg-clay-peach', accent: 'text-tier-c' },
          ];
  
  const chainEvents = [
    { stage: 'PICKUP', label: 'Thu gom tại nhà', actor: `${collector.name} · Tier ${collector.tier}`, time: formatDateTime(order.createdAt), evidenceCount: 5, hashShort: '0x4a8b...c2f9', done: true },
    { stage: 'TRANSIT', label: 'Vận chuyển → Hub', actor: `${collector.vehicle} · GPS 18 phút`, time: '14:42', evidenceCount: 1, hashShort: '0x7d2e...91a4', done: true },
    { stage: 'HUB_RECEIVE', label: 'Hub Q.7 tiếp nhận', actor: 'NV Mai · Cân lại 2.42kg', time: '15:08', evidenceCount: 3, hashShort: '0xb1c7...4e80', done: true },
    { stage: 'DISASSEMBLY', label: 'Rã xác & cân vật liệu', actor: 'Tổ kỹ thuật · Video 8\'', time: isCompleted ? '15:45' : 'Đang xử lý', evidenceCount: isCompleted ? 12 : undefined, hashShort: isCompleted ? '0xfe3a...8d22' : undefined, done: isCompleted, active: isPending },
    { stage: 'VERIFIED', label: 'Mass-balance ≥ 90%', actor: 'Audit · Auto-release', time: isCompleted ? '16:02' : 'Chờ rã xác', done: isCompleted },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            {/* Breadcrumb */}
            <a href="/orders" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Đơn của tôi
            </a>
      
            {/* Hero header */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-24 relative overflow-hidden">
              <div className="grid grid-cols-[1.3fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <div className="flex items-center gap-space-12 flex-wrap mb-space-12">
                    <TierBadge tier={order.tier} />
                    <StatusChip status={order.status} />
                    <span className="font-mono-md text-[12px] text-text-tertiary font-semibold">{order.id}</span>
                  </div>
                  <h1 className="font-display-l text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-16">{order.item}</h1>
      
                  {/* Status callout banner */}
                  <div className={cx(['rounded-2xl border-2 p-space-16 flex items-center gap-space-12 shadow-clay-sm mb-space-16', statusCallout.clay, `border-${statusCallout.accent.replace('text-', '')}/40`])}>
                    <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                      <span className={cx(['material-symbols-rounded fill !text-[20px]', statusCallout.accent])}>{statusCallout.icon}</span>
                    </div>
                    <span className={cx(['font-display font-bold text-[14px] leading-tight flex-1', statusCallout.accent])}>{statusCallout.label}</span>
                  </div>
      
                  <div className="flex flex-wrap gap-space-8">
                    <span className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-full px-space-12 py-space-4 font-mono-md text-[11px] text-text-secondary inline-flex items-center gap-space-4 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px] text-tier-s">scale</span>
                      {formatWeight(order.weight)}
                    </span>
                    <span className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-full px-space-12 py-space-4 font-mono-md text-[11px] text-text-secondary inline-flex items-center gap-space-4 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px] text-info">schedule</span>
                      {formatDateTime(order.createdAt)}
                    </span>
                    <span className="bg-bg-elevated/95 backdrop-blur border border-border-subtle rounded-full px-space-12 py-space-4 font-mono-md text-[11px] text-text-secondary inline-flex items-center gap-space-4 shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[14px] text-amber-deep">person_pin_circle</span>
                      {collector.name}
                    </span>
                    {isTierC && (
                      <span className="bg-clay-peach border border-tier-c/30 rounded-full px-space-12 py-space-4 font-mono-md text-[11px] text-tier-c font-bold inline-flex items-center gap-space-4 shadow-clay-sm">
                        <span className="material-symbols-rounded fill !text-[14px]">factory</span>
                        Hub Q.7 ISO 14001
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative h-[260px]">
                  {isCompleted ? (
                    <MilestoneCelebration className="absolute inset-0 w-full h-full" />
                  ) : isTierC && isPending ? (
                    <HubWarehouse className="absolute inset-0 w-full h-full" />
                  ) : isTierC ? (
                    <TierCScene className="absolute inset-0 w-full h-full" />
                  ) : (
                    <TierSScene className="absolute inset-0 w-full h-full" />
                  )}
                </div>
              </div>
            </section>
      
            {/* KPI strip (full-width) */}
            <OrderKPIStrip kpis={kpis} />
      
            {/* Chain of Custody (full-width horizontal, Tier C only) */}
            {isTierC && (
              <div className="mb-space-32">
                <ChainOfCustody orderId={order.id} events={chainEvents} layout="horizontal" />
              </div>
            )}
      
            <div className="grid grid-cols-12 gap-space-32">
              {/* LEFT col-span-7 */}
              <div className="col-span-7 flex flex-col gap-space-24">
                {/* Tier S COMPLETED — payment breakdown */}
                {!isTierC && isCompleted && (
                  <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32 flex flex-col gap-space-24">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                          <span className="material-symbols-rounded fill !text-[16px]">payments</span>
                          THANH TOÁN ZALOPAY
                        </span>
                        <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Chia 75/15/10</h3>
                      </div>
                      <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider">ZP-{order.id.slice(-6)}</span>
                    </div>
                    <div className="bg-lime rounded-2xl p-space-32 text-center shadow-clay-lime relative overflow-hidden">
                      <span className="font-mono-md text-[12px] text-text-on-lime/80 uppercase tracking-wider font-semibold block">Bạn đã nhận</span>
                      <div className="font-display font-extrabold text-[64px] text-text-on-lime tabular-nums leading-none mt-space-8">
                        {formatVND(Math.round((order.amount ?? 0) * 0.75))}
                      </div>
                      <span className="font-body-md text-[13px] text-text-on-lime/80 mt-space-8 block">
                        Tổng đơn {formatVND(order.amount ?? 0)} · vào ZaloPay 60s sau OTP
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-space-12">
                      <div className="bg-clay-mint rounded-2xl p-space-16 text-center shadow-clay-sm border border-tier-s/30">
                        <span className="font-mono-md text-[11px] text-tier-s uppercase tracking-wider block font-semibold">Bạn (75%)</span>
                        <span className="font-mono-md text-[16px] text-text-primary tabular-nums font-bold mt-space-4 block">{formatVND(Math.round((order.amount ?? 0) * 0.75))}</span>
                      </div>
                      <div className="bg-clay-butter rounded-2xl p-space-16 text-center shadow-clay-sm border border-amber-deep/30">
                        <span className="font-mono-md text-[11px] text-amber-deep uppercase tracking-wider block font-semibold">Hub (15%)</span>
                        <span className="font-mono-md text-[16px] text-text-primary tabular-nums font-bold mt-space-4 block">{formatVND(Math.round((order.amount ?? 0) * 0.15))}</span>
                      </div>
                      <div className="bg-clay-sky rounded-2xl p-space-16 text-center shadow-clay-sm border border-info/30">
                        <span className="font-mono-md text-[11px] text-info uppercase tracking-wider block font-semibold">RE-LOOP (10%)</span>
                        <span className="font-mono-md text-[16px] text-text-primary tabular-nums font-bold mt-space-4 block">{formatVND(Math.round((order.amount ?? 0) * 0.1))}</span>
                      </div>
                    </div>
                  </div>
                )}
      
                {/* Tier C COMPLETED → BOM Reveal + Materials breakdown */}
                {isTierC && isCompleted && order.bomReal && (
                  <>
                    <BOMRevealCard order={order} />
                    <MaterialsBreakdown
                      bomReal={order.bomReal}
                      expectedRange={order.expectedRange}
                      totalWeight={order.weight}
                      massBalance={order.massBalance ?? 0.94}
                    />
                  </>
                )}
      
                {/* Tier C PENDING_VERIFY */}
                {isTierC && isPending && (
                  <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-[28px] shadow-clay p-space-32 flex flex-col gap-space-16">
                    <div className="flex items-center gap-space-16">
                      <div className="w-14 h-14 rounded-2xl bg-amber-deep/15 flex items-center justify-center shadow-inset-soft">
                        <span className="material-symbols-rounded fill !text-[28px] text-amber-deep">hourglass_top</span>
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="font-mono-md text-[12px] text-amber-deep uppercase tracking-wider font-semibold">Đang xử lý tại Hub Q.7</span>
                        <span className="font-h2 text-h2 text-text-primary">Hub đang rã xác · còn 8 giờ</span>
                      </div>
                    </div>
                    <p className="font-body-md text-[13px] text-text-secondary">
                      Hub Q.7 đang tháo gỡ vật phẩm thành các vật liệu thành phần (Cu/Fe/Al/nhựa). Sau khi cân chính xác từng vật liệu, hệ thống sẽ tự động tính phần chênh và chuyển ZaloPay. Bạn sẽ nhận thông báo + xem video timelapse + ảnh trước/sau.
                    </p>
                    <div className="grid grid-cols-2 gap-space-12">
                      <div className="bg-bg-elevated rounded-2xl p-space-16 shadow-clay-sm border border-border-subtle">
                        <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold block">Tạm ứng đã nhận</span>
                        <span className="font-display font-extrabold text-[24px] text-text-primary tabular-nums leading-none mt-space-4 block">{formatVND(order.advance ?? 0)}</span>
                        <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4 block">Auto chuyển HOLD ngay tại bàn cân</span>
                      </div>
                      <div className="bg-bg-elevated rounded-2xl p-space-16 shadow-clay-sm border border-border-subtle">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">Dải kỳ vọng (BOM Library)</span>
                        <span className="font-display font-extrabold text-[18px] text-text-primary tabular-nums leading-none mt-space-4 block">
                          {formatVND(order.expectedRange?.[0] ?? 0)} – {formatVND(order.expectedRange?.[1] ?? 0)}
                        </span>
                        <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4 block">Phần chênh sau Hub verify</span>
                      </div>
                    </div>
                  </div>
                )}
      
                {/* Compact timeline */}
                <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="mb-space-16">
                    <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">timeline</span>
                      TIẾN TRÌNH
                    </span>
                    <h3 className="font-h3 text-h3 text-text-primary mt-space-8">Lịch sử trạng thái</h3>
                  </div>
                  <div className="flex flex-col gap-space-12">
                    {[
                      { label: 'Đặt đơn', icon: 'add_shopping_cart', clay: 'bg-clay-mint', accent: 'text-tier-s', done: true, time: formatDateTime(order.createdAt) },
                      { label: `${collector.name} nhận đơn`, icon: 'local_shipping', clay: 'bg-clay-sky', accent: 'text-info', done: true },
                      { label: 'Cân tại nhà', icon: 'scale', clay: 'bg-clay-butter', accent: 'text-amber-deep', done: true },
                      { label: isTierC ? 'Hub rã xác' : 'ZaloPay', icon: isTierC ? 'factory' : 'paid', clay: isTierC ? 'bg-clay-peach' : 'bg-clay-mint', accent: isTierC ? 'text-amber-deep' : 'text-tier-s', done: isCompleted, active: isPending },
                    ].map((s) => (
                      <div className="flex items-center gap-space-12">
                        <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm', s.done && !s.active ? `${s.clay} border-2 border-current ${s.accent}` : s.active ? 'bg-amber-deep text-white animate-pulse' : 'bg-bg-surface border-2 border-border-subtle text-text-tertiary'])}>
                          <span className="material-symbols-rounded fill !text-[22px]">{s.done && !s.active ? 'check' : s.active ? 'hourglass_top' : s.icon}</span>
                        </div>
                        <span className={cx(['font-display font-bold text-[14px] flex-1', s.done || s.active ? 'text-text-primary' : 'text-text-tertiary'])}>{s.label}</span>
                        {s.time && <span className="font-mono-md text-[11px] text-text-tertiary">{s.time}</span>}
                      </div>
                    ))}
                  </div>
                </div>
      
                {/* Cancel/Reschedule (pending) */}
                {isPending && (
                  <CancelRescheduleCard orderId={order.id} status={order.status} trustImpact={-5} />
                )}
      
                {/* Dispute CTA */}
                {(isCompleted || isPending) && (
                  <a href="/disputes/new" className="bg-clay-butter rounded-[20px] shadow-clay-sm border-2 border-amber-deep/30 p-space-24 flex items-center gap-space-16 hover:shadow-clay transition">
                    <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[22px] text-amber-deep">gavel</span>
                    </div>
                    <div className="flex-1">
                      <span className="font-mono-md text-[11px] text-amber-deep uppercase tracking-wider font-bold block">CÓ VẤN ĐỀ?</span>
                      <span className="font-display font-bold text-[14px] text-text-primary">Tạo tranh chấp · Còn 48h</span>
                      <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Win rate trung bình 23% · CS phản hồi 24h</p>
                    </div>
                    <span className="material-symbols-rounded !text-[20px] text-amber-deep">arrow_forward</span>
                  </a>
                )}
      
                {/* Review section (completed) */}
                {isCompleted && (
                  <ReviewSection
                    collectorName={collector.name}
                    hubName="Hub Q.7"
                    alreadyReviewed={isTierC}
                    collectorRating={5}
                    hubRating={5}
                    collectorTags={['Đúng giờ', 'Cân chuẩn', 'Lịch sự']}
                    reviewText="Anh Hùng đến đúng giờ, cân lại 2 lần khi tôi yêu cầu. Hub xử lý nhanh, BOM thực có video timelapse minh bạch."
                    reviewedAt="08/05/2026"
                  />
                )}
              </div>
      
              {/* RIGHT col-span-5: dense sidebar */}
              <div className="col-span-5 flex flex-col gap-space-16">
                {/* Collector contact (expanded) */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[14px]">person_pin_circle</span>
                    COLLECTOR
                  </span>
                  <div className="flex items-start gap-space-12 mb-space-16 min-w-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold text-[22px] shadow-clay-sm shrink-0">
                      {collector.name.split(' ').slice(-1)[0][0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-space-8 mb-space-4 flex-wrap">
                        <span className="font-display font-extrabold text-[15px] text-text-primary truncate">{collector.name}</span>
                        <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold shrink-0">Tier {collector.tier}</span>
                      </div>
                      <div className="flex items-center gap-[2px] mb-space-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <span className={cx(['material-symbols-rounded fill !text-[13px]', s <= Math.floor(collector.rating) ? 'text-amber-deep' : 'text-text-tertiary opacity-30'])}>star</span>
                        ))}
                        <span className="font-mono-md text-[11px] text-text-primary font-bold tabular-nums ml-space-4">{collector.rating}</span>
                      </div>
                      <span className="font-mono-md text-[10px] text-text-tertiary block truncate">{collector.completedOrders} đơn · {collector.vehicle}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-space-8">
                    <a href={`tel:${collector.phone}`} className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl p-space-12 shadow-clay-sm hover:shadow-clay flex flex-col items-center gap-space-4 transition">
                      <span className="material-symbols-rounded fill !text-[20px] text-tier-s">call</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold">Gọi</span>
                    </a>
                    <a href={`/orders/${order.id}/chat`} className="bg-clay-sky border-2 border-info/30 rounded-2xl p-space-12 shadow-clay-sm hover:shadow-clay flex flex-col items-center gap-space-4 transition">
                      <span className="material-symbols-rounded fill !text-[20px] text-info">chat</span>
                      <span className="font-mono-md text-[11px] text-info font-bold">Chat</span>
                    </a>
                    <a href="/disputes/new" className="bg-clay-blush border-2 border-tier-h/30 rounded-2xl p-space-12 shadow-clay-sm hover:shadow-clay flex flex-col items-center gap-space-4 transition">
                      <span className="material-symbols-rounded fill !text-[20px] text-tier-h">flag</span>
                      <span className="font-mono-md text-[11px] text-tier-h font-bold">Báo cáo</span>
                    </a>
                  </div>
                </div>
      
                {/* Pickup address with mini map */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">location_on</span>
                    ĐỊA CHỈ THU GOM
                  </span>
                  {/* Mini map */}
                  <div className="rounded-2xl overflow-hidden border-2 border-border-subtle shadow-clay-sm relative h-[140px] bg-gradient-to-br from-clay-mint via-clay-sky to-clay-butter mb-space-12">
                    <svg viewBox="0 0 400 140" className="absolute inset-0 w-full h-full opacity-40">
                      <g stroke="#88AA77" strokeWidth="0.5" fill="none">
                        <line x1="0" y1="35" x2="400" y2="35"/>
                        <line x1="0" y1="70" x2="400" y2="70"/>
                        <line x1="0" y1="105" x2="400" y2="105"/>
                        <line x1="100" y1="0" x2="100" y2="140"/>
                        <line x1="200" y1="0" x2="200" y2="140"/>
                        <line x1="300" y1="0" x2="300" y2="140"/>
                      </g>
                      <path d="M0 70 Q150 50 250 80 T400 60" stroke="#FAFAF7" strokeWidth="6" fill="none"/>
                      <path d="M180 0 Q200 70 220 140" stroke="#FAFAF7" strokeWidth="4" fill="none"/>
                    </svg>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-tier-s text-white flex items-center justify-center shadow-clay-lg animate-pulse">
                        <span className="material-symbols-rounded fill !text-[24px]">home</span>
                      </div>
                    </div>
                    <div className="absolute top-space-8 left-space-8 bg-bg-elevated/95 backdrop-blur rounded-xl px-space-8 py-[2px] shadow-clay-sm flex items-center gap-space-4">
                      <span className="material-symbols-rounded fill !text-[12px] text-tier-s">my_location</span>
                      <span className="font-mono-md text-[10px] text-text-primary font-bold tabular-nums">10.74°N · 106.72°E</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-4 min-w-0">
                    <span className="font-display font-bold text-[14px] text-text-primary leading-snug break-words">{USER.address}</span>
                    <span className="font-mono-md text-[11px] text-text-tertiary truncate">{USER.district}</span>
                  </div>
                  <div className="mt-space-12 p-space-12 bg-bg-surface rounded-2xl border border-border-subtle flex items-start gap-space-8 min-w-0">
                    <span className="material-symbols-rounded !text-[16px] text-text-tertiary shrink-0 mt-[2px]">notes</span>
                    <p className="font-body-md text-[12px] text-text-secondary leading-relaxed flex-1 min-w-0">Cổng B · Bảo vệ ghi tên · Gọi trước 5 phút</p>
                  </div>
                </div>
      
                {/* Hub Tier badge (Tier C) */}
                {isTierC && (
                  <HubTierBadge
                    hubName="Hub Q.7 RE-LOOP"
                    hubTier={3}
                    iso14001={true}
                    capacityKgPerDay={2400}
                    staffCount={18}
                    spotCheckPassed={47}
                    spotCheckTotal={50}
                  />
                )}
      
                {/* GP + CO2 impact combined */}
                <div className="grid grid-cols-2 gap-space-12">
                  <div className="bg-clay-mint rounded-[20px] shadow-clay-sm border-2 border-tier-s/30 p-space-16 flex flex-col min-w-0 overflow-hidden">
                    <span className="material-symbols-rounded fill !text-[22px] text-tier-s">redeem</span>
                    <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-bold mt-space-8 block">GP EARNED</span>
                    <span className="font-display font-extrabold text-[26px] text-tier-s tabular-nums leading-none mt-space-4 truncate">+{gpEarned}</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4 truncate">1 GP = 1.000đ</span>
                    <a href="/rewards" className="mt-space-12 font-mono-md text-[11px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4 truncate">
                      Đổi quà
                      <span className="material-symbols-rounded !text-[12px]">arrow_forward</span>
                    </a>
                  </div>
                  <div className="bg-clay-peach rounded-[20px] shadow-clay-sm border-2 border-tier-c/30 p-space-16 flex flex-col min-w-0 overflow-hidden">
                    <span className="material-symbols-rounded fill !text-[22px] text-tier-c">eco</span>
                    <span className="font-mono-md text-[10px] text-tier-c uppercase tracking-wider font-bold mt-space-8 block">CO₂ TRÁNH</span>
                    <div className="flex items-baseline gap-space-4 mt-space-4 min-w-0">
                      <span className="font-display font-extrabold text-[26px] text-tier-c tabular-nums leading-none truncate">−{co2Saved}</span>
                      <span className="font-mono-md text-[12px] text-tier-c font-bold">kg</span>
                    </div>
                    <span className="font-mono-md text-[10px] text-text-tertiary mt-space-4 truncate">≈ 1 cây 6 tháng</span>
                    <a href="/impact" className="mt-space-12 font-mono-md text-[11px] text-tier-c font-bold hover:underline inline-flex items-center gap-space-4 truncate">
                      Xem impact
                      <span className="material-symbols-rounded !text-[12px]">arrow_forward</span>
                    </a>
                  </div>
                </div>
      
                {/* Order metadata */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-16">
                    <span className="material-symbols-rounded fill !text-[14px]">receipt_long</span>
                    CHI TIẾT ĐƠN
                  </span>
                  <dl className="flex flex-col divide-y divide-border-subtle">
                    {[
                      { k: 'Mã đơn', v: order.id, mono: true },
                      { k: 'Payment ref', v: `ZP-${order.id.slice(-6)}`, mono: true },
                      { k: 'Slot thu gom', v: '14:00 – 16:00 · ' + (order.createdAt.split('T')[0]), mono: false },
                      { k: 'Phương thức', v: 'ZaloPay (mặc định)', mono: false },
                      { k: 'Cân chuẩn', v: 'QTĐLVN 252 tem niêm phong', mono: false },
                      { k: 'Chính sách giá', v: order.tier === 'S' ? 'Giá CHẮC CHẮN' : order.tier === 'C' ? 'Tạm ứng + BOM thực' : 'Speed/Auction', mono: false },
                    ].map((row) => (
                      <div className="flex flex-col gap-space-4 py-space-8 first:pt-0 last:pb-0 min-w-0">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold">{row.k}</span>
                        <span className={cx(['text-[13px] text-text-primary font-bold leading-snug break-words', row.mono ? 'font-mono-md tabular-nums' : 'font-body-md'])}>{row.v}</span>
                      </div>
                    ))}
                  </dl>
                </div>
      
                {/* Receipt + Invoice download */}
                <div className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold flex items-center gap-space-8 mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">file_download</span>
                    TẢI CHỨNG TỪ
                  </span>
                  <div className="flex flex-col gap-space-8">
                    <button className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl p-space-12 shadow-clay-sm hover:shadow-clay flex items-center gap-space-12 transition min-w-0">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                        <span className="material-symbols-rounded fill !text-[20px] text-tier-s">receipt</span>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="font-display font-bold text-[13px] text-text-primary block truncate">Biên lai PDF</span>
                        <span className="font-mono-md text-[11px] text-text-tertiary block truncate">~124 KB · MST RE-LOOP</span>
                      </div>
                      <span className="material-symbols-rounded !text-[18px] text-tier-s shrink-0">download</span>
                    </button>
                    <button className="bg-clay-sky border-2 border-info/30 rounded-2xl p-space-12 shadow-clay-sm hover:shadow-clay flex items-center gap-space-12 transition min-w-0">
                      <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm shrink-0">
                        <span className="material-symbols-rounded fill !text-[20px] text-info">description</span>
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <span className="font-display font-bold text-[13px] text-text-primary block truncate">Hoá đơn GTGT</span>
                        <span className="font-mono-md text-[11px] text-text-tertiary block truncate">Auto · sẵn 30 ngày</span>
                      </div>
                      <span className="material-symbols-rounded !text-[18px] text-info shrink-0">download</span>
                    </button>
                  </div>
                </div>
      
                {/* Reorder + Help */}
                <div className="grid grid-cols-2 gap-space-12">
                  <a href="/orders/new" className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-border-subtle hover:shadow-clay hover:-translate-y-[2px] transition-all p-space-16 flex flex-col gap-space-8 min-w-0 overflow-hidden">
                    <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[20px] text-tier-s">add_circle</span>
                    </div>
                    <span className="font-display font-bold text-[13px] text-text-primary leading-tight">Đặt đơn tương tự</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary truncate block">Tier {order.tier}</span>
                  </a>
                  <a href="/help" className="bg-bg-elevated rounded-[20px] shadow-clay-sm border border-border-subtle hover:shadow-clay hover:-translate-y-[2px] transition-all p-space-16 flex flex-col gap-space-8 min-w-0 overflow-hidden">
                    <div className="w-10 h-10 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm">
                      <span className="material-symbols-rounded fill !text-[20px] text-info">support_agent</span>
                    </div>
                    <span className="font-display font-bold text-[13px] text-text-primary leading-tight">Cần hỗ trợ?</span>
                    <span className="font-mono-md text-[10px] text-text-tertiary truncate block">FAQ · 1900-RELOOP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
