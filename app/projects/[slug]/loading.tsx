import PageWrapper from "@frontend/layouts/common/PageWrapper";
import SkeletonScreenProjectSegment from "@frontend/layouts/skeleton-screens/SkeletonScreenProjectSegment";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenProjectSegment />
    </PageWrapper>
  );
}
