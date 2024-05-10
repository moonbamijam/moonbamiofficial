import { Metadata } from "next";
import dynamic from "next/dynamic";
import ProjectSection from "@components/sections/ProjectSection";
import BackToTop from "@components/buttons/BackToTop";

const Footer = dynamic(() => import("@components/footer/Footer"));

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
