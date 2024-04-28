import Picture from "@components/common/Picture";
import Section from "@components/common/Section";
import Title from "@components/texts/Title";
import AboutUi from "@components/ui/AboutUi";
import LoadingSpinner from "@components/ux/LoadingSpinner";
import { useFetch } from "@hooks/useFetch";
import { AboutType } from "@shared-types/about";

export default async function AboutSection() {
  const { abouts } = await useFetch("/api/abouts");

  return (
    <Section id={"about"} contentStyles={"gap-[100px]"}>
      <Title
        name={"about me"}
        desc={"Let's dive deeper of who am I behind the social media."}
      />
      <div className="about-me w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly ">
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square shadow-md shadow-gray-500 mb-4 rounded-lg overflow-hidden">
          <Picture src={"me_x4brue"} alt={"Jam Moonbami"} isPriority={true} />
        </div>
        <div className="about-me flex flex-col gap-[30px] ">
          {abouts ? (
            abouts.map((about: AboutType) => (
              <AboutUi
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
    </Section>
  );
}
