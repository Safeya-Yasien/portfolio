import { GraduationCap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="mt-8">
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
            I’m a front-end developer skilled in React, Next.js, TypeScript, and
            Tailwind CSS. Recently, I’ve been expanding into back-end
            development with Node.js, Express, and MongoDB to build full-stack
            (MERN) applications. I gained hands-on experience through the ALX
            and DEPI programs and an internship at Nerds Arena, working on
            real-world projects that strengthened my technical and teamwork
            skills.
          </p>

          {/* education */}
          <div className="bg-gray-100 dark:bg-neutral-800/40 border border-gray-300 dark:border-neutral-700 p-6 rounded-xl shadow-sm max-w-xl transition-colors">
            <h2 className="font-semibold text-lg tracking-wide flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
              <GraduationCap className="text-xl w-6 h-6" />
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
