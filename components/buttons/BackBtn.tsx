import Button from "@components/ui/Button";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Button
      buttonType="link"
      id="back-button"
      href={href}
      ariaLabel="back"
      icon={<FaBackwardStep />}
      text="back"
      className="bg-surface border-primary text-on-background [&>svg>path]:text-on-surface hover:bg-primary hover:text-on-primary [&>svg>path]:hover:text-on-primary dark:bg-transparent dark:text-white [&>svg>path]:dark:text-white dark:hover:bg-primary"
    />
  );
}
