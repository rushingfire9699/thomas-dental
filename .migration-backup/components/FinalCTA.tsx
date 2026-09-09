export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-navy-950 text-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold mb-6 sm:mb-8 leading-tight">
          Ready to Experience
          <br />
          Dentistry Differently?
        </h2>
        <p className="text-lg sm:text-xl text-navy-100 mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          We look forward to welcoming you to Thomas Dental.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-off-white text-navy-950 font-semibold rounded-lg hover:bg-navy-100 transition-all duration-200 tracking-wide"
          >
            Request an Appointment
          </a>
          <a
            href="tel:+15615551234"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-off-white text-off-white font-semibold rounded-lg hover:bg-off-white hover:text-navy-950 transition-all duration-200 tracking-wide"
          >
            Call Our Office
          </a>
        </div>
      </div>
    </section>
  );
}
