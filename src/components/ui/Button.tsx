import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonIconProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonIconProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonIconProps & {
    href: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-orange text-[#fff] hover:bg-brand-orange-hover active:bg-brand-orange-hover disabled:bg-brand-orange/55',
  secondary:
    'border border-brand-border bg-brand-white text-brand-text-primary hover:border-brand-text-secondary/35 hover:bg-brand-muted disabled:text-brand-text-secondary/55',
  dark: 'bg-brand-dark text-[#fff] hover:bg-brand-dark-secondary disabled:bg-brand-dark/55',
  ghost: 'bg-transparent text-brand-text-primary hover:bg-brand-muted disabled:text-brand-text-secondary/55',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 gap-2 rounded-control px-4 text-sm',
  md: 'h-12 gap-2.5 rounded-button px-5 text-button',
  lg: 'h-14 gap-3 rounded-button px-6 text-button',
};

function buttonClassName(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    'inline-flex shrink-0 items-center justify-center font-semibold transition-colors duration-smooth disabled:pointer-events-none disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

function ButtonContent({ leftIcon, rightIcon, children }: ButtonIconProps & { children: ReactNode }) {
  return (
    <>
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
    </>
  );
}

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
    <button className={buttonClassName(variant, size, className)} type={type} {...props}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>{children}</ButtonContent>
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  children,
  href,
  ...props
}: ButtonLinkProps) {
  const isInternal = href.startsWith('/');
  const content = <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>{children}</ButtonContent>;

  if (isInternal) {
    return (
      <Link className={buttonClassName(variant, size, className)} to={href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <a className={buttonClassName(variant, size, className)} href={href} {...props}>
      {content}
    </a>
  );
}
