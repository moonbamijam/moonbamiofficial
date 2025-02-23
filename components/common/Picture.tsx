"use client";

import Image from "@node_modules/next/image";

type Props = {
  src: string;
  alt: string;
  isPriority?: boolean;
  className?: string;
};

export default function Picture({ src, alt, isPriority, className }: Props) {
  return (
    <Image
      priority={isPriority}
      src={src}
      fill
      sizes="(min-width: 475px) 100vw, (min-width: 768px) 1080px, (min-width: 1024px) 1920px"
      alt={`${alt}`}
      className={`object-cover ${className}`}
    />
  );
}
