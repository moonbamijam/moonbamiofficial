import { forwardRef, ImgHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const imageVariants = cva("relative w-full h-full rounded-lg overflow-hidden", {
  variants: {
    variant: {
      default: "shadow mb-4",
      bakground: "absolute -z-10",
    },
    size: {
      default: "min-w-[300px] min-h-[300px] max-h-[500px]",
      full: "w-full h-full",
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
});

type ImageProps = ImgHTMLAttributes<HTMLImageElement> &
  VariantProps<typeof imageVariants> & {};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, size, shape, object, ...props }, ref) => {
    return (
      <img
        ref={ref}
        className={cn(
          imageVariants({ variant, size, shape, object, className }),
        )}
        {...props}
      />
    );
  },
);

export { Image, imageVariants };
