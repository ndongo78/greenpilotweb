import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { Accordion } from '@/components/ui/Accordion';
import { faqItems } from '@/src/constants/landing';

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <SectionHeading title="Questions fréquentes" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Accordion items={faqItems.slice(0, 3)} />
          <Accordion items={faqItems.slice(3)} />
        </div>
      </Container>
    </Section>
  );
}
