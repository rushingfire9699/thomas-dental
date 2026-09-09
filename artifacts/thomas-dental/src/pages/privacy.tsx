import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

export default function PrivacyPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Thomas Dental"
        title="Privacy policy"
        subtitle="A straightforward overview of how this informational website handles your privacy."
      />
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="space-y-10 text-lg font-light leading-relaxed text-navy-700">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Information you choose to share</h2>
            <p>This website provides phone, email, and appointment-request links. If you contact Thomas Dental by phone or email, the information you provide is used to respond to your request and coordinate care.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Website activity</h2>
            <p>Like most websites, basic technical information may be processed by the hosting and map services used to deliver pages, such as browser type, device information, and pages requested. The embedded map may also be subject to Google&apos;s privacy practices.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Questions</h2>
            <p>If you have a question about privacy or how your information is handled, contact the practice at <a className="text-aqua-700 underline underline-offset-4" href={`mailto:${practiceInfo.email}`}>{practiceInfo.email}</a> or {practiceInfo.phoneDisplay}.</p>
          </section>
        </div>
      </article>
    </div>
  );
}