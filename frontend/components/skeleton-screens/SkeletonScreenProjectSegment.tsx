import { Image } from "@frontend/components/ui/Image";
import Section from "../../layouts/common/Section";
import SkeletonScreen from "@frontend/components/skeleton-screens/SkeletonScreen";

export default function SkeletonScreenProjectSegment() {
  return (
    <div className="pt-[100px] lg:pt-[50px]">
      <Section>
        <div className="w-full max-w-[1000px] mx-auto space-y-4">
          <SkeletonScreen>
            <Image
              className="shadow rounded-xl opacity-0 invisible"
              variant="thumbnail"
              size="thumbnail"
              shape="tv"
            />
          </SkeletonScreen>
          {/* tag */}
          <div className="flex gap-1">
            <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
            <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
            <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
            <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
            <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 xl:gap-x-12">
            {/* details */}
            <div className="w-full h-max mb-6">
              <SkeletonScreen className="min-h-10 max-h-12 max-w-[500px] mb-2" />
              <SkeletonScreen className="min-h-60 max-w-[800px]" />
            </div>
            {/* techstack */}
            <div className="w-full flex lg:hidden items-center gap-1 mb-16">
              <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                powered by
              </h3>
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
            </div>
            {/* cta */}
            <div className="w-max h-max flex lg:flex-col gap-4">
              <SkeletonScreen className="min-w-36 min-h-14" />
              <SkeletonScreen className="min-w-36 min-h-14" />
            </div>
          </div>
          {/* techstack */}
          <div className="w-full hidden lg:flex items-center gap-1 mt-4">
            <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
              powered by
            </h3>
            <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
            <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
            <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
          </div>
        </div>
      </Section>
    </div>
  );
}
