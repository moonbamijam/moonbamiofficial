import { buttonVariants } from "@/components/ui/Button";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { FiExternalLink } from "react-icons/fi";

type VisitButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function VisitButton({ href, className }: VisitButtonProps) {
  return (
    <Link
      id="visit-button"
      href={href as Url}
      target="_blank"
      aria-label="Website"
      className={`${buttonVariants({ variant: "cta" })} ${className}`}
    >
      <FiExternalLink />
      visit
    </Link>
  );
}
