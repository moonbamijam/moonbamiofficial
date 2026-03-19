import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { SiGmail } from "react-icons/si";

export default function EmailButton() {
  return (
    <Link
      href="mailto:Jam Mikhail <mikhailjam.alvarez@gmail.com>"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })}`}
    >
      <SiGmail />
      email
    </Link>
  );
}
