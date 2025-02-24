import { Metadata } from "next";
import BackToTop from "@frontend/layouts/buttons/BackToTop";
import AboutSection from "@frontend/layouts/sections/AboutSection";
import TopicSection from "@frontend/layouts/sections/TopicSection";
import TechStackSection from "@frontend/layouts/sections/TechStackSection";
import ContactSection from "@frontend/layouts/sections/ContactSection";
import Footer from "@frontend/layouts/footer/Footer";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#about"} />
        <AboutSection />
        <TopicSection />
        <TechStackSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
