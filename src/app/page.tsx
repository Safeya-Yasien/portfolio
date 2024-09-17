import {
  CertificationsSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
} from "./components/portfolio";

export default function Home() {
  return (
    <div className="wrapper pt-28">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection/>
      <ContactSection />
    </div>
  );
}
