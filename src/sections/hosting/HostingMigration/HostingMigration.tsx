import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

import migrationImage from '@/assets/images/services/migration.png';
import { ButtonLink } from '@/components/ui/Button';

const benefits = ['Guided migration support', 'Website files and database transfer', 'Domain and DNS assistance', 'Configuration checks after migration'];

export function HostingMigration() {
  return (
    <section className="bg-[#fbf5ef] px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="hosting-migration-heading">
      <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 xl:gap-20">
        <div>
          <p className="type-eyebrow">Website Migration</p>
          <h2 id="hosting-migration-heading" className="mt-4 max-w-[39rem] text-[2rem] font-semibold leading-tight text-[#18181b] sm:text-[2.45rem] lg:text-[2.85rem]">
            Moving Your Website Shouldn&apos;t Be Complicated.
          </h2>
          <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Laybrotech can help move your existing website to our hosting environment, including your website files, databases, email configuration, and essential settings.
          </p>
          <ul className="mt-7 grid gap-3" aria-label="Website migration benefits">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-3 text-sm font-semibold text-[#18181b] sm:text-base" key={benefit}>
                <Check className="mt-0.5 size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink className="h-12 w-full text-white sm:h-14 sm:w-auto" href="/contact" rightIcon={<ArrowRight />} size="lg">
              Start Your Migration
            </ButtonLink>
            <Link className="group inline-flex w-fit items-center gap-2 rounded-control text-sm font-bold text-[#f25a05] transition-colors duration-smooth hover:text-[#d94f04]" to="/contact">
              Talk to Support
              <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] bg-white p-4 shadow-[0_22px_55px_rgb(23_23_23/0.10)] sm:p-5 lg:p-6" aria-hidden="true">
          <img
            className="aspect-[4/3] h-full w-full rounded-[1.35rem] object-cover object-center"
            src={migrationImage}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
