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
              title="A Dental Office That Feels Like Yours"
              alignment="left"
            />
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg">
              <p>
                We want Thomas Dental to be the kind of place you’re happy to come back to — where you know the people taking care of you, never feel rushed, and always feel comfortable asking questions.
              </p>
              <p>
                We believe the best dentistry starts with trust. That means taking the time to listen, explaining things clearly, and recommending the same thoughtful care we would want for our own families.
              </p>
              <p>
                Whether you’re here for a routine visit or something more involved, you can expect excellent dentistry, genuine attention to detail, and a team that truly cares about making you feel at home.
              </p>
              <p className="font-medium text-navy-950">
                Great dentistry. Familiar faces. Care you can trust.
              </p>
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