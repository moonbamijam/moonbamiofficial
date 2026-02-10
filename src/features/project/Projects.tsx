import Grid from "@/layouts/common/Grid";
import Section from "@/layouts/common/Section";
import ProjectCard from "@/features/project/ProjectCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ProjectType } from "@/shared/types";
import { projects } from "@/shared/constants/projects.db";

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

export default function Projects() {
  return (
    <Section>
      <Grid className="xl:grid-cols-2 premium:grid-cols-3 gap-12.5">
        {renderProjects(projects)}
      </Grid>
    </Section>
  );
}
