import "./ThemeToggle.css";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  // Initialize state based on localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to the <html> element and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">☀️</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className="opacity-0 w-0 h-0"
        />
        <span className="slider round"></span>
      </label>
      <span className="ml-2 text-sm">🌙</span>
    </div>
  );
};

export default ThemeToggle;
