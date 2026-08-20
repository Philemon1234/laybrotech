import { Code2, Mail, Megaphone, Search, Server } from 'lucide-react';

import webDesignImage from '@/assets/images/services/web-design.jpg';
import webHostingImage from '@/assets/images/services/web-hosting.jpg';

export type FeaturedService = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  tone: 'warm' | 'plain';
  reverse?: boolean;
};

export type Service = {
  title: string;
  description: string;
  cta: string;
  href: string;
  Icon: typeof Server;
};

export const featuredServices: FeaturedService[] = [
  {
    label: 'FEATURED SERVICE',
    eyebrow: 'DESIGNED TO PERFORM',
    title: 'Website Design That Turns Visitors Into Customers.',
    description:
      'Laybrotech designs professional, responsive websites that strengthen your brand, build customer trust, and help turn online visitors into real business opportunities.',
    benefits: ['Mobile responsive', 'SEO-ready structure', 'Conversion-focused design'],
    cta: 'Explore Website Design',
    href: '/website-design',
    image: webDesignImage,
    imageAlt: 'Website design interface preview for a modern business website',
    tone: 'warm',
  },
  {
    label: 'FEATURED SERVICE',
    eyebrow: 'FAST \u2022 SECURE \u2022 RELIABLE',
    title: 'Reliable Web Hosting Built for Growing Businesses.',
    description:
      'Fast, secure, and dependable hosting for business websites, online stores, organisations, and growing digital platforms, backed by technical support when you need it.',
    benefits: ['SSL security', 'Reliable uptime', 'Local technical support'],
    cta: 'Explore Web Hosting',
    href: '/hosting',
    image: webHostingImage,
    imageAlt: 'Web hosting dashboard and server infrastructure preview',
    tone: 'plain',
    reverse: true,
  },
];

export const services: Service[] = [
  {
    title: 'Domain Registration',
    description: 'Find and secure the right domain name for your business and build a professional online identity.',
    cta: 'Find Your Domain',
    href: '/domain-registration',
    Icon: Search,
  },
  {
    title: 'Business Email',
    description: 'Build trust with professional email addresses using your own company domain.',
    cta: 'Explore Business Email',
    href: '/business-email',
    Icon: Mail,
  },
  {
    title: 'Software Development',
    description: 'Custom software and digital systems designed around the way your organisation works.',
    cta: 'Explore Software',
    href: '/software-development',
    Icon: Code2,
  },
  {
    title: 'Digital Marketing',
    description: 'Reach more customers through strategy, search, campaigns, and measurable digital growth.',
    cta: 'Explore Marketing',
    href: '/digital-marketing',
    Icon: Megaphone,
  },
];
