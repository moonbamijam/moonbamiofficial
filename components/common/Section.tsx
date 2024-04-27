import { ReactNode } from "react";

type Props = {
  id: string;
  image?: React.ReactNode;
  children: React.ReactNode;
  sectionClassName?: string;
  contentClassName?: string;
};

export default function Section(props: Props) {
  return (
    <section
      id={props.id}
      className={`container w-full relative py-[100px] ${props.sectionClassName}`}
    >
      {props.image}
      <div
        className={`content relative flex flex-col items-center px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] ${props.contentClassName}`}
      >
        {props.children}
      </div>
    </section>
  );
}
