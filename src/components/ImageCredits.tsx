import { ImageCreditsProps } from "@/features/about/about.types";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function ImageCredits({
  href,
  className,
  phrase = "Photo by",
  name,
  year,
}: ImageCreditsProps) {
  return (
    <div
      className={`text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1 mt-2 ${className}`}
    >
      {phrase}{" "}
      {href ? (
        <Link
          href={href as Url}
          target="_blank"
          className="font-semibold hover:text-primary underline capitalize"
        >
          {name}
        </Link>
      ) : (
        <span className="font-semibold hover:text-primary capitalize">
          {name}
        </span>
      )}
      {year && (
        <>
          <span className="text-lg text-slate-400 dark:text-slate-500">•</span>
          <span className="text-sm text-slate-400 dark:text-slate-500 font-semibold">
            {year}
          </span>
        </>
      )}
    </div>
  );
}
