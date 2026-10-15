import SectionHeader from './SectionHeader';

export default function BrandIntroduction() {
  return (
    <section className="py-24 sm:py-32 bg-cream overflow-hidden relative">
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-aqua-100/45 -skew-x-12 translate-x-20 z-0 pointer-events-none" />
      <div className="absolute -left-24 bottom-8 h-48 w-48 rounded-full border border-sunrise-400/30" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-0">
          <div className="fade-in-up lg:col-start-1 lg:row-start-1 [&>div]:!mb-0">
            <SectionHeader
              title="A New Chapter, Same Commitment to Care"
              alignment="left"
            />
          </div>

          <div className="relative order-2 fade-in-up lg:col-start-2 lg:row-start-1 lg:row-span-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img
                src="/dr-george-karr-and-chase-thomas.png"
                alt="Dr. George Karr and Dr. Chase Thomas shaking hands"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-4 border-2 border-aqua-400" aria-hidden="true" />
            </div>

            <div className="absolute -bottom-8 -right-8 -z-10 h-2/3 w-2/3 bg-aqua-100" />
          </div>

          <div className="order-3 fade-in-up lg:col-start-1 lg:row-start-2">
            <div className="space-y-6 text-navy-700 font-sans font-light leading-relaxed text-lg">
              <p>
                After more than 51 years of dedicated service to our community, Dr. George Karr has entrusted me with the privilege of continuing the practice he has built. I am incredibly grateful for this opportunity and excited to carry on his legacy of providing exceptional, personalized dental care. As we begin this new chapter as Thomas Dental, my goal is simple: to treat every patient with the same kindness, honesty, and respect that I would want for my own family. I look forward to getting to know each of you, building lasting relationships, and creating an environment where you always feel comfortable, heard, and confident in your care. While the name may be changing, our commitment to putting patients first remains the same.
              </p>
              <p className="font-medium text-navy-950">
                — Dr. Chase Thomas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}