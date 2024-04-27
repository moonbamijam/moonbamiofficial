import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: Url;
  ariaLabel: string;
  icon: ReactNode;
};

export default function SocMedIcon({ href, ariaLabel, icon }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className="p-2 border-2 border-black dark:border-white rounded-full hover:border-highlight hover:bg-highlight dark:hover-border-highlight dark:hover:border-highlight [&>svg>path]:hover:text-white cursor-pointer "
    >
      {icon}
    </Link>
  );
}
