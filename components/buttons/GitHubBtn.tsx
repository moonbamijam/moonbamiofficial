import Button from "@components/ui/Button";
import { FaGithub } from "react-icons/fa6";

type GitHubBtnProps = {
  href: string;
  text?: string;
};

export default function GitHubBtn({ href, text }: GitHubBtnProps) {
  return (
    <Button
      buttonType="link"
      id="github-button"
      href={href}
      target="_blank"
      ariaLabel="GitHub"
      icon={<FaGithub />}
      text={text ? text : "GitHub"}
      className="border-primary [&>svg>path]:text-black hover:bg-color-github hover:border-color-github hover:text-on-primary [&>svg>path]:hover:text-on-primary [&>svg>path]:dark:text-white"
    />
  );
}
