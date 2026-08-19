import { Code2, Globe2, Mail, Megaphone, Search, Server } from 'lucide-react';
import type { ComponentType } from 'react';

import { DomainVisual } from './visuals/DomainVisual';
import { EmailVisual } from './visuals/EmailVisual';
import { HostingVisual } from './visuals/HostingVisual';
import { MarketingVisual } from './visuals/MarketingVisual';
import { SoftwareVisual } from './visuals/SoftwareVisual';
import { WebsiteDesignVisual } from './visuals/WebsiteDesignVisual';

export type FeaturedService = {
  label: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  href: string;
  Visual: ComponentType;
};

export type Service = {
  title: string;
  description: string;
  cta: string;
  href: string;
  Icon: typeof Server;
  Visual: ComponentType;
};

export const featuredServices: FeaturedService[] = [
  {
    label: 'FAST • SECURE • RELIABLE',
    title: 'Web Hosting',
    description: 'Reliable hosting built for business websites, stores, organisations, and growing digital platforms.',
    benefits: ['SSL security', 'Reliable uptime', 'Local technical support'],
    cta: 'Explore Hosting',
    href: '/hosting',
    Visual: HostingVisual,
  },
  {
    label: 'DESIGNED TO PERFORM',
    title: 'Website Design',
    description: 'Professional, responsive websites built to strengthen your brand, earn trust, and turn visitors into customers.',
    benefits: ['Mobile responsive', 'SEO-ready structure', 'Conversion-focused design'],
    cta: 'Explore Website Design',
    href: '/website-design',
    Visual: WebsiteDesignVisual,
  },
];

export const services: Service[] = [
  {
    title: 'Domain Registration',
    description: 'Find and secure the right domain for your business.',
    cta: 'Find Your Domain',
    href: '/domain-registration',
    Icon: Search,
    Visual: DomainVisual,
  },
  {
    title: 'Business Email',
    description: 'Build trust with professional email addresses using your own domain.',
    cta: 'Explore Business Email',
    href: '/business-email',
    Icon: Mail,
    Visual: EmailVisual,
  },
  {
    title: 'Software Development',
    description: 'Custom software and digital systems designed around the way your organisation works.',
    cta: 'Explore Software',
    href: '/software-development',
    Icon: Code2,
    Visual: SoftwareVisual,
  },
  {
    title: 'Digital Marketing',
    description: 'Reach more customers through strategy, search, campaigns, and measurable digital growth.',
    cta: 'Explore Marketing',
    href: '/digital-marketing',
    Icon: Megaphone,
    Visual: MarketingVisual,
  },
];
