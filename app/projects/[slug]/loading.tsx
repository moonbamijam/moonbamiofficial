import PageWrapper from "@layouts/common/PageWrapper";
import SkeletonScreenProjectSegment from "@features/project/SkeletonScreenProjectSegment";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenProjectSegment />
    </PageWrapper>
  );
}
