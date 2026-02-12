import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center items-center transform cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        default:
          "gap-2 px-4 py-3 rounded-lg border-primary bg-primary text-white dark:text-black hover:bg-primary-variant capitalize font-semibold",
        outline:
          "gap-2 px-4 py-3 rounded-lg border-2 border-primary hover:bg-primary hover:text-white capitalize font-semibold",
        ghost:
          "gap-2 px-4 py-3 rounded-lg bg-surface shadow hover:bg-primary dark:text-white hover:text-white dark:hover:text-black capitalize font-semibold",
        toggle: "rounded-full border-transparent hover:bg-primary text-xl p-3",
        icon: "rounded-full text-xl p-4",
        nav: "capitalize rounded-lg font-semibold px-4 xl:px-6 py-2",
      },
      size: {
        default: "w-[150px] h-[50px]",
        icon: "min-w-[40px] min-h-[40px]",
        auto: "w-full h-full",
        max: "w-max h-max",
        min: "w-min h-min",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const imageVariants = cva(
  "relative w-full h-full rounded-lg overflow-hidden",
  {
    variants: {
      variant: {
        default: "shadow",
        bakground: "absolute -z-10",
        thumbnail: "rounded-xl",
      },
      size: {
        default: "min-w-[300px] min-h-[300px] xl:min-h-[400px]",
        full: "w-full h-full",
        thumbnail: "min-h-[200px] max-h-[600px]",
      },
      shape: {
        square: "aspect-square",
        tv: "aspect-video",
      },
      object: {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      object: "cover",
    },
  },
);

export const paragraphVariants = cva(
  "w-full min-w-[300px] text-base sm:text-lg xl:text-xl text-slate-500 dark:text-slate-400 transition-colors",
  {
    variants: {
      variant: {
        default: "max-w-[600px]",
        wide: "max-w-[800px]",
        brief: "max-w-[500px] line-clamp-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
