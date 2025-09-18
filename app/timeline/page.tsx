import { Metadata } from "next";
import Footer from "@frontend/layouts/footer/Footer";
import TimelineSection from "@frontend/layouts/sections/TimelineSection";
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
        <TimelineSection />
      </PageWrapper>
      <Footer />
    </>
  );
}
