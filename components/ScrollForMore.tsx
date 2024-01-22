'use client'

import { useEffect, useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'

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
      <p>Scroll down for more!</p>
      <FaCaretDown />
    </div>
  )
}

export default ScrollForMore