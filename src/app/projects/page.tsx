"use client";

import { useState, useMemo } from "react";
import { projectsData } from "@/data/projectsData";
import { CustomTitle, ProjectCard } from "@/components/portfolio";
import CategoryFilter from "@/components/portfolio/CategoryFilter";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))],
    [],
  );

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) =>
      activeCategory === "All" ? true : project.category === activeCategory,
    );
  }, [activeCategory]);

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

        {/* Filter Section */}
        <div className="mb-10">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <p className="text-center text-sm text-gray-400 mt-4 italic">
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectsPage;
