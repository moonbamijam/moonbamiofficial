import Section from "@frontend/layouts/common/Section";
import ImageCredits from "@frontend/components/ImageCredits";
import { ageCalc } from "@utils/age-calc";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";

const age = ageCalc("2002-08-15");

export default function AboutPersonal() {
  return (
    <Section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end">
        <Image
          src="https://i.ibb.co/5X2CC6xq/about.jpg"
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
        <Paragraph>
          I am Jam Moonbami or{" "}
          <span className="text-primary font-semibold">
            Jamiraquai Mikhail Alvarez
          </span>
          , a passionate{" "}
          <span className="text-primary font-semibold">{age} years old</span>{" "}
          full-stack web/game developer with a frontend specialty born in the
          country of{" "}
          <span className="text-primary font-semibold">The Philippines</span>.
          The word Moonbami consists of two of my most favorite things in my
          life. Moon represents how I love{" "}
          <span className="text-primary font-semibold">space</span> bami
          represents my first favorite female anime character{" "}
          <span className="text-primary font-semibold">Jabami Yumeko</span>.
          However, you can just call me Jam, Moonbami or whichever you prefer.{" "}
        </Paragraph>
      </div>
    </Section>
  );
}
