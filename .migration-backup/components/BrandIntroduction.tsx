export default function BrandIntroduction() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 mb-4">
            Welcome to Thomas Dental
          </p>
        </div>
        
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 leading-tight">
            Dentistry should feel personal.
          </h2>
          
          <p className="text-lg sm:text-xl text-navy-700 leading-relaxed max-w-3xl">
            We believe exceptional dentistry begins with understanding the person behind the smile. At Thomas Dental, we take the time to listen, explain your options, and provide thoughtful care tailored to you.
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-12 sm:mt-16 w-12 h-px bg-navy-200" />
      </div>
    </section>
  );
}
