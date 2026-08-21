import { ArrowRight, Cloud, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const supportOptions = [
  {
    label: 'Website Hosting',
    heading: 'Reliable Hosting for Your New Website.',
    copy: 'Host your website with Laybrotech and keep your essential web services in one trusted place.',
    points: ['Fast & secure hosting', 'Reliable uptime', 'Professional email setup'],
    linkLabel: 'Explore Hosting',
    href: '/hosting',
    Icon: Cloud,
  },
  {
    label: 'Website Management',
    heading: 'Ongoing Support After Your Website Goes Live.',
    copy: 'Get help with common website updates, maintenance, monitoring, and technical support after launch.',
    points: ['Updates & maintenance', 'Security monitoring', 'Content changes'],
    linkLabel: 'Talk to Support',
    href: '/contact',
    Icon: Settings,
  },
];

export function WebsitePostLaunchSupport() {
  return (
    <section className="relative overflow-hidden bg-[#fff8f3] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="website-post-launch-heading">
      <div className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-[#f25a05]/8 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[41rem] text-center">
          <p className="type-eyebrow">After Launch</p>
          <h2 id="website-post-launch-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            We Don&apos;t Just Build It and Leave You With It.
          </h2>
          <p className="mx-auto mt-5 max-w-[40rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Keep your website online, updated, secure, and supported with optional Laybrotech hosting and website management.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[76rem] overflow-hidden rounded-[1.75rem] border border-[#eadfd6] bg-white shadow-[0_10px_30px_rgb(23_23_23/0.04)] sm:mt-16">
          <div className="grid lg:grid-cols-2">
            {supportOptions.map(({ label, heading, copy, points, linkLabel, href, Icon }, index) => (
              <article className="relative p-7 sm:p-9 lg:p-11" key={label}>
                {index === 1 && <span className="absolute left-0 top-10 hidden h-[calc(100%-5rem)] w-px bg-[#eadfd6] lg:block" aria-hidden="true" />}
                {index === 1 && <span className="absolute left-7 right-7 top-0 h-px bg-[#eadfd6] lg:hidden" aria-hidden="true" />}

                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-[0.85rem] bg-[#fff1e8] text-[#f25a05]" aria-hidden="true">
                    <Icon className="size-5" />
                  </span>
                  <p className="type-eyebrow">{label}</p>
                </div>

                <h3 className="mt-6 max-w-[28rem] text-[1.75rem] font-semibold leading-tight text-[#18181b] sm:text-[2rem]">
                  {heading}
                </h3>
                <p className="mt-4 max-w-[30rem] text-base leading-7 text-[#5f5a56]">
                  {copy}
                </p>

                <ul className="mt-7 grid gap-3" aria-label={`${label} includes`}>
                  {points.map((point) => (
                    <li className="flex items-center gap-3 text-sm font-semibold text-[#18181b]" key={point}>
                      <span className="size-1.5 rounded-full bg-[#f25a05]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]" to={href}>
                  {linkLabel}
                  <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>

          <div className="border-t border-[#eadfd6] px-7 py-5 text-center text-sm font-semibold text-[#7a7068] sm:px-9">
            This means you don&apos;t have to worry about the technical side.
          </div>
        </div>
      </div>
    </section>
  );
}
