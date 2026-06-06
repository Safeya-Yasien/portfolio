"use client";

import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";
import { useMemo, useState } from "react";
import { Search, X, RotateCcw, Filter, Briefcase, User, Users, Cpu } from "lucide-react";

const ProjectsClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeEngagement, setActiveEngagement] = useState("All");
  const [activeCollaboration, setActiveCollaboration] = useState("All");

  // Get distinct categories from data
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(projectsData.map((p) => p.category)))];
  }, []);

  // Filter projects based on all active criteria
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // 1. Search term match
      const matchesSearch =
        searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      // 2. Category match
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      // 3. Engagement match
      const matchesEngagement =
        activeEngagement === "All" || project.engagementType === activeEngagement;

      // 4. Collaboration match
      const matchesCollaboration =
        activeCollaboration === "All" || project.collaborationType === activeCollaboration;

      return matchesSearch && matchesCategory && matchesEngagement && matchesCollaboration;
    });
  }, [searchTerm, activeCategory, activeEngagement, activeCollaboration]);

  const hasActiveFilters =
    searchTerm !== "" ||
    activeCategory !== "All" ||
    activeEngagement !== "All" ||
    activeCollaboration !== "All";

  const handleResetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setActiveEngagement("All");
    setActiveCollaboration("All");
  };

  return (
    <div className="space-y-8">
      {/* Filter Console Dashboard */}
      <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col gap-6">
          {/* Top Row: Search and Quick Reset */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" size={18} />
              <input
                type="text"
                placeholder="Search projects by title, stack, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm text-neutral-800 dark:text-neutral-100"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-2 text-xs font-bold text-red-500 hover:text-red-600 dark:hover:text-red-400 bg-red-50 dark:bg-red-950/20 px-3.5 py-2 rounded-xl transition border border-red-200/50 dark:border-red-900/50 cursor-pointer self-stretch md:self-auto justify-center"
              >
                <RotateCcw size={14} />
                Reset All Filters
              </button>
            )}
          </div>

          <div className="border-t border-neutral-200/60 dark:border-neutral-800/80"></div>

          {/* Filter Row Groups */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 1. Technology / Category Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5 flex items-center gap-1.5">
                <Cpu size={14} />
                Stack / Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                        : "bg-neutral-100 dark:bg-neutral-800/60 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Engagement Context Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5 flex items-center gap-1.5">
                <Briefcase size={14} />
                Work Context
              </label>
              <div className="flex flex-wrap gap-2">
                {["All", "Freelance", "Personal"].map((eng) => (
                  <button
                    key={eng}
                    onClick={() => setActiveEngagement(eng)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                      activeEngagement === eng
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-sm"
                        : "bg-neutral-100 dark:bg-neutral-800/60 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    {eng}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Collaboration Mode Filter */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5 flex items-center gap-1.5">
                {activeCollaboration === "Team" ? <Users size={14} /> : <User size={14} />}
                Collaboration Mode
              </label>
              <div className="flex flex-wrap gap-2">
                {["All", "Solo", "Team"].map((col) => (
                  <button
                    key={col}
                    onClick={() => setActiveCollaboration(col)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                      activeCollaboration === col
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-sm"
                        : "bg-neutral-100 dark:bg-neutral-800/60 border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 italic flex items-center justify-between">
          <span>
            Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length === 1 ? "" : "s"}
          </span>
          {hasActiveFilters && (
            <span className="text-xs text-neutral-400">
              Filters active: {[
                searchTerm ? "Search" : "",
                activeCategory !== "All" ? `Stack: ${activeCategory}` : "",
                activeEngagement !== "All" ? `Context: ${activeEngagement}` : "",
                activeCollaboration !== "All" ? `Mode: ${activeCollaboration}` : ""
              ].filter(Boolean).join(", ")}
            </span>
          )}
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
        <div className="text-center py-20 bg-neutral-50 dark:bg-neutral-900/20 border border-dashed border-neutral-300 dark:border-neutral-800 rounded-2xl">
          <Filter className="mx-auto text-neutral-400 dark:text-neutral-600 mb-4" size={48} />
          <p className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 mb-1">
            No projects match your criteria
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
            Try adjusting your search query or filter tags.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 cursor-pointer"
          >
            <RotateCcw size={16} />
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsClient;
