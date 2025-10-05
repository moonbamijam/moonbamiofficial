import { Metadata } from "next";
import { useFetch } from "@backend/hooks/useFetch";
import Section from "@frontend/layouts/common/Section";
import GitHubBtn from "@frontend/components/buttons/GitHubBtn";
import VisitBtn from "@frontend/components/buttons/VisitBtn";
import BackBtn from "@frontend/components/buttons/BackBtn";
import Footer from "@frontend/layouts/footer/Footer";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import ProjectTag from "@frontend/components/project/ProjectTag";
import ProjectStack from "@frontend/components/project/ProjectStack";

type metaDataProps = { params: { slug: string } };

export const generateMetadata = async ({
  params,
}: metaDataProps): Promise<Metadata> => {
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

  const sortedTags: string[] = projects?.tag.sort((a: string, b: string) =>
    a.localeCompare(b),
  );
  const sortedTechs: string[] = projects?.tech.sort((a: string, b: string) =>
    a.localeCompare(b),
  );

  return (
    <>
      <div className="container pt-[100px] lg:pt-[50px]">
        <Section>
          <div className="w-full max-w-[1000px] mx-auto space-y-4">
            <Image
              src={projects.src}
              alt={projects.alt}
              className="shadow rounded-xl"
              variant="thumbnail"
              size="thumbnail"
              shape="tv"
            />
            <div className="w-full flex flex-wrap gap-1">
              {sortedTags?.map((tagItem, index) => (
                <ProjectTag
                  key={index}
                  tag={tagItem}
                  className="opacity-90 dark:opacity-80 hover:opacity-100 dark:hover:opacity-100"
                >
                  {tagItem}
                </ProjectTag>
              ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 xl:gap-x-12">
              <div className="mb-6">
                <h1 className="font-bold text-3xl lg:text-4xl mb-1">
                  {projects.title}
                </h1>
                <Paragraph variant="wide">{projects.desc}</Paragraph>
              </div>
              <div className="w-full flex lg:hidden items-center gap-1 mb-16">
                <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                  powered by
                </h3>
                {sortedTechs?.map((techItem, index) => (
                  <ProjectStack
                    key={index}
                    tech={techItem}
                    className="hover:text-primary"
                  />
                ))}
              </div>
              <div className="flex lg:flex-col gap-4">
                {projects?.github && (
                  <GitHubBtn href={projects.github.toString()} />
                )}
                {projects?.website && <VisitBtn href={projects.website} />}
                <BackBtn href={"/projects"} />
              </div>
            </div>
            <div className="w-full hidden lg:flex items-center gap-1 mt-4">
              <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                powered by
              </h3>
              {sortedTechs?.map((techItem, index) => (
                <ProjectStack
                  key={index}
                  tech={techItem}
                  className="hover:text-primary"
                />
              ))}
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
