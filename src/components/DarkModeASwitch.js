"use client";

import { useTheme } from "next-themes";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";
function DarkModeASwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(function () {
    setMounted(true);
  }, []);
  const currentTheme = theme === systemTheme ? systemTheme : theme;
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <CiLight
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsMoonStars
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeASwitch;
