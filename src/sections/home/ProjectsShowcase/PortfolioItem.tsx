import type { Project } from './projectData';

type PortfolioItemProps = {
  project: Project;
};

export function PortfolioItem({ project }: PortfolioItemProps) {
  return (
    <article className="portfolio-item group relative w-[320px] shrink-0 overflow-hidden rounded-[1rem] border border-white/10 bg-[#202020] sm:w-[460px] lg:w-[610px] xl:w-[680px]">
      <img
        className="h-[210px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.012] group-hover:brightness-105 sm:h-[300px] lg:h-[360px] xl:h-[390px]"
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
      />
    </article>
  );
}
