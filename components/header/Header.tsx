"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import Moonbami_Logo from "@public/tsukiwa-logo.webp";

import ThemeSwitchBtn from "@components/ThemeSwitchBtn";
import Dropdown from "../ui/Dropdown";
import Anchor from "./Anchor";

// Fontawesome
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "timeline", path: "/timeline" },
  { id: 5, name: "more", path: "/more" },
];

const Header = () => {
  const pathName = usePathname();
  const isLinkActive = (path: any) => path === pathName;

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

  return (
    <>
      <div className="header-bg bg-white dark:bg-primary shadow shadow-gray-200 dark:shadow-transparent w-full h-[60px] z-[100] fixed top-0"></div>
      <header
        ref={dropdown}
        className="container h-[60px] w-full z-[100] fixed top-0 left-[50%] translate-x-[-50%] px-[30px] md:px-[50px] xl:px-[100px] 2xl:px-[200px] flex justify-between items-center"
      >
        <Link href="/" id="brand" className="flex items-center gap-4 ">
          <div
            aria-label="tsukiwa-logo"
            className="rounded-full p-1 bg-black dark:bg-transparent w-[40px] "
          >
            <Image
              priority
              src={Moonbami_Logo}
              alt=""
              width={"40"}
              height={"40"}
            />
          </div>
          <h1
            aria-label="moonbami"
            className="switch-text-color hidden lg:block font-bold text-sm xl:text-base"
          >
            Moonbami
          </h1>
        </Link>
        <nav className="flex items-center gap-2">
          <button
            aria-label="menu"
            onClick={toggleMenu}
            id="menu"
            className={` w-[40px] h-[40px] flex justify-center items-center text-xl rounded-full hover:bg-azure dark:hover:bg-azure ${
              isMenuActive ? "bg-azure" : "dark:bg-transparent"
            } ${isMenuActive ? "bg-azure" : "bg-primary"} `}
          >
            {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
            {isMenuActive && (
              <Dropdown>
                {NavLinks.map((link) => (
                  <Anchor
                    href={link.path}
                    className={isLinkActive(link.path) ? "active" : ""}
                    name={link.name}
                  />
                ))}
              </Dropdown>
            )}
          </button>
          <ThemeSwitchBtn />
        </nav>
      </header>
      {isMenuActive && (
        <div className="screen-dim w-screen h-screen fixed z-[99] bg-primary opacity-80 dark:opacity-70"></div>
      )}
    </>
  );
};

export default Header;
