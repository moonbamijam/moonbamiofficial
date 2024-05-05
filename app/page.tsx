import ContactBtn from "@components/buttons/ContactBtn";
import GitHubBtn from "@components/buttons/GitHubBtn";
import Picture from "@components/common/Picture";

const HomePage = async () => {
  return (
    <>
      <div className="container relative">
        <section id="home" className="h-screen">
          <div className="w-full h-full relative px-[5vw] flex flex-col lg:flex-row justify-center xl:justify-evenly items-center gap-y-12">
            <div className="flex flex-col items-center lg:items-start gap-6">
              <h1 className="text-center lg:max-w-[600px] 2xl:max-w-none lg:text-left text-5xl md:text-7xl lg:text-8xl px-1 font-bold tracking-tight">
                I am{" "}
                <strong className="text-primary dark:text-primary-light">
                  Moonbami
                </strong>
              </h1>
              <p className="text-center lg:text-left lg:text-lg xl:text-xl px-2 w-[400px] lg:w-[500px] tracking-wide">
                Pursuing a career for being a{" "}
                <strong className="text-primary dark:text-primary-light">
                  developer
                </strong>
                . Still a novice, but making{" "}
                <strong className="text-primary dark:text-primary-light">
                  progress{" "}
                </strong>
                on a daily basis.
              </p>
              <div className="flex gap-6">
                <ContactBtn href="/about/#contact" />
                <GitHubBtn href="https://github.com/MoonbamiOfficial" />
              </div>
            </div>
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] flex justify-center items-center transform [&>img]:hover:scale-125 aspect-square rounded-xl shadow-md hover:shadow-primary-dark overflow-hidden">
              <Picture
                src={"moonbami-raw_cbd4px"}
                alt={"Jam Moonbami"}
                isPriority={true}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
