import { cx } from '@/lib/cx';
import { useParams } from 'react-router-dom';
import NotFound from '../../../components/NotFound';
import TierBadge from '../../../components/ui/TierBadge';
import { ORDERS, COLLECTORS, getOrderById, getCollectorById } from '../../../lib/mock';

export default function Chat() {
  const { id } = useParams();
  const order = getOrderById(id);
  if (!order) return <NotFound what="Đơn hàng" backTo="/orders" backLabel="Về danh sách đơn" />;
  const collector = getCollectorById(order.collectorId ?? 'c-001') ?? COLLECTORS['c-001'];
  
  const messages = [
    { from: 'collector', text: 'Em chào chị Linh, em là Hùng — collector RE-LOOP. Em đã nhận đơn của chị, đang trên đường đến.', time: '14:08', read: true },
    { from: 'system', text: 'Anh Hùng đã chia sẻ vị trí · ETA 12 phút', time: '14:08' },
    { from: 'me', text: 'Cảm ơn anh, em đợi trước cổng chung cư nhé', time: '14:09', read: true },
    { from: 'collector', text: 'Vâng chị, em mặc áo xanh RE-LOOP đeo huy hiệu Tier 3', time: '14:10', read: true },
    { from: 'me', text: 'Đơn của em là 8.4kg PET — em đã đóng vào 2 bao trong suốt rồi anh nhé', time: '14:10', read: true },
    { from: 'collector', text: 'Tốt quá chị, em sẽ cân ngay tại nhà bằng cân QTĐLVN 252 nhé. Có gì sai số em sẽ cân lại 2 lần', time: '14:11', read: true },
    { from: 'system', text: 'Anh Hùng cách bạn 200m · Sẵn sàng đón', time: '14:18' },
    { from: 'me', text: 'OK em thấy anh rồi nhé', time: '14:19', read: false },
  ];
  
  const quickReplies = [
    'Em đợi ở cổng',
    'Anh đến chậm bao nhiêu?',
    'Em có 2 bao 8kg',
    'Lên thẳng tầng 12 nhé',
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href={`/orders/${order.id}/track`} className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Về tracking
            </a>
      
            <div className="grid grid-cols-[1fr_320px] gap-space-24">
              {/* Chat panel */}
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden flex flex-col h-[680px]">
                {/* Header */}
                <div className="px-space-32 py-space-24 border-b border-border-subtle flex items-center gap-space-16 bg-gradient-to-r from-clay-mint/40 to-bg-elevated">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-clay-sky to-info flex items-center justify-center text-white font-display font-extrabold shadow-clay-sm">
                    {collector.name.split(' ').slice(-1)[0][0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-space-8">
                      <span className="font-display font-bold text-[15px] text-text-primary">{collector.name}</span>
                      <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/40 font-mono-md text-[10px] text-tier-s font-bold">Hub Tier {collector.tier}</span>
                    </div>
                    <div className="flex items-center gap-space-8 mt-space-4">
                      <span className="w-2 h-2 rounded-full bg-tier-s shadow-[0_0_8px_var(--lime)]"></span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">Đang online · ★ {collector.rating} · {collector.vehicle}</span>
                    </div>
                  </div>
                  <a href={`tel:${collector.phone ?? ''}`} className="w-10 h-10 rounded-full bg-clay-mint border border-tier-s/40 shadow-clay-sm flex items-center justify-center hover:shadow-clay transition">
                    <span className="material-symbols-rounded fill !text-[20px] text-tier-s">call</span>
                  </a>
                  <button className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle shadow-clay-sm flex items-center justify-center hover:shadow-clay transition" title="Báo cáo">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">flag</span>
                  </button>
                </div>
      
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-space-32 flex flex-col gap-space-12">
                  <div className="self-center bg-clay-butter border border-amber-deep/30 rounded-2xl px-space-16 py-space-8 shadow-clay-sm">
                    <span className="font-mono-md text-[11px] text-amber-deep font-bold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px]">shield</span>
                      Mọi tin nhắn được lưu để bảo vệ quyền lợi cả 2 bên
                    </span>
                  </div>
                  {messages.map((m) => {
                    if (m.from === 'system') {
                      return (
                        <div className="self-center flex items-center gap-space-8 my-space-8">
                          <span className="material-symbols-rounded fill !text-[14px] text-tier-s">my_location</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary font-semibold">{m.text}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{m.time}</span>
                        </div>
                      );
                    }
                    const isMe = m.from === 'me';
                    return (
                      <div className={cx(['flex flex-col max-w-[70%]', isMe ? 'self-end items-end' : 'self-start items-start'])}>
                        <div className={cx(['rounded-3xl px-space-16 py-space-12 shadow-clay-sm', isMe ? 'bg-lime text-text-on-lime rounded-br-md' : 'bg-bg-surface border border-border-subtle text-text-primary rounded-bl-md'])}>
                          <p className="font-body-md text-[14px] leading-relaxed">{m.text}</p>
                        </div>
                        <div className="flex items-center gap-space-4 mt-space-4 px-space-8">
                          <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{m.time}</span>
                          {isMe && (
                            <span className={cx(['material-symbols-rounded !text-[12px]', m.read ? 'text-tier-s' : 'text-text-tertiary'])}>
                              {m.read ? 'done_all' : 'done'}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
      
                {/* Quick replies */}
                <div className="px-space-32 pb-space-12 flex gap-space-8 flex-wrap">
                  {quickReplies.map((q) => (
                    <button className="px-space-12 py-space-8 rounded-full bg-clay-mint border border-tier-s/30 text-tier-s font-mono-md text-[12px] font-semibold shadow-clay-sm hover:shadow-clay transition">
                      {q}
                    </button>
                  ))}
                </div>
      
                {/* Composer */}
                <div className="px-space-32 py-space-16 border-t border-border-subtle bg-bg-elevated/60">
                  <div className="bg-bg-surface rounded-3xl border border-border-subtle shadow-inset-soft px-space-16 py-space-8 flex items-center gap-space-12">
                    <button className="w-10 h-10 rounded-full bg-clay-mint border border-tier-s/30 shadow-clay-sm flex items-center justify-center hover:shadow-clay transition" title="Đính kèm">
                      <span className="material-symbols-rounded fill !text-[20px] text-tier-s">add</span>
                    </button>
                    <input type="text" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" placeholder="Nhắn tin cho anh Hùng..." />
                    <button className="w-10 h-10 rounded-full bg-text-primary text-white shadow-clay flex items-center justify-center hover:-translate-y-[1px] transition">
                      <span className="material-symbols-rounded fill !text-[20px]">send</span>
                    </button>
                  </div>
                </div>
              </section>
      
              {/* Right sidebar: order context */}
              <aside className="flex flex-col gap-space-16">
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">ĐƠN HÀNG</span>
                  <div className="flex items-center gap-space-12 mb-space-12">
                    <TierBadge tier={order.tier} />
                    <span className="font-mono-md text-[12px] text-text-tertiary font-semibold">{order.id}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-[18px] text-text-primary leading-tight mb-space-8">{order.item}</h3>
                  <span className="font-mono-md text-[12px] text-text-secondary">{order.weight}kg · Đặt {order.createdAt.split('T')[0]}</span>
                  <a href={`/orders/${order.id}`} className="mt-space-12 w-full bg-bg-surface text-text-primary border border-border-subtle px-space-16 py-space-8 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay transition inline-flex items-center justify-center gap-space-8">
                    <span className="material-symbols-rounded !text-[16px]">receipt_long</span>
                    Xem chi tiết đơn
                  </a>
                </div>
      
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[28px] text-tier-s">my_location</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mt-space-8">VỊ TRÍ COLLECTOR</span>
                  <h4 className="font-display font-extrabold text-[24px] text-text-primary tabular-nums mt-space-4">200 m</h4>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-4">Từ vị trí của bạn · ETA 2 phút</p>
                  <a href={`/orders/${order.id}/track`} className="mt-space-12 w-full bg-text-primary text-white px-space-16 py-space-8 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay flex items-center justify-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">map</span>
                    Mở bản đồ
                  </a>
                </div>
      
                <div className="bg-clay-blush rounded-[24px] shadow-clay-sm border-2 border-tier-h/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[28px] text-tier-h">flag</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold block mt-space-8">BÁO CÁO COLLECTOR</span>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-8 mb-space-12">Phát hiện hành vi đáng ngờ? Báo cáo ẩn danh — Trust & Safety review trong 4h.</p>
                  <a href="/disputes/new" className="w-full bg-bg-elevated text-text-primary border border-border-subtle px-space-16 py-space-8 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay-sm flex items-center justify-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px] text-tier-h">flag</span>
                    Tạo báo cáo
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </main>
    </>
  );
}
