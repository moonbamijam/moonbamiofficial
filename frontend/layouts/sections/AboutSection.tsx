import { useFetch } from "@backend/hooks/useFetch";
import { AboutType } from "@backend/ts/shared-types/types";
import Picture from "@frontend/components/common/Picture";
import Section from "@frontend/components/common/Section";
import Heading from "@frontend/components/Heading";
import AboutUi from "@frontend/components/AboutUi";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import ImageCredits from "@frontend/components/ImageCredits";

export default async function AboutSection() {
  const { abouts } = await useFetch("/api/abouts");

  const renderAbout = () => {
    if (abouts) {
      return abouts.map((about: AboutType) => (
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
      ));
    } else return <LoadingSpinner size="100px" fontSize="64px" />;
  };

  return (
    <Section id={"about"}>
      <Heading
        name={"about me"}
        desc={"Let's dive deeper of who am I behind the social media."}
      />
      <div className="about-me w-full flex flex-col lg:flex-row justify-between items-center lg:items-start xl:justify-evenly ">
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px] aspect-square shadow-md hover:shadow-primary-dark mb-4 rounded-lg [&>span]:hover:opacity-70 overflow-hidden">
          <Picture
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1710343815/portfolio/about-me-image_aidnjy`}
            alt={"Jam Moonbami"}
            isPriority={true}
          />
          <ImageCredits
            creditsTo="Chris"
            creditLink="https://www.instagram.com/lakezeus_/"
          />
        </div>
        <div className="about-me flex flex-col gap-[30px] ">
          {renderAbout()}
        </div>
      </div>
    </Section>
  );
}
