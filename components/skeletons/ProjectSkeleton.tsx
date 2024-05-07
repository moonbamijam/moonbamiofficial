import Grid from "@components/common/Grid";
import Section from "@components/common/Section";
import SkeletonScreen from "@components/ui/SkeletonScreen";
import { useFetch } from "@hooks/useFetch";

export default async function ProjectSkeleton() {
  const { projects } = await useFetch("/api/projects");

  // let's find how many projects we have and store it in skeletonsScreenCount
  let skeletonScreenCount = 0;
  for (let i = 0; i < projects.length; i++) {
    skeletonScreenCount++;
  }

  // compare the i to the skeletonScreenCount and push its count to projectSkeletons array
  const projectSkeletons: any = [];
  for (let i = 0; i < skeletonScreenCount; i++) {
    projectSkeletons.push(i);
  }

  const renderProjectSkeletons = () => {
    return projectSkeletons.map((projectSkeleton: any) => (
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
      <div className="title flex flex-col items-center gap-y-4">
        <SkeletonScreen
          id="heading"
          width="w-[250px]"
          height="h-[48px]"
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
