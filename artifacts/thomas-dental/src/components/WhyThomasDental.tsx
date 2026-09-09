import SectionHeader from './SectionHeader';

export default function WhyThomasDental() {
  const features = [
    {
      title: 'Unyielding Standards',
      description: 'We never compromise on materials, techniques, or time. Every procedure is performed to the highest possible standard of clinical excellence.',
    },
    {
      title: 'Tranquil Environment',
      description: 'Our practice was deliberately designed to reduce clinical anxiety. From the lighting to the pacing of appointments, calmness is engineered into the experience.',
    },
    {
      title: 'Conservative Approach',
      description: 'We prioritize preserving your natural tooth structure. We will never recommend a complex procedure if a simpler, more conservative option exists.',
    },
    {
      title: 'Absolute Transparency',
      description: 'Clear communication regarding diagnoses, treatment options, and costs. No surprises, just collaborative decision-making.',
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          title="The Thomas Difference"
          subtitle="Why discerning patients choose our practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex gap-6 items-start fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-sunrise-400 shadow-[0_0_0_6px_rgba(240,164,59,0.12)] transition-transform duration-300 group-hover:scale-125">
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-navy-950 mb-3 tracking-wide uppercase">
                  {feature.title}
                </h3>
                <p className="text-navy-600 font-sans font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}