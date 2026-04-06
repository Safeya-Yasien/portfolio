import { CustomTitle } from "@/components/portfolio";
import { Metadata } from "next";
import { pageKeywords, siteConfig } from "@/lib/seo";
import ProjectsClient from "@/components/portfolio/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Safeya Yasien's frontend projects built with React, Next.js, TypeScript, and Tailwind CSS.",
  keywords: pageKeywords.projects,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description:
      "A showcase of frontend projects — React apps, Next.js sites, and UI experiments.",
    url: `${siteConfig.url}/projects`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
};

const ProjectsPage = () => {
  return (
    <main className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <CustomTitle title="Full Portfolio" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive collection of my work, ranging from complex
            fullstack applications to pixel-perfect UI/UX designs.
          </p>
        </div>

        <ProjectsClient />
      </div>
    </main>
  );
};

export default ProjectsPage;
