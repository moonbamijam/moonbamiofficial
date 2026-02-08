import SectionHeading from "@/components/SectionHeading";
import { Paragraph } from "@/components/ui/Paragraph";
import Section from "@/layouts/common/Section";
import LoopingImage from "@/components/LoopingImage";
import { animeGifList } from "@/features/about/anime-gif-list";
import Link from "next/link";

export default function AboutAnime() {
  return (
    <Section className="flex flex-col lg:flex-row justify-center items-center lg:text-slate-300">
      <LoopingImage imageList={animeGifList} />
      <div className="anime">
        <SectionHeading name="Anime だいすき！" />
        <Paragraph className="lg:text-slate-400" variant="wide">
          Anime is a significant part of my life, and it has influenced my
          creativity and mindset. I love watching different genres of anime from
          drama, action, romcom, slice of life, fantasy and more. But what I
          really love the most are the{" "}
          <span className="font-semibold text-primary">waifus</span> of an
          anime. These girls are the reason why I made{" "}
          <span className="font-semibold text-primary">tsukiwa</span>.
          <br />
          <br />I usually watch through Crunchyroll and I sometimes use VPN
          whenever the show I want isn&apos;t available to my country. If the
          show isn&apos;t really available to crunchyroll for some reason, I
          don&apos;t hesitate to set sail to the seas when geo-restrictions
          occur. You can check out my{" "}
          <Link
            href="https://anilist.co/user/Moonbami/"
            className="font-semibold text-primary hover:underline"
            target="_blank"
          >
            AniList
          </Link>{" "}
          profile if you want to see more of my detailed anime tracking.
        </Paragraph>
      </div>
    </Section>
  );
}
