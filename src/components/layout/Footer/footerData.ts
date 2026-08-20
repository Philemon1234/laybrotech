export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Services', href: '/hosting' },
      { label: 'Pricing & Plans', href: '/pricing' },
      { label: 'Projects', href: '/projects' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Hosting', href: '/hosting' },
      { label: 'Website Design', href: '/website-design' },
      { label: 'Software Development', href: '/software-development' },
      { label: 'Digital Marketing', href: '/digital-marketing' },
    ],
  },
];

export const footerContactLinks: FooterLink[] = [
  { label: 'Support: +256(0)200 923164', href: 'tel:+256200923164' },
  { label: 'info@laybrotech.com', href: 'mailto:info@laybrotech.com' },
  { label: 'Naalya Kyaliwajjala Rd, Topher Building, Second Floor, Room No. 09', href: '/contact' },
];

export const footerLegalLinks: FooterLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'FAQ', href: '/#faq-heading' },
];
