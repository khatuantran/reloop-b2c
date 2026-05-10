import { useMemo, useState } from 'react';
import { TRANSACTIONS } from '../../lib/mock';
import { formatVND, formatDateTime } from '../../lib/format';

const filters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'IN', label: 'Vào' },
  { id: 'OUT', label: 'Ra' },
  { id: 'HOLD', label: 'Hold' },
  { id: 'RELEASE', label: 'Release' },
] as const;

const typeMeta: Record<string, { icon: string; bg: string; text: string; sign: string }> = {
  IN: { icon: 'south_west', bg: 'bg-clay-mint', text: 'text-tier-s', sign: '+' },
  OUT: { icon: 'north_east', bg: 'bg-clay-blush', text: 'text-tier-h', sign: '−' },
  HOLD: { icon: 'lock', bg: 'bg-clay-butter', text: 'text-amber-deep', sign: '↓' },
  RELEASE: { icon: 'lock_open', bg: 'bg-clay-sky', text: 'text-info', sign: '↑' },
};

export default function TransactionHistory() {
  const [filter, setFilter] = useState<string>('all');

  const list = useMemo(() => {
    if (filter === 'all') return TRANSACTIONS;
    return TRANSACTIONS.filter((t) => t.type === filter);
  }, [filter]);

  return (
    <div className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
      <div className="flex items-baseline justify-between mb-space-24">
        <div>
          <span className="font-mono-md text-[12px] text-tier-s uppercase tracking-wider font-semibold">LỊCH SỬ</span>
          <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Giao dịch</h3>
        </div>
        <span className="font-mono-md text-[12px] text-text-tertiary">{list.length} mục</span>
      </div>

      <div className="flex gap-space-8 mb-space-24 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={[
              'px-space-16 py-space-8 rounded-full border-2 font-mono-md text-[12px] font-semibold transition-all',
              filter === f.id
                ? 'bg-clay-mint border-tier-s text-tier-s shadow-clay-sm'
                : 'bg-bg-elevated border-border-subtle text-text-secondary hover:border-border-default',
            ].join(' ')}
          >
            {f.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="py-space-48 text-center">
          <span className="font-body-md text-[14px] text-text-tertiary">Không có giao dịch nào</span>
        </div>
      ) : (
        <div className="flex flex-col gap-space-8">
          {list.map((t) => {
            const meta = typeMeta[t.type];
            return (
              <a
                key={t.id}
                href={t.orderId ? `/orders/${t.orderId}.html` : '#'}
                className="flex items-center gap-space-16 px-space-16 py-space-16 rounded-2xl bg-bg-surface hover:shadow-clay-sm transition-all border border-transparent hover:border-border-subtle"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-inset-soft ${meta.bg}`}>
                  <span className={`material-symbols-rounded fill !text-[20px] ${meta.text}`}>{meta.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-semibold text-[14px] text-text-primary block">{t.description}</span>
                  <span className="font-mono-md text-[11px] text-text-tertiary">{formatDateTime(t.date)}{t.orderId && ` · ${t.orderId}`}</span>
                </div>
                <span className={`font-mono-md text-[16px] font-bold tabular-nums ${meta.text}`}>
                  {meta.sign} {formatVND(t.amount)}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
