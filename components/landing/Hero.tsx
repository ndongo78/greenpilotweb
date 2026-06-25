import Image from 'next/image';
import { AppButton } from '@/components/common/AppButton';
import { Container } from '@/components/common/Container';
import { appDescription, appTagline } from '@/src/constants/brand';

export function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-green-50 to-white pb-16 pt-12 sm:pb-20 sm:pt-16">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            L&apos;application simple pour{' '}
            <span className="text-green-700">gérer vos chantiers, clients et interventions</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{appDescription}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AppButton href="#tarifs" size="lg">
              Commencer gratuitement
            </AppButton>
            <AppButton href="#fonctionnalites" variant="secondary" size="lg">
              Voir les fonctionnalités
            </AppButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 rounded-3xl bg-green-200/40 blur-2xl" aria-hidden="true" />
          <Image
            src="/brand_app.png"
            alt={`${appTagline} — aperçu de l'application`}
            width={800}
            height={600}
            className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-green-900/10"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </Container>
    </section>
  );
}
