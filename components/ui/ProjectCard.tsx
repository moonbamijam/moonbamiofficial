import { ProjectType } from "@shared-types/project";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  src,
  alt,
  title,
  desc,
  website,
  github,
}: ProjectType) => {
  return (
    <div className="content rounded-xl flex flex-col gap-[30px]">
      <Image
        src={`${src}`}
        alt={`${alt}`}
        width={800}
        height={400}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-[300px] h-[150px] object-cover"
      />
      <div className="details px-[30px]">
        <h1 className="title text-2xl px-2">{title}</h1>
        <p className="desc h-[50px] paragraph-format">{desc}</p>
      </div>
      <div className="links">
        {website ? <ProjectLink href={website} text={"Visit"} /> : <></>}
        <ProjectLink href={github} text={"GitHub"} />
      </div>
    </div>
  );
};

type ProjectLinkProps = {
  href: Url;
  text: string;
};

const ProjectLink = ({href, text}: ProjectLinkProps) => {
  return (
    <Link href={href} className="text-sm lg:text-base w-[150px] h-[50px] rounded-lg bg-white">{text}</Link>
  )
};

export default ProjectCard;
