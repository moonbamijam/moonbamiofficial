import { buttonVariants } from "@components/ui/Button";
import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`${buttonVariants({ variant: "outline" })} [&>svg>path]:text-black [&>svg>path]:hover:text-white dark:bg-transparent dark:text-white [&>svg>path]:dark:text-white`}
    >
      <FaBackwardStep />
      back
    </Link>
  );
}
