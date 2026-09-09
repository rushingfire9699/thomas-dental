import { Link } from 'wouter';
import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

interface Procedure {
  number: string;
  title: string;
  summary: string;
  explanation: string;
}

const procedures: Procedure[] = [
  {
    number: '01',
    title: 'Normal Cleanings',
    summary: 'A fresh, comfortable reset for your smile.',
    explanation: 'A routine professional cleaning gently removes everyday buildup, polishes your teeth, and gives us a chance to check in on your oral health. It is an easy way to keep your smile feeling clean and supported between visits.',
  },
  {
    number: '02',
    title: 'Deep Cleanings',
    summary: 'Focused support for healthier gums.',
    explanation: 'Sometimes your gums benefit from a more focused cleaning. This visit carefully removes buildup around the gumline and in harder-to-reach areas, helping create a healthier environment for your smile.',
  },
  {
    number: '03',
    title: 'Fillings',
    summary: 'Small repairs that help teeth stay strong.',
    explanation: 'When a tooth needs a little support, a tooth-colored filling can restore its shape and function. We gently prepare the area, place the custom-shaded material, and smooth it so your bite feels natural.',
  },
  {
    number: '04',
    title: 'Crowns',
    summary: 'A custom layer of protection for a tooth.',
    explanation: 'A crown is a carefully made restoration that fits over a tooth needing additional strength or coverage. It is shaped to work comfortably with your bite and blend naturally with your smile.',
  },
  {
    number: '05',
    title: 'Root Canals',
    summary: 'Comfort-focused care that preserves a natural tooth.',
    explanation: 'When the inner part of a tooth is irritated and cannot recover on its own, this treatment gently removes the affected tissue, cleans the inside, and seals the tooth so it can continue to function.',
  },
  {
    number: '06',
    title: 'Implants',
    summary: 'A stable, natural-looking way to replace a tooth.',
    explanation: 'An implant replaces the root of a missing tooth and can support a custom crown. Treatment is planned in stages around your health, comfort, and long-term goals, with clear guidance at every step.',
  },
  {
    number: '07',
    title: 'Oral Surgery',
    summary: 'Thoughtful surgical care when extra support is needed.',
    explanation: 'Some smiles benefit from a minor surgical procedure involving a tooth or nearby tissue. We explain the reason for care, what to expect, and how we will support a smooth recovery before moving forward.',
  },
  {
    number: '08',
    title: 'Clear Aligners',
    summary: 'A subtle way to guide your smile into alignment.',
    explanation: 'Clear aligners use a series of removable trays to gradually guide teeth toward a more comfortable, balanced position. Your plan is designed around your smile and your everyday routine.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={practiceInfo.doctor}
        title="Care designed around your smile"
        subtitle="Explore common procedure types at Thomas Dental. Every recommendation starts with a calm conversation and a plan made for you."
      />

      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">Our services</p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-5xl">Take a closer look</h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-navy-700">
              Select a procedure below to see a simple overview. It is a starting point—not a diagnosis—and our team is always happy to answer questions in plain language.
            </p>
          </div>

          <div className="space-y-4">
            {procedures.map((procedure, index) => (
              <details
                key={procedure.title}
                open={index === 0}
                className="group overflow-hidden border border-aqua-200 bg-white transition-shadow open:shadow-xl"
              >
                <summary className="flex cursor-pointer list-none items-center gap-5 px-6 py-6 marker:hidden sm:px-8 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-sunrise-500">{procedure.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg font-bold uppercase tracking-wider text-navy-950 sm:text-xl">{procedure.title}</span>
                    <span className="mt-1 block text-sm font-light text-navy-600">{procedure.summary}</span>
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-aqua-400 text-aqua-700 transition group-open:rotate-180" aria-hidden="true">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t border-aqua-100 px-6 pb-8 pt-7 sm:px-8">
                  <p className="max-w-3xl text-lg font-light leading-relaxed text-navy-700">{procedure.explanation}</p>
                  <Link href="/contact" className="mt-7 inline-flex font-display text-xs font-bold uppercase tracking-[0.2em] text-aqua-700 underline decoration-sunrise-400 decoration-2 underline-offset-8 transition hover:text-navy-950">
                    Talk through your options
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aqua-100 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-700">Not sure where to begin?</p>
            <h2 className="max-w-2xl font-display text-2xl font-bold uppercase tracking-wider text-navy-950 sm:text-4xl">Let&apos;s talk about what you need.</h2>
          </div>
          <Link href="/contact" className="shrink-0 bg-navy-950 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-navy-800">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}