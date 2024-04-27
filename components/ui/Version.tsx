import Package from "@package.json";
import { IoIosGitBranch } from "react-icons/io";

export default function Version() {
  return (
    <div className="text-sm flex items-center gap-1">
      <IoIosGitBranch />v{Package.version}
    </div>
  );
}
