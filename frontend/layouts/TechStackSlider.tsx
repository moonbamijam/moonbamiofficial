import { CSSProperties } from "@node_modules/@types/react";
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
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";

import "@frontend/styles/tech-stack-slider.css";

const techStackList = [
  {
    icon: <SiTypescript />,
    position: 1,
  },
  {
    icon: <SiJavascript />,
    position: 2,
  },
  {
    icon: <SiTailwindcss />,
    position: 3,
  },
  {
    icon: <SiExpress />,
    position: 4,
  },
  {
    icon: <FaCss3Alt />,
    position: 5,
  },
  {
    icon: <FaHtml5 />,
    position: 6,
  },
  {
    icon: <SiMongodb />,
    position: 7,
  },
  {
    icon: <SiPnpm />,
    position: 8,
  },
  {
    icon: <SiPython />,
    position: 9,
  },
  {
    icon: <SiReact />,
    position: 10,
  },
  {
    icon: <SiSass />,
    position: 11,
  },
  {
    icon: <SiVite />,
    position: 12,
  },
  {
    icon: <RiNextjsFill />,
    position: 13,
  },
  {
    icon: <FaNodeJs />,
    position: 14,
  },
  {
    icon: <BiLogoVisualStudio />,
    position: 15,
  },
  {
    icon: <SiAdobephotoshop />,
    position: 16,
  },
  {
    icon: <SiKrita />,
    position: 17,
  },
];

export default function TechStackSlider() {
  return (
    <div className="slider w-full h-max text-slate-400 dark:text-slate-500 overflow-hidden">
      <p className="text-center  mb-2">Skill Arsenal</p>
      <div className="items relative w-full flex h-[5vw] items-center gap-8">
        {techStackList.map((techStack, id) => (
          <div
            key={id}
            style={
              {
                "--position": techStack.position,
                "--items": 17,
              } as CSSProperties
            }
            className="item animate-slideTectStack absolute left-[100%] text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl w-max flex justify-center hover:text-primary"
          >
            {techStack.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
