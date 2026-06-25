import Image from 'next/image';
import Link from 'next/link';
import { AppButton } from '@/components/common/AppButton';
import { Container } from '@/components/common/Container';
import { appName } from '@/src/constants/brand';
import { navLinks } from '@/src/constants/landing';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <Container as="nav" className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={`${appName} logo`}
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-bold text-gray-900">{appName}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#connexion"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-green-700"
          >
            Connexion
          </a>
        </div>

        <AppButton href="#tarifs" size="sm" className="hidden sm:inline-flex">
          Essayer gratuitement
        </AppButton>
      </Container>
    </header>
  );
}
