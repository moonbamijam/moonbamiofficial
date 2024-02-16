'use client'

import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { GiStripedSun } from "react-icons/gi";

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
      <Button icon={ <GiStripedSun /> } />
    );

  if (resolvedTheme === 'dark') {
    return (
      <Button onClick={() => setTheme('light')} icon={ <BsSun /> } />
    )
  } else if (resolvedTheme === 'light') {
    return (
      <Button onClick={() => setTheme('dark')} icon={ <BsMoonStars /> } />
    )
  };
};

const Button = (props: Props) => {
  return (
    <button aria-label="theme-switch" onClick={ props.onClick } className="rounded-full bg-rich-black dark:bg-transparent hover:bg-electric-pink dark:hover:bg-electric-pink w-[40px] h-[40px] flex items-center justify-center text-xl " >
      { props.icon }
    </button>
  )
};


export default ThemeSwitchBtn;