import { ProjectType } from "@shared-types/project";
import Image from "next/image";
import Link from "next/link";
import DefaultBanner from "@assets/default-banner.webp"

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
          placeholder="blur"
          blurDataURL="URL"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-[200px] object-cover"
        />
        <div className="details px-[30px] py-[30px]">
          <h1 className="title text-2xl font-bold px-2">{title}</h1>
          <p className="desc desc-format">{desc}</p>
        </div>
      </Link>
      <div className="links flex justify-between px-[30px] pb-[30px]">
        <Link
          href={github}
          target="_blank"
          className={`${
            !website ? "mr-auto" : ""
          } hover:text-white button-format border border-[#24292e] dark:border-highlight dark:hover:border-[#2dba4e] hover:border-[#2dba4e] hover:bg-[#2dba4e] dark:hover:bg-[#2dba4e] capitalize`}
        >
          GitHub
        </Link>
        {website ? (
          <Link
            href={website}
            target="_blank"
            className="text-white button-format bg-gray-500 hover:bg-highlight capitalize"
          >
            visit
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
