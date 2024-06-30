"use client";

import Button from "@components/ui/Button";
import useBackToTop from "@hooks/useBackToTop";
import { BiSolidUpArrow } from "react-icons/bi";

type Props = {
  id: string;
};

export default function BackToTop({ id }: Props) {
  const { backToTop, handleScrollIntoView } = useBackToTop();

  return (
    <Button
      buttonType="button"
      id="back-to-top-button"
      onClick={() => handleScrollIntoView(`${id}`)}
      icon={<BiSolidUpArrow />}
      ariaLabel="back-to-top"
      className={`fixed right-8 bottom-8 sm:right-12 sm:bottom-12 lg:right-24 lg:bottom-16 w-[50px] h-[50px] text-2xl md:text-3xl z-[100] flex justify-center items-center rounded-full bg-primary [&>svg>path]:text-on-primary shadow-md animate-bounce active:scale-75 ${backToTop}`}
    />
  );
}
