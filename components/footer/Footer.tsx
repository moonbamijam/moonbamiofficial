import Anchor from "./Anchor";

const Footer = () => {
  const year = new Date();
  return (
    <>
      <div className="footer-bg relative bottom-0 border-t-4 border-highlight w-full "></div>
      <section
        id="footer"
        className="container relative bottom-0 py-[50px] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px]"
      >
        <div className="content w-full flex justify-around">
          <div className="navigate">
            <h1 className="font-bold text-2xl mb-2">Navigate</h1>
            <div className="links flex flex-col gap-2">
              <Anchor href={"/"} text={"moonbami"} />
              <Anchor href={"/anime"} text={"about"} />
              <Anchor href={"/games"} text={"projects"} />
              <Anchor href={"/hobbies"} text={"timeline"} />
              <Anchor href={"/music"} text={"more"} />
            </div>
          </div>
          <div className="contact">
            <h1 className="font-bold text-2xl mb-2">Contact</h1>
            <div className="links flex flex-col gap-2">
              <Anchor
                href={"https://www.facebook.com/moonbamijam"}
                text={"facebook"}
                target="_blank"
              />
              <Anchor
                href={"https://www.instagram.com/moonbamidesu/"}
                text={"instagram"}
                target="_blank"
              />
              <Anchor
                href={"https://twitter.com/Moonbami_"}
                text={"twitter x"}
                target="_blank"
              />
              <Anchor
                href={"https://github.com/MoonbamiOfficial"}
                text={"GitHub"}
                target="_blank"
              />
            </div>
          </div>
        </div>
        <hr className="w-full mt-[50px]" />
        <div className="mt-2 flex gap-2 justify-center">
          <span className="text-center">
            &#169; {year.getFullYear().toString()} Moonbami. Developer's
            Portfolio.
          </span>{" "}
        </div>
      </section>
    </>
  );
};

export default Footer;
