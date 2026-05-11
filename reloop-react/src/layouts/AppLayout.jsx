import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import TopNav from '../components/nav/TopNav';
import Footer from '../components/layout/Footer';

// = BaseLayout.astro: TopNav (fixed) + nội dung trang + Footer. Pages tự render <main className="pt-[100px] ...">.
// Vì các page port-tự-động vẫn dùng <a href="/x"> (không phải <Link>), chặn click ở đây để điều hướng SPA.
export default function AppLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo({ top: 0 }); }, [pathname]);

  function onClick(e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    let el = e.target;
    while (el && el.tagName !== 'A') el = el.parentElement;
    if (!el) return;
    const a = el;
    const href = a.getAttribute('href') || '';
    if (a.target === '_blank' || a.hasAttribute('download')) return;
    // chỉ chặn link nội bộ dạng "/..." (bỏ qua "#", "tel:", "mailto:", "http(s)://", "")
    if (!href.startsWith('/') || href.startsWith('//')) return;
    e.preventDefault();
    // các page port-tự-động giữ đường dẫn kiểu Astro: "/x.html", "/index.html", "/dir/index.html#hash"
    // → chuẩn hoá về route React Router trước khi navigate.
    const [rawPath, hash] = href.split('#');
    let path = rawPath.replace(/\.html$/, '').replace(/\/index$/, '/');
    if (path === '') path = '/';
    navigate(hash ? `${path}#${hash}` : path);
  }

  return (
    <div className="bg-bg-base text-text-primary font-body-md min-h-screen" onClick={onClick}>
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
}
