import { techStackList } from "@/features/tech-stack/TechStackList";

export default function TechStackCarousel() {
  return (
    <div className="w-full h-max overflow-hidden">
      <div className="slider flex text-slate-400 dark:text-slate-500">
        <div className="flex h-max justify-center items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10 xl:gap-12 xl:pr-12 animate-slideTechStack">
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
          className="flex h-max justify-center items-center gap-6 pr-6 sm:gap-8 sm:pr-8 lg:gap-10 lg:pr-10 xl:gap-12 xl:pr-12 animate-slideTechStack"
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
