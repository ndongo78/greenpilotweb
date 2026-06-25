import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/common/Container';
import { appName, appTagline } from '@/src/constants/brand';
import { footerLinks } from '@/src/constants/landing';

export function Footer() {
  return (
    <footer className="bg-green-900 text-green-50">
      <Container as="footer" className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={`${appName} logo`}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold text-white">{appName}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-green-100/80">
              {appTagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-green-200">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-green-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-green-200">
              Légal
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-green-100/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-green-800 pt-6 text-sm text-green-200/70">
          © {new Date().getFullYear()} {appName}. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
