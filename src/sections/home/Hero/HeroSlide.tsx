import { ArrowRight } from 'lucide-react';

import { ButtonLink } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import type { HeroSlide as HeroSlideData } from './heroData';

type HeroSlideProps = {
  slide: HeroSlideData;
  isActive: boolean;
  isFirst: boolean;
};

export function HeroSlide({ slide, isActive, isFirst }: HeroSlideProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-out',
        isActive ? 'z-10 opacity-100' : 'z-0 opacity-0',
      )}
      aria-hidden={!isActive}
    >
      <img
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out',
          isActive ? 'scale-100' : 'scale-[1.015]',
        )}
        src={slide.image}
        alt=""
        loading={isFirst ? 'eager' : 'lazy'}
        fetchPriority={isFirst ? 'high' : 'auto'}
        style={{ objectPosition: slide.imagePosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,8,0.98)_0%,rgba(8,8,8,0.90)_46%,rgba(8,8,8,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,8,8,0.82)_0%,rgba(8,8,8,0.28)_52%,rgba(8,8,8,0.64)_100%)]" />

      <div className="relative z-10 flex min-h-full items-center">
        <div className="mx-auto w-full max-w-container px-6 py-24 sm:px-8 md:px-10 lg:px-16 xl:px-16">
          <div
            className={cn(
              'max-w-[60rem] transition-[opacity,transform] duration-[720ms] ease-out',
              isActive ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0',
            )}
          >
            <p className="text-[0.78rem] font-bold uppercase leading-5 tracking-normal text-[#f25a05] sm:text-sm md:text-[0.95rem]">
              {slide.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[60rem] text-[2rem] font-bold leading-[1.1] tracking-normal text-[#fff] min-[390px]:text-[2.25rem] sm:mt-5 sm:text-[3.25rem] lg:text-[3.65rem] xl:text-[4rem]">
              {slide.headline}
            </h1>
            <p className="mt-5 max-w-[46rem] text-[0.98rem] leading-7 text-[#f1e8df] sm:mt-6 sm:text-lg sm:leading-8">
              {slide.body}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href={slide.primaryCta.href} rightIcon={<ArrowRight />} size="lg">
                {slide.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto"
                href={slide.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {slide.secondaryCta.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


