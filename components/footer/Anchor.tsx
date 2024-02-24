import Link from "next/link";
import { ReactNode } from "react";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url;
  target?: string;
  text: string;
  icon?: ReactNode;
};

const Anchor = ({ href, target, text, icon }: Props) => {
  return (
    <Link
      href={href}
      target={target}
      className="capitalize hover:text-highlight"
    >
      <span>{icon}</span>
      {text}
    </Link>
  );
};

export default Anchor;
