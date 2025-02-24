import { useFetch } from "@backend/hooks/useFetch";
import { ProjectType } from "@backend/ts/shared-types/types";
import Anchor from "./Anchor";

type ProjectsProps = {
  customStyles?: string;
};

export default async function Projects({ customStyles }: ProjectsProps) {
  const { projects } = await useFetch("/api/projects");

  const renderProjects = () => {
    if (projects)
      return projects.map((project: ProjectType, i: any) => (
        <Anchor
          key={i}
          href={project.github}
          target="_blank"
          text={project.title}
          customStyles="truncate"
        />
      ));
  };
  return (
    <div className={` flex flex-col gap-1 ${customStyles}`}>
      <h2 className="font-semibold text-lg capitalize">projects</h2>
      {renderProjects()}
    </div>
  );
}
