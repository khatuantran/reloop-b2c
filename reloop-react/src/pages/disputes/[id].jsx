import { cx } from '@/lib/cx';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import DisputeScene from '../../components/illustrations/DisputeScene';

export default function Paramid() {
  const { id } = useParams();
  
  const allDisputes = {
    'D-2026-0042': {
      id: 'D-2026-0042',
      orderId: 'RL-2026-001239',
      item: 'Dây điện 1.5mm² đồng',
      type: 'BOM_DISPUTE',
      typeLabel: 'BOM thực thiếu đồng',
      status: 'WON',
      statusLabel: 'Thắng',
      statusClay: 'bg-clay-mint',
      statusAccent: 'text-tier-s',
      refund: 28_300,
      bonus: 100,
      submittedAt: '03/05/2026 14:22',
      resolvedAt: '04/05/2026 09:15',
      timeline: [
        { stage: 'submitted', label: 'Gửi tranh chấp', actor: 'Bạn', time: '03/05 14:22', desc: 'Gửi 7 ảnh evidence + mô tả 240 từ', icon: 'send', clay: 'bg-clay-sky', accent: 'text-info', done: true },
        { stage: 'received', label: 'CS xác nhận', actor: 'Nguyễn Thanh (CS)', time: '03/05 17:45', desc: 'Tiếp nhận, mở case audit', icon: 'support_agent', clay: 'bg-clay-butter', accent: 'text-amber-deep', done: true },
        { stage: 'review', label: 'Audit team review', actor: 'Audit Team RE-LOOP', time: '04/05 08:30', desc: 'Kiểm chứng raw weighing log + Hub disassembly video, đối chiếu BOM Library', icon: 'fact_check', clay: 'bg-clay-peach', accent: 'text-tier-c', done: true },
        { stage: 'decision', label: 'Quyết định: THẮNG', actor: 'Audit Team', time: '04/05 09:15', desc: 'Kết luận: BOM thực Cu 1.85kg < kỳ vọng 2.20kg do Hub nhầm batch — hoàn 28.300đ chênh + 100 GP đền bù', icon: 'verified', clay: 'bg-clay-mint', accent: 'text-tier-s', done: true },
        { stage: 'refund', label: 'Hoàn tiền ZaloPay', actor: 'RE-LOOP Wallet', time: '04/05 09:18', desc: '+28.300đ chuyển ZaloPay · +100 GP cộng vào tài khoản', icon: 'paid', clay: 'bg-clay-mint', accent: 'text-tier-s', done: true },
      ],
      evidence: [
        { type: 'image', label: 'Ảnh dây đồng trước niêm phong', size: '2.4 MB' },
        { type: 'image', label: 'Cân tại nhà 4.2kg', size: '1.8 MB' },
        { type: 'image', label: 'Niêm phong QR', size: '1.2 MB' },
        { type: 'image', label: 'Hub receipt', size: '0.9 MB' },
        { type: 'video', label: 'Video unwrap 22s', size: '8.1 MB' },
      ],
      description: 'Đặt đơn dây điện 1.5mm² đồng nguyên bản — bao gồm 5 cuộn x 0.85kg = 4.25kg đồng + 0.10kg vỏ nhựa nhỏ. BOM thực Hub trả về chỉ ghi nhận 1.85kg đồng, thiếu 2.20kg so với kỳ vọng dải BOM Library. Có ảnh đầy đủ trước khi niêm phong và video unwrap, video có timestamp.',
    },
    'D-2026-0038': {
      id: 'D-2026-0038',
      orderId: 'RL-2026-001236',
      item: 'Mô tơ máy giặt 1HP',
      type: 'COLLECTOR_BEHAVIOR',
      typeLabel: 'Hành vi Collector',
      status: 'PROCESSING',
      statusLabel: 'Đang xử lý',
      statusClay: 'bg-clay-butter',
      statusAccent: 'text-amber-deep',
      refund: 0,
      bonus: 0,
      submittedAt: '08/05/2026 11:30',
      resolvedAt: null,
      timeline: [
        { stage: 'submitted', label: 'Gửi tranh chấp', actor: 'Bạn', time: '08/05 11:30', desc: '1 ghi âm 2 phút + ảnh chat tin nhắn', icon: 'send', clay: 'bg-clay-sky', accent: 'text-info', done: true },
        { stage: 'received', label: 'CS xác nhận', actor: 'Lê Trang (CS)', time: '08/05 13:15', desc: 'Tiếp nhận, liên hệ collector lấy phiên bản', icon: 'support_agent', clay: 'bg-clay-butter', accent: 'text-amber-deep', done: true },
        { stage: 'review', label: 'Đang điều tra', actor: 'Trust & Safety Team', time: '09/05 — đang xử lý', desc: 'Mời collector lên giải trình + nghe lại ghi âm + đối chiếu GPS log', icon: 'hourglass_top', clay: 'bg-clay-butter', accent: 'text-amber-deep', done: false, active: true },
        { stage: 'decision', label: 'Chờ quyết định', actor: 'Trust & Safety Team', time: 'Dự kiến 10/05', desc: '', icon: 'gavel', clay: 'bg-bg-surface', accent: 'text-text-tertiary', done: false },
      ],
      evidence: [
        { type: 'audio', label: 'Ghi âm 2:14', size: '4.2 MB' },
        { type: 'image', label: 'Screenshot chat Zalo', size: '1.1 MB' },
      ],
      description: 'Collector đặt lịch 14:00 nhưng đến 14:45 mới tới, không thông báo trễ. Khi yêu cầu cân lại sau khiếu nại sai số, collector tỏ thái độ thiếu hợp tác và nói "không cần thì để tôi đi đơn khác". Có ghi âm 2 phút làm evidence.',
    },
    'D-2026-0030': {
      id: 'D-2026-0030',
      orderId: 'RL-2026-001234',
      item: 'Chai PET 500ml',
      type: 'WEIGHT_MISMATCH',
      typeLabel: 'Cân tại nhà sai số',
      status: 'LOST',
      statusLabel: 'Không thắng',
      statusClay: 'bg-clay-blush',
      statusAccent: 'text-tier-h',
      refund: 0,
      bonus: 0,
      submittedAt: '20/04/2026 09:50',
      resolvedAt: '21/04/2026 16:00',
      timeline: [
        { stage: 'submitted', label: 'Gửi tranh chấp', actor: 'Bạn', time: '20/04 09:50', desc: '2 ảnh cân + mô tả', icon: 'send', clay: 'bg-clay-sky', accent: 'text-info', done: true },
        { stage: 'received', label: 'CS xác nhận', actor: 'Nguyễn Mỹ (CS)', time: '20/04 11:00', desc: 'Tiếp nhận', icon: 'support_agent', clay: 'bg-clay-butter', accent: 'text-amber-deep', done: true },
        { stage: 'review', label: 'Đối chiếu kết quả', actor: 'Audit Team', time: '21/04 14:20', desc: 'Cân nhà 3.20kg vs cân Hub 3.18kg, sai số 0.6%', icon: 'compare_arrows', clay: 'bg-clay-peach', accent: 'text-tier-c', done: true },
        { stage: 'decision', label: 'Quyết định: KHÔNG THẮNG', actor: 'Audit Team', time: '21/04 16:00', desc: 'Sai số 0.6% nằm trong giới hạn QTĐLVN 252 (±2%) — đây là sai số cho phép, không có cơ sở dispute', icon: 'cancel', clay: 'bg-clay-blush', accent: 'text-tier-h', done: true },
      ],
      evidence: [
        { type: 'image', label: 'Ảnh cân tại nhà', size: '1.6 MB' },
        { type: 'image', label: 'Ảnh receipt Hub', size: '1.0 MB' },
      ],
      description: 'Cân tại nhà hiển thị 3.20kg nhưng trên Hub receipt ghi 3.18kg, chênh 20g. Yêu cầu giải thích.',
    },
  };
  
  const dispute = allDisputes[id ?? 'D-2026-0042'];
  if (!dispute) return <NotFound what="Tranh chấp" backTo="/disputes" backLabel="Về danh sách tranh chấp" />;
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/disputes" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Tranh chấp
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <div className="flex items-center gap-space-12 flex-wrap mb-space-12">
                    <span className={cx(['font-mono-md text-[11px] uppercase tracking-[0.2em] font-bold border-2 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm', dispute.statusClay, `border-${dispute.statusAccent.replace('text-', '')}/40`, dispute.statusAccent])}>
                      <span className="material-symbols-rounded fill !text-[14px]">gavel</span>
                      {dispute.statusLabel}
                    </span>
                    <span className="font-mono-md text-[11px] text-text-tertiary uppercase tracking-wider font-semibold">{dispute.typeLabel}</span>
                    <span className="font-mono-md text-[12px] text-text-tertiary font-semibold">{dispute.id}</span>
                  </div>
                  <h1 className="font-display-l text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">{dispute.item}</h1>
                  <p className="font-body-md text-[14px] text-text-secondary mb-space-16">Đơn liên quan: <a href={`/orders/${dispute.orderId}`} className="text-tier-s font-bold hover:underline">{dispute.orderId}</a> · Gửi {dispute.submittedAt}{dispute.resolvedAt && ` · Xử lý ${dispute.resolvedAt}`}</p>
                  {dispute.refund > 0 && (
                    <div className="flex flex-wrap gap-space-12">
                      <div className="bg-clay-mint border-2 border-tier-s/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                        <span className="material-symbols-rounded fill !text-[24px] text-tier-s">paid</span>
                        <div className="flex flex-col">
                          <span className="font-mono-md text-[10px] text-tier-s uppercase tracking-wider font-semibold">Hoàn tiền</span>
                          <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">+{dispute.refund.toLocaleString('vi-VN')}đ</span>
                        </div>
                      </div>
                      <div className="bg-clay-butter border-2 border-amber-deep/30 rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex items-center gap-space-12">
                        <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">redeem</span>
                        <div className="flex flex-col">
                          <span className="font-mono-md text-[10px] text-amber-deep uppercase tracking-wider font-semibold">Đền bù</span>
                          <span className="font-mono-md text-[14px] text-text-primary font-bold tabular-nums">+{dispute.bonus} GP</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative h-[260px]">
                  <DisputeScene className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-32">
              {/* Left: timeline + description */}
              <div className="flex flex-col gap-space-24">
                {/* Description */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">MÔ TẢ CỦA BẠN</span>
                  <p className="font-body-md text-[14px] text-text-secondary leading-relaxed mt-space-12">{dispute.description}</p>
                </section>
      
                {/* Timeline */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="mb-space-24">
                    <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">timeline</span>
                      TIMELINE XỬ LÝ
                    </span>
                    <h3 className="font-h2 text-h2 text-text-primary mt-space-8">Quá trình audit minh bạch</h3>
                  </div>
                  <div className="flex flex-col">
                    {dispute.timeline.map((s, i) => {
                      const isLast = i === dispute.timeline.length - 1;
                      return (
                        <div className="flex gap-space-16 relative">
                          {!isLast && (
                            <div className={cx(['absolute left-[23px] top-12 w-[2px] h-[calc(100%-12px)]', s.done ? 'bg-tier-s' : 'bg-border-subtle'])} />
                          )}
                          <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0 z-10 border-2', s.done ? `${s.clay} border-current ${s.accent}` : s.active ? 'bg-amber-deep text-white border-amber-deep animate-pulse' : 'bg-bg-surface border-border-subtle text-text-tertiary'])}>
                            <span className="material-symbols-rounded fill !text-[22px]">{s.done ? 'check' : s.active ? 'hourglass_top' : s.icon}</span>
                          </div>
                          <div className={cx(['flex-1 pb-space-24', isLast && 'pb-0'])}>
                            <div className="flex items-baseline justify-between mb-space-4">
                              <span className="font-display font-bold text-[15px] text-text-primary">{s.label}</span>
                              <span className="font-mono-md text-[11px] text-text-tertiary tabular-nums">{s.time}</span>
                            </div>
                            <span className="font-mono-md text-[12px] text-text-secondary block mb-space-8">{s.actor}</span>
                            {s.desc && <p className="font-body-md text-[13px] text-text-secondary leading-relaxed">{s.desc}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
      
              {/* Right: evidence + actions */}
              <div className="flex flex-col gap-space-16">
                <section className="bg-bg-elevated rounded-[24px] shadow-clay border border-border-subtle p-space-24">
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-s font-bold block mb-space-12">EVIDENCE ĐÃ GỬI</span>
                  <div className="flex flex-col gap-space-8">
                    {dispute.evidence.map((e) => (
                      <div className="flex items-center gap-space-12 p-space-12 bg-bg-surface rounded-2xl border border-border-subtle shadow-clay-sm">
                        <div className={cx(['w-10 h-10 rounded-2xl flex items-center justify-center shadow-clay-sm', e.type === 'video' ? 'bg-clay-sky' : e.type === 'audio' ? 'bg-clay-butter' : 'bg-clay-mint'])}>
                          <span className={cx(['material-symbols-rounded fill !text-[18px]', e.type === 'video' ? 'text-info' : e.type === 'audio' ? 'text-amber-deep' : 'text-tier-s'])}>
                            {e.type === 'video' ? 'movie' : e.type === 'audio' ? 'mic' : 'image'}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-display font-bold text-[12px] text-text-primary block truncate">{e.label}</span>
                          <span className="font-mono-md text-[10px] text-text-tertiary">{e.size}</span>
                        </div>
                        <button className="material-symbols-rounded !text-[18px] text-text-tertiary hover:text-tier-s">download</button>
                      </div>
                    ))}
                  </div>
                </section>
      
                {dispute.status === 'LOST' && (
                  <div className="bg-clay-blush rounded-[24px] shadow-clay-sm border-2 border-tier-h/30 p-space-24">
                    <span className="material-symbols-rounded fill !text-[24px] text-tier-h">info</span>
                    <span className="font-mono-md text-[11px] text-tier-h uppercase tracking-wider font-bold block mt-space-8">CÒN ý KIẾN?</span>
                    <h4 className="font-display font-bold text-[14px] text-text-primary mt-space-4 mb-space-8">Re-appeal trong 7 ngày</h4>
                    <p className="font-body-md text-[12px] text-text-secondary mb-space-12">Có thể gửi evidence bổ sung để Audit Team review lại lần 2.</p>
                    <button className="w-full bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[13px]">Re-appeal</button>
                  </div>
                )}
      
                {dispute.status === 'PROCESSING' && (
                  <div className="bg-clay-butter rounded-[24px] shadow-clay-sm border-2 border-amber-deep/30 p-space-24">
                    <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">schedule</span>
                    <span className="font-mono-md text-[11px] text-amber-deep uppercase tracking-wider font-bold block mt-space-8">BỔ SUNG EVIDENCE</span>
                    <h4 className="font-display font-bold text-[14px] text-text-primary mt-space-4 mb-space-8">Còn 36h để gửi thêm</h4>
                    <p className="font-body-md text-[12px] text-text-secondary mb-space-12">Audit Team đang chờ ghi âm hoặc ảnh bổ sung. Càng nhiều evidence, kết luận càng nhanh.</p>
                    <button className="w-full bg-text-primary text-white py-space-12 rounded-2xl font-semibold shadow-clay text-[13px] inline-flex items-center justify-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">add_photo_alternate</span>
                      Thêm evidence
                    </button>
                  </div>
                )}
      
                <a href="tel:19007356677" className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24 flex items-center gap-space-12 hover:shadow-clay transition">
                  <span className="material-symbols-rounded fill !text-[24px] text-info">call</span>
                  <div className="flex-1">
                    <span className="font-mono-md text-[11px] text-info uppercase tracking-wider font-bold block">CS chuyên trách</span>
                    <span className="font-display font-bold text-[14px] text-text-primary">1900-RELOOP · Phím 3</span>
                  </div>
                  <span className="material-symbols-rounded !text-[18px] text-info">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
