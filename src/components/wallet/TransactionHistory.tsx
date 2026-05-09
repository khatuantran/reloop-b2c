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

const typeMeta: Record<string, { icon: string; color: string; sign: string }> = {
  IN: { icon: 'south_west', color: 'text-success', sign: '+' },
  OUT: { icon: 'north_east', color: 'text-error', sign: '−' },
  HOLD: { icon: 'lock', color: 'text-warning', sign: '↓' },
  RELEASE: { icon: 'lock_open', color: 'text-info', sign: '↑' },
};

export default function TransactionHistory() {
  const [filter, setFilter] = useState<string>('all');

  const list = useMemo(() => {
    if (filter === 'all') return TRANSACTIONS;
    return TRANSACTIONS.filter((t) => t.type === filter);
  }, [filter]);

  return (
    <div className="bg-bg-elevated border border-border-subtle rounded-3xl p-space-32">
      <div className="flex items-baseline justify-between mb-space-24">
        <h3 className="font-h3 text-h3 text-text-primary">Lịch sử giao dịch</h3>
        <span className="font-mono-md text-[12px] text-text-tertiary">{list.length} mục</span>
      </div>

      <div className="flex gap-space-8 mb-space-24 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={[
              'px-space-12 py-space-4 rounded-full border font-body-md text-[12px] font-medium transition-colors',
              filter === f.id
                ? 'bg-success/10 border-success/40 text-success'
                : 'bg-bg-base border-border-subtle text-text-secondary hover:border-border-default',
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
                className="flex items-center gap-space-16 px-space-16 py-space-12 rounded-xl bg-bg-base border border-border-subtle hover:border-border-default transition-colors"
              >
                <div className={`w-10 h-10 rounded-full bg-bg-elevated flex items-center justify-center ${meta.color}`}>
                  <span className="material-symbols-outlined !text-[18px]">{meta.icon}</span>
                </div>
                <div className="flex-1">
                  <span className="font-body-md text-[14px] text-text-primary block">{t.description}</span>
                  <span className="font-mono-md text-[11px] text-text-tertiary">{formatDateTime(t.date)}{t.orderId && ` · ${t.orderId}`}</span>
                </div>
                <span className={`font-mono-md text-[16px] font-bold tabular-nums ${meta.color}`}>
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
