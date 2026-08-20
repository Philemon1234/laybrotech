import { useState } from 'react';

import { FAQItem } from './FAQItem';
import { faqItems, type FAQEntry } from './faqData';

type FAQProps = {
  eyebrow?: string;
  heading?: string;
  copy?: string;
  items?: FAQEntry[];
};

export function FAQ({
  eyebrow = 'Frequently Asked Questions',
  heading = 'Questions? We\'ve Got Answers.',
  copy = 'Find quick answers to common questions about Laybrotech\'s websites, hosting, software, support, and digital services.',
  items = faqItems,
}: FAQProps) {
  const [openItemId, setOpenItemId] = useState(items[0]?.id ?? '');

  return (
    <section className="bg-white px-5 pb-24 pt-6 sm:px-6 sm:pb-28 sm:pt-8 lg:pb-32 lg:pt-10" aria-labelledby="faq-heading">
      <div className="mx-auto w-full max-w-container">
        <div className="mx-auto max-w-[43rem] text-center">
          <p className="type-eyebrow">{eyebrow}</p>
          <h2 id="faq-heading" className="mt-4 text-[2.15rem] font-semibold leading-tight text-[#18181b] sm:text-[2.65rem] lg:text-[3.15rem]">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[43rem] text-base leading-7 text-[#5f5a56] sm:text-lg sm:leading-8">
            {copy}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[62rem] lg:mt-16">
          {items.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openItemId === item.id}
              onToggle={() => setOpenItemId((currentId) => (currentId === item.id ? '' : item.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
