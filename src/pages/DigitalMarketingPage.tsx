import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/sections/home/FAQ';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Testimonials } from '@/sections/home/Testimonials';
import {
  DigitalMarketingBenefits,
  DigitalMarketingHero,
  DigitalMarketingProcess,
  DigitalMarketingProjects,
  DigitalMarketingServices,
  DigitalMarketingTrustBar,
  DigitalMarketingWhyChoose,
  MarketingChannels,
  MarketingGrowthJourney,
  SeoWebsiteMarketing,
  digitalMarketingFaqItems,
  digitalMarketingTestimonials,
} from '@/sections/digital-marketing';

export function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingHero />
      <DigitalMarketingTrustBar />
      <DigitalMarketingServices />
      <MarketingGrowthJourney />
      <DigitalMarketingWhyChoose />
      <MarketingChannels />
      <DigitalMarketingProcess />
      <SeoWebsiteMarketing />
      <DigitalMarketingBenefits />
      <DigitalMarketingProjects />
      <Testimonials
        eyebrow="Digital Marketing Testimonials"
        heading="Marketing Support Built Around Real Business Goals."
        copy="Hear from businesses that have worked with Laybrotech to improve visibility, campaigns, websites, and customer reach."
        items={digitalMarketingTestimonials}
      />
      <FAQ
        eyebrow="Digital Marketing FAQ"
        heading="Digital Marketing Questions, Answered."
        copy="Find quick answers about SEO, advertising, social media, reporting, campaign timelines, and getting started."
        items={digitalMarketingFaqItems}
      />
      <FinalCTA
        heading="Ready to Grow Your Business Online?"
        primaryLabel="Start Your Marketing"
        primaryHref="/contact"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
      <Footer />
    </>
  );
}
