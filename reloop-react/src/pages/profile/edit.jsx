import { cx } from '@/lib/cx';
import PersonaLinh from '../../components/illustrations/PersonaLinh';
import { USER } from '../../lib/mock';

export default function Edit() {
  const addresses = [
    { id: 'home', label: 'Nhà', address: '123 Lê Văn Thiêm, P. Tân Phú', district: 'Q.7, TPHCM', primary: true },
    { id: 'office', label: 'Văn phòng', address: 'Tầng 12, Crescent Plaza', district: 'Q.7, TPHCM', primary: false },
  ];
  
  const paymentMethods = [
    { id: 'zalopay', label: 'ZaloPay', detail: '0901-***-567', icon: 'payments', clay: 'bg-clay-sky', accent: 'text-info', primary: true },
    { id: 'cash', label: 'Tiền mặt', detail: 'Khi cần', icon: 'paid', clay: 'bg-clay-butter', accent: 'text-amber-deep', primary: false },
  ];
  
  const notifPrefs = [
    { id: 'order_updates', label: 'Cập nhật đơn hàng', sub: 'ETA · trạng thái · BOM verified', push: true, sms: true, email: false },
    { id: 'payments', label: 'Giao dịch ví', sub: 'ZaloPay in/out · Hold release', push: true, sms: true, email: true },
    { id: 'promotions', label: 'Khuyến mãi & GP', sub: 'Voucher mới · Streak bonus · Referral', push: true, sms: false, email: true },
    { id: 'system', label: 'Hệ thống & bảo trì', sub: 'Outage · update · pháp lý', push: true, sms: false, email: false },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px] flex flex-col gap-space-32">
            <a href="/profile" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold w-fit">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Hồ sơ
            </a>
      
            {/* Hero */}
            <section className="grad-hero rounded-[40px] px-space-48 py-space-32 border border-border-subtle relative overflow-hidden">
              <div className="grid grid-cols-[1.4fr_1fr] gap-space-32 items-center">
                <div className="relative z-10">
                  <span className="font-mono-md text-[11px] uppercase tracking-[0.2em] text-tier-s font-bold bg-clay-mint border-2 border-tier-s/30 rounded-full px-space-12 py-[4px] inline-flex items-center gap-space-8 shadow-clay-sm mb-space-12">
                    <span className="material-symbols-rounded fill !text-[14px]">edit</span>
                    CHỈNH SỬA HỒ SƠ
                  </span>
                  <h1 className="font-display-l text-[44px] font-extrabold leading-[1.05] tracking-tight text-text-primary mb-space-12">Cập nhật thông tin</h1>
                  <p className="font-body-lg text-body-lg text-text-secondary">Tên · Địa chỉ · Phương thức thanh toán · Notif preferences · Privacy NĐ 13/2023</p>
                </div>
                <div className="relative h-[200px] flex items-center justify-center">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-clay-lg border-[6px] border-bg-elevated">
                    <PersonaLinh className="w-full h-full" />
                  </div>
                  <button className="absolute bottom-space-8 right-space-32 w-12 h-12 rounded-2xl bg-text-primary text-white shadow-clay flex items-center justify-center hover:-translate-y-[2px] transition">
                    <span className="material-symbols-rounded fill !text-[20px]">photo_camera</span>
                  </button>
                </div>
              </div>
            </section>
      
            <div className="grid grid-cols-[2fr_1fr] gap-space-24">
              <div className="flex flex-col gap-space-24">
                {/* Personal info */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">person</span>
                    THÔNG TIN CÁ NHÂN
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">Cơ bản</h2>
                  <div className="grid grid-cols-2 gap-space-16">
                    <div>
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">HỌ TÊN</span>
                      <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                        <span className="material-symbols-rounded !text-[18px] text-text-tertiary">person</span>
                        <input type="text" value={USER.name} className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary" />
                      </div>
                    </div>
                    <div>
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">SỐ ĐIỆN THOẠI</span>
                      <div className="bg-bg-surface rounded-2xl border-2 border-tier-s/30 shadow-inset-soft p-space-12 flex items-center gap-space-12">
                        <span className="material-symbols-rounded !text-[18px] text-tier-s">verified</span>
                        <input type="tel" value={USER.phone} disabled className="flex-1 bg-transparent border-0 focus:outline-none font-mono-md text-[14px] text-text-primary tabular-nums" />
                        <span className="px-space-8 py-[2px] rounded-full bg-clay-mint border border-tier-s/30 font-mono-md text-[10px] text-tier-s font-bold">VERIFIED</span>
                      </div>
                    </div>
                    <div>
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">EMAIL</span>
                      <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                        <span className="material-symbols-rounded !text-[18px] text-text-tertiary">mail</span>
                        <input type="email" value={USER.email} className="flex-1 bg-transparent border-0 focus:outline-none font-body-md text-[14px] text-text-primary" />
                      </div>
                    </div>
                    <div>
                      <span className="font-mono-md text-[10px] uppercase tracking-wider text-text-tertiary font-semibold block mb-space-8">NGÀY SINH</span>
                      <div className="bg-bg-surface rounded-2xl border-2 border-border-subtle shadow-inset-soft p-space-12 flex items-center gap-space-12">
                        <span className="material-symbols-rounded !text-[18px] text-text-tertiary">cake</span>
                        <input type="text" placeholder="dd/mm/yyyy" className="flex-1 bg-transparent border-0 focus:outline-none font-mono-md text-[14px] text-text-primary tabular-nums" />
                      </div>
                    </div>
                  </div>
                </section>
      
                {/* Addresses */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-end justify-between mb-space-24">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">location_on</span>
                        ĐỊA CHỈ THU GOM
                      </span>
                      <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Multi-address</h2>
                    </div>
                    <button className="bg-clay-mint text-tier-s border-2 border-tier-s/30 px-space-16 py-space-8 rounded-full font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">add</span>
                      Thêm địa chỉ
                    </button>
                  </div>
                  <div className="flex flex-col gap-space-12">
                    {addresses.map((a) => (
                      <div className={cx(['flex items-start gap-space-16 p-space-16 rounded-2xl border-2 shadow-clay-sm', a.primary ? 'bg-clay-mint border-tier-s/30' : 'bg-bg-surface border-border-subtle'])}>
                        <div className={cx(['w-12 h-12 rounded-2xl flex items-center justify-center shadow-clay-sm', a.primary ? 'bg-bg-elevated' : 'bg-clay-mint'])}>
                          <span className="material-symbols-rounded fill !text-[22px] text-tier-s">{a.label === 'Nhà' ? 'home' : 'apartment'}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8 mb-space-4">
                            <span className="font-display font-bold text-[14px] text-text-primary">{a.label}</span>
                            {a.primary && <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold">MẶC ĐỊNH</span>}
                          </div>
                          <span className="font-body-md text-[13px] text-text-secondary block">{a.address}</span>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{a.district}</span>
                        </div>
                        <button className="text-text-tertiary hover:text-tier-s">
                          <span className="material-symbols-rounded !text-[20px]">edit</span>
                        </button>
                        <button className="text-text-tertiary hover:text-tier-h">
                          <span className="material-symbols-rounded !text-[20px]">delete</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Payment methods */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <div className="flex items-end justify-between mb-space-24">
                    <div>
                      <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                        <span className="material-symbols-rounded fill !text-[16px]">credit_card</span>
                        PHƯƠNG THỨC THANH TOÁN
                      </span>
                      <h2 className="font-h2 text-h2 text-text-primary mt-space-8">Nhận tiền</h2>
                    </div>
                    <button className="bg-clay-mint text-tier-s border-2 border-tier-s/30 px-space-16 py-space-8 rounded-full font-mono-md text-[12px] font-bold shadow-clay-sm hover:shadow-clay flex items-center gap-space-8">
                      <span className="material-symbols-rounded fill !text-[16px]">add</span>
                      Thêm
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-space-12">
                    {paymentMethods.map((p) => (
                      <div className={cx(['flex items-center gap-space-12 p-space-16 rounded-2xl border-2 shadow-clay-sm', p.primary ? `${p.clay} border-${p.accent.replace('text-', '')}/40` : 'bg-bg-surface border-border-subtle'])}>
                        <div className="w-12 h-12 rounded-2xl bg-bg-elevated flex items-center justify-center shadow-clay-sm">
                          <span className={cx(['material-symbols-rounded fill !text-[22px]', p.accent])}>{p.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-space-8">
                            <span className="font-display font-bold text-[14px] text-text-primary">{p.label}</span>
                            {p.primary && <span className="px-space-8 py-[2px] rounded-full bg-tier-s text-white font-mono-md text-[10px] font-bold">MẶC ĐỊNH</span>}
                          </div>
                          <span className="font-mono-md text-[11px] text-text-tertiary">{p.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
      
                {/* Notification prefs */}
                <section className="bg-bg-elevated rounded-[28px] shadow-clay border border-border-subtle p-space-32">
                  <span className="font-mono-md text-[12px] uppercase tracking-wider text-tier-s font-semibold flex items-center gap-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">tune</span>
                    NOTIFICATION PREFERENCES
                  </span>
                  <h2 className="font-h2 text-h2 text-text-primary mt-space-8 mb-space-24">Thông báo cho 4 nhóm</h2>
                  <div className="overflow-hidden rounded-2xl border border-border-subtle">
                    <table className="w-full">
                      <thead className="bg-bg-surface">
                        <tr>
                          <th className="text-left px-space-16 py-space-12 font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold">Nhóm</th>
                          <th className="text-center px-space-16 py-space-12 font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold">Push</th>
                          <th className="text-center px-space-16 py-space-12 font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold">SMS</th>
                          <th className="text-center px-space-16 py-space-12 font-mono-md text-[11px] uppercase tracking-wider text-text-tertiary font-bold">Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border-subtle">
                        {notifPrefs.map((n) => (
                          <tr className="bg-bg-elevated hover:bg-bg-surface/50">
                            <td className="px-space-16 py-space-12">
                              <span className="font-display font-bold text-[13px] text-text-primary block">{n.label}</span>
                              <span className="font-mono-md text-[11px] text-text-tertiary">{n.sub}</span>
                            </td>
                            <td className="text-center px-space-16 py-space-12">
                              <div className={cx(['w-10 h-6 rounded-full mx-auto relative cursor-pointer transition', n.push ? 'bg-tier-s' : 'bg-bg-surface border border-border-default'])}>
                                <div className={cx(['w-5 h-5 rounded-full bg-white shadow-clay-sm absolute top-[2px] transition', n.push ? 'right-[2px]' : 'left-[2px]'])}></div>
                              </div>
                            </td>
                            <td className="text-center px-space-16 py-space-12">
                              <div className={cx(['w-10 h-6 rounded-full mx-auto relative cursor-pointer transition', n.sms ? 'bg-info' : 'bg-bg-surface border border-border-default'])}>
                                <div className={cx(['w-5 h-5 rounded-full bg-white shadow-clay-sm absolute top-[2px] transition', n.sms ? 'right-[2px]' : 'left-[2px]'])}></div>
                              </div>
                            </td>
                            <td className="text-center px-space-16 py-space-12">
                              <div className={cx(['w-10 h-6 rounded-full mx-auto relative cursor-pointer transition', n.email ? 'bg-amber-deep' : 'bg-bg-surface border border-border-default'])}>
                                <div className={cx(['w-5 h-5 rounded-full bg-white shadow-clay-sm absolute top-[2px] transition', n.email ? 'right-[2px]' : 'left-[2px]'])}></div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
      
                {/* Save */}
                <div className="flex gap-space-12">
                  <button className="flex-1 bg-text-primary text-white py-space-16 rounded-2xl font-semibold shadow-clay text-[15px] inline-flex items-center justify-center gap-space-8 hover:-translate-y-[2px] transition">
                    <span className="material-symbols-rounded fill !text-[20px]">save</span>
                    Lưu thay đổi
                  </button>
                  <a href="/profile" className="bg-bg-elevated text-text-primary border border-border-subtle px-space-32 py-space-16 rounded-2xl font-semibold shadow-clay-sm text-[15px] inline-flex items-center gap-space-8 hover:shadow-clay">
                    Huỷ
                  </a>
                </div>
              </div>
      
              {/* Right sidebar: privacy + danger zone */}
              <div className="flex flex-col gap-space-16">
                <div className="bg-clay-sky rounded-[24px] shadow-clay-sm border-2 border-info/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[32px] text-info">policy</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-info font-bold block mt-space-8">PRIVACY · NĐ 13/2023</span>
                  <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-12">Quyền riêng tư</h4>
                  <p className="font-body-md text-[12px] text-text-secondary mb-space-16">RE-LOOP tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.</p>
                  <ul className="flex flex-col gap-space-8">
                    {[
                      { icon: 'download', label: 'Export dữ liệu (JSON)' },
                      { icon: 'history', label: 'Xem nhật ký truy cập' },
                      { icon: 'block', label: 'Quản lý đối tác chia sẻ' },
                    ].map((p) => (
                      <li>
                        <button className="w-full flex items-center gap-space-8 p-space-8 bg-bg-elevated/60 rounded-xl border border-info/20 hover:bg-bg-elevated transition">
                          <span className="material-symbols-rounded !text-[16px] text-info">{p.icon}</span>
                          <span className="font-mono-md text-[12px] text-text-primary font-semibold flex-1 text-left">{p.label}</span>
                          <span className="material-symbols-rounded !text-[14px] text-text-tertiary">arrow_forward</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
      
                <div className="bg-clay-blush rounded-[24px] shadow-clay-sm border-2 border-tier-h/30 p-space-24">
                  <span className="material-symbols-rounded fill !text-[32px] text-tier-h">dangerous</span>
                  <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold block mt-space-8">DANGER ZONE</span>
                  <h4 className="font-h3 text-h3 text-text-primary mt-space-4 mb-space-12">Tài khoản</h4>
                  <button className="w-full bg-bg-elevated text-tier-h border-2 border-tier-h/40 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] inline-flex items-center justify-center gap-space-8 hover:shadow-clay mb-space-8">
                    <span className="material-symbols-rounded fill !text-[16px]">logout</span>
                    Đăng xuất
                  </button>
                  <button className="w-full bg-bg-elevated text-tier-h border-2 border-tier-h/40 py-space-12 rounded-2xl font-semibold shadow-clay-sm text-[13px] inline-flex items-center justify-center gap-space-8 hover:shadow-clay">
                    <span className="material-symbols-rounded fill !text-[16px]">delete_forever</span>
                    Xoá tài khoản
                  </button>
                  <p className="font-mono-md text-[10px] text-text-tertiary mt-space-8">Xoá vĩnh viễn theo NĐ 13/2023 trong 7 ngày · Số dư ZaloPay sẽ rút trước</p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </>
  );
}
