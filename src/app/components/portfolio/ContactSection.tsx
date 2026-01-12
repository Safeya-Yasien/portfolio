"use client";

import { useState } from "react";
import CustomTitle from "./CustomTitle";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "d8bc69e2-c253-4c78-bef6-2d245b2ab7e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setResult(data.message);
      form.reset();
    } else {
      setResult(data.message || "An error occurred");
    }
  };

  return (
    <section id="contact" className="">
      <CustomTitle title={" Contact Us"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start gap-4">
          {/* email */}
          <div className="">
            Email:{" "}
            <a
              href="mailto:ssafeya5@gmail.com"
              className="underline text-blue-700 dark:text-blue-400"
            >
              ssafeya5@gmail.com
            </a>
          </div>
          {/* links */}
          <div className="flex">
            <Link
              href="https://github.com/Safeya-Yasien"
              target="_blank"
              className="me-4 md:me-6 flex items-center text-xl"
              aria-label="go to github"
            >
              <Github />
            </Link>
            <Link
              href="https://www.linkedin.com/in/safeya-yasien-2ba9b4260/"
              target="_blank"
              className="me-4 md:me-6 flex items-center text-xl"
              aria-label="go to linkedin"
            >
              <Linkedin />
            </Link>
          </div>
        </div>

        {/* form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium sr-only"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" focus-visible:outline-none text-sm dark:rounded-lg   block w-full p-2.5 dark:bg-black border-b dark:border dark:border-gray-600 placeholder:text-black dark:placeholder:text-white dark:text-white "
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className=" block mb-2 text-sm font-medium sr-only"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              className=" focus-visible:outline-none text-sm dark:rounded-lg   block w-full p-2.5 dark:bg-black border-b dark:border dark:border-gray-600 placeholder:text-black dark:placeholder:text-white dark:text-white "
              placeholder="Leave a comment..."
              required
            />
          </div>
          <button
            type="submit"
            className="py-2 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-800 hover:bg-blue-900 focus:ring-blue-900 block w-full"
          >
            Send message
          </button>
        </form>
        <span className="text-green-600 block mt-4 text-center">{result}</span>
      </div>
    </section>
  );
};

export default ContactSection;
