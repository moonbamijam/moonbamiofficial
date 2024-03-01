import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
type Props = {
  href: string
  extraClass?: string
}

const GitHubBtn = ({href, extraClass}: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${extraClass} [&>svg>path]:text-black dark:[&>svg>path]:text-white hover:text-white [&>svg>path]:hover:text-white button-format border-2 border-[#24292e] dark:border-highlight dark:hover:border-[#2dba4e] hover:border-[#2dba4e] hover:bg-[#2dba4e] dark:hover:bg-[#2dba4e] gap-1 flex justify-center items-center capitalize`}
    >
      <FaGithub />
      GitHub
    </Link>
  );
}

export default GitHubBtn