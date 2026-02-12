import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { SiGmail } from "react-icons/si";

export default function EmailBtn() {
  return (
    <Link
      href="mailto:Jam Moonbami <moonbamijamofficial15@/gmail.com>"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })}`}
    >
      <SiGmail />
      email
    </Link>
  );
}
