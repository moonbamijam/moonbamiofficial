import { forwardRef } from "react";
import { HeaderSideBarProps } from "./header.types";

export const HeaderSideBar = forwardRef<HTMLDivElement, HeaderSideBarProps>(
  ({ children, className }, ref) => {
    return (
      <nav
        ref={ref}
        id="main"
        className={`fixed top-0 left-0 overflow-y-scroll scrollbar-hidden bg-surface backdrop-blur w-full h-screen px-4 py-8 flex flex-col items-center gap-4 shadow transition-[max-width_opacity_visibility] ${className}`}
      >
        {children}
      </nav>
    );
  },
);

HeaderSideBar.displayName = "HeaderSideBar";
