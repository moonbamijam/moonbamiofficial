import { Metadata } from "next";
import ProjectSection from "@frontend/layouts/sections/ProjectSection";
import BackToTop from "@frontend/layouts/buttons/BackToTop";
import Footer from "@frontend/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#project"} />
        <ProjectSection />
      </div>
      <Footer />
    </>
  );
}
