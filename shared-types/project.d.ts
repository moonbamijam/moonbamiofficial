import { Url } from "next/dist/shared/lib/router/router";

export type ProjectType = {
  _id: string;
  href: Url;
  ariaLabel: string;
  src: Url;
  alt?: string;
  title: string;
  desc: string;
  website: Url;
  github: Url;
};
