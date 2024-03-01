import { Url } from "next/dist/shared/lib/router/router";
import { IconBaseProps } from "react-icons";
import Link from "next/link";

type Props = {
  href: Url;
  icon: React.ReactNode;
  text?: string;
};

const SocMed = ({ href, icon, text }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-bold text-xl capitalize"
    >
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default SocMed;
