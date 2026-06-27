import Image from 'next/image';
import { Container } from '@/components/common/Container';
import { Section, SectionHeading } from '@/components/common/Section';
import { screenshots } from '@/src/constants/landing';

const screenshotImages: Record<number, string> = {
  0: '/screens/c2.png',
  1: '/screens/c4.png',
  2: '/screens/c5.png',
  3: '/screens/c3.png',
};

function ScreenshotPlaceholder({ variant }: { variant: number }) {
  const variants = [
    { bars: [60, 40, 80], rows: 3 },
    { bars: [70, 50, 90, 40], rows: 4 },
    { bars: [50, 70], rows: 2 },
    { bars: [30, 50, 70, 40, 60], rows: 5 },
  ];
  const config = variants[variant % variants.length];

  return (
    <div className="flex h-full flex-col bg-gray-50 p-4">
      <div className="mb-4 flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {config.bars.slice(0, 3).map((width, i) => (
          <div
            key={i}
            className="rounded-lg bg-green-100 p-3"
            style={{ opacity: 0.5 + i * 0.2 }}
          >
            <div className="h-2 rounded bg-green-600" style={{ width: `${width}%` }} />
            <div className="mt-2 h-2 w-1/2 rounded bg-green-300" />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2">
        {Array.from({ length: config.rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm">
            <div className="h-8 w-8 rounded-lg bg-green-200" />
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-3/4 rounded bg-gray-200" />
              <div className="h-2 w-1/2 rounded bg-gray-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScreenshotsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading
          title="Une application pensée pour le terrain"
          subtitle="Interface claire, rapide et accessible depuis votre smartphone ou ordinateur."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {screenshots.map((screenshot, index) => (
            <figure key={screenshot.title}>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="aspect-[4/3]">
                  {screenshotImages[index] ? (
                    <Image
                      src={screenshotImages[index]}
                      alt={`${screenshot.title} — aperçu GreenPilot`}
                      width={1586}
                      height={992}
                      className="h-full w-full bg-gray-50 object-contain"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  ) : (
                    <ScreenshotPlaceholder variant={index} />
                  )}
                </div>
              </div>
              <figcaption className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">{screenshot.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{screenshot.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
