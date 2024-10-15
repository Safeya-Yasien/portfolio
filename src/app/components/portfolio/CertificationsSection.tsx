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
    <section id="certifications" className="bg-gray-100  py-12">
      <div className="container mx-auto px-4">
        <CustomTitle title={"Certifications"} />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white  p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900  mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-600  mb-4">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 "
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
