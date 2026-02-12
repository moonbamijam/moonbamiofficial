import { Metadata } from "next";
import PageWrapper from "@/layouts/common/PageWrapper";
import Footer from "@/layouts/footer/Footer";
import BackToTopButton from "@/components/buttons/BackToTopButton";
import ExpIntern from "@/features/experience/ExpIntern";

export const metadata: Metadata = {
  title: "Experience",
};

export default function Experience() {
  return (
    <>
      <BackToTopButton id="#experience" />
      <PageWrapper id="#experience">
        <ExpIntern />
      </PageWrapper>
      <Footer />
    </>
  );
}
