export default function LocationSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-navy-950 mb-8 uppercase tracking-wider">
              Our Location
            </h2>
            <div className="w-16 h-1 bg-sunrise-400 mb-8" />
            
            <p className="text-navy-700 font-sans font-light text-lg mb-10 leading-relaxed">
              Conveniently located in Boca Raton, our practice is designed to be an oasis of calm. Ample parking is available for all patients.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 border-l-2 border-aqua-400 pl-4">
                <svg className="w-6 h-6 text-navy-950 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h4 className="font-display font-bold text-navy-950 uppercase tracking-widest text-sm mb-1">Address</h4>
                  <p className="text-navy-600 font-sans text-sm leading-relaxed">
                    4141 Example Dr, Suite 400<br />
                    Boca Raton, FL 33432
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 border-l-2 border-aqua-400 pl-4">
                <svg className="w-6 h-6 text-navy-950 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-display font-bold text-navy-950 uppercase tracking-widest text-sm mb-1">Hours</h4>
                  <p className="text-navy-600 font-sans text-sm leading-relaxed">
                    Mon - Thu: 8:00 AM - 5:00 PM<br />
                    Fri: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square bg-navy-100 p-2 shadow-2xl">
               {/* Map Placeholder */}
               <div className="w-full h-full bg-navy-200 relative overflow-hidden flex items-center justify-center border border-white">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23102b3f\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                  <div className="text-center">
                    <svg className="w-12 h-12 text-navy-950 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="font-display font-bold uppercase tracking-widest text-sm text-navy-900">Map View</span>
                  </div>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}