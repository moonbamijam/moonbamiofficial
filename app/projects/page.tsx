import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import StayTuned from "@components/StayTuned";
import Section from "@components/wrappers/Section";
import Title from "@components/texts/Title";
import { ProjectType } from "@shared-types/project";
import LoadingSpinner from "@components/LoadingSpinner";
import { useFetch } from "@hooks/useFetch";
import BackToTop from "@components/BackToTop";
import ProjectCard from "@components/ui/ProjectCard";
const Footer = dynamic(() => import('@components/footer/Footer'));

export const metadata: Metadata = {
  title: "Projects"
}

const ProjectsPage = async () => {
  const { projects } = await useFetch("/api/projects");
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#project"} />
        <Section id={"project"} contentClassName={"gap-[150px]"}>
          <Title name={"projects"} desc={"These are the projects I made all throughout my coding career. I am happy to present it to you."} /> 
          <div className="projects flex flex-col gap-[100px]">
            {projects ? projects.map((project: ProjectType) => (
              <ProjectCard key={ project._id } src={ project.src } alt={ project.alt } title={ project.title } desc={ project.desc } website={ project.website } github={ project.github } />
            )) : (
              <LoadingSpinner />
            )}
          </div>
        </Section>
      </div>
      <Footer />
    </>
  )
};

export default ProjectsPage;