import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import CapabilitiesGallery from "@/components/CapabilitiesGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsSection />
      <CapabilitiesGallery />
      <Contact />
      <Footer />
    </>
  );
}
