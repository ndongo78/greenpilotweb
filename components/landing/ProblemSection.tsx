import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { problemCards } from '@/src/constants/landing';

export function ProblemSection() {
  return (
    <Section background="muted">
      <Container>
        <SectionHeading
          title="Vous perdez du temps avec les papiers, les photos WhatsApp et les devis oubliés ?"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problemCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
