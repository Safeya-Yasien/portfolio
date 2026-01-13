"use client";
import React, { useState } from "react";
import CustomTitle from "./CustomTitle";
import { projectsData } from "@/app/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  const normalize = (str: string) => str.toLowerCase().replace(/[\s.-]/g, "");

  const filterProjects = () => {
    if (normalize(filter) === "all") {
      return projectsData;
    }

    return projectsData.filter((project) =>
      project.technologies.some((tech) => normalize(tech) === normalize(filter))
    );
  };

  return (
    <section id="projects" className="">
      <CustomTitle title={"Projects"} />

      <ProjectFilter onFilterChange={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-8">
        {filterProjects().map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="text-center mt-4">
        <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900">
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
