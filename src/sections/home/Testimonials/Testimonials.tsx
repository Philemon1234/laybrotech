import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { TestimonialCard } from './TestimonialCard';
import { TestimonialModal } from './TestimonialModal';
import { testimonials, type Testimonial } from './testimonialData';

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState<Testimonial | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number, behavior: ScrollBehavior = 'smooth') => {
    const slider = sliderRef.current;
    const card = slider?.children[index] as HTMLElement | undefined;

    if (!slider || !card) {
      return;
    }

    slider.scrollTo({
      left: card.offsetLeft,
      behavior,
    });
  };

  const scrollTestimonials = (direction: 'previous' | 'next') => {
    const isNext = direction === 'next';
    const isWrappingForward = isNext && activeIndex === testimonials.length - 1;
    const isWrappingBackward = !isNext && activeIndex === 0;
    const nextIndex = isWrappingForward
      ? 0
      : isWrappingBackward
        ? testimonials.length - 1
        : activeIndex + (isNext ? 1 : -1);

    setActiveIndex(nextIndex);
    scrollToTestimonial(nextIndex, isWrappingForward || isWrappingBackward ? 'auto' : 'smooth');
  };

  return (
    <section className="bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="testimonials-heading">
      <style>{`
        .testimonial-slider {
          scrollbar-width: none;
        }

        .testimonial-slider::-webkit-scrollbar {
          display: none;
        }

        .testimonial-excerpt {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="type-eyebrow">Client Testimonials</p>
          <h2 id="testimonials-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Hear from businesses and organisations that have trusted Laybrotech to build their websites, digital tools, and online presence.
          </p>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <button
            className="absolute left-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#9ca3af] transition-colors duration-smooth hover:border-[#e5e1dc] hover:text-[#6b7280] sm:flex lg:left-0 lg:-translate-x-1/2"
            type="button"
            onClick={() => scrollTestimonials('previous')}
            aria-label="Previous testimonials"
          >
            <ArrowLeft className="size-6" aria-hidden="true" />
          </button>
          <button
            className="absolute right-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#9ca3af] transition-colors duration-smooth hover:border-[#e5e1dc] hover:text-[#6b7280] sm:flex lg:right-0 lg:translate-x-1/2"
            type="button"
            onClick={() => scrollTestimonials('next')}
            aria-label="Next testimonials"
          >
            <ArrowRight className="size-6" aria-hidden="true" />
          </button>

          <div
            ref={sliderRef}
            className="testimonial-slider flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pt-10"
            aria-label="Client testimonial previews"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} onOpen={setActiveTestimonial} />
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-3 sm:hidden">
            <button
              className="flex size-11 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#9ca3af] transition-colors duration-smooth hover:text-[#6b7280]"
              type="button"
              onClick={() => scrollTestimonials('previous')}
              aria-label="Previous testimonials"
            >
              <ArrowLeft className="size-6" aria-hidden="true" />
            </button>
            <button
              className="flex size-11 items-center justify-center rounded-full border border-[#e5e1dc] bg-white text-[#9ca3af] transition-colors duration-smooth hover:text-[#6b7280]"
              type="button"
              onClick={() => scrollTestimonials('next')}
              aria-label="Next testimonials"
            >
              <ArrowRight className="size-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <TestimonialModal testimonial={activeTestimonial} onClose={() => setActiveTestimonial(null)} />
    </section>
  );
}
