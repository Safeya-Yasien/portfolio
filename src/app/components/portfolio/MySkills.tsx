import { programmingSkills } from "@/app/constants/programming-skills";
import CustomTitle from "./CustomTitle";

const MySkills = () => {
  return (
    <section id="skills" className="">
      <CustomTitle title={"Programming Skills"} />

      <ul className="flex items-center flex-wrap gap-4">
        {programmingSkills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 p-1 px-2 rounded-md"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MySkills;
