import Package from "@package.json";
import { IoIosGitBranch } from "react-icons/io";

const Version = () => {
  return (
    <div className="flex items-center">
      <IoIosGitBranch />
      {Package.version}
    </div>
  );
};

export default Version;
