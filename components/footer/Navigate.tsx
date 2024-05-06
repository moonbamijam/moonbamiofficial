"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

type AnchorProps = {
  href: string;
  text: string;
  className?: string;
};

const NavLinks = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "about", path: "/about" },
  { id: 3, name: "projects", path: "/projects" },
  { id: 4, name: "timeline", path: "/timeline" },
  { id: 5, name: "more", path: "/more" },
];

const Anchor = ({ href, text, className }: AnchorProps, i: any) => {
  return (
    <Link
      key={i}
      href={href}
      className={`py-1 rounded-lg hover:translate-x-2 active:-translate-x-1 capitalize ${className}`}
    >
      {text}
    </Link>
  );
};

export default function Navigate() {
  const pathName = usePathname();
  const isLinkActive = (path: any) => path === pathName;

  return (
    <>
      <div className="max-w-[100px] flex flex-col">
        <h2 className="font-semibold text-lg capitalize">navigate</h2>
        {NavLinks.map((link) => (
          <Anchor
            key={link.id}
            href={link.path}
            text={link.name}
            className={
              isLinkActive(link.path)
                ? "bg-primary-light dark:bg-primary px-2"
                : ""
            }
          />
        ))}
      </div>
    </>
  );
}
