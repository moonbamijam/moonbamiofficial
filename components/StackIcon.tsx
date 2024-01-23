import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  href: Url
  src: string | StaticImport
  alt: string 
  className?: string
}

const StackIcon = (props: Props) => {
  return (
    <Link href={ props.href } target='_blank'>
      <Image src={ props.src } alt={ props.alt } width={'50'} height={'50'} className={`${ props.className } w-[50px] md:w-[60px] lg:w-[70px] `} />
    </Link>
  )
}

export default StackIcon