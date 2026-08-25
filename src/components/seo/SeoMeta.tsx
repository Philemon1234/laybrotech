import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getProjectBySlug } from '@/sections/home/ProjectsShowcase/projectData';

import { seoMetaByPath, defaultSeoMeta } from './seoMetaData';

function setMetaTag(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

export function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);
    const project = projectMatch ? getProjectBySlug(projectMatch[1]) : undefined;
    const meta = project
      ? {
          title: `${project.name} Website Project | Laybrotech`,
          description: project.description,
        }
      : seoMetaByPath[pathname] ?? defaultSeoMeta;

    document.title = meta.title;
    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
  }, [pathname]);

  return null;
}
