'use client'

import { useTheme } from "next-themes"
import { MouseEventHandler, ReactNode, useEffect, useState } from "react"
import { BsMoonStars, BsSun } from "react-icons/bs"
import { GiStripedSun } from "react-icons/gi"

type Props = {
  onClick?: MouseEventHandler
  icon?: ReactNode
}

const ThemeSwitchBtn = () => {
  const [ mounted, setMounted ] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if(!mounted) 
    return (
      <Button icon={ <GiStripedSun /> } />
    )

  if(resolvedTheme === 'dark') {
    return (
      <Button onClick={() => setTheme('light')} icon={ <BsSun /> } />
    )
  }

  if(resolvedTheme === 'light') {
    return (
      <Button onClick={() => setTheme('dark')} icon={ <BsMoonStars /> } />
    )
  }
}

const Button = (props: Props) => {
  return (
    <button onClick={ props.onClick } className=" rounded-full bg-rich-black hover:bg-electric-pink p-2 text-xl " >
      { props.icon }
    </button>
  )
}


export default ThemeSwitchBtn