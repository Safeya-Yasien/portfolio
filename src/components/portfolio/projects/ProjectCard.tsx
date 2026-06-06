// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Briefcase, User, Users, Cpu } from "lucide-react";

type TProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github_link?: string;
  live_demo: string;
  category: string;
  technologies: string[];
  engagementType?: "Freelance" | "Personal";
  collaborationType?: "Solo" | "Team";
  role?: string;
  teamSize?: number;
};

const ProjectCard = ({
  title,
  description,
  image,
  github_link,
  live_demo,
  category,
  technologies,
  engagementType = "Personal",
  collaborationType = "Solo",
  role,
  teamSize,
}: TProjectCardProps) => {
  const isUIUX = category === "UI/UX";

  return (
    <div className="flex flex-col bg-white/70 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-200/80 dark:border-neutral-800/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 h-full group">
      {/* Image container */}
      <div className="relative w-full h-52 overflow-hidden bg-neutral-100 dark:bg-neutral-900 isolate">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform backface-visibility-hidden transform-gpu"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Top Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10 pointer-events-none">
          <span className="bg-blue-600/90 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
            {category}
          </span>

          <div className="flex gap-1.5">
            {engagementType === "Freelance" && (
              <span className="bg-emerald-600/90 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Briefcase size={10} />
                Freelance
              </span>
            )}
            {collaborationType === "Team" ? (
              <span className="bg-indigo-600/90 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Users size={10} />
                Team {teamSize ? `(${teamSize})` : ""}
              </span>
            ) : (
              <span className="bg-neutral-600/90 text-white backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1">
                <User size={10} />
                Solo
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          {/* Title and Role info */}
          <div className="mb-3">
            <h3 className="text-xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100  transition-colors duration-200 capitalize">
              {title}
            </h3>
            {role && (
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-1 uppercase tracking-wide flex items-center gap-1">
                <Cpu size={12} className="inline" />
                Role: {role}
              </p>
            )}
          </div>

          <p className="mb-5 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-neutral-100 dark:bg-neutral-800/70 border border-neutral-200/50 dark:border-neutral-700/50 text-[11px] font-medium px-2 py-0.5 rounded text-neutral-600 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
          <Link
            href={live_demo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition shadow-md shadow-blue-500/10 hover:shadow-blue-500/20"
          >
            {isUIUX ? "View Figma" : "Live Demo"}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

          {github_link && (
            <Link
              href={github_link}
              target="_blank"
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
