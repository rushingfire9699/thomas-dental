import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Thomas Dental | Personalized Dentistry in Boca Raton',
  description: 'Exceptional dentistry in a relaxed, personal environment. Thomas Dental provides comprehensive dental care in Boca Raton, Florida.',
  keywords: 'dentist, Boca Raton, dental care, cosmetic dentistry, implants, restorative dentistry',
  authors: [{ name: 'Thomas Dental' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thomasdental.com',
    title: 'Thomas Dental | Personalized Dentistry in Boca Raton',
    description: 'Exceptional dentistry in a relaxed, personal environment.',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      </head>
      <body className="bg-off-white text-navy-950">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
