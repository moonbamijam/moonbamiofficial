"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

export default function ThemeSwitchBtn() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <LoadingSpinner size="40px" fontSizes="px-4 py-3 text-xl xl:text-2xl" />
    );

  if (resolvedTheme === "dark") {
    return (
      <Button
        aria-label="theme-switch"
        onClick={() => setTheme("light")}
        variant="toggle"
        size="icon"
        className="group"
      >
        <FiSun className="dark:group-hover:text-background transition-colors" />
      </Button>
    );
  } else {
    return (
      <Button
        aria-label="theme-switch"
        onClick={() => setTheme("dark")}
        variant="toggle"
        size="icon"
      >
        <FiMoon />
      </Button>
    );
  }
}
