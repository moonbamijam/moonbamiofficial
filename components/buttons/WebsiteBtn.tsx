import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

type Props = {
  href: string;
  extraClass?: string;
};

const WebsiteBtn = ({ href, extraClass }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={`${extraClass} button-format border-2 border-primary hover:border-highlight dark:border-highlight bg-transparent hover:bg-highlight [&>svg>path]:text-black [&>svg>polyline]:text-black [&>svg>line]:text-black dark:[&>svg>path]:text-white dark:[&>svg>polyline]:text-white dark:[&>svg>line]:text-white hover:text-white [&>svg>path]:hover:text-white [&>svg>polyline]:hover:text-white [&>svg>line]:hover:text-white flex justify-center items-center gap-1 capitalize`}
    >
      <FiExternalLink /> visit
    </Link>
  );
};

export default WebsiteBtn;
