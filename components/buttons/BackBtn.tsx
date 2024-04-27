import { Url } from "next/dist/shared/lib/router/router";
import { FaBackwardStep } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  href: Url;
  extraClass?: string;
};

export default function BackBtn({ href, extraClass }: Props) {
  return (
    <Link
      href={href}
      className={`${extraClass} opacity-70 hover:opacity-100 flex justify-center items-center gap-1 text-black [&>svg>path]:text-black dark:text-white dark:[&>svg>path]:text-white hover:text-white [&>svg>path]:hover:text-white button-format border-2 border-neutral-500 hover:bg-highlight hover:border-highlight capitalize`}
    >
      <FaBackwardStep /> back
    </Link>
  );
}
