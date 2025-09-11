import { buttonVariants } from "@frontend/components/ui/Button";
import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`${buttonVariants({ variant: "ghost" })} [&>svg>path]:text-black [&>svg>path]:hover:text-white  hover:text-white dark:text-white [&>svg>path]:dark:text-white`}
    >
      <FaBackwardStep />
      back
    </Link>
  );
}
