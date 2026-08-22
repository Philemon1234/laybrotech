import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/cn';

import type { FeaturedService } from './digitalSolutionsData';

type FeaturedServiceShowcaseProps = {
  service: FeaturedService;
};

export function FeaturedServiceShowcase({ service }: FeaturedServiceShowcaseProps) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-[1.75rem] transition-transform duration-smooth',
        service.tone === 'warm'
          ? 'bg-[#fbf5ef] px-5 py-12 sm:px-8 sm:py-14 lg:px-14 lg:py-16'
          : 'bg-white py-6 lg:py-8',
      )}
    >
      <div
        className={cn(
          'grid items-center gap-9 lg:grid-cols-[0.45fr_0.55fr] lg:gap-14 xl:gap-20',
          service.reverse && 'lg:grid-cols-[0.55fr_0.45fr]',
        )}
      >
        <div className={cn('order-1', service.reverse && 'lg:order-2')}>
          <p className="text-xs font-semibold uppercase leading-5 text-[#8a6a55]">{service.eyebrow}</p>
          <h3 className="mt-4 text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.45rem] lg:text-[3rem]">
            {service.title}
          </h3>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            {service.description}
          </p>
          <ul className="mt-7 grid gap-3" aria-label={`${service.title} benefits`}>
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 text-sm font-semibold text-[#18181b] sm:text-base">
                <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]"
            to={service.href}
          >
            {service.cta}
            <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className={cn('order-2', service.reverse && 'lg:order-1')}>
          <div className="overflow-hidden rounded-[1.35rem] border border-[#e5e1dc]/80 bg-white">
            <img
              className="aspect-[4/3] w-full object-cover object-center"
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}


