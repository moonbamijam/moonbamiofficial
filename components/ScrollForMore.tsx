'use client'

import { useEffect, useState } from 'react'
import { FaCaretDown } from "react-icons/fa6";

const ScrollForMore = () => {
  const [ scrollSign, setScrollSign ] = useState("opacity-100")
  
  const handleScrollSign = () => {
    if(window.scrollY < 500) return setScrollSign("opacity-100")
    else if(window.scrollY > 500) return setScrollSign("opacity-0")
  } 

  useEffect(() => {
    window.addEventListener('scroll', handleScrollSign)
    return () => window.removeEventListener('scroll', handleScrollSign)
  }, [])
  return (
    <div id="scroll-sign" className={`${ scrollSign } flex flex-col items-center gap-1 mb-[30px] animate-bounce transition-opacity`} >
      <p className="switch-text-color">Scroll down for more!</p>
      <div className="rounded-full bg-black p-1 dark:bg-transparent">
        <FaCaretDown />
      </div>
    </div>
  )
}

export default ScrollForMore