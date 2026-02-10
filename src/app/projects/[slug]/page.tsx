import Section from "@/layouts/common/Section";
import GitHubBtn from "@/components/buttons/GitHubBtn";
import VisitBtn from "@/components/buttons/VisitBtn";
import BackBtn from "@/components/buttons/BackBtn";
import Footer from "@/layouts/footer/Footer";
import { Image } from "@/components/ui/Image";
import { Paragraph } from "@/components/ui/Paragraph";
import ProjectTag from "@/features/project/ProjectTag";
import ProjectStack from "@/features/project/ProjectStack";
import { projects } from "@/shared/constants/projects.db";

export default async function ProjectPageById({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="">Project not found</div>;

  const sortedTags = (project.tag ?? []).sort((a: string, b: string) =>
    a.localeCompare(b),
  );

  const sortedTechs = (project.tech ?? []).sort((a: string, b: string) =>
    a.localeCompare(b),
  );

  return (
    <>
      <div className="container pt-25 lg:pt-12.5">
        <Section>
          <div className="w-full max-w-250 mx-auto space-y-4">
            <Image
              src={project.src}
              alt={project.alt}
              className="shadow rounded-xl"
              variant="thumbnail"
              size="thumbnail"
              shape="tv"
              width={1920}
              height={1080}
            />
            <div className="w-full flex flex-wrap gap-1">
              {sortedTags.map((tagItem, index) => (
                <ProjectTag key={index} tag={tagItem}>
                  {tagItem}
                </ProjectTag>
              ))}
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 xl:gap-x-12">
              <div className="mb-6">
                <h1 className="font-bold text-3xl lg:text-4xl mb-1">
                  {project.title}
                </h1>
                <Paragraph variant="wide">{project.desc}</Paragraph>
              </div>
              <div className="w-full flex lg:hidden items-center gap-1 mb-16">
                <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                  powered by
                </h3>
                {sortedTechs.map((techItem, index) => (
                  <ProjectStack key={index} tech={techItem} />
                ))}
              </div>
              <div className="flex lg:flex-col gap-4">
                {project.github && (
                  <GitHubBtn href={project.github.toString()} />
                )}
                {project.website && <VisitBtn href={project.website} />}
                <BackBtn href={"/projects"} />
              </div>
            </div>
            <div className="w-full hidden lg:flex items-center gap-1 mt-4">
              <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                powered by
              </h3>
              {sortedTechs?.map((techItem, index) => (
                <ProjectStack key={index} tech={techItem} />
              ))}
            </div>
          </div>
        </Section>
      </div>
      <Footer />
    </>
  );
}
