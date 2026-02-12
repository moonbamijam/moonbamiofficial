import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { HeaderAnchorProps } from "./header.types";

export default function HeaderAnchor({
  href,
  name,
  isLinkActive,
  path,
  "aria-label": label,
  onClick,
}: HeaderAnchorProps) {
  return (
    <Link
      href={href as Url}
      aria-label={label}
      onClick={onClick}
      className={`capitalize rounded-lg font-semibold px-4 xl:px-6 py-3 text-sm xl:text-base ${isLinkActive(path) ? "active" : "hover:text-primary"} transition-colors`}
    >
      {name}
    </Link>
  );
}
