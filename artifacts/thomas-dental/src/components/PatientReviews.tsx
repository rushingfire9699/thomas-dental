import SectionHeader from './SectionHeader';

export default function PatientReviews() {
  const reviews = [
    {
      id: 1,
      name: "Michael R.",
      text: "The level of professionalism and attention to detail here is unmatched. Dr. Thomas runs an incredibly precise, calm, and efficient practice. Best dental experience I've ever had.",
    },
    {
      id: 2,
      name: "Sarah L.",
      text: "I used to experience severe anxiety before dental visits. The environment at Thomas Dental is so serene, and the staff is so gentle, my anxiety is completely gone.",
    },
    {
      id: 3,
      name: "David W.",
      text: "Exceptional clinical work. Dr. Thomas explained my complex treatment plan with absolute clarity and executed it flawlessly. The results exceeded my expectations.",
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-off-white relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[200px] text-light-blue-gray/30 font-serif leading-none select-none">"</div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeader
          title="Patient Experiences"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              className="bg-white p-10 shadow-sm border border-navy-50 relative fade-in-up hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Star rating */}
              <div className="flex text-sunrise-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-navy-700 font-sans font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-navy-50 pt-6">
                <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center font-display font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="font-display font-bold text-sm tracking-widest uppercase text-navy-950">
                  {review.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}