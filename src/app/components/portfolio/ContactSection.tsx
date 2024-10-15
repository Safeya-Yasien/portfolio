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
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" focus-visible:outline-none shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 "
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className=" block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                name="message"
                className="focus-visible:outline-none  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300    "
                placeholder="Leave a comment..."
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800    sm:w-fit block mx-auto"
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
