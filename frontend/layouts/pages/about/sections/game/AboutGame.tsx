import SectionHeading from "@frontend/components/SectionHeading";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import RotatingGameGif from "../../../../../components/about/RotatingGameGif";
import Link from "@node_modules/next/link";

export default function AboutGame() {
  return (
    <Section className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300">
      <RotatingGameGif />
      <div className="game">
        <SectionHeading name="No Game, No Life!" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          Last but not the least, also a significant part of my life is none
          other than gaming. I have been playing video games since I was a
          child, and it has always been my source of happiness. Without it, I
          may have never met wonderful people. I love playing{" "}
          <span className="text-primary font-semibold">Visual Novels</span> so
          much, the stories that give me different lessons and inspirations in
          my life. I also love playing{" "}
          <span className="text-primary font-semibold">Gacha Games</span>, I
          just love collecting different type of characters. Some of them had
          special place in my heart.
          <br />
          <br />I mostly play on{" "}
          <Link
            href="https://steamcommunity.com/id/moonbamiofficial/"
            className="text-primary font-semibold hover:underline"
          >
            Steam
          </Link>{" "}
          and spend most of my time in{" "}
          <span className="text-primary font-semibold">
            Umamusume: Pretty Derby
          </span>{" "}
          but I also play{" "}
          <span className="text-primary font-semibold">Left 4 Dead 2</span>{" "}
          especially with my friends. If I ever want to just chill after a long
          day, I would just play{" "}
          <span className="text-primary font-semibold">Stardew Valley</span> as
          this is my go-to whenever I want to relax.
        </Paragraph>
      </div>
    </Section>
  );
}
