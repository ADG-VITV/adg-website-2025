import DynamicIslandNavbar from "./components/navbar";
import TechClubBanner from "./components/home";
import DomainSection from "@/components/DomainSection";
import ContactUs from "@/components/ContactUs";
import Dock from "@/components/OurTeam";

export default function Home() {
  return (
    <>
      <DynamicIslandNavbar />
      <TechClubBanner />
      <DomainSection />
      <Dock />
      <ContactUs />
    </>
  );
}
