import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/cn';

type CardVariant = 'light' | 'dark' | 'outlined';

type CardProps = ComponentPropsWithoutRef<'article'> & {
  variant?: CardVariant;
};

const variantClasses: Record<CardVariant, string> = {
  light: 'border border-brand-border bg-brand-white shadow-card',
  dark: 'surface-on-dark border border-white/10 bg-brand-dark-secondary text-brand-text-inverse',
  outlined: 'border border-brand-border bg-transparent',
};

export function Card({ variant = 'light', className, ...props }: CardProps) {
  return (
    <article
      className={cn('rounded-card p-6 md:p-7', variantClasses[variant], className)}
      {...props}
    />
  );
}

