export default function WhyThomasDental() {
  const features = [
    {
      title: 'Personal Attention',
      description: 'We take the time to understand your goals and concerns.',
    },
    {
      title: 'Thoughtful Treatment',
      description: 'Recommendations are individualized, understandable, and appropriate.',
    },
    {
      title: 'Modern Dentistry',
      description: 'Contemporary techniques support predictable and comfortable care.',
    },
    {
      title: 'Relaxed Environment',
      description: 'A quiet, private setting designed to make dental visits feel less clinical.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-navy-950 text-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            A Different Kind of
            <br />
            Dental Experience.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl font-serif font-bold tracking-wide">
                {feature.title.toUpperCase()}
              </h3>
              <p className="text-navy-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
