import type { CSSProperties } from 'react';

import { cn } from '@/lib/cn';

import { PortfolioItem } from './PortfolioItem';
import type { Project } from './projectData';

type PortfolioMarqueeProps = {
  projects: Project[];
  direction: 'left' | 'right';
  duration: string;
  offset?: boolean;
};

export function PortfolioMarquee({ projects, direction, duration, offset = false }: PortfolioMarqueeProps) {
  const sequence = projects.map((project) => <PortfolioItem key={project.name} project={project} />);

  return (
    <div className="portfolio-marquee" style={{ '--marquee-duration': duration } as CSSProperties}>
      <div
        className={cn(
          'portfolio-marquee__track flex w-max',
          direction === 'right' && 'portfolio-marquee__track--reverse',
          offset && 'portfolio-marquee__track--offset',
        )}
      >
        <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6">{sequence}</div>
        <div className="flex gap-5 pr-5 sm:gap-6 sm:pr-6" aria-hidden="true">
          {projects.map((project) => (
            <PortfolioItem key={`${project.name}-duplicate`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
