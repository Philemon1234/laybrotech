import type { CSSProperties } from 'react';

import { cn } from '@/lib/cn';

import type { BrandLogo } from './brandLogoData';

type BrandLogoMarqueeProps = {
  logos: BrandLogo[];
  direction: 'left' | 'right';
  duration: string;
  offset?: boolean;
};

const logoSlotClass = 'flex h-14 w-36 shrink-0 items-center justify-center sm:h-16 sm:w-44 lg:h-20 lg:w-56';
const logoImageClass = 'max-h-12 w-full max-w-full object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 sm:max-h-14 lg:max-h-20';
const sequenceClass = 'flex items-center gap-5 pr-5 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10';

export function BrandLogoMarquee({ logos, direction, duration, offset = false }: BrandLogoMarqueeProps) {
  const logoSequence = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="brand-logo-marquee" aria-label="Laybrotech client and brand logos" style={{ '--brand-logo-duration': duration } as CSSProperties}>
      <div
        className={cn(
          'brand-logo-marquee__track flex w-max',
          direction === 'right' && 'brand-logo-marquee__track--reverse',
          offset && 'brand-logo-marquee__track--offset',
        )}
      >
        <div className={sequenceClass}>
          {logoSequence.map((logo, index) => (
            <span className={logoSlotClass} key={`${logo.id}-${index}`}>
              <img
                className={logoImageClass}
                src={logo.image}
                alt={index < logos.length ? logo.alt : ''}
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
        <div className={sequenceClass} aria-hidden="true">
          {logoSequence.map((logo, index) => (
            <span className={logoSlotClass} key={`${logo.id}-duplicate-${index}`}>
              <img
                className={logoImageClass}
                src={logo.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
