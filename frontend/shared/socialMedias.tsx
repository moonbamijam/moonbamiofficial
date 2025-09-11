import { SiAnilist } from "react-icons/si";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaRedditAlien,
  FaYoutube,
} from "react-icons/fa6";

export interface socialMediaProps {
  href: string;
  text: string;
  icon: JSX.Element;
}

export const socialMedias: socialMediaProps[] = [
  {
    href: "https://anilist.co/user/Moonbami/",
    text: "AniList",
    icon: <SiAnilist />,
  },
  {
    href: "https://www.facebook.com/moonbamijam",
    text: "Facebook",
    icon: <FaFacebook />,
  },
  {
    href: "https://www.instagram.com/moonbamijam/",
    text: "Instagram",
    icon: <FaInstagram />,
  },
  {
    href: "https://github.com/moonbamijam",
    text: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://twitter.com/moonbamijam",
    text: "Twitter X",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.reddit.com/user/MoonbamiOfficial/",
    text: "Reddit",
    icon: <FaRedditAlien />,
  },
  {
    href: "https://www.youtube.com/@Moonbami",
    text: "YouTube",
    icon: <FaYoutube />,
  },
];
