import Link from "next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import { SiGmail } from "react-icons/si";

export default function EmailBtn({ href }: { href: string }) {
  return (
    <Link href={href} target="_blank" className={`${buttonVariants()}`}>
      <SiGmail />
      email
    </Link>
  );
}
