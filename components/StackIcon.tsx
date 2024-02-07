import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react';

type Props = {
  id: string
  href: Url
  src: string | StaticImport
  alt: string 
  className?: string
  icon?: ReactNode
}

const StackIcon = (props: Props) => {
  return (
    <Link id={ props.id } href={ props.href } target='_blank' className="relative flex items-center justify-center">
      <div className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] ${ props.className } absolute `}></div>
      <Image src={ props.src } alt={ props.alt } width={'1000'} height={'1000'} className="relative w-[50px] md:w-[60px] lg:w-[70px]" />
    </Link>
  )
}

export default StackIcon