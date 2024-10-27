import {
  CertificationsSection,
  ContactSection,
  HeroSection,
  MySkills,
  ProjectsSection,
  ServicesSection,
} from "./components/portfolio";

export default function Home() {
  return (
    <div className="wrapper pt-28">
      <HeroSection />
      <MySkills />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
}
