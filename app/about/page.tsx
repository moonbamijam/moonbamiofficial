import { Metadata } from "next";
import BackToTop from "@components/buttons/BackToTop";
import AboutPersonal from "@layouts/pages/about/sections/personal/AboutPersonal";
import Footer from "@layouts/footer/Footer";
import AboutAnime from "@layouts/pages/about/sections/anime/AboutAnime";
import AboutProgramming from "@layouts/pages/about/sections/hobbies/AboutProgramming";
import AboutSpace from "@layouts/pages/about/sections/space/AboutSpace";
import AboutEducation from "@layouts/pages/about/sections/education/AboutEducation";
import AboutGame from "@layouts/pages/about/sections/game/AboutGame";
import PageWrapper from "@layouts/common/PageWrapper";

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
