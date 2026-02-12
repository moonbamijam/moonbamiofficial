import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { FaXTwitter } from "react-icons/fa6";

export default function TwitterButton() {
  return (
    <Link
      href="https://twitter.com/moonbamijam"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-black! shadow-black/50!`}
    >
      <FaXTwitter />
      twitter
    </Link>
  );
}
