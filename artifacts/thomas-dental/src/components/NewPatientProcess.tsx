import SectionHeader from './SectionHeader';

export default function NewPatientProcess() {
  const steps = [
    {
      title: 'Initial Consultation',
      description: 'A comprehensive evaluation of your oral health, including digital imaging and a thorough discussion of your goals and concerns.',
    },
    {
      title: 'Custom Treatment Plan',
      description: 'We develop a tailored approach, outlining all available options, timelines, and costs with complete transparency.',
    },
    {
      title: 'Execution & Care',
      description: 'Precise, comfortable treatment delivery utilizing state-of-the-art technology and evidence-based techniques.',
    },
    {
      title: 'Maintenance',
      description: 'Ongoing preventive care designed to protect your investment and maintain optimal health for a lifetime.',
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-navy-950 text-white relative">
       {/* Background structural elements */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-navy-800 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          title="The Patient Journey"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-aqua-300 bg-aqua-900/60 mx-auto md:mx-0 relative z-10 shadow-[0_0_15px_rgba(90,176,198,0.2)]">
                <svg className="h-5 w-5 text-sunrise-300" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 17c5.5.5 9.5-2.5 12-10-5.5-.5-9.5 2.5-12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M6 18c3-3 5-5 8-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-display font-bold mb-4 tracking-wide uppercase text-center md:text-left text-sunrise-400">
                {step.title}
              </h3>
              <p className="text-navy-200 font-sans font-light leading-relaxed text-center md:text-left text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}