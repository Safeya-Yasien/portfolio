"use client";
import React, { useState } from "react";
import CustomTitle from "./CustomTitle";
import { projectsData } from "@/app/data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { useRouter } from "next/navigation";

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const router = useRouter();

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
    <section id="projects" className="section-dark">
      <div className="container">
        <CustomTitle title={"Projects"} />

        <ProjectFilter onFilterChange={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-8">
          {filterProjects().map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center mt-4">
          <button
    className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
    onClick={() => router.push("/projects")}
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
