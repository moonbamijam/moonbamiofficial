import { Metadata } from "next";
import Projects from "@features/project/Projects";
import BackToTop from "@components/buttons/BackToTop";
import Footer from "@layouts/footer/Footer";
import PageWrapper from "@layouts/common/PageWrapper";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <BackToTop id={"#projects"} />
      <PageWrapper id="projects">
        <Projects />
      </PageWrapper>
      <Footer />
    </>
  );
}
