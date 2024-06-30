import Button from "@components/ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function VisitBtn({ href }: { href: string }) {
  return (
    <Button
      buttonType="link"
      id="visit-button"
      href={href}
      target="_blank"
      ariaLabel="Website"
      icon={<FiExternalLink />}
      text="visit"
      className="bg-primary border-primary text-on-primary [&>svg>path]:text-on-primary [&>svg>polyline]:text-on-primary [&>svg>line]:text-on-primary hover:bg-primary-dark hover:border-primary-dark"
    />
  );
}
