import DynamicIslandNavbar from "@/components/Navbar";
import TechClubBanner from "@/components/Hero";
import DomainSection from "@/components/DomainSection";
import ContactUs from "@/components/ContactUs";
import Dock from "@/components/OurTeam";
import BackToTopButton from "../components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import MicroParticles from "@/components/MicroParticles";
import Events from "@/components/Events";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-blue-950">
      {/* Animated Particle Background */}
      <ParticleBackground />
      <MicroParticles />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <DynamicIslandNavbar />
        <TechClubBanner />
        <DomainSection />
        <Dock />
        <Events />
        <ContactUs />
        <BackToTopButton />
      </div>
    </div>
  );
}
