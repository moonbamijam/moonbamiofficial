import ImageCredits from "@frontend/components/ImageCredits";
import SectionHeading from "@frontend/components/SectionHeading";
import { Button, buttonVariants } from "@frontend/components/ui/Button";
import { Image } from "@frontend/components/ui/Image";
import { Paragraph } from "@frontend/components/ui/Paragraph";
import Section from "@frontend/layouts/common/Section";
import Link from "@node_modules/next/link";

export default function AboutEducation() {
  return (
    <Section className="grid grid-cols-1 xl:grid-cols-2">
      {/* 1 */}
      <div className="flex flex-col gap-x-4 lg:gap-x-6">
        <div className="w-full flex flex-col items-end">
          <Image
            src="https://scontent.fmnl35-1.fna.fbcdn.net/v/t39.30808-6/464427780_8579299988774562_9025406764959811706_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEi8IVRA2xUFGr_yxure4uD19XEyovTz7vX1cTKi9PPu0BM5wmKBt2SPopIW-fMuV6_2ofr5rMR1d5AOXuLl1Ja&_nc_ohc=sKv84bJ3JkAQ7kNvwEnAnq-&_nc_oc=AdlBVN57T2czLSAHUww25Mtr126ZC1VQVN-Zl41HVMaSiwDs_-mkGxteHVWPx6xBtlY&_nc_zt=23&_nc_ht=scontent.fmnl35-1.fna&_nc_gid=ywPNhaK_u-khyhOrlqeCXA&oh=00_AfZEr7eVKUlXzGLGQ2W8aL6sTzNnzsjxPuE4Rork10DhCg&oe=68C8D2C6"
            alt="Morrisonridge Academy"
            shape="tv"
          />
          <ImageCredits
            name="Morrisonridge Academy"
            href="https://www.facebook.com/profile.php?id=100063804887904"
          />
        </div>
        <div className="gradeschool">
          <SectionHeading name="grade school" />
          <Paragraph>
            I started my education at{" "}
            <span className="text-primary font-semibold">
              Morrisonridge Academy
            </span>{" "}
            as an elementary student. I was a curious child who loved to explore
            and learn new things. My time there laid the foundation for my
            future studies.
          </Paragraph>
        </div>
      </div>

      {/* 2 */}
      <div className="flex flex-col gap-x-4 lg:gap-x-6">
        <div className="w-full flex flex-col items-end">
          <Image
            src="https://scontent.fmnl35-1.fna.fbcdn.net/v/t1.6435-9/99408492_108819167510149_7874161614763589632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c_K7qX-mIisQ7kNvwEBdss_&_nc_oc=AdlXbW2Bp8fMqmDWaUhE2AOdYK07WIYtpIUbrpKVDzdSFjeyjf9SoF7K0kH2DVIikNA&_nc_zt=23&_nc_ht=scontent.fmnl35-1.fna&_nc_gid=h2u99VdOFvCp2nsWzNbbBQ&oh=00_AfUrwW2qktk2M-65wuLFzYgMdcgCfU73UCXDniF4SjPvjA&oe=68CAA588"
            alt="Pitogo High School"
            shape="tv"
          />
          <ImageCredits
            name="Pitogo High School Official"
            href="https://www.facebook.com/photo.php?fbid=108819164176816&id=108476324211100&set=a.108819197510146"
          />
        </div>
        <div className="highschool">
          <SectionHeading name="High School" />
          <Paragraph>
            I continued learning in{" "}
            <span className="text-primary font-semibold">
              Pitogo High School
            </span>{" "}
            as an high school student. I experienced a lot of things that I
            didn't experience during my elementary days.
          </Paragraph>
        </div>
      </div>

      {/* 3 */}
      <div className="flex flex-col gap-x-4 lg:gap-x-6">
        <div className="w-full flex flex-col items-end">
          <Image
            src="https://scontent.fmnl35-1.fna.fbcdn.net/v/t1.6435-9/41671976_10155496640856831_4862644161578270720_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GylEKTEvIYUQ7kNvwEUPRhw&_nc_oc=Adl0dYrfiwZbiub1M2gqKve6f3z2vPIGzR-nX97h8Kz5ZQdB24JYuC22GqaiHkkAzoQ&_nc_zt=23&_nc_ht=scontent.fmnl35-1.fna&_nc_gid=Z8YNrvtuMZ0urRqHrYLjYw&oh=00_AfU-t769Lw02kbivSUkKgcqXca6G6ttrcDg4E_YFcj4zxQ&oe=68CAA29E"
            alt="General Emilio Aguinal Natioinal High School"
            shape="tv"
          />
          <ImageCredits
            name="GEANHS"
            href="https://www.facebook.com/people/GEANHSGen-Emilio-Aguinaldo-National-High-School-Main/100064529958278/"
          />
        </div>
        <div className="highschool">
          <SectionHeading name="High School" />
          <Paragraph>
            I continued my high school years to another school and also
            graduated in{" "}
            <span className="text-primary font-semibold">
              General Emilio Aguinaldo National High School
            </span>
            . I can confidently say that this school years are probably my best
            school years. I have experienced a lot of things that I can't
            forget.
          </Paragraph>
        </div>
      </div>

      {/* 4 */}
      <div className="flex flex-col gap-x-4 lg:gap-x-6">
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
          <Paragraph>
            An additioanl 2-year program was added to the Philippine education
            system. I chose TVL-ICT as my strand in the school of{" "}
            <span className="text-primary font-semibold">
              Unida Christian Colleges
            </span>
            . Though, I only experience a year in this school due to the
            pandemic, I still learned a lot of new things that made me a better
            person.
          </Paragraph>
        </div>
      </div>

      {/* 5 */}
      <div className="flex flex-col gap-x-4 lg:gap-x-6">
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
          <Paragraph>
            I get a degree in Bachelor of Science in Information Technology in{" "}
            <span className="text-primary font-semibold">
              Cavite State University - Bacoor Campus
            </span>{" "}
            and currently finishing my degree.
          </Paragraph>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full h-full flex flex-col justify-evenly my-auto">
        <div>
          <SectionHeading name="Seeking My Next Opportunity!" />
          <Paragraph>
            My formal education has prepared me with the tools to tackle new
            challenges, and now I'm ready to learn in a professional
            environment. I am actively looking for my next project or team to
            join. If you have an exciting opportunity or just want to discuss a
            project, I would love to hear from you.
          </Paragraph>
        </div>
        <Link
          href="/contact"
          className={`${buttonVariants({ variant: "default" })} ml-auto`}
        >
          Get in touch
        </Link>
      </div>
    </Section>
  );
}
