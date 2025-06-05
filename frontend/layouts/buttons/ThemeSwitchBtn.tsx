"use client";

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { Button } from "@frontend/components/ui/Button";

type Props = {
  onClick?: MouseEventHandler;
  icon?: ReactNode;
  isMenuActive?: boolean;
};

export default function ThemeSwitchBtn({
  isMenuActive,
}: {
  isMenuActive: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <LoadingSpinner size="40px" fontSizes="text-xl xl:text-2xl" />;

  if (resolvedTheme === "dark") {
    return (
      <Btn
        onClick={() => setTheme("light")}
        icon={<FiSun />}
        isMenuActive={isMenuActive}
      />
    );
  } else if (resolvedTheme === "light") {
    return (
      <Btn
        onClick={() => setTheme("dark")}
        icon={<FiMoon />}
        isMenuActive={isMenuActive}
      />
    );
  }
}

const Btn = ({ onClick, icon, isMenuActive }: Props) => {
  return (
    <Button
      aria-label="theme-switch"
      onClick={onClick}
      variant="toggle"
      size="icon"
      className={`${isMenuActive ? "[&>svg>path]:text-white [&>svg>circle]:text-white [&>svg>line]:text-white [&>svg>path]:lg:text-black [&>svg>circle]:lg:text-black [&>svg>line]:lg:text-black [&>svg>path]:hover:text-white [&>svg>circle]:hover:text-white [&>svg>line]:hover:text-white [&>svg>path]:dark:hover:text-black [&>svg>circle]:dark:hover:text-black [&>svg>line]:dark:hover:text-black" : "[&>svg>path]:hover:text-white [&>svg>circle]:hover:text-white [&>svg>line]:hover:text-white [&>svg>path]:dark:hover:text-black [&>svg>circle]:dark:hover:text-black [&>svg>line]:dark:hover:text-black"}`}
    >
      {icon}
    </Button>
  );
};
