import Hero from '@/components/Hero';
import BrandIntroduction from '@/components/BrandIntroduction';
import MeetDrThomas from '@/components/MeetDrThomas';
import Services from '@/components/Services';
import WhyThomasDental from '@/components/WhyThomasDental';
import LocationSection from '@/components/LocationSection';
import PatientReviews from '@/components/PatientReviews';
import NewPatientProcess from '@/components/NewPatientProcess';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Personalized Dentistry. Thoughtfully Delivered."
        subtitle="Thomas Dental provides comprehensive dental care in a relaxed, personalized setting in Boca Raton, Florida."
        primaryCTA={{ label: 'REQUEST AN APPOINTMENT', href: '/contact' }}
        secondaryCTA={{ label: 'MEET DR. THOMAS', href: '/about' }}
      />
      <BrandIntroduction />
      <MeetDrThomas />
      <Services />
      <WhyThomasDental />
      <LocationSection />
      <PatientReviews />
      <NewPatientProcess />
      <FinalCTA />
    </>
  );
}
