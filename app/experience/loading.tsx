import PageWrapper from "@frontend/layouts/common/PageWrapper";
import SkeletonScreenExp from "@frontend/components/skeleton-screens/SkeletonScreenExp";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenExp />
    </PageWrapper>
  );
}
