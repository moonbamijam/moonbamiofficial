import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex justify-center items-center transform px-4 py-3 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "gap-2 rounded-lg border-primary bg-primary text-white dark:text-black hover:bg-primary-variant capitalize font-semibold",
        outline:
          "gap-2 rounded-lg border-2 border-primary hover:bg-primary hover:text-white capitalize font-semibold",
        ghost:
          "gap-2 rounded-lg bg-slate-300 dark:bg-slate-600 hover:bg-primary dark:hover:bg-primary dark:text-white capitalize font-semibold",
        toggle: "rounded-full border-transparent hover:bg-primary text-xl",
        icon: "rounded-full text-xl",
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
