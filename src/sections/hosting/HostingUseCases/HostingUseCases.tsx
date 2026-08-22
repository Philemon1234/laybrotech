import { type KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';
import { ArrowRight, BriefcaseBusiness, Building2, Check, GraduationCap, ShoppingBag, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

import digitalMarketingImage from '@/assets/Digital Marketing.png';
import softwareDevelopmentImage from '@/assets/Software Development.png';
import webDesignImage from '@/assets/Web design.png';
import webHostingImage from '@/assets/Web hosting.png';
import securityReliabilityImage from '@/assets/images/services/Security & Reliability.png';
import { cn } from '@/lib/cn';

const audiences = [
  {
    id: 'small-businesses',
    navTitle: 'Small Businesses',
    shortTitle: 'Small Business',
    label: 'Small Businesses',
    heading: 'Reliable Hosting for Your Business Website.',
    copy: 'A dependable foundation for company websites, portfolios, landing pages, and service businesses that need to stay professional and available online.',
    benefits: ['Free SSL Certificate', 'Business Email', 'Website Backups'],
    cta: 'Explore Hosting Plans',
    href: '/contact',
    Icon: Building2,
    image: webDesignImage,
  },
  {
    id: 'online-stores',
    navTitle: 'Online Stores',
    shortTitle: 'Online Stores',
    label: 'Online Stores',
    heading: 'Performance That Keeps Your Store Moving.',
    copy: 'Hosting designed for growing e-commerce websites that need dependable performance, security, and resources as traffic and orders increase.',
    benefits: ['Reliable Performance', 'SSL Security', 'Scalable Resources'],
    cta: 'View Business Hosting',
    href: '/contact',
    Icon: ShoppingBag,
    image: digitalMarketingImage,
  },
  {
    id: 'schools-ngos',
    navTitle: 'Schools & NGOs',
    shortTitle: 'Schools',
    label: 'Schools & NGOs',
    heading: 'Secure Hosting for Information & Digital Services.',
    copy: 'Host school websites, organisation portals, information platforms, and digital resources on infrastructure designed for reliability and accessibility.',
    benefits: ['Secure Hosting', 'Website Monitoring', 'Technical Support'],
    cta: 'Explore Hosting Plans',
    href: '/contact',
    Icon: GraduationCap,
    image: securityReliabilityImage,
  },
  {
    id: 'agencies-professionals',
    navTitle: 'Agencies & Professionals',
    shortTitle: 'Agencies',
    label: 'Agencies & Professionals',
    heading: 'Flexible Hosting for Client Work and Professional Sites.',
    copy: 'A reliable environment for portfolios, professional websites, client projects, and growing digital services.',
    benefits: ['Multiple Website Support', 'cPanel Access', 'Business Email'],
    cta: 'Explore Business Hosting',
    href: '/contact',
    Icon: BriefcaseBusiness,
    image: softwareDevelopmentImage,
  },
  {
    id: 'growing-organisations',
    navTitle: 'Growing Organisations',
    shortTitle: 'Growing',
    label: 'Growing Organisations',
    heading: 'More Resources as Your Digital Needs Grow.',
    copy: 'Move beyond basic hosting with stronger performance, additional resources, monitoring, and support for increasingly demanding platforms.',
    benefits: ['Scalable Resources', 'Advanced Security', 'Priority Support'],
    cta: 'Talk to Sales',
    href: '/contact',
    Icon: TrendingUp,
    image: webHostingImage,
  },
];

export function HostingUseCases() {
  const [activeAudienceId, setActiveAudienceId] = useState(audiences[0].id);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = audiences.findIndex((audience) => audience.id === activeAudienceId);
  const activeAudience = audiences[activeIndex] ?? audiences[0];

  useLayoutEffect(() => {
    const activeTab = tabRefs.current[activeIndex];

    if (!activeTab) {
      return;
    }

    setIndicator({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
  }, [activeIndex]);

  function selectAudience(index: number) {
    const audience = audiences[index];

    if (!audience) {
      return;
    }

    setActiveAudienceId(audience.id);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return;
    }

    event.preventDefault();

    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? audiences.length - 1
        : event.key === 'ArrowRight'
          ? (index + 1) % audiences.length
          : (index - 1 + audiences.length) % audiences.length;

    selectAudience(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="relative overflow-hidden bg-white px-5 py-18 sm:px-6 sm:py-22 lg:py-24" aria-labelledby="hosting-use-cases-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Built for Growing Businesses</p>
          <h2 id="hosting-use-cases-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Hosting for Businesses of Every Size.
          </h2>
          <p className="mx-auto mt-5 max-w-readable text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            From simple company websites to growing organisations and demanding online platforms, Laybrotech hosting is designed to support different stages of digital growth.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-full overflow-x-auto pb-2 [scrollbar-width:none] sm:mt-10 lg:overflow-visible [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Hosting audience selector">
          <div className="relative mx-auto flex w-max min-w-max rounded-full bg-[#f6fbff] p-1.5">
            <span
              className="absolute inset-y-1.5 rounded-full bg-white shadow-[0_8px_22px_rgb(23_23_23/0.08)] transition-[transform,width] duration-300 ease-out"
              style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
              aria-hidden="true"
            />
            {audiences.map((audience, index) => {
              const isActive = audience.id === activeAudience.id;

              return (
                <button
                  key={audience.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  className={cn(
                    'relative z-10 inline-flex h-11 shrink-0 items-center justify-center rounded-full px-4 text-sm font-bold transition-colors duration-200 sm:px-5 lg:px-6',
                    isActive ? 'text-[#18181b]' : 'text-[#5f5a56] hover:text-[#18181b]',
                  )}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectAudience(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                >
                  {audience.navTitle}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-3 max-w-[86rem] overflow-hidden rounded-[1.75rem] bg-[#f8fbff] sm:mt-4">
          <div className="grid min-h-[34rem] items-stretch lg:grid-cols-[0.52fr_0.48fr]" role="tabpanel" aria-live="polite">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 transition-[opacity,transform] duration-200 ease-out sm:px-8 sm:py-12 lg:px-16 lg:py-16" key={activeAudience.id}>
              <h3 className="max-w-[34rem] text-[1.9rem] font-semibold leading-tight text-[#18181b] sm:text-[2.25rem] lg:text-[2.45rem]">
                {activeAudience.heading}
              </h3>
              <p className="mt-4 max-w-[32rem] text-base leading-7 text-[#5f5a56]">{activeAudience.copy}</p>

              <ul className="mt-6 grid gap-3" aria-label={`${activeAudience.label} benefits`}>
                {activeAudience.benefits.map((benefit) => (
                  <li className="flex items-center gap-2.5 text-sm font-semibold text-[#18181b]" key={benefit}>
                    <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link className="group mt-7 inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]" to={activeAudience.href}>
                {activeAudience.cta}
                <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div
              className="relative isolate flex min-h-[24rem] items-center justify-center overflow-hidden bg-[#f25a05] px-5 py-8 transition-[opacity,transform] duration-200 ease-out sm:px-8 lg:min-h-full lg:px-10"
              key={`${activeAudience.id}-image`}
              aria-hidden="true"
            >
              <div className="relative z-10 mx-auto aspect-[4/3] w-full max-w-[46rem] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_44px_rgb(23_23_23/0.16)]">
                <img
                  className="size-full object-contain object-center"
                  src={activeAudience.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}











