import { Link } from 'wouter';
import SectionHeader from './SectionHeader';

export default function Services() {
  const services = [
    {
      id: 'preventive',
      title: 'Preventive Care',
      description: 'Comprehensive exams, professional cleanings, and proactive treatments to maintain optimal oral health.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Expertly crafted crowns, bridges, and tooth-colored fillings designed to restore function and natural aesthetics.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Enhancements',
      description: 'Porcelain veneers, professional whitening, and comprehensive smile design tailored to your unique features.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-navy-950 relative overflow-hidden">
       {/* Background accents */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-aqua-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
       <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunrise-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          title="Clinical Excellence"
          subtitle="A comprehensive suite of services delivered with uncompromising precision."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-navy-900 p-10 border border-navy-800 hover:border-aqua-400 transition-colors duration-300 group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-navy-950 flex items-center justify-center text-sunrise-400 mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4 tracking-wide uppercase">
                {service.title}
              </h3>
              <p className="text-navy-200 font-sans font-light leading-relaxed mb-8">
                {service.description}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-display font-bold text-aqua-400 uppercase tracking-[0.2em] hover:text-white transition-colors group-hover:gap-4 gap-2"
              >
                Learn More
                <svg className="w-4 h-4 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}