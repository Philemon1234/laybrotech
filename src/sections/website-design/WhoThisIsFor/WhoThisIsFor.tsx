import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const situations = [
  {
    number: '01',
    heading: 'You Don\'t Have a Website Yet.',
    copy: 'We\'ll help you plan, design, and launch the right website from the ground up.',
  },
  {
    number: '02',
    heading: 'Your Website Feels Outdated.',
    copy: 'We\'ll modernise the experience, improve mobile usability, and strengthen how your brand is presented.',
  },
  {
    number: '03',
    heading: 'Your Website Isn\'t Bringing You Enquiries.',
    copy: 'We\'ll improve the messaging, page structure, and calls to action so the website works harder for your business.',
  },
  {
    number: '04',
    heading: 'You Rely Mostly on Social Media.',
    copy: 'We\'ll give your business a professional digital home that you control and customers can trust.',
  },
  {
    number: '05',
    heading: 'Your Business Needs More Credibility Online.',
    copy: 'We\'ll create a stronger digital presence that makes your business look established, professional, and reliable.',
  },
];

export function WhoThisIsFor() {
  return (
    <section className="relative overflow-hidden bg-[#171717] px-5 py-24 sm:px-6 sm:py-28 lg:py-32" aria-labelledby="who-this-is-for-heading">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,#171717_0%,#171717_58%,#24160f_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-20 size-80 rounded-full bg-[#f25a05]/8 blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[40rem] text-center">
          <p className="type-eyebrow">Who This Is For</p>
          <h2 id="who-this-is-for-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#fffaf5] sm:text-[2.65rem] lg:text-[3.15rem]">
            You&apos;re in the Right Place If...
          </h2>

        </div>

        <div className="mx-auto mt-16 max-w-[82rem] border-y border-white/12 sm:mt-18 lg:mt-20">
          {situations.map((situation) => (
            <div
              className="group grid cursor-pointer gap-4 border-b border-white/12 py-10 transition-colors duration-200 last:border-b-0 sm:grid-cols-[6rem_1fr] sm:gap-x-7 lg:grid-cols-[0.12fr_0.44fr_0.44fr] lg:items-center lg:py-12"
              key={situation.number}
            >
              <span className="text-[3.35rem] font-semibold leading-none text-transparent [-webkit-text-stroke:0.65px_rgba(255,250,245,0.72)] transition-all duration-200 group-hover:text-[#f25a05] group-hover:[-webkit-text-stroke:0.65px_#f25a05] sm:text-[4.1rem] lg:text-[4.6rem]">
                {situation.number}
              </span>
              <h3 className="text-[1.7rem] font-semibold leading-tight text-[#fffaf5] transition-transform duration-200 group-hover:translate-x-1 sm:text-[2rem] lg:text-[2.25rem]">
                {situation.heading}
              </h3>
              <p className="text-base leading-8 text-[#d8d0c8] sm:text-lg sm:col-start-2 lg:col-start-auto">
                {situation.copy}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link className="group inline-flex items-center gap-2 text-sm font-bold text-[#ff7a2b] transition-colors duration-smooth hover:text-[#ffb07a]" to="/contact">
            Let&apos;s Talk About Your Website
            <ArrowRight className="size-4 transition-transform duration-smooth group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}




