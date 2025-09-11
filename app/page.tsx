import { Suspense } from "react";
import EmailBtn from "@frontend/layouts/buttons/EmailBtn";
import GitHubBtn from "@frontend/layouts/buttons/GitHubBtn";
import LandingSkeleton from "@frontend/layouts/skeletons/LandingSkeleton";
import TechStackSlider from "@frontend/layouts/TechStackSlider";
import { Image } from "@frontend/components/ui/Image";

const HomePage = async () => {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <section id="home" className="container pt-28">
        {/* wraps the introduction and the tech stacks */}
        <div className="w-full h-full relative flex flex-col justify-around lg:justify-between items-center gap-20">
          {/* wraps the intro */}
          <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5">
            <div className="relative w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px]">
              <div className="flex flex-col items-center xl:items-start gap-5">
                <h1 className="text-center xl:text-left text-6xl px-1 font-bold tracking-tight">
                  I am <span className="text-primary">Moonbami</span>
                </h1>
                <p className="text-center xl:text-left text-xl xl:text-2xl px-2 text-slate-400 font-medium">
                  Pursuing a career of being a{" "}
                  <strong className="text-primary">software engineer</strong>.
                </p>
              </div>
              <div className="flex gap-6">
                <GitHubBtn href="https://github.com/moonbamijam" />
                <EmailBtn href="mailto:Jam Moonbami <moonbamijamofficial15@gmail.com>" />
              </div>
            </div>
            <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[550px] aspect-square flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/141120384?v=4"
                alt="Jam Moonbami"
              />
            </div>
          </div>
          <TechStackSlider />
        </div>
      </section>
    </Suspense>
  );
};

export default HomePage;
