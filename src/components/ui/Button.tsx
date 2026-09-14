import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white-outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  showArrow?: boolean;
  href?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-purple-700 text-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  secondary:
    'bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  ghost:
    'bg-transparent text-purple-900 border-none hover:bg-purple-100',
  'white-outline':
    'bg-transparent text-white border-2 border-white hover:bg-white hover:text-purple-950',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-heading font-extrabold uppercase tracking-wider rounded-none transition-all duration-200 cursor-pointer select-none';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
