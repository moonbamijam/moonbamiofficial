import Section from "@/layouts/common/Section";
import ImageCredits from "@/components/ImageCredits";
import { ageCalc } from "@/shared/utils/age-calc";
import { Paragraph } from "@/components/ui/Paragraph";
import SectionHeading from "@/components/SectionHeading";
import { Image } from "@/components/ui/Image";
import Link from "next/link";

const age = ageCalc("2002-08-15");

export default function AboutPersonal() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end">
        <Image
          src="/images/pages/about/about.jpg"
          alt="Jam Moonbami"
          shape="tv"
        />
        <ImageCredits
          name="Chris De Real"
          href="https://www.instagram.com/lakezeus_/"
        />
      </div>
      <div className="xl:col-span-2 personal">
        <SectionHeading name="This is me" />
        <Paragraph variant="wide">
          I am Jam Moonbami or{" "}
          <span className="text-primary font-semibold">
            Jamiraquai Mikhail Alvarez
          </span>
          , a passionate{" "}
          <span className="text-primary font-semibold">{age} years old</span>{" "}
          full-stack{" "}
          <span className="text-primary font-semibold">web/game developer</span>{" "}
          with a frontend specialty born in the country of{" "}
          <span className="text-primary font-semibold">The Philippines</span>. I
          like doing things on my own but I love whenever I get to do things
          with other people. I am always open to new{" "}
          <span className="text-primary font-semibold">
            opportunities and collaborations
          </span>
          , so feel free to reach out to me anytime. Let&apos;s create something
          that makes people love!
          <br />
          <br />
          The word <span className="text-primary font-semibold">
            Moonbami
          </span>{" "}
          consists of two of my most favorite things in my life. Moon represents
          how I love <span className="text-primary font-semibold">space</span>{" "}
          in which I talked about{" "}
          <Link
            href="#space"
            className="text-primary font-semibold hover:underline"
          >
            here
          </Link>
          , while bami represents my first favorite female anime character{" "}
          <span className="text-primary font-semibold">Jabami Yumeko</span>.
          However, you can just call me Jam, Moonbami or whichever you prefer.
        </Paragraph>
      </div>
    </Section>
  );
}
