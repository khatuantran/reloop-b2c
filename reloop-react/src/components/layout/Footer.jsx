// Port tay từ src/components/layout/Footer.astro (codemod bỏ qua — xem KEEP_EXISTING).
import { Link } from 'react-router-dom';

const year = 2026;
const quickLinks = [
  { to: '/help', label: 'Cách hoạt động' },
  { to: '/help', label: '4 Tier S/B/C/H giải thích' },
  { to: '/help', label: 'Câu hỏi thường gặp (FAQ)' },
  { to: '/disputes', label: 'Tranh chấp & khiếu nại' },
  { to: '/share', label: 'Cháu giúp bà · Đặt hộ' },
  { to: '/onboarding', label: 'Hướng dẫn người mới' },
  { to: '/easy', label: 'Chế độ Đơn giản' },
  { to: '/notifications', label: 'Hộp thư thông báo' },
  { to: '/rewards', label: 'Green Points & Voucher' },
  { to: '/impact', label: 'Xanh nhà em — Tác động' },
  { to: '/profile', label: 'Trust Score & Tạm ứng' },
];
const certs = [
  { icon: 'verified', text: 'ISO 14001 — Hub Tier 3' },
  { icon: 'verified', text: 'Big4 audit ESG hằng năm' },
  { icon: 'gavel', text: 'NĐ 08/2022/NĐ-CP — EPR compliance' },
  { icon: 'groups', text: 'Hiệp hội Tái chế Việt Nam (VRA)' },
  { icon: 'eco', text: 'VNCPC — Sản xuất sạch hơn' },
  { icon: 'workspace_premium', text: 'GreenTech Award 2026' },
];
const legal = [
  'Chính sách bảo mật (NĐ 13/2023)', 'Điều khoản sử dụng', 'Chính sách Anti-fraud Tier C',
  'Quy trình rã xác BOM minh bạch', 'Trust Score & Tạm ứng %', 'Quy trình khiếu nại BOM', 'Xuất dữ liệu cá nhân',
];

export default function Footer() {
  return (
    <footer className="bg-forest text-white mt-space-96">
      <div className="max-w-[1280px] mx-auto px-[80px] py-space-64">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-48">
          <div className="md:col-span-1">
            <div className="flex items-center gap-space-12 mb-space-16">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-lime to-lime-deep shadow-clay-lime flex items-center justify-center">
                <span className="material-symbols-rounded fill text-text-on-lime !text-[22px]">recycling</span>
              </div>
              <div>
                <div className="font-display font-extrabold text-[20px] leading-none">RE-LOOP</div>
                <div className="font-mono-md text-[10px] text-white/60 mt-1 leading-none">Kinh tế tuần hoàn · Việt Nam</div>
              </div>
            </div>
            <p className="text-[14px] text-white/70 leading-relaxed mb-space-24">Bán rác tái chế minh bạch · 4 Tier waste · ZaloPay 60 giây · Hub Tier 3 ISO 14001.</p>
            <div className="space-y-space-12 text-[13px]">
              <a href="tel:19007356677" className="flex items-center gap-space-12 hover:text-lime transition">
                <span className="material-symbols-rounded fill !text-[18px] text-lime">call</span>
                <span className="font-mono-md font-semibold">1900-RELOOP (24/7)</span>
              </a>
              <a href="mailto:cs@reloop.vn" className="flex items-center gap-space-12 hover:text-lime transition">
                <span className="material-symbols-rounded fill !text-[18px] text-lime">mail</span>
                <span>cs@reloop.vn</span>
              </a>
              <div className="flex items-start gap-space-12">
                <span className="material-symbols-rounded fill !text-[18px] text-lime mt-[2px]">location_on</span>
                <span className="text-white/80">Tầng 12, Toà Crescent Plaza<br />Q.7, TP. Hồ Chí Minh</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-wider text-white/90 mb-space-16">Hướng dẫn</h4>
            <ul className="space-y-space-12 text-[14px] text-white/70">
              {quickLinks.map((l, i) => <li key={i}><Link to={l.to} className="hover:text-lime transition">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-wider text-white/90 mb-space-16">Chứng chỉ & Tuân thủ</h4>
            <ul className="space-y-space-12 text-[14px] text-white/70">
              {certs.map((c, i) => (
                <li key={i} className="flex items-start gap-space-8">
                  <span className="material-symbols-rounded fill !text-[16px] text-lime mt-[2px]">{c.icon}</span><span>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-[14px] uppercase tracking-wider text-white/90 mb-space-16">Pháp lý & Chính sách</h4>
            <ul className="space-y-space-12 text-[14px] text-white/70">
              {legal.map((t, i) => <li key={i}><a href="#" className="hover:text-lime transition">{t}</a></li>)}
            </ul>
            <div className="mt-space-24 flex gap-space-12">
              <a href="#" className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-lime hover:text-text-on-lime flex items-center justify-center transition"><span className="material-symbols-rounded fill !text-[18px]">thumb_up</span></a>
              <a href="#" className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-lime hover:text-text-on-lime flex items-center justify-center transition" title="Zalo OA"><span className="font-display font-bold text-[14px]">Z</span></a>
              <a href="#" className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-lime hover:text-text-on-lime flex items-center justify-center transition"><span className="material-symbols-rounded fill !text-[18px]">play_circle</span></a>
            </div>
          </div>
        </div>
        <div className="mt-space-48 pt-space-32 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-space-16 text-[12px] text-white/60">
          <div className="font-mono-md">© {year} RE-LOOP Việt Nam · Pilot 3 quận TPHCM (Q.7, Bình Thạnh, Q.4)</div>
          <div className="flex flex-wrap items-center gap-space-16">
            <span className="flex items-center gap-space-4"><span className="material-symbols-rounded !text-[14px]">language</span>Tiếng Việt</span>
            <span>·</span><a href="#" className="hover:text-lime transition">Sitemap</a><span>·</span><a href="#" className="hover:text-lime transition">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
