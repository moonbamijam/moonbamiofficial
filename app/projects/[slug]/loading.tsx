import PageWrapper from "@layouts/common/PageWrapper";
import SkeletonScreenProjectSegment from "@components/skeleton-screens/SkeletonScreenProjectSegment";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenProjectSegment />
    </PageWrapper>
  );
}
