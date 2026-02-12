import { buttonVariants } from "@/components/ui/Button";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { FaBackwardStep } from "react-icons/fa6";

type BackButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export default function BackButton({ href }: BackButtonProps) {
  return (
    <Link
      href={href as Url}
      className={`${buttonVariants({ variant: "ghost" })}`}
    >
      <FaBackwardStep />
      back
    </Link>
  );
}
