import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout/PageLayout';
import { appRoutes } from '@/lib/routes';

export function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
      </Route>
    </Routes>
  );
}

