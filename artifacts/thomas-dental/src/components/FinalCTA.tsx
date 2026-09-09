import Button from './Button';
import { practiceInfo } from '@/lib/practice-info';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-aqua-400 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
               <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
               </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
         </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center fade-in-up">
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-navy-950 mb-8 uppercase tracking-wider">
          Experience the Difference
        </h2>
        <p className="text-lg sm:text-xl text-navy-900 mb-12 font-sans font-light max-w-2xl mx-auto leading-relaxed">
          Schedule your comprehensive consultation and discover a new standard of dental care.
        </p>
        <p className="mb-10 font-display text-xs font-bold uppercase tracking-[0.2em] text-navy-800">
          Complimentary second opinions are always welcome.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button href="/contact" variant="primary" size="lg">
            REQUEST APPOINTMENT
          </Button>
          <Button href={practiceInfo.phoneHref} variant="outline" size="lg" external>
            CALL {practiceInfo.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}