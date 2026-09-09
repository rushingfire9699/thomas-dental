import SectionHeader from './SectionHeader';

export default function BrandIntroduction() {
  return (
    <section className="py-24 sm:py-32 bg-cream overflow-hidden relative">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-aqua-100/45 -skew-x-12 translate-x-20 z-0 pointer-events-none" />
      <div className="absolute -left-24 bottom-8 h-48 w-48 rounded-full border border-sunrise-400/30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="fade-in-up">
            <SectionHeader
              title="Your visit, with a little more ease"
              alignment="left"
            />
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg">
              <p>
                A dental visit can feel calm, personal, and even a little restorative. At Thomas Dental, every detail is designed to help you feel comfortable, heard, and confident in your care.
              </p>
              <p>
                Our Boca Raton practice pairs thoughtful conversation with modern dentistry, creating an experience that feels less rushed and more like a breath of fresh air.
              </p>
              <p>
                From preventive care to cosmetic and restorative treatments, our approach is clear, conservative, and tailored to your smile.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
               <div className="w-16 h-16 rounded-full bg-navy-50 flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-sunrise-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
               </div>
               <div>
                 <h4 className="font-display font-bold text-navy-950 uppercase tracking-widest text-sm mb-1">Our Promise</h4>
                  <p className="text-navy-600 font-sans text-sm">A brighter visit from the moment you arrive.</p>
               </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Image Placeholder with brand styling */}
            <div className="aspect-[4/5] bg-navy-900 relative shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-75" />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/75 via-navy-950/10 to-aqua-900/10" />
               
               {/* Decorative border frame */}
               <div className="absolute inset-4 border-2 border-aqua-400/30" />
               
               {/* Caption overlay */}
               <div className="absolute bottom-8 left-8 right-8 text-white">
                 <p className="font-display font-semibold uppercase tracking-[0.2em] text-sm text-sunrise-400 mb-2">The Practice</p>
                  <p className="font-sans font-light">A calm space for thoughtful care.</p>
               </div>
            </div>
            
            {/* Offset solid block for depth */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-aqua-100 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}