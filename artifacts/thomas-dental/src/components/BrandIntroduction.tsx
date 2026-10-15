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
              title="A New Chapter, Same Commitment to Care"
              alignment="left"
            />
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg">
              <p>
                After more than 51 years of dedicated service to our community, Dr. George Karr has entrusted me with the privilege of continuing the practice he has built. I am incredibly grateful for this opportunity and excited to carry on his legacy of providing exceptional, personalized dental care. As we begin this new chapter as Thomas Dental, my goal is simple: to treat every patient with the same kindness, honesty, and respect that I would want for my own family. I look forward to getting to know each of you, building lasting relationships, and creating an environment where you always feel comfortable, heard, and confident in your care. While the name may be changing, our commitment to putting patients first remains the same.
              </p>
              <p className="font-medium text-navy-950">
                — Dr. Chase Thomas
              </p>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Image Placeholder with brand styling */}
            <div className="aspect-[4/5] bg-navy-900 relative shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-[url('/dr-george-karr-and-chase-thomas.png')] bg-cover bg-center opacity-75" />
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