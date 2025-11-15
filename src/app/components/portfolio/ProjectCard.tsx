import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

type TProjectCardProps = {
  title: string;
  description: string;
  image: string;
  github_link: string;
  live_demo: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  github_link,
  live_demo,
}: TProjectCardProps) => {
  return (
    <div className="flex flex-col max-w-full md:max-w-sm bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 rounded-md overflow-hidden shadow-md h-full">
      {/* Image */}
      <div className="relative w-full h-48 md:h-56 lg:h-48 xl:h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          priority
          sizes="(max-width: 640px) 100vw, 300px"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-5">
        <div>
          <Link href={live_demo} target="_blank">
            <h3 className="mb-2 text-xl font-bold tracking-tight capitalize hover:underline">
              {title}
            </h3>
          </Link>

          {/* Description with line clamp */}
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-300 line-clamp-4">
            {description}
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={live_demo}
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition"
          >
            Live Demo
            <FontAwesomeIcon icon={faArrowRightLong} className="mt-1" />
          </Link>

          <Link
            href={github_link}
            target="_blank"
            className="text-xl hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="Go to GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
