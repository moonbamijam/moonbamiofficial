import Section from "@/layouts/common/Section";
import SkeletonScreen from "@/components/skeleton-screens/SkeletonScreen";
import SkeletonImage from "@/components/skeleton-screens/SkeletonImage";

export default function SkeletonScreenExp() {
  return (
    <>
      <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5 z-10">
        <SkeletonScreen className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end order-2">
          <SkeletonImage />
        </SkeletonScreen>
        <div className="xl:col-span-2 h-max">
          <SkeletonScreen className="min-h-12" />
          <SkeletonScreen className="mt-4 min-h-52" />
        </div>
      </Section>
      <Section className="p-0!">
        <SkeletonScreen>
          <SkeletonImage className="max-h-150" />
        </SkeletonScreen>
      </Section>
      <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5 z-10">
        <SkeletonScreen className="w-full xl:col-span-2 premium:col-span-3 order-2 flex flex-col items-end">
          <SkeletonImage />
        </SkeletonScreen>
        <div className="xl:col-span-2 h-max">
          <SkeletonScreen className="min-h-12" />
          <SkeletonScreen className="mt-4 min-h-52" />
        </div>
      </Section>
    </>
  );
}
