"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "@frontend/ts/constants/navLinks";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import tsukiwaLogoLight from "@assets/tsukiwa-logo.png";
import tsukiwaLogoDark from "@assets/tsukiwa-logo-dark.png";
import ThemeSwitchBtn from "@frontend/layouts/buttons/ThemeSwitchBtn";
import Dropdown from "../../components/Dropdown";
import Anchor from "./Anchor";
import Version from "@frontend/components/Version";
import useHeader from "@frontend/hooks/useHeader";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { Button } from "@frontend/components/ui/Button";

export default function Header() {
  const { isLinkActive, isMenuActive, scrollHeaderBg, toggleMenu, dropdown } =
    useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={`w-full h-[60px] z-[1000] fixed top-0 ${scrollHeaderBg}`}
      ></div>
      <header className="container h-[60px] w-full z-[1000] fixed top-0 left-[50%] translate-x-[-50%] px-[8vw] flex justify-between items-center">
        <Link
          href="/"
          id="brand"
          className="flex items-center gap-4 [&>h1]:hover:text-primary dark:[&>h1]:hover:text-primary-light"
        >
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
            className="relative hidden lg:block font-bold text-sm xl:text-base "
          >
            Moonbami
          </h1>
        </Link>
        <nav className="flex items-center gap-2">
          {mounted ? (
            <Button
              id="menu"
              ref={dropdown}
              onClick={toggleMenu}
              aria-label="menu"
              variant="toggle"
              size="icon"
              className={`hidden lg:flex [&>svg>path]:hover:text-on-primary ${
                isMenuActive &&
                "bg-primary dark:bg-primary-light [&>svg>path]:text-on-primary"
              }`}
            >
              {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
              {isMenuActive && (
                <Dropdown position="top-[60px]">
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
            </Button>
          ) : (
            <LoadingSpinner
              size="40px"
              fontSizes="text-xl xl:text-2xl"
              className="hidden lg:flex"
            />
          )}
          <ThemeSwitchBtn />
        </nav>
      </header>
      <div
        className={`screen-dimmer ${
          isMenuActive ? "bg-black/80 dark:bg-black/70" : "invisible"
        } hidden lg:block w-full h-full fixed top-0 z-[90]`}
      ></div>
    </>
  );
}
