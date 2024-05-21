"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkSwitchMode() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentThemes = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  return (
    <div>
      {mounted &&
        (currentThemes === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="text-2xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="text-2xl cursor-pointer hover:text-amber-500"
          />
        ))}
    </div>
  );
}
