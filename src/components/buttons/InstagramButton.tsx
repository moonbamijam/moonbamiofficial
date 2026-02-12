import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
  return (
    <Link
      href="https://www.instagram.com/moonbamijam/"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-instagram-gradient shadow-[#c92bb7]/50!`}
    >
      <FaInstagram />
      instagram
    </Link>
  );
}
