import { Metadata } from "next";
import Footer from "@layouts/footer/Footer";
import Timeline from "@layouts/pages/timeline/Timeline";
import BackToTop from "@components/buttons/BackToTop";
import PageWrapper from "@layouts/common/PageWrapper";

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
