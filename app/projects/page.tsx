import { Metadata } from "next";
import Projects from "@frontend/layouts/pages/project/Projects";
import BackToTop from "@frontend/components/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";
import PageWrapper from "@frontend/layouts/common/PageWrapper";

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
