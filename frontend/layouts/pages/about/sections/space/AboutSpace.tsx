import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";

export default function AboutSpace() {
  return (
    <Section
      id="space"
      className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300"
    >
      <div className="lg:absolute lg:-z-10 lg:w-full lg:h-full flex flex-col items-end">
        <Image
          src="https://sarahjmwalker.wordpress.com/wp-content/uploads/2014/12/interstellar-2014-poster-wallpaper.jpg"
          alt="Interstellar"
          className="lg:brightness-[30%]"
          shape="tv"
        />
        <ImageCredits
          name=" Interstellar "
          href="https://www.imdb.com/title/tt0816692/"
          className="lg:hidden"
        />
      </div>
      <ImageCredits
        name=" Interstellar "
        href="https://www.imdb.com/title/tt0816692/"
        className="hidden lg:block absolute bottom-[4%] right-[1%]"
      />
      <div className="space">
        <SectionHeading name="Into the stars!" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          I've always been curious about if humans are the only living beings in
          the universe. Eversince I was a child, I have so many questions. I
          wish I could glimpse of what is{" "}
          <span className="text-primary font-semibold">future of Earth</span>{" "}
          before I leave it. Like what is it be like to have advanced
          technology, humanoids and a lot more! Witnessing our own Milky Way
          Galaxy up close is definitely a{" "}
          <span className="text-primary font-semibold">once-in-a-lifetime</span>{" "}
          experience but light pollution makes it hard for us humans to see it.
          I that someday, I'll be able to see the stars and our galaxy with
          greater clarity at least once in my life.
          <br />
          <br />
          It really is unbelievable to know that we humans are just a tiny dust
          across the universe, how insignificant we are and our existence.{" "}
          <span className="text-primary font-semibold">
            Living is a great coincidence
          </span>{" "}
          since imagine that we have trillions of galaxies and star systems but
          what are the odds that one of them can contain living beings.
        </Paragraph>
      </div>
    </Section>
  );
}
