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
        className={`content relative flex flex-col items-center px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] ${contentStyles}`}
      >
        {children}
      </div>
    </section>
  );
}
