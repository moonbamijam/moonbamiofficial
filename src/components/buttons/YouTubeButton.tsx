import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { FaYoutube } from "react-icons/fa";

export default function YouTubeButton() {
  return (
    <Link
      href="https://www.youtube.com/@/Moonbami/"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-[#FF0000]! shadow-[#FF0000]/50!`}
    >
      <FaYoutube />
      YouTube
    </Link>
  );
}
