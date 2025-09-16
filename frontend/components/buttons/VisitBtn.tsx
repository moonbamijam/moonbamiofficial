import Link from "@node_modules/next/link";
import { buttonVariants } from "@frontend/components/ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function VisitBtn({
  href,
  className,
}: {
  href: string;
  className?: string;
}) {
  return (
    <Link
      id="visit-button"
      href={href}
      target="_blank"
      aria-label="Website"
      className={`${buttonVariants()} [&>svg>path]:text-white [&>svg>polyline]:text-white [&>svg>line]:text-white  dark:[&>svg>path]:text-black dark:[&>svg>polyline]:text-black dark:[&>svg>line]:text-black hover:bg-primaryvariant hover:border-primaryvariant shadow-lg ${className}`}
    >
      <FiExternalLink />
      visit
    </Link>
  );
}
