import { Link } from 'wouter';
import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

const values = [
  {
    title: 'Personal',
    copy: 'Your goals, questions, and comfort guide the conversation from the very first visit.',
  },
  {
    title: 'Thoughtful',
    copy: 'We take the time to explain your options clearly so you can make decisions with confidence.',
  },
  {
    title: 'Precise',
    copy: 'Modern techniques and careful attention to detail support beautiful, lasting results.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow={practiceInfo.specialty}
        title="Dentistry that feels like home"
        subtitle="Thomas Dental was created for patients who want exceptional dentistry without the rushed, one-size-fits-all experience."
      />

      <section className="px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-md">
            <div className="overflow-hidden border-8 border-white bg-aqua-100 shadow-xl">
              <img
                src="/dr-chase-thomas-bio.jpg"
                alt="Dr. Chase Thomas"
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 -z-0 h-28 w-28 border-b-4 border-r-4 border-sunrise-400" />
          </div>

          <div>
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">
              Meet your dentist
            </p>
            <h2 className="mb-8 font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-5xl">
              Dr. Chase Thomas
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-navy-700">
              <p>
                At Thomas Dental, we believe going to the dentist should feel a little different.
              </p>
              <p>
                Our goal is to create the kind of dental office where you’re greeted by familiar faces, where we know you and your family by name, and where you never feel like just another appointment on the schedule. We want our patients to feel comfortable here — like they’ve found a dental home they can return to for years to come.
              </p>
              <p>
                Dr. Chase Thomas founded Thomas Dental around a simple philosophy: treat every patient with the same care, honesty, and attention you would give your own family.
              </p>
              <p>
                A graduate of the University of Florida College of Dentistry, Dr. Thomas combines a relaxed, down-to-earth approach with a commitment to exceptional clinical care. He believes great dentistry isn’t about rushing through appointments or recommending treatment simply because it can be done. It’s about listening, explaining your options clearly, and taking the time to do things the right way.
              </p>
              <p>
                That commitment to quality carries through everything we do. From preventive and restorative care to cosmetic dentistry and more complex treatment, our focus is on thoughtful dentistry, attention to detail, and results designed to last.
              </p>
              <p>
                Just as important is how you feel while you’re here. We know that dentistry can be stressful for some people, so we’ve created an office that feels calm, welcoming, and personal. Questions are encouraged. Appointments aren’t rushed. And when treatment is needed, we want you to understand exactly what we’re doing and why.
              </p>
              <p>
                Thomas Dental is proud to be an independent, locally owned practice serving Boca Raton and the surrounding community. We’re not trying to be the biggest dental office in South Florida. We simply want to be the office you trust — and the one you feel comfortable recommending to your family and friends.
              </p>
              <p>
                Come in, get comfortable, and make yourself at home. We’d love to welcome you to the Thomas Dental family.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex bg-sunrise-400 px-8 py-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-navy-950 shadow-[4px_4px_0px_0px_rgba(11,25,44,1)] transition hover:translate-x-1 hover:translate-y-1 hover:bg-sunrise-300 hover:shadow-[2px_2px_0px_0px_rgba(11,25,44,1)]"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">
              The Thomas Dental approach
            </p>
            <h2 className="font-display text-3xl font-bold uppercase tracking-wider text-navy-950 sm:text-5xl">
              Care that feels like you
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-aqua-400 bg-cream p-8 sm:p-10">
                <span className="block h-3 w-3 rounded-full bg-sunrise-400" aria-hidden="true" />
                <h3 className="mb-4 mt-8 font-display text-xl font-bold uppercase tracking-wider text-navy-950">{value.title}</h3>
                <p className="font-light leading-relaxed text-navy-700">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}