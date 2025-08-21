import { buttonVariants } from "@frontend/components/ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function GitHubBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${buttonVariants()} !bg-github !border-github hover:!bg-github-variant hover:!border-github-variant [&>svg>path]:text-white dark:[&>svg>path]:text-white dark:text-white shadow-lg shadow-slate-400 dark:shadow-slate-700`}
    >
      <FaGithub />
      GitHub
    </Link>
  );
}
