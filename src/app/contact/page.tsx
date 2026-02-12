import SectionHeading from "@/components/SectionHeading";
import PageWrapper from "@/layouts/common/PageWrapper";
import Section from "@/layouts/common/Section";
import Footer from "@/layouts/footer/Footer";
import Grid from "@/layouts/common/Grid";
import ResumeBtn from "@/components/buttons/ResumeBtn";
import FacebookButton from "@/components/buttons/FacebookButton";
import GitHubBtn from "@/components/buttons/GitHubBtn";
import EmailBtn from "@/components/buttons/EmailBtn";
import InstagramButton from "@/components/buttons/InstagramButton";
import TwitterButton from "@/components/buttons/TwitterButton";
import SteamButton from "@/components/buttons/SteamButton";
import AniListButton from "@/components/buttons/AniListButton";
import YouTubeButton from "@/components/buttons/YouTubeButton";
import RedditButton from "@/components/buttons/RedditButton";

export default function ContactsPage() {
  return (
    <>
      <PageWrapper id="contact">
        <Section className="w-max mx-auto space-y-12">
          {/* collaboration */}
          <div>
            <SectionHeading
              className="text-3xl! sm:text-4xl!"
              name="Let's build from here!"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <GitHubBtn />
              <EmailBtn />
            </Grid>
          </div>

          {/* professional */}
          <div>
            <SectionHeading
              className="text-3xl! md:text-4xl!"
              name="Professional credentials"
            />
            <Grid className="w-max grid-cols-1 sm:grid-cols-2 gap-4">
              <ResumeBtn />
            </Grid>
          </div>

          {/* socials */}
          <div>
            <SectionHeading
              className="text-3xl! sm:text-4xl!"
              name="Let's Connect & Play"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <FacebookButton />
              <InstagramButton />
              <TwitterButton />
              <SteamButton />
            </Grid>
          </div>

          {/* other ways to find */}
          <div>
            <SectionHeading
              className="text-3xl! sm:text-4xl!"
              name="Explore my passions"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <AniListButton />
              <YouTubeButton />
              <RedditButton />
            </Grid>
          </div>
        </Section>
      </PageWrapper>
      <Footer />
    </>
  );
}
