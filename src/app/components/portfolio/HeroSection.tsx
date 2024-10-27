const HeroSection = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-12  gap-6 mx-auto">
        {/* Information Section */}
        <div className=" col-start-2 col-span-10 lg:col-start-4 lg:col-span-6 flex flex-col  space-y-6">
          {/* Name and Bio */}
          <h1 className="text-white text-3xl font-bold capitalize tracking-wider">
            Safeya Yasien
          </h1>
          <p className="text-slate-300 leading-8 text-base">
            My journey as a front-end developer is driven by a passion for
            creating responsive and clean web applications. With expertise in
            React, Redux Toolkit, Bootstrap, SASS, TypeScript, Next.js, and
            Tailwind CSS, I focus on crafting engaging user experiences. The
            12-month ALX program pushed me to expand my skills, while the DEPI
            program further honed my front-end development expertise, building
            my confidence to tackle complex projects.
          </p>
          <h2 className="text-white text-2xl font-semibold tracking-wide">
            Education:
            <br /> Faculty of Computer and Artificial Intelligence - FCAI
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
