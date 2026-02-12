import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { buttonVariants } from "../ui/variants";

export default function ResumeButton() {
  return (
    <Link
      href="https://drive.google.com/file/d/1CZlNfJm_M-_OGxNFEteoEfe-g-Q19FoJ/view"
      download
      target="_blank"
      className={`${buttonVariants({ variant: "ghost" })}`}
    >
      <FaDownload /> Resumé
    </Link>
  );
}
