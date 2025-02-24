"use client";

import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLinks } from "@frontend/ts/constants/navLinks";
import Anchor from "@frontend/layouts/header/Anchor";
import Dropdown from "@frontend/components/Dropdown";
import Version from "@frontend/components/Version";
import useHeader from "@frontend/hooks/useHeader";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import { Button } from "@frontend/components/ui/Button";

export default function NavMenuBtn() {
  const { isLinkActive, isMenuActive, toggleMenu, dropdown } = useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <Button
          id="nav-menu-btn"
          ref={dropdown}
          onClick={toggleMenu}
          aria-label="nav-menu-btn"
          className={`lg:hidden fixed left-8 bottom-8 sm:left-12 sm:bottom-12 lg:left-24 lg:bottom-16 w-[50px] h-[50px] text-xl z-[100] flex justify-center items-center rounded-full bg-primary [&>svg>path]:text-on-primary shadow-md active:scale-75`}
        >
          {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
          {isMenuActive && (
            <Dropdown position="bottom-[80px] left-[4px]">
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
        <div className="fixed lg:hidden left-8 bottom-8 sm:left-12 sm:bottom-12 lg:left-24 lg:bottom-16 w-[50px] h-[50px] text-xl z-[100] flex justify-center items-center rounded-full">
          <LoadingSpinner size="40px" fontSizes="text-xl xl:text-2xl" />
        </div>
      )}
      <div
        className={`screen-dimmer ${
          isMenuActive ? "bg-black/80 dark:bg-black/70" : "invisible"
        } lg:hidden w-full h-full fixed top-0 z-[90]`}
      ></div>
    </>
  );
}
