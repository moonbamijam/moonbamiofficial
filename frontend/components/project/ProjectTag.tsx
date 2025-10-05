import { tagList } from "@frontend/shared/tag-list";

const tagDetect = (tag: string) => {
  return tagList.find((t) => {
    return tag.toLowerCase().trim() === t.tag.toLowerCase().trim();
  });
};

type ProjectTagProps = {
  children: React.ReactNode;
  tag: string;
  className?: string;
};

export default function ProjectTag({
  children,
  tag,
  className,
}: ProjectTagProps) {
  const tagResult = tagDetect(tag);

  return (
    <span
      className={`rounded-full ${tagResult ? tagResult.bgColor : "bg-slate-300 dark:bg-slate-500"} ${tagResult?.textColor} w-max h-max px-4 py-2 font-semibold text-sm capitalize ${className}`}
    >
      {children}
    </span>
  );
}
