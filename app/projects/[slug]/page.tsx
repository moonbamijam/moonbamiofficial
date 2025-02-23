import { Metadata } from "next";
import { useFetch } from "@hooks/useFetch";
import Section from "@components/common/Section";
import GitHubBtn from "@layouts/GitHubBtn";
import VisitBtn from "@components/buttons/VisitBtn";
import BackBtn from "@layouts/BackBtn";
import Title from "@components/Title";
import Description from "@components/Description";
import Footer from "@components/footer/Footer";
import Cldpicture from "@components/common/Cldpicture";

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

  const renderProjectButtons = () => {
    if (projects.website)
      return (
        <div className="flex md:flex-col gap-x-8 gap-y-4">
          <div className="space-y-4">
            <VisitBtn href={projects.website} />
            <GitHubBtn href={projects.github} />
          </div>
          <BackBtn href={"/projects"} />
        </div>
      );
    else
      return (
        <div className="flex md:flex-col gap-x-8 gap-y-4">
          <GitHubBtn href={projects.github} />
          <BackBtn href={"/projects"} />
        </div>
      );
  };

  return (
    <>
      <Section id={"project-page-by-id"}>
        <div className="w-full flex flex-col items-center">
          <div className="relative w-full max-w-[1000px] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] shadow-md hover:shadow-primary-dark mb-8 rounded-xl overflow-hidden">
            <Cldpicture src={projects.src} alt={`${projects.alt}`} />
          </div>
          <div className="w-full max-w-[1000px] flex flex-col items-center md:flex-row md:justify-evenly">
            <div className="w-full max-w-[500px] mb-8">
              <Title text={projects.title} className="text-5xl mb-4" />
              <Description paragraph={projects.desc} />
            </div>
            {renderProjectButtons()}
          </div>
        </div>
      </Section>
      <Footer />
    </>
  );
}
