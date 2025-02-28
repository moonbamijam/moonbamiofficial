import Grid from "@frontend/components/common/Grid";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import ProjectCard from "@frontend/components/ProjectCard";
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
      />
    ));
  } else return <LoadingSpinner size="100px" fontSize="64px" />;
};

export default async function ProjectSection() {
  const { projects } = await useFetch("/api/projects");

  return (
    <Section id={"project"}>
      <Heading
        name={"projects"}
        desc={
          "These are the projects I made all throughout my coding career. I am happy to present it to you."
        }
      />
      <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjects(projects)}
      </Grid>
    </Section>
  );
}
