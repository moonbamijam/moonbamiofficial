import { SiAnilist } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import SocMedIcon from "./SocMedIcon";

const Footer = () => {
  const year = new Date();
  return (
    <>
      <div className="relative bottom-0 border-t-4 border-highlight bg-highlight"></div>
      <section
        id="footer"
        className="container relative bottom-0 py-[50px] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px]"
      >
        <h1 className="text-3xl lg:text-4xl font-semibold text-center">
          Let&apos;s build from here!
        </h1>
        <div className="w-full flex gap-4 justify-center my-8">
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
            href={"https://twitter.com/Moonbami_"}
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
        <hr />
        <div className="mt-4 flex gap-2 justify-center">
          <span className="text-center">
            &#169;{year.getFullYear().toString()} Moonbami.
          </span>{" "}
        </div>
      </section>
    </>
  );
};

export default Footer;
