import { Link } from "wouter";
import PracticeMap from "@/components/PracticeMap";
import { practiceInfo } from "@/lib/practice-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-off-white pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="mb-4 font-display text-xs font-bold uppercase tracking-[0.25em] text-aqua-600">
          {practiceInfo.specialty}
        </p>
        <h1 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-wider text-navy-950 mb-6">
          Contact Thomas Dental
        </h1>
        <p className="max-w-2xl text-xl text-navy-700 mb-14 font-light">
          {practiceInfo.tagline}
        </p>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-8 bg-navy-950 p-8 text-white sm:p-10">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Phone</p>
              <a className="text-xl hover:text-aqua-400" href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Email</p>
              <a className="break-all text-lg hover:text-aqua-400" href={`mailto:${practiceInfo.email}`}>{practiceInfo.email}</a>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Address</p>
              <p className="text-lg leading-relaxed">{practiceInfo.addressLine1}<br />{practiceInfo.addressLine2}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Website</p>
              <a className="text-lg hover:text-aqua-400" href={practiceInfo.websiteHref} target="_blank" rel="noopener noreferrer">{practiceInfo.website}</a>
            </div>
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-sunrise-400">Office Hours</p>
              <dl className="space-y-2 text-lg leading-relaxed">
                {practiceInfo.officeHours.map(([day, hours]) => (
                  <div key={day} className="flex gap-4">
                    <dt className="w-24 text-navy-200">{day}</dt>
                    <dd>{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Link href="/" className="inline-flex border-b border-aqua-400 pb-1 text-xs font-bold uppercase tracking-[0.2em] text-aqua-400 hover:text-white">
              Back to Home
            </Link>
          </div>
          <PracticeMap />
        </div>
      </div>
    </div>
  );
}
