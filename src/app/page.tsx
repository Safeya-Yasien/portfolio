import { Metadata } from "next";
import {
  CertificationsSection,
  ContactSection,
  HeroSection,
  MySkills,
  FeaturedProjects,
  UniqueSection,
} from "../components/portfolio";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safeya Yasien",
    url: "https://safeya-yasien.netlify.app",
    jobTitle: "Frontend Developer",
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    sameAs: [
      "https://github.com/Safeya-Yasien",
      "https://www.linkedin.com/in/safeya-yasien-2ba9b4260/",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <MySkills />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <UniqueSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <FeaturedProjects />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <CertificationsSection />
      <div className="border-t-2 border-gray-400 dark:border-gray-600"></div>
      <ContactSection />
    </>
  );
}
