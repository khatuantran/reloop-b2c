import OrderStepperBar from '../../../components/order/OrderStepperBar';
import PhotoStepPanel from '../../../components/order/PhotoStepPanel';

export default function TierC() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-c.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/tier-c/step-2.html' },
    { n: 3, label: 'Dải BOM', icon: 'analytics', href: '/orders/new/tier-c/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/tier-c/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/tier-c/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-c/step-6.html' },
  ];
  
  const samples = [
    { id: 'mainboard', label: 'Mainboard PC cũ', desc: 'Đồng + sắt + linh kiện', icon: 'memory' },
    { id: 'wire-cu', label: 'Dây điện đồng', desc: 'Đồng nguyên chất + vỏ nhựa', icon: 'cable' },
    { id: 'motor', label: 'Mô-tơ máy giặt', desc: 'Đồng cuộn + lõi sắt', icon: 'settings' },
    { id: 'fan', label: 'Quạt điện cũ', desc: 'Mô-tơ + cánh nhựa + sắt', icon: 'mode_fan' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-c font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Đổi loại vật phẩm
            </a>
      
            <OrderStepperBar steps={steps} activeStep={1} tierAccent="tier-c" />
      
            <PhotoStepPanel
              tier="C"
              tierName="Composite (Hub rã xác)"
              accent="tier-c"
              clay="bg-clay-peach"
              samples={samples}
              selectedSampleId="mainboard"
              detectedItem="Mainboard PC ATX (~0.8 kg)"
              detectedConfidence={92}
              detectedTier="C"
              thumbnailItems={['mainboard', 'wire-cu', 'motor']}
              nextHref="/orders/new/tier-c/step-2"
              nextLabel="Bước 2 · Mô tả linh kiện"
              guidanceTips={[
                'Chụp rõ mặt PCB, lộ chip và linh kiện',
                'Có thể chụp nhiều mặt (trước/sau) để AI ước BOM',
                'Tier C cần Hub rã — ảnh chỉ để ước dải giá',
                'Càng rõ chip/transistor, ước càng chính xác',
              ]}
            />
          </div>
        </main>
    </>
  );
}
