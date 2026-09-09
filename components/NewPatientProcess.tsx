export default function NewPatientProcess() {
  const steps = [
    {
      number: '01',
      title: 'Request an Appointment',
      description: 'Schedule your visit at your convenience.',
    },
    {
      number: '02',
      title: 'Complete Your Forms',
      description: 'Provide your health history and insurance information.',
    },
    {
      number: '03',
      title: 'Meet Your Dental Team',
      description: 'Get to know our caring, professional staff.',
    },
    {
      number: '04',
      title: 'Create Your Personalized Plan',
      description: 'Discuss your goals and receive tailored recommendations.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 leading-tight">
            Your First Visit
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-navy-200">
                {step.number}
              </div>
              <h3 className="text-xl font-serif font-bold text-navy-950">
                {step.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/new-patients"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-950 text-off-white font-semibold rounded-lg hover:bg-navy-900 transition-all duration-200 tracking-wide"
          >
            Become a Patient
          </a>
        </div>
      </div>
    </section>
  );
}
