import { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@frontend/components/ui/Button";

type Props = {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
};

export default function SocMedIconBtn({ href, ariaLabel, icon }: Props) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className={`${buttonVariants({ variant: "icon", size: "icon" })} hover:bg-primary hover:text-white dark:hover:text-black`}
    >
      {icon}
    </Link>
  );
}
