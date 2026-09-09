import SectionHeader from './SectionHeader';

export default function BrandIntroduction() {
  return (
    <section className="py-24 sm:py-32 bg-off-white overflow-hidden relative">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-light-blue-gray/20 -skew-x-12 translate-x-20 z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="fade-in-up">
            <SectionHeader
              title="A New Standard of Dental Care"
              alignment="left"
            />
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg">
              <p>
                At Thomas Dental, we believe that exceptional dentistry requires more than just clinical expertise—it requires a commitment to the patient experience.
              </p>
              <p>
                Our boutique practice is designed to provide personalized, unhurried care in an environment that feels welcoming and restorative. We combine state-of-the-art technology with a meticulous attention to detail to ensure optimal outcomes for every patient.
              </p>
              <p>
                From preventive care to complex restorative procedures, our approach is always conservative, transparent, and tailored to your unique needs.
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
                 <p className="text-navy-600 font-sans text-sm">Uncompromising quality. Absolute comfort.</p>
               </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Image Placeholder with brand styling */}
            <div className="aspect-[4/5] bg-navy-900 relative shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60 grayscale" />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/80 to-transparent" />
               
               {/* Decorative border frame */}
               <div className="absolute inset-4 border-2 border-aqua-400/30" />
               
               {/* Caption overlay */}
               <div className="absolute bottom-8 left-8 right-8 text-white">
                 <p className="font-display font-semibold uppercase tracking-[0.2em] text-sm text-sunrise-400 mb-2">The Practice</p>
                 <p className="font-sans font-light">Designed for tranquility and precision.</p>
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