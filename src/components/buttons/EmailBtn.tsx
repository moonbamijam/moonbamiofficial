import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { SiGmail } from "react-icons/si";

export default function EmailBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${buttonVariants({ variant: "ghost" })} hover:text-white dark:hover:text-black group`}
    >
      <SiGmail className="group-hover:text-white dark:group-hover:text-black transition-colors" />
      email
    </Link>
  );
}
