import { Check } from 'lucide-react';

import securityReliabilityImage from '@/assets/images/services/Security & Reliability.png';

const benefits = ['Free SSL Certificate', 'Website Backups', 'Security Monitoring', 'Reliable Infrastructure', 'Technical Support'];

export function HostingSecurity() {
  return (
    <section className="bg-[#171717] px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="hosting-security-heading">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.62fr_0.38fr] lg:gap-14 xl:gap-18">
        <div className="order-2 lg:order-1" aria-hidden="true">
          <div className="mx-auto max-w-[42rem] overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-[0_24px_55px_rgb(0_0_0/0.22)] sm:p-4 lg:max-w-[44rem] lg:p-5">
            <img
              className="aspect-[1.12/1] h-full w-full rounded-[1.35rem] object-cover object-center"
              src={securityReliabilityImage}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="type-eyebrow">Security & Reliability</p>
          <h2 id="hosting-security-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">
            Protection Built Into Every Hosting Plan.
          </h2>
          <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#e8dfd6] sm:text-lg sm:leading-8">
            Keep your website protected with SSL security, regular backups, monitoring, and dependable infrastructure designed to reduce downtime and risk.
          </p>
          <ul className="mt-7 grid gap-3" aria-label="Security and reliability benefits">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-3 text-sm font-semibold text-[#fffaf5] sm:text-base" key={benefit}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#22c55e]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


