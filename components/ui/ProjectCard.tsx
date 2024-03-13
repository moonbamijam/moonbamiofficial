import { ProjectType } from "@shared-types/project";
import Link from "next/link";
import GitHubBtn from "@components/buttons/GitHubBtn";
import WebsiteBtn from "@components/buttons/WebsiteBtn";
import Picture from "@components/common/Picture";

const ProjectCard = ({
  href,
  ariaLabel,
  src,
  alt,
  title,
  desc,
  website,
  github,
}: ProjectType) => {
  return (
    <div className="cursor-pointer hover:shadow-gray-500 hover:shadow-lg hover:-translate-y-2 relative w-[400px] rounded-xl flex flex-col overflow-hidden [&>a>div>img]:hover:rounded-none">
      <Link aria-label={ariaLabel} href={href}>
        <div className="relative w-full h-[200px] ">
          <Picture src={src} alt={`${alt}`} />
        </div>
        <div className="details px-[30px] py-[30px]">
          <h1 className="truncate text-2xl font-bold px-2">{title}</h1>
          <p className="desc-format">{desc}</p>
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
