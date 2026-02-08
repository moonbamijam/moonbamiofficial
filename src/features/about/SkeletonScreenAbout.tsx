import Section from "@/layouts/common/Section";
import SkeletonScreen from "@/components/skeleton-screens/SkeletonScreen";
import { Image } from "@/components/ui/Image";

export default function SkeletonScreenAbout() {
  return (
    <>
      <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5 z-10">
        <SkeletonScreen className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end">
          <Image alt="" className="opacity-0 invisible" shape="tv" />
        </SkeletonScreen>
        <div className="xl:col-span-2 h-max">
          <SkeletonScreen className="min-h-12" />
          <SkeletonScreen className="mt-4 min-h-52" />
        </div>
      </Section>
      <Section className="p-0!">
        <SkeletonScreen>
          <Image alt="" className="opacity-0 invisible max-h-150" shape="tv" />
        </SkeletonScreen>
      </Section>
      <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5 z-10">
        <SkeletonScreen className="w-full xl:col-span-2 premium:col-span-3 order-2 flex flex-col items-end">
          <Image alt="" className="opacity-0 invisible" shape="tv" />
        </SkeletonScreen>
        <div className="xl:col-span-2 h-max">
          <SkeletonScreen className="min-h-12" />
          <SkeletonScreen className="mt-4 min-h-52" />
        </div>
      </Section>
    </>
  );
}
