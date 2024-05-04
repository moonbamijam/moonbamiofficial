import { Metadata } from "next";
import { useFetch } from "@hooks/useFetch";
import dynamic from "next/dynamic";
import Section from "@components/common/Section";
import GitHubBtn from "@components/buttons/GitHubBtn";
import VisitBtn from "@components/buttons/VisitBtn";
import BackBtn from "@components/buttons/BackBtn";
import Picture from "@components/common/Picture";

const Footer = dynamic(() => import("@components/footer/Footer"));

type Props = { params: { _id: string } };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const project = await new Promise(async (resolve) => {
    const { projects } = await useFetch(`/api/projects/${params._id}`);
    resolve(`${projects.title}`);
  });
  return {
    title: `${project}`,
  };
};

const ProjectPageById = async ({ params }: { params: { _id: string } }) => {
  const { projects } = await useFetch(`/api/projects/${params._id}`);

  return (
    <>
      <Section id={"project-page-by-id"}>
        <div className="relative w-full xl:w-[1000px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px] mb-8 rounded-lg">
          <Picture
            src={projects.src}
            alt={`${projects.alt}`}
            className="rounded-xl"
          />
        </div>
        <div className="w-full flex flex-col xl:flex-row justify-evenly items-center">
          <div className="mb-8">
            <div className="font-bold text-5xl mb-2">{projects.title}</div>
            <div className="w-[400px] lg:w-[500px] premium:w-[600px]">
              {projects.desc}
            </div>
          </div>
          <div className="links w-full sm:w-min flex xl:flex-col justify-between gap-x-8 gap-y-4 pb-[30px]">
            <GitHubBtn href={projects.github} />
            {projects.website && <VisitBtn href={projects.website} />}
            <BackBtn href={"/projects"} />
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
};

export default ProjectPageById;
