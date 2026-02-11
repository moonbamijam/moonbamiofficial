import { Button } from "@/components/ui/Button";
import { forwardRef } from "react";
import { FaBars } from "react-icons/fa";
import { HeaderMenuBtnProps } from "./header.types";

export const HeaderMenuBtn = forwardRef<HTMLButtonElement, HeaderMenuBtnProps>(
  ({ onClick, className }, ref) => {
    return (
      <Button
        id="menu"
        ref={ref}
        onClick={onClick}
        aria-label="menu"
        variant="toggle"
        size="icon"
        className={`w-max lg:hidden group ${className}`}
      >
        <FaBars className="group-hover:text-white " />
      </Button>
    );
  },
);

HeaderMenuBtn.displayName = "HeaderMenuBtn";
