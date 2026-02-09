import { forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import cn from "@/shared/utils/cn";
import { imageVariants } from "./variants";
import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps & VariantProps<typeof imageVariants>;

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, variant, size, shape, ...props }, ref) => {
    return (
      <NextImage
        ref={ref}
        className={cn(imageVariants({ variant, size, shape, className }))}
        {...props}
      />
    );
  },
);

Image.displayName = "Image";

export { Image, imageVariants };
