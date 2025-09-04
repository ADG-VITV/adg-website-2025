import DynamicIslandNavbar from "./components/Navbar";
import TechClubBanner from "./components/Hero";
import DomainSection from "@/components/DomainSection";
import ContactUs from "@/components/ContactUs";
import Dock from "@/components/OurTeam";
import BackToTopButton from "./components/BackToTop";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-950">
      <DynamicIslandNavbar />
      <TechClubBanner />
      <DomainSection />
      <Dock />
      <ContactUs />
      <BackToTopButton />
    </div>
  );
}
