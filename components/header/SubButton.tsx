'use client'

import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { MouseEventHandler } from 'react'

type Props = {
  onClick?: MouseEventHandler
  name: string
}
const SubButton = (props: Props) => {
  return (
    <button onClick={ props.onClick } className="capitalize w-[150px] pl-10 text-left hover:pl-12 rounded-lg hover:bg-electric-pink transition-all" >{ props.name }</button>
  )
}

export default SubButton