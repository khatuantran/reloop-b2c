import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import AppLayout from './layouts/AppLayout';
import Stub from './components/Stub';
import ErrorBoundary from './components/ErrorBoundary';
import { ROUTES } from './routes';

// Vite glob — tự dò mọi page đã port trong src/pages/. Page chưa có file → render <Stub>.
const pageModules = import.meta.glob('./pages/**/*.jsx');

function pageFor(file) {
  const loader = pageModules[`./pages/${file}.jsx`];
  return loader ? lazy(loader) : null;
}

const Loading = () => (
  <div className="pt-[140px] text-center font-mono-md text-text-tertiary">Đang tải…</div>
);
const NotFoundPage = pageFor('404');

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {ROUTES.map((r) => {
          const C = pageFor(r.file);
          return (
            <Route
              key={r.path}
              path={r.path}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Loading />}>
                    {C ? <C /> : <Stub route={r.path} name={r.name} />}
                  </Suspense>
                </ErrorBoundary>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              {NotFoundPage ? <NotFoundPage /> : <Stub route="*" name="404 — Không tìm thấy" />}
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
