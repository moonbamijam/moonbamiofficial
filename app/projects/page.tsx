import { Metadata } from "next";
import ProjectSection from "@frontend/components/sections/ProjectSection";
import BackToTop from "@frontend/components/buttons/BackToTop";
import Footer from "@frontend/components/footer/Footer";

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
