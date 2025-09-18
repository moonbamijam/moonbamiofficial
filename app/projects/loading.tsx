import PageWrapper from "@frontend/layouts/common/PageWrapper";
import SkeletonScreenProject from "@frontend/components/skeleton-screens/SkeletonScreenProject";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenProject />
    </PageWrapper>
  );
}
