import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";

export default function ExpIntern() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-4 premium:grid-cols-5">
      <div className="w-full xl:col-span-2 premium:col-span-3 flex flex-col items-end order-2">
        <Image
          src="/images/pages/experience/oc.jpg"
          alt="olivarez college parañaque stage"
          shape="tv"
        />
        <ImageCredits
          name="Olivarez College"
          href="https://olivarezcollege.edu.ph/"
        />
      </div>
      <div className="xl:col-span-2 order-1">
        <SectionHeading name="On-The-Job Trainee" />
        <Paragraph variant="wide">
          I've experience my very first On-The-Job training at the Olivarez
          College Parañaque specifically in the{" "}
          <span className="text-primary font-semibold">
            Department of Computer Studies
          </span>
          . There I experienced what it feels like to be part of an
          organization. Together with my co-practicumer who are actually my
          friends as well, we've learned so many new things especially from our
          seniors. We handled computer assembling and dissambling, cable
          management, using tools like BurnIn Tester to test if a computer has
          any hardware malfunctions, malwares and more that could affect the
          computer.
          <br />
          <br />
          It may look like all we always do are things related to computer but
          we also manage to have some fun sometimes. As we learned that
          sometimes, you won't get along to some of the people inside the
          organization and this can cause you stress. Other than that I'm very
          happy to be part of the department and thank you to the seniors who've
          taught us so many things.
        </Paragraph>
      </div>
    </Section>
  );
}
