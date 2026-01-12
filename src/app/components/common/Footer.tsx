import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center py-2">
      <span className="text-sm sm:text-center ">
        © 2024
        <Link
          href="https://github.com/Safeya-Yasien/"
          target="_blank"
          className="underline hover:text-blue-900 dark:hover:text-blue-800"
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
