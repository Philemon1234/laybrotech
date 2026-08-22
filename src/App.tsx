import { Route, Routes } from 'react-router-dom';

import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollToTop } from '@/components/routing';
import { SeoMeta } from '@/components/seo';
import { appRoutes } from '@/lib/routes';
import { BlogArticlePage } from '@/pages/BlogArticlePage';
import { AdminBlogCategoriesPage, AdminBlogCommentsPage, AdminBlogEditorPage, AdminBlogPage, AdminHomePage } from '@/pages/BlogAdminPages';

export function App() {
  return (
    <>
      <SeoMeta />
      <ScrollToTop />
      <Routes>
        <Route element={<PageLayout />}>
          {appRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="/admin/blog" element={<AdminBlogPage />} />
          <Route path="/admin/blog/new" element={<AdminBlogEditorPage />} />
          <Route path="/admin/blog/:id/edit" element={<AdminBlogEditorPage />} />
          <Route path="/admin/blog/categories" element={<AdminBlogCategoriesPage />} />
          <Route path="/admin/blog/comments" element={<AdminBlogCommentsPage />} />
        </Route>
      </Routes>
    </>
  );
}
