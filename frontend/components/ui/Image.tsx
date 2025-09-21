import { forwardRef, ImgHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@frontend/ts/utils/cn";

const imageVariants = cva("relative w-full h-full rounded-lg overflow-hidden", {
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
