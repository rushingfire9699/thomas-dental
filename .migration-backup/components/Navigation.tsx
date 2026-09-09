'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

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
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-serif font-bold text-navy-950 tracking-tight">
              Thomas Dental
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-950 hover:text-navy-600 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15615551234"
              className="text-sm font-medium text-navy-600 hover:text-navy-950 transition-colors duration-200"
            >
              (561) 555-1234
            </a>
            <Button href="/contact" variant="primary" size="sm">
              REQUEST AN APPOINTMENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-navy-50 transition-colors"
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
        <div className="md:hidden bg-white border-t border-light-blue-gray animate-in fade-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-navy-950 hover:bg-navy-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+15615551234"
              className="block px-3 py-2 text-sm font-medium text-navy-600 hover:bg-navy-50 rounded-md transition-colors"
            >
              (561) 555-1234
            </a>
            <div className="px-3 py-2">
              <Button href="/contact" variant="primary" size="sm" fullWidth>
                REQUEST AN APPOINTMENT
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
