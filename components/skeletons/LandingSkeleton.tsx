import SkeletonScreen from "@components/SkeletonScreen";

export default function LandingSkeleton() {
  return (
    <div className="container relative">
      <section id="home" className="h-screen">
        <div className="w-full h-full relative px-[5vw] flex flex-col lg:flex-row justify-center xl:justify-evenly items-center gap-y-12">
          <div className="flex flex-col items-center lg:items-start gap-6">
            <SkeletonScreen id="heading" width="w-[500px] " height="h-[96px]" />
            <SkeletonScreen
              id="description"
              width="w-[400px] lg:w-[500px]"
              height="h-[56px]"
            />
            <div className="flex gap-6">
              <SkeletonScreen
                width="w-[150px]"
                height=" h-[50px]"
                customStyles=" rounded-lg"
              />
              <SkeletonScreen
                width="w-[150px]"
                height=" h-[50px]"
                customStyles=" rounded-lg"
              />
            </div>
          </div>
          <SkeletonScreen
            id="landing-image"
            width="w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px]"
            height="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
            customStyles="aspect-square rounded-xl overflow-hidden "
          />
        </div>
      </section>
    </div>
  );
}
