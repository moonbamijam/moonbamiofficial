import { Metadata } from "next";
import Footer from "@components/footer/Footer";
import TimelineSection from "@components/sections/TimelineSection";
import BackToTop from "@components/buttons/BackToTop";

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
