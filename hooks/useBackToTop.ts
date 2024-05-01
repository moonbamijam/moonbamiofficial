"use client";

import { useEffect, useState } from "react";

export default function useBackToTop() {
  const [backToTop, setBackToTop] = useState("opacity-0 invisible");

  const handleScrollIntoView = (scrollInto: string) => {
    const profileSection = document.querySelector(scrollInto);
    if (profileSection) profileSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleBackToTop = () => {
      if (window.scrollY > 500) return setBackToTop("opacity-100 visible");
      else if (window.scrollY < 15) return setBackToTop("opacity-0 invisible");
    };
    window.addEventListener("scroll", handleBackToTop);
    return () => window.removeEventListener("scroll", handleBackToTop);
  }, []);
  return { backToTop, setBackToTop, handleScrollIntoView };
}
