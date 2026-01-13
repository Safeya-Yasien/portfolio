"use client";
import React, { useState } from "react";

const filterOptions: string[] = ["All", "Next.js", "React", "Html"];

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ onFilterChange }) => {
  const [selectedTech, setSelectedTech] = useState<string>("All");

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
        className="p-2 bg-gray-700 text-white rounded-lg"
        aria-label="Filter by technology"
      >
        {filterOptions.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProjectFilter;
