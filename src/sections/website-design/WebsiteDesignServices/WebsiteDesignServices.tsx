import { type KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

import ecommerceGraphic from '@/assets/E-commerce.png';
import landingPagesGraphic from '@/assets/Landing Pages.png';
import websiteRedesignGraphic from '@/assets/Website Redesign.png';
import businessWebsitesGraphic from '@/assets/Business Websites.png';
import { cn } from '@/lib/cn';

type Service = {
  id: string;
  tab: string;
  label: string;
  heading: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

const services: Service[] = [
  {
    id: 'business-websites',
    tab: 'Business Websites',
    label: 'Business Websites',
    heading: 'Professional Websites for Growing Businesses.',
    description:
      'Ideal for businesses that need a clear, professional online presence that explains their services and makes it easy for customers to get in touch.',
    features: ['Home, About, Services & Contact pages', 'Mobile-friendly design', 'Clear calls to action'],
    image: businessWebsitesGraphic,
    imageAlt: 'Website design service preview showing responsive website screens.',
  },
  {
    id: 'ecommerce-websites',
    tab: 'E-commerce',
    label: 'E-commerce Websites',
    heading: 'Online Stores Built to Sell.',
    description:
      'Professional e-commerce websites designed to help businesses display products, receive orders, and sell online.',
    features: ['Product pages', 'Payment integration', 'Order & inventory management'],
    image: ecommerceGraphic,
    imageAlt: 'Temporary online store service preview graphic.',
  },
  {
    id: 'website-redesign',
    tab: 'Website Redesign',
    label: 'Website Redesign',
    heading: 'Give Your Existing Website a Better Experience.',
    description:
      'We refresh outdated or underperforming websites with a cleaner design, improved usability, and stronger performance.',
    features: ['Modern design', 'Faster speed', 'Improved conversion'],
    image: websiteRedesignGraphic,
    imageAlt: 'Temporary website redesign service preview graphic.',
  },
  {
    id: 'landing-pages',
    tab: 'Landing Pages',
    label: 'Landing Pages',
    heading: 'Focused Pages for Marketing Campaigns.',
    description:
      'Dedicated landing pages designed around one clear message and one important customer action.',
    features: ['Focused messaging', 'High-conversion structure', 'Optimised for Google Ads & social ads'],
    image: landingPagesGraphic,
    imageAlt: 'Temporary landing page service preview graphic.',
  },
];

export function WebsiteDesignServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeService = services[activeIndex] ?? services[0];

  useLayoutEffect(() => {
    const activeTab = tabRefs.current[activeIndex];

    if (!activeTab) {
      return;
    }

    setIndicator({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
  }, [activeIndex]);

  function selectService(index: number) {
    if (!services[index]) {
      return;
    }

    setActiveIndex(index);

    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') {
      return;
    }

    event.preventDefault();

    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? services.length - 1
        : event.key === 'ArrowRight'
          ? (index + 1) % services.length
          : (index - 1 + services.length) % services.length;

    selectService(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="website-design-services-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Website Design Services</p>
          <h2 id="website-design-services-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Websites Built Around Your Business Goals.
          </h2>
          <p className="mx-auto mt-5 max-w-[44rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            From professional company websites to online stores, redesigns, and campaign landing pages, Laybrotech builds digital experiences around what your business needs to achieve.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-full overflow-x-auto pb-2 [scrollbar-width:none] sm:mt-12 lg:overflow-visible [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Website design service selector">
          <div className="relative mx-auto flex w-max min-w-max rounded-full bg-[#f2f2ef] p-1.5">
            <span
              className="absolute inset-y-1.5 rounded-full bg-white shadow-[0_8px_22px_rgb(23_23_23/0.08)] transition-[transform,width] duration-300 ease-out"
              style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
              aria-hidden="true"
            />
            {services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.id}
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
                  aria-controls={`${service.id}-panel`}
                  onClick={() => selectService(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  {service.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-[86rem] overflow-hidden rounded-[1.75rem] bg-[#f8f5f1] sm:mt-5">
          <div
            id={`${activeService.id}-panel`}
            className="grid items-stretch lg:min-h-[31.5rem] lg:grid-cols-[0.43fr_0.57fr]"
            role="tabpanel"
            aria-live="polite"
          >
            <div className="flex min-h-[27rem] flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:min-h-[31.5rem] lg:px-14 lg:py-14" key={activeService.id}>
              <p className="type-eyebrow">{activeService.label}</p>
              <h3 className="mt-5 max-w-[34rem] text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.35rem] lg:text-[2.7rem]">
                {activeService.heading}
              </h3>
              <p className="mt-5 max-w-[32rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
                {activeService.description}
              </p>

              <ul className="mt-8 grid gap-3" aria-label={`${activeService.label} included features`}>
                {activeService.features.map((feature) => (
                  <li className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-[#18181b]" key={feature}>
                    <Check className="mt-1 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative isolate flex min-h-[23rem] items-center justify-center overflow-hidden bg-[#f25a05] px-5 py-8 sm:px-8 lg:min-h-[31.5rem] lg:px-10" aria-hidden="true" key={`${activeService.id}-visual`}>
              <div className="relative z-10 mx-auto aspect-[4/3] w-full max-w-[45rem] overflow-hidden rounded-[1.55rem] bg-white shadow-[0_24px_44px_rgb(23_23_23/0.14)]">
                <img
                  className="size-full object-contain object-center"
                  src={activeService.image}
                  alt={activeService.imageAlt}
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








