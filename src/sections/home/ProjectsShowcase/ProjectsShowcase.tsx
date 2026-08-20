import { PortfolioMarquee } from './PortfolioMarquee';
import { portfolioRowOneProjects, portfolioRowTwoProjects } from './projectData';

export function ProjectsShowcase() {
  return (
    <section className="overflow-hidden bg-[#171717] py-24 sm:py-28 lg:py-32" aria-labelledby="projects-showcase-heading">
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
          <p className="type-eyebrow">Projects We've Completed</p>
          <h2 id="projects-showcase-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">
            Real Projects. Real Businesses. Real Results.
          </h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">
            Explore some of the websites and digital experiences Laybrotech has delivered for businesses and organisations.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 sm:mt-[4.5rem] lg:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent sm:w-16" />
        <PortfolioMarquee projects={portfolioRowOneProjects} direction="left" duration="54s" />
        <div className="mt-5 sm:mt-6">
          <PortfolioMarquee projects={portfolioRowTwoProjects} direction="right" duration="60s" offset />
        </div>
      </div>
    </section>
  );
}
