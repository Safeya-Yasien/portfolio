"use client";

import { projectsData } from "@/data/projectsData";
import CategoryFilter from "../CategoryFilter";
import ProjectCard from "./ProjectCard";
import { useMemo, useState } from "react";

const ProjectsClient = () => {
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
    <>
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
    </>
  );
};
export default ProjectsClient;
