import Link from "next/link";

type ImageCreditsProps = {
  phrase?: string;
  name: string;
  href: string;
  className?: string;
};

export default function ImageCredits({
  phrase = "Photo by",
  name,
  href,
  className,
}: ImageCreditsProps) {
  return (
    <span
      className={`text-sm text-slate-400 dark:text-slate-500 mt-2 ${className}`}
    >
      {phrase}{" "}
      <Link
        href={href}
        target="_blank"
        className="font-semibold hover:text-primary hover:underline capitalize"
      >
        {name}
      </Link>
    </span>
  );
}
