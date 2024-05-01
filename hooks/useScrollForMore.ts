"use client";

import { useEffect, useState } from "react";

export default function useScrollForMore() {
  const [scrollSign, setScrollSign] = useState("opacity-100");

  const handleScrollSign = () => {
    if (window.scrollY < 500) return setScrollSign("opacity-100");
    else if (window.scrollY > 500) return setScrollSign("opacity-0");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollSign);
    return () => window.removeEventListener("scroll", handleScrollSign);
  }, []);
  return {
    scrollSign,
    setScrollSign,
    handleScrollSign,
  };
}
