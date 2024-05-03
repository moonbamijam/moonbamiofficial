"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url;
  ariaLabel: string;
  name: string;
  className: string;
};

export default function Anchor({ href, ariaLabel, name, className }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${className} text-left px-12 md:px-14 xl:px-16 py-2 hover:bg-primary dark:hover:bg-primary-light hover:text-on-primary rounded-lg capitalize`}
    >
      {name}
    </Link>
  );
}
