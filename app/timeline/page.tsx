import { Metadata } from "next";
import Footer from "@frontend/layouts/footer/Footer";
import Timeline from "@frontend/layouts/pages/timeline/Timeline";
import BackToTop from "@frontend/components/buttons/BackToTop";
import PageWrapper from "@frontend/layouts/common/PageWrapper";

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
