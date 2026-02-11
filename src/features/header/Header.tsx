"use client";

import { headerLinks } from "@/features/header/HeaderLinks";
import { headerBrandList } from "@/shared/constants/header-brand-list";
import ThemeSwitchBtn from "@/features/themes/ThemeSwitchBtn";
import { HeaderSideBar } from "./HeaderSideBar";
import HeaderAnchor from "./HeaderAnchor";
import useHeader from "@/features/header/useHeader";
import HeaderLoopingBrand from "./HeaderLoopingBrand";
import { HeaderMenuBtn } from "./HeaderMenuBtn";
import HeaderSideBarAnchor from "./HeaderSideBarAnchor";

export default function Header() {
  const {
    isLinkActive,
    isDashboardActive,
    setIsDashboardActive,
    HeaderRef,
    toggleMenu,
  } = useHeader();

  return (
    <>
      <div className="w-full h-20 z-1000 fixed top-0 bg-surface/80 backdrop-blur shadow"></div>
      <header className="container h-20 w-full z-1000 fixed top-0 left-[50%] translate-x-[-50%] flex justify-between items-center lg:gap-5">
        <HeaderLoopingBrand texts={headerBrandList} />
        <nav className="w-full flex justify-between lg:justify-end items-center gap-2">
          <ul role="nav-links-wrapper" className="hidden lg:flex font-semibold">
            {headerLinks.map(({ name, path }) => (
              <HeaderAnchor
                href={path}
                aria-label={name}
                key={path}
                isLinkActive={() => isLinkActive(path)}
                name={name}
              />
            ))}
          </ul>
          <HeaderMenuBtn onClick={toggleMenu} />
          <ThemeSwitchBtn />
        </nav>
      </header>
      <HeaderSideBar
        ref={HeaderRef}
        className={`${isDashboardActive ? "max-w-35" : "max-w-0 opacity-0"} lg:hidden z-2000`}
      >
        <HeaderMenuBtn onClick={toggleMenu} className="mb-4" />
        {headerLinks.map(({ name, path, icon }) => (
          <HeaderSideBarAnchor
            href={path}
            aria-label={name}
            key={path}
            isLinkActive={() => isLinkActive(path)}
            iconName={name}
            icon={icon}
            onClick={() => setIsDashboardActive(false)}
          />
        ))}
        <span className="mt-auto">
          <ThemeSwitchBtn />
        </span>
      </HeaderSideBar>
      <div
        className={`screen-dimmer ${
          isDashboardActive ? "bg-black/80 dark:bg-black/70" : "invisible"
        } block lg:hidden backdrop-blur-sm w-full h-full fixed top-0 z-1000`}
      ></div>
    </>
  );
}
