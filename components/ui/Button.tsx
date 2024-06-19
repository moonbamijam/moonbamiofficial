import Link from "next/link";
import React from "react";

type ButtonProps = {
  buttonType: string;
  id: string;
  text?: string;
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  ariaLabel?: string;
  className?: string;
  refName?: React.LegacyRef<any>;
  onClick?: React.MouseEventHandler<any>;
  children?: React.ReactNode;
};

export default function Button({
  buttonType,
  id,
  text,
  icon,
  href,
  target,
  ariaLabel,
  className,
  refName,
  onClick,
  children,
}: ButtonProps) {
  if (buttonType.toLowerCase() === "button")
    return (
      <button
        id={id}
        ref={refName}
        aria-label={ariaLabel}
        onClick={onClick}
        className={`transform ${className}`}
      >
        {icon}
        <p>{text}</p>
        {children}
      </button>
    );
  else if (buttonType.toLowerCase() === "link")
    return (
      <>
        {href && (
          <Link
            id={id}
            href={href}
            aria-label={ariaLabel}
            target={target}
            className={`w-[150px] h-[50px] rounded-lg border-2 gap-1 flex justify-center items-center capitalize transform ${className}`}
          >
            {icon}
            {text}
          </Link>
        )}
      </>
    );
}
