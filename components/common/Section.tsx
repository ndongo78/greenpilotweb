import type { ReactNode } from 'react';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  title,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'muted' | 'green';
};

const backgroundClasses = {
  white: 'bg-white',
  muted: 'bg-gray-50',
  green: 'bg-green-800 text-white',
} as const;

export function Section({
  children,
  id,
  className = '',
  background = 'white',
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
