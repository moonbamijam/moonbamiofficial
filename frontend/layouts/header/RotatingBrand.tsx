import Link from "@node_modules/next/link";
import { useEffect, useState } from "react";

export default function RotatingBrand({
  texts,
  interval = 3000,
  transitionDuration = 500,
}: {
  texts: string[];
  interval?: number;
  transitionDuration?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState("Moonbami");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!texts || texts.length === 0) {
      return;
    }

    setCurrentText(texts[currentIndex]);

    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval, transitionDuration, currentIndex]);

  const transitionStyle = `opacity ${transitionDuration / 1000}s ease-in-out`;

  return (
    <Link
      href="/"
      className="w-full max-w-max flex items-center gap-4 [&>h1]:hover:text-primary"
    >
      <h1
        className={`hidden lg:block font-black text-xl xl:text-2xl ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ transition: transitionStyle }}
      >
        {currentText}
      </h1>
    </Link>
  );
}
