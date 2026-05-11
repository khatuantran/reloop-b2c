import { cx } from '@/lib/cx';
import TierBadge from '../../components/ui/TierBadge';
import SupportBot from '../../components/illustrations/SupportBot';
import { ORDERS } from '../../lib/mock';

export default function Chat() {
  // Prototype — hội thoại dựng sẵn, không có AI/backend thật.
  const messages = [
    { from: 'system', text: 'Trợ lý ảo RE-LOOP · không nhập mật khẩu / OTP / mã đơn nhạy cảm vào đây', time: '15:02' },
    { from: 'bot', text: 'Chào Linh 👋 Mình là RE-LOOP AI — trợ lý ảo. Mình giúp được về giá, đơn hàng, ví, tranh chấp, Green Points… Hỏi tự nhiên thôi nhé!', time: '15:02' },
    { from: 'me', text: 'BOM thực là gì? Tại sao Tier C phải chờ?', time: '15:03', read: true },
    {
      from: 'bot', time: '15:03',
      text: 'BOM (Bill of Materials) thực là bảng kê chi tiết vật liệu sau khi Hub Q.7 rã xác — ví dụ: 1.85kg đồng + 5.10kg sắt + 1.05kg nhựa. Tier C là hỗn hợp linh kiện nên giá thật phụ thuộc % từng loại, chỉ chốt sau khi cân từng vật liệu (≤24h). Phần chênh so với tạm ứng tự động về ZaloPay.',
      chips: [{ label: 'Đọc thêm trong FAQ', icon: 'help', href: '/help.html' }],
    },
    { from: 'me', text: 'Đơn RL-2026-001240 của mình đang ở đâu?', time: '15:05', read: true },
    {
      from: 'bot', time: '15:05',
      text: 'Đơn RL-2026-001240 (Tier C · Mainboard PC ATX) đang ở trạng thái Pending Verify — Hub Q.7 đang rã xác, BOM thực dự kiến trong ~24h. Tạm ứng 60.000đ đã HOLD trong ví ảo.',
      chips: [
        { label: 'Xem chi tiết đơn', icon: 'receipt_long', href: '/orders/RL-2026-001240.html' },
        { label: 'Chuỗi hành trình', icon: 'route', href: '/orders/RL-2026-001240.html' },
      ],
    },
    { from: 'me', text: 'Hold ví ảo có rút ZaloPay được không?', time: '15:07', read: true },
    {
      from: 'bot', time: '15:07',
      text: 'Chưa rút được — Hold ví ảo là tạm ứng cam kết, chỉ tự động chuyển ZaloPay sau khi Hub verify BOM thực (mass-balance ≥ 90%). Nếu quá 72h Hub chưa verify, hệ thống auto-release toàn bộ Hold + bonus 5% phạt chậm cho bạn.',
    },
    {
      from: 'bot', time: '15:07',
      text: 'Mình giải đáp được không? Nếu cần người thật, mình chuyển bạn sang CSKH ngay nhé.',
      chips: [
        { label: 'Chuyển CSKH thật', icon: 'support_agent', href: '/help.html', tone: 'amber' },
        { label: 'Tạo ticket', icon: 'add_comment', href: '/help.html' },
      ],
    },
  ];
  
  const topics = [
    { t: 'BOM thực là gì?', icon: 'fact_check' },
    { t: 'Hold ví ảo có rút được không?', icon: 'account_balance_wallet' },
    { t: 'Khác biệt Tier S / B / C / H', icon: 'category' },
    { t: 'Collector của tôi đang ở đâu?', icon: 'my_location' },
    { t: 'Cách mở tranh chấp BOM', icon: 'gavel' },
    { t: 'Đổi Green Points', icon: 'redeem' },
  ];
  
  const botCan = [
    { icon: 'bolt', t: 'Trả lời tức thì 24/7', d: 'Không phải chờ giờ làm việc' },
    { icon: 'manage_search', t: 'Tra cứu đơn của bạn', d: 'Trạng thái · collector · thanh toán · BOM thực' },
    { icon: 'route', t: 'Hướng dẫn từng bước', d: 'Flow đặt đơn, giao dịch tại nhà, tranh chấp' },
  ];
  
  const faqShortcuts = [
    { t: 'BOM thực là gì? Tại sao phải chờ?', icon: 'fact_check', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { t: 'Hold ví ảo có rút ZaloPay không?', icon: 'account_balance_wallet', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { t: 'Vì sao người mới chỉ tạm ứng 30%?', icon: 'shield', clay: 'bg-clay-sky', accent: 'text-info' },
    { t: 'Collector trễ hoặc không đến thì sao?', icon: 'local_shipping', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { t: 'Dispute BOM thực phải làm sao?', icon: 'gavel', clay: 'bg-clay-peach', accent: 'text-tier-c' },
  ];
  
  const recentOrders = ORDERS.slice(0, 3);
  const tierAccent = { S: 'text-tier-s', B: 'text-amber-deep', C: 'text-tier-c', H: 'text-tier-h' };
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/help" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Trung tâm hỗ trợ
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[32px] px-space-48 py-space-32 border border-border-subtle mb-space-24 relative overflow-hidden">
              <svg className="absolute top-space-24 left-[44%] w-7 h-7" viewBox="0 0 28 28" fill="none"><path d="M14 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="#52E08D" opacity="0.55" /></svg>
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">smart_toy</span>
                    TRỢ LÝ ẢO · 24/7
                  </span>
                  <h1 className="font-display-l text-[48px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">RE-LOOP AI — hỏi gì cũng được</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    Trả lời tức thì · tra cứu đơn của bạn · chuyển CSKH thật bất kỳ lúc nào
                  </p>
                  <div className="flex flex-wrap gap-space-12">
                    {['Giá & BOM thực', 'Hold ví ảo & ZaloPay', 'Collector & tracking', 'Tranh chấp & GP'].map((c) => (
                      <span className="px-space-12 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm flex items-center gap-space-8 font-mono-md text-[12px] text-text-primary font-semibold">
                        <span className="w-[6px] h-[6px] rounded-full bg-tier-s"></span>{c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative h-[220px]">
                  <SupportBot className="absolute inset-0 w-full h-full" />
                  <span className="absolute bottom-space-12 right-space-8 px-space-12 py-space-8 rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm font-mono-md text-[11px] text-tier-s font-bold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">bolt</span>Phản hồi ~tức thì
                  </span>
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[1fr_320px] gap-space-24">
              {/* Chat panel */}
              <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden flex flex-col h-[680px]">
                {/* Header */}
                <div className="px-space-32 py-space-24 border-b border-border-subtle flex items-center gap-space-16 bg-gradient-to-r from-clay-mint/40 to-bg-elevated">
                  <div className="relative w-12 h-12 shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-tier-s/15 animate-ping"></div>
                    <div className="relative w-full h-full rounded-2xl bg-lime flex items-center justify-center shadow-clay-lime"><span className="material-symbols-rounded fill !text-[26px] text-text-on-lime">smart_toy</span></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-space-8">
                      <span className="font-display font-bold text-[15px] text-text-primary">RE-LOOP AI</span>
                      <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/40 font-mono-md text-[10px] text-tier-s font-bold uppercase tracking-wider">Trợ lý ảo</span>
                    </div>
                    <div className="flex items-center gap-space-8 mt-space-4">
                      <span className="w-2 h-2 rounded-full bg-tier-s shadow-[0_0_8px_rgba(82,224,141,0.7)]"></span>
                      <span className="font-mono-md text-[11px] text-text-tertiary">Đang hoạt động · phản hồi ~tức thì · GPT-trợ lý nội bộ</span>
                    </div>
                  </div>
                  <a href="/help" className="w-10 h-10 rounded-full bg-clay-butter border border-amber-deep/40 shadow-clay-sm flex items-center justify-center hover:shadow-clay transition" title="Gặp CSKH thật">
                    <span className="material-symbols-rounded fill !text-[20px] text-amber-deep">support_agent</span>
                  </a>
                  <a href="/help" className="w-10 h-10 rounded-full bg-bg-elevated border border-border-subtle shadow-clay-sm flex items-center justify-center hover:shadow-clay transition" title="Câu hỏi thường gặp">
                    <span className="material-symbols-rounded !text-[20px] text-text-tertiary">help</span>
                  </a>
                </div>
      
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-space-32 flex flex-col gap-space-12">
                  {messages.map((m) => {
                    if (m.from === 'system') {
                      return (
                        <div className="self-center bg-clay-butter border border-amber-deep/30 rounded-2xl px-space-16 py-space-8 shadow-clay-sm">
                          <span className="font-mono-md text-[11px] text-amber-deep font-bold flex items-center gap-space-8">
                            <span className="material-symbols-rounded fill !text-[14px]">shield</span>{m.text}
                          </span>
                        </div>
                      );
                    }
                    const isMe = m.from === 'me';
                    if (isMe) {
                      return (
                        <div className="self-end items-end flex flex-col max-w-[72%]">
                          <div className="rounded-3xl px-space-16 py-space-12 shadow-clay-sm bg-lime text-text-on-lime rounded-br-md">
                            <p className="font-body-md text-[14px] leading-relaxed">{m.text}</p>
                          </div>
                          <div className="flex items-center gap-space-4 mt-space-4 px-space-8">
                            <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums">{m.time}</span>
                            <span className={cx(['material-symbols-rounded !text-[12px]', m.read ? 'text-tier-s' : 'text-text-tertiary'])}>{m.read ? 'done_all' : 'done'}</span>
                          </div>
                        </div>
                      );
                    }
                    // bot
                    return (
                      <div className="self-start flex items-start gap-space-12 max-w-[78%]">
                        <div className="w-8 h-8 rounded-xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0 mt-space-4"><span className="material-symbols-rounded fill !text-[16px] text-tier-s">smart_toy</span></div>
                        <div className="flex flex-col items-start">
                          <div className="rounded-3xl rounded-bl-md px-space-16 py-space-12 shadow-clay-sm bg-bg-surface border border-border-subtle text-text-primary">
                            <p className="font-body-md text-[14px] leading-relaxed text-col">{m.text}</p>
                            {m.chips && (
                              <div className="flex flex-wrap gap-space-8 mt-space-12">
                                {m.chips.map((c) => (
                                  <a href={c.href} className={cx(['px-space-12 py-space-8 rounded-full border font-mono-md text-[12px] font-semibold shadow-clay-sm hover:shadow-clay transition inline-flex items-center gap-space-8',
                                    c.tone === 'amber' ? 'bg-clay-butter border-amber-deep/40 text-amber-deep' : 'bg-clay-mint border-tier-s/30 text-tier-s'])}>
                                    <span className="material-symbols-rounded fill !text-[14px]">{c.icon}</span>{c.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="font-mono-md text-[10px] text-text-tertiary tabular-nums mt-space-4 px-space-8">RE-LOOP AI · {m.time}</span>
                        </div>
                      </div>
                    );
                  })}
                  {/* typing indicator */}
                  <div className="self-start flex items-center gap-space-12">
                    <div className="w-8 h-8 rounded-xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[16px] text-tier-s">smart_toy</span></div>
                    <div className="bg-bg-surface border border-border-subtle rounded-3xl rounded-bl-md px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-4">
                      <span className="w-2 h-2 rounded-full bg-text-tertiary/60 animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-text-tertiary/60 animate-pulse" style={{ 'animationDelay': '0.2s' }}></span>
                      <span className="w-2 h-2 rounded-full bg-text-tertiary/60 animate-pulse" style={{ 'animationDelay': '0.4s' }}></span>
                    </div>
                  </div>
                </div>
      
                {/* Quick-reply topics */}
                <div className="px-space-32 pb-space-12 flex gap-space-8 flex-wrap">
                  <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-bold w-full mb-space-4">Chủ đề thường hỏi</span>
                  {topics.map((q) => (
                    <button className="px-space-12 py-space-8 rounded-full bg-clay-mint border border-tier-s/30 text-tier-s font-mono-md text-[12px] font-semibold shadow-clay-sm hover:shadow-clay transition inline-flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[14px]">{q.icon}</span>{q.t}
                    </button>
                  ))}
                  <a href="/help" className="px-space-12 py-space-8 rounded-full bg-clay-butter border border-amber-deep/40 text-amber-deep font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay transition inline-flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[14px]">support_agent</span>Gặp CSKH thật
                  </a>
                </div>
      
                {/* Composer */}
                <div className="px-space-32 py-space-16 border-t border-border-subtle bg-bg-elevated/60">
                  <div className="bg-bg-surface rounded-3xl border border-border-subtle shadow-inset-soft px-space-16 py-space-8 flex items-center gap-space-12">
                    <button className="w-10 h-10 rounded-full bg-clay-mint border border-tier-s/30 shadow-clay-sm flex items-center justify-center hover:shadow-clay transition" title="Đính kèm ảnh / đơn">
                      <span className="material-symbols-rounded fill !text-[20px] text-tier-s">add</span>
                    </button>
                    <input type="text" className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary placeholder:text-text-tertiary" placeholder="Hỏi RE-LOOP AI… (vd: đơn mới nhất của tôi đang ở đâu?)" />
                    <button className="w-10 h-10 rounded-full bg-text-primary text-white shadow-clay flex items-center justify-center hover:-translate-y-[1px] transition">
                      <span className="material-symbols-rounded fill !text-[20px]">send</span>
                    </button>
                  </div>
                  <p className="font-mono-md text-[10px] text-text-tertiary mt-space-8 px-space-8 flex items-center gap-space-4">
                    <span className="material-symbols-rounded !text-[12px]">info</span>Trợ lý ảo có thể nhầm · xác nhận thông tin quan trọng với CSKH 1900-RELOOP
                  </p>
                </div>
              </section>
      
              {/* Sidebar */}
              <aside className="flex flex-col gap-space-16">
                <div className="bg-clay-mint rounded-[24px] shadow-clay-sm border-2 border-tier-s/30 p-space-24">
                  <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12"><span className="material-symbols-rounded fill !text-[24px] text-tier-s">smart_toy</span></div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block">RE-LOOP AI LÀM ĐƯỢC GÌ</span>
                  <div className="mt-space-12 flex flex-col gap-space-8">
                    {botCan.map((b) => (
                      <div className="flex items-start gap-space-12 p-space-12 bg-bg-elevated/70 rounded-xl">
                        <div className="w-8 h-8 rounded-xl bg-clay-mint flex items-center justify-center shadow-clay-sm shrink-0"><span className="material-symbols-rounded fill !text-[16px] text-tier-s">{b.icon}</span></div>
                        <div className="flex-1 text-col"><span className="font-display font-bold text-[12px] text-text-primary block">{b.t}</span><span className="font-mono-md text-[10px] text-text-tertiary block mt-[2px]">{b.d}</span></div>
                      </div>
                    ))}
                  </div>
                </div>
      
                <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">CÂU HỎI THƯỜNG GẶP</span>
                  <div className="flex flex-col gap-space-8">
                    {faqShortcuts.map((f) => (
                      <a href="/help" className="flex items-center gap-space-12 p-space-12 rounded-xl bg-bg-surface hover:shadow-clay-sm transition group">
                        <div className={cx(['w-8 h-8 rounded-xl flex items-center justify-center shadow-clay-sm shrink-0', f.clay])}><span className={cx(['material-symbols-rounded fill !text-[16px]', f.accent])}>{f.icon}</span></div>
                        <span className="flex-1 font-display font-bold text-[12px] text-text-primary text-col leading-tight">{f.t}</span>
                        <span className="material-symbols-rounded !text-[16px] text-text-tertiary group-hover:translate-x-1 transition">chevron_right</span>
                      </a>
                    ))}
                  </div>
                </div>
      
                <div className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold flex items-center gap-space-8 block"><span className="material-symbols-rounded fill !text-[14px]">inventory_2</span>ĐƠN GẦN ĐÂY</span>
                  <div className="mt-space-12 flex flex-col gap-space-8">
                    {recentOrders.map((o) => (
                      <div className="flex items-center gap-space-12 p-space-12 bg-bg-elevated/70 rounded-xl">
                        <TierBadge tier={o.tier} size="sm" />
                        <div className="flex-1 min-w-0 text-col">
                          <span className="font-display font-bold text-[12px] text-text-primary block truncate">{o.item}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary">{o.id}</span>
                        </div>
                        <a href="/help/chat" className="font-mono-md text-[10px] text-info font-bold inline-flex items-center gap-space-4 hover:underline shrink-0">Hỏi AI<span className="material-symbols-rounded !text-[12px]">arrow_forward</span></a>
                      </div>
                    ))}
                  </div>
                </div>
      
                <div className="bg-clay-butter rounded-[24px] shadow-clay-sm border-2 border-amber-deep/30 p-space-24">
                  <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12"><span className="material-symbols-rounded fill !text-[24px] text-amber-deep">support_agent</span></div>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-amber-deep font-bold block">CẦN NGƯỜI THẬT?</span>
                  <h4 className="font-display font-extrabold text-[18px] text-text-primary mt-space-8">Hotline 1900-RELOOP</h4>
                  <p className="font-body-md text-[12px] text-text-secondary mt-space-4 text-col">CSKH 6h–22h · hotline khẩn 22h–6h. AI sẽ chuyển ngữ cảnh hội thoại cho agent.</p>
                  <a href="/help" className="mt-space-12 w-full bg-text-primary text-white px-space-16 py-space-12 rounded-2xl font-mono-md text-[12px] font-bold shadow-clay flex items-center justify-center gap-space-8 hover:-translate-y-[1px] transition">
                    <span className="material-symbols-rounded fill !text-[16px]">add_comment</span>Tạo ticket CSKH
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </main>
    </>
  );
}
