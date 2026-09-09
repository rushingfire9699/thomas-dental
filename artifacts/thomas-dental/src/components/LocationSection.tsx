import PracticeMap from './PracticeMap';
import { practiceInfo } from '@/lib/practice-info';

export default function LocationSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-950 mb-8 uppercase tracking-wider">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-sunrise-400 mb-8" />
            
            <p className="text-navy-700 font-sans font-light text-lg mb-10 leading-relaxed">
              Conveniently located in Boca Raton, our practice is designed to be an oasis of calm. Ample parking is available for all patients.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 border-l-2 border-aqua-400 pl-4">
                <svg className="w-6 h-6 text-navy-950 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-display font-bold text-navy-950 uppercase tracking-widest text-sm mb-1">Address</h4>
                  <p className="text-navy-600 font-sans text-sm leading-relaxed">
                    {practiceInfo.addressLine1}<br />
                    {practiceInfo.addressLine2}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-l-2 border-aqua-400 pl-4">
                <svg className="w-6 h-6 text-navy-950 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-display font-bold text-navy-950 uppercase tracking-widest text-sm mb-1">Contact</h4>
                  <p className="text-navy-600 font-sans text-sm leading-relaxed">
                    <a className="hover:text-navy-950" href={practiceInfo.phoneHref}>{practiceInfo.phoneDisplay}</a><br />
                    <a className="hover:text-navy-950" href={`mailto:${practiceInfo.email}`}>{practiceInfo.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-navy-100 p-2 shadow-2xl">
              <PracticeMap />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}