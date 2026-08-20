import type { FAQEntry } from '@/sections/home/FAQ/faqData';
import type { Testimonial } from '@/sections/home/Testimonials/testimonialData';

export const hostingTestimonials: Testimonial[] = [
  {
    id: 'daniel-hosting-stability',
    name: 'Daniel K.',
    meta: 'Business Owner',
    initials: 'DK',
    avatarTone: 'charcoal',
    rating: 5,
    title: 'Our website has been much more stable.',
    excerpt:
      'Since moving our business website to Laybrotech, performance has been more consistent and support has been easy to reach whenever we need help.',
    fullReview:
      'Since moving our business website to Laybrotech, the site has been more stable and easier to manage. The team helped us understand the hosting setup and whenever we have a technical question, support has been clear and responsive. It has made running our website much less stressful.',
  },
  {
    id: 'grace-hosting-migration',
    name: 'Grace N.',
    meta: 'Operations Manager',
    initials: 'GN',
    avatarTone: 'orange',
    rating: 5,
    title: 'The migration process was straightforward.',
    excerpt:
      'Laybrotech helped us move our existing website without making the process complicated.',
    fullReview:
      'We already had a website hosted elsewhere and wanted to move it. Laybrotech guided us through the migration process, helped with the website files and configuration, and checked that everything was working properly afterwards. The process was straightforward and well explained.',
  },
  {
    id: 'peter-hosting-support',
    name: 'Peter O.',
    meta: 'Organisation Manager',
    initials: 'PO',
    avatarTone: 'green',
    rating: 5,
    title: 'Reliable support when we need it.',
    excerpt:
      'Whenever we have a hosting or website question, the team responds clearly and professionally.',
    fullReview:
      'What we appreciate most is having access to support when something needs attention. Whether it is an email setup question, hosting configuration, or general website issue, the Laybrotech team has been helpful and professional.',
  },
  {
    id: 'aisha-email-hosting',
    name: 'Aisha M.',
    meta: 'Client',
    initials: 'AM',
    avatarTone: 'warm',
    rating: 5,
    title: 'Business email and hosting in one place.',
    excerpt:
      'Having our website hosting and professional email managed together has made things easier for our team.',
    fullReview:
      'We needed reliable website hosting together with professional business email. Having both services managed through Laybrotech has simplified things for our team, especially when we need technical support or changes.',
  },
  {
    id: 'samuel-growing-hosting',
    name: 'Samuel T.',
    meta: 'Business Manager',
    initials: 'ST',
    avatarTone: 'charcoal',
    rating: 5,
    title: 'A better setup for our growing website.',
    excerpt:
      'As our website grew, we needed more dependable resources and support.',
    fullReview:
      'Our website had grown beyond the basic setup we originally started with. Laybrotech helped us move to a more suitable hosting plan and explained the differences clearly. The website is now better positioned for the traffic and content we are adding.',
  },
  {
    id: 'lydia-dependable-hosting',
    name: 'Lydia W.',
    meta: 'Marketing Coordinator',
    initials: 'LW',
    avatarTone: 'orange',
    rating: 5,
    title: 'Simple, clear and dependable hosting.',
    excerpt:
      'The hosting setup has been easy to understand and the website remains available when we need it.',
    fullReview:
      'We wanted hosting that did not feel complicated. Laybrotech helped us get the website online, set up the essentials, and made sure we knew where to go whenever we needed support. The service has been clear and dependable.',
  },
];

export const hostingFaqItems: FAQEntry[] = [
  {
    id: 'choose-hosting-plan',
    question: 'Which hosting plan should I choose?',
    answer:
      'The right plan depends on your website size, traffic, storage requirements, and the level of support you need. Starter Hosting is suitable for smaller websites, Business Hosting is designed for growing business websites, and Enterprise Hosting is intended for more demanding platforms and organisations.',
  },
  {
    id: 'migrate-existing-website',
    question: 'Can Laybrotech migrate my existing website?',
    answer:
      'Yes. Laybrotech can assist with moving your existing website files, database, domain configuration, and essential settings to the Laybrotech hosting environment.',
  },
  {
    id: 'ssl-included',
    question: 'Is an SSL certificate included?',
    answer:
      'Yes. SSL security is included with Laybrotech hosting plans so your website can use secure HTTPS connections.',
  },
  {
    id: 'website-backups',
    question: 'Are website backups included?',
    answer:
      'Backup availability depends on the hosting plan. Laybrotech hosting includes backup options designed to help protect website files and data.',
  },
  {
    id: 'business-email-hosting',
    question: 'Can I use professional business email with my hosting?',
    answer:
      'Yes. Laybrotech hosting supports professional business email using your own domain, helping your business communicate with a more professional identity.',
  },
  {
    id: 'more-hosting-resources',
    question: 'What happens if my website needs more resources later?',
    answer:
      'You can move to a more suitable hosting plan as your website grows and requires additional storage, bandwidth, performance, or support.',
  },
  {
    id: 'cpanel-access',
    question: 'Do I get cPanel access?',
    answer:
      'cPanel access is available on supported Laybrotech hosting plans, giving you tools to manage website files, databases, email, domains, and other hosting settings.',
  },
  {
    id: 'hosting-support',
    question: 'How do I get hosting support?',
    answer:
      'You can contact the Laybrotech support team for assistance with hosting setup, website configuration, migration, email, and other technical hosting needs.',
  },
];
