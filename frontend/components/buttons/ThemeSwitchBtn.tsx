"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { Button } from "@frontend/components/ui/Button";

type Props = {
  onClick?: MouseEventHandler;
  icon?: ReactNode;
};

export default function ThemeSwitchBtn() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <LoadingSpinner size="40px" fontSizes="text-xl xl:text-2xl" />;

  if (resolvedTheme === "dark") {
    return <Btn onClick={() => setTheme("light")} icon={<FiSun />} />;
  } else if (resolvedTheme === "light") {
    return <Btn onClick={() => setTheme("dark")} icon={<FiMoon />} />;
  }
}

const Btn = ({ onClick, icon }: Props) => {
  return (
    <Button
      aria-label="theme-switch"
      onClick={onClick}
      variant="toggle"
      size="icon"
      className="[&>svg>path]:hover:text-on-primary [&>svg>circle]:hover:text-on-primary [&>svg>line]:hover:text-on-primary "
    >
      {icon}
    </Button>
  );
};
