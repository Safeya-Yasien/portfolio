"use client";
import React, { useState } from "react";

const filterOptions: string[] = ["all", "next.js", "react", "html"];

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterChange }) => {
  const [selectedTech, setSelectedTech] = useState<string>("all");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedTech(value);
    onFilterChange(value);
  };

  return (
    <div className="mb-4">
      <select
        value={selectedTech}
        onChange={handleChange}
        className="p-2 bg-gray-700 text-white rounded-lg capitalize"
        aria-label="Filter by technology"
      >
        {filterOptions.map((tech) => (
          <option key={tech} value={tech} className="capitalize">
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
