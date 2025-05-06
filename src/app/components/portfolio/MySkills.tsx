import { programmingSkills } from "@/app/constants/programming-skills";
import CustomTitle from "./CustomTitle";

const MySkills = () => {
  return (
    <section id="skills" className="section-dark text-white section">
      <div className="container mx-auto">
        <CustomTitle title={"Programming Skills"} />

        <div className="my-skills flex justify-center text-base">
          <ul className="languages flex flex-wrap justify-center">
            {programmingSkills.map((skill, index) => (
              <li
                key={index}
                className="p-3 px-5 bg-blue-800/30 border border-blue-600/30 text-blue-100 rounded-xl backdrop-blur-sm m-2 transition hover:bg-blue-800/50"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
