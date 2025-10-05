import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Button, buttonVariants } from "@frontend/components/ui/Button";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Grid from "@frontend/layouts/common/Grid";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";

export default function AboutEducation() {
  return (
    <Section>
      <Grid className="grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-x-6 2xl:gap-x-12 2xl:gap-y-16">
        {/* 1 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="https://i.ibb.co/fGqDdPpt/old.webp"
              alt="Morrisonridge Academy"
              shape="tv"
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
              src="https://educateandexplore.weebly.com/uploads/8/0/8/4/80848288/4016616_orig.jpg"
              alt="Pitogo High School"
              shape="tv"
            />
            <ImageCredits
              name="Erin Travel Blog"
              href="https://educateandexplore.weebly.com/blog/category/manila"
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
              didn't experience during my elementary days. New people,
              personalities, behaviours, attitudes and even environment. The
              overall experience shaped my overall self as well.
            </Paragraph>
          </div>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="https://lh3.googleusercontent.com/proxy/uMz5qSkpp35v_0EhQ3DAJAw4E4vAtLuZlaQJdzc_WGll6QIbUVFMyaqm73--6WVnUwhf00D7oyUNRQZdaIXTTpQ6Ujb9v4YFF-4QO-DxER8taY2UPRY1wijKopwhyayAywxLB4Qm5MVvzDR_aovH95jMsfN9TssFAiJe8J3QpucE=w1080-k-no"
              alt="General Emilio Aguinal Natioinal High School"
              shape="tv"
            />
            <ImageCredits
              name="World Orgs"
              href="https://pilipinas.worldorgs.com/Katalogo/imus/kindergarten/general-emilio-aguinaldo-national-high-school"
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
              best school years. I have experienced a lot of things that I can't
              forget. Pure and genuine happiness, sadness, frustration and more.
              One of the years that has a huge influence in my character
              development.
            </Paragraph>
          </div>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="https://www.felta.ph/50th/wp-content/uploads/2021/06/news-unida-6.jpg"
              alt="Unida Christian Colleges"
              shape="tv"
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
              better person. I also have a lot of experience here that I won't
              ever forget that also shaped the person of who am I now.
            </Paragraph>
          </div>
        </div>

        {/* 5 */}
        <div className="flex flex-col gap-4">
          <div className="w-full flex flex-col items-end">
            <Image
              src="https://cvsu.edu.ph/wp-content/uploads/2022/08/Bacoor-Campus-scaled.jpg"
              alt="Cavite State University - Bacoor Campus"
              shape="tv"
            />
            <ImageCredits name="CVSU" href="http://cvsu.edu.ph/bacoor/" />
          </div>
          <div className="college">
            <SectionHeading name="College" />
            <Paragraph variant="wide">
              Lastly, I get a degree in Bachelor of Science in Information
              Technology in{" "}
              <span className="text-primary font-semibold">
                Cavite State University - Bacoor Campus
              </span>{" "}
              and currently finishing my degree. The last stage of education
              that taught me the most lessons in life. The years that I have
              spent here greatly shaped my overall mindsent and personality
              about things around me, familiy, friends, relationship and
              especially myself.
            </Paragraph>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full h-full flex flex-col justify-center">
          <div>
            <SectionHeading name="Seeking My Next Opportunity!" />
            <Paragraph variant="wide">
              Now, my formal education has prepared me with the tools to tackle
              new challenges and obstacles personally and professionally. I'm
              ready to learn new things that will improve me and my skills. I am
              actively looking for my next project or a team to join. If you
              have an exciting opportunity, want to discuss a project or just
              want to be friends with, I would love to hear from you.
            </Paragraph>
          </div>
          <Link
            href="/contact"
            className={`${buttonVariants({ variant: "default" })} ml-auto mt-10`}
          >
            Get in touch
          </Link>
        </div>
      </Grid>
    </Section>
  );
}
