"use client";

import { usePathname } from "next/navigation";
import { NavLinks } from "@frontend/ts/constants/navLinks";
import Anchor from "./Anchor";

export default function Navigate() {
  const pathName = usePathname();
  const isLinkActive = (path: any) => path === pathName;

  return (
    <div className={`flex flex-col gap-1`}>
      <h2 className="font-semibold text-lg capitalize">navigate</h2>
      {NavLinks.map((link, id) => (
        <Anchor
          key={id}
          href={link.path}
          text={link.name}
          customStyles={
            isLinkActive(link.path)
              ? "bg-primary-light dark:bg-primary px-2"
              : ""
          }
        />
      ))}
    </div>
  );
}
