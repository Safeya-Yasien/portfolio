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
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={github_link} target="_blank">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="rounded-t-lg"
        />
      </Link>
      <div className="p-5">
        <Link href={live_demo} target="_blank">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={live_demo}
          target="_blank"
          className="flex items-center w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ms-auto"
        >
          Live Demo
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
