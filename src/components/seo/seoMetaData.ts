type SeoMeta = {
  title: string;
  description: string;
};

export const defaultSeoMeta: SeoMeta = {
  title: 'Laybrotech | Technology, Websites & Hosting in Uganda',
  description:
    'Laybrotech helps businesses in Uganda build, host, manage, and grow online with websites, hosting, domains, email, software, and digital support.',
};

export const seoMetaByPath: Record<string, SeoMeta> = {
  '/': {
    title: 'Laybrotech | Websites, Hosting & Digital Growth Solutions',
    description:
      'Laybrotech helps businesses build, host, and grow online through professional websites, web hosting, software solutions, and digital services.',
  },
  '/hosting': {
    title: 'Web Hosting | Fast, Secure & Reliable Hosting | Laybrotech',
    description:
      'Host your business website with Laybrotech using fast, secure, and reliable web hosting with SSL, backups, business email, monitoring, and local support.',
  },
  '/website-design': {
    title: 'Website Design | Professional Business Websites | Laybrotech',
    description:
      'Laybrotech designs modern, responsive websites that strengthen your brand, build trust, and help turn visitors into real business opportunities.',
  },
  '/domain-registration': {
    title: 'Domain Registration | Secure Your Business Domain | Laybrotech',
    description:
      'Register and manage business domains with Laybrotech so customers can find and trust your brand online.',
  },
  '/business-email': {
    title: 'Business Email | Professional Email for Your Domain | Laybrotech',
    description:
      'Set up professional business email with your own domain through Laybrotech for clearer, more trusted communication.',
  },
  '/software-development': {
    title: 'Software Development | Custom Business Solutions | Laybrotech',
    description:
      'Laybrotech builds custom software solutions that help businesses improve workflows, manage operations, and support digital growth.',
  },
  '/digital-marketing': {
    title: 'Digital Marketing | Reach More Customers Online | Laybrotech',
    description:
      'Grow your brand online with Laybrotech digital marketing services built around visibility, campaigns, content, and measurable business goals.',
  },
  '/pricing': {
    title: 'Pricing & Plans | Laybrotech',
    description:
      'Explore Laybrotech pricing and plans for websites, hosting, domains, email, software, and digital services.',
  },
  '/projects': {
    title: 'Projects | Websites & Digital Work by Laybrotech',
    description:
      'View selected Laybrotech projects and website work created for businesses and organisations across different industries.',
  },
  '/explore-more': {
    title: 'Explore More Services | Laybrotech',
    description:
      'Explore more Laybrotech technology and digital services for businesses that need reliable online systems and support.',
  },
  '/blog': {
    title: 'Blog | Digital Business Insights | Laybrotech',
    description:
      'Read Laybrotech insights on websites, hosting, domains, business email, software, marketing, and digital growth.',
  },
  '/contact': {
    title: 'Contact Laybrotech | Talk to Sales or Support',
    description:
      'Contact Laybrotech for website design, hosting, domains, business email, software development, digital marketing, and technical support.',
  },
  '/design-system': {
    title: 'Design System | Laybrotech',
    description: 'Internal Laybrotech design system reference for brand styles, components, spacing, and typography.',
  },
};
