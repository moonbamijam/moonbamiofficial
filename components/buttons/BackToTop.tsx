"use client";

import { useEffect, useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

type Props = {
  id?: string;
};

const BackToTop = ({ id }: Props) => {
  const [backToTop, setBackToTop] = useState("hide-back-to-top");

  const handleScrollIntoView = (scrollInto: string) => {
    const profileSection = document.querySelector(scrollInto);
    if (profileSection) profileSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackToTop = () => {
    if (window.scrollY > 500) return setBackToTop("show-back-to-top");
    else if (window.scrollY < 1) return setBackToTop("hide-back-to-top");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleBackToTop);
    return () => window.removeEventListener("scroll", handleBackToTop);
  }, []);
  return (
    <button
      aria-label="back-to-top"
      onClick={() => handleScrollIntoView(`${id}`)}
      className={`${backToTop} fixed text-4xl md:text-5xl z-[100] right-8 sm:right-12 sm:bottom-12 bottom-8 lg:right-24 lg:bottom-16 flex flex-col items-center gap-2 animate-bounce`}
    >
      <div className="rounded-full">
        <FiArrowUpCircle />
      </div>
      <h1 className=" text-black dark:text-white text-base hidden lg:block ">
        Back to Top
      </h1>
    </button>
  );
};

export default BackToTop;