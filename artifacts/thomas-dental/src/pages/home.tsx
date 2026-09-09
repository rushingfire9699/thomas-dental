import Hero from '@/components/Hero';
import BrandIntroduction from '@/components/BrandIntroduction';
import MeetDrThomas from '@/components/MeetDrThomas';
import Services from '@/components/Services';
import WhyThomasDental from '@/components/WhyThomasDental';
import LocationSection from '@/components/LocationSection';
import PatientReviews from '@/components/PatientReviews';
import NewPatientProcess from '@/components/NewPatientProcess';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero
        title="Thoughtful dentistry. A more relaxed way to smile."
        subtitle="We’re here to make your next visit feel easy."
        primaryCTA={{ label: 'REQUEST AN APPOINTMENT', href: '/contact' }}
        secondaryCTA={{ label: 'MEET DR. THOMAS', href: '/about' }}
        imageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=85&w=2200&auto=format&fit=crop"
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
