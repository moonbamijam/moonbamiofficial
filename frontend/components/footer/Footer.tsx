import { socialMedias } from "@frontend/ts/constants/socialMedias";
import WaveOpacity from "@frontend/components/curves/WaveOpacity";
import Version from "@frontend/components/Version";
import SocMedIconBtn from "./SocMedIconBtn";
import Projects from "./Projects";
import Navigate from "./Navigate";
import Connect from "./Connect";

export default function Footer() {
  const year = new Date();
  return (
    <>
      <WaveOpacity />
      <div className="absolute w-full bg-primary dark:bg-primary-dark text-white">
        <section id="footer" className="container">
          <div className="py-[64px] px-[8vw] text-on-primary">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
              <h1 className="text-3xl xl:text-4xl font-bold text-center lg:text-left tracking-tight mb-8">
                Let&apos;s build from here!
              </h1>
              <div className="w-full lg:w-[60%] 2xl:w-[70%] flex justify-evenly">
                <Projects />
                <Connect />
                <Navigate />
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="w-full mt-8 flex flex-col md:flex-row-reverse md:justify-around items-center gap-y-4">
              <Version customStyles="min-w-[300px] justify-center" />
              <div className="min-w-[300px] hidden xl:flex justify-evenly gap-2">
                {socialMedias.map((socialMedia, id) => (
                  <SocMedIconBtn
                    key={id}
                    href={socialMedia.href}
                    ariaLabel={socialMedia.text}
                    icon={socialMedia.icon}
                  />
                ))}
              </div>
              <p className="min-w-[300px] text-center md:text-left">
                &#169; {year.getFullYear().toString()} Moonbami. Philippines.{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
