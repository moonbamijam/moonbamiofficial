import { buttonVariants } from "@frontend/components/ui/Button";
import Link from "next/link";
import { FaBackwardStep } from "react-icons/fa6";

export default function BackBtn({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className={`${buttonVariants({ variant: "ghost" })} [&>svg>path]:text-black [&>svg>path]:dark:text-white  [&>svg>path]:hover:text-white [&>svg>path]:dark:hover:text-black text-black hover:text-white dark:hover:text-black`}
    >
      <FaBackwardStep />
      back
    </Link>
  );
}
