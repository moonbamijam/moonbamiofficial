import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useHeader() {
  const pathName = usePathname();
  const isLinkActive = (path: any) => path === pathName;

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrollHeaderBg, setScrollHeaderBg] = useState("");

  const handleScrollHeaderBg = () => {
    if (window.scrollY < 15) return setScrollHeaderBg("");
    else if (window.scrollY > 15)
      return setScrollHeaderBg("scrolled-header-bg");
  };

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  const dropdown = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleDropdowns = ({ target }: Event) => {
      if (!dropdown.current?.contains(target as Node)) setIsMenuActive(false);
    };
    document.addEventListener("mousedown", handleDropdowns);
    document.addEventListener("scroll", handleScrollHeaderBg);
    return () => {
      document.removeEventListener("mousedown", handleDropdowns);
      document.removeEventListener("scroll", handleScrollHeaderBg);
    };
  }, []);
  return {
    isLinkActive,
    isMenuActive,
    setIsMenuActive,
    scrollHeaderBg,
    setScrollHeaderBg,
    handleScrollHeaderBg,
    toggleMenu,
    dropdown,
  };
}
