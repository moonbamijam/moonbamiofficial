import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";
type Props = {
  href: string;
  extraClass?: string;
};

const BackBtn = ({ href, extraClass }: Props) => {
  return (
    <Link
      href={href}
      className={`${extraClass} opacity-70 hover:opacity-100 flex justify-center items-center gap-1 text-black [&>svg>path]:text-black dark:text-white dark:[&>svg>path]:text-white hover:text-white [&>svg>path]:hover:text-white button-format border-2 border-neutral-500 hover:bg-highlight hover:border-highlight capitalize`}
    >
      <FaBackwardStep /> back
    </Link>
  );
};

export default BackBtn;
