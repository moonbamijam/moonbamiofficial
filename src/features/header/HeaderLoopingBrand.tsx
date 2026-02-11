import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderLoopingBrand({
  texts,
  interval = 3000,
  transitionDuration = 500,
}: {
  texts: string[];
  interval?: number;
  transitionDuration?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!texts || texts.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval, transitionDuration, currentIndex]);

  const currentText = texts[currentIndex] || texts[0];

  const transitionStyle = `opacity ${transitionDuration / 1000}s ease-in-out`;

  return (
    <Link
      href="/"
      className="hidden lg:flex w-full min-w-45 items-center gap-4 group"
    >
      <h1
        className={`font-black text-wrap text-xl xl:text-2xl ${isVisible ? "opacity-100" : "opacity-0"} group-hover:text-primary transition-colors`}
        style={{ transition: transitionStyle }}
      >
        {currentText}
      </h1>
    </Link>
  );
}
