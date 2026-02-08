import { Metadata } from "next";
import BackToTop from "@/components/buttons/BackToTop";
import AboutPersonal from "@/features/about/sections/AboutPersonal";
import Footer from "@/layouts/footer/Footer";
import AboutAnime from "@/features/about/sections/AboutAnime";
import AboutProgramming from "@/features/about/sections/AboutProgramming";
import AboutSpace from "@/features/about/sections/AboutSpace";
import AboutEducation from "@/features/about/sections/AboutEducation";
import AboutGame from "@/features/about/sections/AboutGame";
import PageWrapper from "@/layouts/common/PageWrapper";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <BackToTop id={"#about"} />
      <PageWrapper id="about">
        <AboutPersonal />
        <AboutAnime />
        <AboutProgramming />
        <AboutSpace />
        <AboutEducation />
        <AboutGame />
      </PageWrapper>
      <Footer />
    </>
  );
}
