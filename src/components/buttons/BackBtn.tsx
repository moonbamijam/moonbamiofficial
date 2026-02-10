import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`${buttonVariants({ variant: "ghost" })} text-black hover:text-white dark:hover:text-black group`}
    >
      <FaBackwardStep className="group-hover-text-white dark:group-hover:text-black transition-colors " />
      back
    </Link>
  );
}
