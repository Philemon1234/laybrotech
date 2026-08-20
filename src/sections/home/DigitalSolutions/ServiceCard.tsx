import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Service } from './digitalSolutionsData';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.Icon;

  return (
    <article className="group flex h-full min-h-[260px] flex-col rounded-[1.125rem] bg-[#f4f4f5] p-6 transition-transform duration-smooth hover:-translate-y-1 sm:p-7">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-control bg-[#f25a05] text-white">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-xl font-semibold leading-tight text-[#18181b]">{service.title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-[#3f3f46]">{service.description}</p>
      <Link
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]"
        to={service.href}
      >
        {service.cta}
        <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
