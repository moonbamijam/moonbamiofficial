import { Suspense } from "react";
import EmailBtn from "@frontend/layouts/buttons/EmailBtn";
import GitHubBtn from "@frontend/layouts/buttons/GitHubBtn";
import LandingSkeleton from "@frontend/layouts/skeletons/LandingSkeleton";
import LandingAsset from "@frontend/layouts/LandingAsset";
import NowPlaying from "@frontend/layouts/spotify/NowPlaying";

const HomePage = async () => {
  return (
    <Suspense fallback={<LandingSkeleton />}>
      <section id="home" className="container h-screen pt-28">
        <div className="w-full h-full relative flex flex-col justify-center items-center xl:flex-row xl:justify-around 2xl:justify-between gap-12">
          <div className="relative w-full flex flex-col items-center xl:items-start gap-5 max-w-[600px]">
            <div className="flex flex-col items-center xl:items-start gap-5">
              <h1 className="text-center xl:text-left text-6xl px-1 font-bold tracking-tight">
                I am{" "}
                <span className="text-primary dark:text-secondary">
                  Moonbami
                </span>
              </h1>
              <p className="text-center xl:text-left text-xl xl:text-2xl px-2 text-[#888888] font-medium">
                Pursuing a career of being a{" "}
                <strong className="text-primary dark:text-secondary">
                  software engineer
                </strong>
                .
              </p>
            </div>
            <div className="flex gap-6">
              <GitHubBtn href="https://github.com/moonbamijam" />
              <EmailBtn href="mailto:Jam Moonbami <moonbamijamofficial15@gmail.com>" />
            </div>
            <NowPlaying />
          </div>
          <LandingAsset />
        </div>
      </section>
    </Suspense>
  );
};

export default HomePage;
