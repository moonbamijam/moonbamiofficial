import { useFetch } from "@hooks/useFetch";
import { ProjectType } from "@lib/types";
import Link from "next/link";

export default async function Projects() {
  const { projects } = await useFetch("/api/projects");

  const renderProjects = () => {
    if (projects)
      return projects.map((project: ProjectType, i: any) => (
        <Link
          key={i}
          href={project.github}
          target="_blank"
          className="py-1 hover:translate-x-2 active:-translate-x-1 truncate"
        >
          {project.title}
        </Link>
      ));
  };
  return (
    <div className="max-w-[100px] md:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[500px] flex flex-col">
      <h2 className="font-semibold text-lg capitalize">projects</h2>
      {renderProjects()}
    </div>
  );
}
