'use client'

import Link from 'next/link'
import { MouseEventHandler, ReactNode, useState } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'
import { FaAngleLeft } from 'react-icons/fa'

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
    <div onClick={ props.onClick } className="h-full relative flex flex-col justify-center items-center cursor-pointer ">
      <Link href={ props.href } className={`${ props.state? '[&>div]:-rotate-90 [&>div]:bg-electric-pink [&>div]:dark:bg-electric-pink w-[100px]' : '[&>div]:rotate-0' } h-full rounded text-sm text-center [&>div]:hover:bg-electric-pink [&>div]:dark:hover:bg-electric-pink w-[100px] py-2 flex justify-center items-center gap-2  capitalize`}>
        { props.name } 
        <div className="rounded-full bg-black p-1 dark:bg-transparent">
          <FaAngleLeft />
        </div>
      </Link>
      {props.state && (
      <div className="absolute top-[60px] flex flex-col gap-2 px-4 py-8 rounded-lg bg-rich-black border border-transparent dark:border-white">
        { props.children }
      </div>)}
    </div>
  )
}

export default Anchor;