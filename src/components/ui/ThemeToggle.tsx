"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeToggle = () => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <select
      data-choose-theme
      className="select select-primary text-secondary select-sm w-3/4 lg:w-full max-w-xs"
    >
      <option value="synthwave">Synthwave</option>
      <option value="fantasy">Fantasy</option>
      <option value="garden">Garden</option>
    </select>
  );
};

export default ThemeToggle;
