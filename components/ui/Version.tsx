import Package from "@package.json";
import { IoIosGitBranch } from "react-icons/io";

type VersionProps = {
  customStyles?: string;
};

export default function Version({ customStyles }: VersionProps) {
  return (
    <span className={`text-sm flex items-center gap-1 ${customStyles}`}>
      <IoIosGitBranch />v{Package.version}
    </span>
  );
}
