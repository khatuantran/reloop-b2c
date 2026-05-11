import { Link } from 'react-router-dom';

/** Fallback khi route động (`:id`) trỏ tới entity không tồn tại trong mock.
 *  Bản Astro chỉ `getStaticPaths()` cho id biết trước nên không gặp case này. */
export default function NotFound({ what = 'Mục bạn tìm', backTo = '/orders', backLabel = 'Về danh sách đơn' }) {
  return (
    <main className="pt-[100px] pb-space-96 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-[80px]">
        <div className="bg-bg-elevated rounded-[28px] shadow-clay p-space-32 text-center">
          <div className="text-[64px] leading-none mb-space-16">🔍</div>
          <h1 className="font-display-lg text-display-lg text-text-primary mb-space-8">{what} không tồn tại</h1>
          <p className="text-body-md text-text-secondary mb-space-24">Mã không có trong dữ liệu mock. Bản prototype chỉ có sẵn vài đơn mẫu.</p>
          <Link to={backTo} className="inline-flex items-center gap-space-8 rounded-full bg-lime text-text-on-lime px-space-24 py-space-12 font-semibold shadow-clay-sm">
            <span className="material-symbols-rounded">arrow_back</span>{backLabel}
          </Link>
        </div>
      </div>
    </main>
  );
}
