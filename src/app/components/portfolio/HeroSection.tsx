import { programmingSkills } from "@/app/constants/programming-skills";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="about">
      <div className="container ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <Image
              src="/hero.jpg"
              alt="Safeya Yasien, Front-end Developer"
              height={250}
              width={250}
              className="border rounded  hidden lg:block "
            />
          </div>
          <div className="flex flex-col space-y-6 ">
            <h1 className="text-white text-3xl font-bold uppercase tracking-wider">
              Safeya Yasien
            </h1>
            <p className="text-slate-400 leading-8 text-base ">
              As a front-end developer, I have learned React, Redux Toolkit,
              Bootstrap, SASS, and TypeScript. I have built several projects
              using these technologies, focusing on responsive design and clean
              code practices. Currently, I&apos;m applying my skills in
              e-commerce and e-learning platforms to enhance my development
              expertise. Additionally, I am expanding my knowledge with Cypress
              for end-to-end testing, which helps in automating browser
              interactions to ensure that web applications work as intended
            </p>
            <h2 className="text-center text-white text-xl ">
              Programming Skills
            </h2>
            <div className="my-skills flex text-white text-base flex-wrap">
              <ul className="languages flex flex-wrap">
                {programmingSkills.map((skill, index) => (
                  <li key={index} className="p-4">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
