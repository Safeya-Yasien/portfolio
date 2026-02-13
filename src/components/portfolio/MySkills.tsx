"use client";
import { useState } from "react";
import { programmingSkills } from "@/constants/programming-skills";
import CustomTitle from "./CustomTitle";

const MySkills = () => {
  const [activeTab, setActiveTab] = useState("all");
  const categories = ["all", "frontend", "backend", "tools"];

  const filteredSkills =
    activeTab === "all"
      ? programmingSkills
      : programmingSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-10">
      <CustomTitle title={"Programming Skills"} />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all capitalize border ${
              activeTab === cat
                ? "bg-blue-700 border-blue-700 text-white"
                : "bg-gray-100 dark:bg-neutral-800 border-gray-300 dark:border-neutral-700 hover:border-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredSkills.map((skill, index) => (
          <li
            key={index}
            className="flex flex-col gap-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </span>

            {/* Confidence Badge */}
            <span
              className={`text-[10px] uppercase tracking-wider font-bold w-fit px-2 py-0.5 rounded ${
                skill.level === "proficient"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
