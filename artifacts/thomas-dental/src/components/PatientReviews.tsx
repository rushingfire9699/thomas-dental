import SectionHeader from './SectionHeader';

export default function PatientReviews() {
  const reviews = [
    {
      name: "Dan U.",
      date: "Jan 2025",
      text: "Always a good time. Beautiful work done by the doctor. His staff makes me feel like I’m family!",
    },
    {
      name: "Craig H.",
      date: "Aug 2024",
      text: "Dr Karr has been my dentist for a number of years. I always receive the best professional services and treatment from Dr Karr and his staff.",
    },
    {
      name: "Sandy K.",
      date: "Sep 2022",
      text: "Dr. Karr & his Staff are very professional, kind & courteous.",
    },
  ];
  const googleReviewsUrl =
    "https://www.google.com/maps/search/?api=1&query=Dr%20George%20Karr%20-%20Dr%20Chase%20Thomas%2C%20Boca%20Raton%20FL";

  return (
    <section className="py-24 sm:py-32 bg-off-white relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[200px] text-light-blue-gray/30 font-serif leading-none select-none">"</div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          title="Patient Experiences"
        />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-5">
          <div
            className="flex items-center gap-2"
            aria-label="Google rating: 5.0 out of 5 from 40 reviews"
          >
            <span className="font-display text-lg font-bold text-navy-950">5.0</span>
            <span className="flex text-sunrise-400" aria-hidden="true">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="text-sm text-navy-700">40 Google reviews</span>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-navy-800 underline decoration-aqua-400 underline-offset-4 transition-colors hover:text-aqua-700"
          >
            Read reviews on Google
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="bg-white p-10 shadow-sm border border-navy-50 relative fade-in-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <p className="text-navy-700 font-sans font-light leading-relaxed mb-8 italic">
                “{review.text}”
              </p>
              
              <div className="flex items-center gap-4 border-t border-navy-50 pt-6">
                <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-bold text-sm tracking-widest uppercase text-navy-950">
                    {review.name}
                  </div>
                  <div className="mt-1 text-xs text-navy-600">
                    Google · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}