import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPnpm,
  SiPython,
  SiReact,
  SiSass,
  SiVite,
  SiAdobephotoshop,
  SiKrita,
  SiDjango,
  SiPhp,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import { PiFileCSharp } from "react-icons/pi";

export const techStackList = [
  { tech: "React", icon: <SiReact /> },
  { tech: "Nextjs", icon: <RiNextjsFill /> },
  { tech: "TypeScript", icon: <SiTypescript /> },
  { tech: "JavaScript", icon: <SiJavascript /> },
  { tech: "Tailwind", icon: <SiTailwindcss /> },
  { tech: "Sass", icon: <SiSass /> },
  { tech: "HTML", icon: <FaHtml5 /> },
  { tech: "CSS", icon: <FaCss3Alt /> },
  { tech: "Nodejs", icon: <FaNodeJs /> },
  { tech: "Express", icon: <SiExpress /> },
  { tech: "MongoDB", icon: <SiMongodb /> },
  { tech: "pnpm", icon: <SiPnpm /> },
  { tech: "Python", icon: <SiPython /> },
  { tech: "Vite", icon: <SiVite /> },
  { tech: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
  { tech: "Krita", icon: <SiKrita /> },
  { tech: "Visual Studio", icon: <BiLogoVisualStudio /> },
  { tech: "Csharp", icon: <PiFileCSharp /> },
  { tech: "Django", icon: <SiDjango /> },
  { tech: "PHP", icon: <SiPhp /> },
];

const techStackDetect = (tech: string) => {
  return techStackList.find((t) => {
    return tech.toLowerCase().trim() === t.tech.toLowerCase().trim();
  });
};

export default function ProjectStack({
  tech,
  className,
}: {
  tech: string;
  className?: string;
}) {
  const techResult = techStackDetect(tech);

  return (
    <span
      className={`w-10 h-fullaspect-square font-semibold text-slate-500 text-3xl flex items-center gap-2 ${className}`}
    >
      {techResult ? techResult.icon : <></>}
    </span>
  );
}
