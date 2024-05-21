import { Metadata } from "next";
import ProjectSection from "@components/sections/ProjectSection";
import BackToTop from "@components/buttons/BackToTop";
import Footer from "@components/footer/Footer";


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
