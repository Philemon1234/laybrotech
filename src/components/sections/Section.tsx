import type { ComponentPropsWithoutRef } from 'react';

import { PageContainer } from '@/components/ui/PageContainer';
import { cn } from '@/lib/cn';

type SectionTone = 'white' | 'page' | 'muted' | 'dark' | 'gradient';
type SectionSpacing = 'sm' | 'md' | 'lg';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  containerClassName?: string;
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

const toneClasses: Record<SectionTone, string> = {
  white: 'bg-brand-white',
  page: 'bg-brand-page',
  muted: 'bg-brand-muted',
  dark: 'surface-on-dark bg-brand-dark text-brand-text-inverse',
  gradient: 'surface-on-dark surface-gradient-cta text-brand-text-inverse',
};

const spacingClasses: Record<SectionSpacing, string> = {
  sm: 'py-12 md:py-16 lg:py-20',
  md: 'py-16 md:py-20 lg:py-24',
  lg: 'py-16 md:py-20 lg:py-32',
};

export function Section({
  className = '',
  containerClassName = '',
  tone = 'page',
  spacing = 'lg',
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(toneClasses[tone], spacingClasses[spacing], className)} {...props}>
      <PageContainer className={containerClassName}>{children}</PageContainer>
    </section>
  );
}

