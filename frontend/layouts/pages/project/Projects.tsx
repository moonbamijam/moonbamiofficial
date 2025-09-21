import Grid from "@frontend/layouts/common/Grid";
import Section from "@frontend/layouts/common/Section";
import ProjectCard from "@frontend/components/project/ProjectCard";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { useFetch } from "@backend/hooks/useFetch";
import { ProjectType } from "@shared/types";

const renderProjects = (projects: ProjectType[]) => {
  if (projects) {
    return projects.map((project: ProjectType) => (
      <ProjectCard
        key={project._id}
        href={`/projects/${project.slug}`}
        ariaLabel={project.title}
        src={project.src}
        alt={project.alt}
        title={project.title}
        desc={project.desc}
        website={project.website}
        github={project.github}
        tag={project.tag}
        tech={project.tech}
      />
    ));
  } else return <LoadingSpinner size="100px" fontSize="64px" />;
};

export default async function Projects() {
  const { projects } = await useFetch("/api/projects");

  return (
    <Section>
      <Grid className="xl:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjects(projects)}
      </Grid>
    </Section>
  );
}
