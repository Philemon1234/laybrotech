import { Activity, Headphones, Mail, RotateCcw, ShieldCheck } from 'lucide-react';

const trustItems = [
  { label: 'SSL Included', Icon: ShieldCheck },
  { label: '24/7 Monitoring', Icon: Activity },
  { label: 'Local Support', Icon: Headphones },
  { label: 'Website Backups', Icon: RotateCcw },
  { label: 'Business Email Available', Icon: Mail },
];

export function HostingTrustBar() {
  return (
    <section className="relative z-10 -mt-12 px-5 sm:px-6" aria-label="Hosting trust highlights">
      <div className="mx-auto w-full max-w-container overflow-hidden rounded-[1.35rem] border border-[#e5e1dc] bg-white shadow-[0_18px_42px_rgb(23_23_23/0.12)]">
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map(({ label, Icon }, index) => (
            <div className="flex items-center gap-3 border-[#e5e1dc] px-5 py-5 sm:border-r sm:last:border-r-0 lg:px-6" key={label}>
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
