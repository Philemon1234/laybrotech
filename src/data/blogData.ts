import hostingImage from '@/assets/images/services/web-hosting.webp';
import webDesignImage from '@/assets/images/services/web-design.webp';
import softwareImage from '@/assets/images/services/software-development.webp';
import marketingImage from '@/assets/images/services/digital-marketing.webp';
import businessGrowthImage from '@/assets/images/home-hero-business-growth.webp';
import ecosystemImage from '@/assets/images/home-hero-digital-ecosystem.webp';

export type BlogStatus = 'draft' | 'published';
export type CommentStatus = 'pending' | 'approved' | 'rejected';

export type BlogCategory = { id: string; name: string; slug: string; createdAt: string };
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  status: BlogStatus;
  categoryId: string;
  authorName: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  isFeatured?: boolean;
};
export type BlogComment = { id: string; postId: string; name: string; email: string; comment: string; status: CommentStatus; createdAt: string };

export const seedBlogCategories: BlogCategory[] = [
  { id: 'cat-hosting', name: 'Web Hosting', slug: 'web-hosting', createdAt: '2026-08-01T08:00:00.000Z' },
  { id: 'cat-design', name: 'Website Design', slug: 'website-design', createdAt: '2026-08-01T08:00:00.000Z' },
  { id: 'cat-software', name: 'Software Development', slug: 'software-development', createdAt: '2026-08-01T08:00:00.000Z' },
  { id: 'cat-marketing', name: 'Digital Marketing', slug: 'digital-marketing', createdAt: '2026-08-01T08:00:00.000Z' },
  { id: 'cat-business-tech', name: 'Business Technology', slug: 'business-technology', createdAt: '2026-08-01T08:00:00.000Z' },
  { id: 'cat-news', name: 'Company News', slug: 'company-news', createdAt: '2026-08-01T08:00:00.000Z' },
];

export const seedBlogPosts: BlogPost[] = [
  {
    id: 'post-hosting-choice',
    title: 'How to Choose the Right Web Hosting for Your Business',
    slug: 'how-to-choose-the-right-web-hosting-for-your-business',
    excerpt: 'A practical guide to choosing hosting that fits your website size, traffic, support needs, and growth plans.',
    content: `## Start with what your website needs

The right hosting plan depends on what your website is expected to do. A small company website has different needs from an online store, school portal, or growing organisation platform.

Before choosing a plan, look at your website size, traffic expectations, email requirements, security needs, and how much support you want from your provider.

## Look beyond storage alone

Storage matters, but it is only one part of hosting. Reliable uptime, SSL security, backups, support, and performance are just as important for a business website.

A cheaper plan can become expensive if your website is frequently slow, unavailable, or difficult to maintain.

## Choose room to grow

Your hosting should support the business you are building, not only the website you have today. If you expect more visitors, more pages, email accounts, or future systems, choose a setup that can scale.

## Conclusion

Good hosting gives your website a stable foundation. Choose a plan based on reliability, support, security, and the future needs of your business.`,
    featuredImageUrl: hostingImage,
    status: 'published',
    categoryId: 'cat-hosting',
    authorName: 'Laybrotech Team',
    publishedAt: '2026-08-04T09:00:00.000Z',
    createdAt: '2026-08-04T09:00:00.000Z',
    updatedAt: '2026-08-04T09:00:00.000Z',
    seoTitle: 'How to Choose the Right Web Hosting for Your Business',
    seoDescription: 'Learn how to choose web hosting based on reliability, support, security, website size, and business growth needs.',
    isFeatured: true,
  },
  {
    id: 'post-effective-website',
    title: 'What Makes a Business Website Effective?',
    slug: 'what-makes-a-business-website-effective',
    excerpt: 'A strong business website should build trust, explain your offer clearly, and guide visitors toward the next step.',
    content: `## Clarity comes first

An effective business website helps visitors quickly understand who you are, what you offer, and why they should trust you.

Your homepage, service pages, and contact areas should be easy to scan. Confusing layouts or vague copy make it harder for customers to take action.

## Design should support action

Good design is not only about appearance. It should make navigation easier, make important information visible, and guide users toward enquiries, calls, bookings, or purchases.

## Mobile experience matters

Many customers will visit your website on a phone. A responsive website should load well, fit smaller screens, and keep forms, buttons, and menus easy to use.

## Conclusion

The best business websites combine credibility, usability, speed, and clear next steps.`,
    featuredImageUrl: webDesignImage,
    status: 'published',
    categoryId: 'cat-design',
    authorName: 'Laybrotech Team',
    publishedAt: '2026-08-06T09:00:00.000Z',
    createdAt: '2026-08-06T09:00:00.000Z',
    updatedAt: '2026-08-06T09:00:00.000Z',
  },
  {
    id: 'post-custom-software',
    title: 'When Does Your Business Need Custom Software?',
    slug: 'when-does-your-business-need-custom-software',
    excerpt: 'Custom software becomes useful when repeated manual work, scattered records, or disconnected tools start slowing operations.',
    content: `## Repetition is a signal

If your team repeats the same manual tasks every day, there may be an opportunity to design software around that workflow.

Examples include approvals, reporting, customer records, inventory updates, fee tracking, staff coordination, and internal communication.

## Spreadsheets can reach their limit

Spreadsheets are useful, but they can become difficult to manage when many people, records, permissions, or reports are involved.

A custom system can bring structure, access control, and cleaner reporting into one place.

## Software should fit the workflow

The goal is not to digitise confusion. The goal is to understand how the organisation works and then build a system that reduces friction.

## Conclusion

Your business may need custom software when existing tools cannot support your operations clearly, reliably, or securely.`,
    featuredImageUrl: softwareImage,
    status: 'published',
    categoryId: 'cat-software',
    authorName: 'Laybrotech Team',
    publishedAt: '2026-08-08T09:00:00.000Z',
    createdAt: '2026-08-08T09:00:00.000Z',
    updatedAt: '2026-08-08T09:00:00.000Z',
  },
  {
    id: 'post-seo-paid-ads',
    title: 'SEO vs Paid Ads: Where Should a Small Business Start?',
    slug: 'seo-vs-paid-ads-where-should-a-small-business-start',
    excerpt: 'SEO and paid ads solve different growth problems. The right starting point depends on your goals, timeline, and budget.',
    content: `## SEO builds long-term visibility

SEO helps your website become easier to discover in search. It usually takes time, but it can support long-term traffic and credibility.

A good SEO foundation includes technical health, useful content, clear page structure, local signals, and relevant keywords.

## Paid ads can create faster reach

Paid ads can help you reach targeted audiences faster. They are useful for promotions, lead generation, launches, and campaigns with clear objectives.

Ads need monitoring, testing, and conversion tracking so the budget is used thoughtfully.

## Many businesses need both

SEO and paid ads can work together. SEO strengthens the website foundation, while ads can bring targeted traffic to specific offers or landing pages.

## Conclusion

Start with the channel that matches your current goal. If you need quick enquiries, ads may help. If you want long-term visibility, invest in SEO early.`,
    featuredImageUrl: marketingImage,
    status: 'published',
    categoryId: 'cat-marketing',
    authorName: 'Laybrotech Team',
    publishedAt: '2026-08-10T09:00:00.000Z',
    createdAt: '2026-08-10T09:00:00.000Z',
    updatedAt: '2026-08-10T09:00:00.000Z',
  },
  {
    id: 'post-website-speed',
    title: 'Why Website Speed Matters for Your Customers',
    slug: 'why-website-speed-matters-for-your-customers',
    excerpt: 'A faster website improves user experience, trust, search visibility, and the chance that visitors complete important actions.',
    content: `## Speed shapes first impressions

When a website loads slowly, visitors may leave before they understand what the business offers. Fast loading creates a smoother first impression.

## Performance supports mobile users

Many customers browse on mobile connections. A lightweight, responsive website helps them move through pages without frustration.

## Hosting and design both matter

Website speed is affected by hosting quality, image sizes, code structure, caching, and how the website is built.

## Conclusion

Performance is part of customer experience. A fast website helps visitors stay, read, and take action.`,
    featuredImageUrl: ecosystemImage,
    status: 'published',
    categoryId: 'cat-hosting',
    authorName: 'Laybrotech Team',
    publishedAt: '2026-08-12T09:00:00.000Z',
    createdAt: '2026-08-12T09:00:00.000Z',
    updatedAt: '2026-08-12T09:00:00.000Z',
  },
  {
    id: 'post-digital-systems',
    title: 'How Digital Systems Can Reduce Repetitive Business Work',
    slug: 'how-digital-systems-can-reduce-repetitive-business-work',
    excerpt: 'Digital systems can help organisations reduce repeated manual work, organise records, and improve team coordination.',
    content: `## Repeated work slows teams down

When staff spend too much time copying information, searching records, or preparing the same reports, important work can be delayed.

## Systems create a shared source of truth

A well-designed digital system can keep records, tasks, approvals, and reports in one environment. This reduces confusion and improves accountability.

## Start with the workflow

The best digital systems begin with understanding how people work. Technology should support the process instead of forcing teams into unnecessary complexity.

## Conclusion

Digital systems can save time when they are designed around real operational needs and maintained as the organisation grows.`,
    featuredImageUrl: businessGrowthImage,
    status: 'draft',
    categoryId: 'cat-business-tech',
    authorName: 'Laybrotech Team',
    publishedAt: '',
    createdAt: '2026-08-14T09:00:00.000Z',
    updatedAt: '2026-08-14T09:00:00.000Z',
  },
];

export const seedBlogComments: BlogComment[] = [
  { id: 'comment-1', postId: 'post-hosting-choice', name: 'Doreen', email: 'doreen@example.com', comment: 'Helpful explanation. The part about support and backups is important for small teams.', status: 'approved', createdAt: '2026-08-15T10:00:00.000Z' },
  { id: 'comment-2', postId: 'post-effective-website', name: 'Martin', email: 'martin@example.com', comment: 'Please share more about what to prepare before starting a website redesign.', status: 'pending', createdAt: '2026-08-16T10:00:00.000Z' },
];

