"use client";

import React, { useState } from "react";
import Link from "next/link";

import cn from "@/lib/utlis";

import { navLinks } from "@/app/constants/navLinks";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-neutral-950/60 backdrop-blur-md border-b border-white/20 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Safeya Yasien
          </span>
        </Link>

        {/* menu bar */}
        <div className="flex items-center gap-2 md:hidden">
  <ThemeSwitcher />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>

        </div>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 transition-all">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`#${link.path}`}
                    scroll
                    className={cn(
                      "block py-2 px-3  rounded md:bg-transparent  md:p-0  hover:text-blue-500 transition-all"
                    )}
                    aria-current="page"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="hidden md:flex flex-wrap items-center text-sm font-medium  sm:mt-0">
          {/* github */}
          <li>
            <Link
              href="https://github.com/Safeya-Yasien"
              target="_blank"
              className="me-4 md:me-6 flex items-center text-xl transition hover:text-blue-400"
              aria-label="go to github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          {/* linkedin */}
          <li>
            <Link
              href="https://www.linkedin.com/in/safeya-yasien-2ba9b4260/"
              target="_blank"
              className="me-4 md:me-6 flex items-center text-xl  transition hover:text-blue-400"
              aria-label="go to linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </li>
          {/* ThemeSwitcher */}
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
