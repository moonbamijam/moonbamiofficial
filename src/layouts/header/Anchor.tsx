import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { AnchorHTMLAttributes } from "react";

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
      className={`capitalize rounded-lg font-semibold px-4 xl:px-6 py-3 text-left md:text-center ${isLinkActive(path) ? "active" : "hover:text-primary"} transition-colors`}
    >
      {name}
    </Link>
  );
}
