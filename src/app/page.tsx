import {
  HeroSection,
  ProjectsSection,
  ServicesSection,
} from "./components/portfolio";

export default function Home() {
  return (
    <div className="wrapper py-28">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
    </div>
  );
}
