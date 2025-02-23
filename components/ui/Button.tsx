import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@utils/cn";

const buttonVariants = cva(
  "flex justify-center items-center border-2 transform",
  {
    variants: {
      variant: {
        default:
          "gap-2 rounded-lg border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark capitalize",
        outline:
          "gap-2 rounded-lg border-primary hover:bg-primary hover:text-white capitalize",
        toggle:
          "rounded-full border-transparent hover:border-primary hover:bg-primary text-xl active:scale-75",
        icon: "rounded-full border-transparent text-xl",
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
