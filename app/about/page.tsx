import { Metadata } from "next";
import BackToTop from "@frontend/layouts/buttons/BackToTop";
import AboutPersonal from "@frontend/layouts/pages/about/sections/personal/AboutPersonal";
import Footer from "@frontend/layouts/footer/Footer";
import AboutAnime from "@frontend/layouts/pages/about/sections/anime/AboutAnime";
import AboutProgramming from "@frontend/layouts/pages/about/sections/hobbies/AboutProgramming";
import AboutSpace from "@frontend/layouts/pages/about/sections/space/AboutSpace";
import AboutEducation from "@frontend/layouts/pages/about/sections/education/AboutEducation";
import AboutGame from "@frontend/layouts/pages/about/sections/game/AboutGame";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      <BackToTop id={"#about"} />
      <div id="about" className="container pt-[100px] lg:pt-[50px]">
        <AboutPersonal />
        <AboutAnime />
        <AboutProgramming />
        <AboutSpace />
        <AboutEducation />
        <AboutGame />
      </div>
      <Footer />
    </>
  );
}
