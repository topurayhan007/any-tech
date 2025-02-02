import AboutUsSection from "@/components/AboutUsSection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MobileBannerImage from "@/components/MobileBannerImage";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import PhilosophySection from "@/components/PhilosophySection";
import TabSection from "@/components/TabSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <MobileBannerImage />
      <AboutUsSection />
      <PhilosophySection />
      <TabSection />
      <PartnerSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}
