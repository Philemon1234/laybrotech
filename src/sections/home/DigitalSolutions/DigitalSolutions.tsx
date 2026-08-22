import { featuredServices, services } from './digitalSolutionsData';
import { FeaturedServiceShowcase } from './FeaturedServiceShowcase';
import { ServiceCard } from './ServiceCard';

export function DigitalSolutions() {
  const [websiteDesign, webHosting] = featuredServices;

  return (
    <section className="bg-[#fff] px-5 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20" aria-labelledby="digital-solutions-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="type-eyebrow">Laybrotech Digital Solutions</p>
          <h2
            id="digital-solutions-heading"
            className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]"
          >
            Digital Solutions for Business Growth.
          </h2>
          <p className="mx-auto mt-5 max-w-readable text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Websites, hosting, software, and marketing services built to help your business grow online.
          </p>
        </div>

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <FeaturedServiceShowcase service={websiteDesign} />
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <FeaturedServiceShowcase service={webHosting} />
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="mx-auto grid max-w-none items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


