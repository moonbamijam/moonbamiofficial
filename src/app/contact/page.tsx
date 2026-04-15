import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/layouts/common/PageWrapper";
import Section from "@/layouts/common/Section";
import Footer from "@/layouts/footer/Footer";
import Grid from "@/layouts/common/Grid";
import ResumeButton from "@/components/buttons/ResumeButton";
import FacebookButton from "@/components/buttons/FacebookButton";
import GitHubButton from "@/components/buttons/GitHubButton";
import EmailButton from "@/components/buttons/EmailButton";
import InstagramButton from "@/components/buttons/InstagramButton";
import TwitterButton from "@/components/buttons/TwitterButton";
import SteamButton from "@/components/buttons/SteamButton";
import AniListButton from "@/components/buttons/AniListButton";
import YouTubeButton from "@/components/buttons/YouTubeButton";
import RedditButton from "@/components/buttons/RedditButton";
import { HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLHeadElement> & { title: string };

const Heading = ({ title }: HeadingProps) => {
  return (
    <SectionHeading
      className="text-2xl! sm:text-3xl! md:text-4xl mb-4"
      name={title}
    />
  );
};

const SocmedGridItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid className="w=max grid-cols-2 sm:grid-cols-3 gap-4">{children}</Grid>
  );
};

export default function ContactsPage() {
  return (
    <>
      <PageWrapper id="contact">
        <Section className="w-max mx-auto space-y-12">
          <div>
            <Heading title="Let's build from here!" />
            <SocmedGridItems>
              <GitHubButton />
              <EmailButton />
            </SocmedGridItems>
          </div>

          <div>
            <Heading title="Professional credentials" />
            <SocmedGridItems>
              <ResumeButton />
            </SocmedGridItems>
          </div>

          <div>
            <Heading title="Let's Connect & Play" />
            <SocmedGridItems>
              <FacebookButton />
              <InstagramButton />
              <TwitterButton />
              <SteamButton />
            </SocmedGridItems>
          </div>

          <div>
            <Heading title="Explore my passions" />
            <SocmedGridItems>
              <AniListButton />
              <YouTubeButton />
              <RedditButton />
            </SocmedGridItems>
          </div>
        </Section>
      </PageWrapper>
      <Footer />
    </>
  );
}
