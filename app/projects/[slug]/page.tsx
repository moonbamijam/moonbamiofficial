import { Metadata } from "next";
import { useFetch } from "@backend/hooks/useFetch";
import Section from "@frontend/components/common/Section";
import GitHubBtn from "@frontend/layouts/buttons/GitHubBtn";
import VisitBtn from "@frontend/layouts/buttons/VisitBtn";
import BackBtn from "@frontend/layouts/buttons/BackBtn";
import Title from "@frontend/components/Title";
import Description from "@frontend/components/Description";
import Footer from "@frontend/layouts/footer/Footer";
import Cldpicture from "@frontend/components/common/Cldpicture";

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
