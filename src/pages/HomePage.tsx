import { DigitalSolutions } from '@/sections/home/DigitalSolutions';
import { FAQ } from '@/sections/home/FAQ';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Footer } from '@/components/layout/Footer';
import { BrandLogos } from '@/sections/home/BrandLogos';
import { Hero } from '@/sections/home/Hero';
import { ProjectsShowcase } from '@/sections/home/ProjectsShowcase';
import { Testimonials } from '@/sections/home/Testimonials';

export function HomePage() {
  return (
    <>
      <Hero />
      <BrandLogos />
      <DigitalSolutions />
      <ProjectsShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
