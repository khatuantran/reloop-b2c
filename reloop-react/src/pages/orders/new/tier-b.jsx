import OrderStepperBar from '../../../components/order/OrderStepperBar';
import PhotoStepPanel from '../../../components/order/PhotoStepPanel';

export default function TierB() {
  const steps = [
    { n: 1, label: 'Chụp ảnh', icon: 'photo_camera', href: '/orders/new/tier-b.html' },
    { n: 2, label: 'Mode + Quote', icon: 'flash_on', href: '/orders/new/tier-b/quote.html' },
    { n: 3, label: 'Địa chỉ + Slot', icon: 'location_on', href: '/orders/new/tier-b/address.html' },
    { n: 4, label: 'Xác nhận', icon: 'check_circle', href: '/orders/new/tier-b/confirm.html' },
  ];
  
  const samples = [
    { id: 'fridge', label: 'Tủ lạnh đôi 300L', desc: 'Sàn 1.2M · Premium 1.65M', icon: 'kitchen' },
    { id: 'sofa', label: 'Sofa 3 chỗ vải', desc: 'Sàn 320k · Premium 480k', icon: 'chair' },
    { id: 'tv', label: 'Tivi LCD 42"', desc: 'Sàn 580k · Premium 850k', icon: 'tv' },
    { id: 'washer', label: 'Máy giặt cửa trên 8kg', desc: 'Sàn 850k · Premium 1.18M', icon: 'local_laundry_service' },
  ];
  return (
    <>
      <main className="pt-[100px] pb-space-96 min-h-screen">
          <div className="max-w-[1280px] mx-auto px-[80px]">
            <a href="/orders/new" className="inline-flex items-center gap-space-8 font-mono-md text-[12px] text-text-secondary hover:text-amber-deep font-semibold mb-space-16">
              <span className="material-symbols-rounded !text-[16px]">arrow_back</span>
              Đổi loại vật phẩm
            </a>
      
            <OrderStepperBar steps={steps} activeStep={1} tierAccent="amber-deep" />
      
            <PhotoStepPanel
              tier="B"
              tierName="Bulky / Big (đồ to)"
              accent="amber-deep"
              clay="bg-clay-butter"
              samples={samples}
              selectedSampleId="fridge"
              detectedItem="Tủ lạnh đôi 300L Samsung RT35K (~62 kg)"
              detectedConfidence={94}
              detectedTier="B"
              thumbnailItems={['fridge', 'tv', 'sofa']}
              nextHref="/orders/new/tier-b/quote"
              nextLabel="Bước 2 · Speed hoặc Auction"
              guidanceTips={[
                'Chụp toàn bộ vật phẩm trong khung',
                'Có nhãn hãng/model để AI ước Premium',
                'Chụp thêm góc để thấy hư hỏng (nếu có)',
                'Đo kích thước thực — Hub cần kiểm tra vận chuyển',
              ]}
            />
          </div>
        </main>
    </>
  );
}
