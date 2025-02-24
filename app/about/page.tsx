import { Metadata } from "next";
import BackToTop from "@frontend/components/buttons/BackToTop";
import AboutSection from "@frontend/components/sections/AboutSection";
import TopicSection from "@frontend/components/sections/TopicSection";
import TechStackSection from "@frontend/components/sections/TechStackSection";
import ContactSection from "@frontend/components/sections/ContactSection";
import Footer from "@frontend/components/footer/Footer";

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
