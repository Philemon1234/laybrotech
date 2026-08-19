import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Service } from './digitalSolutionsData';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Visual = service.Visual;
  const Icon = service.Icon;

  return (
    <article className="group flex min-h-[292px] flex-col rounded-[1.125rem] bg-[linear-gradient(180deg,#fff_0%,#fff_70%,#fbfaf7_100%)] p-4 shadow-[0_8px_24px_rgb(23_23_23/0.045)] transition-[transform,box-shadow] duration-smooth hover:-translate-y-1 hover:shadow-[0_20px_42px_rgb(23_23_23/0.10)] md:p-5 xl:p-5">
      <div className="mb-4 overflow-hidden rounded-[0.95rem]" aria-hidden="true">
        <Visual />
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <h3 className="text-xl font-semibold leading-tight text-[#18181b]">{service.title}</h3>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#5f5a56]">{service.description}</p>
        <Link
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]"
          to={service.href}
        >
          {service.cta}
          <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
