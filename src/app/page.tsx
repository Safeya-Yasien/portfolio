import ContactSection from "./components/portfolio/ContactSection";
import HeroSection from "./components/portfolio/HeroSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ServicesSection from "./components/portfolio/ServicesSection";

export default function Home() {
  return (
    <div className="wrapper pt-28">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
