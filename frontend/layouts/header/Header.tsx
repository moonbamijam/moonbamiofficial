"use client";

import { useEffect, useState } from "react";
import { NavLinks } from "@frontend/ts/constants/navLinks";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "@frontend/components/ui/Button";
import { socials } from "@frontend/ts/constants/socials";
import ThemeSwitchBtn from "@frontend/layouts/buttons/ThemeSwitchBtn";
import Dropdown from "./Dropdown";
import Anchor from "./Anchor";
import Version from "@frontend/components/Version";
import useHeader from "@frontend/hooks/useHeader";
import LoadingSpinner from "@frontend/components/LoadingSpinner";
import RotatingBrand from "./RotatingBrand";

export default function Header() {
  const { isLinkActive, isMenuActive, dropdown, toggleMenu } = useHeader();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="w-full h-[70px] z-[1000] fixed top-0 bg-surface dark:bg-dm-surface-dark shadow dark:shadow-transparent "></div>
      <header className="container h-[70px] w-full z-[2000] fixed top-0 left-[50%] translate-x-[-50%] flex justify-between items-center gap-5">
        <RotatingBrand texts={socials} />
        <nav className="w-full flex justify-between lg:justify-end items-center gap-2 ml-auto">
          <ul role="nav-links-wrapper" className="hidden lg:flex font-semibold">
            {NavLinks.map(({ id, name, path }) => (
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
              className={`flex lg:hidden justify-center items-center [&>svg>path]:hover:text-on-primary ${
                isMenuActive
                  ? "bg-primary dark:bg-primary-light [&>svg>path]:text-on-primary"
                  : ""
              }`}
            >
              {isMenuActive ? <FaBarsStaggered /> : <FaBars />}
              {isMenuActive && (
                <Dropdown position="top-[60px]">
                  {NavLinks.map(({ id, name, path }) => (
                    <Anchor
                      href={path}
                      ariaLabel={name}
                      key={id}
                      isLinkActive={() => isLinkActive(path)}
                      name={name}
                    />
                  ))}
                  <div className="flex flex-col gap-4 items-center px-4">
                    <hr className="w-full rounded-full" />
                    <Version />
                  </div>
                </Dropdown>
              )}
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
