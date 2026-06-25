import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { audiences } from '@/src/constants/landing';

const audienceIcons = ['🌿', '🪴', '⚡', '🔧', '🎨', '👤', '🏢'] as const;

export function AudienceSection() {
  return (
    <Section id="pour-qui" background="muted">
      <Container>
        <SectionHeading
          title="Conçu pour les artisans et professionnels du terrain"
          subtitle="GreenPilot s'adapte à votre métier, que vous soyez seul ou en équipe."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {audiences.map((audience, index) => (
            <div
              key={audience}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm"
            >
              <span className="text-3xl" aria-hidden="true">
                {audienceIcons[index]}
              </span>
              <span className="mt-3 text-sm font-medium text-gray-800">{audience}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
