import { Metadata } from "next";
import dynamic from "next/dynamic";

// Components
import Section from "@components/wrappers/Section";
import Title from "@components/texts/Title";
import TopicImage from "@components/about/TopicImage";
import Me from "@public/me.webp";
import { useFetch } from "@hooks/useFetch";
import { AboutType } from "@shared-types/about";
import About from "@components/about/About";
import LoadingSpinner from "@components/LoadingSpinner";
import { TopicType } from "@shared-types/topic";
import Topic from "@components/about/Topic";
import SocMed from "@components/SocMed";
import FacebookLogo from "@public/facebook-logo.webp";
import GitHubLogo from "@public/github-mark-white.webp";
import InstagramLogo from "@public/instagram-logo.webp";
import TwitterXLogo from "@public/twitter-x-logo.webp";
import BackToTop from "@components/BackToTop";
import StackIcon from "@components/StackIcon";

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
            <TopicImage src={Me} />
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
        <Section id={"stack"} contentClassName={"gap-[100px]"}>
          <Title
            name={"tech stack"}
            desc={
              "All of my current technology stack that I really enjoy using. Looking forward to learn more."
            }
          />
          <div className="stacks inline-grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-7 gap-2">
            <StackIcon
              id={"python"}
              href={"https://www.python.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              }
              alt={"python logo"}
            />
            <StackIcon
              id={"renpy"}
              href={"https://www.renpy.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/renpy/renpy-original.svg"
              }
              alt={"renpy logo"}
            />
            <StackIcon
              id={"javascript"}
              href={"https://www.javascript.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              }
              alt={"javascript logo"}
            />
            <StackIcon
              id={"typescript"}
              href={"https://www.typescriptlang.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              }
              alt={"typescript logo"}
            />
            <StackIcon
              id={"react"}
              href={"https://react.dev/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              }
              alt={"react logo"}
            />
            <StackIcon
              id={"nextjs"}
              href={"https://nextjs.org/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              }
              alt={"nextjs logo"}
            />
            <StackIcon
              id={"nodejs"}
              href={"https://nodejs.org/en"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              }
              alt={"nodejs logo"}
            />
            <StackIcon
              id={"expressjs"}
              href={"https://expressjs.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              }
              alt={"expressjs logo"}
            />
            <StackIcon
              id={"tailwindcss"}
              href={"https://tailwindcss.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
              alt={"tailwindcss logo"}
            />
            <StackIcon
              id={"sass"}
              href={"https://sass-lang.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              }
              alt={"sass logo"}
            />
            <StackIcon
              id={"css"}
              href={"https://web.dev/learn/css"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              }
              alt={"css3 logo"}
            />
            <StackIcon
              id={"html"}
              href={"https://html.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              }
              alt={"html5 logo"}
            />
            <StackIcon
              id={"figma"}
              href={"https://www.figma.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              }
              alt={"figma logo"}
            />
            <StackIcon
              id={"photoshop"}
              href={
                "https://www.adobe.com/ph_en/products/photoshop/free-trial-download.html"
              }
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              }
              alt={"photoshop logo"}
            />
            <StackIcon
              id={"git"}
              href={"https://git-scm.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              }
              alt={"git logo"}
            />
            <StackIcon
              id={"mongodb"}
              href={"https://www.mongodb.com/"}
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              }
              alt={"mongodb logo"}
            />
          </div>
        </Section>
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
              href={"https://www.facebook.com/MoonbamiOffcl"}
              src={FacebookLogo}
              text={"facebook"}
            />
            <SocMed
              href={"https://www.instagram.com/moonbamidesu/"}
              src={InstagramLogo}
              text={"instagram"}
            />
            <SocMed
              href={"https://twitter.com/Moonbami_"}
              src={TwitterXLogo}
              text={"twitter x"}
            />
            <SocMed
              href={"https://github.com/MoonbamiOfficial"}
              src={GitHubLogo}
              text={"GitHub"}
            />
          </div>
          <hr className="w-full" />
          <p className="switch-text-color last-phrase text-center paragraph-format">
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
