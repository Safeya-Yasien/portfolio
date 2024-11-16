"use client";
import React, { useState } from "react";
import CustomTitle from "./CustomTitle";
import { projectsData } from "@/app/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const filterProjects = () => {
    if (filter === "All") {
      return projectsData;
    } else {
      return projectsData.filter((project) =>
        project.technologies.includes(filter)
      );
    }
  };

  return (
    <section id="projects">
      <div className="container">
        <CustomTitle title={"Projects"} />

        <ProjectFilter onFilterChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-8">
          {filterProjects().map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
