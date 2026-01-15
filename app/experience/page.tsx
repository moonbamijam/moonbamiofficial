import { Metadata } from "next";
import PageWrapper from "@frontend/layouts/common/PageWrapper";
import Footer from "@frontend/layouts/footer/Footer";
import BackToTop from "@frontend/components/buttons/BackToTop";
import ExpIntern from "@frontend/layouts/pages/experience/sections/ExpIntern";

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
