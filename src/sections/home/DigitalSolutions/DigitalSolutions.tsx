import { FeaturedServiceCard } from './FeaturedServiceCard';
import { featuredServices, services } from './digitalSolutionsData';
import { ServiceCard } from './ServiceCard';

export function DigitalSolutions() {
  return (
    <section className="bg-[#fff] px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-28 lg:pt-36" aria-labelledby="digital-solutions-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-readable text-center">
          <p className="text-xs font-bold uppercase leading-5 text-[#f25a05]">Laybrotech Digital Solutions</p>
          <h2
            id="digital-solutions-heading"
            className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]"
          >
            Everything Your Business Needs to Succeed Online.
          </h2>
          <p className="mx-auto mt-5 max-w-readable text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            From hosting and professional websites to business email, domains, custom software, and digital marketing,
            Laybrotech brings the essential tools for building and growing your business online into one trusted ecosystem.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:gap-6">
          {featuredServices.map((service) => (
            <FeaturedServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}


