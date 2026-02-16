import ImageCredits from "@/components/ImageCredits";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/Button";
import { Image } from "@/components/ui/Image";
import { Paragraph } from "@/components/ui/Paragraph";
import Grid from "@/layouts/common/Grid";
import Section from "@/layouts/common/Section";
import Link from "next/link";

export default function AboutEducation() {
  return (
    <Section>
      <Grid className="grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-x-6 2xl:gap-x-12 2xl:gap-y-16">
        {/* 1 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/elementary.webp"
              alt="Morrisonridge Academy"
              shape="tv"
              width={1920}
              height={1080}
            />
            <ImageCredits
              name="Lorrane Dasalla @ Morrisonridge Academy"
              href="https://www.facebook.com/share/p/1BZVoNW1aj/"
            />
          </div>
          <div className="gradeschool">
            <SectionHeading name="grade school" />
            <Paragraph variant="wide">
              I started my education at{" "}
              <span className="text-primary font-semibold">
                Morrisonridge Academy
              </span>{" "}
              as an elementary student. I was a curious child who loved to
              explore and learn new things. My time there laid the foundation of
              my present mindset and personality. In over 6 years, a lot of
              memories still lingers in my mind whenever I go back to the time
              of my childhood.
            </Paragraph>
          </div>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/pitogo.jpg"
              alt="Pitogo High School"
              shape="tv"
              width={1920}
              height={1080}
            />
            <ImageCredits
              name="Pitogo High School"
              href="https://pitogohighschool.com/"
            />
          </div>
          <div className="highschool">
            <SectionHeading name="High School" />
            <Paragraph variant="wide">
              I continued learning in{" "}
              <span className="text-primary font-semibold">
                Pitogo High School
              </span>{" "}
              as an high school student. I experienced a lot of things that I
              didn&apos;t experience during my elementary days. New people,
              personalities, behaviours, attitudes and even environment. The
              overall experience shaped my overall self as well.
            </Paragraph>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/geanhs.jpg"
              alt="General Emilio Aguinal Natioinal High School"
              shape="tv"
              width={1920}
              height={1080}
            />
            <ImageCredits
              name="GEANHS"
              href="https://www.facebook.com/photo.php?fbid=10155496640846831&id=159346766830&set=a.10155496640916831"
            />
          </div>
          <div className="highschool">
            <SectionHeading name="High School" />
            <Paragraph variant="wide">
              I continued my high school years to another school and also
              graduated in{" "}
              <span className="text-primary font-semibold">
                General Emilio Aguinaldo National High School
              </span>
              . I can confidently say that this school years are probably my
              best school years. I have experienced a lot of things that I
              can&apos;t forget. Pure and genuine happiness, sadness,
              frustration and more. One of the years that has a huge influence
              in my character development.
            </Paragraph>
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/ucc.jpg"
              alt="Unida Christian Colleges"
              shape="tv"
              width={1920}
              height={1080}
            />
            <ImageCredits
              name="UCC Official"
              href="https://www.facebook.com/UnidaChristianCollegesOfficial"
            />
          </div>
          <div className="shs">
            <SectionHeading name="Senior High School" />
            <Paragraph variant="wide">
              An additional 2-year program was added to the Philippine education
              system. I have chosen TVL-ICT as my strand in the school of{" "}
              <span className="text-primary font-semibold">
                Unida Christian Colleges
              </span>
              . Though, I only experience a year in this school due to the
              pandemic, I still learned a lot of new things that made me a
              better person. I also have a lot of experience here that I
              won&apos;t ever forget that also shaped the person of who am I
              now.
            </Paragraph>
          </div>
        </div>

        {/* 5 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="/images/pages/about/cvsu.jpg"
              alt="Cavite State University - Bacoor Campus"
              shape="tv"
              width={1920}
              height={1080}
            />
            <ImageCredits name="CVSU" href="http://cvsu.edu.ph/bacoor/" />
          </div>
          <div className="college">
            <SectionHeading name="College" />
            <Paragraph variant="wide">
              Lastly, I finished my degree in Bachelor of Science in Information
              Technology in{" "}
              <span className="text-primary font-semibold">
                Cavite State University - Bacoor Campus
              </span>{" "}
              . The last stage of education that taught me the most lessons in
              life. The years that I have spent here greatly shaped my overall
              mindsent and personality about things around me, familiy, friends,
              relationship and especially myself.
            </Paragraph>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full h-full flex flex-col justify-center">
          <div>
            <SectionHeading name="Seeking My Next Opportunity!" />
            <Paragraph variant="wide">
              Now, my formal education has prepared me with the tools to tackle
              new challenges and obstacles personally and professionally.
              I&apos;m ready to learn new things that will improve me and my
              skills. I am actively looking for my next project or a team to
              join. If you have an exciting opportunity, want to discuss a
              project or just want to be friends with, I would love to hear from
              you.
            </Paragraph>
          </div>
          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "cta" })} ml-auto mt-10`}
          >
            Get in touch
          </Link>
        </div>
      </Grid>
    </Section>
  );
}
