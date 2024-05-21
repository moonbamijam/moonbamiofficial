import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: Url;
  ariaLabel: string;
  src: string | StaticImport;
  alt: string;
  className?: string;
};

export default function StackIcon({
  href,
  ariaLabel,
  src,
  alt,
  className,
}: Props) {
  return (
    <button
      aria-label={ariaLabel}
      className="relative flex items-center justify-center p-4 rounded-2xl hover:bg-surface dark:hover:bg-primary hover:shadow-primary-dark hover:shadow-lg hover:-translate-y-2 active:translate-y-1 active:shadow-none dark:active:bg-primary-dark"
    >
      <div
        className={`w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] ${className} absolute `}
      ></div>
      <Image
        src={src}
        alt={alt}
        width={70}
        height={70}
        className="relative w-[50px] md:w-[60px] lg:w-[70px]"
      />
    </button>
  );
}
