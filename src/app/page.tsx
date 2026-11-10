import { Metadata } from "next";
import {
  CertificationsSection,
  HeroSection,
  MySkills,
  FeaturedProjects,
  UniqueSection,
} from "../components/portfolio";
import { pageKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "React & Next.js Frontend Developer",
  description:
    "Safeya Yasien is a frontend developer specializing in React, Next.js, and TypeScript. Explore responsive web projects, bilingual interfaces, and modern UI work.",
  keywords: pageKeywords.home,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Safeya Yasien | React & Next.js Frontend Developer",
    description:
      "Explore responsive web projects and bilingual interfaces by Safeya Yasien, a frontend developer specializing in React, Next.js, and TypeScript.",
    url: siteConfig.url,
    type: "website",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} | React & Next.js Frontend Developer`,
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Safeya Yasien",
    url: "https://safeya-yasien.vercel.app",
    jobTitle: "Frontend Developer",
    knowsAbout: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    sameAs: [
      "https://github.com/Safeya-Yasien",
      "https://www.linkedin.com/in/safeya-yasien/",
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
    </>
  );
}
