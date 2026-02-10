import { techStackList } from "@/features/tech-stack/TechStackList";

export default function TechStackCarousel() {
  return (
    <div className="w-full h-max overflow-hidden">
      <p className="text-center mb-2 text-sm sm:text-base">Tech Stack</p>
      <div className="slider flex text-slate-400 dark:text-slate-500">
        <div className="flex h-[8vw] lg:h-[5vw] justify-center items-center gap-12 pr-12 animate-slideTechStack">
          {techStackList.map((techStack) => (
            <div
              key={techStack.id}
              className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl hover:text-primary"
            >
              {techStack.icon}
            </div>
          ))}
        </div>
        <div
          aria-hidden
          className="flex h-[8vw] lg:h-[5vw] justify-center items-center gap-12 pr-12 animate-slideTechStack"
        >
          {techStackList.map((techStack) => (
            <div
              key={techStack.id}
              className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl hover:text-primary"
            >
              {techStack.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
