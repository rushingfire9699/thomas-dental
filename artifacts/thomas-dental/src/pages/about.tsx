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
        title="A calmer kind of dental care"
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
                I earned my Doctor of Dental Medicine degree from the University of Florida College of Dentistry in 2017. As a Florida native, I grew up in Coral Springs and attended Marjory Stoneman Douglas High School. For the past nine years, I have had the privilege of practicing across South Florida and caring for the people who make this community home. I have a deep passion for dentistry, and through hands-on continuing education and specialized training programs, I have developed an extensive skill set to better treat and care for my patients.
              </p>
              <p>
                I love Florida living—the beaches, entertainment, and dining that make this place so special. My wife and I also love to travel and spend quality time with our nieces and nephews.
              </p>
              <p>
                I founded Thomas Dental because I wanted to offer patients a more transparent, thoughtful, and relaxed way to approach dentistry. Our practice is built around clear communication, the best labs and materials, and the latest technologies, all brought together to help you feel informed, comfortable, and confident in your care. Thomas Dental was founded on trust, and here, you are part of the Thomas family.
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