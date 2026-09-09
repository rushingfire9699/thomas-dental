export default function Services() {
  const services = [
    { name: 'General Dentistry', href: '/services/general-dentistry' },
    { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry' },
    { name: 'Restorative Dentistry', href: '/services/restorative-dentistry' },
    { name: 'Dental Implants', href: '/services/dental-implants' },
    { name: 'Clear Aligners', href: '/services/clear-aligners' },
    { name: 'Emergency Dentistry', href: '/services/emergency-dentistry' },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy-950 leading-tight mb-8">
            Comprehensive Care.
            <br />
            One Trusted Practice.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-12 sm:mb-16">
          {services.map((service) => (
            <a
              key={service.name}
              href={service.href}
              className="group p-8 border border-light-blue-gray rounded-lg hover:border-navy-300 hover:bg-navy-50 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-serif font-bold text-navy-950 group-hover:text-navy-600 transition-colors">
                  {service.name}
                </h3>
                <svg
                  className="w-5 h-5 text-navy-600 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <p className="text-navy-600">Learn more about this service</p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-950 text-off-white font-semibold rounded-lg hover:bg-navy-900 transition-all duration-200 tracking-wide"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
