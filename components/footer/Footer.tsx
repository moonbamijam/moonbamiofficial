import { SiAnilist } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import SocMedIcon from "./SocMedIcon";
import WaveOpacity from "@components/curves/WaveOpacity";
import Projects from "./Projects";
import Navigate from "./Navigate";
import Quote from "@components/ui/Quote";

const NavLinks = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "timeline", path: "/timeline" },
  { id: 5, name: "more", path: "/more" },
];

export default function Footer() {
  const year = new Date();
  return (
    <>
      <section id="footer" className="container relative bottom-0">
        <WaveOpacity />
        <div className="py-[64px] px-[8vw] text-on-primary bg-primary dark:bg-primary-dark">
          <div className="flex flex-col lg:flex-row items-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center tracking-tight mb-8">
              Let&apos;s build from here!
            </h1>
            <div className="w-full md:w-[80%] flex justify-evenly">
              <Projects />
              <Navigate />
            </div>
          </div>
          <hr className="opacity-50" />
          <div className="w-full mt-8 flex flex-col justify-evenly items-center gap-16">
            <div className="flex flex-col items-center gap-y-8">
              <Quote
                quote="The greatest successes come from having the freedom to fail."
                author="Mark Zuckerberg"
                customStyles="sm:max-w-[400px] lg:max-w-max"
              />
              <div className="max-w-[80%] flex justify-evenly gap-2">
                <SocMedIcon
                  href={"https://anilist.co/user/Moonbami/"}
                  ariaLabel={"AniList"}
                  icon={<SiAnilist />}
                />
                <SocMedIcon
                  href={"https://www.facebook.com/moonbamijam"}
                  ariaLabel={"Facebook"}
                  icon={<FaFacebook />}
                />
                <SocMedIcon
                  href={"https://www.instagram.com/moonbamidesu/"}
                  ariaLabel={"Instagram"}
                  icon={<FaInstagram />}
                />
                <SocMedIcon
                  href={"https://github.com/MoonbamiOfficial"}
                  ariaLabel={"GitHub"}
                  icon={<FaGithub />}
                />
                <SocMedIcon
                  href={"https://twitter.com/MoonbamiOffcl"}
                  ariaLabel={"X"}
                  icon={<FaXTwitter />}
                />
                <SocMedIcon
                  href={"https://www.reddit.com/user/MoonbamiOfficial/"}
                  ariaLabel={"Reddit"}
                  icon={<FaRedditAlien />}
                />
                <SocMedIcon
                  href={"https://www.youtube.com/@Moonbami"}
                  ariaLabel={"YouTube"}
                  icon={<FaYoutube />}
                />
              </div>
            </div>
            <p className="min-w-[400px] text-center">
              &#169; {year.getFullYear().toString()} Moonbami. Philippines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
