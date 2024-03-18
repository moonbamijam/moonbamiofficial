"use client";

import { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

type Props = {
  id: string;
};

const handleScrollIntoView = (scrollInto: string) => {
  const profileSection = document.querySelector(scrollInto);
  if (profileSection) profileSection.scrollIntoView({ behavior: "smooth" });
};

const BackToTop = ({ id }: Props) => {
  const [backToTop, setBackToTop] = useState("opacity-0 invisible");

  const handleBackToTop = () => {
    if (window.scrollY > 500) return setBackToTop("opacity-100 visible");
    else if (window.scrollY < 15) return setBackToTop("opacity-0 invisible");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBackToTop);
    return () => window.removeEventListener("scroll", handleBackToTop);
  }, []);

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
};

export default BackToTop;
