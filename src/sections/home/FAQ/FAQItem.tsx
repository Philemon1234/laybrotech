import { Minus, Plus } from 'lucide-react';

import { cn } from '@/lib/cn';

import type { FAQEntry } from './faqData';

type FAQItemProps = {
  item: FAQEntry;
  isOpen: boolean;
  onToggle: () => void;
};

export function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  const panelId = `${item.id}-answer`;
  const buttonId = `${item.id}-button`;
  const Icon = isOpen ? Minus : Plus;

  return (
    <div className="border-b border-[#e5e1dc] last:border-b-0">
      <h3>
        <button
          id={buttonId}
          className="flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#f25a05]/45"
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="text-base font-medium leading-7 text-[#18181b] sm:text-lg">{item.question}</span>
          <span className={cn('shrink-0 transition-colors duration-200', isOpen ? 'text-[#f25a05]' : 'text-[#18181b]')}>
            <Icon className="size-5" aria-hidden="true" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          'grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-linear',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="min-h-0">
          <p className="max-w-[48rem] pb-6 text-base leading-7 text-[#5f5a56]">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
