import { AppButton } from '@/components/common/AppButton';
import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { registerUrl } from '@/src/constants/brand';
import { pricingPlans } from '@/src/constants/landing';

export function PricingSection() {
  return (
    <Section id="tarifs" background="muted">
      <Container>
        <SectionHeading
          title="Tarifs simples"
          subtitle="Choisissez le plan adapté à votre activité. Sans engagement."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                plan.recommended
                  ? 'border-green-600 shadow-lg shadow-green-600/10'
                  : 'border-gray-200'
              }`}
            >
              {plan.recommended ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Recommandé
                </span>
              ) : null}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-600"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
                {plan.excludedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-0.5 h-5 w-5 shrink-0 text-gray-400"
                      aria-hidden="true"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
                {plan.footnote}
              </p>
              <AppButton
                href={registerUrl}
                variant={plan.recommended ? 'primary' : 'secondary'}
                className="mt-8 w-full"
              >
                Commencer
              </AppButton>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
