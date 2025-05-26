import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const buttonVariants = cva("flex justify-center items-center transform", {
  variants: {
    variant: {
      default:
        "gap-2 rounded-lg border-primary bg-primary text-white hover:bg-primary-dark dark:bg-secondary dark:hover:bg-secondary-variant capitalize font-semibold",
      outline:
        "gap-2 rounded-lg border-2 border-primary hover:bg-primary hover:text-white capitalize font-semibold",
      ghost:
        "gap-2 rounded-lg bg-[#EBEBEB] dark:bg-dm-surface-light hover:bg-primary dark:hover:bg-primary dark:hover:bg-secondary dark:hover:text-black capitalize font-semibold",
      toggle:
        "rounded-full border-transparent hover:border-primary hover:bg-primary text-xl",
      icon: "rounded-full text-xl",
      nav: "capitalize rounded-lg font-semibold px-4 xl:px-6 py-2",
    },
    size: {
      default: "w-[150px] h-[50px]",
      icon: "w-[40px] h-[40px]",
      auto: "w-full h-full",
      max: "w-max h-max",
      min: "w-min h-min",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
