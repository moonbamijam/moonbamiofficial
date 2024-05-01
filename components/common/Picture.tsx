"use client";

import { CldImage } from "next-cloudinary";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  src: string | Url;
  alt: string;
  isPriority?: boolean;
  className?: string;
};

export default function Picture({ src, alt, isPriority, className }: Props) {
  return (
    <CldImage
      priority={isPriority}
      src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1710343815/portfolio/${src}`}
      fill
      sizes="(min-width: 475px) 100vw, (min-width: 768px) 1080px, (min-width: 1024px) 1920px"
      alt={`${alt}`}
      className={`object-cover ${className}`}
    />
  );
}
