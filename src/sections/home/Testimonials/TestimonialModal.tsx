import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

import { RatingStars, TestimonialAvatar } from './TestimonialCard';
import type { Testimonial } from './testimonialData';

type TestimonialModalProps = {
  testimonial: Testimonial | null;
  onClose: () => void;
};

export function TestimonialModal({ testimonial, onClose }: TestimonialModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElementRef = useRef<Element | null>(null);

  useEffect(() => {
    if (!testimonial) {
      return;
    }

    previousActiveElementRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !modalRef.current) {
        return;
      }

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      if (previousActiveElementRef.current instanceof HTMLElement) {
        previousActiveElementRef.current.focus();
      }
    };
  }, [onClose, testimonial]);

  if (!testimonial) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8" role="presentation">
      <button
        className="absolute inset-0 cursor-default bg-[#171717]/86 backdrop-blur-xl"
        type="button"
        aria-label="Close testimonial modal"
        onClick={onClose}
      />
      <div
        ref={modalRef}
        className="relative max-h-[calc(100vh-4rem)] w-full max-w-[44rem] overflow-y-auto rounded-[1.5rem] bg-white p-6 shadow-[0_28px_80px_rgb(23_23_23/0.28)] sm:p-8 lg:p-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="testimonial-modal-title"
      >
        <button
          ref={closeButtonRef}
          className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-[#f4f4f5] text-[#5f5a56] transition-colors duration-smooth hover:bg-[#ececea] hover:text-[#18181b]"
          type="button"
          onClick={onClose}
          aria-label="Close testimonial"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="flex items-start gap-4 pr-12">
          <TestimonialAvatar testimonial={testimonial} className="size-16 ring-[#fff4ed]" />
          <div>
            <h3 id="testimonial-modal-title" className="text-2xl font-semibold leading-tight text-[#18181b]">
              {testimonial.title}
            </h3>
            <p className="mt-2 text-sm font-semibold leading-5 text-[#7a756f]">
              {testimonial.name} · {testimonial.meta}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <RatingStars rating={testimonial.rating} />
        </div>
        <p className="mt-7 text-base leading-8 text-[#3f3f46] sm:text-lg sm:leading-9">{testimonial.fullReview}</p>
      </div>
    </div>
  );
}
