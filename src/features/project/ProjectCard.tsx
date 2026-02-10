import Link from "next/link";
import { ProjectType } from "@/shared/types";
import GitHubBtn from "@/components/buttons/GitHubBtn";
import VisitBtn from "@/components/buttons/VisitBtn";
import { Image } from "@/components/ui/Image";
import { Paragraph } from "@/components/ui/Paragraph";
import ProjectTag from "@/features/project/ProjectTag";
import ProjectStack from "./ProjectStack";

export default function ProjectCard({
  href,
  ariaLabel,
  src,
  alt,
  title,
  desc,
  website,
  github,
  tag,
  tech,
}: ProjectType) {
  const sortedTags = tag?.sort((a, b) => a.localeCompare(b));
  const sortedTechs = tech?.sort((a, b) => a.localeCompare(b));

  return (
    <div className="w-full h-max rounded-lg flex flex-col justify-between backdrop:blur bg-surface/80 dark:bg-dm-surface/70 hover:bg-surface dark:hover:bg-dm-surface opacity-80 hover:opacity-100 shadow hover:shadow-lg p-8 overflow-hidden transition-[background-color_opacity_shadow] duration-300 group/periphs">
      <Link
        aria-label={ariaLabel}
        href={href ? href : ""}
        className="cursor-pointer"
      >
        <Image
          src={src}
          alt={alt}
          className="max-h-100 mb-4"
          variant="thumbnail"
          size="thumbnail"
          shape="tv"
          width={720}
          height={480}
        />
        <h1 className="truncate text-3xl font-bold">{title}</h1>
        <Paragraph variant="wide" className="mb-6 line-clamp-2">
          {desc}
        </Paragraph>
        <div className="w-full min-h-10 lg:min-h-20 flex flex-wrap gap-1 mb-4">
          {sortedTags?.map((tagItem, index) => (
            <ProjectTag key={index} tag={tagItem}>
              {tagItem}
            </ProjectTag>
          ))}
        </div>
        <div className="w-full flex gap-1 mb-4">
          {sortedTechs?.map((techItem, index) => (
            <ProjectStack key={index} tech={techItem} />
          ))}
        </div>
      </Link>
      <div className="w-full flex justify-between">
        {github && <GitHubBtn href={github.toString()} />}
        {website && <VisitBtn href={website.toString()} />}
      </div>
    </div>
  );
}
