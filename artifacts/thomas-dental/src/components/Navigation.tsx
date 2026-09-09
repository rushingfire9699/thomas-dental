import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import Button from './Button';
import { practiceInfo } from '@/lib/practice-info';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigationLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES' },
    { href: '/new-patients', label: 'NEW PATIENTS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950 shadow-md py-2'
          : 'bg-navy-950 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <img 
              src="/thomas-dental-logo-transparent.png" 
              alt="Thomas Dental" 
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-white hover:text-sunrise-400 transition-colors duration-300 tracking-[0.2em] uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={practiceInfo.phoneHref}
              className="text-xs font-semibold text-aqua-400 hover:text-white transition-colors duration-300 tracking-wider"
            >
              {practiceInfo.phoneDisplay}
            </a>
            <Button href="/contact" variant="primary" size="sm">
              REQUEST APPOINTMENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-sunrise-400 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 animate-in fade-in slide-in-from-top-2">
          <div className="px-6 pt-4 pb-6 space-y-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 text-xs font-semibold text-white tracking-[0.2em] uppercase hover:bg-navy-800 hover:text-sunrise-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={practiceInfo.phoneHref}
              className="block px-3 py-3 text-sm font-semibold text-aqua-400 tracking-wider hover:bg-navy-800 transition-colors"
            >
              {practiceInfo.phoneDisplay}
            </a>
            <div className="px-3 pt-4">
              <Button href="/contact" variant="primary" size="md" fullWidth>
                REQUEST APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}