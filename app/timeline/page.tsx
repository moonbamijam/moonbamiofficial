import { Metadata } from "next";
import Footer from "@frontend/components/footer/Footer";
import TimelineSection from "@frontend/components/sections/TimelineSection";
import BackToTop from "@frontend/components/buttons/BackToTop";

export const metadata: Metadata = {
  title: "Timeline",
};

export default function TimelinePage() {
  return (
    <>
      <div className="container relative">
        <BackToTop id="#timeline" />
        <TimelineSection />
      </div>
      <Footer />
    </>
  );
}
