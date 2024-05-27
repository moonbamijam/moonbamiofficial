import { SiGmail } from "react-icons/si";
import Button from "@components/ui/Button";

type EmailBtnProps = {
  href: string;
};

export default function EmailBtn({ href }: EmailBtnProps) {
  return (
    <Button
      buttonType="link"
      href={href}
      target="_blank"
      id="email-btn"
      text="email"
      icon={<SiGmail />}
      customStyles="border-primary bg-primary text-on-primary"
      hoverStyles="hover:bg-primary-dark hover:border-primary-dark"
      mixedStyles="dark:hover:border-primary-dark dark:hover:bg-primary-dark"
    />
  );
}
