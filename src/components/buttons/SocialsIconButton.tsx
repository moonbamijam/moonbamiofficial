import { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Url } from "next/dist/shared/lib/router/router";

interface SocialsIconButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ReactNode;
}

export default function SocialsIconButton({
  href,
  icon,
  "aria-label": ariaLabel,
}: SocialsIconButtonProps) {
  return (
    <Link
      href={href as Url}
      aria-label={ariaLabel}
      target="_blank"
      className={`${buttonVariants({ variant: "icon", size: "icon" })} hover:bg-primary hover:text-white dark:hover:text-black`}
    >
      {icon}
    </Link>
  );
}
