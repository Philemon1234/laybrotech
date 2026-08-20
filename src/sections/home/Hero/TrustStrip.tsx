import { BadgeCheck, Star, TrendingUp } from 'lucide-react';

import googlePartnerImage from '@/assets/images/Google-Partner-Laybrotech.png';
import metaPartnerImage from '@/assets/images/Meta-Business-Partner-Laybrotech.png';

import { trustItems } from './heroData';

const icons = [TrendingUp, Star, BadgeCheck];
const partnerBadges = [
  { image: metaPartnerImage, alt: 'Meta Business Partner Laybrotech badge' },
  { image: googlePartnerImage, alt: 'Google Partner Laybrotech badge' },
];

export function TrustStrip() {
  return (
    <div className="relative z-30 mx-auto -mt-12 w-full max-w-container px-6 sm:-mt-14 sm:px-8 md:px-10 lg:px-16 xl:px-16">
      <div className="overflow-hidden rounded-[1.35rem] border border-[#e5e1dc] bg-[#fff] p-4 shadow-[0_20px_50px_rgb(23_23_23/0.16)] sm:p-0">
        <div className="grid grid-cols-2 gap-3 bg-[#fff] sm:flex sm:flex-wrap sm:items-stretch sm:justify-between sm:gap-0 lg:flex-nowrap">
          <PartnerBadges />

          {trustItems.map((item, index) => {
            const Icon = icons[index];
            const isLast = index === trustItems.length - 1;

            return (
              <div key={item.label} className={cnMobileTrustItem(isLast)}>
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
                {index < trustItems.length - 1 ? <span className="ml-auto hidden h-12 w-px bg-[#e5e1dc] lg:block" aria-hidden="true" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PartnerBadges() {
  return (
    <div className="col-span-2 flex items-center justify-center gap-5 rounded-button bg-[#fff] px-3 py-3 sm:min-w-[17rem] sm:flex-[1.2] sm:rounded-none sm:px-5 sm:py-5 lg:min-w-0 lg:gap-6 lg:px-6 lg:py-6">
      {partnerBadges.map((badge) => (
        <img
          key={badge.alt}
          className="h-auto max-h-10 w-auto max-w-[7.5rem] object-contain sm:max-h-11 sm:max-w-[8.5rem] lg:max-h-12 lg:max-w-[9.5rem]"
          src={badge.image}
          alt={badge.alt}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

function cnMobileTrustItem(isLast: boolean) {
  const spanClass = isLast ? 'col-span-2 sm:col-span-1' : '';

  return [
    'flex flex-col items-start gap-3 rounded-button bg-[#fff] px-3 py-3 sm:min-w-[13rem] sm:flex-1 sm:flex-row sm:items-center sm:rounded-none sm:px-5 sm:py-5 lg:min-w-0 lg:px-6 lg:py-6',
    spanClass,
  ]
    .filter(Boolean)
    .join(' ');
}
