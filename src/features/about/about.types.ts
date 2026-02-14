import { AnchorHTMLAttributes } from "react";

export interface ImageCreditsProps extends AnchorHTMLAttributes<
  HTMLDivElement | HTMLAnchorElement
> {
  phrase?: string;
  name: string;
  year?: number;
}

export type carouselType = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credits: ImageCreditsProps;
};
