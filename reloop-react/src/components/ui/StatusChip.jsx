import { cx } from '@/lib/cx';

export default function StatusChip({ status }) {
  const map = {
    COMPLETED: { label: 'Hoàn tất', bg: 'bg-clay-mint', border: 'border-tier-s/50', text: 'text-tier-s', icon: 'check_circle' },
    PENDING_VERIFY: { label: 'Chờ Hub verify', bg: 'bg-clay-butter', border: 'border-amber-deep/50', text: 'text-amber-deep', icon: 'hourglass_top' },
    IN_TRANSIT: { label: 'Đang đến', bg: 'bg-clay-sky', border: 'border-info/50', text: 'text-info', icon: 'directions_bike' },
    AT_PICKUP: { label: 'Đang cân tại nhà', bg: 'bg-clay-sky', border: 'border-info/50', text: 'text-info', icon: 'scale' },
    CANCELLED: { label: 'Đã huỷ', bg: 'bg-clay-blush', border: 'border-tier-h/50', text: 'text-tier-h', icon: 'cancel' },
    HOLD: { label: 'HOLD ví ảo', bg: 'bg-clay-butter', border: 'border-amber-deep/50', text: 'text-amber-deep', icon: 'lock' },
    VERIFIED: { label: 'Verify ✓', bg: 'bg-clay-mint', border: 'border-tier-s/50', text: 'text-tier-s', icon: 'fact_check' },
    SETTLED: { label: 'Đã chuyển', bg: 'bg-lime', border: 'border-lime-deep', text: 'text-text-on-lime', icon: 'account_balance_wallet' },
  };
  
  const s = map[status];
  return (
    <>
      <span
        className={cx([
          'inline-flex items-center gap-space-4 px-space-12 py-[3px] rounded-full border-2 font-mono-md text-[11px] font-semibold',
          s.bg,
          s.border,
          s.text,
        ])}
      >
        <span className="material-symbols-rounded fill !text-[12px]">{s.icon}</span>
        {s.label}
      </span>
    </>
  );
}
