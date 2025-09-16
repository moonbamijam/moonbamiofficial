import { Metadata } from "next";
import BackToTop from "@frontend/layouts/buttons/BackToTop";
import AboutPersonal from "@frontend/layouts/pages/about/sections/personal/AboutPersonal";
import Footer from "@frontend/layouts/footer/Footer";
import AboutAnime from "@frontend/layouts/pages/about/sections/anime/AboutAnime";
import AboutProgramming from "@frontend/layouts/pages/about/sections/hobbies/AboutProgramming";
import AboutSpace from "@frontend/layouts/pages/about/sections/space/AboutSpace";
import AboutEducation from "@frontend/layouts/pages/about/sections/education/AboutEducation";
import AboutGame from "@frontend/layouts/pages/about/sections/game/AboutGame";
import PageWrapper from "@frontend/layouts/common/PageWrapper";

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
