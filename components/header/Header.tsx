"use client";

import { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import tsukiwaLogoLight from "@assets/tsukiwa-logo.png";
import tsukiwaLogoDark from "@assets/tsukiwa-logo-dark.png";
import ThemeSwitchBtn from "@components/buttons/ThemeSwitchBtn";
import Dropdown from "../ui/Dropdown";
import Anchor from "./Anchor";
import Version from "@components/ui/Version";

const NavLinks = [
  { id: 1, name: "moonbami", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "timeline", path: "/timeline" },
  { id: 5, name: "more", path: "/more" },
];

export default function Header() {
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

  return (
    <>
      <div
        className={`${scrollHeaderBg} w-full h-[60px] z-[1000] fixed top-0`}
      ></div>
      <header
        ref={dropdown}
        className="container h-[60px] w-full z-[1000] fixed top-0 left-[50%] translate-x-[-50%] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] flex justify-between items-center"
      >
        <Link href="/" id="brand" className="flex items-center gap-4">
          <div aria-label="tsukiwa-logo" className="rounded-full p-1 w-[40px] ">
            <Image
              className="hidden dark:block"
              priority
              loading="eager"
              src={tsukiwaLogoLight}
              alt="tsukiwa logo"
              width={40}
              height={40}
            />
            <Image
              className="block dark:hidden"
              priority
              loading="eager"
              src={tsukiwaLogoDark}
              alt="tsukiwa logo"
              width={40}
              height={40}
            />
          </div>
          <h1
            aria-label="moonbami"
            className="relative hidden lg:block font-bold text-sm xl:text-base"
          >
            Moonbami
          </h1>
        </Link>
        <nav className="flex items-center gap-2">
          <button
            aria-label="menu"
            onClick={toggleMenu}
            id="menu"
            className={`w-[40px] h-[40px] flex justify-center items-center text-xl rounded-full hover:shadow-md hover:shadow-gray-500 dark:hover:bg-highlight ${
              isMenuActive &&
              "bg-white dark:bg-highlight shadow-md shadow-gray-500"
            }`}
          >
            {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
            {isMenuActive && (
              <Dropdown>
                {NavLinks.map((link) => (
                  <Anchor
                    href={link.path}
                    ariaLabel={link.name}
                    key={link.id}
                    className={isLinkActive(link.path) ? "active" : ""}
                    name={link.name}
                  />
                ))}
                <div className="flex flex-col gap-4 items-center px-4 mt-4">
                  <hr className="w-full" />
                  <Version />
                </div>
              </Dropdown>
            )}
          </button>
          <ThemeSwitchBtn />
        </nav>
      </header>
      {isMenuActive && (
        <div className="screen-dim w-full h-full fixed z-[90] bg-primary opacity-80 dark:opacity-70"></div>
      )}
    </>
  );
}
