import { HTMLAttributes } from "react";
import { projectTechStack } from "./project-tech-stacks";

const techStackDetect = (tech: string) => {
  return projectTechStack.find((t) => {
    return tech.toLowerCase().trim() === t.tech.toLowerCase().trim();
  });
};

interface ProjectStackProps extends HTMLAttributes<HTMLSpanElement> {
  tech: string;
}

export default function ProjectStack({ tech, className }: ProjectStackProps) {
  const techResult = techStackDetect(tech);

  return (
    <span
      className={`w-10 h-fullaspect-square font-semibold text-slate-500 text-3xl flex items-center gap-2 hover:text-primary transition-colors ${className}`}
    >
      {techResult ? techResult.icon : <></>}
    </span>
  );
}
