import { Suspense } from "react";
import GitHubButton from "@/components/buttons/GitHubButton";
import SkeletonScreenHome from "@/components/skeleton-screens/SkeletonScreenHome";
import TechStackCarousel from "@/features/tech-stack/TechStackCarousel";
import { Image } from "@/components/ui/Image";
import ImageCredits from "@/components/ImageCredits";
import LifeStatus from "@/components/LifeStatus";
import ResumeButton from "@/components/buttons/ResumeButton";

const HomePage = async () => {
  return (
    <Suspense fallback={<SkeletonScreenHome />}>
      <section id="home" className="container pt-32 pb-10">
        {/* wraps the introduction and the tech stacks */}
        <div className="w-full h-full relative flex flex-col justify-around lg:justify-between items-center gap-25">
          {/* wraps the intro */}
          <div className="w-full flex flex-col justify-evenly items-center xl:flex-row gap-5 gap-y-16">
            <div className="relative w-full flex flex-col items-center xl:items-start gap-5 max-w-150">
              <div className="flex flex-col items-center xl:items-start">
                <LifeStatus status="Open to work" />
                <h1 className="text-center xl:text-left text-6xl px-1 font-bold tracking-tight mt-2 mb-5">
                  I am <span className="text-primary">Moonbami</span>
                </h1>
                <p className="text-center xl:text-left text-xl xl:text-2xl px-2 text-slate-400 font-medium">
                  Pursuing a career of being a{" "}
                  <strong className="text-primary">software engineer</strong>.
                </p>
              </div>
              <div className="flex gap-6">
                <GitHubButton />
                <ResumeButton />
              </div>
            </div>
            <div className="relative w-full max-w-100 lg:max-w-112.5 xl:max-w-137.5 aspect-square flex flex-col items-end rounded-lg overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/141120384?v=4"
                alt="Jam Moonbami"
                width={460}
                height={460}
              />
              <ImageCredits
                phrase="Image source in"
                href="https://github.com/moonbamijam/moonbamijam"
                name="GitHub README"
              />
            </div>
          </div>
          <TechStackCarousel />
        </div>
      </section>
    </Suspense>
  );
};

export default HomePage;
