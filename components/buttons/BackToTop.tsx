"use client";

import useBackToTop from "@hooks/useBackToTop";
import { BiSolidUpArrow } from "react-icons/bi";

type Props = {
  id: string;
};

export default function BackToTop({ id }: Props) {
  const { backToTop, handleScrollIntoView } = useBackToTop();

  return (
    <button
      aria-label="back-to-top"
      onClick={() => handleScrollIntoView(`${id}`)}
      className={`${backToTop} fixed text-4xl md:text-5xl z-[100] right-8 sm:right-12 sm:bottom-12 bottom-6 lg:right-24 lg:bottom-16 flex flex-col items-center gap-2 animate-bounce`}
    >
      <div className="rounded-full">
        <BiSolidUpArrow />
      </div>
      <h1 className=" text-black dark:text-white text-base hidden lg:block ">
        Back to Top
      </h1>
    </button>
  );
}
