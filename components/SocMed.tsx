import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { Url } from "next/dist/shared/lib/router/router"
import Image from "next/image"
import Link from "next/link"

type Props = {
  href: Url
  src: StaticImport
  text?: string
}

const SocMed = (props: Props) => {
  return (
    <Link href={ props.href } className="flex items-center gap-2">
      <Image src={ props.src } alt="" width={50} height={50} className="w-[50px]" />
      <p className="switch-text-color font-bold text-xl capitalize">{ props.text } </p>
    </Link>
  )
}

export default SocMed