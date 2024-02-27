"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  onClick?: MouseEventHandler;
  icon?: ReactNode;
};

const ThemeSwitchBtn = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button
        aria-label="loading-theme-switch"
        className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl xl:text-2xl dark:hover:bg-highlight animate-spin"
      >
        <AiOutlineLoading3Quarters />
      </button>
    );

  if (resolvedTheme === "dark") {
    return <Button onClick={() => setTheme("light")} icon={<FiSun />} />;
  } else if (resolvedTheme === "light") {
    return <Button onClick={() => setTheme("dark")} icon={<FiMoon />} />;
  }
};

const Button = ({ onClick, icon }: Props) => {
  return (
    <button
      aria-label="theme-switch"
      onClick={onClick}
      className="rounded-full w-[40px] h-[40px] flex items-center justify-center text-xl hover:shadow-md hover:shadow-gray-500 dark:hover:bg-highlight hover:rotate-45"
    >
      {icon}
    </button>
  );
};

export default ThemeSwitchBtn;
