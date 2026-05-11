import { cx } from '@/lib/cx';
import OtpPhone from '../components/illustrations/OtpPhone';

export default function Notifications() {
  const notifications = [
    {
      id: 'n-01',
      type: 'order',
      icon: 'local_shipping',
      clay: 'bg-clay-sky',
      accent: 'text-info',
      title: 'Anh Hùng đã nhận đơn',
      body: 'RL-2026-001241 · 8.4 kg PET · ETA 12 phút',
      time: 'Vừa xong',
      unread: true,
      cta: { label: 'Theo dõi', href: '/orders/RL-2026-001241/track.html' },
    },
    {
      id: 'n-02',
      type: 'wallet',
      icon: 'verified',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      title: 'Hub đã verify BOM thực',
      body: 'RL-2026-001239 · Phần chênh +28.300đ chuyển ZaloPay',
      time: '14 phút trước',
      unread: true,
      cta: { label: 'Xem BOM', href: '/orders/RL-2026-001239.html' },
    },
    {
      id: 'n-03',
      type: 'gp',
      icon: 'redeem',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      title: 'Bạn được +214 GP',
      body: 'Đơn RL-2026-001234 hoàn tất · Số dư: 4.250 GP',
      time: '2 giờ trước',
      unread: true,
      cta: { label: 'Đổi quà', href: '/rewards.html' },
    },
    {
      id: 'n-04',
      type: 'eta',
      icon: 'pin_drop',
      clay: 'bg-clay-butter',
      accent: 'text-amber-deep',
      title: 'Collector cách bạn 200m',
      body: 'Anh Hùng đang đến · Vui lòng chuẩn bị vật phẩm',
      time: 'Hôm qua, 14:30',
      unread: false,
      cta: null,
    },
    {
      id: 'n-05',
      type: 'trust',
      icon: 'workspace_premium',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      title: 'Trust Score +3 → 65',
      body: 'Bạn đã đạt 5 đơn không cancel — milestone "Đáng tin"',
      time: '2 ngày trước',
      unread: false,
      cta: { label: 'Xem hồ sơ', href: '/profile.html' },
    },
    {
      id: 'n-06',
      type: 'system',
      icon: 'campaign',
      clay: 'bg-clay-peach',
      accent: 'text-tier-c',
      title: 'Bảo trì hệ thống thanh toán',
      body: 'ZaloPay sẽ tạm gián đoạn 2:00-3:00 sáng 12/05/2026',
      time: '3 ngày trước',
      unread: false,
      cta: null,
    },
    {
      id: 'n-07',
      type: 'order',
      icon: 'check_circle',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      title: 'Đơn RL-2026-001233 hoàn tất',
      body: '6.2 kg carton · Bạn nhận 95.500đ qua ZaloPay',
      time: '5 ngày trước',
      unread: false,
      cta: { label: 'Đặt lại', href: '/orders/new.html' },
    },
    {
      id: 'n-08',
      type: 'payout',
      icon: 'paid',
      clay: 'bg-clay-mint',
      accent: 'text-tier-s',
      title: 'Đã nhận 213.700đ qua ZaloPay',
      body: 'Đơn RL-2026-001234 · Mã giao dịch ZP-001234',
      time: '1 tuần trước',
      unread: false,
      cta: null,
    },
  ];
  
  const unreadCount = notifications.filter((n) => n.unread).length;
  
  const filterTabs = [
    { id: 'all', label: 'Tất cả', count: notifications.length },
    { id: 'order', label: 'Đơn hàng', count: notifications.filter((n) => n.type === 'order' || n.type === 'eta').length },
    { id: 'wallet', label: 'Ví & GP', count: notifications.filter((n) => ['wallet', 'gp', 'payout'].includes(n.type)).length },
    { id: 'system', label: 'Hệ thống', count: notifications.filter((n) => ['system', 'trust'].includes(n.type)).length },
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
                    <span className="material-symbols-rounded fill !text-[14px]">notifications_active</span>
                    HỘP THƯ
                  </span>
                  <h1 className="font-display-l text-[56px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Thông báo</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary mb-space-16">
                    <strong className="text-tier-s">{unreadCount} thông báo mới</strong> · Cập nhật real-time qua push + SMS + email
                  </p>
                  <div className="flex flex-wrap gap-space-12">
                    <button className="bg-lime text-text-on-lime px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-lime text-[14px] inline-flex items-center gap-space-8 hover:-translate-y-[2px] transition">
                      <span className="material-symbols-rounded fill !text-[18px]">mark_email_read</span>
                      Đánh dấu đã đọc tất cả
                    </button>
                    <a href="/profile" className="bg-bg-elevated text-text-primary border border-border-subtle px-space-24 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[14px] inline-flex items-center gap-space-8 hover:shadow-clay transition">
                      <span className="material-symbols-rounded fill !text-[18px]">tune</span>
                      Cài đặt thông báo
                    </a>
                  </div>
                </div>
                <div className="relative h-[260px]">
                  <OtpPhone className="absolute inset-0 w-full h-full" />
                </div>
              </div>
            </section>
      
            {/* Channel preferences row */}
            <section className="grid grid-cols-4 gap-space-12 mb-space-32">
              <div className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12">
                <div className="w-10 h-10 rounded-2xl bg-clay-mint flex items-center justify-center shadow-clay-sm">
                  <span className="material-symbols-rounded fill !text-[20px] text-tier-s">notifications</span>
                </div>
                <div className="flex-1">
                  <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">Push</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">Bật</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-tier-s shadow-[0_0_8px_var(--lime)]"></span>
              </div>
              <div className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12">
                <div className="w-10 h-10 rounded-2xl bg-clay-sky flex items-center justify-center shadow-clay-sm">
                  <span className="material-symbols-rounded fill !text-[20px] text-info">sms</span>
                </div>
                <div className="flex-1">
                  <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">SMS</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">Critical only</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-info"></span>
              </div>
              <div className="bg-bg-elevated rounded-2xl shadow-clay-sm border border-border-subtle p-space-16 flex items-center gap-space-12">
                <div className="w-10 h-10 rounded-2xl bg-clay-butter flex items-center justify-center shadow-clay-sm">
                  <span className="material-symbols-rounded fill !text-[20px] text-amber-deep">mail</span>
                </div>
                <div className="flex-1">
                  <span className="font-mono-md text-[10px] text-text-tertiary uppercase tracking-wider font-semibold block">Email</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">Tóm tắt tuần</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-amber-deep"></span>
              </div>
              <a href="tel:1900-735667" className="bg-clay-blush rounded-2xl shadow-clay-sm border-2 border-tier-h/30 p-space-16 flex items-center gap-space-12 hover:shadow-clay transition">
                <div className="w-10 h-10 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                  <span className="material-symbols-rounded fill !text-[20px] text-tier-h">support_agent</span>
                </div>
                <div className="flex-1">
                  <span className="font-mono-md text-[10px] text-tier-h uppercase tracking-wider font-semibold block">Hotline</span>
                  <span className="font-display font-bold text-[13px] text-text-primary">1900-RELOOP</span>
                </div>
              </a>
            </section>
      
            {/* Filter tabs */}
            <div className="flex gap-space-12 mb-space-24" id="notif-filter">
              {filterTabs.map((t, i) => (
                <button
                  data-filter={t.id}
                  className={cx([
                    'notif-chip px-space-16 py-space-8 rounded-full border-2 font-mono-md text-[13px] font-semibold flex items-center gap-space-8 transition-all shadow-clay-sm',
                    i === 0 ? 'bg-clay-mint border-tier-s text-tier-s' : 'bg-bg-elevated border-border-subtle text-text-secondary',
                  ])}
                >
                  {t.label}
                  <span className="px-space-8 py-[1px] rounded-full bg-bg-elevated border border-border-subtle font-mono-md text-[10px]">{t.count}</span>
                </button>
              ))}
            </div>
      
            {/* Notification list */}
            <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle overflow-hidden divide-y divide-border-subtle" id="notif-list">
              {notifications.map((n) => (
                <div data-type={n.type} className={cx(['flex items-start gap-space-16 p-space-24 hover:bg-bg-surface/50 transition', n.unread && 'bg-clay-mint/20'])}>
                  <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0', n.clay])}>
                    <span className={cx(['material-symbols-rounded fill !text-[22px]', n.accent])}>{n.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-space-8 mb-space-4">
                      <h3 className="font-display font-bold text-[15px] text-text-primary truncate">{n.title}</h3>
                      {n.unread && <span className="w-2 h-2 rounded-full bg-tier-s shrink-0"></span>}
                    </div>
                    <p className="font-body-md text-[13px] text-text-secondary mb-space-8">{n.body}</p>
                    <div className="flex items-center gap-space-12">
                      <span className="font-mono-md text-[11px] text-text-tertiary">{n.time}</span>
                      {n.cta && (
                        <a href={n.cta.href} className="font-mono-md text-[12px] text-tier-s font-bold hover:underline inline-flex items-center gap-space-4">
                          {n.cta.label}
                          <span className="material-symbols-rounded !text-[14px]">arrow_forward</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </main>
    </>
  );
}
