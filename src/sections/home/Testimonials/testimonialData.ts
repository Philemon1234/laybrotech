export type Testimonial = {
  id: string;
  name: string;
  meta: string;
  initials: string;
  avatarTone: 'orange' | 'charcoal' | 'warm' | 'green';
  rating: number;
  title: string;
  excerpt: string;
  fullReview: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'grace-website-design',
    name: 'Grace N.',
    meta: 'Business Owner',
    initials: 'GN',
    avatarTone: 'orange',
    rating: 5,
    title: 'A professional website that finally reflects our brand.',
    excerpt:
      'Laybrotech listened carefully, explained every step, and delivered a clean website that our customers can navigate with confidence.',
    fullReview:
      'Laybrotech listened carefully, explained every step, and delivered a clean website that our customers can navigate with confidence. The communication was professional from the first consultation to launch, and the final result made our business look more credible online. We especially appreciated how responsive the team was when we needed adjustments.',
  },
  {
    id: 'daniel-hosting-support',
    name: 'Daniel K.',
    meta: 'Operations Lead',
    initials: 'DK',
    avatarTone: 'charcoal',
    rating: 5,
    title: 'Reliable hosting and support when we needed it.',
    excerpt:
      'Our website has been faster and more stable since moving to Laybrotech hosting, and support has been easy to reach.',
    fullReview:
      'Our website has been faster and more stable since moving to Laybrotech hosting, and support has been easy to reach. The team helped us understand what was changing, handled the migration carefully, and made sure everything was working before handing it over. It has given us more confidence in our online presence.',
  },
  {
    id: 'aisha-business-email',
    name: 'Aisha M.',
    meta: 'Client',
    initials: 'AM',
    avatarTone: 'warm',
    rating: 5,
    title: 'Clear setup and a more professional online identity.',
    excerpt:
      'The business email setup was smooth, and our team now communicates with clients using branded addresses.',
    fullReview:
      'The business email setup was smooth, and our team now communicates with clients using branded addresses. Laybrotech made the process simple, explained how everything worked, and helped us avoid the confusion we had with our previous setup. It was a small change that made our company feel much more professional.',
  },
  {
    id: 'peter-software-tools',
    name: 'Peter O.',
    meta: 'Organisation Manager',
    initials: 'PO',
    avatarTone: 'green',
    rating: 5,
    title: 'They understood the workflow we needed.',
    excerpt:
      'Laybrotech helped us think through the system before building, which made the final digital tool much easier for our team to use.',
    fullReview:
      'Laybrotech helped us think through the system before building, which made the final digital tool much easier for our team to use. They asked good questions, simplified the process, and delivered something that matched the way our organisation actually works. The support after delivery was also very helpful.',
  },
  {
    id: 'lydia-digital-growth',
    name: 'Lydia W.',
    meta: 'Marketing Coordinator',
    initials: 'LW',
    avatarTone: 'orange',
    rating: 5,
    title: 'A calm, strategic approach to digital growth.',
    excerpt:
      'The team helped us clarify our message online and gave practical guidance for improving search visibility and customer enquiries.',
    fullReview:
      'The team helped us clarify our message online and gave practical guidance for improving search visibility and customer enquiries. What stood out most was their calm, strategic approach. They did not overwhelm us with jargon, and they focused on the things that would actually help the business grow.',
  },
  {
    id: 'samuel-domain-launch',
    name: 'Samuel T.',
    meta: 'Startup Founder',
    initials: 'ST',
    avatarTone: 'charcoal',
    rating: 5,
    title: 'Everything we needed to launch in one place.',
    excerpt:
      'From domain registration to hosting and website launch, Laybrotech made the process feel organised and manageable.',
    fullReview:
      'From domain registration to hosting and website launch, Laybrotech made the process feel organised and manageable. As a new business, we needed guidance and a partner who could handle the technical pieces without making the process stressful. Laybrotech gave us that support and delivered exactly what we needed to get online.',
  },
];
