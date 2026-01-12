import {
  CertificationsSection,
  ContactSection,
  HeroSection,
  MySkills,
  ProjectsSection,
  UniqueSection,
} from "./components/portfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <MySkills />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <UniqueSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <ProjectsSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <CertificationsSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <ContactSection />
    </>
  );
}
