import { Metadata } from "next";
import Projects from "@frontend/layouts/pages/project/Projects";
import BackToTop from "@frontend/layouts/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <BackToTop id={"#projects"} />
      <div id="projects" className="container pt-[100px] lg:pt-[50px]">
        <Projects />
      </div>
      <Footer />
    </>
  );
}
