import Link from "next/link";
import { buttonVariants } from "../ui/variants";
import { FaSteam } from "react-icons/fa";

export default function SteamButton() {
  return (
    <Link
      href="https://steamcommunity.com/id/moonbamiofficial/"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-[#2a475e]! shadow-[#2a475e]/50!`}
    >
      <FaSteam />
      steam
    </Link>
  );
}
