"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "@frontend/shared/navLinks";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "@frontend/components/ui/Button";
import { headerWordList } from "@frontend/shared/header-word-list";
import ThemeSwitchBtn from "@frontend/components/buttons/ThemeSwitchBtn";
import Dropdown from "../../components/header/Dropdown";
import Anchor from "../../components/header/Anchor";
import useHeader from "@frontend/hooks/useHeader";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import RotatingBrand from "../../components/header/RotatingBrand";

export default function Header() {
  const { isLinkActive, isMenuActive, dropdown, toggleMenu } = useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="w-full h-[80px] z-[1000] fixed top-0 bg-surface/80 dark:bg-dm-surface-dark/90 backdrop-blur shadow"></div>
      <header className="container h-[80px] w-full z-[2000] fixed top-0 left-[50%] translate-x-[-50%] flex justify-between items-center lg:gap-5">
        <RotatingBrand texts={headerWordList} />
        <nav className="w-full flex justify-between lg:justify-end items-center gap-2">
          <ul role="nav-links-wrapper" className="hidden lg:flex font-semibold">
            {NavLinks.map(({ name, path }, id: number) => (
              <Anchor
                href={path}
                ariaLabel={name}
                key={id}
                isLinkActive={() => isLinkActive(path)}
                name={name}
              />
            ))}
          </ul>
          {mounted ? (
            <Button
              id="menu"
              ref={dropdown}
              onClick={toggleMenu}
              aria-label="menu"
              variant="toggle"
              size="icon"
              className={`lg:hidden [&>svg>path]:hover:text-white ${
                isMenuActive ? "bg-primary [&>svg>path]:text-white" : ""
              }`}
            >
              {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
              <Dropdown
                className={`top-[80px] translate-x-6 md:translate-x-0 ${isMenuActive ? "opacity-100 visible translate-y-2" : "opacity-0 invisible -translate-y-2"}`}
              >
                {NavLinks.map(({ name, path }, id: number) => (
                  <Anchor
                    href={path}
                    ariaLabel={name}
                    key={id}
                    isLinkActive={() => isLinkActive(path)}
                    name={name}
                  />
                ))}
              </Dropdown>
            </Button>
          ) : (
            <LoadingSpinner
              size="40px"
              fontSizes="text-xl xl:text-2xl"
              className="flex lg:hidden"
            />
          )}
          <ThemeSwitchBtn isMenuActive={isMenuActive} />
        </nav>
      </header>
      <div
        className={`screen-dimmer ${
          isMenuActive ? "bg-black/80 dark:bg-black/70" : "invisible"
        } block lg:hidden backdrop-blur-sm w-full h-full fixed top-0 z-[1010]`}
      ></div>
    </>
  );
}
