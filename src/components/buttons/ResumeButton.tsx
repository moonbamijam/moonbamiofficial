import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { buttonVariants } from "../ui/variants";

export default function ResumeButton() {
  return (
    <Link
      href="/resume-v2.pdf"
      download
      target="_blank"
      className={`${buttonVariants({ variant: "ghost" })}`}
    >
      <FaDownload /> Resumé
    </Link>
  );
}
