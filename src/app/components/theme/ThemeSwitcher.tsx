"  use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const icon = theme == "dark" ? faSun : faMoon;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center text-xl transition hover:text-blue-600 dark:hover:text-blue-400"
      aria-label="toggle theme"
    >
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
    </button>
  );
};

export default ThemeSwitcher;
