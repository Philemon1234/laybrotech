import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/cn';

const processSteps = [
  {
    number: '01',
    title: 'Understanding Your Business',
    description:
      'We begin by learning about your business, your audience, your services, and what the website needs to achieve.',
  },
  {
    number: '02',
    title: 'Structure & Planning',
    description:
      'We map out the pages, content flow, and customer journey before moving into design.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'We design and build the website around your brand, functionality, and mobile usability.',
  },
  {
    number: '04',
    title: 'Review & Revisions',
    description:
      'You review the work and we refine the details to make sure everything feels right before launch.',
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Once approved, the website goes live and is ready for your customers to use.',
  },
];

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

export function WebsiteDesignProcess() {
  const timelineRef = useRef<HTMLOListElement | null>(null);
  const markerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    let frame = 0;

    function updateTimelineProgress() {
      const markers = markerRefs.current.filter(Boolean) as HTMLSpanElement[];

      if (markers.length < 2) {
        return;
      }

      const markerCenters = markers.map((marker) => {
        const rect = marker.getBoundingClientRect();
        return rect.top + window.scrollY + rect.height / 2;
      });
      const firstMarker = markerCenters[0];
      const lastMarker = markerCenters[markerCenters.length - 1];
      const scrollPoint = window.scrollY + window.innerHeight * 0.56;
      const nextProgress = clamp((scrollPoint - firstMarker) / (lastMarker - firstMarker));
      const nextActiveIndex = markerCenters.reduce((current, center, index) => (scrollPoint >= center ? index : current), -1);

      setProgress(nextProgress);
      setActiveIndex(nextActiveIndex);
    }

    function requestUpdate() {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTimelineProgress);
    }

    requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="website-design-process-heading">
      <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-[#f25a05]/6 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#fff4ed] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="type-eyebrow">Our Website Design Process</p>
          <h2 id="website-design-process-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            A Clear Process From Idea to Launch.
          </h2>
          <p className="mx-auto mt-5 max-w-[40rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            We keep the website design process simple and structured, so you always know what comes next.
          </p>
        </div>

        <ol ref={timelineRef} className="relative mx-auto mt-16 grid max-w-[76rem] gap-8 sm:mt-18 lg:mt-20 lg:gap-0">
          <span className="pointer-events-none absolute bottom-10 left-[1.05rem] top-10 w-px bg-[#eadfd6] lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
          <span
            className="pointer-events-none absolute left-[1.05rem] top-10 w-px origin-top bg-[#f25a05] transition-transform duration-75 ease-linear lg:left-1/2 lg:-translate-x-1/2"
            style={{ bottom: '2.5rem', transform: `scaleY(${progress})` }}
            aria-hidden="true"
          />

          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isActive = activeIndex >= index;

            return (
              <li className="group relative grid grid-cols-[2.25rem_1fr] gap-5 lg:grid-cols-[1fr_5rem_1fr] lg:gap-0" key={step.number}>
                <article className={cn(
                  'col-start-2 row-start-1 rounded-[1.35rem] border bg-[#fffdfb] p-6 shadow-[0_8px_24px_rgb(23_23_23/0.035)] transition-[border-color,transform] duration-200 sm:p-7 lg:p-8',
                  isLeft ? 'lg:col-start-1 lg:mr-8' : 'lg:col-start-3 lg:ml-8',
                  isActive ? 'border-[#f25a05]/35' : 'border-[#eadfd6] group-hover:border-[#f25a05]/35',
                )}>
                  <span className={cn(
                    'block text-[2.7rem] font-semibold leading-none transition-colors duration-200 sm:text-[3.25rem]',
                    isActive ? 'text-[#f25a05]' : 'text-[#d8b8a5] group-hover:text-[#f25a05]',
                  )}>
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-[1.45rem] font-semibold leading-tight text-[#18181b] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#111111] sm:text-[1.7rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[34rem] text-base leading-7 text-[#625c56]">
                    {step.description}
                  </p>
                </article>

                <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-8 lg:col-start-2">
                  <span
                    ref={(node) => {
                      markerRefs.current[index] = node;
                    }}
                    className={cn(
                      'flex size-5 items-center justify-center rounded-full border bg-white transition-colors duration-200',
                      isActive ? 'border-[#f25a05] bg-[#f25a05]' : 'border-[#f25a05] bg-white group-hover:bg-white',
                    )}
                  >
                    <span className={cn(
                      'size-2 rounded-full transition-colors duration-200',
                      isActive ? 'bg-[#f25a05]' : 'bg-[#f25a05]',
                    )} />
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}



