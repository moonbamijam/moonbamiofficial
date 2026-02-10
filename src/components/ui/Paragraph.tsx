import { forwardRef, HTMLAttributes } from "react";
import { VariantProps } from "class-variance-authority";
import cn from "@/shared/utils/cn";
import { paragraphVariants } from "./variants";

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

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
