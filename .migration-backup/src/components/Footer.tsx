import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">Thomas Dental</h3>
            <p className="text-navy-200 text-sm mb-6">
              Boca Raton, Florida
            </p>
            <p className="text-navy-300 text-xs tracking-wide uppercase font-medium">
              Boutique Private Dental Practice
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-off-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-navy-200">
              <li>
                <a
                  href="tel:+15615551234"
                  className="hover:text-off-white transition-colors"
                >
                  (561) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@thomasdental.com"
                  className="hover:text-off-white transition-colors"
                >
                  info@thomasdental.com
                </a>
              </li>
              <li>4141 Example Dr, Suite 400</li>
              <li>Boca Raton, FL 33432</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-off-white">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-navy-200">
              <li>
                <span className="font-medium">Monday – Thursday</span>
                <br />
                8:00 AM – 5:00 PM
              </li>
              <li>
                <span className="font-medium">Friday</span>
                <br />
                8:00 AM – 1:00 PM
              </li>
              <li>
                <span className="font-medium">Weekend</span>
                <br />
                Closed
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-6 text-off-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-navy-200">
              <li>
                <Link href="/about" className="hover:text-off-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-off-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/new-patients" className="hover:text-off-white transition-colors">
                  New Patients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-off-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-navy-300">
            <p>
              © {currentYear} Thomas Dental. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-off-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/accessibility" className="hover:text-off-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
