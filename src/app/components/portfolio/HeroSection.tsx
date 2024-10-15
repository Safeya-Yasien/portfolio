import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/hero.jpg"
              alt="Safeya Yasien, Front-end Developer"
              height={250}
              width={250}
              className="border rounded hidden lg:block"
            />
          </div>

          {/* Information Section */}
          <div className="flex flex-col space-y-6">
            {/* Name and Bio */}
            <h1 className="text-white text-3xl font-bold capitalize tracking-wider">
              Safeya Yasien
            </h1>
            <p className="text-slate-400 leading-8 text-base">
              As a front-end developer, I have learned React, Redux Toolkit,
              Bootstrap, SASS, TypeScript, Next.js, and Tailwind CSS. I focus on
              responsive design and clean code practices. I am expanding my
              knowledge with Cypress for end-to-end testing, which helps in
              automating browser interactions to ensure that web applications
              work as intended.
            </p>

            {/* Faculty Information */}
            <h2 className="text-white text-xl font-semibold">
              Education: Faculty of Computer and Artificial Intelligence
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
