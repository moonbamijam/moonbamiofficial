import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
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
      className={`${buttonVariants()} hover:bg-primary-variant hover:border-primary-variant shadow-lg ${className}`}
    >
      <FiExternalLink className="text-white dark:text-black transition-colors" />
      visit
    </Link>
  );
}
