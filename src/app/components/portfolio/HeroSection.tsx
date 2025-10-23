import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <section id="about" className="">
      <div className="">
        {/* Information Section */}
        <div className=" col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 flex flex-col  space-y-6">
          {/* Name and Bio */}
          <h1 className="text-3xl font-bold capitalize tracking-wider">
            Hi, I&apos;m Safeya Yasien,
            <br />
            <span className="text-blue-700 dark:text-blue-400">
              Front-End Developer | Learning MERN Stack
            </span>
          </h1>
          <p className="leading-8 text-base">
            My journey as a front-end developer is driven by a passion for
            creating responsive and clean web applications. With expertise in
            React, Redux Toolkit, Bootstrap, SASS, TypeScript, Next.js, and
            Tailwind CSS, I focus on crafting engaging user experiences. The
            12-month ALX program pushed me to expand my skills, while the DEPI
            program further honed my front-end development expertise, building
            my confidence to tackle complex projects. Additionally, I completed
            an internship with Nerds Arena, where I gained hands-on experience
            working on real-world projects and deepened my practical
            understanding of front-end development. Translate Ask ChatGPT
          </p>

          {/* education */}
          <div className="bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 p-6 rounded-xl shadow-sm max-w-xl transition-colors">
            <h2 className="font-semibold text-lg tracking-wide flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
              <FontAwesomeIcon
                icon={faGraduationCap}
                className="text-xl w-6 h-6"
              />
              Education
            </h2>
            <p className="text-base sm:text-lg">
              Faculty of Computer and Artificial Intelligence - FCAI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
