import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/cn';

type HeroControlsProps = {
  activeIndex: number;
  slideCount: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

export function HeroControls({
  activeIndex,
  slideCount,
  onPrevious,
  onNext,
  onSelect,
}: HeroControlsProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-24 z-20 sm:bottom-28 md:bottom-32 lg:bottom-36">
      <div className="mx-auto flex w-full max-w-container items-end justify-between gap-5 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-16">
        <div
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-black/22 p-2 backdrop-blur-sm"
          aria-label="Hero slide indicators"
        >
          {Array.from({ length: slideCount }).map((_, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                className="group flex h-7 min-w-7 items-center justify-center rounded-full focus-visible:outline-white/80"
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={isActive}
                onClick={() => onSelect(index)}
              >
                <span
                  className={cn(
                    'block h-2.5 rounded-full transition-all duration-smooth',
                    isActive
                      ? 'w-8 bg-[#f25a05]'
                      : 'w-3.5 bg-white/78 ring-1 ring-white/55 group-hover:w-5 group-hover:bg-white',
                  )}
                />
              </button>
            );
          })}
        </div>

        <div className="pointer-events-auto hidden items-center gap-2 sm:flex">
          <button
            className="flex size-11 items-center justify-center rounded-button border border-white/30 bg-black/24 text-[#fff] backdrop-blur-md transition-colors duration-smooth hover:bg-white hover:text-[#18181b]"
            type="button"
            aria-label="Previous hero slide"
            onClick={onPrevious}
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            className="flex size-11 items-center justify-center rounded-button border border-white/30 bg-black/24 text-[#fff] backdrop-blur-md transition-colors duration-smooth hover:bg-white hover:text-[#18181b]"
            type="button"
            aria-label="Next hero slide"
            onClick={onNext}
          >
            <ArrowRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
