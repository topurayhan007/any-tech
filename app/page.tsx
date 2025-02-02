import AboutUsSection from "@/components/AboutUsSection";
import HeroSection from "@/components/HeroSection";
import MobileBannerImage from "@/components/MobileBannerImage";
import Navbar from "@/components/Navbar";
import PhilosophySection from "@/components/PhilosophySection";

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
    </>
  );
}
