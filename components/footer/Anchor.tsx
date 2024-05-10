import Link from "next/link";

type AnchorProps = {
  href: string;
  target?: string;
  text: string;
  customStyles?: string;
};
export default function Anchor({
  href,
  target,
  text,
  customStyles,
}: AnchorProps) {
  return (
    <Link
      href={href}
      target={target}
      className={`w-[100px] sm:w-[150px] py-1 rounded-lg hover:bg-primary-light dark:hover:bg-primary hover:px-2 capitalize ${customStyles}`}
    >
      {text}
    </Link>
  );
}
