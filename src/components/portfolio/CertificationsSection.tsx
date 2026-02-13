import React from "react";
import CustomTitle from "./CustomTitle";

const certifications = [
  {
    title: "Web Development Fundamentals",
    description:
      "Understanding of how to develop an interactive website using HTML, CSS, and JavaScript in a simulated integrated development environment (IDE).",
    link: "https://www.credly.com/badges/8e85207d-463f-4f27-b013-1db361dc9c88/linked_in_profile",
  },
  {
    title: "freeCodeCamp Responsive Web Design",
    description: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/fccbb698a47-dae9-49d6-b27e-6790b5df3aa7/responsive-web-design",
  },
  {
    title: "ALX Software Engineering",
    description: "ALX Software Engineering Short Specializations in Frontend",
    link: "https://intranet.alxswe.com/certificates/R2mThnY67X",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="">
      <CustomTitle title={"Certifications"} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md dark:shadow-[0_0_6px_rgba(255,255,255,0.08)]  flex flex-col"
          >
            <h3 className="text-xl font-semibold  mb-2">{cert.title}</h3>
            <p className="  mb-4">{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-600 hover:underline mt-auto transition-all"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
