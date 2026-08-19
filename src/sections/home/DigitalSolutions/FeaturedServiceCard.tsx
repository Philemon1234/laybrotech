import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { FeaturedService } from './digitalSolutionsData';

type FeaturedServiceCardProps = {
  service: FeaturedService;
};

export function FeaturedServiceCard({ service }: FeaturedServiceCardProps) {
  const Visual = service.Visual;

  return (
    <article className="group grid min-h-[410px] overflow-hidden rounded-[1.375rem] bg-[linear-gradient(180deg,#fff_0%,#fff_66%,#fbfaf7_100%)] p-5 shadow-[0_16px_38px_rgb(23_23_23/0.075)] transition-[transform,box-shadow] duration-smooth hover:-translate-y-1 hover:shadow-[0_24px_58px_rgb(23_23_23/0.11)] md:p-6 lg:min-h-[390px] xl:grid-cols-[0.84fr_1.16fr] xl:gap-5 xl:p-7">
      <div className="flex flex-col justify-center py-2 xl:min-h-[320px]">
        <p className="text-xs font-bold uppercase leading-5 text-[#f25a05]">{service.label}</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#18181b] md:text-[2.05rem]">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-[#5f5a56]">{service.description}</p>
        <ul className="mt-5 grid gap-2.5" aria-label={`${service.title} benefits`}>
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-3 text-sm font-semibold text-[#18181b]">
              <span className="flex size-6 items-center justify-center rounded-full border border-[#f25a05] bg-transparent text-[#f25a05]">
                <Check className="size-4" aria-hidden="true" />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
        <Link
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]"
          to={service.href}
        >
          {service.cta}
          <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-6 self-center xl:mt-0 xl:transition-transform xl:duration-smooth xl:group-hover:-translate-y-1" aria-hidden="true">
        <Visual />
      </div>
    </article>
  );
}
