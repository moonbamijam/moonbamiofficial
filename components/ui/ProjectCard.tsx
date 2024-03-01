import { ProjectType } from "@shared-types/project";
import Image from "next/image";
import Link from "next/link";
import DefaultBanner from "@assets/default-banner.webp"
import GitHubBtn from "@components/buttons/GitHubBtn";
import WebsiteBtn from "@components/buttons/WebsiteBtn";

const ProjectCard = ({
  href,
  src,
  alt,
  title,
  desc,
  website,
  github,
}: ProjectType) => {
  return (
    <div className="card relative w-[400px] rounded-xl flex flex-col bg-transparent overflow-hidden">
      <Link href={href}>
        <Image
          src={src ? `${src}` : DefaultBanner}
          alt={`${alt}`}
          width={720}
          height={1080}
          loading="lazy"
          placeholder="blur"
          blurDataURL="URL"
          className="w-full h-[200px] object-cover"
        />
        <div className="details px-[30px] py-[30px]">
          <h1 className="title text-2xl font-bold px-2">{title}</h1>
          <p className="desc desc-format">{desc}</p>
        </div>
      </Link>
      <div className="links flex justify-between px-[30px] pb-[30px]">
        <GitHubBtn href={github.toString()} />
        {website ? <WebsiteBtn href={website.toString()} /> : <></>}
      </div>
    </div>
  );
};

export default ProjectCard;
