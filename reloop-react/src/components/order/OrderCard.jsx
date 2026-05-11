import { cx } from '@/lib/cx';
import TierBadge from '../ui/TierBadge';
import StatusChip from '../ui/StatusChip';
import { formatVND, formatRelative, formatWeight } from '../../lib/format';

export default function OrderCard({ order, variant = 'card' }) {
  const href = `/orders/${order.id}.html`;
  const displayAmount = order.amount ?? order.advance ?? 0;
  const showTotal = order.status === 'COMPLETED';
  
  const tierIconMap = {
    S: 'water_bottle',
    B: 'kitchen',
    C: 'memory',
    H: 'battery_alert',
  };
  const tierBgMap = {
    S: 'bg-clay-mint',
    B: 'bg-clay-butter',
    C: 'bg-clay-peach',
    H: 'bg-clay-blush',
  };
  const tierTextMap = {
    S: 'text-tier-s',
    B: 'text-amber-deep',
    C: 'text-tier-c',
    H: 'text-tier-h',
  };
  return (
    <>
      {variant === 'card' && (
        <a
          href={href}
          className="block bg-bg-elevated border border-border-subtle rounded-[28px] p-space-24 shadow-clay-sm hover:shadow-clay-lg hover:-translate-y-1 transition-all duration-300 group"
        >
          <div className="flex items-center gap-space-16 mb-space-16">
            <div className={cx(["w-14 h-14 rounded-2xl flex items-center justify-center shadow-inset-soft shrink-0", tierBgMap[order.tier]])}>
              <span className={cx(["material-symbols-rounded fill !text-[28px]", tierTextMap[order.tier]])}>{tierIconMap[order.tier]}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-space-8 mb-space-4">
                <span className="font-display font-semibold text-[15px] text-text-primary truncate">{order.item}</span>
                <TierBadge tier={order.tier} size="sm" />
              </div>
              <div className="font-mono-md text-[11px] text-text-tertiary">{order.id} · {formatWeight(order.weight)}</div>
            </div>
          </div>
          <div className="flex items-baseline justify-between pt-space-16 border-t border-border-subtle">
            <div>
              <div className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider">
                {showTotal ? 'Đã nhận' : order.status === 'PENDING_VERIFY' ? 'Tạm ứng' : 'Dự kiến'}
              </div>
              <div className="font-mono-md text-[20px] text-text-primary font-bold tabular-nums mt-space-4">{formatVND(displayAmount)}</div>
            </div>
            <StatusChip status={order.status} />
          </div>
          <div className="mt-space-12 flex items-center justify-between">
            <span className="font-mono-md text-[11px] text-text-tertiary">{formatRelative(order.completedAt ?? order.createdAt)}</span>
            <span className="material-symbols-rounded !text-[18px] text-text-tertiary group-hover:text-tier-s group-hover:translate-x-1 transition-all">arrow_forward</span>
          </div>
        </a>
      )}
      
      {variant === 'row' && (
        <a
          href={href}
          className="flex items-center gap-space-16 p-space-16 bg-bg-elevated hover:bg-bg-surface transition-colors group"
        >
          <div className={cx(["w-12 h-12 rounded-2xl flex items-center justify-center shadow-inset-soft shrink-0", tierBgMap[order.tier]])}>
            <span className={cx(["material-symbols-rounded fill !text-[24px]", tierTextMap[order.tier]])}>{tierIconMap[order.tier]}</span>
          </div>
          <div className="flex-1 flex flex-col gap-space-4 min-w-0">
            <div className="flex items-center gap-space-8">
              <span className="font-display font-semibold text-[15px] text-text-primary truncate">{order.item}</span>
              <TierBadge tier={order.tier} size="sm" />
            </div>
            <span className="font-mono-md text-[11px] text-text-tertiary">{order.id} · {formatWeight(order.weight)} · {formatRelative(order.completedAt ?? order.createdAt)}</span>
          </div>
          <StatusChip status={order.status} />
          <div className="text-right min-w-[120px]">
            <span className="font-mono-md text-[16px] text-text-primary font-bold tabular-nums block">{formatVND(displayAmount)}</span>
            <span className="font-mono-md text-[10px] text-text-tertiary uppercase">
              {order.status === 'COMPLETED' ? 'Đã nhận' : order.status === 'PENDING_VERIFY' ? 'Tạm ứng' : ''}
            </span>
          </div>
          <span className="material-symbols-rounded !text-[20px] text-text-tertiary group-hover:text-tier-s group-hover:translate-x-1 transition-all">chevron_right</span>
        </a>
      )}
    </>
  );
}
