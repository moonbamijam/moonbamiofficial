import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

type Props = {
  href: string;
  extraClass?: string;
};

export default function GitHubBtn({ href, extraClass }: Props) {
  return (
    <Link
      href={href}
      aria-label="GitHub"
      target="_blank"
      className={`${extraClass} [&>svg>path]:text-black dark:[&>svg>path]:text-white hover:text-white [&>svg>path]:hover:text-white button-format border-2 border-primary dark:border-highlight dark:hover:border-[#2dba4e] hover:border-[#2dba4e] hover:bg-[#2dba4e] dark:hover:bg-[#2dba4e] gap-1 flex justify-center items-center capitalize`}
    >
      <FaGithub />
      GitHub
    </Link>
  );
}
