import { programmingSkills } from "@/app/constants/programming-skills";

const MySkills = () => {
  return (
    <section id="skills" className="bg-neutral-950 text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">
          Programming Skills
        </h2>
        <div className="my-skills flex justify-center text-base">
          <ul className="languages flex flex-wrap justify-center">
            {programmingSkills.map((skill, index) => (
              <li key={index} className="p-4 bg-blue-900 rounded-lg m-2">
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
