import { ArrowRight, Check } from 'lucide-react';

import heroImage from '@/assets/images/website-design-hero-banner.png';
import { ButtonLink } from '@/components/ui/Button';

const heroPoints = ['Mobile Responsive', 'SEO-Ready Structure', 'Conversion-Focused Design'];

export function WebsiteDesignHero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-[#171717] lg:min-h-[720px]" aria-labelledby="website-design-hero-heading">
      <img
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[68%_center]"
        src={heroImage}
        alt="African business professionals reviewing a website design on a laptop in a modern office."
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,15,15,0.96)_0%,rgba(15,15,15,0.76)_44%,rgba(15,15,15,0.18)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(15,15,15,0.58)_0%,rgba(15,15,15,0)_52%)]" />

      <div className="mx-auto flex min-h-[650px] w-full max-w-container items-center px-6 pb-28 pt-16 sm:px-8 lg:min-h-[720px] lg:px-16">
        <div className="max-w-[49rem]">
          <p className="type-eyebrow">Website Design</p>
          <h1 id="website-design-hero-heading" className="mt-5 text-[2.45rem] font-semibold leading-[1.08] text-[#fffaf5] sm:text-[3.35rem] lg:text-[4.15rem]">
            Professional Websites Built to Grow Your Business.
          </h1>
          <p className="mt-6 max-w-[43rem] text-base leading-8 text-[#f1e8df] sm:text-lg">
            Laybrotech designs modern, responsive websites that strengthen your brand, build customer trust, and turn online visitors into real business opportunities.
          </p>

          <ul className="mt-7 flex flex-col gap-3 text-sm font-semibold text-[#fffaf5] sm:flex-row sm:flex-wrap sm:gap-x-5" aria-label="Website design highlights">
            {heroPoints.map((point) => (
              <li className="flex items-center gap-2.5" key={point}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-[#fff] sm:h-14 sm:w-auto" href="/contact" rightIcon={<ArrowRight />} size="lg">
              Start Your Website
            </ButtonLink>
            <ButtonLink
              className="h-12 w-full border-2 border-white/90 !bg-transparent !text-white hover:border-white hover:!bg-white/10 hover:!text-white sm:h-14 sm:w-auto"
              href="/projects"
              variant="secondary"
              size="lg"
            >
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

