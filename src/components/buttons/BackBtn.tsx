import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link href={href} className={`${buttonVariants({ variant: "ghost" })}`}>
      <FaBackwardStep />
      back
    </Link>
  );
}
