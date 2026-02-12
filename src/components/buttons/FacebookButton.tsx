import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { buttonVariants } from "../ui/variants";

export default function FacebookButton() {
  return (
    <Link
      href="https://www.facebook.com/moonbamijam"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-[#1877F2]! shadow-[#1877F2]/50!`}
    >
      <FaFacebook />
      facebook
    </Link>
  );
}
