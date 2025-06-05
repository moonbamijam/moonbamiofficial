import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useHeader() {
  const pathName = usePathname();
  const isLinkActive = (path: string) => path === pathName;

  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  const dropdown = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleDropdowns = ({ target }: Event) => {
      if (!dropdown.current?.contains(target as Node)) setIsMenuActive(false);
    };
    document.addEventListener("mousedown", handleDropdowns);
    return () => {
      document.removeEventListener("mousedown", handleDropdowns);
    };
  }, []);
  return {
    isLinkActive,
    isMenuActive,
    setIsMenuActive,
    toggleMenu,
    dropdown,
  };
}
