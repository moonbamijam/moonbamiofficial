"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { buttonVariants } from "@frontend/components/ui/Button";
import { AnchorHTMLAttributes } from "@node_modules/@types/react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Url;
  ariaLabel: string;
  name: string;
  active: string;
};

export default function Anchor({ href, ariaLabel, name, active }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${buttonVariants({ variant: "nav", size: "auto" })} ${active}`}
    >
      {name}
    </Link>
  );
}
