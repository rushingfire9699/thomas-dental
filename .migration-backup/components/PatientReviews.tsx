export default function PatientReviews() {
  const reviews = [
    {
      text: 'Patient review will appear here.',
      author: 'Patient Name',
    },
    {
      text: 'Patient review will appear here.',
      author: 'Patient Name',
    },
    {
      text: 'Patient review will appear here.',
      author: 'Patient Name',
    },
  ];

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-navy-950 text-off-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            What Our Patients Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 bg-navy-900 rounded-lg border border-navy-800 hover:border-navy-600 transition-colors"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-navy-100 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>
              <p className="text-sm font-semibold text-off-white">{review.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center text-navy-300 text-sm">
          <p>Authentic patient reviews to be integrated from Google Reviews and patient feedback.</p>
        </div>
      </div>
    </section>
  );
}
