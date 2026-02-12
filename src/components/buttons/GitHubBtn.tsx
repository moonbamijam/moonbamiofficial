import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function GitHubBtn() {
  return (
    <Link
      href="https://github.com/moonbamijam"
      target="_blank"
      className={`${buttonVariants({ variant: "cta" })} bg-github! hover:bg-github-variant! shadow-github-variant/50! dark:text-white`}
    >
      <FaGithub />
      GitHub
    </Link>
  );
}
