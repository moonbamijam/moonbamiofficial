import { Metadata } from "next";
import { AboutType } from "@shared-types/about";
import { TopicType } from "@shared-types/topic";
import { useFetch } from "@hooks/useFetch";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import dynamic from "next/dynamic";
import Section from "@components/common/Section";
import Title from "@components/texts/Title";
import About from "@components/about/About";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import Topic from "@components/about/Topic";
import SocMed from "@components/ui/SocMed";
import BackToTop from "@components/buttons/BackToTop";
import Picture from "@components/common/Picture";
import TechStacks from "@components/sections/TechStacks";

const Footer = dynamic(() => import("@components/footer/Footer"));

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = async () => {
  const { abouts } = await useFetch("/api/abouts");
  const { topics } = await useFetch("/api/topics");
  return (
    <>
      <div className="container relative">
        <BackToTop id={"#about"} />
        <Section id={"about"} contentClassName={"gap-[100px]"}>
          <Title
            name={"about me"}
            desc={"Let's dive deeper of who am I behind the social media."}
          />
          <div className="about-me w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly ">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square shadow-md shadow-gray-500 mb-4 rounded-lg overflow-hidden">
              <Picture
                src={"me_x4brue"}
                alt={"Jam Moonbami"}
                isPriority={true}
              />
            </div>
            <div className="about-me flex flex-col gap-[30px] ">
              {abouts ? (
                abouts.map((about: AboutType) => (
                  <About
                    key={about._id}
                    displayName={about.displayName}
                    desc={about.desc}
                    fullName={about.fullName}
                    nickname={about.nickname}
                    age={about.age}
                    birthday={about.birthday}
                    sex={about.sex}
                    nationality={about.nationality}
                    status={about.status}
                    languages={about.languages}
                  />
                ))
              ) : (
                <LoadingSpinner />
              )}
            </div>
          </div>
          <div className="topics w-full grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-10 ">
            {topics ? (
              topics.map((topic: TopicType) => (
                <Topic key={topic._id} title={topic.title} desc={topic.desc} />
              ))
            ) : (
              <LoadingSpinner />
            )}
          </div>
        </Section>
        <TechStacks />
        <Section id={"contact"} contentClassName={"gap-[30px]"}>
          <Title
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
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
