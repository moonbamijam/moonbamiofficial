import { useFetch } from "@hooks/useFetch";
import Grid from "@components/common/Grid";
import Section from "@components/common/Section";
import SkeletonScreen from "@components/SkeletonScreen";

export default async function ProjectSkeleton() {
  const { projects } = await useFetch("/api/projects");

  const renderProjectSkeletons = () => {
    return projects.map((projectSkeleton: any) => (
      <SkeletonScreen
        key={projectSkeleton}
        width="w-[400px] "
        height="h-[420px]"
        customStyles="rounded-xl"
      />
    ));
  };

  return (
    <Section id={"project"} contentStyles={"gap-[64px]"}>
      <div className="title flex flex-col items-center gap-y-2">
        <SkeletonScreen
          id="heading"
          width="w-[250px]"
          height="h-[60px]"
          customStyles="rounded-lg"
        />
        <SkeletonScreen
          id="description"
          width="w-[400px]"
          height="h-[48px]"
          customStyles="rounded-lg"
        />
      </div>
      <Grid gridStyles="lg:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {renderProjectSkeletons()}
      </Grid>
    </Section>
  );
}
