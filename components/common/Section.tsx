import { ReactNode } from "react";

type Props = {
  children: React.ReactNode;
  id: string;
  image?: React.ReactNode;
  sectionStyles?: string;
  contentStyles?: string;
};

export default function Section({
  children,
  id,
  image,
  sectionStyles,
  contentStyles,
}: Props) {
  return (
    <section
      id={id}
      className={`container w-full relative py-[100px] ${sectionStyles}`}
    >
      {image}
      <div
        className={`content relative flex flex-col items-center gap-[64px] px-[2vw] ${contentStyles}`}
      >
        {children}
      </div>
    </section>
  );
}
