import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/cn';

type PageContainerProps = ComponentPropsWithoutRef<'div'>;

export function PageContainer({ className = '', ...props }: PageContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-container px-5 md:px-8 lg:px-10', className)}
      {...props}
    />
  );
}
