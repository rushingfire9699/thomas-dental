import { Link } from 'wouter';
import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

const steps = [
  ['Say hello', 'Reach out by phone or email and tell us a little about what brings you in. We will help find a comfortable time to visit.'],
  ['Meet with Dr. Thomas', 'Your first visit is a conversation as much as an exam. We will listen, learn your goals, and get to know your smile.'],
  ['Explore your options', 'If treatment is recommended, we will explain the choices, timing, and next steps in clear, everyday language.'],
  ['Leave with a plan', 'You will know what comes next and have space to make decisions at your own pace—without pressure.'],
];

export default function NewPatientsPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Your first visit"
        title="A warm welcome from the start"
        subtitle="New patient visits at Thomas Dental are designed to feel easy, informative, and centered around you."
      />

      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">The process</p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-5xl">Your visit, step by step</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map(([title, copy]) => (
              <article key={title} className="border-l-4 border-sunrise-400 bg-white p-8 sm:p-10">
                <span className="block h-3 w-3 rounded-full bg-aqua-400 shadow-[0_0_0_6px_rgba(90,176,198,0.12)]" aria-hidden="true" />
                <h3 className="mb-4 mt-8 font-display text-xl font-bold uppercase tracking-wider text-navy-950">{title}</h3>
                <p className="font-light leading-relaxed text-navy-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-300">Before you arrive</p>
            <h2 className="mb-6 font-display text-3xl font-bold uppercase tracking-wider sm:text-4xl">Bring your questions.</h2>
            <p className="max-w-xl font-light leading-relaxed text-navy-100">
              The most helpful thing you can bring is an honest sense of what you want from your dental care. We will take it from there.
            </p>
          </div>
          <div className="border border-navy-700 p-8">
            <p className="mb-5 font-display text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Contact the office</p>
            <a className="block text-xl hover:text-aqua-300" href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
            <a className="mt-3 block text-navy-100 hover:text-aqua-300" href={`mailto:${practiceInfo.email}`}>{practiceInfo.email}</a>
            <p className="mt-6 text-sm leading-relaxed text-navy-200">{practiceInfo.addressLine1}<br />{practiceInfo.addressLine2}</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center sm:px-8 lg:px-12">
        <Link href="/contact" className="inline-flex bg-sunrise-400 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-navy-950 shadow-[4px_4px_0px_0px_rgba(11,25,44,1)] transition hover:translate-x-1 hover:translate-y-1 hover:bg-sunrise-300 hover:shadow-[2px_2px_0px_0px_rgba(11,25,44,1)]">
          Request Your Appointment
        </Link>
      </section>
    </div>
  );
}