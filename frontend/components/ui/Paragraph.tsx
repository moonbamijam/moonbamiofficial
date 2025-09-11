import { forwardRef, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const paragraphVariants = cva(
  "w-full min-w-[300px] text-base sm:text-lg xl:text-xl text-slate-500 dark:text-slate-400",
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
