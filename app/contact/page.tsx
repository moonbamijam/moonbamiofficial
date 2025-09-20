import SectionHeading from "@frontend/components/SectionHeading";
import { buttonVariants } from "@frontend/components/ui/Button";
import PageWrapper from "@frontend/layouts/common/PageWrapper";
import Section from "@frontend/layouts/common/Section";
import Footer from "@frontend/layouts/footer/Footer";
import Link from "@node_modules/next/link";

import { SiAnilist, SiGmail } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube,
  FaRedditAlien,
  FaDownload,
  FaSteam,
} from "react-icons/fa6";
import Grid from "@frontend/layouts/common/Grid";

export default function ContactsPage() {
  return (
    <>
      <PageWrapper id="contact">
        <Section className="w-max mx-auto space-y-12">
          {/* collaboration */}
          <div>
            <SectionHeading
              className="!text-3xl sm:!text-4xl"
              name="Let's build from here!"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                href="https://github.com/moonbamijam"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-github text-white  hover:scale-110`}
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:Jam Moonbami <moonbamijamofficial15@gmail.com>"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-primary text-white  hover:scale-110`}
              >
                <SiGmail />
              </Link>
            </Grid>
          </div>

          {/* professional */}
          <div>
            <SectionHeading
              className="!text-3xl md:!text-4xl"
              name="Professional credentials"
            />
            <Grid className="w-max grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="https://drive.google.com/file/d/1CZlNfJm_M-_OGxNFEteoEfe-g-Q19FoJ/view"
                download
                target="_blank"
                className={`${buttonVariants({ variant: "ghost" })} hover:scale-110`}
              >
                <FaDownload /> Resumé
              </Link>
            </Grid>
          </div>

          {/* socials */}
          <div>
            <SectionHeading
              className="!text-3xl sm:!text-4xl"
              name="Let's Connect & Play"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                href="https://www.facebook.com/moonbamijam"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-[#1877F2] text-white  hover:scale-110`}
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/moonbamijam/"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-instagram-gradient text-white  hover:scale-110`}
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://twitter.com/moonbamijam"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-black text-white  hover:scale-110`}
              >
                <FaXTwitter />
              </Link>

              <Link
                href="https://steamcommunity.com/id/moonbamiofficial/"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-[#2a475e] text-white  hover:scale-110`}
              >
                <FaSteam />
              </Link>
            </Grid>
          </div>

          {/* other ways to find */}
          <div>
            <SectionHeading
              className="!text-3xl sm:!text-4xl"
              name="Explore my passions"
            />
            <Grid className="w-max grid-cols-2 sm:grid-cols-3 gap-4">
              <Link
                href="https://anilist.co/user/Moonbami/"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-[#00abff] text-white  hover:scale-110`}
              >
                <SiAnilist />
              </Link>
              <Link
                href="https://www.youtube.com/@Moonbami/"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-[#FF0000] text-white  hover:scale-110`}
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.reddit.com/user/MoonbamiOfficial/"
                target="_blank"
                className={`${buttonVariants({ variant: "icon" })} bg-[#FF4500] text-white  hover:scale-110`}
              >
                <FaRedditAlien />
              </Link>
            </Grid>
          </div>
        </Section>
      </PageWrapper>
      <Footer />
    </>
  );
}
