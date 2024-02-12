import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url
  target?: string
  text: string
  icon?: ReactNode
}

const Anchor = (props: Props) => {
  return (
    <Link href={ props.href } target={ props.target } className="switch-text-color capitalize hover:text-electric-pink">
      <span>{ props.icon }</span>
      { props.text }
    </Link>
  )
}

export default Anchor