import PageHero from '@/components/PageHero';
import { practiceInfo } from '@/lib/practice-info';

export default function AccessibilityPage() {
  return (
    <div className="bg-cream">
      <PageHero
        eyebrow="Thomas Dental"
        title="Accessibility"
        subtitle="We want every patient and visitor to be able to use this website with confidence."
      />
      <article className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="space-y-10 text-lg font-light leading-relaxed text-navy-700">
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Our commitment</h2>
            <p>Thomas Dental is committed to making this website usable for people with different abilities. We work toward clear structure, readable contrast, keyboard-friendly interactions, descriptive link text, and meaningful alternative text for images.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Need assistance?</h2>
            <p>If something on the site is difficult to use, please tell us. Contact {practiceInfo.phoneDisplay} or <a className="text-aqua-700 underline underline-offset-4" href={`mailto:${practiceInfo.email}`}>{practiceInfo.email}</a> and describe the page or task where you need help.</p>
          </section>
          <section>
            <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wider text-navy-950">Ongoing improvement</h2>
            <p>Accessibility is an ongoing process. Feedback helps us identify barriers and improve the experience for current and future patients.</p>
          </section>
        </div>
      </article>
    </div>
  );
}