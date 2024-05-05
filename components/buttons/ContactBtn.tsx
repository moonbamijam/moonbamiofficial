import Button from "@components/ui/Button";

type ContactBtnProps = {
  href: string;
};

export default function ContactBtn({ href }: ContactBtnProps) {
  return (
    <Button
      buttonType="link"
      href={href}
      id="contact-btn"
      text="contact"
      customStyles="border-primary bg-primary text-on-primary"
      hoverStyles="hover:bg-primary-dark hover:border-primary-dark"
      mixedStyles="dark:hover:border-primary-dark dark:hover:bg-primary-dark"
    />
  );
}
