import { forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const paragraphVariants = cva(
  "px-2 w-full min-w-[400px] text-base sm:text-lg xl:text-xl text-slate-500 dark:text-slate-400",
  {
    variants: {
      variant: {
        default: "max-w-[600px]",
        wide: "max-w-[800px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof paragraphVariants> & {};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ variant, className }))}
        {...props}
      />
    );
  },
);

export { Paragraph, paragraphVariants };
