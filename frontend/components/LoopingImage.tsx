"use client";

import { Image } from "@frontend/components/ui/Image";
import { useEffect, useState } from "react";

type LoopingImageProps = {
  interval?: number;
  transitionDuration?: number;
  imageList: {
    url: string;
    title: string;
  }[];
};

export default function LoopingImage({
  interval = 5000,
  transitionDuration = 500,
  imageList,
}: LoopingImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGif, setCurrentGif] = useState(imageList[0]);

  useEffect(() => {
    if (!imageList || imageList.length === 0) {
      return;
    }

    setCurrentGif(imageList[currentIndex]);

    const timer = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % imageList.length,
        );
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [imageList, interval, transitionDuration, currentIndex]);

  const transitionStyle = `opacity ${transitionDuration / 1000}s ease-in`;

  return (
    <Image
      src={currentGif.url}
      alt={currentGif.title}
      className="lg:brightness-[20%] lg:dark:brightness-[15%] lg:absolute lg:-z-10 lg:w-full lg:h-full"
      style={{ transition: transitionStyle }}
      shape="tv"
    />
  );
}
