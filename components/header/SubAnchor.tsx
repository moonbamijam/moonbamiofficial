'use client'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

type Props = {
  onClick?: MouseEventHandler
  name: string
}
const SubAnchor = (props: Props) => {
  return (
    <button onClick={ props.onClick } className="capitalize w-[100px] text-right text-sm px-1 hover:px-3 rounded-md hover:bg-electric-pink transition-all " >{ props.name }</button>
  )
}

export default SubAnchor