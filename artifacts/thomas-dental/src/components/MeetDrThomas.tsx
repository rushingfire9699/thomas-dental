import SectionHeader from './SectionHeader';

export default function MeetDrThomas() {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 relative fade-in-up">
            <div className="aspect-[3/4] bg-navy-50 relative overflow-hidden shadow-xl border border-light-blue-gray">
              <img
                src="/dr-chase-thomas-enhanced.jpg"
                alt="Dr. Chase Thomas"
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            {/* Geometric accents */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-sunrise-400" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 border-aqua-400" />
          </div>

          <div className="lg:col-span-7 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <SectionHeader
              title="Dr. Chase Thomas"
              alignment="left"
            />
            
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg mb-10">
              <p>
                Dr. Thomas is committed to providing personalized, thoughtful dental care. His approach centers on understanding each patient&apos;s unique goals and concerns, then delivering treatment recommendations that are individualized, understandable, and appropriate.
              </p>
              <p>
                With a focus on modern techniques and patient education, Dr. Thomas builds long-term relationships with his patients, helping them maintain healthy, beautiful smiles for life.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}