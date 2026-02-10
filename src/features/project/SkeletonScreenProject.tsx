import Grid from "@/layouts/common/Grid";
import Section from "@/layouts/common/Section";
import SkeletonScreen from "@/components/skeleton-screens/SkeletonScreen";
import SkeletonImage from "@/components/skeleton-screens/SkeletonImage";

const skeletonProjects = 6;

export default function SkeletonScreenProject() {
  return (
    <Section>
      <Grid className="xl:grid-cols-2 premium:grid-cols-3 gap-12.5">
        {Array.from({ length: skeletonProjects }).map((_, index) => (
          <div
            key={index}
            className="w-full h-max rounded-lg flex flex-col justify-between bg-surface dark:bg-dm-surface p-8 shadow"
          >
            <SkeletonScreen className="mb-4">
              <SkeletonImage className="max-h-100" />
            </SkeletonScreen>
            <SkeletonScreen className="min-h-8 mb-2" />
            <SkeletonScreen className="min-h-20 mb-6" />
            {/* tags */}
            <div className="min-h-10 lg:min-h-20 flex flex-wrap gap-1 mb-4">
              <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
              <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
              <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
              <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
              <SkeletonScreen className="max-w-28 min-h-12 rounded-full!" />
            </div>
            {/* techstack */}
            <div className="flex gap-1 mb-4">
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
              <SkeletonScreen className="max-w-10 aspect-square rounded-full!" />
            </div>
            {/* cta */}
            <div className="flex justify-between">
              <SkeletonScreen className="max-w-36 min-h-14 mr-2" />
              <SkeletonScreen className="max-w-36 min-h-14 mr-2" />
            </div>
          </div>
        ))}
      </Grid>
    </Section>
  );
}
