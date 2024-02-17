'use client'

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

type Props = {
  onClick?: MouseEventHandler
  icon?: ReactNode
}

const ThemeSwitchBtn = () => {
  const [ mounted, setMounted ] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) 
    return (
      <button aria-label="loading-theme-switch" className="rounded-full bg-rich-black dark:bg-transparent hover:bg-electric-pink dark:hover:bg-electric-pink w-[40px] h-[40px] flex items-center justify-center text-xl animate-spin">
        <AiOutlineLoading3Quarters />
      </button>
    );

  if (resolvedTheme === 'dark') {
    return (
      <Button onClick={() => setTheme('light')} icon={ <FiSun /> } />
    )
  } else if (resolvedTheme === 'light') {
    return (
      <Button onClick={() => setTheme('dark')} icon={ <FiMoon /> } />
    )
  };
};

const Button = (props: Props) => {
  return (
    <button aria-label="theme-switch" onClick={ props.onClick } className="rounded-full bg-rich-black dark:bg-transparent hover:bg-electric-pink dark:hover:bg-electric-pink w-[40px] h-[40px] flex items-center justify-center text-xl hover:rotate-45">
      { props.icon }
    </button>
  )
};


export default ThemeSwitchBtn;