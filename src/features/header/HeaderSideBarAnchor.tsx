import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { HeaderSideBarAnchorProps } from "./header.types";

export default function HeaderSideBarAnchor({
  href,
  isLinkActive,
  path,
  icon,
  iconName,
  "aria-label": label,
  onClick,
}: HeaderSideBarAnchorProps) {
  return (
    <Link
      href={href as Url}
      aria-label={label}
      onClick={onClick}
      className={`capitalize rounded-lg font-semibold p-6 w-full flex flex-col items-center gap-2 text-left ${isLinkActive(path) ? "active" : "hover:text-primary"} transition-colors`}
    >
      <span className="text-xl">{icon}</span>
      <div className="text-xs">{iconName}</div>
    </Link>
  );
}
