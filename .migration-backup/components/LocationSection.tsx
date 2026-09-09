export default function LocationSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 leading-tight">
              A Calmer Setting
              <br />
              for Dental Care.
            </h2>
            <p className="text-lg sm:text-xl text-navy-700 leading-relaxed">
              Thomas Dental is located on the fourth floor of a professional condominium in Boca Raton, overlooking a protected natural area. This serene, private setting creates an environment that feels more like a peaceful retreat than a clinical office.
            </p>
            <p className="text-lg sm:text-xl text-navy-700 leading-relaxed">
              Nestled in the heart of South Florida, our practice embodies the calm, sophisticated spirit of Boca Raton while delivering world-class dentistry.
            </p>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <div className="aspect-square bg-gradient-to-br from-navy-100 to-light-blue-gray rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center text-navy-600 text-sm">
                [Landscape/Location Placeholder]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
