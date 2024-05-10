import { Metadata } from "next";
import { useFetch } from "@hooks/useFetch";
import dynamic from "next/dynamic";
import Section from "@components/common/Section";
import GitHubBtn from "@components/buttons/GitHubBtn";
import VisitBtn from "@components/buttons/VisitBtn";
import BackBtn from "@components/buttons/BackBtn";
import Picture from "@components/common/Picture";
import Title from "@components/ui/Title";
import Description from "@components/ui/Description";

const Footer = dynamic(() => import("@components/footer/Footer"));

type Props = { params: { slug: string } };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const project = await new Promise(async (resolve) => {
    const { projects } = await useFetch(`/api/projects/${params.slug}`);
    resolve(`${projects.title}`);
  });
  return {
    title: `${project}`,
  };
};

export default async function ProjectPageById({
  params,
}: {
  params: { slug: string };
}) {
  const { projects } = await useFetch(`/api/projects/${params.slug}`);

  return (
    <>
      <Section id={"project-page-by-id"}>
        <div>
          <div className="relative w-full xl:w-[1000px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] shadow-md hover:shadow-primary-dark mb-8 rounded-xl overflow-hidden">
            <Picture
              src={projects.src}
              alt={`${projects.alt}`}
            />
          </div>
          <div className="max-w-[1000px] flex flex-col items-center md:w-full md:flex-row justify-evenly  ">
            <div className="w-[400px] max-w-[600px] lg:w-[500px] xl:w-full mb-8">
              <Title text={projects.title} customStyles="text-5xl mb-2" />
              <Description paragraph={projects.desc} />
            </div>
            <div className="flex md:flex-col gap-x-8 gap-y-4 ">
              <GitHubBtn href={projects.github} />
              {projects.website && <VisitBtn href={projects.website} />}
              <BackBtn href={"/projects"} />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
