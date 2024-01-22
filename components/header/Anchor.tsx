'use client'

import Link from 'next/link'
import React, { MouseEventHandler, ReactNode, useState } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa'

type Props = {
  onClick?: MouseEventHandler
  href: Url
  name: string
  state?: boolean
  children?: React.ReactNode
  icon?: ReactNode
}

const Anchor = (props: Props) => {
  const [ isHovered, setIsHovered ] = useState("rotate-0")

  return (
    <div onMouseEnter={ () => setIsHovered("-rotate-90") } onMouseLeave={ () => setIsHovered("rotate-0") } className="h-full relative flex flex-col justify-center items-center cursor-pointer transition-all ">
      <Link onClick={ props.onClick } href={ props.href } className={`${ props.state? '[&>div]:-rotate-90' : '[&>div]:rotate-0' } h-full rounded text-sm text-center hover:text-electric-pink  w-[100px] py-2 flex justify-center items-center gap-2  capitalize transition-all`}>
        { props.name } 
        <div className={`  transition-all`}>
          <FaAngleLeft />
        </div>
      </Link>
      {props.state && (
      <div className="absolute top-[60px] flex flex-col gap-2 px-4 py-8 rounded-lg bg-rich-black transition-all ">
        { props.children }
      </div>)}
    </div>
  )
}

export default Anchor