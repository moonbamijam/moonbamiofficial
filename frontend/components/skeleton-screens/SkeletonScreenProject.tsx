import Grid from "@frontend/layouts/common/Grid";
import Section from "@frontend/layouts/common/Section";
import SkeletonScreen from "@frontend/components/skeleton-screens/SkeletonScreen";
import { Image } from "@frontend/components/ui/Image";

const skeletonProjects = 6;

export default function SkeletonScreenProject() {
  return (
    <Section>
      <Grid className="xl:grid-cols-2 premium:grid-cols-3 gap-[50px]">
        {Array.from({ length: skeletonProjects }).map((_, index) => (
          <div
            key={index}
            className="w-full h-max rounded-lg flex flex-col justify-between bg-surface dark:bg-dm-surface p-8 shadow"
          >
            <SkeletonScreen className="mb-4">
              <Image
                className="max-h-[400px] opacity-0 invisible"
                variant="thumbnail"
                size="thumbnail"
                shape="tv"
              />
            </SkeletonScreen>
            <SkeletonScreen className="min-h-8 mb-2" />
            <SkeletonScreen className="min-h-20 mb-6" />
            {/* tags */}
            <div className="min-h-10 lg:min-h-20 flex flex-wrap gap-1 mb-4">
              <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
              <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
              <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
              <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
              <SkeletonScreen className="max-w-28 min-h-12 !rounded-full" />
            </div>
            {/* techstack */}
            <div className="flex gap-1 mb-4">
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
              <SkeletonScreen className="max-w-10 aspect-square !rounded-full" />
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
