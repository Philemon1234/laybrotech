import { Check } from 'lucide-react';

import performanceGraphic from '@/assets/Performance.png';

const benefits = ['Fast SSD-powered hosting', 'Reliable uptime', 'Optimised performance', 'Website monitoring', 'Scalable resources'];

export function HostingPerformance() {
  return (
    <section className="bg-[#fbf5ef] px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="hosting-performance-heading">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 xl:gap-20">
        <div>
          <p className="type-eyebrow">Performance</p>
          <h2 id="hosting-performance-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Built for Speed, Stability & Growth.
          </h2>
          <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Laybrotech hosting is designed to keep business websites fast, responsive, and available as traffic grows.
          </p>
          <ul className="mt-7 grid gap-3" aria-label="Performance benefits">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-3 text-sm font-semibold text-[#18181b] sm:text-base" key={benefit}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_22px_55px_rgb(23_23_23/0.10)] sm:p-7 lg:p-8" aria-hidden="true">
          <img className="aspect-[4/3] h-full w-full rounded-[1.25rem] object-cover object-center" src={performanceGraphic} alt="" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>
  );
}

