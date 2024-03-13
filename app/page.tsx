import Picture from "@components/common/Picture";

const HomePage = async () => {
  return (
    <>
      <div className="container relative">
        <section id="home" className="h-screen">
          <div className="w-full relative px-[40px] lg:px-[50px] xl:px-[100px] 2xl:px-[200px] pt-[200px] flex flex-col items-center gap-y-[50px]">
            <div className="description text-center flex flex-col gap-4 items-center">
              <h1 className="text-6xl md:text-7xl lg:text-8xl px-1 font-bold">
                I am
                <strong className="highlight"> Moonbami</strong>.
              </h1>
              <p className="lg:text-lg xl:text-xl px-2 w-[400px] lg:w-[500px]">
                Pursuing a career for being a{" "}
                <strong className="highlight">developer</strong>. Still a
                novice, but making
                <strong className="highlight"> progress </strong>on a daily
                basis.
              </p>
            </div>
            <div className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] aspect-square border-[3px] border-solid border-black dark:border-white rounded-lg">
              <Picture src={"moonbami_nkcmku"} alt={"Jam Moonbami"} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
