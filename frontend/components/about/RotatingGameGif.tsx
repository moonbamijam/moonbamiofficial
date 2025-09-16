"use client";

import { useEffect, useState } from "react";
import { Image } from "@frontend/components/ui/Image";
import { gameGifList } from "@frontend/ts/constants/game-gif-list";

export default function RotatingGameGif({
  interval = 5000,
  transitionDuration = 500,
}: {
  interval?: number;
  transitionDuration?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGif, setCurrentGif] = useState(gameGifList[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!gameGifList || gameGifList.length === 0) {
      return;
    }

    setCurrentGif(gameGifList[currentIndex]);

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex(
          (prevIndex: number) => (prevIndex + 1) % gameGifList.length,
        );
        setIsVisible(true);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [gameGifList, interval, transitionDuration, currentIndex]);

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
