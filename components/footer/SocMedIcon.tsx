import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  ariaLabel: string
  icon: ReactNode;
};

const SocMedIcon = ({ href, ariaLabel, icon }: Props) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      className="p-2 border-2 border-black dark:border-white rounded-full hover:border-highlight hover:bg-highlight dark:hover-border-highlight dark:hover:border-highlight [&>svg>path]:hover:text-white cursor-pointer "
    >
      {icon}
    </Link>
  );
};

export default SocMedIcon;
