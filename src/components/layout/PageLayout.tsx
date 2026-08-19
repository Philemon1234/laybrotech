import { Outlet } from 'react-router-dom';

export function PageLayout() {
  return (
    <div className="min-h-dvh bg-brand-page text-brand-text-primary antialiased">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
