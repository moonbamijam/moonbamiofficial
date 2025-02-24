"use client";

import { useEffect, useState } from "react";

export default function useBackToTop() {
  const [backToTop, setBackToTop] = useState("hide");

  const handleScrollIntoView = (scrollInto: string) => {
    const profileSection = document.querySelector(scrollInto);
    if (profileSection) profileSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleBackToTop = () => {
      if (window.scrollY > 500) return setBackToTop("show");
      else if (window.scrollY < 15) return setBackToTop("hide");
    };
    window.addEventListener("scroll", handleBackToTop);
    return () => window.removeEventListener("scroll", handleBackToTop);
  }, []);
  return { backToTop, setBackToTop, handleScrollIntoView };
}
