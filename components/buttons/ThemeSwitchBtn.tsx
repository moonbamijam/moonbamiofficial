"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingSpinner from "@components/ui/LoadingSpinner";

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
    return <Button onClick={() => setTheme("light")} icon={<FiSun />} />;
  } else if (resolvedTheme === "light") {
    return <Button onClick={() => setTheme("dark")} icon={<FiMoon />} />;
  }
}

const Button = ({ onClick, icon }: Props) => {
  return (
    <button
      aria-label="theme-switch"
      onClick={onClick}
      className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl hover:bg-primary [&>svg>path]:hover:text-on-primary [&>svg>circle]:hover:text-on-primary [&>svg>line]:hover:text-on-primary hover:rotate-45 transform active:scale-75"
    >
      {icon}
    </button>
  );
};
