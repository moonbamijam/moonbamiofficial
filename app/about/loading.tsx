import PageWrapper from "@frontend/layouts/common/PageWrapper";
import SkeletonScreenAbout from "@frontend/layouts/skeleton-screens/SkeletonScreenAbout";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenAbout />
    </PageWrapper>
  );
}
