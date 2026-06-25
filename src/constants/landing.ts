export const navLinks = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Pour qui ?', href: '#pour-qui' },
] as const;

export type FeatureIconName =
  | 'users'
  | 'wrench'
  | 'camera'
  | 'file'
  | 'receipt'
  | 'chart';

export type FeatureItem = {
  icon: FeatureIconName;
  title: string;
  description: string;
};

export const problemCards = [
  {
    title: 'Clients dispersés',
    description:
      'Vos contacts sont éparpillés entre le téléphone, WhatsApp et des papiers. Impossible de retrouver une info rapidement.',
  },
  {
    title: 'Interventions désorganisées',
    description:
      'Le planning est flou, les oublis s’accumulent et vous faites des déplacements inutiles.',
  },
  {
    title: 'Devis et factures difficiles à suivre',
    description:
      'Relances oubliées, paiements en retard et suivi compliqué de vos documents.',
  },
] as const;

export const features: FeatureItem[] = [
  {
    icon: 'users',
    title: 'Gestion clients',
    description: 'Ajoutez vos clients, adresses, téléphones et historique en un seul endroit.',
  },
  {
    icon: 'wrench',
    title: 'Interventions',
    description: 'Planifiez vos chantiers et suivez l’avancement de chaque intervention.',
  },
  {
    icon: 'camera',
    title: 'Photos de chantier',
    description: 'Ajoutez des photos avant/après pour chaque intervention.',
  },
  {
    icon: 'file',
    title: 'Rapports PDF',
    description: 'Générez des rapports propres à envoyer à vos clients.',
  },
  {
    icon: 'receipt',
    title: 'Devis et factures',
    description: 'Créez vos documents rapidement depuis l’application.',
  },
  {
    icon: 'chart',
    title: 'Statistiques',
    description: 'Suivez votre chiffre d’affaires, paiements et interventions.',
  },
];

export const audiences = [
  'Paysagistes',
  'Jardiniers',
  'Électriciens',
  'Plombiers',
  'Peintres',
  'Auto-entrepreneurs',
  'Petites entreprises',
] as const;

export const screenshots = [
  { title: 'Tableau de bord', description: 'Vue d’ensemble de votre activité' },
  { title: 'Liste des interventions', description: 'Toutes vos tâches au même endroit' },
  { title: 'Création de rapport PDF', description: 'Photos et notes en quelques clics' },
  { title: 'Planning', description: 'Calendrier hebdomadaire et mensuel' },
] as const;

export const pricingPlans = [
  {
    name: 'Solo',
    price: '9,99 €',
    period: '/mois',
    description: 'Pour les indépendants',
    recommended: false,
    features: [
      'Clients et interventions',
      'Photos de chantier',
      'Rapports PDF simples',
      'Devis et factures',
      '1 utilisateur',
    ],
  },
  {
    name: 'Business',
    price: '24,99 €',
    period: '/mois',
    description: 'Pour les entreprises en croissance',
    recommended: true,
    features: [
      'Tout le plan Solo',
      'Planning avancé',
      'Multi-employés',
      'Statistiques avancées',
      'Rappels et exports',
      'Support prioritaire',
    ],
  },
] as const;

export const faqItems = [
  {
    question: 'Puis-je utiliser GreenPilot sur Android et iPhone ?',
    answer:
      'Oui, GreenPilot est disponible sur iOS et Android. Vous pouvez aussi y accéder depuis un navigateur web.',
  },
  {
    question: 'Est-ce adapté aux auto-entrepreneurs ?',
    answer:
      'Absolument. Le plan Solo est conçu pour les indépendants qui veulent centraliser clients, chantiers et documents.',
  },
  {
    question: 'Puis-je essayer gratuitement ?',
    answer:
      'Oui, vous pouvez commencer gratuitement et tester toutes les fonctionnalités essentielles sans engagement.',
  },
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer:
      'Vos données sont stockées de manière sécurisée et accessibles uniquement depuis votre compte.',
  },
  {
    question: 'Puis-je générer des rapports PDF ?',
    answer:
      'Oui, vous pouvez créer des rapports PDF avec photos et notes directement depuis l’application.',
  },
  {
    question: 'Comment contacter le support ?',
    answer:
      'Notre équipe est disponible par e-mail. Les abonnés Business bénéficient d’un support prioritaire.',
  },
] as const;

export const footerLinks = {
  navigation: [
    { label: 'Fonctionnalités', href: '#fonctionnalites' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Pour qui ?', href: '#pour-qui' },
    { label: 'FAQ', href: '#faq' },
  ],
  legal: [
    { label: 'Politique de confidentialité', href: '#' },
    { label: "Conditions d'utilisation", href: '#' },
    { label: 'Contact', href: '#' },
  ],
} as const;
