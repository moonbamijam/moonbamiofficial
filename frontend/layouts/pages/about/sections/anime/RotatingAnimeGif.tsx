"use client";

import { Image } from "@frontend/components/ui/Image";
import { animeGifList } from "@frontend/ts/constants/anime-gif-list";
import { useEffect, useState } from "react";

export default function RotatingAnimeGif({
  interval = 5000,
  transitionDuration = 500,
}: {
  interval?: number;
  transitionDuration?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGif, setCurrentGif] = useState(animeGifList[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!animeGifList || animeGifList.length === 0) {
      return;
    }

    setCurrentGif(animeGifList[currentIndex]);

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % animeGifList.length,
        );
        setIsVisible(true);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [animeGifList, interval, transitionDuration, currentIndex]);

  const transitionStyle = `opacity ${transitionDuration / 1000}s ease-in-out`;

  return (
    <Image
      src={currentGif.url}
      alt={currentGif.title}
      className={`lg:brightness-[15%] dark:lg:brightness-[20%] ${isVisible ? "opacity-100" : "opacity-60"} lg:absolute lg:-z-10 lg:w-full lg:h-full`}
      style={{ transition: transitionStyle }}
      shape="tv"
    />
  );
}
