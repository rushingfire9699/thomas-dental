import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-24 pb-12 border-t-[8px] border-sunrise-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand - Span 4 */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-8 inline-block">
              <img 
                src="/thomas-dental-logo-transparent.png" 
                alt="Thomas Dental" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-navy-300 font-sans font-light leading-relaxed mb-2">
              Boca Raton, Florida
            </p>
            <p className="text-navy-300 text-xs uppercase tracking-[0.2em]">
              Boutique Private Dental Practice
            </p>
            <div className="flex gap-4">
               {/* Minimal social icons could go here */}
            </div>
          </div>

          {/* Contact - Span 3 */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-aqua-400 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-aqua-400 block"></span>
              Contact
            </h4>
            <ul className="space-y-6 text-sm font-sans font-light text-navy-100">
              <li>
                <a
                  href="tel:+15615551234"
                  className="hover:text-sunrise-400 transition-colors text-lg font-display tracking-wider"
                >
                  (561) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thomasdental.com"
                  className="hover:text-sunrise-400 transition-colors"
                >
                  info@thomasdental.com
                </a>
              </li>
              <li className="leading-relaxed">
                4141 Example Dr, Suite 400<br />
                Boca Raton, FL 33432
              </li>
            </ul>
          </div>

          {/* Hours - Span 3 */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-aqua-400 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-aqua-400 block"></span>
              Hours
            </h4>
            <ul className="space-y-6 text-sm font-sans font-light text-navy-100">
              <li>
                <span className="block text-white font-medium mb-1 uppercase tracking-wider text-xs">Monday – Thursday</span>
                8:00 AM – 5:00 PM
              </li>
              <li>
                <span className="block text-white font-medium mb-1 uppercase tracking-wider text-xs">Friday</span>
                8:00 AM – 1:00 PM
              </li>
              <li>
                <span className="block text-white font-medium mb-1 uppercase tracking-wider text-xs">Weekend</span>
                <span className="text-navy-400">Closed</span>
              </li>
            </ul>
          </div>

          {/* Navigation - Span 2 */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-display font-bold uppercase tracking-[0.2em] text-aqua-400 mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-aqua-400 block"></span>
              Links
            </h4>
            <ul className="space-y-4 text-sm font-sans font-light text-navy-100 uppercase tracking-widest text-xs">
              <li>
                <Link href="/about" className="hover:text-sunrise-400 transition-colors block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sunrise-400 transition-colors block py-1">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/new-patients" className="hover:text-sunrise-400 transition-colors block py-1">
                  New Patients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sunrise-400 transition-colors block py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-navy-400 font-sans tracking-wide">
            © {currentYear} Thomas Dental. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-navy-400 font-sans tracking-wide uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}