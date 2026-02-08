import PageWrapper from "@/layouts/common/PageWrapper";
import SkeletonScreenAbout from "@/features/about/SkeletonScreenAbout";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenAbout />
    </PageWrapper>
  );
}
