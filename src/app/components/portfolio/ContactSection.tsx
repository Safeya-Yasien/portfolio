"use client";

import { useState } from "react";
import CustomTitle from "./CustomTitle";

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
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md">
          <CustomTitle title={" Contact Us"} />
          <p className="mb-8 lg:mb-15 font-light text-center  text-slate-300 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>

          <div className="text-center mb-8 flex items-center justify-center gap-3">
            <p className="text-slate-300">
              Email:{" "}
              <a href="mailto:ssafeya5@gmail.com" className="text-blue-400">
                ssafeya5@gmail.com
              </a>
            </p>
            <p className="text-slate-300">
              Phone:{" "}
              <a href="https://wa.me/201204296348" className="text-blue-400">
                01204296348
              </a>
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/Safeya-Yasien"
                target="_blank"
                className="text-slate-300 hover:text-blue-400"
                aria-label="go to github"
              >
                <svg
                  className="w-6 h-6  text-white transition-all hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/safeya-yasien-2ba9b4260/"
                target="_blank"
                className="text-slate-300 hover:text-blue-400"
                aria-label="go to linkedin"
              >
                <svg
                  className="w-6 h-6  text-white hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" focus-visible:outline-none shadow-sm  border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white   shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className=" block mb-2 text-sm font-medium  text-slate-300"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="focus-visible:outline-none  block p-2.5 w-full text-sm   rounded-lg shadow-sm border    bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                placeholder="Leave a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white  rounded-lg   bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 sm:w-fit block mx-auto"
            >
              Send message
            </button>
          </form>
          <span className="text-green-600 block mt-4 text-center">
            {result}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
