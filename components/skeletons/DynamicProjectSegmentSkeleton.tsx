import Section from "@components/common/Section";
import SkeletonScreen from "@components/SkeletonScreen";

export default async function DynamicProjectSegmentSkeleton() {
  return (
    <Section id={"project-page-by-id-skelton"}>
      <div>
        <SkeletonScreen
          id="image"
          width="w-full xl:w-[1000px]"
          height="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          customStyles="relative rounded-xl shadow-md mb-8 "
        />
        <div className="max-w-[1000px] flex flex-col items-center md:w-full md:flex-row justify-evenly  ">
          <div className="w-[400px] max-w-[600px] lg:w-[500px] xl:w-full mb-8 space-y-2">
            <SkeletonScreen
              width="w-[250px]"
              height="min-h-[48px]"
              customStyles="rounded-xl"
            />
            <SkeletonScreen
              width="w-full"
              height="min-h-[96px]"
              customStyles="rounded-xl"
            />
          </div>
          <div className="flex md:flex-col gap-x-8 gap-y-4 ">
            <SkeletonScreen
              id="button"
              width="w-[150px]"
              height="h-[50px]"
              customStyles="rounded-lg"
            />
            <SkeletonScreen
              id="button"
              width="w-[150px]"
              height="h-[50px]"
              customStyles="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
