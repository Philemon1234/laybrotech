import { Outlet } from 'react-router-dom';

import { Header } from '@/components/navigation/Header';

export function PageLayout() {
  return (
    <div className="min-h-dvh bg-white text-brand-text-primary antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

