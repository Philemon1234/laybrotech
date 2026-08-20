export type FAQEntry = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQEntry[] = [
  {
    id: 'website-timeline',
    question: 'How long does it take to build a website?',
    answer:
      'Most business websites take approximately 1-4 weeks depending on the size, complexity, features, and how quickly required content is provided.',
  },
  {
    id: 'hosting-domains',
    question: 'Do you provide web hosting and domain registration?',
    answer:
      'Yes. Laybrotech provides web hosting, domain registration, SSL security, and related services, allowing businesses to manage their essential web services in one place.',
  },
  {
    id: 'website-redesign',
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. Laybrotech can modernise an existing website, improve its design and mobile responsiveness, update the user experience, and help improve overall performance.',
  },
  {
    id: 'post-launch-support',
    question: 'Do you provide support after launch?',
    answer:
      'Yes. Ongoing support is available for updates, troubleshooting, hosting, maintenance, and other technical needs after your website or digital solution goes live.',
  },
  {
    id: 'self-management',
    question: 'Can I manage and update my website myself?',
    answer:
      'Yes. Where appropriate, Laybrotech builds websites with user-friendly content management options so clients can update common content themselves. Managed support is also available.',
  },
  {
    id: 'custom-software',
    question: 'Do you build custom software and business systems?',
    answer:
      'Yes. Laybrotech develops custom web applications, business systems, dashboards, portals, and other digital solutions tailored to an organisation\'s workflow and requirements.',
  },
  {
    id: 'hosting-migration',
    question: 'Can you help migrate my website to Laybrotech hosting?',
    answer:
      'Yes. Laybrotech can assist with moving an existing website to its hosting environment while aiming to minimise downtime and preserve the website\'s content and configuration.',
  },
  {
    id: 'get-started',
    question: 'How do I get started with Laybrotech?',
    answer:
      'Start by contacting the Laybrotech team and sharing what you need. The team can review your goals, recommend the appropriate service, and guide you through the next steps.',
  },
];
