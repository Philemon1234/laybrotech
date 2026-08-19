import { Award, BadgeCheck, Star, TrendingUp } from 'lucide-react';

import { trustItems } from './heroData';

const icons = [BadgeCheck, Award, TrendingUp, Star, BadgeCheck];

export function TrustStrip() {
  return (
    <div className="relative z-30 mx-auto -mt-12 w-full max-w-container px-6 sm:-mt-14 sm:px-8 md:px-10 lg:px-16 xl:px-16">
      <div className="rounded-[1.125rem] border border-[#e5e1dc] bg-[#fff] p-4 shadow-[0_20px_50px_rgb(23_23_23/0.16)] sm:p-0">
        <div className="grid grid-cols-2 gap-3 bg-[#fff] sm:flex sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-0 lg:flex-nowrap">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            const isLast = index === trustItems.length - 1;

            return (
              <div
                key={item.label}
                className={cnMobileTrustItem(isLast)}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-control bg-[#fbfaf7] text-[#f25a05] sm:size-11">
                  <Icon className="size-4 sm:size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[1.35rem] font-bold leading-none text-[#18181b] sm:text-2xl md:text-[1.65rem]">
                    {item.value}
                  </span>
                  <span className="mt-1.5 block text-[0.82rem] font-medium leading-5 text-[#5f5a56] sm:mt-2 sm:text-sm">
                    {item.label}
                  </span>
                </span>
                {index < trustItems.length - 1 ? (
                  <span className="ml-auto hidden h-12 w-px bg-[#e5e1dc] lg:block" aria-hidden="true" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function cnMobileTrustItem(isLast: boolean) {
  const spanClass = isLast ? 'col-span-2 sm:col-span-1' : '';

  return [
    'flex items-center gap-3 rounded-button bg-[#fff] px-3 py-3 sm:min-w-[14rem] sm:flex-1 sm:rounded-none sm:px-5 sm:py-5 lg:min-w-0 lg:px-6 lg:py-6',
    spanClass,
  ]
    .filter(Boolean)
    .join(' ');
}

