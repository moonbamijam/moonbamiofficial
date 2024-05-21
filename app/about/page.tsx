import { Metadata } from "next";
import BackToTop from "@components/buttons/BackToTop";
import AboutSection from "@components/sections/AboutSection";
import TopicSection from "@components/sections/TopicSection";
import TechStackSection from "@components/sections/TechStackSection";
import ContactSection from "@components/sections/ContactSection";
import Footer from "@components/footer/Footer";

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
