import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'white' | 'ghost' | 'white-outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  icon?: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white border-2 border-stroke comic-shadow comic-shadow-hover',
  secondary:
    'bg-secondary text-white border-2 border-stroke comic-shadow comic-shadow-hover',
  white:
    'bg-white text-primary border-2 border-stroke comic-shadow comic-shadow-hover',
  ghost:
    'bg-transparent text-primary hover:bg-purple-100 transition-all',
  'white-outline':
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary transition-all',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 para-12',
  md: 'px-6 py-2.5 para-16 font-normal!',
  lg: 'px-8 py-3.5 para-14',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  icon,
  href,
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 cursor-pointer select-none uppercase ${
    fullWidth ? 'w-full' : ''
  }`;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon ? (
        icon
      ) : showArrow ? (
        <ArrowIcon />
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.16669 10H15.8334M15.8334 10L10 4.16667M15.8334 10L10 15.8333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
