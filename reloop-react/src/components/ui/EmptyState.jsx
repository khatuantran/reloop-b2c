import { cx } from '@/lib/cx';

export default function EmptyState({ icon = 'inbox', title, body, variant = 'mint', children }) {
  const bgMap = {
    mint: 'bg-clay-mint',
    butter: 'bg-clay-butter',
    peach: 'bg-clay-peach',
    sky: 'bg-clay-sky',
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center py-space-96 gap-space-16">
        <div className={cx(['w-24 h-24 rounded-3xl flex items-center justify-center shadow-clay', bgMap[variant]])}>
          <span className="material-symbols-rounded fill !text-[44px] text-text-primary/70">{icon}</span>
        </div>
        <h3 className="font-h3 text-h3 text-text-primary mt-space-8">{title}</h3>
        {body && <p className="font-body-md text-body-md text-text-secondary max-w-[400px]">{body}</p>}
        {children}
      </div>
    </>
  );
}
