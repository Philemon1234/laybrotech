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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,15,15,0.94)_0%,rgba(15,15,15,0.76)_42%,rgba(15,15,15,0.22)_100%)] sm:bg-[linear-gradient(90deg,rgba(15,15,15,0.92)_0%,rgba(15,15,15,0.72)_34%,rgba(15,15,15,0.56)_52%,rgba(15,15,15,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,15,15,0.60)_0%,rgba(15,15,15,0)_44%)]" />

      <div className="relative z-10 flex min-h-full items-center">
        <div className="mx-auto w-full max-w-container px-6 pb-48 pt-16 sm:px-8 sm:pb-40 md:px-10 md:pb-44 lg:px-16 xl:px-16">
          <div
            className={cn(
              'max-w-[42.5rem] transition-[opacity,transform] duration-[720ms] ease-out',
              isActive ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0',
            )}
          >
            <p className="text-[0.78rem] font-bold uppercase leading-5 tracking-normal text-[#f25a05] sm:text-sm md:text-[0.95rem]">
              {slide.eyebrow}
            </p>
            <h1 className="mt-4 max-w-[42rem] text-[2rem] font-bold leading-[1.1] tracking-normal text-[#fff] min-[390px]:text-[2.25rem] sm:mt-5 sm:text-[3.25rem] lg:text-[4rem]">
              {slide.headline}
            </h1>
            <p className="mt-5 max-w-[40rem] text-[0.98rem] leading-7 text-[#f1e8df] sm:mt-6 sm:text-lg sm:leading-8">
              {slide.body}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href={slide.primaryCta.href} rightIcon={<ArrowRight />} size="lg">
                {slide.primaryCta.label}
              </ButtonLink>
              <ButtonLink
                className="h-12 w-full border-white/85 bg-transparent text-[#fff] hover:border-white hover:bg-white hover:text-[#18181b] sm:h-14 sm:w-auto"
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
