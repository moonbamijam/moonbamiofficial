import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import SocMed from "@frontend/components/SocMed";

export default function ContactSection() {
  return (
    <Section id={"contact"}>
      <Heading
        name={"Contact Me"}
        desc={
          "If you have any concerns, questions or if you just want to be friends with me. Please, contact me to any of these that you prefer."
        }
      />
      <hr className="w-full" />
      <div className=" socmeds grid grid-cols-2 gap-[30px]">
        <SocMed
          href={"https://www.facebook.com/moonbamijam"}
          ariaLabel={"Facebook"}
          icon={<FaFacebook />}
          text={"facebook"}
        />
        <SocMed
          href={"https://www.instagram.com/moonbamidesu/"}
          ariaLabel={"Instagram"}
          icon={<FaInstagram />}
          text={"instagram"}
        />
        <SocMed
          href={"https://twitter.com/Moonbami_"}
          ariaLabel={"X"}
          icon={<FaXTwitter />}
          text={"twitter x"}
        />
        <SocMed
          href={"https://github.com/MoonbamiOfficial"}
          ariaLabel={"GitHub"}
          icon={<FaGithub />}
          text={"GitHub"}
        />
      </div>
      <hr className="w-full" />
      <p className="last-phrase text-center paragraph-format">
        I do have more social media accounts but these are my commonly used
        ones.
      </p>
    </Section>
  );
}
