import type { ComponentType } from 'react';

import { BlogPage } from '@/pages/BlogPage';
import { BusinessEmailPage } from '@/pages/BusinessEmailPage';
import { ContactPage } from '@/pages/ContactPage';
import { DesignSystemPage } from '@/pages/DesignSystemPage';
import { DigitalMarketingPage } from '@/pages/DigitalMarketingPage';
import { DomainRegistrationPage } from '@/pages/DomainRegistrationPage';
import { ExploreMorePage } from '@/pages/ExploreMorePage';
import { HomePage } from '@/pages/HomePage';
import { HostingPage } from '@/pages/HostingPage';
import { PricingPage } from '@/pages/PricingPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { SoftwareDevelopmentPage } from '@/pages/SoftwareDevelopmentPage';
import { WebsiteDesignPage } from '@/pages/WebsiteDesignPage';

export type AppRoute = {
  path: string;
  label: string;
  Component: ComponentType;
};

export const appRoutes: AppRoute[] = [
  { path: '/', label: 'Home', Component: HomePage },
  { path: '/hosting', label: 'Hosting', Component: HostingPage },
  { path: '/website-design', label: 'Website Design', Component: WebsiteDesignPage },
  { path: '/domain-registration', label: 'Domain Registration', Component: DomainRegistrationPage },
  { path: '/business-email', label: 'Business Email', Component: BusinessEmailPage },
  { path: '/software-development', label: 'Software Development', Component: SoftwareDevelopmentPage },
  { path: '/digital-marketing', label: 'Digital Marketing', Component: DigitalMarketingPage },
  { path: '/pricing', label: 'Pricing', Component: PricingPage },
  { path: '/projects', label: 'Projects', Component: ProjectsPage },
  { path: '/explore-more', label: 'Articles', Component: ExploreMorePage },
  { path: '/blog', label: 'Blog', Component: BlogPage },
  { path: '/contact', label: 'Contact', Component: ContactPage },
  { path: '/design-system', label: 'Design System', Component: DesignSystemPage },
];

