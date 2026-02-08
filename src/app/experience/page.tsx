import { Metadata } from "next";
import PageWrapper from "@/layouts/common/PageWrapper";
import Footer from "@/layouts/footer/Footer";
import BackToTop from "@/components/buttons/BackToTop";
import ExpIntern from "@/features/experience/sections/ExpIntern";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Experience() {
  return (
    <>
      <BackToTop id="#experience" />
      <PageWrapper id="#experience">
        <ExpIntern />
      </PageWrapper>
      <Footer />
    </>
  );
}
