import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  JSX,
} from "react";

export interface HeaderAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  name?: string;
  isLinkActive: (path: string | undefined) => boolean;
  path?: string;
}

export interface HeaderSideBarAnchorProps extends HeaderAnchorProps {
  icon?: JSX.Element;
  iconName?: string;
}

export type HeaderMenuBtnProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type HeaderSideBarProps = HTMLAttributes<HTMLDivElement>;
