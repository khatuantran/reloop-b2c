import OrderStepperBar from '../../../components/order/OrderStepperBar';
import PhotoStepPanel from '../../../components/order/PhotoStepPanel';

export default function TierH() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-h.html' },
    { n: 2, label: 'Loại + số lượng', icon: 'checklist', href: '/orders/new/tier-h/items.html' },
    { n: 3, label: 'Xác nhận thu gom', icon: 'check_circle', href: '/orders/new/tier-h/confirm.html' },
  ];
  
  const samples = [
    { id: 'pin-aa', label: 'Pin AA / AAA', desc: 'Đóng túi nilon kín', icon: 'battery_full' },
    { id: 'oil', label: 'Dầu nhớt / hoá chất', desc: 'Đậy nắp đầy đủ', icon: 'water_drop' },
    { id: 'pin-li', label: 'Pin xe máy / lithium', desc: 'Tháo riêng từng cục', icon: 'electric_bolt' },
    { id: 'bulb', label: 'Bóng đèn huỳnh quang', desc: 'Bọc giấy báo tránh vỡ', icon: 'lightbulb' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-h font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Đổi loại vật phẩm
            </a>
      
            <OrderStepperBar steps={steps} activeStep={1} tierAccent="tier-h" />
      
            {/* Important warning before photo */}
            <section className="bg-clay-blush rounded-[28px] shadow-clay border-2 border-tier-h/40 p-space-24 mb-space-24 flex items-start gap-space-16">
              <div className="w-14 h-14 rounded-2xl bg-tier-h flex items-center justify-center shadow-clay-sm shrink-0">
                <span className="material-symbols-rounded fill !text-[28px] text-white">priority_high</span>
              </div>
              <div className="flex-1">
                <span className="font-mono-md text-[11px] uppercase tracking-wider text-tier-h font-bold block">QUAN TRỌNG · ĐÓNG GÓI ĐÚNG CÁCH TRƯỚC KHI CHỤP</span>
                <h3 className="font-display font-bold text-[16px] text-text-primary mt-space-4 mb-space-8">Tách riêng từng loại — không trộn lẫn</h3>
                <p className="font-body-md text-[13px] text-text-secondary leading-relaxed">Pin để túi nilon kín · Bóng đèn bọc giấy báo · Dầu/sơn đậy nắp đầy đủ · Thuốc giữ nguyên vỏ. Trộn lẫn có thể gây phản ứng nguy hiểm.</p>
              </div>
            </section>
      
            <PhotoStepPanel
              tier="H"
              tierName="Hazardous (chất thải nguy hại)"
              accent="tier-h"
              clay="bg-clay-blush"
              samples={samples}
              selectedSampleId="pin-aa"
              detectedItem="Pin AA / AAA × ~12 cục (đóng túi)"
              detectedConfidence={89}
              detectedTier="H"
              thumbnailItems={['pin-aa', 'oil', 'bulb']}
              nextHref="/orders/new/tier-h/items"
              nextLabel="Bước 2 · Chọn loại + số lượng"
              guidanceTips={[
                'Chụp đã đóng gói (túi nilon / hộp carton)',
                'Có thể chụp riêng từng loại nếu nhiều loại',
                'Đính kèm ảnh nhãn cảnh báo (nếu có)',
                'Tier H miễn phí — không cần ảnh nhãn hãng',
              ]}
            />
          </div>
        </main>
    </>
  );
}
