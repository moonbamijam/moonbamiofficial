import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

type Props = {
  href: Url;
  src: StaticImport;
  text?: string;
};

const SocMed = ({ href, src, text }: Props) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Image
        src={src}
        alt="Social media logo"
        width={100}
        height={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-[50px]"
      />
      <p className="switch-text-color font-bold text-xl capitalize">{text} </p>
    </Link>
  );
};

export default SocMed;
