import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-orange text-brand-white hover:bg-brand-orange-hover active:bg-brand-orange-hover disabled:bg-brand-orange/55',
  secondary:
    'border border-brand-border bg-brand-white text-brand-text-primary hover:border-brand-text-secondary/35 hover:bg-brand-muted disabled:text-brand-text-secondary/55',
  dark: 'bg-brand-dark text-brand-white hover:bg-brand-dark-secondary disabled:bg-brand-dark/55',
  ghost: 'bg-transparent text-brand-text-primary hover:bg-brand-muted disabled:text-brand-text-secondary/55',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 gap-2 rounded-control px-4 text-sm',
  md: 'h-12 gap-2.5 rounded-button px-5 text-button',
  lg: 'h-14 gap-3 rounded-button px-6 text-button',
};

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex shrink-0 items-center justify-center font-semibold transition-colors duration-smooth disabled:pointer-events-none disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      type={type}
      {...props}
    >
      {leftIcon ? (
        <span className="size-5 shrink-0" aria-hidden="true">
          {leftIcon}
        </span>
      ) : null}
      <span>{children}</span>
      {rightIcon ? (
        <span className="size-5 shrink-0" aria-hidden="true">
          {rightIcon}
        </span>
      ) : null}
    </button>
  );
}
