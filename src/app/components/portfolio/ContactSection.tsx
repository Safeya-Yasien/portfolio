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
          <p className="mb-8 lg:mb-16 font-light text-center  text-slate-300 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
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
