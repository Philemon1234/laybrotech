import { Check } from 'lucide-react';

import softwareGraphic from '@/assets/Software Development.webp';
import softwarePhoto from '@/assets/images/services/software-development.webp';
import { cn } from '@/lib/cn';

const businessPoints = ['Tailored to your needs', 'Business-focused functionality', 'User-friendly interfaces'];
const scalePoints = ['Modern & scalable', 'Secure development', 'Reliable technical support'];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-3">
      {items.map((item) => (
        <li className="flex items-center gap-3 text-sm font-semibold text-[#18181b] sm:text-base" key={item}>
          <Check className="size-4 shrink-0 text-[#16a34a]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SoftwareWhyChoose() {
  return (
    <>
      <section className="bg-[#fbf5ef] px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="software-fit-heading">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 xl:gap-20">
          <div>
            <p className="type-eyebrow">Built for Your Business</p>
            <h2 id="software-fit-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Software That Fits Your Workflow — Not the Other Way Around.</h2>
            <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">Every organisation works differently. We design systems around your actual processes, users, and operational requirements.</p>
            <CheckList items={businessPoints} />
          </div>
          <div className="overflow-hidden rounded-[1.75rem] bg-white p-5 shadow-[0_22px_55px_rgb(23_23_23/0.10)] sm:p-7 lg:p-8" aria-hidden="true">
            <img className="aspect-[4/3] h-full w-full rounded-[1.25rem] object-cover object-center" src={softwarePhoto} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 sm:py-24 lg:py-32" aria-labelledby="software-scale-heading">
        <div className="mx-auto grid w-full max-w-container items-center gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:gap-16 xl:gap-20">
          <div className="order-2 overflow-hidden rounded-[1.75rem] bg-[#fff4ed] p-5 shadow-[0_22px_55px_rgb(23_23_23/0.08)] sm:p-7 lg:order-1 lg:p-8" aria-hidden="true">
            <img className="aspect-[4/3] h-full w-full rounded-[1.25rem] object-contain object-center" src={softwareGraphic} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="type-eyebrow">Built to Last</p>
            <h2 id="software-scale-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">Secure, Scalable and Ready to Grow.</h2>
            <p className="mt-5 max-w-[36rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">We build software with modern technologies, scalable architecture, secure development practices, and ongoing support.</p>
            <CheckList items={scalePoints} />
          </div>
        </div>
      </section>
    </>
  );
}

const processSteps = [
  { number: '01', title: 'Consultation & Requirement Gathering', description: 'We start by understanding your business processes, goals, users, and software requirements.' },
  { number: '02', title: 'Planning & System Design', description: 'We define the system structure, user flow, interface direction, and technical approach.' },
  { number: '03', title: 'Development', description: 'We build the software using secure, modern, and maintainable technologies.' },
  { number: '04', title: 'Testing & Optimisation', description: 'We test performance, functionality, reliability, usability, and security before launch.' },
  { number: '05', title: 'Deployment & Training', description: 'The system is launched and users are guided on how to use it effectively.' },
];

export function SoftwareProcess() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="software-process-heading">
      <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-[#f25a05]/6 blur-3xl" aria-hidden="true" />
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[42rem] text-center">
          <p className="type-eyebrow">Software Development Process</p>
          <h2 id="software-process-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">A Clear Process From Idea to Deployment.</h2>
          <p className="mx-auto mt-5 max-w-[40rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">We keep software development structured, collaborative, and focused on building the right system for your organisation.</p>
        </div>

        <ol className="relative mx-auto mt-16 grid max-w-[76rem] gap-8 sm:mt-18 lg:mt-20 lg:gap-0">
          <span className="pointer-events-none absolute bottom-10 left-[1.05rem] top-10 w-px bg-[#eadfd6] lg:left-1/2 lg:-translate-x-1/2" aria-hidden="true" />
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <li className="group relative grid grid-cols-[2.25rem_1fr] gap-5 lg:grid-cols-[1fr_5rem_1fr] lg:gap-0" key={step.number}>
                <article className={cn('col-start-2 row-start-1 rounded-[1.35rem] border border-[#eadfd6] bg-[#fffdfb] p-6 shadow-[0_8px_24px_rgb(23_23_23/0.035)] transition-[border-color,transform] duration-200 group-hover:border-[#f25a05]/35 sm:p-7 lg:p-8', isLeft ? 'lg:col-start-1 lg:mr-8' : 'lg:col-start-3 lg:ml-8')}>
                  <span className="block text-[2.7rem] font-semibold leading-none text-[#d8b8a5] transition-colors duration-200 group-hover:text-[#f25a05] sm:text-[3.25rem]">{step.number}</span>
                  <h3 className="mt-5 text-[1.45rem] font-semibold leading-tight text-[#18181b] transition-transform duration-200 group-hover:translate-x-0.5 sm:text-[1.7rem]">{step.title}</h3>
                  <p className="mt-3 max-w-[34rem] text-base leading-7 text-[#625c56]">{step.description}</p>
                </article>
                <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-8 lg:col-start-2">
                  <span className="flex size-5 items-center justify-center rounded-full border border-[#f25a05] bg-white transition-colors duration-200 group-hover:bg-[#f25a05]" aria-hidden="true"><span className="size-2 rounded-full bg-[#f25a05]" /></span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
