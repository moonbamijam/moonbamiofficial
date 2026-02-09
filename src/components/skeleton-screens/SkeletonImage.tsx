import { HTMLAttributes } from "react";

type SkeletonImageProps = HTMLAttributes<HTMLDivElement>;

export default function SkeletonImage({ className }: SkeletonImageProps) {
  return (
    <div
      className={`w-full h-full aspect-video rounded-lg overflow-hidden shadow ${className}`}
    ></div>
  );
}
