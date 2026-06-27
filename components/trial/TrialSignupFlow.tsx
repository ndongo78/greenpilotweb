'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { z } from 'zod';

type PlanName = 'Solo' | 'Business';
type SignupFormValues = z.infer<typeof signupSchema>;
type SignupErrors = Partial<Record<keyof SignupFormValues, string>>;

const signupSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, 'Le prénom doit contenir au moins 2 caractères.'),
  lastName: z
    .string()
    .trim()
    .min(2, 'Le nom doit contenir au moins 2 caractères.'),
  email: z
    .string()
    .trim()
    .email('Veuillez saisir une adresse e-mail valide.'),
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères.')
    .regex(/[A-Z]/, 'Ajoutez au moins une majuscule.')
    .regex(/[0-9]/, 'Ajoutez au moins un chiffre.'),
  plan: z.enum(['Solo', 'Business']),
});

const planFeatures = {
  Solo: [
    'Clients et interventions illimités',
    'Photos de chantier',
    'Rapports PDF simples',
    'Devis et factures',
    '1 utilisateur',
  ],
  Business: [
    'Employés illimités',
    "Planning d'équipe",
    'Rapports avancés',
    'Export comptable',
  ],
} as const;

const benefits = [
  {
    icon: 'leaf',
    title: 'Gagnez du temps',
    text: 'Automatisez vos tâches et concentrez-vous sur vos chantiers.',
  },
  {
    icon: 'users',
    title: 'Suivi simplifié',
    text: 'Clients, interventions, paiements : tout est centralisé et à jour.',
  },
  {
    icon: 'document',
    title: 'Devis et factures',
    text: 'Créez vos devis et factures en quelques clics et soyez payé plus vite.',
  },
  {
    icon: 'chart',
    title: 'Développez votre activité',
    text: 'Des rapports clairs pour prendre les meilleures décisions.',
  },
] as const;

const guarantees = [
  { icon: 'calendar', title: 'Essai gratuit 14 jours', text: 'Sans engagement' },
  { icon: 'card', title: 'Aucune carte bancaire', text: 'Aucun paiement requis' },
  { icon: 'shield', title: 'Annulation facile', text: 'À tout moment' },
] as const;

export function TrialSignupFlow() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get('plan');
  const [selectedPlan, setSelectedPlan] = useState<PlanName>(
    planParam === 'business' ? 'Business' : 'Solo',
  );
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState<Omit<SignupFormValues, 'plan'>>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof Omit<SignupFormValues, 'plan'>, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = signupSchema.safeParse({
      ...formValues,
      plan: selectedPlan,
    });

    if (!result.success) {
      const nextErrors: SignupErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof SignupFormValues | undefined;
        if (field) {
          nextErrors[field] = issue.message;
        }
      });
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f5ee] text-[#052f22]">
      <div className="mx-auto grid min-h-screen max-w-[1520px] lg:grid-cols-[0.95fr_1.45fr]">
        <section className="relative flex flex-col px-6 py-8 sm:px-10 lg:px-12">
          <Link href="/" className="inline-flex w-fit items-center gap-3">
            <Image src="/logo.png" alt="GreenPilot" width={54} height={54} className="rounded-xl" priority />
            <span className="text-3xl font-black tracking-tight text-green-900">GreenPilot</span>
          </Link>

          <div className="relative z-10 mt-16 max-w-xl">
            <h1 className="text-4xl font-black leading-tight tracking-normal text-[#053323] sm:text-5xl">
              L&apos;outil tout-en-un pour les pros du paysage
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Gérez vos clients, interventions, devis, factures, photos de chantier et bien plus encore.
            </p>

            <div className="mt-12 space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="grid grid-cols-[64px_1fr] gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <Icon name={benefit.icon} className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#052f22]">{benefit.title}</h2>
                    <p className="mt-2 text-lg leading-7 text-gray-600">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-full overflow-hidden">
            <div className="absolute bottom-[-120px] left-10 h-64 w-[460px] rounded-[50%] bg-green-100/70" />
            <div className="absolute bottom-[-90px] left-36 h-56 w-[520px] rounded-[50%] bg-green-100/50" />
            <div className="absolute bottom-0 left-0 flex h-52 w-36 items-end text-green-800/80">
              <LeafCluster />
            </div>
          </div>

          <div className="relative z-10 mt-14 max-w-sm rounded-2xl bg-white/80 p-7 shadow-lg shadow-green-950/5 backdrop-blur">
            <div className="flex gap-1 text-2xl text-yellow-400" aria-label="5 étoiles">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="mt-4 leading-6 text-gray-600">
              Adopté par des centaines de paysagistes et artisans en France.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-8 sm:px-8 lg:px-12">
          <div className="w-full max-w-4xl rounded-3xl border border-white/80 bg-white/92 p-6 shadow-2xl shadow-green-950/10 sm:p-10 lg:p-12">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
                <Icon name="user" className="h-11 w-11" />
              </div>
              <h2 className="mt-7 text-3xl font-black tracking-normal text-[#052f22] sm:text-4xl">
                Créer votre compte GreenPilot
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Commencez votre essai gratuit de 14 jours, sans carte bancaire.
              </p>
            </div>

            <DividerLabel label="Vos informations" />

            <form className="mt-6" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Prénom"
                  placeholder="Ex : Dahirou"
                  value={formValues.firstName}
                  error={errors.firstName}
                  onChange={(value) => updateField('firstName', value)}
                />
                <Field
                  label="Nom"
                  placeholder="Ex : Ndongo"
                  value={formValues.lastName}
                  error={errors.lastName}
                  onChange={(value) => updateField('lastName', value)}
                />
              </div>
              <div className="mt-5">
                <Field
                  label="E-mail"
                  placeholder="Ex : vous@email.com"
                  icon="mail"
                  type="email"
                  value={formValues.email}
                  error={errors.email}
                  onChange={(value) => updateField('email', value)}
                />
              </div>
              <div className="mt-5">
                <Field
                  label="Mot de passe"
                  placeholder="••••••••••••"
                  icon="lock"
                  rightIcon={showPassword ? 'eyeOff' : 'eye'}
                  type={showPassword ? 'text' : 'password'}
                  value={formValues.password}
                  error={errors.password}
                  onChange={(value) => updateField('password', value)}
                  onRightIconClick={() => setShowPassword((current) => !current)}
                  rightIconLabel={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                  help="Minimum 8 caractères avec une majuscule et un chiffre."
                />
              </div>

              <DividerLabel label="Choisissez votre formule" className="mt-8" />

              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <PlanCard
                  name="Solo"
                  price="9,99 €"
                  subtitle="Pour les professionnels qui travaillent seuls"
                  selected={selectedPlan === 'Solo'}
                  onSelect={() => {
                    setSelectedPlan('Solo');
                    setSubmitted(false);
                  }}
                />
                <PlanCard
                  name="Business"
                  price="24,99 €"
                  subtitle="Pour les équipes et entreprises"
                  selected={selectedPlan === 'Business'}
                  onSelect={() => {
                    setSelectedPlan('Business');
                    setSubmitted(false);
                  }}
                />
              </div>

              {submitted ? (
                <p className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-800">
                  Formulaire validé. Votre compte GreenPilot peut être créé avec le plan {selectedPlan}.
                </p>
              ) : null}

              <button
                type="submit"
                className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-green-700 text-xl font-black text-white shadow-lg shadow-green-700/20 transition hover:bg-green-800"
              >
                Créer mon compte
                <Icon name="arrowRight" className="h-7 w-7" />
              </button>
            </form>

            <p className="mt-5 text-center text-gray-600">
              Déjà un compte ?{' '}
              <a href="#connexion" className="font-black text-green-700 hover:text-green-800">
                Se connecter
              </a>
            </p>

            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="grid gap-5 sm:grid-cols-3">
                {guarantees.map((guarantee) => (
                  <div key={guarantee.title} className="flex items-center gap-4">
                    <Icon name={guarantee.icon} className="h-8 w-8 shrink-0 text-green-700" />
                    <div>
                      <p className="font-black text-[#052f22]">{guarantee.title}</p>
                      <p className="mt-1 text-sm text-gray-600">{guarantee.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function DividerLabel({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className || 'mt-8'}`}>
      <span className="h-px flex-1 bg-gray-200" />
      <span className="text-base font-black text-[#052f22]">{label}</span>
      <span className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

function Field({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  icon,
  rightIcon,
  rightIconLabel,
  onRightIconClick,
  help,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  icon?: string;
  rightIcon?: string;
  rightIconLabel?: string;
  onRightIconClick?: () => void;
  help?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-bold text-[#052f22]">{label}</span>
      <span
        className={`flex h-12 items-center rounded-lg border bg-white px-4 transition focus-within:ring-2 ${
          error
            ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-100'
            : 'border-gray-300 focus-within:border-green-700 focus-within:ring-green-100'
        }`}
      >
        {icon ? <Icon name={icon} className="mr-3 h-5 w-5 shrink-0 text-gray-500" /> : null}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={Boolean(error)}
          className="min-w-0 flex-1 bg-transparent text-base text-gray-900 outline-none placeholder:text-gray-400"
        />
        {rightIcon ? (
          <button
            type="button"
            onClick={onRightIconClick}
            aria-label={rightIconLabel}
            className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-500 transition hover:bg-gray-100 hover:text-green-700"
          >
            <Icon name={rightIcon} className="h-5 w-5" />
          </button>
        ) : null}
      </span>
      {error ? (
        <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span>
      ) : help ? (
        <span className="mt-2 block text-sm text-gray-500">{help}</span>
      ) : null}
    </label>
  );
}

function PlanCard({
  name,
  price,
  subtitle,
  selected,
  onSelect,
}: {
  name: PlanName;
  price: string;
  subtitle: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative rounded-xl border p-6 text-left transition ${
        selected ? 'border-green-700 ring-1 ring-green-700' : 'border-gray-200 hover:border-green-300'
      }`}
    >
      <span
        className={`absolute right-5 top-5 h-6 w-6 rounded-full border ${
          selected ? 'border-green-700 bg-green-700 ring-4 ring-green-100' : 'border-gray-400'
        }`}
      />
      <div className="flex gap-5 pr-9">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
          <Icon name={name === 'Solo' ? 'user' : 'team'} className="h-8 w-8" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-[#052f22]">{name}</h3>
          <p className="mt-1 leading-5 text-gray-600">{subtitle}</p>
          <p className="mt-5">
            <span className="text-2xl font-black text-green-700">{price}</span>
            <span className="ml-1 text-gray-600">/ mois</span>
          </p>
        </div>
      </div>
      {name === 'Business' ? <p className="mt-5 text-gray-700">Tout le plan Solo, plus :</p> : null}
      <ul className="mt-4 space-y-3 text-sm text-gray-700">
        {planFeatures[name].map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-green-700" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}

function LeafCluster() {
  return (
    <svg viewBox="0 0 160 220" className="h-full w-full" fill="currentColor" aria-hidden="true">
      <path d="M40 215c3-47 16-92 46-130" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M28 168C7 142 12 117 35 95c17 25 16 52-7 73Z" />
      <path d="M52 139c-4-33 13-54 43-64 6 34-9 57-43 64Z" />
      <path d="M66 105c6-32 28-48 62-47-4 34-25 51-62 47Z" />
      <path d="M23 210C5 187 5 164 23 143c16 23 16 46 0 67Z" />
      <path d="M72 185c8-31 31-45 63-42-7 32-29 47-63 42Z" />
      <path d="M92 152c18-25 43-32 72-20-18 27-44 34-72 20Z" />
      <path d="M46 196c-24-10-34-29-30-55 25 9 36 29 30 55Z" />
    </svg>
  );
}

function Icon({ name, className = '' }: { name: string; className?: string }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  switch (name) {
    case 'arrowRight':
      return <svg {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case 'calendar':
      return <svg {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></svg>;
    case 'card':
      return <svg {...common}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /><path d="M18 15h.01" /><path d="M22 22 16 16" /><path d="m16 22 6-6" /></svg>;
    case 'chart':
      return <svg {...common}><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 17v-6" /><path d="M12 17V8" /><path d="M16 17V4" /></svg>;
    case 'check':
      return <svg {...common}><path d="m20 6-11 11-5-5" /></svg>;
    case 'document':
      return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>;
    case 'eye':
      return <svg {...common}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>;
    case 'eyeOff':
      return <svg {...common}><path d="m2 2 20 20" /><path d="M6.7 6.7C3.8 8.7 2 12 2 12s3 7 10 7c1.7 0 3.2-.4 4.5-1" /><path d="M19.4 15.4C21.1 13.8 22 12 22 12s-3-7-10-7c-.8 0-1.6.1-2.3.3" /><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>;
    case 'leaf':
      return <svg {...common}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 12-9h4v4c0 8-4 12-9 12Z" /><path d="M4 20c4-7 8-10 15-12" /></svg>;
    case 'lock':
      return <svg {...common}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
    case 'mail':
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case 'shield':
      return <svg {...common}><path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3Z" /><path d="m9 12 2 2 4-4" /></svg>;
    case 'team':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M20 21v-2a4 4 0 0 0-2-3.46" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case 'user':
      return <svg {...common}><path d="M19 21a7 7 0 0 0-14 0" /><circle cx="12" cy="7" r="4" /></svg>;
    case 'users':
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="10" /></svg>;
  }
}
