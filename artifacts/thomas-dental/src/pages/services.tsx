import { Link } from 'wouter';
import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

const services = [
  {
    number: '01',
    title: 'Preventive Care',
    copy: 'Regular exams, professional cleanings, and personalized guidance to keep your smile healthy and feeling its best.',
  },
  {
    number: '02',
    title: 'Restorative Dentistry',
    copy: 'Thoughtful care for damaged or missing teeth, including tooth-colored fillings, crowns, and bridges designed for comfort and function.',
  },
  {
    number: '03',
    title: 'Cosmetic Dentistry',
    copy: 'Smile-enhancing options such as professional whitening, veneers, and comprehensive smile planning tailored to you.',
  },
  {
    number: '04',
    title: 'Comprehensive Care',
    copy: 'A connected view of your oral health, with recommendations that are conservative, transparent, and made around your long-term goals.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={practiceInfo.doctor}
        title="Care designed around your smile"
        subtitle="From a fresh start to a complete smile transformation, our approach is personal, precise, and comfortably paced."
      />

      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">Our services</p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-5xl">A complete menu of care</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="group border border-aqua-200 bg-white p-8 transition hover:-translate-y-1 hover:border-aqua-400 hover:shadow-xl sm:p-10">
                <span className="font-display text-sm font-bold tracking-[0.25em] text-sunrise-500">{service.number}</span>
                <h3 className="mb-4 mt-10 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">{service.title}</h3>
                <p className="max-w-xl font-light leading-relaxed text-navy-700">{service.copy}</p>
                <div className="mt-8 h-1 w-12 bg-aqua-400 transition-all group-hover:w-20" />
              </article>
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