import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { FeatureIcon } from '@/components/ui/FeatureIcon';
import { features } from '@/src/constants/landing';

export function FeaturesSection() {
  return (
    <Section id="fonctionnalites">
      <Container>
        <SectionHeading
          title="Avec GreenPilot, tout est centralisé"
          subtitle="Une seule application pour gérer l'ensemble de votre activité sur le terrain."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
