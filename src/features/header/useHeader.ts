import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function useHeader() {
  const pathName = usePathname();
  const isLinkActive = (path: string) => path === pathName;

  const [isDashboardActive, setIsDashboardActive] = useState(false);

  const toggleMenu = () => setIsDashboardActive(!isDashboardActive);

  const HeaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleDashboard = ({ target }: MouseEvent) => {
      if (!HeaderRef.current?.contains(target as Node))
        setIsDashboardActive(false);
    };
    document.addEventListener("mousedown", handleDashboard);
    return () => {
      document.removeEventListener("mousedown", handleDashboard);
    };
  }, []);
  return {
    isLinkActive,
    isDashboardActive,
    setIsDashboardActive,
    toggleMenu,
    HeaderRef,
  };
}
