import React from "react";
import CustomTitle from "./CustomTitle";
import { projectsData } from "@/app/data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <div className="container">
        <CustomTitle title={"Projects"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
