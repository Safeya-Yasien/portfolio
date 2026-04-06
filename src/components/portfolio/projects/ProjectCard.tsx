// components/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Layout } from "lucide-react";

// Update props to include category
type TProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github_link?: string;
  live_demo: string;
  category: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  github_link,
  live_demo,
  category,
}: TProjectCardProps) => {
  const isUIUX = category === "UI/UX";

  return (
    <div className="flex flex-col bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 rounded-xl overflow-hidden shadow-md h-full hover:shadow-xl transition-shadow group">
      {/* Image container */}
      <div className="relative w-full h-52 overflow-hidden bg-white rounded-t-xl isolate">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform backface-visibility-hidden transform-gpu"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest z-10">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold tracking-tight capitalize">
            {title}
          </h3>
          <p className="mb-6 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={live_demo}
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
          >
            {isUIUX ? "View Figma" : "Live Demo"}
            <ArrowRight size={16} />
          </Link>

          {github_link && (
            <Link
              href={github_link}
              target="_blank"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github size={24} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
