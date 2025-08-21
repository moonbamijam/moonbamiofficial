import SectionHeading from "@frontend/components/SectionHeading";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";
import RotatingAnimeGif from "./RotatingAnimeGif";

export default function AboutAnime() {
  return (
    <Section className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300">
      <RotatingAnimeGif />
      <div className="anime">
        <SectionHeading name="I love Anime!" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          Anime is a significant part of my life, and it has influenced my
          creativity and mindset. I love watching different genres of anime from
          fantasy, harems, action, romcoms, isekai, slice of life to even ecchi.
          But what I really love the most are the{" "}
          <span className="font-semibold text-primary">waifus</span> of an
          anime. These girls are the reason why I made{" "}
          <span className="font-semibold text-primary">tsukiwa</span>. I usually
          watch through Crunchyroll but I sometimes set sail to the seas when
          geo-restrictions occur. You can check out my{" "}
          <Link
            href="https://anilist.co/user/Moonbami/"
            className="font-semibold text-primary hover:underline"
            target="_blank"
          >
            AniList
          </Link>{" "}
          account if you want to see more of my detailed anime tracking.
        </Paragraph>
      </div>
    </Section>
  );
}
