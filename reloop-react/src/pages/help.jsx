import { cx } from '@/lib/cx';
import HubWarehouse from '../components/illustrations/HubWarehouse';
import TierSScene from '../components/illustrations/TierSScene';
import TierBScene from '../components/illustrations/TierBScene';
import TierCScene from '../components/illustrations/TierCScene';
import TierHScene from '../components/illustrations/TierHScene';

export default function Help() {
  const tiers = [
    { code: 'S', name: 'Standard', tagline: 'Vật phẩm phổ thông', items: 'PET, lon, carton, giấy', priceRule: 'Giá CHẮC CHẮN tại bàn cân', illustration: 'tier-s', accent: 'tier-s', clay: 'bg-clay-mint' },
    { code: 'B', name: 'Bulk/Big', tagline: 'Đồ to, đồ điện cũ', items: 'Tủ lạnh, tivi, sofa', priceRule: 'Speed (giá sàn) hoặc Auction (3 báo giá)', illustration: 'tier-b', accent: 'amber-deep', clay: 'bg-clay-butter' },
    { code: 'C', name: 'Composite', tagline: 'Hỗn hợp cần Hub rã', items: 'Mainboard, mô-tơ, dây đồng', priceRule: 'Tạm ứng → BOM thực → phần chênh', illustration: 'tier-c', accent: 'tier-c', clay: 'bg-clay-peach' },
    { code: 'H', name: 'Hazardous', tagline: 'Chất thải nguy hại', items: 'Pin, dầu nhớt, hóa chất', priceRule: 'Miễn phí thu gom + chứng chỉ môi trường', illustration: 'tier-h', accent: 'tier-h', clay: 'bg-clay-blush' },
  ];
  
  const faqs = [
    {
      q: 'Tại sao Tier S giá CHẮC CHẮN còn Tier C lại có dải giá?',
      a: 'Tier S là vật liệu đồng nhất (PET/carton/lon) — giá cập nhật hằng ngày theo thị trường, không thương lượng. Tier C là hỗn hợp linh kiện (mainboard, mô-tơ) — giá thật phụ thuộc % đồng/sắt/nhựa bên trong, chỉ biết chính xác sau khi Hub rã xác và cân từng vật liệu (BOM thực).',
      icon: 'help',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
    },
    {
      q: 'BOM thực là gì? Tại sao phải chờ?',
      a: 'BOM (Bill of Materials) thực là bảng kê chi tiết vật liệu sau khi Hub Q.7 rã xác — ví dụ: 1.85kg đồng + 5.10kg sắt + 1.05kg nhựa. Hub có 24h xử lý, sau đó hệ thống mass-balance verify ≥90%. Phần chênh giữa giá tạm ứng và BOM thực sẽ chuyển ZaloPay.',
      icon: 'fact_check',
      clay: 'bg-clay-butter',
      accent: 'text-amber-deep',
    },
    {
      q: 'Tại sao tôi chỉ được tạm ứng 30% với người mới?',
      a: 'Trust Score tăng theo thời gian — người mới (0-30) chỉ tạm ứng 30%, tích lũy (30-65) lên 50%, đáng tin (65+) đạt 70%. Đây là cơ chế chống "casing fraud" — gian lận lồng đồ giả vào trong. Càng nhiều đơn đúng càng tăng % tạm ứng.',
      icon: 'shield',
      clay: 'bg-clay-sky',
      accent: 'text-info',
    },
    {
      q: 'Hold ví ảo có thể rút ZaloPay không?',
      a: 'Không. Hold ví ảo là tạm ứng cam kết — chỉ tự động chuyển ZaloPay sau khi Hub verify BOM thực. Nếu sau 72h Hub chưa verify, hệ thống auto-release toàn bộ Hold + bonus 5% phạt chậm cho bạn.',
      icon: 'account_balance_wallet',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
    },
    {
      q: 'GP (Green Points) hết hạn không? Đổi được gì?',
      a: 'GP có hạn 12 tháng kể từ khi nhận. 1 GP ≈ 1.000đ giá trị đơn. Đổi: voucher Shopee/Grab (200 GP), trồng 1 cây thật qua Gaia (200 GP), donation Greenpeace VN (100 GP), cash-out ZaloPay (1.000 GP = 8.000đ). Tier Bronze/Silver/Gold tăng tỷ giá đổi.',
      icon: 'redeem',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
    },
    {
      q: 'Nếu collector không đến hoặc đến trễ thì sao?',
      a: 'Nếu collector trễ > 15 phút so với ETA, bạn được +10 GP đền bù tự động. Nếu không đến, hệ thống auto-reassign collector khác trong 5 phút. Bạn có thể cancel không mất Trust Score nếu collector trễ > 30 phút.',
      icon: 'local_shipping',
      clay: 'bg-clay-butter',
      accent: 'text-amber-deep',
    },
    {
      q: 'Tier H (pin/hóa chất) tại sao miễn phí?',
      a: 'RE-LOOP nhận trợ giá môi trường từ NĐ 08/2022 và đối tác xử lý chất thải nguy hại được cấp phép. Chúng tôi không trả tiền cho bạn nhưng cấp chứng chỉ môi trường (env certificate) có thể dùng cho ESG report doanh nghiệp.',
      icon: 'warning',
      clay: 'bg-clay-blush',
      accent: 'text-tier-h',
    },
    {
      q: 'Dispute BOM thực phải làm sao?',
      a: 'Vào /orders/[id] → "Tranh chấp BOM" trong 48h sau khi Hub verify. Cung cấp ảnh/video gốc khi đóng gói, RE-LOOP review trong 24h. Nếu thắng dispute, bạn được hoàn 100% chênh + 100 GP đền bù. Tỷ lệ dispute thắng trung bình 23% — chủ yếu từ ảnh evidence không đủ.',
      icon: 'gavel',
      clay: 'bg-clay-peach',
      accent: 'text-tier-c',
    },
  ];
  
  const supportChannels = [
    { icon: 'call', label: 'Hotline 24/7', value: '1900-RELOOP', sub: '6h-22h CSKH · 22h-6h hotline khẩn', clay: 'bg-clay-mint', accent: 'text-tier-s' },
    { icon: 'mail', label: 'Email', value: 'cs@reloop.vn', sub: 'Trả lời trong 4 giờ', clay: 'bg-clay-sky', accent: 'text-info' },
    { icon: 'chat', label: 'Zalo OA', value: '@reloop.vn', sub: 'Bot tự động + agent', clay: 'bg-clay-butter', accent: 'text-amber-deep' },
    { icon: 'location_on', label: 'Hub Q.7', value: '12 Nguyễn Văn Linh', sub: '8h-17h thứ 2-thứ 7', clay: 'bg-clay-peach', accent: 'text-tier-c' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Trang chủ
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle mb-space-32 relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">help_center</span>
                    TRUNG TÂM HỖ TRỢ
                  </span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Bạn cần giúp gì?</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    Trợ lý ảo RE-LOOP AI · FAQ · Tier explainer · Hotline 1900-RELOOP 24/7
                  </p>
                  <div className="flex flex-wrap gap-space-12 items-center">
                    <a href="/help/chat" className="bg-bg-elevated/95 backdrop-blur border-2 border-border-subtle rounded-2xl px-space-16 py-space-12 shadow-clay-sm flex-1 min-w-[300px] flex items-center gap-space-12 hover:shadow-clay transition group">
                      <span className="material-symbols-rounded !text-[20px] text-text-tertiary group-hover:text-tier-s transition">search</span>
                      <span className="font-body-md text-[14px] text-text-tertiary flex-1">Hỏi RE-LOOP AI — "BOM thực", "Hold ví ảo", "đơn của tôi đang ở đâu?"…</span>
                      <span className="font-mono-md text-[11px] text-tier-s font-bold bg-clay-mint px-space-8 py-[3px] rounded-full border border-tier-s/30">Hỏi AI →</span>
                    </a>
                    <a href="/help/chat" className="bg-lime text-text-on-lime px-space-20 py-space-12 rounded-2xl font-semibold text-[14px] shadow-clay-lime hover:-translate-y-[2px] transition inline-flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[18px]">smart_toy</span>Mở trợ lý ảo
                    </a>
                  </div>
                </div>
                <div className="relative h-[260px]">
                  <HubWarehouse className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Support channels */}
            <section className="grid grid-cols-4 gap-space-16 mb-space-32">
              {supportChannels.map((c) => (
                <div className={cx(['rounded-[24px] shadow-clay border-2 p-space-24 hover:-translate-y-[2px] transition cursor-pointer', c.clay, `border-${c.accent.replace('text-', '')}/30`])}>
                  <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                    <span className={cx(['material-symbols-rounded fill !text-[22px]', c.accent])}>{c.icon}</span>
                  </div>
                  <span className={cx(['font-mono-md text-[10px] uppercase tracking-wider font-bold block', c.accent])}>{c.label}</span>
                  <span className="font-display font-extrabold text-[20px] text-text-primary mt-space-4 block">{c.value}</span>
                  <span className="font-body-md text-[11px] text-text-secondary mt-space-4 block">{c.sub}</span>
                </div>
              ))}
            </section>
      
            {/* Tier explainer */}
            <section className="mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">4 LOẠI VẬT PHẨM</span>
                  <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Tier S/B/C/H giải thích</h2>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-space-16">
                {tiers.map((t) => (
                  <div className={cx(['rounded-[28px] shadow-clay border-2 overflow-hidden flex flex-col', t.clay, `border-${t.accent}/30`])}>
                    <div className="relative h-[160px] bg-gradient-to-br from-bg-elevated/40 to-transparent">
                      {t.illustration === 'tier-s' && <TierSScene className="absolute inset-0 w-full h-full" />}
                      {t.illustration === 'tier-b' && <TierBScene className="absolute inset-0 w-full h-full" />}
                      {t.illustration === 'tier-c' && <TierCScene className="absolute inset-0 w-full h-full" />}
                      {t.illustration === 'tier-h' && <TierHScene className="absolute inset-0 w-full h-full" />}
                      <span className={cx(['absolute top-space-12 right-space-12 px-space-12 py-[4px] rounded-full bg-bg-elevated/95 backdrop-blur shadow-clay-sm font-mono-md text-[11px] font-extrabold tracking-wider border-2', `text-${t.accent}`, `border-${t.accent}/30`])}>TIER {t.code}</span>
                    </div>
                    <div className="p-space-24 flex flex-col gap-space-8 flex-1">
                      <h3 className="font-h3 text-h3 text-text-primary">{t.name}</h3>
                      <p className={cx(['font-mono-md text-[11px] uppercase tracking-wider font-semibold', `text-${t.accent}`])}>{t.tagline}</p>
                      <div className="bg-bg-elevated/60 rounded-2xl p-space-12 mt-space-8">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">Vật phẩm</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{t.items}</span>
                      </div>
                      <div className="bg-bg-elevated/60 rounded-2xl p-space-12">
                        <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">Cách định giá</span>
                        <span className="font-body-md text-[12px] text-text-primary font-semibold mt-space-4 block">{t.priceRule}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
      
            {/* FAQ */}
            <section className="mb-space-32">
              <div className="flex items-end justify-between mb-space-24">
                <div>
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold">FAQ</span>
                  <h2 className="font-h1 text-h1 text-text-primary mt-space-8">Câu hỏi thường gặp</h2>
                </div>
                <a href="/help/chat" className="font-mono-md text-[12px] text-tier-s font-bold inline-flex items-center gap-space-4 bg-clay-mint border border-tier-s/30 rounded-full px-space-12 py-space-8 shadow-clay-sm hover:shadow-clay transition"><span className="material-symbols-rounded fill !text-[14px]">smart_toy</span>Hỏi RE-LOOP AI →</a>
              </div>
              <div className="grid grid-cols-2 gap-space-16">
                {faqs.map((f) => (
                  <div className="bg-bg-elevated rounded-[24px] shadow-clay-sm border border-border-subtle p-space-24">
                    <div className="flex items-start gap-space-16">
                      <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', f.clay])}>
                        <span className={cx(['material-symbols-rounded fill !text-[22px]', f.accent])}>{f.icon}</span>
                      </div>
                      <div className="flex-1 text-col">
                        <h3 className="font-display font-bold text-[15px] text-text-primary leading-tight">{f.q}</h3>
                      </div>
                      <span className="material-symbols-rounded !text-[20px] text-text-tertiary shrink-0">expand_less</span>
                    </div>
                    <p className="font-body-md text-[13px] text-text-secondary leading-relaxed mt-space-12 pl-[60px] text-col">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
      
            {/* Hỗ trợ thêm: AI bot + ticket CS */}
            <section className="grid grid-cols-2 gap-space-16">
              {/* AI bot */}
              <div className="bg-clay-mint rounded-[28px] shadow-clay border-2 border-tier-s/30 p-space-32 flex flex-col relative overflow-hidden">
                <svg className="absolute -top-2 -right-2 w-14 h-14" viewBox="0 0 56 56" fill="none"><path d="M28 6l3.5 10.5h11l-9 7 3.5 10.5L28 27.5 18 41l3.5-10.5-9-7h11z" fill="#2BB36A" opacity="0.14" /></svg>
                <div className="relative w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12"><span className="material-symbols-rounded fill !text-[24px] text-tier-s">smart_toy</span></div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-bold">TRỢ LÝ ẢO · 24/7</span>
                <h3 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-8">Chat với RE-LOOP AI</h3>
                <p className="font-body-md text-[13px] text-text-secondary mb-space-16 flex-1">Trả lời tức thì — BOM thực / Hold ví ảo / khác biệt Tier / collector đang ở đâu / mở tranh chấp / đổi GP. Hỏi gì cũng được, chuyển CSKH thật bất kỳ lúc nào.</p>
                <a href="/help/chat" className="self-start bg-lime text-text-on-lime px-space-32 py-space-16 rounded-2xl font-semibold shadow-clay-lime text-[15px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[20px]">forum</span>Mở trợ lý ảo →
                </a>
              </div>
              {/* Ticket CS */}
              <div className="bg-clay-butter rounded-[28px] shadow-clay border-2 border-amber-deep/30 p-space-32 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm mb-space-12">
                  <span className="material-symbols-rounded fill !text-[24px] text-amber-deep">contact_support</span>
                </div>
                <span className="font-mono-md text-[12px] uppercase tracking-wider text-amber-deep font-bold">CẦN NGƯỜI THẬT?</span>
                <h3 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-8">Gửi ticket cho CSKH</h3>
                <p className="font-body-md text-[13px] text-text-secondary mb-space-16 flex-1">CS phản hồi trong 4 giờ làm việc · Đính kèm ảnh/đơn cụ thể để xử lý nhanh hơn. Hotline khẩn 1900-RELOOP (24/7).</p>
                <button className="self-start bg-text-primary text-white px-space-32 py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                  <span className="material-symbols-rounded fill !text-[20px]">add_comment</span>Tạo ticket mới
                </button>
              </div>
            </section>
          </div>
        </main>
    </>
  );
}
