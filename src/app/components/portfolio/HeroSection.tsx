import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Image Section */}

          {/* Information Section */}
          <div className="flex flex-col space-y-6">
            {/* Name and Bio */}
            <h1 className="text-white text-3xl font-bold capitalize tracking-wider">
              Safeya Yasien
            </h1>
            <p className="text-slate-400 leading-8 text-base">
              As I reflect on my journey, I realize that my passion for building
              responsive and clean web applications has been a driving force in
              my career as a front-end developer. With a strong foundation in
              React, Redux Toolkit, Bootstrap, SASS, TypeScript, Next.js, and
              Tailwind CSS, I&apos;ve been able to craft engaging user
              experiences that delight and inspire.
              <br />
              My journey took a significant turn when I enrolled in the ALX
              program, a 12-month intensive course that would challenge me to
              push beyond my limits. I was determined to expand my skills and
              knowledge, and ALX provided the perfect platform to do so. <br />
              In addition to ALX, I also had the opportunity to participate in
              the DEPI program, a 6-month intensive course that further honed my
              skills and knowledge in front-end development. This experience not
              only deepened my understanding of web development but also gave me
              the confidence to take on more complex projects.
            </p>
          </div>
          <div className="flex flex-col space-y-6 pt-14">
            <p className="text-slate-400 leading-8 text-base">
              In addition to ALX, I also had the opportunity to participate in
              the DEPI program, a 6-month intensive course that further honed my
              skills and knowledge in front-end development. This experience not
              only deepened my understanding of web development but also gave me
              the confidence to take on more complex projects.
            </p>
            {/* Faculty Information */}
            <h2 className="text-white text-xl font-semibold">
              Education: Faculty of Computer and Artificial Intelligence - FCAI
            </h2>

            {/* Contact Details */}
            <h2 className="text-white text-xl font-semibold">
              Contact Information
            </h2>
            <p className="text-slate-400">
              <span className="font-bold">Email: </span>
              <a
                href="mailto:ssafeya5@gmail.com"
                className="text-blue-500 hover:underline"
              >
                ssafeya5@gmail.com
              </a>
            </p>
            <p className="text-slate-400">
              <span className="font-bold">Phone: </span>
              <a
                href="https://wa.me/201204296348"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                01204296348
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
