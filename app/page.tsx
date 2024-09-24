import { Suspense } from "react";
import EmailBtn from "@components/buttons/EmailBtn";
import GitHubBtn from "@components/buttons/GitHubBtn";
import Picture from "@components/common/Picture";
import LandingSkeleton from "@components/skeletons/LandingSkeleton";
import RandomizeQuote from "@components/RandomizeQuote";
import ImageCredits from "@components/ui/ImageCredits";

const HomePage = async () => {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <div className="container relative">
        <section id="home" className="h-screen">
          <div className="w-full h-full relative px-[5vw] flex flex-col justify-center items-center xl:flex-row xl:justify-around 2xl:justify-evenly gap-y-12">
            <div className="flex flex-col items-center xl:items-start gap-6">
              <h1 className="text-center xl:max-w-[600px] 2xl:max-w-none xl:text-left text-5xl md:text-7xl lg:text-8xl px-1 font-black tracking-tight">
                I am{" "}
                <span className="text-primary dark:animate-rgb">Moonbami</span>
              </h1>
              <p className="text-center xl:text-left lg:text-lg xl:text-xl px-2 max-w-[500px] tracking-wide">
                Pursuing a career for being a{" "}
                <strong className="text-primary dark:animate-rgb">
                  developer
                </strong>
                . Still a novice, but making{" "}
                <strong className="text-primary dark:animate-rgb">
                  progress{" "}
                </strong>
                on a daily basis.
              </p>
              <div className="flex gap-6">
                <EmailBtn href="mailto:Jam Moonbami <moonbamijamofficial15@gmail.com>" />
                <GitHubBtn href="https://github.com/MoonbamiOfficial" />
              </div>
              <RandomizeQuote />
            </div>
            <div className="relative flex flex-col items-center gap-4">
              <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] aspect-square rounded-xl shadow-md hover:shadow-primary-dark [&>span]:hover:opacity-70 overflow-hidden">
                <Picture
                  src={"mnbm_saktxa"}
                  alt={"Jam Moonbami"}
                  isPriority={true}
                />
                <ImageCredits
                  creditsTo="Maki"
                  creditLink="https://www.instagram.com/prettyboimaks/"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default HomePage;
