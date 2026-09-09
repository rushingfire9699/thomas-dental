import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  external = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-navy-950 text-off-white hover:bg-navy-900 active:bg-navy-900 focus-visible:outline-navy-600',
    secondary:
      'bg-light-blue-gray text-navy-950 hover:bg-navy-200 active:bg-navy-200 focus-visible:outline-navy-600',
    ghost:
      'text-navy-950 border border-navy-950 hover:bg-navy-50 active:bg-navy-100 focus-visible:outline-navy-600',
  };

  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={buttonClass}>
      {children}
    </button>
  );
}
