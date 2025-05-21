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
    <div
      className="max-w-full md:max-w-sm flex flex-col
    bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 rounded-md"
    >
      <Image
        src={image}
        alt={title}
        width={1920}
        height={1080}
        className="rounded-t-lg"
      />
      <div className="p-5 flex flex-col justify-end flex-1">
        <Link href={live_demo} target="_blank">
          <h3 className="mb-2 text-xl font-bold tracking-tight ">{title}</h3>
        </Link>
        <p className="mb-3 font-normal ">{description}</p>
        <div className="flex justify-between items-center">
          <Link
            href={live_demo}
            target="_blank"
            className="flex items-center gap-2 w-fit px-4 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg "
          >
            Live Demo
            <FontAwesomeIcon icon={faArrowRightLong} className="mt-1" />
          </Link>

          <Link
            href={github_link}
            target="_blank"
            className="me-4 md:me-6 flex items-center text-xl hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="go to github"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
