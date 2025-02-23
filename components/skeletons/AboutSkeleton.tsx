import Section from "@components/common/Section";
import SkeletonScreen from "@components/SkeletonScreen";

export default function AboutSkeleton() {
  return (
    <Section id="about-page-skeleton-screen" contentStyles={"gap-[64px]"}>
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
          height="h-[24px]"
          customStyles="rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly gap-y-2">
        <SkeletonScreen
          id="image"
          width="w-[300px] lg:w-[400px] 2xl:w-[500px]"
          height="h-[300px] lg:h-[400px] 2xl:h-[500px]"
          customStyles="aspect-square rounded-lg"
        />
        <div className="flex flex-col gap-y-2">
          <SkeletonScreen
            id="title"
            width="w-[250px]"
            height="h-[48px]"
            customStyles="rounded-lg"
          />
          <SkeletonScreen
            id="paragraph"
            width="w-[400px]"
            height="h-[128px]"
            customStyles="rounded-lg"
          />
        </div>
      </div>
    </Section>
  );
}
