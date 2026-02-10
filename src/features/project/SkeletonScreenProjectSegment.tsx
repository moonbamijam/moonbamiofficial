import Section from "../../layouts/common/Section";
import SkeletonScreen from "@/components/skeleton-screens/SkeletonScreen";
import SkeletonImage from "@/components/skeleton-screens/SkeletonImage";

export default function SkeletonScreenProjectSegment() {
  return (
    <div className="pt-25 lg:pt-12.5">
      <Section>
        <div className="w-full max-w-250 mx-auto space-y-4">
          <SkeletonScreen>
            <SkeletonImage className="rounded-xl" />
          </SkeletonScreen>
          {/* tag */}
          <div className="flex gap-1">
            <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
            <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
            <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
            <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
            <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
          </div>
          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-x-8 xl:gap-x-12">
            {/* details */}
            <div className="w-full h-max mb-6">
              <SkeletonScreen className="min-h-10 max-h-12 max-w-125 mb-2" />
              <SkeletonScreen className="min-h-60 max-w-200" />
            </div>
            {/* techstack */}
            <div className="w-full flex lg:hidden items-center gap-1 mb-16">
              <h3 className="capitalize mr-2 text-slate-400 dark:text-slate-500">
                powered by
              </h3>
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
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
            <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
            <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
            <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
          </div>
        </div>
      </Section>
    </div>
  );
}
