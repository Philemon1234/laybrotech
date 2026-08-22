import { ArrowRight } from 'lucide-react';

import heroImage from '@/assets/images/Portfolio/Invision-Auto-Parlour-Limited.jpg';
import { Footer } from '@/components/layout/Footer';
import { ButtonLink } from '@/components/ui/Button';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { PortfolioMarquee } from '@/sections/home/ProjectsShowcase/PortfolioMarquee';
import { portfolioRowOneProjects, portfolioRowTwoProjects } from '@/sections/home/ProjectsShowcase/projectData';
import { Testimonials } from '@/sections/home/Testimonials';

export function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <AllProjectsMarquee />
      <Testimonials
        eyebrow="Client Feedback"
        heading="What Clients Say About Working With Laybrotech."
        copy="Hear from businesses and organisations that have worked with Laybrotech across websites, software, and digital projects."
      />
      <FinalCTA heading="Have a Project in Mind?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function ProjectsHero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#171717] lg:min-h-[720px]" aria-labelledby="projects-hero-heading">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center]"
        src={heroImage}
        alt="Invision Auto Parlour Limited website project screenshot."
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.96)_0%,rgba(15,15,15,0.76)_44%,rgba(15,15,15,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(15,15,15,0.58)_0%,rgba(15,15,15,0)_52%)]" />

      <div className="mx-auto flex min-h-[650px] w-full max-w-container items-center px-6 pb-28 pt-16 sm:px-8 lg:min-h-[720px] lg:px-16">
        <div className="max-w-[49rem]">
          <p className="type-eyebrow">Our Work</p>
          <h1 id="projects-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Real Projects. Real Businesses. Real Results.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Explore websites, software, digital platforms, and online solutions Laybrotech has delivered for businesses and organisations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="#all-projects" rightIcon={<ArrowRight />} size="lg">
              View Our Projects
            </ButtonLink>
            <ButtonLink
              className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto"
              href="/contact"
              variant="secondary"
              size="lg"
            >
              Start Your Project
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function AllProjectsMarquee() {
  return (
    <section id="all-projects" className="overflow-hidden bg-[#171717] py-24 sm:py-28 lg:py-32" aria-labelledby="all-projects-heading">
      <style>{`
        @keyframes portfolio-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes portfolio-marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .portfolio-marquee {
          overflow: hidden;
          width: 100vw;
        }

        .portfolio-marquee__track {
          animation: portfolio-marquee-left var(--marquee-duration) linear infinite;
          will-change: transform;
        }

        .portfolio-marquee__track--reverse {
          animation-name: portfolio-marquee-right;
        }

        .portfolio-marquee__track--offset {
          margin-left: -180px;
        }

        .portfolio-marquee:hover .portfolio-marquee__track {
          animation-play-state: paused;
        }

        @media (min-width: 640px) {
          .portfolio-marquee__track--offset {
            margin-left: -220px;
          }
        }

        @media (min-width: 1024px) {
          .portfolio-marquee__track--offset {
            margin-left: -280px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .portfolio-marquee {
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .portfolio-marquee__track,
          .portfolio-marquee__track--reverse {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-container px-5 sm:px-6">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="type-eyebrow">All Projects</p>
          <h2 id="all-projects-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">
            Real Work From the Laybrotech Portfolio.
          </h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">
            Explore websites, digital platforms, software systems, and online projects delivered for businesses and organisations.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 sm:mt-[4.5rem] lg:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <PortfolioMarquee projects={portfolioRowOneProjects} direction="left" duration="44s" />
        <div className="mt-5 sm:mt-6">
          <PortfolioMarquee projects={portfolioRowTwoProjects} direction="right" duration="50s" offset />
        </div>
      </div>
    </section>
  );
}
