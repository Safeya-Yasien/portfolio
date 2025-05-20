import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center py-2">
      <span className="text-sm sm:text-center ">
        © 2024
        <Link
          href="https://github.com/Safeya-Yasien/"
          target="_blank"
          className="underline "
        >
          {" "}
          Safeya Yasien™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
