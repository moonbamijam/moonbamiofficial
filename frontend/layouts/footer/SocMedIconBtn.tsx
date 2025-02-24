import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@frontend/components/ui/Button";

type Props = {
  href: Url;
  ariaLabel: string;
  icon: ReactNode;
};

export default function SocMedIconBtn({ href, ariaLabel, icon }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className={`${buttonVariants({ variant: "icon", size: "icon" })} !border-white hover:-translate-y-2`}
    >
      {icon}
    </Link>
  );
}
