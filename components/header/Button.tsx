'use client'

import Link from 'next/link'
import { Url } from "next/dist/shared/lib/router/router";
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  onClick?: MouseEventHandler
  href: Url
  state?: boolean
  name: string
  children?: React.ReactNode
  icon?: ReactNode
}

const Button = (props: Props) => {

  return (
    <div className="flex flex-col w-[100px] capitalize">
      <Link onClick={ props.onClick } href={ props.href }>
        <div className={`${ props.state? 'text-electric-pink' : 'text-white' } flex gap-1 items-center hover:text-electric-pink transition-all`}>
          { props.icon }
          { props.name }
        </div>
      </Link>
      <div className="sub-link flex flex-col pl-10  ">
        { props.children }
      </div>
    </div>
  )
}

export default Button