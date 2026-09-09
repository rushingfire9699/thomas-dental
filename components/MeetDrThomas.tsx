export default function MeetDrThomas() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-navy-950 text-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg overflow-hidden shadow-xl">
              <div className="w-full h-full flex items-center justify-center text-navy-700 text-sm">
                [Portrait Placeholder]
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-5xl sm:text-6xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
                Meet
                <br />
                Dr. Chase Thomas
              </h2>
            </div>

            <div className="space-y-4 text-navy-100">
              <p className="text-lg leading-relaxed">
                Dr. Thomas is committed to providing personalized, thoughtful dental care. His approach centers on understanding each patient's unique goals and concerns, then delivering treatment recommendations that are individualized, understandable, and appropriate.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on modern techniques and patient education, Dr. Thomas builds long-term relationships with his patients, helping them maintain healthy, beautiful smiles for life.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 bg-off-white text-navy-950 font-semibold rounded-lg hover:bg-navy-100 transition-all duration-200 tracking-wide"
              >
                Learn More About Dr. Thomas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
