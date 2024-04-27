import { Url } from "next/dist/shared/lib/router/router";
import { IconBaseProps } from "react-icons";
import Link from "next/link";

type Props = {
  href: Url;
  ariaLabel: string;
  icon: React.ReactNode;
  text?: string;
};

export default function SocMed({ href, ariaLabel, icon, text }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className="flex items-center gap-2 font-bold text-xl capitalize"
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
}
