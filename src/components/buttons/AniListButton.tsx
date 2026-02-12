import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { SiAnilist } from "react-icons/si";

export default function AniListButton() {
  return (
    <Link
      href="https://anilist.co/user/Moonbami/"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-[#00abff]! shadow-[#00abff]/50!`}
    >
      <SiAnilist />
      AniList
    </Link>
  );
}
