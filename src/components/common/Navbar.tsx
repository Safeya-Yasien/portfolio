"use client";

import { useState } from "react";
import Link from "next/link";

import cn from "@/lib/utlis";

import { navLinks } from "@/constants/navLinks";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { Github, Linkedin, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-neutral-950/60 backdrop-blur-md border-b border-white/20 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between py-4 gap-3">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Safeya Yasien
          </span>
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="https://github.com/Safeya-Yasien"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-blue-950 dark:hover:text-blue-400"
            aria-label="Visit GitHub profile"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/safeya-yasien/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-gray-200 dark:hover:bg-blue-950 dark:hover:text-blue-400"
            aria-label="Visit LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <ThemeSwitcher />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 transition-all">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    href={`${link.path}`}
                    onClick={toggleMenu}
                    scroll
                    className={cn(
                      "block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-blue-600 dark:hover:text-blue-400 transition-all",
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

        <ul className="hidden md:flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <Link
              href="https://github.com/Safeya-Yasien"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 md:me-6 flex items-center text-xl transition hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="go to github"
            >
              <Github />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/safeya-yasien/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4 md:me-6 flex items-center text-xl transition hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="go to linkedin"
            >
              <Linkedin />
            </Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
