import { Link } from 'wouter';
import { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
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
  // crisp, geometric, high-contrast buttons
  const baseStyles =
    'inline-flex items-center justify-center font-display font-semibold uppercase tracking-[0.15em] transition-all duration-300 rounded-none focus-visible:outline-2 focus-visible:outline-offset-2';

  const variants = {
    primary:
      'bg-sunrise-400 text-navy-950 hover:bg-sunrise-300 active:bg-sunrise-500 focus-visible:outline-sunrise-500 shadow-[4px_4px_0px_0px_rgba(11,25,44,1)] hover:shadow-[2px_2px_0px_0px_rgba(11,25,44,1)] hover:translate-y-[2px] hover:translate-x-[2px]',
    secondary:
      'bg-aqua-400 text-navy-950 hover:bg-aqua-300 active:bg-aqua-500 focus-visible:outline-aqua-500 shadow-[4px_4px_0px_0px_rgba(11,25,44,1)] hover:shadow-[2px_2px_0px_0px_rgba(11,25,44,1)] hover:translate-y-[2px] hover:translate-x-[2px]',
    outline:
      'border-2 border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white active:bg-navy-900 focus-visible:outline-navy-950',
    ghost:
      'text-navy-950 hover:bg-navy-50 active:bg-navy-100 focus-visible:outline-navy-950',
  };

  const sizes = {
    sm: 'px-6 py-3 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-base',
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