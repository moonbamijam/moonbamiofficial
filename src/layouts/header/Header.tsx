"use client";

import { NavLinks } from "@/shared/constants/navLinks";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import { headerBrandList } from "@/shared/constants/header-brand-list";
import ThemeSwitchBtn from "@/features/themes/ThemeSwitchBtn";
import Dropdown from "./Dropdown";
import Anchor from "./Anchor";
import useHeader from "@/hooks/useHeader";
import RotatingBrand from "./RotatingBrand";

export default function Header() {
  const { isLinkActive, isMenuActive, dropdown, toggleMenu } = useHeader();

  return (
    <>
      <div className="w-full h-20 z-1000 fixed top-0 bg-surface/80 backdrop-blur shadow"></div>
      <header className="container h-20 w-full z-2000 fixed top-0 left-[50%] translate-x-[-50%] flex justify-between items-center lg:gap-5">
        <RotatingBrand texts={headerBrandList} />
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
          </Button>
          <Dropdown
            className={`top-20 translate-x-6 md:translate-x-0 ${isMenuActive ? "opacity-100 visible translate-y-2" : "opacity-0 invisible -translate-y-2"}`}
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
          <ThemeSwitchBtn />
        </nav>
      </header>
      <div
        className={`screen-dimmer ${
          isMenuActive ? "bg-black/80 dark:bg-black/70" : "invisible"
        } block lg:hidden backdrop-blur-sm w-full h-full fixed top-0 z-1010`}
      ></div>
    </>
  );
}
