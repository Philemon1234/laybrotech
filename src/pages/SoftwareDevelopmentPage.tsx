import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/sections/home/FAQ';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Testimonials } from '@/sections/home/Testimonials';
import {
  SoftwareBenefits,
  SoftwareDevelopmentHero,
  SoftwareIndustries,
  SoftwareProcess,
  SoftwareTechnologies,
  SoftwareTechnologyStack,
  SoftwareTrustBar,
  SoftwareWhatWeBuild,
  SoftwareWhyChoose,
} from '@/sections/software-development';
import { softwareFaqItems, softwareTestimonials } from '@/sections/software-development/softwareDevelopmentPageContent';

export function SoftwareDevelopmentPage() {
  return (
    <>
      <SoftwareDevelopmentHero />
      <SoftwareTrustBar />
      <SoftwareWhatWeBuild />
      <SoftwareWhyChoose />
      <SoftwareProcess />
      <SoftwareIndustries />
      <SoftwareTechnologies />
      <SoftwareTechnologyStack />
      <SoftwareBenefits />
      <Testimonials
        eyebrow="Software Development Testimonials"
        heading="Built Around Real Business Needs."
        copy="Hear from organisations that have worked with Laybrotech to improve workflows, operations, and digital systems."
        items={softwareTestimonials}
      />
      <FAQ
        eyebrow="Software Development FAQ"
        heading="Software Development Questions, Answered."
        copy="Find quick answers about custom systems, timelines, upgrades, mobile applications, support, and getting started."
        items={softwareFaqItems}
      />
      <FinalCTA
        heading="Ready to Build Software Around Your Business?"
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
      <Footer />
    </>
  );
}

