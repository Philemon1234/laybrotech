import { type ReactNode, useRef } from 'react';

import { cn } from '@/lib/cn';

export type RevealDirection = 'up' | 'left' | 'right';

type RevealProps = {
  children: ReactNode;
  as?: 'div' | 'section' | 'article' | 'aside' | 'span';
  className?: string;
  direction?: RevealDirection;
  delay?: number;
  threshold?: number;
  once?: boolean;
};

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  return { ref, visible: true };
}

export function Reveal({ children, as: Component = 'div', className }: RevealProps) {
  return <Component className={cn(className)}>{children}</Component>;
}
