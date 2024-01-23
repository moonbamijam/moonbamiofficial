import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url
  text: string
  icon?: ReactNode
}

const Anchor = (props: Props) => {
  return (
    <Link href={ props.href } target="_blank" className="switch-text-color capitalize">
      <span>{ props.icon }</span>
      { props.text }
    </Link>
  )
}

export default Anchor