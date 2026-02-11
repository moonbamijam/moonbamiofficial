import { FaHome, FaUser } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { MdOutlineTimeline } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

export const headerLinks = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "about", path: "/about", icon: <FaUser /> },
  { name: "experience", path: "/experience", icon: <RiUserStarLine /> },
  { name: "projects", path: "/projects", icon: <GrProjects /> },
  { name: "timeline", path: "/timeline", icon: <MdOutlineTimeline /> },
  { name: "contact", path: "/contact", icon: <BsFillTelephoneFill /> },
];
