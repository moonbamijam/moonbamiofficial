import { CSSProperties } from "@node_modules/@types/react";
import { techStackList } from "@frontend/shared/TechStackList";
import "@frontend/styles/tech-stack-slider.css";

export default function TechStackSlider() {
  return (
    <div className="slider w-full h-max text-slate-400 dark:text-slate-500 overflow-hidden">
      <p className="text-center mb-2 text-sm sm:text-base">Tech Stack</p>
      <div className="items relative w-full flex h-[8vw] lg:h-[5vw] items-center gap-8">
        {techStackList.map((techStack, id) => (
          <div
            key={id}
            style={
              {
                "--position": techStack.position,
                "--items": 17,
              } as CSSProperties
            }
            className="item animate-slideTectStack absolute left-[100%] text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl w-max flex justify-center hover:text-primary"
          >
            {techStack.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
