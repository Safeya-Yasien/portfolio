"use client";
import CustomTitle from "./CustomTitle";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = useMemo(() => projectsData.filter((p) => p.featured), []);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(featured.map((p) => p.category)))],
    [featured],
  );

  const filteredProjects = featured
    .filter((p) => activeCategory === "All" || p.category === activeCategory)
    .slice(0, 6);

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <CustomTitle title="Featured Work" />
        </div>
        <Link
          href="/projects"
          className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
        >
          View all projects <ArrowRight size={20} />
        </Link>
      </div>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <Link
          href="/projects"
          className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-bold"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
