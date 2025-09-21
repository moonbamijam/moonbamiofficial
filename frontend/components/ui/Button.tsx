import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const buttonVariants = cva(
  "flex justify-center items-center transform px-4 py-3",
  {
    variants: {
      variant: {
        default:
          "gap-2 rounded-lg border-primary bg-primary text-white dark:text-black hover:bg-primaryvariant capitalize font-semibold",
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

export { Button, buttonVariants };
