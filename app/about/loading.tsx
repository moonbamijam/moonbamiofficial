import PageWrapper from "@layouts/common/PageWrapper";
import SkeletonScreenAbout from "@components/skeleton-screens/SkeletonScreenAbout";

export default function Loading() {
  return (
    <PageWrapper>
      <SkeletonScreenAbout />
    </PageWrapper>
  );
}
