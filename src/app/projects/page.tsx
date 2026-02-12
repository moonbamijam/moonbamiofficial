import { Metadata } from "next";
import Projects from "@/features/project/Projects";
import BackToTopButton from "@/components/buttons/BackToTopButton";
import Footer from "@/layouts/footer/Footer";
import PageWrapper from "@/layouts/common/PageWrapper";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <BackToTopButton id={"#projects"} />
      <PageWrapper id="projects">
        <Projects />
      </PageWrapper>
      <Footer />
    </>
  );
}
