import { AudienceSection } from '@/components/landing/AudienceSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { PricingSection } from '@/components/landing/PricingSection';
import { ProblemSection } from '@/components/landing/ProblemSection';
import { ScreenshotsSection } from '@/components/landing/ScreenshotsSection';
import { TestimonialSection } from '@/components/landing/TestimonialSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <AudienceSection />
        <ScreenshotsSection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
