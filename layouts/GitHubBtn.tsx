import { buttonVariants } from "@components/ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function GitHubBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${buttonVariants({ variant: "outline" })} hover:border-github hover:!bg-github [&>svg>path]:text-black dark:[&>svg>path]:text-white  hover:text-white [&>svg>path]:hover:text-white`}
    >
      <FaGithub />
      GitHub
    </Link>
  );
}
