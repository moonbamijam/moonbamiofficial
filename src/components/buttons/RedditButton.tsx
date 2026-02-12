import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { FaRedditAlien } from "react-icons/fa";

export default function RedditButton() {
  return (
    <Link
      href="https://www.reddit.com/user/MoonbamiOfficial/"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-[#FF4500]! shadow-[#FF4500]/50!`}
    >
      <FaRedditAlien />
      reddit
    </Link>
  );
}
