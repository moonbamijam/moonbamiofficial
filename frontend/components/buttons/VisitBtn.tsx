import Link from "@node_modules/next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function VisitBtn({ href }: { href: string }) {
  return (
    <Link
      id="visit-button"
      href={href}
      target="_blank"
      aria-label="Website"
      className={`${buttonVariants()} [&>svg>path]:text-white [&>svg>polyline]:text-white [&>svg>line]:text-white hover:bg-primary-dark hover:border-primary-dark`}
    >
      <FiExternalLink />
      visit
    </Link>
  );
}
