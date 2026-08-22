import { ArrowRight, BriefcaseBusiness, HeartPulse, Plane, Shapes } from 'lucide-react';

import { Footer } from '@/components/layout/Footer';
import { ButtonLink } from '@/components/ui/Button';
import { FinalCTA } from '@/sections/home/FinalCTA';
import { Testimonials } from '@/sections/home/Testimonials';
import { portfolioRowOneProjects, portfolioRowTwoProjects, type Project } from '@/sections/home/ProjectsShowcase/projectData';

const allProjects = [...portfolioRowOneProjects, ...portfolioRowTwoProjects];

const featuredProjects: Array<Project & { description: string; url?: string }> = [
  {
    ...portfolioRowOneProjects[0],
    category: 'Website Design',
    description: 'A professional business website created for a car importing company in Uganda.',
  },
  {
    ...portfolioRowOneProjects[1],
    category: 'Tourism Website',
    description: 'A tourism and safari website designed to present destinations, experiences, and enquiries clearly.',
  },
  {
    ...portfolioRowOneProjects[2],
    category: 'Healthcare Website',
    description: 'A healthcare brand website with a strong visual identity and clean product presentation.',
  },
  {
    ...portfolioRowTwoProjects[0],
    name: 'NARO Holdings Limited',
    category: 'Corporate Website',
    description: 'A clean business website built for a professional organisation.',
  },
];

const businessNeeds = [
  { title: 'Business Websites', copy: 'Professional websites built around credibility, clarity, and customer enquiries.', Icon: BriefcaseBusiness },
  { title: 'Tourism & Travel Platforms', copy: 'Destination and experience-led websites that help visitors explore and enquire.', Icon: Plane },
  { title: 'Healthcare & Product Websites', copy: 'Clean brand and product presentations for healthcare and service organisations.', Icon: HeartPulse },
  { title: 'Software & Digital Platforms', copy: 'Custom digital experiences and platforms shaped around practical business needs.', Icon: Shapes },
];

export function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FeaturedProjects />
      <BusinessNeeds />
      <Testimonials
        eyebrow="Client Feedback"
        heading="What Clients Say About Working With Laybrotech."
        copy="Hear from businesses and organisations that have worked with Laybrotech across websites, software, and digital projects."
      />
      <FinalCTA heading="Have a project in mind?" primaryLabel="Start Your Project" primaryHref="/contact" secondaryLabel="Talk to Sales" secondaryHref="/contact" />
      <Footer />
    </>
  );
}

function ProjectsHero() {
  const [primary, secondary, tertiary] = allProjects;

  return (
    <section className="relative isolate overflow-hidden bg-[#171717]" aria-labelledby="projects-hero-heading">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_28%,rgba(242,90,5,0.18),transparent_32%),linear-gradient(135deg,#171717_0%,#1f1f1f_52%,#111_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.96)_0%,rgba(15,15,15,0.78)_44%,rgba(15,15,15,0.2)_100%)]" aria-hidden="true" />

      <div className="mx-auto grid min-h-[680px] w-full max-w-container items-center gap-12 px-6 py-20 sm:px-8 lg:min-h-[760px] lg:grid-cols-[0.46fr_0.54fr] lg:px-16">
        <div className="max-w-[49rem]">
          <p className="type-eyebrow">All Projects</p>
          <h1 id="projects-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Real Work From the Laybrotech Portfolio.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Explore selected Laybrotech projects across websites, digital platforms, and business solutions built for real organisations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="#featured-projects" rightIcon={<ArrowRight />} size="lg">
              View Projects
            </ButtonLink>
            <ButtonLink className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto" href="/contact" variant="secondary" size="lg">
              Start Your Project
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[24rem] sm:min-h-[31rem] lg:min-h-[34rem]" aria-label="Selected Laybrotech project previews">
          <ProjectMockup className="absolute left-0 top-10 z-20 w-[78%] rotate-[-2deg] shadow-[0_28px_80px_rgb(0_0_0/0.42)]" project={primary} large />
          <ProjectMockup className="absolute right-0 top-0 z-10 w-[52%] rotate-[3deg] opacity-95 shadow-[0_20px_55px_rgb(0_0_0/0.32)]" project={secondary} />
          <ProjectMockup className="absolute bottom-0 right-[9%] z-30 w-[58%] rotate-[1.5deg] shadow-[0_22px_60px_rgb(0_0_0/0.38)]" project={tertiary} />
        </div>
      </div>
    </section>
  );
}

function ProjectMockup({ project, className, large = false }: { project: Project; className: string; large?: boolean }) {
  return (
    <div className={className + ' overflow-hidden rounded-[1.25rem] border border-white/12 bg-[#202020]'}>
      <div className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#242424] px-4">
        <span className="size-2.5 rounded-full bg-[#f25a05]" />
        <span className="size-2.5 rounded-full bg-white/28" />
        <span className="size-2.5 rounded-full bg-white/18" />
      </div>
      <img className={(large ? 'h-[17rem] sm:h-[22rem] lg:h-[25rem]' : 'h-[12rem] sm:h-[15rem] lg:h-[17rem]') + ' w-full object-cover object-top'} src={project.image} alt={project.imageAlt} loading={large ? 'eager' : 'lazy'} decoding="async" />
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section id="featured-projects" className="overflow-hidden bg-[#171717] py-24 sm:py-28 lg:py-32" aria-labelledby="featured-projects-heading">
      <style>{`
        @keyframes project-card-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        .project-card-marquee {
          overflow: hidden;
          width: 100vw;
        }

        .project-card-marquee__track {
          animation: project-card-marquee 48s linear infinite;
          will-change: transform;
        }

        .project-card-marquee:hover .project-card-marquee__track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-card-marquee {
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .project-card-marquee__track {
            animation: none;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-container px-5 sm:px-6">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="type-eyebrow">Selected Projects</p>
          <h2 id="featured-projects-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">
            Real Work From the Laybrotech Portfolio.
          </h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">
            A closer look at selected websites and digital experiences delivered for real organisations.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 mt-16 w-screen -translate-x-1/2 sm:mt-[4.5rem] lg:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#171717] to-transparent sm:w-16" aria-hidden="true" />
        <div className="project-card-marquee">
          <div className="project-card-marquee__track flex w-max">
            <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6">{featuredProjects.map((project) => <FeaturedProjectCard key={project.name} project={project} />)}</div>
            <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden="true">{featuredProjects.map((project) => <FeaturedProjectCard key={project.name + '-duplicate'} project={project} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project }: { project: (typeof featuredProjects)[number] }) {
  return (
    <article className="group w-[20rem] shrink-0 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#202020] shadow-[0_20px_60px_rgb(0_0_0/0.24)] sm:w-[27rem] lg:w-[34rem]">
      <div className="overflow-hidden bg-[#111]"><img className="h-[14rem] w-full object-cover object-top transition duration-500 group-hover:scale-[1.018] group-hover:brightness-105 sm:h-[18rem] lg:h-[21rem]" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" /></div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-normal text-[#ff7a2b]">{project.category}</p>
        <h3 className="mt-3 text-[1.45rem] font-semibold leading-tight text-[#fffaf5] sm:text-[1.7rem]">{project.name}</h3>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-[#d8d0c8] sm:text-base sm:leading-7">{project.description}</p>
        {project.url ? (
          <a className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a2b] transition-colors duration-smooth hover:text-[#ffb07a]" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.name + ' project'}>
            View Project<ArrowRight className="size-4 transition-transform duration-smooth group-hover/link:translate-x-1" aria-hidden="true" />
          </a>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#ff7a2b]">
            View Project<ArrowRight className="size-4" aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}

function BusinessNeeds() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-28" aria-labelledby="business-needs-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
          <div>
            <p className="type-eyebrow">Project Coverage</p>
            <h2 id="business-needs-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3rem]">
              Built for Different Business Needs
            </h2>
            <p className="mt-5 max-w-[38rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
              Laybrotech delivers digital projects for different business goals, from service websites to industry-focused platforms and custom digital experiences.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {businessNeeds.map(({ title, copy, Icon }) => (
              <div className="border-t border-[#e5e1dc] pt-6" key={title}>
                <span className="flex size-10 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="mt-4 text-lg font-semibold leading-tight text-[#18181b]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5f5a56]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

