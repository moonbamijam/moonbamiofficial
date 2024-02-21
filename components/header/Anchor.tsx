"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  href: Url;
  name: string;
  className: string;
};

export default function Anchor({ href, name, className }: Props) {
  return (
    <Link
      href={href}
      className={`${className} switch-text-color text-left px-12 md:px-14 xl:px-16 py-2 hover:bg-azure hover:text-white rounded-lg capitalize`}
    >
      {name}
    </Link>
  );
}
