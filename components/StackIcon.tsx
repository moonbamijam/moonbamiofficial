import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

type Props = {
  href: Url
  src: string | undefined
  alt: string 
  className?: string
}

const StackIcon = (props: Props) => {
  return (
    <Link href={ props.href } target='_blank'>
      <img src={ props.src } alt={ props.alt } className={`${ props.className } w-[50px] md:w-[60px] lg:w-[70px] `} />
    </Link>
  )
}

export default StackIcon