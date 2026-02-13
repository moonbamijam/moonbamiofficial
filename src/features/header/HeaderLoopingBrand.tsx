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

  return (
    <Link
      href="/"
      className={`hidden lg:block w-max font-black text-nowrap text-xl xl:text-2xl ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity ease-in-out duration-500 group`}
    >
      <span className="group-hover:text-primary transition-colors">
        {currentText}
      </span>
    </Link>
  );
}
