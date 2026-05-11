import OrderStepperBar from '../../../components/order/OrderStepperBar';
import PhotoStepPanel from '../../../components/order/PhotoStepPanel';

export default function TierS() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-s.html' },
    { n: 2, label: 'AI nhận diện', icon: 'smart_toy', href: '/orders/new/step-2.html' },
    { n: 3, label: 'Báo giá', icon: 'paid', href: '/orders/new/step-3.html' },
    { n: 4, label: 'Địa chỉ', icon: 'location_on', href: '/orders/new/step-4.html' },
    { n: 5, label: 'Lịch hẹn', icon: 'schedule', href: '/orders/new/step-5.html' },
    { n: 6, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/step-6.html' },
  ];
  
  const samples = [
    { id: 'pet', label: 'Chai PET 500ml', desc: '5.500đ/kg · Đồng nhất', icon: 'water_bottle' },
    { id: 'carton', label: 'Hộp carton khô', desc: '2.500đ/kg · Sạch · Phẳng', icon: 'inventory_2' },
    { id: 'aluminum', label: 'Lon nhôm Coca', desc: '22.000đ/kg · Cao nhất Tier S', icon: 'sports_bar' },
    { id: 'paper', label: 'Giấy báo / sách', desc: '3.200đ/kg · Khô ráo', icon: 'description' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-tier-s font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Đổi loại vật phẩm
            </a>
      
            <OrderStepperBar steps={steps} activeStep={1} tierAccent="tier-s" />
      
            <PhotoStepPanel
              tier="S"
              tierName="Standard"
              accent="tier-s"
              clay="bg-clay-mint"
              samples={samples}
              selectedSampleId="pet"
              detectedItem="Chai PET 500ml × 18 chai (~3.2 kg)"
              detectedConfidence={97}
              detectedTier="S"
              thumbnailItems={['pet', 'aluminum', 'carton']}
              nextHref="/orders/new/step-2"
              nextLabel="Bước 2 · AI báo giá CHẮC CHẮN"
              guidanceTips={[
                'Để vật phẩm trên nền sáng, không bị rối',
                'Chụp toàn bộ vật phẩm trong khung ảnh',
                'Ảnh ngang với vật phẩm dài (chai/lon)',
                'Tránh ngược sáng và bóng đổ',
              ]}
            />
          </div>
        </main>
    </>
  );
}
