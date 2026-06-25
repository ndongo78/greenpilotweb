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

        <details className="group relative md:hidden">
          <summary
            aria-label="Ouvrir le menu"
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-900 transition-colors hover:border-green-200 hover:bg-green-50 [&::-webkit-details-marker]:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 rounded-full bg-current transition-transform group-open:translate-y-2 group-open:rotate-45" />
              <span className="h-0.5 rounded-full bg-current transition-opacity group-open:opacity-0" />
              <span className="h-0.5 rounded-full bg-current transition-transform group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>

          <div className="absolute right-0 top-12 w-[min(82vw,20rem)] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xl shadow-gray-900/10">
            <div className="flex flex-col py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#connexion"
                className="px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-700"
              >
                Connexion
              </a>
              <a
                href="#tarifs"
                className="mx-4 my-2 inline-flex justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700 sm:hidden"
              >
                Essayer gratuitement
              </a>
            </div>
          </div>
        </details>
      </Container>
    </header>
  );
}
