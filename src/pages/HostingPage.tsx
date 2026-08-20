import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/sections/home/FAQ';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Testimonials } from '@/sections/home/Testimonials';
import { HostingHero } from '@/sections/hosting/HostingHero';
import { HostingIncluded } from '@/sections/hosting/HostingIncluded';
import { HostingMigration } from '@/sections/hosting/HostingMigration';
import { hostingFaqItems, hostingTestimonials } from '@/sections/hosting/hostingPageContent';
import { HostingPerformance } from '@/sections/hosting/HostingPerformance';
import { HostingPricing } from '@/sections/hosting/HostingPricing';
import { HostingSecurity } from '@/sections/hosting/HostingSecurity';
import { HostingTrustBar } from '@/sections/hosting/HostingTrustBar';
import { HostingUseCases } from '@/sections/hosting/HostingUseCases';

export function HostingPage() {
  return (
    <>
      <HostingHero />
      <HostingTrustBar />
      <HostingPricing />
      <HostingPerformance />
      <HostingSecurity />
      <HostingIncluded />
      <HostingMigration />
      <HostingUseCases />
      <Testimonials
        eyebrow="Hosting Testimonials"
        heading="Trusted Hosting. Real Support."
        copy="Hear from businesses and organisations that rely on Laybrotech for dependable hosting, website performance, and technical support."
        items={hostingTestimonials}
      />
      <FAQ
        eyebrow="Hosting FAQ"
        heading="Web Hosting Questions, Answered."
        copy="Find quick answers about Laybrotech hosting plans, security, migration, email, backups, and support."
        items={hostingFaqItems}
      />
      <FinalCTA
        heading="Ready to Give Your Website Better Hosting?"
        primaryLabel="Choose a Hosting Plan"
        primaryHref="#hosting-plans"
        secondaryLabel="Talk to Sales"
        secondaryHref="/contact"
      />
      <Footer />
    </>
  );
}
