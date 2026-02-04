import { Metadata } from "next";
import Footer from "@layouts/footer/Footer";
import BackToTop from "@components/buttons/BackToTop";
import PageWrapper from "@layouts/common/PageWrapper";
import Timeline from "@features/timeline/Timeline";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <>
      <BackToTop id="#timeline" />
      <PageWrapper id="timeline">
        <Timeline />
      </PageWrapper>
      <Footer />
    </>
  );
}
