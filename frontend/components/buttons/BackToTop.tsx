"use client";

import { Button } from "@frontend/components/ui/Button";
import useBackToTop from "@frontend/hooks/useBackToTop";
import { BiSolidUpArrow } from "react-icons/bi";

type Props = {
  id: string;
};

export default function BackToTop({ id }: Props) {
  const { backToTop, handleScrollIntoView } = useBackToTop();

  return (
    <Button
      id="back-to-top-button"
      onClick={() => handleScrollIntoView(`${id}`)}
      aria-label="back-to-top"
      variant="icon"
      size="max"
      className={`fixed right-8 bottom-8 sm:right-12 sm:bottom-12 lg:right-24 lg:bottom-16 p-3 text-2xl md:text-3xl z-[100] [&>svg>path]:text-on-primary bg-primary hover:bg-primary-dark hover:border-primary-dark shadow-md animate-bounce active:scale-75 ${backToTop}`}
    >
      <BiSolidUpArrow />
    </Button>
  );
}
