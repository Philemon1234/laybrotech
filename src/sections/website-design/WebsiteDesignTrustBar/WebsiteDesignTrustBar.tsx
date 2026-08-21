import { Gauge, LifeBuoy, Palette, SearchCheck, Smartphone } from 'lucide-react';

const trustItems = [
  { label: 'Mobile Responsive', Icon: Smartphone },
  { label: 'SEO-Ready', Icon: SearchCheck },
  { label: 'Custom Design', Icon: Palette },
  { label: 'Fast Performance', Icon: Gauge },
  { label: 'Ongoing Support', Icon: LifeBuoy },
];

export function WebsiteDesignTrustBar() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-6" aria-label="Website design benefits">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.35rem] border border-[#e5e1dc] bg-white shadow-[0_18px_42px_rgb(23_23_23/0.12)]">
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-5">
          {trustItems.map(({ label, Icon }, index) => (
            <div className="flex min-h-[7.25rem] flex-col items-start justify-center gap-3 border-[#e5e1dc] px-5 py-5 lg:min-h-0 lg:flex-row lg:items-center lg:justify-start lg:border-r lg:px-6 lg:last:border-r-0" key={label}>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-[#fbfaf7] text-[#f25a05]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold leading-5 text-[#18181b]">{label}</span>
              {index < trustItems.length - 1 ? <span className="ml-auto hidden h-10 w-px bg-[#e5e1dc] lg:block" aria-hidden="true" /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

