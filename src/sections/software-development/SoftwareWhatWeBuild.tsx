import { type KeyboardEvent, useLayoutEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

import domainGraphic from '@/assets/Domain Registration.png';
import hostingGraphic from '@/assets/Web hosting.png';
import digitalMarketingGraphic from '@/assets/Digital Marketing.png';
import softwareGraphic from '@/assets/Software Development.png';
import websiteGraphic from '@/assets/Web design.png';
import { cn } from '@/lib/cn';

type ShowcaseItem = {
  id: string;
  tab: string;
  label: string;
  heading: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
};

const buildItems: ShowcaseItem[] = [
  {
    id: 'business-systems',
    tab: 'Business Systems',
    label: 'Business Management Systems',
    heading: 'Run More of Your Business From One System.',
    description: 'Custom systems designed to help organisations manage operations, customers, finances, inventory, staff, and internal workflows more efficiently.',
    features: ['ERP & operational systems', 'CRM platforms', 'Inventory / HR / payroll tools'],
    image: softwareGraphic,
    imageAlt: 'Software development service preview graphic.',
  },
  {
    id: 'school-systems',
    tab: 'School Systems',
    label: 'School Management Systems',
    heading: 'Simplify Academic and Administrative Workflows.',
    description: 'Digital systems that help schools manage students, fees, academics, communication, attendance, and administration.',
    features: ['Student portals', 'Results & academic management', 'Admissions / attendance systems'],
    image: websiteGraphic,
    imageAlt: 'Temporary school management system preview graphic.',
  },
  {
    id: 'web-applications',
    tab: 'Web Applications',
    label: 'Web Applications',
    heading: 'Secure Applications Accessible From Anywhere.',
    description: 'Responsive web-based platforms built for teams, customers, members, and internal operations across modern devices.',
    features: ['Client portals', 'Booking systems', 'Business dashboards'],
    image: hostingGraphic,
    imageAlt: 'Temporary web application preview graphic.',
  },
  {
    id: 'mobile-apps',
    tab: 'Mobile Apps',
    label: 'Mobile App Development',
    heading: 'Mobile Experiences Built Around Real User Needs.',
    description: 'Modern mobile applications designed to improve accessibility, customer engagement, and service delivery.',
    features: ['Android applications', 'Business apps', 'Customer / service platforms'],
    image: digitalMarketingGraphic,
    imageAlt: 'Temporary mobile application preview graphic.',
  },
  {
    id: 'custom-software',
    tab: 'Custom Software',
    label: 'Custom Software Solutions',
    heading: 'Software Designed Around Your Unique Workflow.',
    description: 'When off-the-shelf tools do not fit, we design and develop software around your requirements, processes, and operational needs.',
    features: ['Tailored workflows', 'Custom integrations', 'Purpose-built platforms'],
    image: domainGraphic,
    imageAlt: 'Temporary custom software preview graphic.',
  },
];

export function SoftwareWhatWeBuild() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeItem = buildItems[activeIndex] ?? buildItems[0];

  useLayoutEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (!activeTab) return;
    setIndicator({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
  }, [activeIndex]);

  function selectIndex(index: number) {
    if (!buildItems[index]) return;
    setActiveIndex(index);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft' && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault();
    const nextIndex = event.key === 'Home'
      ? 0
      : event.key === 'End'
        ? buildItems.length - 1
        : event.key === 'ArrowRight'
          ? (index + 1) % buildItems.length
          : (index - 1 + buildItems.length) % buildItems.length;
    selectIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section id="software-services" className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="software-services-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[45rem] text-center">
          <p className="type-eyebrow">Software Development Services</p>
          <h2 id="software-services-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Software Built Around the Way Your Business Works.</h2>
          <p className="mx-auto mt-5 text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">From internal business systems to customer-facing applications, Laybrotech develops software that solves practical operational problems.</p>
        </div>

        <div className="mx-auto mt-10 max-w-full overflow-x-auto pb-2 [scrollbar-width:none] sm:mt-12 lg:overflow-visible [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Software service selector">
          <div className="relative mx-auto flex w-max min-w-max rounded-full bg-[#f2f2ef] p-1.5">
            <span className="absolute inset-y-1.5 rounded-full bg-white shadow-[0_8px_22px_rgb(23_23_23/0.08)] transition-[transform,width] duration-300 ease-out" style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }} aria-hidden="true" />
            {buildItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  ref={(node) => { tabRefs.current[index] = node; }}
                  className={cn('relative z-10 inline-flex h-11 shrink-0 items-center justify-center rounded-full px-4 text-sm font-bold transition-colors duration-200 sm:px-5 lg:px-6', isActive ? 'text-[#18181b]' : 'text-[#5f5a56] hover:text-[#18181b]')}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectIndex(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  {item.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-[86rem] overflow-hidden rounded-[1.75rem] bg-[#f8f5f1] sm:mt-5">
          <div className="grid items-stretch lg:min-h-[31.5rem] lg:grid-cols-[0.43fr_0.57fr]" role="tabpanel" aria-live="polite">
            <div className="flex min-h-[27rem] flex-col justify-center px-6 py-10 sm:px-8 sm:py-12 lg:min-h-[31.5rem] lg:px-14 lg:py-14" key={activeItem.id}>
              <p className="type-eyebrow">{activeItem.label}</p>
              <h3 className="mt-5 max-w-[34rem] text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.35rem] lg:text-[2.7rem]">{activeItem.heading}</h3>
              <p className="mt-5 max-w-[32rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">{activeItem.description}</p>
              <ul className="mt-8 grid gap-3" aria-label={`${activeItem.label} examples`}>
                {activeItem.features.map((feature) => (
                  <li className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-[#18181b]" key={feature}>
                    <Check className="mt-1 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative isolate flex min-h-[23rem] items-center justify-center overflow-hidden bg-[#f25a05] px-5 py-8 sm:px-8 lg:min-h-[31.5rem] lg:px-10" aria-hidden="true" key={`${activeItem.id}-visual`}>
              <div className="relative z-10 mx-auto aspect-[4/3] w-full max-w-[45rem] overflow-hidden rounded-[1.55rem] bg-white shadow-[0_24px_44px_rgb(23_23_23/0.14)]">
                <img className="size-full object-contain object-center" src={activeItem.image} alt={activeItem.imageAlt} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
