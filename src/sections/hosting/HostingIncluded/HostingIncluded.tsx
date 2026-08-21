import { Database, FileCog, Gauge, Headphones, Mail, PanelTop, Plug, RotateCcw, ShieldCheck, UploadCloud } from 'lucide-react';

const includedFeatures = [
  { title: 'Free SSL Certificate', Icon: ShieldCheck },
  { title: 'cPanel Control Panel', Icon: PanelTop },
  { title: 'Website Backups', Icon: RotateCcw },
  { title: 'Business Email', Icon: Mail },
  { title: 'Website Monitoring', Icon: Gauge },
  { title: 'Domain Connection Support', Icon: Plug },
  { title: 'Technical Assistance', Icon: Headphones },
  { title: 'File Management Tools', Icon: FileCog },
  { title: 'Database Access', Icon: Database },
  { title: 'Migration Assistance', Icon: UploadCloud },
];

export function HostingIncluded() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="hosting-included-heading">
      <div className="mx-auto grid w-full max-w-container gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-16 xl:gap-20">
        <div>
          <p className="type-eyebrow">Everything Included</p>
          <h2 id="hosting-included-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            Everything You Need to Run Your Website.
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            Every Laybrotech hosting plan includes the essential tools and support needed to keep your website secure, manageable, and online.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-5" aria-label="Included hosting features">
          {includedFeatures.map(({ title, Icon }) => (
            <div className="flex min-h-[7.5rem] flex-col items-start gap-3 border-b border-[#e5e1dc] pb-5" key={title}>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-control bg-[#fff4ed] text-[#f25a05]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold leading-6 text-[#18181b]">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

