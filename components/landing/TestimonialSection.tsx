import { Container } from '@/components/common/Container';
import { Section } from '@/components/common/Section';

export function TestimonialSection() {
  return (
    <Section background="green" className="!py-0">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-green-700 ring-4 ring-green-600/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-20 w-20 text-green-200"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <blockquote className="text-xl leading-relaxed text-green-50 sm:text-2xl">
              &ldquo;GreenPilot a été conçu à partir des besoins réels du terrain. Nous avons
              travaillé avec des artisans pour créer une application simple, utile au quotidien
              et qui fait gagner du temps.&rdquo;
            </blockquote>
            <p className="mt-6 font-medium text-green-200">
              L&apos;équipe GreenPilot — conçu pour les professionnels
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
