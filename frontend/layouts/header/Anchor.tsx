"use client";

import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { buttonVariants } from "@frontend/components/ui/Button";
import { AnchorHTMLAttributes } from "@node_modules/@types/react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: Url;
  ariaLabel: string;
  name: string;
  isLinkActive: (path: string | undefined) => boolean;
  path?: string;
};

export default function Anchor({
  href,
  ariaLabel,
  name,
  isLinkActive,
  path,
}: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${buttonVariants({ variant: "nav", size: "auto" })} ${isLinkActive(path) ? "active" : "hover:text-primary dark:hover:text-secondary"}`}
    >
      {name}
    </Link>
  );
}
