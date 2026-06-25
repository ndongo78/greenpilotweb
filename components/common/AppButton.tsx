import type { ReactNode } from 'react';

type AppButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
};

const variantClasses = {
  primary:
    'bg-green-600 text-white hover:bg-green-700 shadow-sm shadow-green-600/20',
  secondary:
    'border-2 border-green-600 text-green-700 bg-white hover:bg-green-50',
  ghost: 'text-gray-700 hover:text-green-700 hover:bg-green-50',
} as const;

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3.5 text-base font-semibold',
} as const;

export function AppButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
}: AppButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
